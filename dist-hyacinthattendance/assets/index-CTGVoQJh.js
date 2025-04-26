function iS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var S_={exports:{}},id={},x_={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var El=Symbol.for("react.element"),oS=Symbol.for("react.portal"),aS=Symbol.for("react.fragment"),lS=Symbol.for("react.strict_mode"),uS=Symbol.for("react.profiler"),cS=Symbol.for("react.provider"),dS=Symbol.for("react.context"),hS=Symbol.for("react.forward_ref"),fS=Symbol.for("react.suspense"),pS=Symbol.for("react.memo"),mS=Symbol.for("react.lazy"),d1=Symbol.iterator;function gS(t){return t===null||typeof t!="object"?null:(t=d1&&t[d1]||t["@@iterator"],typeof t=="function"?t:null)}var A_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R_=Object.assign,C_={};function Ao(t,e,n){this.props=t,this.context=e,this.refs=C_,this.updater=n||A_}Ao.prototype.isReactComponent={};Ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function P_(){}P_.prototype=Ao.prototype;function im(t,e,n){this.props=t,this.context=e,this.refs=C_,this.updater=n||A_}var sm=im.prototype=new P_;sm.constructor=im;R_(sm,Ao.prototype);sm.isPureReactComponent=!0;var h1=Array.isArray,L_=Object.prototype.hasOwnProperty,om={current:null},b_={key:!0,ref:!0,__self:!0,__source:!0};function N_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)L_.call(e,r)&&!b_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:El,type:t,key:s,ref:o,props:i,_owner:om.current}}function yS(t,e){return{$$typeof:El,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function am(t){return typeof t=="object"&&t!==null&&t.$$typeof===El}function vS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var f1=/\/+/g;function Sh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vS(""+t.key):e.toString(36)}function Lu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case El:case oS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sh(o,0):r,h1(i)?(n="",t!=null&&(n=t.replace(f1,"$&/")+"/"),Lu(i,e,n,"",function(c){return c})):i!=null&&(am(i)&&(i=yS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(f1,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",h1(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Sh(s,l);o+=Lu(s,e,n,u,i)}else if(u=gS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Sh(s,l++),o+=Lu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function tu(t,e,n){if(t==null)return t;var r=[],i=0;return Lu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _S(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},bu={transition:null},ES={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:bu,ReactCurrentOwner:om};function O_(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:tu,forEach:function(t,e,n){tu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tu(t,function(){e++}),e},toArray:function(t){return tu(t,function(e){return e})||[]},only:function(t){if(!am(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Ao;ie.Fragment=aS;ie.Profiler=uS;ie.PureComponent=im;ie.StrictMode=lS;ie.Suspense=fS;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ES;ie.act=O_;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=R_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=om.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)L_.call(e,u)&&!b_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:El,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:dS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cS,_context:t},t.Consumer=t};ie.createElement=N_;ie.createFactory=function(t){var e=N_.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:hS,render:t}};ie.isValidElement=am;ie.lazy=function(t){return{$$typeof:mS,_payload:{_status:-1,_result:t},_init:_S}};ie.memo=function(t,e){return{$$typeof:pS,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=bu.transition;bu.transition={};try{t()}finally{bu.transition=e}};ie.unstable_act=O_;ie.useCallback=function(t,e){return St.current.useCallback(t,e)};ie.useContext=function(t){return St.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return St.current.useDeferredValue(t)};ie.useEffect=function(t,e){return St.current.useEffect(t,e)};ie.useId=function(){return St.current.useId()};ie.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return St.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};ie.useRef=function(t){return St.current.useRef(t)};ie.useState=function(t){return St.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return St.current.useTransition()};ie.version="18.3.1";x_.exports=ie;var j=x_.exports;const d=sS(j),kS=iS({__proto__:null,default:d},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wS=j,TS=Symbol.for("react.element"),IS=Symbol.for("react.fragment"),SS=Object.prototype.hasOwnProperty,xS=wS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,AS={key:!0,ref:!0,__self:!0,__source:!0};function D_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)SS.call(e,r)&&!AS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:TS,type:t,key:s,ref:o,props:i,_owner:xS.current}}id.Fragment=IS;id.jsx=D_;id.jsxs=D_;S_.exports=id;var v=S_.exports,j_={exports:{}},Gt={},V_={exports:{}},M_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var Z=z.length;z.push(Q);e:for(;0<Z;){var fe=Z-1>>>1,se=z[fe];if(0<i(se,Q))z[fe]=Q,z[Z]=se,Z=fe;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],Z=z.pop();if(Z!==Q){z[0]=Z;e:for(var fe=0,se=z.length,Ie=se>>>1;fe<Ie;){var Mt=2*(fe+1)-1,At=z[Mt],_t=Mt+1,Rt=z[_t];if(0>i(At,Z))_t<se&&0>i(Rt,At)?(z[fe]=Rt,z[_t]=Z,fe=_t):(z[fe]=At,z[Mt]=Z,fe=Mt);else if(_t<se&&0>i(Rt,Z))z[fe]=Rt,z[_t]=Z,fe=_t;else break e}}return Q}function i(z,Q){var Z=z.sortIndex-Q.sortIndex;return Z!==0?Z:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,E=!1,x=!1,C=!1,L=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=z)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function P(z){if(C=!1,I(z),!x)if(n(u)!==null)x=!0,Oe(O);else{var Q=n(c);Q!==null&&xe(P,Q.startTime-z)}}function O(z,Q){x=!1,C&&(C=!1,_(k),k=-1),E=!0;var Z=g;try{for(I(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||z&&!b());){var fe=m.callback;if(typeof fe=="function"){m.callback=null,g=m.priorityLevel;var se=fe(m.expirationTime<=Q);Q=t.unstable_now(),typeof se=="function"?m.callback=se:m===n(u)&&r(u),I(Q)}else r(u);m=n(u)}if(m!==null)var Ie=!0;else{var Mt=n(c);Mt!==null&&xe(P,Mt.startTime-Q),Ie=!1}return Ie}finally{m=null,g=Z,E=!1}}var M=!1,w=null,k=-1,S=5,A=-1;function b(){return!(t.unstable_now()-A<S)}function N(){if(w!==null){var z=t.unstable_now();A=z;var Q=!0;try{Q=w(!0,z)}finally{Q?R():(M=!1,w=null)}}else M=!1}var R;if(typeof y=="function")R=function(){y(N)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,Je=ge.port2;ge.port1.onmessage=N,R=function(){Je.postMessage(null)}}else R=function(){L(N,0)};function Oe(z){w=z,M||(M=!0,R())}function xe(z,Q){k=L(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){x||E||(x=!0,Oe(O))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var Z=g;g=Q;try{return z()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=g;g=z;try{return Q()}finally{g=Z}},t.unstable_scheduleCallback=function(z,Q,Z){var fe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?fe+Z:fe):Z=fe,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=Z+se,z={id:f++,callback:Q,priorityLevel:z,startTime:Z,expirationTime:se,sortIndex:-1},Z>fe?(z.sortIndex=Z,e(c,z),n(u)===null&&z===n(c)&&(C?(_(k),k=-1):C=!0,xe(P,Z-fe))):(z.sortIndex=se,e(u,z),x||E||(x=!0,Oe(O))),z},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(z){var Q=g;return function(){var Z=g;g=Q;try{return z.apply(this,arguments)}finally{g=Z}}}})(M_);V_.exports=M_;var RS=V_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CS=j,qt=RS;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F_=new Set,Ua={};function Ki(t,e){oo(t,e),oo(t+"Capture",e)}function oo(t,e){for(Ua[t]=e,t=0;t<e.length;t++)F_.add(e[t])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Af=Object.prototype.hasOwnProperty,PS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p1={},m1={};function LS(t){return Af.call(m1,t)?!0:Af.call(p1,t)?!1:PS.test(t)?m1[t]=!0:(p1[t]=!0,!1)}function bS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function NS(t,e,n,r){if(e===null||typeof e>"u"||bS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){st[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];st[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){st[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){st[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){st[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){st[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){st[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){st[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){st[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var lm=/[\-:]([a-z])/g;function um(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lm,um);st[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lm,um);st[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lm,um);st[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){st[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});st.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){st[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function cm(t,e,n,r){var i=st.hasOwnProperty(e)?st[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(NS(e,n,i,r)&&(n=null),r||i===null?LS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fr=CS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nu=Symbol.for("react.element"),js=Symbol.for("react.portal"),Vs=Symbol.for("react.fragment"),dm=Symbol.for("react.strict_mode"),Rf=Symbol.for("react.profiler"),$_=Symbol.for("react.provider"),U_=Symbol.for("react.context"),hm=Symbol.for("react.forward_ref"),Cf=Symbol.for("react.suspense"),Pf=Symbol.for("react.suspense_list"),fm=Symbol.for("react.memo"),Ir=Symbol.for("react.lazy"),W_=Symbol.for("react.offscreen"),g1=Symbol.iterator;function Zo(t){return t===null||typeof t!="object"?null:(t=g1&&t[g1]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,xh;function ca(t){if(xh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xh=e&&e[1]||""}return`
`+xh+t}var Ah=!1;function Rh(t,e){if(!t||Ah)return"";Ah=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ah=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function OS(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=Rh(t.type,!1),t;case 11:return t=Rh(t.type.render,!1),t;case 1:return t=Rh(t.type,!0),t;default:return""}}function Lf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vs:return"Fragment";case js:return"Portal";case Rf:return"Profiler";case dm:return"StrictMode";case Cf:return"Suspense";case Pf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U_:return(t.displayName||"Context")+".Consumer";case $_:return(t._context.displayName||"Context")+".Provider";case hm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fm:return e=t.displayName||null,e!==null?e:Lf(t.type)||"Memo";case Ir:e=t._payload,t=t._init;try{return Lf(t(e))}catch{}}return null}function DS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lf(e);case 8:return e===dm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function B_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jS(t){var e=B_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ru(t){t._valueTracker||(t._valueTracker=jS(t))}function z_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=B_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bf(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function y1(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function H_(t,e){e=e.checked,e!=null&&cm(t,"checked",e,!1)}function Nf(t,e){H_(t,e);var n=Zr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Of(t,e.type,n):e.hasOwnProperty("defaultValue")&&Of(t,e.type,Zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function v1(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Of(t,e,n){(e!=="number"||sc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var da=Array.isArray;function Ys(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Zr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Df(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _1(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(da(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zr(n)}}function q_(t,e){var n=Zr(e.value),r=Zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function E1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function G_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?G_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var iu,K_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(iu=iu||document.createElement("div"),iu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=iu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VS=["Webkit","ms","Moz","O"];Object.keys(Ta).forEach(function(t){VS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ta[e]=Ta[t]})});function Q_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ta.hasOwnProperty(t)&&Ta[t]?(""+e).trim():e+"px"}function Y_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Q_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var MS=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vf(t,e){if(e){if(MS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ff=null;function pm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $f=null,Xs=null,Js=null;function k1(t){if(t=Tl(t)){if(typeof $f!="function")throw Error(B(280));var e=t.stateNode;e&&(e=ud(e),$f(t.stateNode,t.type,e))}}function X_(t){Xs?Js?Js.push(t):Js=[t]:Xs=t}function J_(){if(Xs){var t=Xs,e=Js;if(Js=Xs=null,k1(t),e)for(t=0;t<e.length;t++)k1(e[t])}}function Z_(t,e){return t(e)}function eE(){}var Ch=!1;function tE(t,e,n){if(Ch)return t(e,n);Ch=!0;try{return Z_(t,e,n)}finally{Ch=!1,(Xs!==null||Js!==null)&&(eE(),J_())}}function Ba(t,e){var n=t.stateNode;if(n===null)return null;var r=ud(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Uf=!1;if(ir)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{Uf=!1}function FS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ia=!1,oc=null,ac=!1,Wf=null,$S={onError:function(t){Ia=!0,oc=t}};function US(t,e,n,r,i,s,o,l,u){Ia=!1,oc=null,FS.apply($S,arguments)}function WS(t,e,n,r,i,s,o,l,u){if(US.apply(this,arguments),Ia){if(Ia){var c=oc;Ia=!1,oc=null}else throw Error(B(198));ac||(ac=!0,Wf=c)}}function Qi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function nE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function w1(t){if(Qi(t)!==t)throw Error(B(188))}function BS(t){var e=t.alternate;if(!e){if(e=Qi(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return w1(i),t;if(s===r)return w1(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function rE(t){return t=BS(t),t!==null?iE(t):null}function iE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=iE(t);if(e!==null)return e;t=t.sibling}return null}var sE=qt.unstable_scheduleCallback,T1=qt.unstable_cancelCallback,zS=qt.unstable_shouldYield,HS=qt.unstable_requestPaint,je=qt.unstable_now,qS=qt.unstable_getCurrentPriorityLevel,mm=qt.unstable_ImmediatePriority,oE=qt.unstable_UserBlockingPriority,lc=qt.unstable_NormalPriority,GS=qt.unstable_LowPriority,aE=qt.unstable_IdlePriority,sd=null,Pn=null;function KS(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(sd,t,void 0,(t.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:XS,QS=Math.log,YS=Math.LN2;function XS(t){return t>>>=0,t===0?32:31-(QS(t)/YS|0)|0}var su=64,ou=4194304;function ha(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function uc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ha(l):(s&=o,s!==0&&(r=ha(s)))}else o=n&~i,o!==0?r=ha(o):s!==0&&(r=ha(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-gn(e),i=1<<n,r|=t[n],e&=~i;return r}function JS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-gn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=JS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lE(){var t=su;return su<<=1,!(su&4194240)&&(su=64),t}function Ph(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function kl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gn(e),t[e]=n}function ex(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-gn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-gn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function uE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cE,ym,dE,hE,fE,zf=!1,au=[],Vr=null,Mr=null,Fr=null,za=new Map,Ha=new Map,xr=[],tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function I1(t,e){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function ta(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Tl(e),e!==null&&ym(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nx(t,e,n,r,i){switch(e){case"focusin":return Vr=ta(Vr,t,e,n,r,i),!0;case"dragenter":return Mr=ta(Mr,t,e,n,r,i),!0;case"mouseover":return Fr=ta(Fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return za.set(s,ta(za.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ha.set(s,ta(Ha.get(s)||null,t,e,n,r,i)),!0}return!1}function pE(t){var e=Ii(t.target);if(e!==null){var n=Qi(e);if(n!==null){if(e=n.tag,e===13){if(e=nE(n),e!==null){t.blockedOn=e,fE(t.priority,function(){dE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ff=r,n.target.dispatchEvent(r),Ff=null}else return e=Tl(n),e!==null&&ym(e),t.blockedOn=n,!1;e.shift()}return!0}function S1(t,e,n){Nu(t)&&n.delete(e)}function rx(){zf=!1,Vr!==null&&Nu(Vr)&&(Vr=null),Mr!==null&&Nu(Mr)&&(Mr=null),Fr!==null&&Nu(Fr)&&(Fr=null),za.forEach(S1),Ha.forEach(S1)}function na(t,e){t.blockedOn===e&&(t.blockedOn=null,zf||(zf=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,rx)))}function qa(t){function e(i){return na(i,t)}if(0<au.length){na(au[0],t);for(var n=1;n<au.length;n++){var r=au[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Vr!==null&&na(Vr,t),Mr!==null&&na(Mr,t),Fr!==null&&na(Fr,t),za.forEach(e),Ha.forEach(e),n=0;n<xr.length;n++)r=xr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)pE(n),n.blockedOn===null&&xr.shift()}var Zs=fr.ReactCurrentBatchConfig,cc=!0;function ix(t,e,n,r){var i=pe,s=Zs.transition;Zs.transition=null;try{pe=1,vm(t,e,n,r)}finally{pe=i,Zs.transition=s}}function sx(t,e,n,r){var i=pe,s=Zs.transition;Zs.transition=null;try{pe=4,vm(t,e,n,r)}finally{pe=i,Zs.transition=s}}function vm(t,e,n,r){if(cc){var i=Hf(t,e,n,r);if(i===null)$h(t,e,r,dc,n),I1(t,r);else if(nx(i,t,e,n,r))r.stopPropagation();else if(I1(t,r),e&4&&-1<tx.indexOf(t)){for(;i!==null;){var s=Tl(i);if(s!==null&&cE(s),s=Hf(t,e,n,r),s===null&&$h(t,e,r,dc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $h(t,e,r,null,n)}}var dc=null;function Hf(t,e,n,r){if(dc=null,t=pm(r),t=Ii(t),t!==null)if(e=Qi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=nE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dc=t,null}function mE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qS()){case mm:return 1;case oE:return 4;case lc:case GS:return 16;case aE:return 536870912;default:return 16}default:return 16}}var Lr=null,_m=null,Ou=null;function gE(){if(Ou)return Ou;var t,e=_m,n=e.length,r,i="value"in Lr?Lr.value:Lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ou=i.slice(t,1<r?1-r:void 0)}function Du(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lu(){return!0}function x1(){return!1}function Kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lu:x1,this.isPropagationStopped=x1,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lu)},persist:function(){},isPersistent:lu}),e}var Ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Em=Kt(Ro),wl=Ce({},Ro,{view:0,detail:0}),ox=Kt(wl),Lh,bh,ra,od=Ce({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:km,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(Lh=t.screenX-ra.screenX,bh=t.screenY-ra.screenY):bh=Lh=0,ra=t),Lh)},movementY:function(t){return"movementY"in t?t.movementY:bh}}),A1=Kt(od),ax=Ce({},od,{dataTransfer:0}),lx=Kt(ax),ux=Ce({},wl,{relatedTarget:0}),Nh=Kt(ux),cx=Ce({},Ro,{animationName:0,elapsedTime:0,pseudoElement:0}),dx=Kt(cx),hx=Ce({},Ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fx=Kt(hx),px=Ce({},Ro,{data:0}),R1=Kt(px),mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yx[t])?!!e[t]:!1}function km(){return vx}var _x=Ce({},wl,{key:function(t){if(t.key){var e=mx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Du(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:km,charCode:function(t){return t.type==="keypress"?Du(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Du(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ex=Kt(_x),kx=Ce({},od,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),C1=Kt(kx),wx=Ce({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:km}),Tx=Kt(wx),Ix=Ce({},Ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sx=Kt(Ix),xx=Ce({},od,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ax=Kt(xx),Rx=[9,13,27,32],wm=ir&&"CompositionEvent"in window,Sa=null;ir&&"documentMode"in document&&(Sa=document.documentMode);var Cx=ir&&"TextEvent"in window&&!Sa,yE=ir&&(!wm||Sa&&8<Sa&&11>=Sa),P1=" ",L1=!1;function vE(t,e){switch(t){case"keyup":return Rx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _E(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function Px(t,e){switch(t){case"compositionend":return _E(e);case"keypress":return e.which!==32?null:(L1=!0,P1);case"textInput":return t=e.data,t===P1&&L1?null:t;default:return null}}function Lx(t,e){if(Ms)return t==="compositionend"||!wm&&vE(t,e)?(t=gE(),Ou=_m=Lr=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yE&&e.locale!=="ko"?null:e.data;default:return null}}var bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function b1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bx[t.type]:e==="textarea"}function EE(t,e,n,r){X_(r),e=hc(e,"onChange"),0<e.length&&(n=new Em("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xa=null,Ga=null;function Nx(t){LE(t,0)}function ad(t){var e=Us(t);if(z_(e))return t}function Ox(t,e){if(t==="change")return e}var kE=!1;if(ir){var Oh;if(ir){var Dh="oninput"in document;if(!Dh){var N1=document.createElement("div");N1.setAttribute("oninput","return;"),Dh=typeof N1.oninput=="function"}Oh=Dh}else Oh=!1;kE=Oh&&(!document.documentMode||9<document.documentMode)}function O1(){xa&&(xa.detachEvent("onpropertychange",wE),Ga=xa=null)}function wE(t){if(t.propertyName==="value"&&ad(Ga)){var e=[];EE(e,Ga,t,pm(t)),tE(Nx,e)}}function Dx(t,e,n){t==="focusin"?(O1(),xa=e,Ga=n,xa.attachEvent("onpropertychange",wE)):t==="focusout"&&O1()}function jx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ad(Ga)}function Vx(t,e){if(t==="click")return ad(e)}function Mx(t,e){if(t==="input"||t==="change")return ad(e)}function Fx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _n=typeof Object.is=="function"?Object.is:Fx;function Ka(t,e){if(_n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Af.call(e,i)||!_n(t[i],e[i]))return!1}return!0}function D1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function j1(t,e){var n=D1(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=D1(n)}}function TE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?TE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function IE(){for(var t=window,e=sc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sc(t.document)}return e}function Tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $x(t){var e=IE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&TE(n.ownerDocument.documentElement,n)){if(r!==null&&Tm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=j1(n,s);var o=j1(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ux=ir&&"documentMode"in document&&11>=document.documentMode,Fs=null,qf=null,Aa=null,Gf=!1;function V1(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gf||Fs==null||Fs!==sc(r)||(r=Fs,"selectionStart"in r&&Tm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Aa&&Ka(Aa,r)||(Aa=r,r=hc(qf,"onSelect"),0<r.length&&(e=new Em("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fs)))}function uu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:uu("Animation","AnimationEnd"),animationiteration:uu("Animation","AnimationIteration"),animationstart:uu("Animation","AnimationStart"),transitionend:uu("Transition","TransitionEnd")},jh={},SE={};ir&&(SE=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function ld(t){if(jh[t])return jh[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in SE)return jh[t]=e[n];return t}var xE=ld("animationend"),AE=ld("animationiteration"),RE=ld("animationstart"),CE=ld("transitionend"),PE=new Map,M1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(t,e){PE.set(t,e),Ki(e,[t])}for(var Vh=0;Vh<M1.length;Vh++){var Mh=M1[Vh],Wx=Mh.toLowerCase(),Bx=Mh[0].toUpperCase()+Mh.slice(1);ii(Wx,"on"+Bx)}ii(xE,"onAnimationEnd");ii(AE,"onAnimationIteration");ii(RE,"onAnimationStart");ii("dblclick","onDoubleClick");ii("focusin","onFocus");ii("focusout","onBlur");ii(CE,"onTransitionEnd");oo("onMouseEnter",["mouseout","mouseover"]);oo("onMouseLeave",["mouseout","mouseover"]);oo("onPointerEnter",["pointerout","pointerover"]);oo("onPointerLeave",["pointerout","pointerover"]);Ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zx=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function F1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,WS(r,e,void 0,t),t.currentTarget=null}function LE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;F1(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;F1(i,l,c),s=u}}}if(ac)throw t=Wf,ac=!1,Wf=null,t}function Ee(t,e){var n=e[Jf];n===void 0&&(n=e[Jf]=new Set);var r=t+"__bubble";n.has(r)||(bE(e,t,2,!1),n.add(r))}function Fh(t,e,n){var r=0;e&&(r|=4),bE(n,t,r,e)}var cu="_reactListening"+Math.random().toString(36).slice(2);function Qa(t){if(!t[cu]){t[cu]=!0,F_.forEach(function(n){n!=="selectionchange"&&(zx.has(n)||Fh(n,!1,t),Fh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cu]||(e[cu]=!0,Fh("selectionchange",!1,e))}}function bE(t,e,n,r){switch(mE(e)){case 1:var i=ix;break;case 4:i=sx;break;default:i=vm}n=i.bind(null,e,n,t),i=void 0,!Uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $h(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ii(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}tE(function(){var c=s,f=pm(n),m=[];e:{var g=PE.get(t);if(g!==void 0){var E=Em,x=t;switch(t){case"keypress":if(Du(n)===0)break e;case"keydown":case"keyup":E=Ex;break;case"focusin":x="focus",E=Nh;break;case"focusout":x="blur",E=Nh;break;case"beforeblur":case"afterblur":E=Nh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=A1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Tx;break;case xE:case AE:case RE:E=dx;break;case CE:E=Sx;break;case"scroll":E=ox;break;case"wheel":E=Ax;break;case"copy":case"cut":case"paste":E=fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=C1}var C=(e&4)!==0,L=!C&&t==="scroll",_=C?g!==null?g+"Capture":null:g;C=[];for(var y=c,I;y!==null;){I=y;var P=I.stateNode;if(I.tag===5&&P!==null&&(I=P,_!==null&&(P=Ba(y,_),P!=null&&C.push(Ya(y,P,I)))),L)break;y=y.return}0<C.length&&(g=new E(g,x,null,n,f),m.push({event:g,listeners:C}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",g&&n!==Ff&&(x=n.relatedTarget||n.fromElement)&&(Ii(x)||x[sr]))break e;if((E||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,E?(x=n.relatedTarget||n.toElement,E=c,x=x?Ii(x):null,x!==null&&(L=Qi(x),x!==L||x.tag!==5&&x.tag!==6)&&(x=null)):(E=null,x=c),E!==x)){if(C=A1,P="onMouseLeave",_="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(C=C1,P="onPointerLeave",_="onPointerEnter",y="pointer"),L=E==null?g:Us(E),I=x==null?g:Us(x),g=new C(P,y+"leave",E,n,f),g.target=L,g.relatedTarget=I,P=null,Ii(f)===c&&(C=new C(_,y+"enter",x,n,f),C.target=I,C.relatedTarget=L,P=C),L=P,E&&x)t:{for(C=E,_=x,y=0,I=C;I;I=Ss(I))y++;for(I=0,P=_;P;P=Ss(P))I++;for(;0<y-I;)C=Ss(C),y--;for(;0<I-y;)_=Ss(_),I--;for(;y--;){if(C===_||_!==null&&C===_.alternate)break t;C=Ss(C),_=Ss(_)}C=null}else C=null;E!==null&&$1(m,g,E,C,!1),x!==null&&L!==null&&$1(m,L,x,C,!0)}}e:{if(g=c?Us(c):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var O=Ox;else if(b1(g))if(kE)O=Mx;else{O=jx;var M=Dx}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(O=Vx);if(O&&(O=O(t,c))){EE(m,O,n,f);break e}M&&M(t,g,c),t==="focusout"&&(M=g._wrapperState)&&M.controlled&&g.type==="number"&&Of(g,"number",g.value)}switch(M=c?Us(c):window,t){case"focusin":(b1(M)||M.contentEditable==="true")&&(Fs=M,qf=c,Aa=null);break;case"focusout":Aa=qf=Fs=null;break;case"mousedown":Gf=!0;break;case"contextmenu":case"mouseup":case"dragend":Gf=!1,V1(m,n,f);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":V1(m,n,f)}var w;if(wm)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Ms?vE(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(yE&&n.locale!=="ko"&&(Ms||k!=="onCompositionStart"?k==="onCompositionEnd"&&Ms&&(w=gE()):(Lr=f,_m="value"in Lr?Lr.value:Lr.textContent,Ms=!0)),M=hc(c,k),0<M.length&&(k=new R1(k,t,null,n,f),m.push({event:k,listeners:M}),w?k.data=w:(w=_E(n),w!==null&&(k.data=w)))),(w=Cx?Px(t,n):Lx(t,n))&&(c=hc(c,"onBeforeInput"),0<c.length&&(f=new R1("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=w))}LE(m,e)})}function Ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ba(t,n),s!=null&&r.unshift(Ya(t,s,i)),s=Ba(t,e),s!=null&&r.push(Ya(t,s,i))),t=t.return}return r}function Ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $1(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Ba(n,s),u!=null&&o.unshift(Ya(n,u,l))):i||(u=Ba(n,s),u!=null&&o.push(Ya(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Hx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function U1(t){return(typeof t=="string"?t:""+t).replace(Hx,`
`).replace(qx,"")}function du(t,e,n){if(e=U1(e),U1(t)!==e&&n)throw Error(B(425))}function fc(){}var Kf=null,Qf=null;function Yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xf=typeof setTimeout=="function"?setTimeout:void 0,Gx=typeof clearTimeout=="function"?clearTimeout:void 0,W1=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof W1<"u"?function(t){return W1.resolve(null).then(t).catch(Qx)}:Xf;function Qx(t){setTimeout(function(){throw t})}function Uh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qa(e)}function $r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function B1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Co=Math.random().toString(36).slice(2),An="__reactFiber$"+Co,Xa="__reactProps$"+Co,sr="__reactContainer$"+Co,Jf="__reactEvents$"+Co,Yx="__reactListeners$"+Co,Xx="__reactHandles$"+Co;function Ii(t){var e=t[An];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sr]||n[An]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=B1(t);t!==null;){if(n=t[An])return n;t=B1(t)}return e}t=n,n=t.parentNode}return null}function Tl(t){return t=t[An]||t[sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function ud(t){return t[Xa]||null}var Zf=[],Ws=-1;function si(t){return{current:t}}function Te(t){0>Ws||(t.current=Zf[Ws],Zf[Ws]=null,Ws--)}function ve(t,e){Ws++,Zf[Ws]=t.current,t.current=e}var ei={},yt=si(ei),Nt=si(!1),Di=ei;function ao(t,e){var n=t.type.contextTypes;if(!n)return ei;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ot(t){return t=t.childContextTypes,t!=null}function pc(){Te(Nt),Te(yt)}function z1(t,e,n){if(yt.current!==ei)throw Error(B(168));ve(yt,e),ve(Nt,n)}function NE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,DS(t)||"Unknown",i));return Ce({},n,r)}function mc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ei,Di=yt.current,ve(yt,t),ve(Nt,Nt.current),!0}function H1(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=NE(t,e,Di),r.__reactInternalMemoizedMergedChildContext=t,Te(Nt),Te(yt),ve(yt,t)):Te(Nt),ve(Nt,n)}var qn=null,cd=!1,Wh=!1;function OE(t){qn===null?qn=[t]:qn.push(t)}function Jx(t){cd=!0,OE(t)}function oi(){if(!Wh&&qn!==null){Wh=!0;var t=0,e=pe;try{var n=qn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qn=null,cd=!1}catch(i){throw qn!==null&&(qn=qn.slice(t+1)),sE(mm,oi),i}finally{pe=e,Wh=!1}}return null}var Bs=[],zs=0,gc=null,yc=0,Jt=[],Zt=0,ji=null,Kn=1,Qn="";function _i(t,e){Bs[zs++]=yc,Bs[zs++]=gc,gc=t,yc=e}function DE(t,e,n){Jt[Zt++]=Kn,Jt[Zt++]=Qn,Jt[Zt++]=ji,ji=t;var r=Kn;t=Qn;var i=32-gn(r)-1;r&=~(1<<i),n+=1;var s=32-gn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Kn=1<<32-gn(e)+i|n<<i|r,Qn=s+t}else Kn=1<<s|n<<i|r,Qn=t}function Im(t){t.return!==null&&(_i(t,1),DE(t,1,0))}function Sm(t){for(;t===gc;)gc=Bs[--zs],Bs[zs]=null,yc=Bs[--zs],Bs[zs]=null;for(;t===ji;)ji=Jt[--Zt],Jt[Zt]=null,Qn=Jt[--Zt],Jt[Zt]=null,Kn=Jt[--Zt],Jt[Zt]=null}var zt=null,Wt=null,Se=!1,fn=null;function jE(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function q1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zt=t,Wt=$r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zt=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ji!==null?{id:Kn,overflow:Qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zt=t,Wt=null,!0):!1;default:return!1}}function ep(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tp(t){if(Se){var e=Wt;if(e){var n=e;if(!q1(t,e)){if(ep(t))throw Error(B(418));e=$r(n.nextSibling);var r=zt;e&&q1(t,e)?jE(r,n):(t.flags=t.flags&-4097|2,Se=!1,zt=t)}}else{if(ep(t))throw Error(B(418));t.flags=t.flags&-4097|2,Se=!1,zt=t}}}function G1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zt=t}function hu(t){if(t!==zt)return!1;if(!Se)return G1(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yf(t.type,t.memoizedProps)),e&&(e=Wt)){if(ep(t))throw VE(),Error(B(418));for(;e;)jE(t,e),e=$r(e.nextSibling)}if(G1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=$r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=zt?$r(t.stateNode.nextSibling):null;return!0}function VE(){for(var t=Wt;t;)t=$r(t.nextSibling)}function lo(){Wt=zt=null,Se=!1}function xm(t){fn===null?fn=[t]:fn.push(t)}var Zx=fr.ReactCurrentBatchConfig;function ia(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function fu(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function K1(t){var e=t._init;return e(t._payload)}function ME(t){function e(_,y){if(t){var I=_.deletions;I===null?(_.deletions=[y],_.flags|=16):I.push(y)}}function n(_,y){if(!t)return null;for(;y!==null;)e(_,y),y=y.sibling;return null}function r(_,y){for(_=new Map;y!==null;)y.key!==null?_.set(y.key,y):_.set(y.index,y),y=y.sibling;return _}function i(_,y){return _=zr(_,y),_.index=0,_.sibling=null,_}function s(_,y,I){return _.index=I,t?(I=_.alternate,I!==null?(I=I.index,I<y?(_.flags|=2,y):I):(_.flags|=2,y)):(_.flags|=1048576,y)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,y,I,P){return y===null||y.tag!==6?(y=Qh(I,_.mode,P),y.return=_,y):(y=i(y,I),y.return=_,y)}function u(_,y,I,P){var O=I.type;return O===Vs?f(_,y,I.props.children,P,I.key):y!==null&&(y.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ir&&K1(O)===y.type)?(P=i(y,I.props),P.ref=ia(_,y,I),P.return=_,P):(P=Wu(I.type,I.key,I.props,null,_.mode,P),P.ref=ia(_,y,I),P.return=_,P)}function c(_,y,I,P){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=Yh(I,_.mode,P),y.return=_,y):(y=i(y,I.children||[]),y.return=_,y)}function f(_,y,I,P,O){return y===null||y.tag!==7?(y=Li(I,_.mode,P,O),y.return=_,y):(y=i(y,I),y.return=_,y)}function m(_,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Qh(""+y,_.mode,I),y.return=_,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nu:return I=Wu(y.type,y.key,y.props,null,_.mode,I),I.ref=ia(_,null,y),I.return=_,I;case js:return y=Yh(y,_.mode,I),y.return=_,y;case Ir:var P=y._init;return m(_,P(y._payload),I)}if(da(y)||Zo(y))return y=Li(y,_.mode,I,null),y.return=_,y;fu(_,y)}return null}function g(_,y,I,P){var O=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return O!==null?null:l(_,y,""+I,P);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case nu:return I.key===O?u(_,y,I,P):null;case js:return I.key===O?c(_,y,I,P):null;case Ir:return O=I._init,g(_,y,O(I._payload),P)}if(da(I)||Zo(I))return O!==null?null:f(_,y,I,P,null);fu(_,I)}return null}function E(_,y,I,P,O){if(typeof P=="string"&&P!==""||typeof P=="number")return _=_.get(I)||null,l(y,_,""+P,O);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case nu:return _=_.get(P.key===null?I:P.key)||null,u(y,_,P,O);case js:return _=_.get(P.key===null?I:P.key)||null,c(y,_,P,O);case Ir:var M=P._init;return E(_,y,I,M(P._payload),O)}if(da(P)||Zo(P))return _=_.get(I)||null,f(y,_,P,O,null);fu(y,P)}return null}function x(_,y,I,P){for(var O=null,M=null,w=y,k=y=0,S=null;w!==null&&k<I.length;k++){w.index>k?(S=w,w=null):S=w.sibling;var A=g(_,w,I[k],P);if(A===null){w===null&&(w=S);break}t&&w&&A.alternate===null&&e(_,w),y=s(A,y,k),M===null?O=A:M.sibling=A,M=A,w=S}if(k===I.length)return n(_,w),Se&&_i(_,k),O;if(w===null){for(;k<I.length;k++)w=m(_,I[k],P),w!==null&&(y=s(w,y,k),M===null?O=w:M.sibling=w,M=w);return Se&&_i(_,k),O}for(w=r(_,w);k<I.length;k++)S=E(w,_,k,I[k],P),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?k:S.key),y=s(S,y,k),M===null?O=S:M.sibling=S,M=S);return t&&w.forEach(function(b){return e(_,b)}),Se&&_i(_,k),O}function C(_,y,I,P){var O=Zo(I);if(typeof O!="function")throw Error(B(150));if(I=O.call(I),I==null)throw Error(B(151));for(var M=O=null,w=y,k=y=0,S=null,A=I.next();w!==null&&!A.done;k++,A=I.next()){w.index>k?(S=w,w=null):S=w.sibling;var b=g(_,w,A.value,P);if(b===null){w===null&&(w=S);break}t&&w&&b.alternate===null&&e(_,w),y=s(b,y,k),M===null?O=b:M.sibling=b,M=b,w=S}if(A.done)return n(_,w),Se&&_i(_,k),O;if(w===null){for(;!A.done;k++,A=I.next())A=m(_,A.value,P),A!==null&&(y=s(A,y,k),M===null?O=A:M.sibling=A,M=A);return Se&&_i(_,k),O}for(w=r(_,w);!A.done;k++,A=I.next())A=E(w,_,k,A.value,P),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?k:A.key),y=s(A,y,k),M===null?O=A:M.sibling=A,M=A);return t&&w.forEach(function(N){return e(_,N)}),Se&&_i(_,k),O}function L(_,y,I,P){if(typeof I=="object"&&I!==null&&I.type===Vs&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case nu:e:{for(var O=I.key,M=y;M!==null;){if(M.key===O){if(O=I.type,O===Vs){if(M.tag===7){n(_,M.sibling),y=i(M,I.props.children),y.return=_,_=y;break e}}else if(M.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ir&&K1(O)===M.type){n(_,M.sibling),y=i(M,I.props),y.ref=ia(_,M,I),y.return=_,_=y;break e}n(_,M);break}else e(_,M);M=M.sibling}I.type===Vs?(y=Li(I.props.children,_.mode,P,I.key),y.return=_,_=y):(P=Wu(I.type,I.key,I.props,null,_.mode,P),P.ref=ia(_,y,I),P.return=_,_=P)}return o(_);case js:e:{for(M=I.key;y!==null;){if(y.key===M)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){n(_,y.sibling),y=i(y,I.children||[]),y.return=_,_=y;break e}else{n(_,y);break}else e(_,y);y=y.sibling}y=Yh(I,_.mode,P),y.return=_,_=y}return o(_);case Ir:return M=I._init,L(_,y,M(I._payload),P)}if(da(I))return x(_,y,I,P);if(Zo(I))return C(_,y,I,P);fu(_,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(n(_,y.sibling),y=i(y,I),y.return=_,_=y):(n(_,y),y=Qh(I,_.mode,P),y.return=_,_=y),o(_)):n(_,y)}return L}var uo=ME(!0),FE=ME(!1),vc=si(null),_c=null,Hs=null,Am=null;function Rm(){Am=Hs=_c=null}function Cm(t){var e=vc.current;Te(vc),t._currentValue=e}function np(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function eo(t,e){_c=t,Am=Hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Lt=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(Am!==t)if(t={context:t,memoizedValue:e,next:null},Hs===null){if(_c===null)throw Error(B(308));Hs=t,_c.dependencies={lanes:0,firstContext:t}}else Hs=Hs.next=t;return e}var Si=null;function Pm(t){Si===null?Si=[t]:Si.push(t)}function $E(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Pm(e)):(n.next=i.next,i.next=n),e.interleaved=n,or(t,r)}function or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sr=!1;function Lm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function UE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,or(t,n)}return i=r.interleaved,i===null?(e.next=e,Pm(r)):(e.next=i.next,i.next=e),r.interleaved=e,or(t,n)}function ju(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gm(t,n)}}function Q1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ec(t,e,n,r){var i=t.updateQueue;Sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=c=u=null,l=s;do{var g=l.lane,E=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,C=l;switch(g=e,E=n,C.tag){case 1:if(x=C.payload,typeof x=="function"){m=x.call(E,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=C.payload,g=typeof x=="function"?x.call(E,m,g):x,g==null)break e;m=Ce({},m,g);break e;case 2:Sr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else E={eventTime:E,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=E,u=m):f=f.next=E,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Mi|=o,t.lanes=o,t.memoizedState=m}}function Y1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Il={},Ln=si(Il),Ja=si(Il),Za=si(Il);function xi(t){if(t===Il)throw Error(B(174));return t}function bm(t,e){switch(ve(Za,e),ve(Ja,t),ve(Ln,Il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jf(e,t)}Te(Ln),ve(Ln,e)}function co(){Te(Ln),Te(Ja),Te(Za)}function WE(t){xi(Za.current);var e=xi(Ln.current),n=jf(e,t.type);e!==n&&(ve(Ja,t),ve(Ln,n))}function Nm(t){Ja.current===t&&(Te(Ln),Te(Ja))}var Ae=si(0);function kc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bh=[];function Om(){for(var t=0;t<Bh.length;t++)Bh[t]._workInProgressVersionPrimary=null;Bh.length=0}var Vu=fr.ReactCurrentDispatcher,zh=fr.ReactCurrentBatchConfig,Vi=0,Re=null,He=null,Ke=null,wc=!1,Ra=!1,el=0,e8=0;function ct(){throw Error(B(321))}function Dm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_n(t[n],e[n]))return!1;return!0}function jm(t,e,n,r,i,s){if(Vi=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vu.current=t===null||t.memoizedState===null?i8:s8,t=n(r,i),Ra){s=0;do{if(Ra=!1,el=0,25<=s)throw Error(B(301));s+=1,Ke=He=null,e.updateQueue=null,Vu.current=o8,t=n(r,i)}while(Ra)}if(Vu.current=Tc,e=He!==null&&He.next!==null,Vi=0,Ke=He=Re=null,wc=!1,e)throw Error(B(300));return t}function Vm(){var t=el!==0;return el=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Re.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function sn(){if(He===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Ke===null?Re.memoizedState:Ke.next;if(e!==null)Ke=e,He=t;else{if(t===null)throw Error(B(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ke===null?Re.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function tl(t,e){return typeof e=="function"?e(t):e}function Hh(t){var e=sn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Vi&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Re.lanes|=f,Mi|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,_n(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,Mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qh(t){var e=sn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);_n(s,e.memoizedState)||(Lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function BE(){}function zE(t,e){var n=Re,r=sn(),i=e(),s=!_n(r.memoizedState,i);if(s&&(r.memoizedState=i,Lt=!0),r=r.queue,Mm(GE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,nl(9,qE.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error(B(349));Vi&30||HE(n,e,i)}return i}function HE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qE(t,e,n,r){e.value=n,e.getSnapshot=r,KE(e)&&QE(t)}function GE(t,e,n){return n(function(){KE(e)&&QE(t)})}function KE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_n(t,n)}catch{return!0}}function QE(t){var e=or(t,1);e!==null&&yn(e,t,1,-1)}function X1(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:t},e.queue=t,t=t.dispatch=r8.bind(null,Re,t),[e.memoizedState,t]}function nl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function YE(){return sn().memoizedState}function Mu(t,e,n,r){var i=Sn();Re.flags|=t,i.memoizedState=nl(1|e,n,void 0,r===void 0?null:r)}function dd(t,e,n,r){var i=sn();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&Dm(r,o.deps)){i.memoizedState=nl(e,n,s,r);return}}Re.flags|=t,i.memoizedState=nl(1|e,n,s,r)}function J1(t,e){return Mu(8390656,8,t,e)}function Mm(t,e){return dd(2048,8,t,e)}function XE(t,e){return dd(4,2,t,e)}function JE(t,e){return dd(4,4,t,e)}function ZE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ek(t,e,n){return n=n!=null?n.concat([t]):null,dd(4,4,ZE.bind(null,e,t),n)}function Fm(){}function tk(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function nk(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function rk(t,e,n){return Vi&21?(_n(n,e)||(n=lE(),Re.lanes|=n,Mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=n)}function t8(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=zh.transition;zh.transition={};try{t(!1),e()}finally{pe=n,zh.transition=r}}function ik(){return sn().memoizedState}function n8(t,e,n){var r=Br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sk(t))ok(e,n);else if(n=$E(t,e,n,r),n!==null){var i=Tt();yn(n,t,r,i),ak(n,e,r)}}function r8(t,e,n){var r=Br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sk(t))ok(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,_n(l,o)){var u=e.interleaved;u===null?(i.next=i,Pm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=$E(t,e,i,r),n!==null&&(i=Tt(),yn(n,t,r,i),ak(n,e,r))}}function sk(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function ok(t,e){Ra=wc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ak(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gm(t,n)}}var Tc={readContext:rn,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},i8={readContext:rn,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:J1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4194308,4,ZE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mu(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=n8.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:X1,useDebugValue:Fm,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=X1(!1),e=t[0];return t=t8.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=Sn();if(Se){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),Xe===null)throw Error(B(349));Vi&30||HE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,J1(GE.bind(null,r,s,t),[t]),r.flags|=2048,nl(9,qE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Sn(),e=Xe.identifierPrefix;if(Se){var n=Qn,r=Kn;n=(r&~(1<<32-gn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=el++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=e8++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},s8={readContext:rn,useCallback:tk,useContext:rn,useEffect:Mm,useImperativeHandle:ek,useInsertionEffect:XE,useLayoutEffect:JE,useMemo:nk,useReducer:Hh,useRef:YE,useState:function(){return Hh(tl)},useDebugValue:Fm,useDeferredValue:function(t){var e=sn();return rk(e,He.memoizedState,t)},useTransition:function(){var t=Hh(tl)[0],e=sn().memoizedState;return[t,e]},useMutableSource:BE,useSyncExternalStore:zE,useId:ik,unstable_isNewReconciler:!1},o8={readContext:rn,useCallback:tk,useContext:rn,useEffect:Mm,useImperativeHandle:ek,useInsertionEffect:XE,useLayoutEffect:JE,useMemo:nk,useReducer:qh,useRef:YE,useState:function(){return qh(tl)},useDebugValue:Fm,useDeferredValue:function(t){var e=sn();return He===null?e.memoizedState=t:rk(e,He.memoizedState,t)},useTransition:function(){var t=qh(tl)[0],e=sn().memoizedState;return[t,e]},useMutableSource:BE,useSyncExternalStore:zE,useId:ik,unstable_isNewReconciler:!1};function dn(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hd={isMounted:function(t){return(t=t._reactInternals)?Qi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=Br(t),s=tr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(yn(e,t,i,r),ju(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=Br(t),s=tr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(yn(e,t,i,r),ju(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tt(),r=Br(t),i=tr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ur(t,i,r),e!==null&&(yn(e,t,r,n),ju(e,t,r))}};function Z1(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ka(n,r)||!Ka(i,s):!0}function lk(t,e,n){var r=!1,i=ei,s=e.contextType;return typeof s=="object"&&s!==null?s=rn(s):(i=Ot(e)?Di:yt.current,r=e.contextTypes,s=(r=r!=null)?ao(t,i):ei),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function e0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hd.enqueueReplaceState(e,e.state,null)}function ip(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Lm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rn(s):(s=Ot(e)?Di:yt.current,i.context=ao(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hd.enqueueReplaceState(i,i.state,null),Ec(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ho(t,e){try{var n="",r=e;do n+=OS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Gh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var a8=typeof WeakMap=="function"?WeakMap:Map;function uk(t,e,n){n=tr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Sc||(Sc=!0,mp=r),sp(t,e)},n}function ck(t,e,n){n=tr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){sp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sp(t,e),typeof r!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function t0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new a8;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=k8.bind(null,t,e,n),e.then(t,t))}function n0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function r0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=tr(-1,1),e.tag=2,Ur(n,e,1))),n.lanes|=1),t)}var l8=fr.ReactCurrentOwner,Lt=!1;function wt(t,e,n,r){e.child=t===null?FE(e,null,n,r):uo(e,t.child,n,r)}function i0(t,e,n,r,i){n=n.render;var s=e.ref;return eo(e,i),r=jm(t,e,n,r,s,i),n=Vm(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ar(t,e,i)):(Se&&n&&Im(e),e.flags|=1,wt(t,e,r,i),e.child)}function s0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Gm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dk(t,e,s,r,i)):(t=Wu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ka,n(o,r)&&t.ref===e.ref)return ar(t,e,i)}return e.flags|=1,t=zr(s,r),t.ref=e.ref,t.return=e,e.child=t}function dk(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ka(s,r)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Lt=!0);else return e.lanes=t.lanes,ar(t,e,i)}return op(t,e,n,r,i)}function hk(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Gs,Ut),Ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(Gs,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(Gs,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(Gs,Ut),Ut|=r;return wt(t,e,i,n),e.child}function fk(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function op(t,e,n,r,i){var s=Ot(n)?Di:yt.current;return s=ao(e,s),eo(e,i),n=jm(t,e,n,r,s,i),r=Vm(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ar(t,e,i)):(Se&&r&&Im(e),e.flags|=1,wt(t,e,n,i),e.child)}function o0(t,e,n,r,i){if(Ot(n)){var s=!0;mc(e)}else s=!1;if(eo(e,i),e.stateNode===null)Fu(t,e),lk(e,n,r),ip(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=rn(c):(c=Ot(n)?Di:yt.current,c=ao(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&e0(e,o,r,c),Sr=!1;var g=e.memoizedState;o.state=g,Ec(e,r,o,i),u=e.memoizedState,l!==r||g!==u||Nt.current||Sr?(typeof f=="function"&&(rp(e,n,f,r),u=e.memoizedState),(l=Sr||Z1(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,UE(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:dn(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=rn(u):(u=Ot(n)?Di:yt.current,u=ao(e,u));var E=n.getDerivedStateFromProps;(f=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&e0(e,o,r,u),Sr=!1,g=e.memoizedState,o.state=g,Ec(e,r,o,i);var x=e.memoizedState;l!==m||g!==x||Nt.current||Sr?(typeof E=="function"&&(rp(e,n,E,r),x=e.memoizedState),(c=Sr||Z1(e,n,c,r,g,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return ap(t,e,n,r,s,i)}function ap(t,e,n,r,i,s){fk(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&H1(e,n,!1),ar(t,e,s);r=e.stateNode,l8.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=uo(e,t.child,null,s),e.child=uo(e,null,l,s)):wt(t,e,l,s),e.memoizedState=r.state,i&&H1(e,n,!0),e.child}function pk(t){var e=t.stateNode;e.pendingContext?z1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&z1(t,e.context,!1),bm(t,e.containerInfo)}function a0(t,e,n,r,i){return lo(),xm(i),e.flags|=256,wt(t,e,n,r),e.child}var lp={dehydrated:null,treeContext:null,retryLane:0};function up(t){return{baseLanes:t,cachePool:null,transitions:null}}function mk(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(Ae,i&1),t===null)return tp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=md(o,r,0,null),t=Li(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=up(n),e.memoizedState=lp,t):$m(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return u8(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=zr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=zr(l,s):(s=Li(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?up(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=lp,r}return s=t.child,t=s.sibling,r=zr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $m(t,e){return e=md({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pu(t,e,n,r){return r!==null&&xm(r),uo(e,t.child,null,n),t=$m(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function u8(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Gh(Error(B(422))),pu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=md({mode:"visible",children:r.children},i,0,null),s=Li(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&uo(e,t.child,null,o),e.child.memoizedState=up(o),e.memoizedState=lp,s);if(!(e.mode&1))return pu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(B(419)),r=Gh(s,r,void 0),pu(t,e,o,r)}if(l=(o&t.childLanes)!==0,Lt||l){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,or(t,i),yn(r,t,i,-1))}return qm(),r=Gh(Error(B(421))),pu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=w8.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Wt=$r(i.nextSibling),zt=e,Se=!0,fn=null,t!==null&&(Jt[Zt++]=Kn,Jt[Zt++]=Qn,Jt[Zt++]=ji,Kn=t.id,Qn=t.overflow,ji=e),e=$m(e,r.children),e.flags|=4096,e)}function l0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),np(t.return,e,n)}function Kh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gk(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&l0(t,n,e);else if(t.tag===19)l0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&kc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Kh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&kc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Kh(e,!0,n,null,s);break;case"together":Kh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function c8(t,e,n){switch(e.tag){case 3:pk(e),lo();break;case 5:WE(e);break;case 1:Ot(e.type)&&mc(e);break;case 4:bm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(vc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?mk(t,e,n):(ve(Ae,Ae.current&1),t=ar(t,e,n),t!==null?t.sibling:null);ve(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gk(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,hk(t,e,n)}return ar(t,e,n)}var yk,cp,vk,_k;yk=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cp=function(){};vk=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xi(Ln.current);var s=null;switch(n){case"input":i=bf(t,i),r=bf(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=Df(t,i),r=Df(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fc)}Vf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ua.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ee("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};_k=function(t,e,n,r){n!==r&&(e.flags|=4)};function sa(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function d8(t,e,n){var r=e.pendingProps;switch(Sm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(e),null;case 1:return Ot(e.type)&&pc(),dt(e),null;case 3:return r=e.stateNode,co(),Te(Nt),Te(yt),Om(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(hu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(vp(fn),fn=null))),cp(t,e),dt(e),null;case 5:Nm(e);var i=xi(Za.current);if(n=e.type,t!==null&&e.stateNode!=null)vk(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return dt(e),null}if(t=xi(Ln.current),hu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[An]=e,r[Xa]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<fa.length;i++)Ee(fa[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":y1(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":_1(r,s),Ee("invalid",r)}Vf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&du(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&du(r.textContent,l,t),i=["children",""+l]):Ua.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":ru(r),v1(r,s,!0);break;case"textarea":ru(r),E1(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=G_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[An]=e,t[Xa]=r,yk(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mf(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<fa.length;i++)Ee(fa[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":y1(t,r),i=bf(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":_1(t,r),i=Df(t,r),Ee("invalid",t);break;default:i=r}Vf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Y_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&K_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wa(t,u):typeof u=="number"&&Wa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ua.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ee("scroll",t):u!=null&&cm(t,s,u,o))}switch(n){case"input":ru(t),v1(t,r,!1);break;case"textarea":ru(t),E1(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Zr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ys(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ys(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dt(e),null;case 6:if(t&&e.stateNode!=null)_k(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=xi(Za.current),xi(Ln.current),hu(e)){if(r=e.stateNode,n=e.memoizedProps,r[An]=e,(s=r.nodeValue!==n)&&(t=zt,t!==null))switch(t.tag){case 3:du(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&du(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[An]=e,e.stateNode=r}return dt(e),null;case 13:if(Te(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Wt!==null&&e.mode&1&&!(e.flags&128))VE(),lo(),e.flags|=98560,s=!1;else if(s=hu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[An]=e}else lo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dt(e),s=!1}else fn!==null&&(vp(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?qe===0&&(qe=3):qm())),e.updateQueue!==null&&(e.flags|=4),dt(e),null);case 4:return co(),cp(t,e),t===null&&Qa(e.stateNode.containerInfo),dt(e),null;case 10:return Cm(e.type._context),dt(e),null;case 17:return Ot(e.type)&&pc(),dt(e),null;case 19:if(Te(Ae),s=e.memoizedState,s===null)return dt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)sa(s,!1);else{if(qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=kc(t),o!==null){for(e.flags|=128,sa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&je()>fo&&(e.flags|=128,r=!0,sa(s,!1),e.lanes=4194304)}else{if(!r)if(t=kc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return dt(e),null}else 2*je()-s.renderingStartTime>fo&&n!==1073741824&&(e.flags|=128,r=!0,sa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,n=Ae.current,ve(Ae,r?n&1|2:n&1),e):(dt(e),null);case 22:case 23:return Hm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(dt(e),e.subtreeFlags&6&&(e.flags|=8192)):dt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function h8(t,e){switch(Sm(e),e.tag){case 1:return Ot(e.type)&&pc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return co(),Te(Nt),Te(yt),Om(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nm(e),null;case 13:if(Te(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));lo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ae),null;case 4:return co(),null;case 10:return Cm(e.type._context),null;case 22:case 23:return Hm(),null;case 24:return null;default:return null}}var mu=!1,pt=!1,f8=typeof WeakSet=="function"?WeakSet:Set,G=null;function qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function dp(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var u0=!1;function p8(t,e){if(Kf=cc,t=IE(),Tm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var E;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(E=m.firstChild)!==null;)g=m,m=E;for(;;){if(m===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++f===r&&(u=o),(E=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qf={focusedElem:t,selectionRange:n},cc=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var C=x.memoizedProps,L=x.memoizedState,_=e.stateNode,y=_.getSnapshotBeforeUpdate(e.elementType===e.type?C:dn(e.type,C),L);_.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(P){Ne(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return x=u0,u0=!1,x}function Ca(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&dp(e,n,s)}i=i.next}while(i!==r)}}function fd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function hp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ek(t){var e=t.alternate;e!==null&&(t.alternate=null,Ek(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[An],delete e[Xa],delete e[Jf],delete e[Yx],delete e[Xx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kk(t){return t.tag===5||t.tag===3||t.tag===4}function c0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kk(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fc));else if(r!==4&&(t=t.child,t!==null))for(fp(t,e,n),t=t.sibling;t!==null;)fp(t,e,n),t=t.sibling}function pp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(pp(t,e,n),t=t.sibling;t!==null;)pp(t,e,n),t=t.sibling}var et=null,hn=!1;function _r(t,e,n){for(n=n.child;n!==null;)wk(t,e,n),n=n.sibling}function wk(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(sd,n)}catch{}switch(n.tag){case 5:pt||qs(n,e);case 6:var r=et,i=hn;et=null,_r(t,e,n),et=r,hn=i,et!==null&&(hn?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(hn?(t=et,n=n.stateNode,t.nodeType===8?Uh(t.parentNode,n):t.nodeType===1&&Uh(t,n),qa(t)):Uh(et,n.stateNode));break;case 4:r=et,i=hn,et=n.stateNode.containerInfo,hn=!0,_r(t,e,n),et=r,hn=i;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dp(n,e,o),i=i.next}while(i!==r)}_r(t,e,n);break;case 1:if(!pt&&(qs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,e,l)}_r(t,e,n);break;case 21:_r(t,e,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,_r(t,e,n),pt=r):_r(t,e,n);break;default:_r(t,e,n)}}function d0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new f8),e.forEach(function(r){var i=T8.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:et=l.stateNode,hn=!1;break e;case 3:et=l.stateNode.containerInfo,hn=!0;break e;case 4:et=l.stateNode.containerInfo,hn=!0;break e}l=l.return}if(et===null)throw Error(B(160));wk(s,o,i),et=null,hn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ne(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tk(e,t),e=e.sibling}function Tk(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),In(t),r&4){try{Ca(3,t,t.return),fd(3,t)}catch(C){Ne(t,t.return,C)}try{Ca(5,t,t.return)}catch(C){Ne(t,t.return,C)}}break;case 1:cn(e,t),In(t),r&512&&n!==null&&qs(n,n.return);break;case 5:if(cn(e,t),In(t),r&512&&n!==null&&qs(n,n.return),t.flags&32){var i=t.stateNode;try{Wa(i,"")}catch(C){Ne(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&H_(i,s),Mf(l,o);var c=Mf(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Y_(i,m):f==="dangerouslySetInnerHTML"?K_(i,m):f==="children"?Wa(i,m):cm(i,f,m,c)}switch(l){case"input":Nf(i,s);break;case"textarea":q_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Ys(i,!!s.multiple,E,!1):g!==!!s.multiple&&(s.defaultValue!=null?Ys(i,!!s.multiple,s.defaultValue,!0):Ys(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xa]=s}catch(C){Ne(t,t.return,C)}}break;case 6:if(cn(e,t),In(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){Ne(t,t.return,C)}}break;case 3:if(cn(e,t),In(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qa(e.containerInfo)}catch(C){Ne(t,t.return,C)}break;case 4:cn(e,t),In(t);break;case 13:cn(e,t),In(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bm=je())),r&4&&d0(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(pt=(c=pt)||f,cn(e,t),pt=c):cn(e,t),In(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(G=t,f=t.child;f!==null;){for(m=G=f;G!==null;){switch(g=G,E=g.child,g.tag){case 0:case 11:case 14:case 15:Ca(4,g,g.return);break;case 1:qs(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(C){Ne(r,n,C)}}break;case 5:qs(g,g.return);break;case 22:if(g.memoizedState!==null){f0(m);continue}}E!==null?(E.return=g,G=E):f0(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Q_("display",o))}catch(C){Ne(t,t.return,C)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(C){Ne(t,t.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:cn(e,t),In(t),r&4&&d0(t);break;case 21:break;default:cn(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kk(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wa(i,""),r.flags&=-33);var s=c0(t);pp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=c0(t);fp(t,l,o);break;default:throw Error(B(161))}}catch(u){Ne(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function m8(t,e,n){G=t,Ik(t)}function Ik(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||mu;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||pt;l=mu;var c=pt;if(mu=o,(pt=u)&&!c)for(G=i;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?p0(i):u!==null?(u.return=o,G=u):p0(i);for(;s!==null;)G=s,Ik(s),s=s.sibling;G=i,mu=l,pt=c}h0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):h0(t)}}function h0(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pt||fd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Y1(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Y1(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&qa(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}pt||e.flags&512&&hp(e)}catch(g){Ne(e,e.return,g)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function f0(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function p0(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fd(4,e)}catch(u){Ne(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ne(e,i,u)}}var s=e.return;try{hp(e)}catch(u){Ne(e,s,u)}break;case 5:var o=e.return;try{hp(e)}catch(u){Ne(e,o,u)}}}catch(u){Ne(e,e.return,u)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var g8=Math.ceil,Ic=fr.ReactCurrentDispatcher,Um=fr.ReactCurrentOwner,tn=fr.ReactCurrentBatchConfig,ue=0,Xe=null,Ue=null,rt=0,Ut=0,Gs=si(0),qe=0,rl=null,Mi=0,pd=0,Wm=0,Pa=null,Ct=null,Bm=0,fo=1/0,zn=null,Sc=!1,mp=null,Wr=null,gu=!1,br=null,xc=0,La=0,gp=null,$u=-1,Uu=0;function Tt(){return ue&6?je():$u!==-1?$u:$u=je()}function Br(t){return t.mode&1?ue&2&&rt!==0?rt&-rt:Zx.transition!==null?(Uu===0&&(Uu=lE()),Uu):(t=pe,t!==0||(t=window.event,t=t===void 0?16:mE(t.type)),t):1}function yn(t,e,n,r){if(50<La)throw La=0,gp=null,Error(B(185));kl(t,n,r),(!(ue&2)||t!==Xe)&&(t===Xe&&(!(ue&2)&&(pd|=n),qe===4&&Ar(t,rt)),Dt(t,r),n===1&&ue===0&&!(e.mode&1)&&(fo=je()+500,cd&&oi()))}function Dt(t,e){var n=t.callbackNode;ZS(t,e);var r=uc(t,t===Xe?rt:0);if(r===0)n!==null&&T1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&T1(n),e===1)t.tag===0?Jx(m0.bind(null,t)):OE(m0.bind(null,t)),Kx(function(){!(ue&6)&&oi()}),n=null;else{switch(uE(r)){case 1:n=mm;break;case 4:n=oE;break;case 16:n=lc;break;case 536870912:n=aE;break;default:n=lc}n=bk(n,Sk.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Sk(t,e){if($u=-1,Uu=0,ue&6)throw Error(B(327));var n=t.callbackNode;if(to()&&t.callbackNode!==n)return null;var r=uc(t,t===Xe?rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ac(t,r);else{e=r;var i=ue;ue|=2;var s=Ak();(Xe!==t||rt!==e)&&(zn=null,fo=je()+500,Pi(t,e));do try{_8();break}catch(l){xk(t,l)}while(!0);Rm(),Ic.current=s,ue=i,Ue!==null?e=0:(Xe=null,rt=0,e=qe)}if(e!==0){if(e===2&&(i=Bf(t),i!==0&&(r=i,e=yp(t,i))),e===1)throw n=rl,Pi(t,0),Ar(t,r),Dt(t,je()),n;if(e===6)Ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!y8(i)&&(e=Ac(t,r),e===2&&(s=Bf(t),s!==0&&(r=s,e=yp(t,s))),e===1))throw n=rl,Pi(t,0),Ar(t,r),Dt(t,je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Ei(t,Ct,zn);break;case 3:if(Ar(t,r),(r&130023424)===r&&(e=Bm+500-je(),10<e)){if(uc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Xf(Ei.bind(null,t,Ct,zn),e);break}Ei(t,Ct,zn);break;case 4:if(Ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-gn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*g8(r/1960))-r,10<r){t.timeoutHandle=Xf(Ei.bind(null,t,Ct,zn),r);break}Ei(t,Ct,zn);break;case 5:Ei(t,Ct,zn);break;default:throw Error(B(329))}}}return Dt(t,je()),t.callbackNode===n?Sk.bind(null,t):null}function yp(t,e){var n=Pa;return t.current.memoizedState.isDehydrated&&(Pi(t,e).flags|=256),t=Ac(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&vp(e)),t}function vp(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function y8(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_n(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~Wm,e&=~pd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gn(e),r=1<<n;t[n]=-1,e&=~r}}function m0(t){if(ue&6)throw Error(B(327));to();var e=uc(t,0);if(!(e&1))return Dt(t,je()),null;var n=Ac(t,e);if(t.tag!==0&&n===2){var r=Bf(t);r!==0&&(e=r,n=yp(t,r))}if(n===1)throw n=rl,Pi(t,0),Ar(t,e),Dt(t,je()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ei(t,Ct,zn),Dt(t,je()),null}function zm(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(fo=je()+500,cd&&oi())}}function Fi(t){br!==null&&br.tag===0&&!(ue&6)&&to();var e=ue;ue|=1;var n=tn.transition,r=pe;try{if(tn.transition=null,pe=1,t)return t()}finally{pe=r,tn.transition=n,ue=e,!(ue&6)&&oi()}}function Hm(){Ut=Gs.current,Te(Gs)}function Pi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Gx(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(Sm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pc();break;case 3:co(),Te(Nt),Te(yt),Om();break;case 5:Nm(r);break;case 4:co();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:Cm(r.type._context);break;case 22:case 23:Hm()}n=n.return}if(Xe=t,Ue=t=zr(t.current,null),rt=Ut=e,qe=0,rl=null,Wm=pd=Mi=0,Ct=Pa=null,Si!==null){for(e=0;e<Si.length;e++)if(n=Si[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Si=null}return t}function xk(t,e){do{var n=Ue;try{if(Rm(),Vu.current=Tc,wc){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wc=!1}if(Vi=0,Ke=He=Re=null,Ra=!1,el=0,Um.current=null,n===null||n.return===null){qe=1,rl=e,Ue=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=rt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var E=n0(o);if(E!==null){E.flags&=-257,r0(E,o,l,s,e),E.mode&1&&t0(s,c,e),e=E,u=c;var x=e.updateQueue;if(x===null){var C=new Set;C.add(u),e.updateQueue=C}else x.add(u);break e}else{if(!(e&1)){t0(s,c,e),qm();break e}u=Error(B(426))}}else if(Se&&l.mode&1){var L=n0(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),r0(L,o,l,s,e),xm(ho(u,l));break e}}s=u=ho(u,l),qe!==4&&(qe=2),Pa===null?Pa=[s]:Pa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=uk(s,u,e);Q1(s,_);break e;case 1:l=u;var y=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Wr===null||!Wr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=ck(s,l,e);Q1(s,P);break e}}s=s.return}while(s!==null)}Ck(n)}catch(O){e=O,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function Ak(){var t=Ic.current;return Ic.current=Tc,t===null?Tc:t}function qm(){(qe===0||qe===3||qe===2)&&(qe=4),Xe===null||!(Mi&268435455)&&!(pd&268435455)||Ar(Xe,rt)}function Ac(t,e){var n=ue;ue|=2;var r=Ak();(Xe!==t||rt!==e)&&(zn=null,Pi(t,e));do try{v8();break}catch(i){xk(t,i)}while(!0);if(Rm(),ue=n,Ic.current=r,Ue!==null)throw Error(B(261));return Xe=null,rt=0,qe}function v8(){for(;Ue!==null;)Rk(Ue)}function _8(){for(;Ue!==null&&!zS();)Rk(Ue)}function Rk(t){var e=Lk(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?Ck(t):Ue=e,Um.current=null}function Ck(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=h8(n,e),n!==null){n.flags&=32767,Ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,Ue=null;return}}else if(n=d8(n,e,Ut),n!==null){Ue=n;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);qe===0&&(qe=5)}function Ei(t,e,n){var r=pe,i=tn.transition;try{tn.transition=null,pe=1,E8(t,e,n,r)}finally{tn.transition=i,pe=r}return null}function E8(t,e,n,r){do to();while(br!==null);if(ue&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ex(t,s),t===Xe&&(Ue=Xe=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gu||(gu=!0,bk(lc,function(){return to(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var o=pe;pe=1;var l=ue;ue|=4,Um.current=null,p8(t,n),Tk(n,t),$x(Qf),cc=!!Kf,Qf=Kf=null,t.current=n,m8(n),HS(),ue=l,pe=o,tn.transition=s}else t.current=n;if(gu&&(gu=!1,br=t,xc=i),s=t.pendingLanes,s===0&&(Wr=null),KS(n.stateNode),Dt(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sc)throw Sc=!1,t=mp,mp=null,t;return xc&1&&t.tag!==0&&to(),s=t.pendingLanes,s&1?t===gp?La++:(La=0,gp=t):La=0,oi(),null}function to(){if(br!==null){var t=uE(xc),e=tn.transition,n=pe;try{if(tn.transition=null,pe=16>t?16:t,br===null)var r=!1;else{if(t=br,br=null,xc=0,ue&6)throw Error(B(331));var i=ue;for(ue|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(G=c;G!==null;){var f=G;switch(f.tag){case 0:case 11:case 15:Ca(8,f,s)}var m=f.child;if(m!==null)m.return=f,G=m;else for(;G!==null;){f=G;var g=f.sibling,E=f.return;if(Ek(f),f===c){G=null;break}if(g!==null){g.return=E,G=g;break}G=E}}}var x=s.alternate;if(x!==null){var C=x.child;if(C!==null){x.child=null;do{var L=C.sibling;C.sibling=null,C=L}while(C!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ca(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,G=_;break e}G=s.return}}var y=t.current;for(G=y;G!==null;){o=G;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,G=I;else e:for(o=y;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fd(9,l)}}catch(O){Ne(l,l.return,O)}if(l===o){G=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,G=P;break e}G=l.return}}if(ue=i,oi(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(sd,t)}catch{}r=!0}return r}finally{pe=n,tn.transition=e}}return!1}function g0(t,e,n){e=ho(n,e),e=uk(t,e,1),t=Ur(t,e,1),e=Tt(),t!==null&&(kl(t,1,e),Dt(t,e))}function Ne(t,e,n){if(t.tag===3)g0(t,t,n);else for(;e!==null;){if(e.tag===3){g0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wr===null||!Wr.has(r))){t=ho(n,t),t=ck(e,t,1),e=Ur(e,t,1),t=Tt(),e!==null&&(kl(e,1,t),Dt(e,t));break}}e=e.return}}function k8(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Tt(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(rt&n)===n&&(qe===4||qe===3&&(rt&130023424)===rt&&500>je()-Bm?Pi(t,0):Wm|=n),Dt(t,e)}function Pk(t,e){e===0&&(t.mode&1?(e=ou,ou<<=1,!(ou&130023424)&&(ou=4194304)):e=1);var n=Tt();t=or(t,e),t!==null&&(kl(t,e,n),Dt(t,n))}function w8(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Pk(t,n)}function T8(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),Pk(t,n)}var Lk;Lk=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Lt=!1,c8(t,e,n);Lt=!!(t.flags&131072)}else Lt=!1,Se&&e.flags&1048576&&DE(e,yc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fu(t,e),t=e.pendingProps;var i=ao(e,yt.current);eo(e,n),i=jm(null,e,r,t,i,n);var s=Vm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ot(r)?(s=!0,mc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lm(e),i.updater=hd,e.stateNode=i,i._reactInternals=e,ip(e,r,t,n),e=ap(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&Im(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=S8(r),t=dn(r,t),i){case 0:e=op(null,e,r,t,n);break e;case 1:e=o0(null,e,r,t,n);break e;case 11:e=i0(null,e,r,t,n);break e;case 14:e=s0(null,e,r,dn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),op(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),o0(t,e,r,i,n);case 3:e:{if(pk(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,UE(t,e),Ec(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ho(Error(B(423)),e),e=a0(t,e,r,n,i);break e}else if(r!==i){i=ho(Error(B(424)),e),e=a0(t,e,r,n,i);break e}else for(Wt=$r(e.stateNode.containerInfo.firstChild),zt=e,Se=!0,fn=null,n=FE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lo(),r===i){e=ar(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return WE(e),t===null&&tp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Yf(r,i)?o=null:s!==null&&Yf(r,s)&&(e.flags|=32),fk(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&tp(e),null;case 13:return mk(t,e,n);case 4:return bm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=uo(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),i0(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(vc,r._currentValue),r._currentValue=o,s!==null)if(_n(s.value,o)){if(s.children===i.children&&!Nt.current){e=ar(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=tr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),np(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),np(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,eo(e,n),i=rn(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=dn(r,e.pendingProps),i=dn(r.type,i),s0(t,e,r,i,n);case 15:return dk(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Fu(t,e),e.tag=1,Ot(r)?(t=!0,mc(e)):t=!1,eo(e,n),lk(e,r,i),ip(e,r,i,n),ap(null,e,r,!0,t,n);case 19:return gk(t,e,n);case 22:return hk(t,e,n)}throw Error(B(156,e.tag))};function bk(t,e){return sE(t,e)}function I8(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new I8(t,e,n,r)}function Gm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function S8(t){if(typeof t=="function")return Gm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hm)return 11;if(t===fm)return 14}return 2}function zr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vs:return Li(n.children,i,s,e);case dm:o=8,i|=8;break;case Rf:return t=en(12,n,e,i|2),t.elementType=Rf,t.lanes=s,t;case Cf:return t=en(13,n,e,i),t.elementType=Cf,t.lanes=s,t;case Pf:return t=en(19,n,e,i),t.elementType=Pf,t.lanes=s,t;case W_:return md(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $_:o=10;break e;case U_:o=9;break e;case hm:o=11;break e;case fm:o=14;break e;case Ir:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=en(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Li(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function md(t,e,n,r){return t=en(22,t,r,e),t.elementType=W_,t.lanes=n,t.stateNode={isHidden:!1},t}function Qh(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Yh(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function x8(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ph(0),this.expirationTimes=Ph(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ph(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Km(t,e,n,r,i,s,o,l,u){return t=new x8(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=en(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lm(s),t}function A8(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:js,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Nk(t){if(!t)return ei;t=t._reactInternals;e:{if(Qi(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Ot(n))return NE(t,n,e)}return e}function Ok(t,e,n,r,i,s,o,l,u){return t=Km(n,r,!0,t,i,s,o,l,u),t.context=Nk(null),n=t.current,r=Tt(),i=Br(n),s=tr(r,i),s.callback=e??null,Ur(n,s,i),t.current.lanes=i,kl(t,i,r),Dt(t,r),t}function gd(t,e,n,r){var i=e.current,s=Tt(),o=Br(i);return n=Nk(n),e.context===null?e.context=n:e.pendingContext=n,e=tr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ur(i,e,o),t!==null&&(yn(t,i,o,s),ju(t,i,o)),o}function Rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function y0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qm(t,e){y0(t,e),(t=t.alternate)&&y0(t,e)}function R8(){return null}var Dk=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ym(t){this._internalRoot=t}yd.prototype.render=Ym.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));gd(t,e,null,null)};yd.prototype.unmount=Ym.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fi(function(){gd(null,t,null,null)}),e[sr]=null}};function yd(t){this._internalRoot=t}yd.prototype.unstable_scheduleHydration=function(t){if(t){var e=hE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xr.length&&e!==0&&e<xr[n].priority;n++);xr.splice(n,0,t),n===0&&pE(t)}};function Xm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function v0(){}function C8(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Rc(o);s.call(c)}}var o=Ok(e,r,t,0,null,!1,!1,"",v0);return t._reactRootContainer=o,t[sr]=o.current,Qa(t.nodeType===8?t.parentNode:t),Fi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Rc(u);l.call(c)}}var u=Km(t,0,!1,null,null,!1,!1,"",v0);return t._reactRootContainer=u,t[sr]=u.current,Qa(t.nodeType===8?t.parentNode:t),Fi(function(){gd(e,u,n,r)}),u}function _d(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Rc(o);l.call(u)}}gd(e,o,t,i)}else o=C8(n,e,t,i,r);return Rc(o)}cE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ha(e.pendingLanes);n!==0&&(gm(e,n|1),Dt(e,je()),!(ue&6)&&(fo=je()+500,oi()))}break;case 13:Fi(function(){var r=or(t,1);if(r!==null){var i=Tt();yn(r,t,1,i)}}),Qm(t,1)}};ym=function(t){if(t.tag===13){var e=or(t,134217728);if(e!==null){var n=Tt();yn(e,t,134217728,n)}Qm(t,134217728)}};dE=function(t){if(t.tag===13){var e=Br(t),n=or(t,e);if(n!==null){var r=Tt();yn(n,t,e,r)}Qm(t,e)}};hE=function(){return pe};fE=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};$f=function(t,e,n){switch(e){case"input":if(Nf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ud(r);if(!i)throw Error(B(90));z_(r),Nf(r,i)}}}break;case"textarea":q_(t,n);break;case"select":e=n.value,e!=null&&Ys(t,!!n.multiple,e,!1)}};Z_=zm;eE=Fi;var P8={usingClientEntryPoint:!1,Events:[Tl,Us,ud,X_,J_,zm]},oa={findFiberByHostInstance:Ii,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L8={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rE(t),t===null?null:t.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||R8,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{sd=yu.inject(L8),Pn=yu}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P8;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xm(e))throw Error(B(200));return A8(t,e,null,n)};Gt.createRoot=function(t,e){if(!Xm(t))throw Error(B(299));var n=!1,r="",i=Dk;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Km(t,1,!1,null,null,n,!1,r,i),t[sr]=e.current,Qa(t.nodeType===8?t.parentNode:t),new Ym(e)};Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=rE(e),t=t===null?null:t.stateNode,t};Gt.flushSync=function(t){return Fi(t)};Gt.hydrate=function(t,e,n){if(!vd(e))throw Error(B(200));return _d(null,t,e,!0,n)};Gt.hydrateRoot=function(t,e,n){if(!Xm(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Dk;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ok(e,null,t,1,n??null,i,!1,s,o),t[sr]=e.current,Qa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yd(e)};Gt.render=function(t,e,n){if(!vd(e))throw Error(B(200));return _d(null,t,e,!1,n)};Gt.unmountComponentAtNode=function(t){if(!vd(t))throw Error(B(40));return t._reactRootContainer?(Fi(function(){_d(null,null,t,!1,function(){t._reactRootContainer=null,t[sr]=null})}),!0):!1};Gt.unstable_batchedUpdates=zm;Gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vd(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return _d(t,e,n,!1,r)};Gt.version="18.3.1-next-f1338f8080-20240426";function jk(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jk)}catch(t){console.error(t)}}jk(),j_.exports=Gt;var b8=j_.exports,Vk,_0=b8;Vk=_0.createRoot,_0.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function il(){return il=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},il.apply(this,arguments)}var Nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Nr||(Nr={}));const E0="popstate";function N8(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return _p("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Cc(i)}return D8(e,n,null,t)}function Ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Mk(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function O8(){return Math.random().toString(36).substr(2,8)}function k0(t,e){return{usr:t.state,key:t.key,idx:e}}function _p(t,e,n,r){return n===void 0&&(n=null),il({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Po(e):e,{state:n,key:e&&e.key||r||O8()})}function Cc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Po(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function D8(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Nr.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(il({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=Nr.Pop;let L=f(),_=L==null?null:L-c;c=L,u&&u({action:l,location:C.location,delta:_})}function g(L,_){l=Nr.Push;let y=_p(C.location,L,_);c=f()+1;let I=k0(y,c),P=C.createHref(y);try{o.pushState(I,"",P)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(P)}s&&u&&u({action:l,location:C.location,delta:1})}function E(L,_){l=Nr.Replace;let y=_p(C.location,L,_);c=f();let I=k0(y,c),P=C.createHref(y);o.replaceState(I,"",P),s&&u&&u({action:l,location:C.location,delta:0})}function x(L){let _=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof L=="string"?L:Cc(L);return y=y.replace(/ $/,"%20"),Ve(_,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,_)}let C={get action(){return l},get location(){return t(i,o)},listen(L){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(E0,m),u=L,()=>{i.removeEventListener(E0,m),u=null}},createHref(L){return e(i,L)},createURL:x,encodeLocation(L){let _=x(L);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:g,replace:E,go(L){return o.go(L)}};return C}var w0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(w0||(w0={}));function j8(t,e,n){return n===void 0&&(n="/"),V8(t,e,n)}function V8(t,e,n,r){let i=typeof e=="string"?Po(e):e,s=Jm(i.pathname||"/",n);if(s==null)return null;let o=Fk(t);M8(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=Y8(s);l=G8(o[u],c)}return l}function Fk(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ve(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Hr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Fk(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:H8(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of $k(s.path))i(s,o,u)}),e}function $k(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=$k(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function M8(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:q8(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const F8=/^:[\w-]+$/,$8=3,U8=2,W8=1,B8=10,z8=-2,T0=t=>t==="*";function H8(t,e){let n=t.split("/"),r=n.length;return n.some(T0)&&(r+=z8),e&&(r+=U8),n.filter(i=>!T0(i)).reduce((i,s)=>i+(F8.test(s)?$8:s===""?W8:B8),r)}function q8(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function G8(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=K8({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),g=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:Hr([s,m.pathname]),pathnameBase:eA(Hr([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=Hr([s,m.pathnameBase]))}return o}function K8(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Q8(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,m)=>{let{paramName:g,isOptional:E}=f;if(g==="*"){let C=l[m]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const x=l[m];return E&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Q8(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Mk(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Y8(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mk(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Jm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function X8(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Po(t):t;return{pathname:n?n.startsWith("/")?n:J8(n,e):e,search:tA(r),hash:nA(i)}}function J8(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Z8(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Zm(t,e){let n=Z8(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function eg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Po(t):(i=il({},t),Ve(!i.pathname||!i.pathname.includes("?"),Xh("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),Xh("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),Xh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=X8(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const Hr=t=>t.join("/").replace(/\/\/+/g,"/"),eA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Uk=["post","put","patch","delete"];new Set(Uk);const iA=["get",...Uk];new Set(iA);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sl.apply(this,arguments)}const tg=j.createContext(null),sA=j.createContext(null),ai=j.createContext(null),Ed=j.createContext(null),li=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Wk=j.createContext(null);function oA(t,e){let{relative:n}=e===void 0?{}:e;Lo()||Ve(!1);let{basename:r,navigator:i}=j.useContext(ai),{hash:s,pathname:o,search:l}=zk(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Hr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Lo(){return j.useContext(Ed)!=null}function bo(){return Lo()||Ve(!1),j.useContext(Ed).location}function Bk(t){j.useContext(ai).static||j.useLayoutEffect(t)}function No(){let{isDataRoute:t}=j.useContext(li);return t?_A():aA()}function aA(){Lo()||Ve(!1);let t=j.useContext(tg),{basename:e,future:n,navigator:r}=j.useContext(ai),{matches:i}=j.useContext(li),{pathname:s}=bo(),o=JSON.stringify(Zm(i,n.v7_relativeSplatPath)),l=j.useRef(!1);return Bk(()=>{l.current=!0}),j.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=eg(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Hr([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,s,t])}function zk(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(ai),{matches:i}=j.useContext(li),{pathname:s}=bo(),o=JSON.stringify(Zm(i,r.v7_relativeSplatPath));return j.useMemo(()=>eg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function lA(t,e){return uA(t,e)}function uA(t,e,n,r){Lo()||Ve(!1);let{navigator:i,static:s}=j.useContext(ai),{matches:o}=j.useContext(li),l=o[o.length-1],u=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let f=bo(),m;if(e){var g;let _=typeof e=="string"?Po(e):e;c==="/"||(g=_.pathname)!=null&&g.startsWith(c)||Ve(!1),m=_}else m=f;let E=m.pathname||"/",x=E;if(c!=="/"){let _=c.replace(/^\//,"").split("/");x="/"+E.replace(/^\//,"").split("/").slice(_.length).join("/")}let C=j8(t,{pathname:x}),L=pA(C&&C.map(_=>Object.assign({},_,{params:Object.assign({},u,_.params),pathname:Hr([c,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?c:Hr([c,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,n,r);return e&&L?j.createElement(Ed.Provider,{value:{location:sl({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Nr.Pop}},L):L}function cA(){let t=vA(),e=rA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const dA=j.createElement(cA,null);class hA extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(li.Provider,{value:this.props.routeContext},j.createElement(Wk.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fA(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(tg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(li.Provider,{value:e},r)}function pA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||Ve(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=f),m.route.id){let{loaderData:g,errors:E}=n,x=m.route.loader&&g[m.route.id]===void 0&&(!E||E[m.route.id]===void 0);if(m.route.lazy||x){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let E,x=!1,C=null,L=null;n&&(E=l&&m.route.id?l[m.route.id]:void 0,C=m.route.errorElement||dA,u&&(c<0&&g===0?(EA("route-fallback"),x=!0,L=null):c===g&&(x=!0,L=m.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,g+1)),y=()=>{let I;return E?I=C:x?I=L:m.route.Component?I=j.createElement(m.route.Component,null):m.route.element?I=m.route.element:I=f,j.createElement(fA,{match:m,routeContext:{outlet:f,matches:_,isDataRoute:n!=null},children:I})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?j.createElement(hA,{location:n.location,revalidation:n.revalidation,component:C,error:E,children:y(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):y()},null)}var Hk=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Hk||{}),qk=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(qk||{});function mA(t){let e=j.useContext(tg);return e||Ve(!1),e}function gA(t){let e=j.useContext(sA);return e||Ve(!1),e}function yA(t){let e=j.useContext(li);return e||Ve(!1),e}function Gk(t){let e=yA(),n=e.matches[e.matches.length-1];return n.route.id||Ve(!1),n.route.id}function vA(){var t;let e=j.useContext(Wk),n=gA(),r=Gk();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function _A(){let{router:t}=mA(Hk.UseNavigateStable),e=Gk(qk.UseNavigateStable),n=j.useRef(!1);return Bk(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,sl({fromRouteId:e},s)))},[t,e])}const I0={};function EA(t,e,n){I0[t]||(I0[t]=!0)}function kA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Kk(t){let{to:e,replace:n,state:r,relative:i}=t;Lo()||Ve(!1);let{future:s,static:o}=j.useContext(ai),{matches:l}=j.useContext(li),{pathname:u}=bo(),c=No(),f=eg(e,Zm(l,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(f);return j.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function pa(t){Ve(!1)}function wA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Nr.Pop,navigator:s,static:o=!1,future:l}=t;Lo()&&Ve(!1);let u=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:s,static:o,future:sl({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Po(r));let{pathname:f="/",search:m="",hash:g="",state:E=null,key:x="default"}=r,C=j.useMemo(()=>{let L=Jm(f,u);return L==null?null:{location:{pathname:L,search:m,hash:g,state:E,key:x},navigationType:i}},[u,f,m,g,E,x,i]);return C==null?null:j.createElement(ai.Provider,{value:c},j.createElement(Ed.Provider,{children:n,value:C}))}function TA(t){let{children:e,location:n}=t;return lA(Ep(e),n)}new Promise(()=>{});function Ep(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,Ep(r.props.children,s));return}r.type!==pa&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ep(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kp(){return kp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kp.apply(this,arguments)}function IA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function SA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function xA(t,e){return t.button===0&&(!e||e==="_self")&&!SA(t)}const AA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],RA="6";try{window.__reactRouterVersion=RA}catch{}const CA="startTransition",S0=kS[CA];function PA(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=N8({window:i,v5Compat:!0}));let o=s.current,[l,u]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=j.useCallback(m=>{c&&S0?S0(()=>u(m)):u(m)},[u,c]);return j.useLayoutEffect(()=>o.listen(f),[o,f]),j.useEffect(()=>kA(r),[r]),j.createElement(wA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const LA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qk=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:m}=e,g=IA(e,AA),{basename:E}=j.useContext(ai),x,C=!1;if(typeof c=="string"&&bA.test(c)&&(x=c,LA))try{let I=new URL(window.location.href),P=c.startsWith("//")?new URL(I.protocol+c):new URL(c),O=Jm(P.pathname,E);P.origin===I.origin&&O!=null?c=O+P.search+P.hash:C=!0}catch{}let L=oA(c,{relative:i}),_=NA(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:m});function y(I){r&&r(I),I.defaultPrevented||_(I)}return j.createElement("a",kp({},g,{href:x||L,onClick:C||s?r:y,ref:n,target:u}))});var x0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(x0||(x0={}));var A0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(A0||(A0={}));function NA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=No(),c=bo(),f=zk(t,{relative:o});return j.useCallback(m=>{if(xA(m,n)){m.preventDefault();let g=r!==void 0?r:Cc(c)===Cc(f);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,f,r,i,n,t,s,o,l])}var R0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},OA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xk={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(g=64)),r.push(n[f],n[m],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yk(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new DA;const g=s<<2|l>>4;if(r.push(g),c!==64){const E=l<<4&240|c>>2;if(r.push(E),m!==64){const x=c<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jA=function(t){const e=Yk(t);return Xk.encodeByteArray(e,!0)},Pc=function(t){return jA(t).replace(/\./g,"")},Jk=function(t){try{return Xk.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function VA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MA=()=>VA().__FIREBASE_DEFAULTS__,FA=()=>{if(typeof process>"u"||typeof R0>"u")return;const t=R0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$A=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jk(t[1]);return e&&JSON.parse(e)},kd=()=>{try{return MA()||FA()||$A()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zk=t=>{var e,n;return(n=(e=kd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},e2=t=>{const e=Zk(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},t2=()=>{var t;return(t=kd())===null||t===void 0?void 0:t.config},n2=t=>{var e;return(e=kd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function r2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Pc(JSON.stringify(n)),Pc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function BA(){var t;const e=(t=kd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function i2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function HA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qA(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function GA(){return!BA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function s2(){try{return typeof indexedDB=="object"}catch{return!1}}function o2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function KA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QA,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?YA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ln(i,l,r)}}function YA(t,e){return t.replace(XA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const XA=/\{\$([^}]+)}/g;function JA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ol(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(C0(s)&&C0(o)){if(!ol(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function C0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ma(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ga(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ZA(t,e){const n=new eR(t,e);return n.subscribe.bind(n)}class eR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Jh),i.error===void 0&&(i.error=Jh),i.complete===void 0&&(i.complete=Jh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=1e3,rR=2,iR=4*60*60*1e3,sR=.5;function P0(t,e=nR,n=rR){const r=e*Math.pow(n,t),i=Math.round(sR*r*(Math.random()-.5)*2);return Math.min(iR,r+i)}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class on{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lR(e))try{this.getOrInitializeService({instanceIdentifier:ki})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ki){return this.instances.has(e)}getOptions(e=ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ki){return this.component?this.component.multipleInstances?e:ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aR(t){return t===ki?void 0:t}function lR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const cR={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},dR=ae.INFO,hR={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},fR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=hR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wd{constructor(e){this.name=e,this._logLevel=dR,this._logHandler=fR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const pR=(t,e)=>e.some(n=>t instanceof n);let L0,b0;function mR(){return L0||(L0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gR(){return b0||(b0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const a2=new WeakMap,wp=new WeakMap,l2=new WeakMap,Zh=new WeakMap,ng=new WeakMap;function yR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(qr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&a2.set(n,t)}).catch(()=>{}),ng.set(e,t),e}function vR(t){if(wp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wp.set(t,e)}let Tp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||l2.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _R(t){Tp=t(Tp)}function ER(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ef(this),e,...n);return l2.set(r,e.sort?e.sort():[e]),qr(r)}:gR().includes(t)?function(...e){return t.apply(ef(this),e),qr(a2.get(this))}:function(...e){return qr(t.apply(ef(this),e))}}function kR(t){return typeof t=="function"?ER(t):(t instanceof IDBTransaction&&vR(t),pR(t,mR())?new Proxy(t,Tp):t)}function qr(t){if(t instanceof IDBRequest)return yR(t);if(Zh.has(t))return Zh.get(t);const e=kR(t);return e!==t&&(Zh.set(t,e),ng.set(e,t)),e}const ef=t=>ng.get(t);function u2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=qr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(qr(o.result),u.oldVersion,u.newVersion,qr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const wR=["get","getKey","getAll","getAllKeys","count"],TR=["put","add","delete","clear"],tf=new Map;function N0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tf.get(e))return tf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=TR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return tf.set(e,s),s}_R(t=>({...t,get:(e,n,r)=>N0(e,n)||t.get(e,n,r),has:(e,n)=>!!N0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ip="@firebase/app",O0="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new wd("@firebase/app"),xR="@firebase/app-compat",AR="@firebase/analytics-compat",RR="@firebase/analytics",CR="@firebase/app-check-compat",PR="@firebase/app-check",LR="@firebase/auth",bR="@firebase/auth-compat",NR="@firebase/database",OR="@firebase/data-connect",DR="@firebase/database-compat",jR="@firebase/functions",VR="@firebase/functions-compat",MR="@firebase/installations",FR="@firebase/installations-compat",$R="@firebase/messaging",UR="@firebase/messaging-compat",WR="@firebase/performance",BR="@firebase/performance-compat",zR="@firebase/remote-config",HR="@firebase/remote-config-compat",qR="@firebase/storage",GR="@firebase/storage-compat",KR="@firebase/firestore",QR="@firebase/vertexai-preview",YR="@firebase/firestore-compat",XR="firebase",JR="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="[DEFAULT]",ZR={[Ip]:"fire-core",[xR]:"fire-core-compat",[RR]:"fire-analytics",[AR]:"fire-analytics-compat",[PR]:"fire-app-check",[CR]:"fire-app-check-compat",[LR]:"fire-auth",[bR]:"fire-auth-compat",[NR]:"fire-rtdb",[OR]:"fire-data-connect",[DR]:"fire-rtdb-compat",[jR]:"fire-fn",[VR]:"fire-fn-compat",[MR]:"fire-iid",[FR]:"fire-iid-compat",[$R]:"fire-fcm",[UR]:"fire-fcm-compat",[WR]:"fire-perf",[BR]:"fire-perf-compat",[zR]:"fire-rc",[HR]:"fire-rc-compat",[qR]:"fire-gcs",[GR]:"fire-gcs-compat",[KR]:"fire-fst",[YR]:"fire-fst-compat",[QR]:"fire-vertex","fire-js":"fire-js",[XR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new Map,eC=new Map,xp=new Map;function D0(t,e){try{t.container.addComponent(e)}catch(n){lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(xp.has(e))return lr.debug(`There were multiple attempts to register component ${e}.`),!1;xp.set(e,t);for(const n of Lc.values())D0(n,t);for(const n of eC.values())D0(n,t);return!0}function ui(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new Yi("app","Firebase",tC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=JR;function c2(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gr.create("bad-app-name",{appName:String(i)});if(n||(n=t2()),!n)throw Gr.create("no-options");const s=Lc.get(i);if(s){if(ol(n,s.options)&&ol(r,s.config))return s;throw Gr.create("duplicate-app",{appName:i})}const o=new uR(i);for(const u of xp.values())o.addComponent(u);const l=new nC(n,r,o);return Lc.set(i,l),l}function Td(t=Sp){const e=Lc.get(t);if(!e&&t===Sp&&t2())return c2();if(!e)throw Gr.create("no-app",{appName:t});return e}function jt(t,e,n){var r;let i=(r=ZR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lr.warn(l.join(" "));return}En(new on(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const rC="firebase-heartbeat-database",iC=1,al="firebase-heartbeat-store";let nf=null;function d2(){return nf||(nf=u2(rC,iC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(al)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),nf}async function sC(t){try{const n=(await d2()).transaction(al),r=await n.objectStore(al).get(h2(t));return await n.done,r}catch(e){if(e instanceof ln)lr.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lr.warn(n.message)}}}async function j0(t,e){try{const r=(await d2()).transaction(al,"readwrite");await r.objectStore(al).put(e,h2(t)),await r.done}catch(n){if(n instanceof ln)lr.warn(n.message);else{const r=Gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lr.warn(r.message)}}}function h2(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oC=1024,aC=30*24*60*60*1e3;class lC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=V0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=aC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){lr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=V0(),{heartbeatsToSend:r,unsentEntries:i}=uC(this._heartbeatsCache.heartbeats),s=Pc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return lr.warn(n),""}}}function V0(){return new Date().toISOString().substring(0,10)}function uC(t,e=oC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),M0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),M0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return s2()?o2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return j0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return j0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function M0(t){return Pc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(t){En(new on("platform-logger",e=>new IR(e),"PRIVATE")),En(new on("heartbeat",e=>new lC(e),"PRIVATE")),jt(Ip,O0,t),jt(Ip,O0,"esm2017"),jt("fire-js","")}dC("");function rg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function f2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hC=f2,p2=new Yi("auth","Firebase",f2());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new wd("@firebase/auth");function fC(t,...e){bc.logLevel<=ae.WARN&&bc.warn(`Auth (${Xi}): ${t}`,...e)}function Bu(t,...e){bc.logLevel<=ae.ERROR&&bc.error(`Auth (${Xi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,...e){throw ig(t,...e)}function bn(t,...e){return ig(t,...e)}function m2(t,e,n){const r=Object.assign(Object.assign({},hC()),{[e]:n});return new Yi("auth","Firebase",r).create(e,{appName:t.name})}function nr(t){return m2(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ig(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return p2.create(t,...e)}function J(t,e,...n){if(!t)throw ig(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bu(e),new Error(e)}function ur(t,e){t||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pC(){return F0()==="http:"||F0()==="https:"}function F0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pC()||i2()||"connection"in navigator)?navigator.onLine:!0}function gC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ur(n>e,"Short delay should be less than long delay!"),this.isMobile=WA()||HA()}get(){return mC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t,e){ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=new xl(3e4,6e4);function pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mn(t,e,n,r,i={}){return y2(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Sl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return zA()||(c.referrerPolicy="no-referrer"),g2.fetch()(v2(t,t.config.apiHost,n,l),c)})}async function y2(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yC),e);try{const i=new EC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw vu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw vu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw vu(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw m2(t,f,c);kn(t,f)}}catch(i){if(i instanceof ln)throw i;kn(t,"network-request-failed",{message:String(i)})}}async function Al(t,e,n,r,i={}){const s=await Mn(t,e,n,r,i);return"mfaPendingCredential"in s&&kn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function v2(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?sg(t.config,i):`${t.config.apiScheme}://${i}`}function _C(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),vC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bn(t,e,r);return i.customData._tokenResponse=n,i}function $0(t){return t!==void 0&&t.enterprise!==void 0}class kC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _C(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function wC(t,e){return Mn(t,"GET","/v2/recaptchaConfig",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(t,e){return Mn(t,"POST","/v1/accounts:delete",e)}async function _2(t,e){return Mn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IC(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=og(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ba(rf(i.auth_time)),issuedAtTime:ba(rf(i.iat)),expirationTime:ba(rf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rf(t){return Number(t)*1e3}function og(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jk(n);return i?JSON.parse(i):(Bu("Failed to decode base64 JWT payload"),null)}catch(i){return Bu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function U0(t){const e=og(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&SC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ba(this.lastLoginAt),this.creationTime=ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await po(t,_2(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?E2(s.providerUserInfo):[],l=RC(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Rp(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function AC(t){const e=Pe(t);await Nc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function E2(t){return t.map(e=>{var{providerId:n}=e,r=rg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(t,e){const n=await y2(t,{},async()=>{const r=Sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=v2(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",g2.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function PC(t,e){return Mn(t,"POST","/v2/accounts:revokeToken",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):U0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=U0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await CC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new no;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new no,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=rg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Rp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await po(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return IC(this,e)}reload(){return AC(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(nr(this.auth));const e=await this.getIdToken();return await po(this,TC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:I,emailVerified:P,isAnonymous:O,providerData:M,stsTokenManager:w}=n;J(I&&w,e,"internal-error");const k=no.fromJSON(this.name,w);J(typeof I=="string",e,"internal-error"),Er(m,e.name),Er(g,e.name),J(typeof P=="boolean",e,"internal-error"),J(typeof O=="boolean",e,"internal-error"),Er(E,e.name),Er(x,e.name),Er(C,e.name),Er(L,e.name),Er(_,e.name),Er(y,e.name);const S=new Xn({uid:I,auth:e,email:g,emailVerified:P,displayName:m,isAnonymous:O,photoURL:x,phoneNumber:E,tenantId:C,stsTokenManager:k,createdAt:_,lastLoginAt:y});return M&&Array.isArray(M)&&(S.providerData=M.map(A=>Object.assign({},A))),L&&(S._redirectEventId=L),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new no;i.updateFromServerResponse(n);const s=new Xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?E2(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new no;l.updateFromIdToken(r);const u=new Xn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Rp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=new Map;function Jn(t){ur(t instanceof Function,"Expected a class definition");let e=W0.get(t);return e?(ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,W0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}k2.type="NONE";const B0=k2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t,e,n){return`firebase:${t}:${e}:${n}`}class ro{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zu(this.userKey,i.apiKey,s),this.fullPersistenceKey=zu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ro(Jn(B0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Jn(B0);const o=zu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const m=Xn._fromJSON(e,f);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ro(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ro(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(w2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(A2(e))return"Blackberry";if(R2(e))return"Webos";if(T2(e))return"Safari";if((e.includes("chrome/")||I2(e))&&!e.includes("edge/"))return"Chrome";if(x2(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function w2(t=vt()){return/firefox\//i.test(t)}function T2(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function I2(t=vt()){return/crios\//i.test(t)}function S2(t=vt()){return/iemobile/i.test(t)}function x2(t=vt()){return/android/i.test(t)}function A2(t=vt()){return/blackberry/i.test(t)}function R2(t=vt()){return/webos/i.test(t)}function ag(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LC(t=vt()){var e;return ag(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bC(){return qA()&&document.documentMode===10}function C2(t=vt()){return ag(t)||x2(t)||R2(t)||A2(t)||/windows phone/i.test(t)||S2(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(t,e=[]){let n;switch(t){case"Browser":n=z0(vt());break;case"Worker":n=`${z0(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xi}/${r}`}/**
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
 */class NC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function OC(t,e={}){return Mn(t,"GET","/v2/passwordPolicy",pr(t,e))}/**
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
 */const DC=6;class jC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:DC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new H0(this),this.idTokenSubscription=new H0(this),this.beforeStateQueue=new NC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ro.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _2(this,{idToken:e}),r=await Xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(nr(this));const n=e?Pe(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OC(this),n=new jC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await PC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await ro.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=P2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ci(t){return Pe(t)}class H0{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZA(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Id={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MC(t){Id=t}function L2(t){return Id.loadJS(t)}function FC(){return Id.recaptchaEnterpriseScript}function $C(){return Id.gapiScript}function UC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const WC="recaptcha-enterprise",BC="NO_RECAPTCHA";class zC{constructor(e){this.type=WC,this.auth=ci(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{wC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new kC(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;$0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(BC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&$0(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=FC();u.length!==0&&(u+=l),L2(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function q0(t,e,n,r=!1){const i=new zC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Oc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await q0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await q0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t,e){const n=ui(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ol(s,e??{}))return i;kn(i,"already-initialized")}return n.initialize({options:e})}function qC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GC(t,e,n){const r=ci(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=b2(e),{host:o,port:l}=KC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),QC()}function b2(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KC(t){const e=b2(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:G0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:G0(o)}}}function G0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function YC(t,e){return Mn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(t,e){return Al(t,"POST","/v1/accounts:signInWithPassword",pr(t,e))}async function JC(t,e){return Mn(t,"POST","/v1/accounts:sendOobCode",pr(t,e))}async function ZC(t,e){return JC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(t,e){return Al(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}async function tP(t,e){return Al(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends lg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ll(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ll(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oc(e,n,"signInWithPassword",XC);case"emailLink":return eP(e,{email:this._email,oobCode:this._password});default:kn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oc(e,r,"signUpPassword",YC);case"emailLink":return tP(e,{idToken:n,email:this._email,oobCode:this._password});default:kn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(t,e){return Al(t,"POST","/v1/accounts:signInWithIdp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP="http://localhost";class $i extends lg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=rg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $i(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return io(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,io(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,io(e,n)}buildRequest(){const e={requestUri:nP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Sl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iP(t){const e=ma(ga(t)).link,n=e?ma(ga(e)).deep_link_id:null,r=ma(ga(t)).deep_link_id;return(r?ma(ga(r)).link:null)||r||n||e||t}class ug{constructor(e){var n,r,i,s,o,l;const u=ma(ga(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=rP((i=u.mode)!==null&&i!==void 0?i:null);J(c&&f&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=iP(e);try{return new ug(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.providerId=Oo.PROVIDER_ID}static credential(e,n){return ll._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ug.parseLink(n);return J(r,"argument-error"),ll._fromEmailAndCode(e,r.code,r.tenantId)}}Oo.PROVIDER_ID="password";Oo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends N2{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Rl{constructor(){super("facebook.com")}static credential(e){return $i._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $i._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Rl{constructor(){super("github.com")}static credential(e){return $i._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Rl{constructor(){super("twitter.com")}static credential(e,n){return $i._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.TWITTER_SIGN_IN_METHOD="twitter.com";Pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sP(t,e){return Al(t,"POST","/v1/accounts:signUp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Xn._fromIdTokenResponse(e,r,i),o=K0(r);return new Ui({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=K0(r);return new Ui({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function K0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Dc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Dc(e,n,r,i)}}function O2(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Dc._fromErrorAndOperation(t,s,e,r):s})}async function oP(t,e,n=!1){const r=await po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ui._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(t,e,n=!1){const{auth:r}=t;if(Rn(r.app))return Promise.reject(nr(r));const i="reauthenticate";try{const s=await po(t,O2(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=og(s.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),Ui._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&kn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D2(t,e,n=!1){if(Rn(t.app))return Promise.reject(nr(t));const r="signIn",i=await O2(t,r,e),s=await Ui._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function lP(t,e){return D2(ci(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(t){const e=ci(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function uP(t,e,n){const r=ci(t);await Oc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",ZC)}async function cP(t,e,n){if(Rn(t.app))return Promise.reject(nr(t));const r=ci(t),o=await Oc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&j2(t),u}),l=await Ui._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function dP(t,e,n){return Rn(t.app)?Promise.reject(nr(t)):lP(Pe(t),Oo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&j2(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(t,e){return Mn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Pe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await po(r,hP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function pP(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function mP(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function gP(t,e,n,r){return Pe(t).onAuthStateChanged(e,n,r)}function yP(t){return Pe(t).signOut()}async function vP(t){return Pe(t).delete()}const jc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jc,"1"),this.storage.removeItem(jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=1e3,EP=10;class M2 extends V2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=C2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,EP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_P)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}M2.type="LOCAL";const kP=M2;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2 extends V2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}F2.type="SESSION";const $2=F2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Sd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await wP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=cg("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function IP(t){Nn().location.href=t}/**
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
 */function U2(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function SP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AP(){return U2()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2="firebaseLocalStorageDb",RP=1,Vc="firebaseLocalStorage",B2="fbase_key";class Cl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xd(t,e){return t.transaction([Vc],e?"readwrite":"readonly").objectStore(Vc)}function CP(){const t=indexedDB.deleteDatabase(W2);return new Cl(t).toPromise()}function Cp(){const t=indexedDB.open(W2,RP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vc,{keyPath:B2})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vc)?e(r):(r.close(),await CP(),e(await Cp()))})})}async function Q0(t,e,n){const r=xd(t,!0).put({[B2]:e,value:n});return new Cl(r).toPromise()}async function PP(t,e){const n=xd(t,!1).get(e),r=await new Cl(n).toPromise();return r===void 0?null:r.value}function Y0(t,e){const n=xd(t,!0).delete(e);return new Cl(n).toPromise()}const LP=800,bP=3;class z2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return U2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sd._getInstance(AP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SP(),!this.activeServiceWorker)return;this.sender=new TP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cp();return await Q0(e,jc,"1"),await Y0(e,jc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Q0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>PP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Y0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xd(i,!1).getAll();return new Cl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}z2.type="LOCAL";const NP=z2;new xl(3e4,6e4);/**
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
 */function OP(t,e){return e?Jn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg extends lg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return io(e,this._buildIdpRequest())}_linkToIdToken(e,n){return io(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return io(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DP(t){return D2(t.auth,new dg(t),t.bypassAuthState)}function jP(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),aP(n,new dg(t),t.bypassAuthState)}async function VP(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),oP(n,new dg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DP;case"linkViaPopup":case"linkViaRedirect":return VP;case"reauthViaPopup":case"reauthViaRedirect":return jP;default:kn(this.auth,"internal-error")}}resolve(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=new xl(2e3,1e4);class Ks extends H2{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ks.currentPopupAction&&Ks.currentPopupAction.cancel(),Ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const e=cg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MP.get())};e()}}Ks.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP="pendingRedirect",Hu=new Map;class $P extends H2{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Hu.get(this.auth._key());if(!e){try{const r=await UP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Hu.set(this.auth._key(),e)}return this.bypassAuthState||Hu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UP(t,e){const n=zP(e),r=BP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function WP(t,e){Hu.set(t._key(),e)}function BP(t){return Jn(t._redirectPersistence)}function zP(t){return zu(FP,t.config.apiKey,t.name)}async function HP(t,e,n=!1){if(Rn(t.app))return Promise.reject(nr(t));const r=ci(t),i=OP(r,e),o=await new $P(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=10*60*1e3;class GP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!q2(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qP&&this.cachedEventUids.clear(),this.cachedEventUids.has(X0(e))}saveEventToCache(e){this.cachedEventUids.add(X0(e)),this.lastProcessedEventTime=Date.now()}}function X0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function q2({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return q2(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QP(t,e={}){return Mn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XP=/^https?/;async function JP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QP(t);for(const n of e)try{if(ZP(n))return}catch{}kn(t,"unauthorized-domain")}function ZP(t){const e=Ap(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XP.test(n))return!1;if(YP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const eL=new xl(3e4,6e4);function J0(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tL(t){return new Promise((e,n)=>{var r,i,s;function o(){J0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{J0(),n(bn(t,"network-request-failed"))},timeout:eL.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nn().gapi)===null||s===void 0)&&s.load)o();else{const l=UC("iframefcb");return Nn()[l]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},L2(`${$C()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw qu=null,e})}let qu=null;function nL(t){return qu=qu||tL(t),qu}/**
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
 */const rL=new xl(5e3,15e3),iL="__/auth/iframe",sL="emulator/auth/iframe",oL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lL(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sg(e,sL):`https://${t.config.authDomain}/${iL}`,r={apiKey:e.apiKey,appName:t.name,v:Xi},i=aL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Sl(r).slice(1)}`}async function uL(t){const e=await nL(t),n=Nn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:lL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),l=Nn().setTimeout(()=>{s(o)},rL.get());function u(){Nn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const cL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dL=500,hL=600,fL="_blank",pL="http://localhost";class Z0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mL(t,e,n,r=dL,i=hL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},cL),{width:r.toString(),height:i.toString(),top:s,left:o}),c=vt().toLowerCase();n&&(l=I2(c)?fL:n),w2(c)&&(e=e||pL,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[E,x])=>`${g}${E}=${x},`,"");if(LC(c)&&l!=="_self")return gL(e||"",l),new Z0(null);const m=window.open(e||"",l,f);J(m,t,"popup-blocked");try{m.focus()}catch{}return new Z0(m)}function gL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yL="__/auth/handler",vL="emulator/auth/handler",_L=encodeURIComponent("fac");async function ev(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xi,eventId:i};if(e instanceof N2){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",JA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Rl){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${_L}=${encodeURIComponent(u)}`:"";return`${EL(t)}?${Sl(l).slice(1)}${c}`}function EL({config:t}){return t.emulator?sg(t,vL):`https://${t.authDomain}/${yL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="webStorageSupport";class kL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$2,this._completeRedirectFn=HP,this._overrideRedirectResult=WP}async _openPopup(e,n,r,i){var s;ur((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ev(e,n,r,Ap(),i);return mL(e,o,cg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ev(e,n,r,Ap(),i);return IP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ur(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uL(e),r=new GP(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sf,{type:sf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[sf];o!==void 0&&n(!!o),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return C2()||T2()||ag()}}const wL=kL;var tv="@firebase/auth",nv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SL(t){En(new on("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:P2(t)},c=new VC(r,i,s,u);return qC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),En(new on("auth-internal",e=>{const n=ci(e.getProvider("auth").getImmediate());return(r=>new TL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(tv,nv,IL(t)),jt(tv,nv,"esm2017")}/**
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
 */const xL=5*60,AL=n2("authIdTokenMaxAge")||xL;let rv=null;const RL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AL)return;const i=n==null?void 0:n.token;rv!==i&&(rv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function G2(t=Td()){const e=ui(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HC(t,{popupRedirectResolver:wL,persistence:[NP,kP,$2]}),r=n2("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=RL(s.toString());mP(n,o,()=>o(n.currentUser)),pP(n,l=>o(l))}}const i=Zk("auth");return i&&GC(n,`http://${i}`),n}function CL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}MC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",CL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SL("Browser");var PL="firebase",LL="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt(PL,LL,"app");var iv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bi,K2;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,k){function S(){}S.prototype=k.prototype,w.D=k.prototype,w.prototype=new S,w.prototype.constructor=w,w.C=function(A,b,N){for(var R=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)R[ge-2]=arguments[ge];return k.prototype[b].apply(A,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,k,S){S||(S=0);var A=Array(16);if(typeof k=="string")for(var b=0;16>b;++b)A[b]=k.charCodeAt(S++)|k.charCodeAt(S++)<<8|k.charCodeAt(S++)<<16|k.charCodeAt(S++)<<24;else for(b=0;16>b;++b)A[b]=k[S++]|k[S++]<<8|k[S++]<<16|k[S++]<<24;k=w.g[0],S=w.g[1],b=w.g[2];var N=w.g[3],R=k+(N^S&(b^N))+A[0]+3614090360&4294967295;k=S+(R<<7&4294967295|R>>>25),R=N+(b^k&(S^b))+A[1]+3905402710&4294967295,N=k+(R<<12&4294967295|R>>>20),R=b+(S^N&(k^S))+A[2]+606105819&4294967295,b=N+(R<<17&4294967295|R>>>15),R=S+(k^b&(N^k))+A[3]+3250441966&4294967295,S=b+(R<<22&4294967295|R>>>10),R=k+(N^S&(b^N))+A[4]+4118548399&4294967295,k=S+(R<<7&4294967295|R>>>25),R=N+(b^k&(S^b))+A[5]+1200080426&4294967295,N=k+(R<<12&4294967295|R>>>20),R=b+(S^N&(k^S))+A[6]+2821735955&4294967295,b=N+(R<<17&4294967295|R>>>15),R=S+(k^b&(N^k))+A[7]+4249261313&4294967295,S=b+(R<<22&4294967295|R>>>10),R=k+(N^S&(b^N))+A[8]+1770035416&4294967295,k=S+(R<<7&4294967295|R>>>25),R=N+(b^k&(S^b))+A[9]+2336552879&4294967295,N=k+(R<<12&4294967295|R>>>20),R=b+(S^N&(k^S))+A[10]+4294925233&4294967295,b=N+(R<<17&4294967295|R>>>15),R=S+(k^b&(N^k))+A[11]+2304563134&4294967295,S=b+(R<<22&4294967295|R>>>10),R=k+(N^S&(b^N))+A[12]+1804603682&4294967295,k=S+(R<<7&4294967295|R>>>25),R=N+(b^k&(S^b))+A[13]+4254626195&4294967295,N=k+(R<<12&4294967295|R>>>20),R=b+(S^N&(k^S))+A[14]+2792965006&4294967295,b=N+(R<<17&4294967295|R>>>15),R=S+(k^b&(N^k))+A[15]+1236535329&4294967295,S=b+(R<<22&4294967295|R>>>10),R=k+(b^N&(S^b))+A[1]+4129170786&4294967295,k=S+(R<<5&4294967295|R>>>27),R=N+(S^b&(k^S))+A[6]+3225465664&4294967295,N=k+(R<<9&4294967295|R>>>23),R=b+(k^S&(N^k))+A[11]+643717713&4294967295,b=N+(R<<14&4294967295|R>>>18),R=S+(N^k&(b^N))+A[0]+3921069994&4294967295,S=b+(R<<20&4294967295|R>>>12),R=k+(b^N&(S^b))+A[5]+3593408605&4294967295,k=S+(R<<5&4294967295|R>>>27),R=N+(S^b&(k^S))+A[10]+38016083&4294967295,N=k+(R<<9&4294967295|R>>>23),R=b+(k^S&(N^k))+A[15]+3634488961&4294967295,b=N+(R<<14&4294967295|R>>>18),R=S+(N^k&(b^N))+A[4]+3889429448&4294967295,S=b+(R<<20&4294967295|R>>>12),R=k+(b^N&(S^b))+A[9]+568446438&4294967295,k=S+(R<<5&4294967295|R>>>27),R=N+(S^b&(k^S))+A[14]+3275163606&4294967295,N=k+(R<<9&4294967295|R>>>23),R=b+(k^S&(N^k))+A[3]+4107603335&4294967295,b=N+(R<<14&4294967295|R>>>18),R=S+(N^k&(b^N))+A[8]+1163531501&4294967295,S=b+(R<<20&4294967295|R>>>12),R=k+(b^N&(S^b))+A[13]+2850285829&4294967295,k=S+(R<<5&4294967295|R>>>27),R=N+(S^b&(k^S))+A[2]+4243563512&4294967295,N=k+(R<<9&4294967295|R>>>23),R=b+(k^S&(N^k))+A[7]+1735328473&4294967295,b=N+(R<<14&4294967295|R>>>18),R=S+(N^k&(b^N))+A[12]+2368359562&4294967295,S=b+(R<<20&4294967295|R>>>12),R=k+(S^b^N)+A[5]+4294588738&4294967295,k=S+(R<<4&4294967295|R>>>28),R=N+(k^S^b)+A[8]+2272392833&4294967295,N=k+(R<<11&4294967295|R>>>21),R=b+(N^k^S)+A[11]+1839030562&4294967295,b=N+(R<<16&4294967295|R>>>16),R=S+(b^N^k)+A[14]+4259657740&4294967295,S=b+(R<<23&4294967295|R>>>9),R=k+(S^b^N)+A[1]+2763975236&4294967295,k=S+(R<<4&4294967295|R>>>28),R=N+(k^S^b)+A[4]+1272893353&4294967295,N=k+(R<<11&4294967295|R>>>21),R=b+(N^k^S)+A[7]+4139469664&4294967295,b=N+(R<<16&4294967295|R>>>16),R=S+(b^N^k)+A[10]+3200236656&4294967295,S=b+(R<<23&4294967295|R>>>9),R=k+(S^b^N)+A[13]+681279174&4294967295,k=S+(R<<4&4294967295|R>>>28),R=N+(k^S^b)+A[0]+3936430074&4294967295,N=k+(R<<11&4294967295|R>>>21),R=b+(N^k^S)+A[3]+3572445317&4294967295,b=N+(R<<16&4294967295|R>>>16),R=S+(b^N^k)+A[6]+76029189&4294967295,S=b+(R<<23&4294967295|R>>>9),R=k+(S^b^N)+A[9]+3654602809&4294967295,k=S+(R<<4&4294967295|R>>>28),R=N+(k^S^b)+A[12]+3873151461&4294967295,N=k+(R<<11&4294967295|R>>>21),R=b+(N^k^S)+A[15]+530742520&4294967295,b=N+(R<<16&4294967295|R>>>16),R=S+(b^N^k)+A[2]+3299628645&4294967295,S=b+(R<<23&4294967295|R>>>9),R=k+(b^(S|~N))+A[0]+4096336452&4294967295,k=S+(R<<6&4294967295|R>>>26),R=N+(S^(k|~b))+A[7]+1126891415&4294967295,N=k+(R<<10&4294967295|R>>>22),R=b+(k^(N|~S))+A[14]+2878612391&4294967295,b=N+(R<<15&4294967295|R>>>17),R=S+(N^(b|~k))+A[5]+4237533241&4294967295,S=b+(R<<21&4294967295|R>>>11),R=k+(b^(S|~N))+A[12]+1700485571&4294967295,k=S+(R<<6&4294967295|R>>>26),R=N+(S^(k|~b))+A[3]+2399980690&4294967295,N=k+(R<<10&4294967295|R>>>22),R=b+(k^(N|~S))+A[10]+4293915773&4294967295,b=N+(R<<15&4294967295|R>>>17),R=S+(N^(b|~k))+A[1]+2240044497&4294967295,S=b+(R<<21&4294967295|R>>>11),R=k+(b^(S|~N))+A[8]+1873313359&4294967295,k=S+(R<<6&4294967295|R>>>26),R=N+(S^(k|~b))+A[15]+4264355552&4294967295,N=k+(R<<10&4294967295|R>>>22),R=b+(k^(N|~S))+A[6]+2734768916&4294967295,b=N+(R<<15&4294967295|R>>>17),R=S+(N^(b|~k))+A[13]+1309151649&4294967295,S=b+(R<<21&4294967295|R>>>11),R=k+(b^(S|~N))+A[4]+4149444226&4294967295,k=S+(R<<6&4294967295|R>>>26),R=N+(S^(k|~b))+A[11]+3174756917&4294967295,N=k+(R<<10&4294967295|R>>>22),R=b+(k^(N|~S))+A[2]+718787259&4294967295,b=N+(R<<15&4294967295|R>>>17),R=S+(N^(b|~k))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+k&4294967295,w.g[1]=w.g[1]+(b+(R<<21&4294967295|R>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,k){k===void 0&&(k=w.length);for(var S=k-this.blockSize,A=this.B,b=this.h,N=0;N<k;){if(b==0)for(;N<=S;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<k;)if(A[b++]=w.charCodeAt(N++),b==this.blockSize){i(this,A),b=0;break}}else for(;N<k;)if(A[b++]=w[N++],b==this.blockSize){i(this,A),b=0;break}}this.h=b,this.o+=k},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var k=1;k<w.length-8;++k)w[k]=0;var S=8*this.o;for(k=w.length-8;k<w.length;++k)w[k]=S&255,S/=256;for(this.u(w),w=Array(16),k=S=0;4>k;++k)for(var A=0;32>A;A+=8)w[S++]=this.g[k]>>>A&255;return w};function s(w,k){var S=l;return Object.prototype.hasOwnProperty.call(S,w)?S[w]:S[w]=k(w)}function o(w,k){this.h=k;for(var S=[],A=!0,b=w.length-1;0<=b;b--){var N=w[b]|0;A&&N==k||(S[b]=N,A=!1)}this.g=S}var l={};function u(w){return-128<=w&&128>w?s(w,function(k){return new o([k|0],0>k?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return L(c(-w));for(var k=[],S=1,A=0;w>=S;A++)k[A]=w/S|0,S*=4294967296;return new o(k,0)}function f(w,k){if(w.length==0)throw Error("number format error: empty string");if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(w.charAt(0)=="-")return L(f(w.substring(1),k));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(k,8)),A=m,b=0;b<w.length;b+=8){var N=Math.min(8,w.length-b),R=parseInt(w.substring(b,b+N),k);8>N?(N=c(Math.pow(k,N)),A=A.j(N).add(c(R))):(A=A.j(S),A=A.add(c(R)))}return A}var m=u(0),g=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-L(this).m();for(var w=0,k=1,S=0;S<this.g.length;S++){var A=this.i(S);w+=(0<=A?A:4294967296+A)*k,k*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(x(this))return"0";if(C(this))return"-"+L(this).toString(w);for(var k=c(Math.pow(w,6)),S=this,A="";;){var b=P(S,k).g;S=_(S,b.j(k));var N=((0<S.g.length?S.g[0]:S.h)>>>0).toString(w);if(S=b,x(S))return N+A;for(;6>N.length;)N="0"+N;A=N+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function x(w){if(w.h!=0)return!1;for(var k=0;k<w.g.length;k++)if(w.g[k]!=0)return!1;return!0}function C(w){return w.h==-1}t.l=function(w){return w=_(this,w),C(w)?-1:x(w)?0:1};function L(w){for(var k=w.g.length,S=[],A=0;A<k;A++)S[A]=~w.g[A];return new o(S,~w.h).add(g)}t.abs=function(){return C(this)?L(this):this},t.add=function(w){for(var k=Math.max(this.g.length,w.g.length),S=[],A=0,b=0;b<=k;b++){var N=A+(this.i(b)&65535)+(w.i(b)&65535),R=(N>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);A=R>>>16,N&=65535,R&=65535,S[b]=R<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function _(w,k){return w.add(L(k))}t.j=function(w){if(x(this)||x(w))return m;if(C(this))return C(w)?L(this).j(L(w)):L(L(this).j(w));if(C(w))return L(this.j(L(w)));if(0>this.l(E)&&0>w.l(E))return c(this.m()*w.m());for(var k=this.g.length+w.g.length,S=[],A=0;A<2*k;A++)S[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<w.g.length;b++){var N=this.i(A)>>>16,R=this.i(A)&65535,ge=w.i(b)>>>16,Je=w.i(b)&65535;S[2*A+2*b]+=R*Je,y(S,2*A+2*b),S[2*A+2*b+1]+=N*Je,y(S,2*A+2*b+1),S[2*A+2*b+1]+=R*ge,y(S,2*A+2*b+1),S[2*A+2*b+2]+=N*ge,y(S,2*A+2*b+2)}for(A=0;A<k;A++)S[A]=S[2*A+1]<<16|S[2*A];for(A=k;A<2*k;A++)S[A]=0;return new o(S,0)};function y(w,k){for(;(w[k]&65535)!=w[k];)w[k+1]+=w[k]>>>16,w[k]&=65535,k++}function I(w,k){this.g=w,this.h=k}function P(w,k){if(x(k))throw Error("division by zero");if(x(w))return new I(m,m);if(C(w))return k=P(L(w),k),new I(L(k.g),L(k.h));if(C(k))return k=P(w,L(k)),new I(L(k.g),k.h);if(30<w.g.length){if(C(w)||C(k))throw Error("slowDivide_ only works with positive integers.");for(var S=g,A=k;0>=A.l(w);)S=O(S),A=O(A);var b=M(S,1),N=M(A,1);for(A=M(A,2),S=M(S,2);!x(A);){var R=N.add(A);0>=R.l(w)&&(b=b.add(S),N=R),A=M(A,1),S=M(S,1)}return k=_(w,b.j(k)),new I(b,k)}for(b=m;0<=w.l(k);){for(S=Math.max(1,Math.floor(w.m()/k.m())),A=Math.ceil(Math.log(S)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),N=c(S),R=N.j(k);C(R)||0<R.l(w);)S-=A,N=c(S),R=N.j(k);x(N)&&(N=g),b=b.add(N),w=_(w,R)}return new I(b,w)}t.A=function(w){return P(this,w).h},t.and=function(w){for(var k=Math.max(this.g.length,w.g.length),S=[],A=0;A<k;A++)S[A]=this.i(A)&w.i(A);return new o(S,this.h&w.h)},t.or=function(w){for(var k=Math.max(this.g.length,w.g.length),S=[],A=0;A<k;A++)S[A]=this.i(A)|w.i(A);return new o(S,this.h|w.h)},t.xor=function(w){for(var k=Math.max(this.g.length,w.g.length),S=[],A=0;A<k;A++)S[A]=this.i(A)^w.i(A);return new o(S,this.h^w.h)};function O(w){for(var k=w.g.length+1,S=[],A=0;A<k;A++)S[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(S,w.h)}function M(w,k){var S=k>>5;k%=32;for(var A=w.g.length-S,b=[],N=0;N<A;N++)b[N]=0<k?w.i(N+S)>>>k|w.i(N+S+1)<<32-k:w.i(N+S);return new o(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,K2=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,bi=o}).apply(typeof iv<"u"?iv:typeof self<"u"?self:typeof window<"u"?window:{});var _u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Q2,ya,Y2,Gu,Pp,X2,J2,Z2;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof _u=="object"&&_u];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var T=0;T<a.length-1;T++){var D=a[T];if(!(D in p))break e;p=p[D]}a=a[a.length-1],T=p[a],h=h(T),h!=T&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var p=0,T=!1,D={next:function(){if(!T&&p<a.length){var V=p++;return{value:h(V,a[V]),done:!1}}return T=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function m(a,h,p){if(!a)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,T),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function g(a,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function E(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var T=p.slice();return T.push.apply(T,arguments),a.apply(this,T)}}function x(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(T,D,V){for(var H=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)H[ye-2]=arguments[ye];return h.prototype[D].apply(T,H)}}function C(a){const h=a.length;if(0<h){const p=Array(h);for(let T=0;T<h;T++)p[T]=a[T];return p}return[]}function L(a,h){for(let p=1;p<arguments.length;p++){const T=arguments[p];if(u(T)){const D=a.length||0,V=T.length||0;a.length=D+V;for(let H=0;H<V;H++)a[D+H]=T[H]}else a.push(T)}}class _{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function P(a){return P[" "](a),a}P[" "]=function(){};var O=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function M(a,h,p){for(const T in a)h.call(p,a[T],T,a)}function w(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function k(a){const h={};for(const p in a)h[p]=a[p];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let p,T;for(let D=1;D<arguments.length;D++){T=arguments[D];for(p in T)a[p]=T[p];for(let V=0;V<S.length;V++)p=S[V],Object.prototype.hasOwnProperty.call(T,p)&&(a[p]=T[p])}}function b(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function N(a){l.setTimeout(()=>{throw a},0)}function R(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ge{constructor(){this.h=this.g=null}add(h,p){const T=Je.get();T.set(h,p),this.h?this.h.next=T:this.g=T,this.h=T}}var Je=new _(()=>new Oe,a=>a.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let xe,z=!1,Q=new ge,Z=()=>{const a=l.Promise.resolve(void 0);xe=()=>{a.then(fe)}};var fe=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(p){N(p)}var h=Je;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Mt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function At(a,h){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,T=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(O){e:{try{P(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:_t[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&At.aa.h.call(this)}}x(At,Ie);var _t={2:"touch",3:"pen",4:"mouse"};At.prototype.h=function(){At.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Rt="closure_listenable_"+(1e6*Math.random()|0),fi=0;function $n(a,h,p,T,D){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!T,this.ha=D,this.key=++fi,this.da=this.fa=!1}function mr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Un(a){this.src=a,this.g={},this.h=0}Un.prototype.add=function(a,h,p,T,D){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var H=rh(a,h,T,D);return-1<H?(h=a[H],p||(h.fa=!1)):(h=new $n(h,this.src,V,!!T,D),h.fa=p,a.push(h)),h};function Qt(a,h){var p=h.type;if(p in a.g){var T=a.g[p],D=Array.prototype.indexOf.call(T,h,void 0),V;(V=0<=D)&&Array.prototype.splice.call(T,D,1),V&&(mr(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function rh(a,h,p,T){for(var D=0;D<a.length;++D){var V=a[D];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==T)return D}return-1}var ih="closure_lm_"+(1e6*Math.random()|0),sh={};function hy(a,h,p,T,D){if(Array.isArray(h)){for(var V=0;V<h.length;V++)hy(a,h[V],p,T,D);return null}return p=my(p),a&&a[Rt]?a.K(h,p,c(T)?!!T.capture:!1,D):CI(a,h,p,!1,T,D)}function CI(a,h,p,T,D,V){if(!h)throw Error("Invalid event type");var H=c(D)?!!D.capture:!!D,ye=ah(a);if(ye||(a[ih]=ye=new Un(a)),p=ye.add(h,p,T,H,V),p.proxy)return p;if(T=PI(),p.proxy=T,T.src=a,T.listener=p,a.addEventListener)Mt||(D=H),D===void 0&&(D=!1),a.addEventListener(h.toString(),T,D);else if(a.attachEvent)a.attachEvent(py(h.toString()),T);else if(a.addListener&&a.removeListener)a.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return p}function PI(){function a(p){return h.call(a.src,a.listener,p)}const h=LI;return a}function fy(a,h,p,T,D){if(Array.isArray(h))for(var V=0;V<h.length;V++)fy(a,h[V],p,T,D);else T=c(T)?!!T.capture:!!T,p=my(p),a&&a[Rt]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],p=rh(V,p,T,D),-1<p&&(mr(V[p]),Array.prototype.splice.call(V,p,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=ah(a))&&(h=a.g[h.toString()],a=-1,h&&(a=rh(h,p,T,D)),(p=-1<a?h[a]:null)&&oh(p))}function oh(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Rt])Qt(h.i,a);else{var p=a.type,T=a.proxy;h.removeEventListener?h.removeEventListener(p,T,a.capture):h.detachEvent?h.detachEvent(py(p),T):h.addListener&&h.removeListener&&h.removeListener(T),(p=ah(h))?(Qt(p,a),p.h==0&&(p.src=null,h[ih]=null)):mr(a)}}}function py(a){return a in sh?sh[a]:sh[a]="on"+a}function LI(a,h){if(a.da)a=!0;else{h=new At(h,this);var p=a.listener,T=a.ha||a.src;a.fa&&oh(a),a=p.call(T,h)}return a}function ah(a){return a=a[ih],a instanceof Un?a:null}var lh="__closure_events_fn_"+(1e9*Math.random()>>>0);function my(a){return typeof a=="function"?a:(a[lh]||(a[lh]=function(h){return a.handleEvent(h)}),a[lh])}function at(){se.call(this),this.i=new Un(this),this.M=this,this.F=null}x(at,se),at.prototype[Rt]=!0,at.prototype.removeEventListener=function(a,h,p,T){fy(this,a,h,p,T)};function Et(a,h){var p,T=a.F;if(T)for(p=[];T;T=T.F)p.push(T);if(a=a.M,T=h.type||h,typeof h=="string")h=new Ie(h,a);else if(h instanceof Ie)h.target=h.target||a;else{var D=h;h=new Ie(T,a),A(h,D)}if(D=!0,p)for(var V=p.length-1;0<=V;V--){var H=h.g=p[V];D=Fl(H,T,!0,h)&&D}if(H=h.g=a,D=Fl(H,T,!0,h)&&D,D=Fl(H,T,!1,h)&&D,p)for(V=0;V<p.length;V++)H=h.g=p[V],D=Fl(H,T,!1,h)&&D}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],T=0;T<p.length;T++)mr(p[T]);delete a.g[h],a.h--}}this.F=null},at.prototype.K=function(a,h,p,T){return this.i.add(String(a),h,!1,p,T)},at.prototype.L=function(a,h,p,T){return this.i.add(String(a),h,!0,p,T)};function Fl(a,h,p,T){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,V=0;V<h.length;++V){var H=h[V];if(H&&!H.da&&H.capture==p){var ye=H.listener,Ze=H.ha||H.src;H.fa&&Qt(a.i,H),D=ye.call(Ze,T)!==!1&&D}}return D&&!T.defaultPrevented}function gy(a,h,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function yy(a){a.g=gy(()=>{a.g=null,a.i&&(a.i=!1,yy(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class bI extends se{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:yy(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $o(a){se.call(this),this.h=a,this.g={}}x($o,se);var vy=[];function _y(a){M(a.g,function(h,p){this.g.hasOwnProperty(p)&&oh(h)},a),a.g={}}$o.prototype.N=function(){$o.aa.N.call(this),_y(this)},$o.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var uh=l.JSON.stringify,NI=l.JSON.parse,OI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ch(){}ch.prototype.h=null;function Ey(a){return a.h||(a.h=a.i())}function ky(){}var Uo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function dh(){Ie.call(this,"d")}x(dh,Ie);function hh(){Ie.call(this,"c")}x(hh,Ie);var pi={},wy=null;function $l(){return wy=wy||new at}pi.La="serverreachability";function Ty(a){Ie.call(this,pi.La,a)}x(Ty,Ie);function Wo(a){const h=$l();Et(h,new Ty(h))}pi.STAT_EVENT="statevent";function Iy(a,h){Ie.call(this,pi.STAT_EVENT,a),this.stat=h}x(Iy,Ie);function kt(a){const h=$l();Et(h,new Iy(h,a))}pi.Ma="timingevent";function Sy(a,h){Ie.call(this,pi.Ma,a),this.size=h}x(Sy,Ie);function Bo(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function zo(){this.g=!0}zo.prototype.xa=function(){this.g=!1};function DI(a,h,p,T,D,V){a.info(function(){if(a.g)if(V)for(var H="",ye=V.split("&"),Ze=0;Ze<ye.length;Ze++){var ce=ye[Ze].split("=");if(1<ce.length){var lt=ce[0];ce=ce[1];var ut=lt.split("_");H=2<=ut.length&&ut[1]=="type"?H+(lt+"="+ce+"&"):H+(lt+"=redacted&")}}else H=null;else H=V;return"XMLHTTP REQ ("+T+") [attempt "+D+"]: "+h+`
`+p+`
`+H})}function jI(a,h,p,T,D,V,H){a.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+D+"]: "+h+`
`+p+`
`+V+" "+H})}function ks(a,h,p,T){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+MI(a,p)+(T?" "+T:"")})}function VI(a,h){a.info(function(){return"TIMEOUT: "+h})}zo.prototype.info=function(){};function MI(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var T=p[a];if(!(2>T.length)){var D=T[1];if(Array.isArray(D)&&!(1>D.length)){var V=D[0];if(V!="noop"&&V!="stop"&&V!="close")for(var H=1;H<D.length;H++)D[H]=""}}}}return uh(p)}catch{return h}}var Ul={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fh;function Wl(){}x(Wl,ch),Wl.prototype.g=function(){return new XMLHttpRequest},Wl.prototype.i=function(){return{}},fh=new Wl;function gr(a,h,p,T){this.j=a,this.i=h,this.l=p,this.R=T||1,this.U=new $o(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ay}function Ay(){this.i=null,this.g="",this.h=!1}var Ry={},ph={};function mh(a,h,p){a.L=1,a.v=ql(Wn(h)),a.m=p,a.P=!0,Cy(a,null)}function Cy(a,h){a.F=Date.now(),Bl(a),a.A=Wn(a.v);var p=a.A,T=a.R;Array.isArray(T)||(T=[String(T)]),By(p.i,"t",T),a.C=0,p=a.j.J,a.h=new Ay,a.g=a1(a.j,p?h:null,!a.m),0<a.O&&(a.M=new bI(g(a.Y,a,a.g),a.O)),h=a.U,p=a.g,T=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(vy[0]=D.toString()),D=vy);for(var V=0;V<D.length;V++){var H=hy(p,D[V],T||h.handleEvent,!1,h.h||h);if(!H)break;h.g[H.key]=H}h=a.H?k(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Wo(),DI(a.i,a.u,a.A,a.l,a.R,a.m)}gr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Bn(a)==3?h.j():this.Y(a)},gr.prototype.Y=function(a){try{if(a==this.g)e:{const ut=Bn(this.g);var h=this.g.Ba();const Is=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Yy(this.g)))){this.J||ut!=4||h==7||(h==8||0>=Is?Wo(3):Wo(2)),gh(this);var p=this.g.Z();this.X=p;t:if(Py(this)){var T=Yy(this.g);a="";var D=T.length,V=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mi(this),Ho(this);var H="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(T[h],{stream:!(V&&h==D-1)});T.length=0,this.h.g+=a,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=p==200,jI(this.i,this.u,this.A,this.l,this.R,ut,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,Ze=this.g;if((ye=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(ye)){var ce=ye;break t}}ce=null}if(p=ce)ks(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yh(this,p);else{this.o=!1,this.s=3,kt(12),mi(this),Ho(this);break e}}if(this.P){p=!0;let un;for(;!this.J&&this.C<H.length;)if(un=FI(this,H),un==ph){ut==4&&(this.s=4,kt(14),p=!1),ks(this.i,this.l,null,"[Incomplete Response]");break}else if(un==Ry){this.s=4,kt(15),ks(this.i,this.l,H,"[Invalid Chunk]"),p=!1;break}else ks(this.i,this.l,un,null),yh(this,un);if(Py(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||H.length!=0||this.h.h||(this.s=1,kt(16),p=!1),this.o=this.o&&p,!p)ks(this.i,this.l,H,"[Invalid Chunked Response]"),mi(this),Ho(this);else if(0<H.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Th(lt),lt.M=!0,kt(11))}}else ks(this.i,this.l,H,null),yh(this,H);ut==4&&mi(this),this.o&&!this.J&&(ut==4?r1(this.j,this):(this.o=!1,Bl(this)))}else nS(this.g),p==400&&0<H.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),mi(this),Ho(this)}}}catch{}finally{}};function Py(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function FI(a,h){var p=a.C,T=h.indexOf(`
`,p);return T==-1?ph:(p=Number(h.substring(p,T)),isNaN(p)?Ry:(T+=1,T+p>h.length?ph:(h=h.slice(T,T+p),a.C=T+p,h)))}gr.prototype.cancel=function(){this.J=!0,mi(this)};function Bl(a){a.S=Date.now()+a.I,Ly(a,a.I)}function Ly(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Bo(g(a.ba,a),h)}function gh(a){a.B&&(l.clearTimeout(a.B),a.B=null)}gr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(VI(this.i,this.A),this.L!=2&&(Wo(),kt(17)),mi(this),this.s=2,Ho(this)):Ly(this,this.S-a)};function Ho(a){a.j.G==0||a.J||r1(a.j,a)}function mi(a){gh(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,_y(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function yh(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||vh(p.h,a))){if(!a.K&&vh(p.h,a)&&p.G==3){try{var T=p.Da.g.parse(h)}catch{T=null}if(Array.isArray(T)&&T.length==3){var D=T;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Jl(p),Yl(p);else break e;wh(p),kt(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=Bo(g(p.Za,p),6e3));if(1>=Oy(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else yi(p,11)}else if((a.K||p.g==a)&&Jl(p),!y(h))for(D=p.Da.g.parse(h),h=0;h<D.length;h++){let ce=D[h];if(p.T=ce[0],ce=ce[1],p.G==2)if(ce[0]=="c"){p.K=ce[1],p.ia=ce[2];const lt=ce[3];lt!=null&&(p.la=lt,p.j.info("VER="+p.la));const ut=ce[4];ut!=null&&(p.Aa=ut,p.j.info("SVER="+p.Aa));const Is=ce[5];Is!=null&&typeof Is=="number"&&0<Is&&(T=1.5*Is,p.L=T,p.j.info("backChannelRequestTimeoutMs_="+T)),T=p;const un=a.g;if(un){const eu=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eu){var V=T.h;V.g||eu.indexOf("spdy")==-1&&eu.indexOf("quic")==-1&&eu.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(_h(V,V.h),V.h=null))}if(T.D){const Ih=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;Ih&&(T.ya=Ih,_e(T.I,T.D,Ih))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),T=p;var H=a;if(T.qa=o1(T,T.J?T.ia:null,T.W),H.K){Dy(T.h,H);var ye=H,Ze=T.L;Ze&&(ye.I=Ze),ye.B&&(gh(ye),Bl(ye)),T.g=H}else t1(T);0<p.i.length&&Xl(p)}else ce[0]!="stop"&&ce[0]!="close"||yi(p,7);else p.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?yi(p,7):kh(p):ce[0]!="noop"&&p.l&&p.l.ta(ce),p.v=0)}}Wo(4)}catch{}}var $I=class{constructor(a,h){this.g=a,this.map=h}};function by(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ny(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Oy(a){return a.h?1:a.g?a.g.size:0}function vh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function _h(a,h){a.g?a.g.add(h):a.h=h}function Dy(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}by.prototype.cancel=function(){if(this.i=jy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function jy(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return C(a.i)}function UI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,T=0;T<p;T++)h.push(a[T]);return h}h=[],p=0;for(T in a)h[p++]=a[T];return h}function WI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const T in a)h[p++]=T;return h}}}function Vy(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=WI(a),T=UI(a),D=T.length,V=0;V<D;V++)h.call(void 0,T[V],p&&p[V],a)}var My=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BI(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var T=a[p].indexOf("="),D=null;if(0<=T){var V=a[p].substring(0,T);D=a[p].substring(T+1)}else V=a[p];h(V,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function gi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gi){this.h=a.h,zl(this,a.j),this.o=a.o,this.g=a.g,Hl(this,a.s),this.l=a.l;var h=a.i,p=new Ko;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Fy(this,p),this.m=a.m}else a&&(h=String(a).match(My))?(this.h=!1,zl(this,h[1]||"",!0),this.o=qo(h[2]||""),this.g=qo(h[3]||"",!0),Hl(this,h[4]),this.l=qo(h[5]||"",!0),Fy(this,h[6]||"",!0),this.m=qo(h[7]||"")):(this.h=!1,this.i=new Ko(null,this.h))}gi.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Go(h,$y,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Go(h,$y,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Go(p,p.charAt(0)=="/"?qI:HI,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Go(p,KI)),a.join("")};function Wn(a){return new gi(a)}function zl(a,h,p){a.j=p?qo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Hl(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Fy(a,h,p){h instanceof Ko?(a.i=h,QI(a.i,a.h)):(p||(h=Go(h,GI)),a.i=new Ko(h,a.h))}function _e(a,h,p){a.i.set(h,p)}function ql(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function qo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Go(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,zI),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function zI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var $y=/[#\/\?@]/g,HI=/[#\?:]/g,qI=/[#\?]/g,GI=/[#\?@]/g,KI=/#/g;function Ko(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function yr(a){a.g||(a.g=new Map,a.h=0,a.i&&BI(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Ko.prototype,t.add=function(a,h){yr(this),this.i=null,a=ws(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Uy(a,h){yr(a),h=ws(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Wy(a,h){return yr(a),h=ws(a,h),a.g.has(h)}t.forEach=function(a,h){yr(this),this.g.forEach(function(p,T){p.forEach(function(D){a.call(h,D,T,this)},this)},this)},t.na=function(){yr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let T=0;T<h.length;T++){const D=a[T];for(let V=0;V<D.length;V++)p.push(h[T])}return p},t.V=function(a){yr(this);let h=[];if(typeof a=="string")Wy(this,a)&&(h=h.concat(this.g.get(ws(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return yr(this),this.i=null,a=ws(this,a),Wy(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function By(a,h,p){Uy(a,h),0<p.length&&(a.i=null,a.g.set(ws(a,h),C(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var T=h[p];const V=encodeURIComponent(String(T)),H=this.V(T);for(T=0;T<H.length;T++){var D=V;H[T]!==""&&(D+="="+encodeURIComponent(String(H[T]))),a.push(D)}}return this.i=a.join("&")};function ws(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function QI(a,h){h&&!a.j&&(yr(a),a.i=null,a.g.forEach(function(p,T){var D=T.toLowerCase();T!=D&&(Uy(this,T),By(this,D,p))},a)),a.j=h}function YI(a,h){const p=new zo;if(l.Image){const T=new Image;T.onload=E(vr,p,"TestLoadImage: loaded",!0,h,T),T.onerror=E(vr,p,"TestLoadImage: error",!1,h,T),T.onabort=E(vr,p,"TestLoadImage: abort",!1,h,T),T.ontimeout=E(vr,p,"TestLoadImage: timeout",!1,h,T),l.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=a}else h(!1)}function XI(a,h){const p=new zo,T=new AbortController,D=setTimeout(()=>{T.abort(),vr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:T.signal}).then(V=>{clearTimeout(D),V.ok?vr(p,"TestPingServer: ok",!0,h):vr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),vr(p,"TestPingServer: error",!1,h)})}function vr(a,h,p,T,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),T(p)}catch{}}function JI(){this.g=new OI}function ZI(a,h,p){const T=p||"";try{Vy(a,function(D,V){let H=D;c(D)&&(H=uh(D)),h.push(T+V+"="+encodeURIComponent(H))})}catch(D){throw h.push(T+"type="+encodeURIComponent("_badmap")),D}}function Gl(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Gl,ch),Gl.prototype.g=function(){return new Kl(this.l,this.j)},Gl.prototype.i=function(a){return function(){return a}}({});function Kl(a,h){at.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Kl,at),t=Kl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Yo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Yo(this)),this.g&&(this.readyState=3,Yo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zy(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function zy(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Qo(this):Yo(this),this.readyState==3&&zy(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Qo(this))},t.Qa=function(a){this.g&&(this.response=a,Qo(this))},t.ga=function(){this.g&&Qo(this)};function Qo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Yo(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Yo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Kl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Hy(a){let h="";return M(a,function(p,T){h+=T,h+=":",h+=p,h+=`\r
`}),h}function Eh(a,h,p){e:{for(T in p){var T=!1;break e}T=!0}T||(p=Hy(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):_e(a,h,p))}function be(a){at.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(be,at);var eS=/^https?$/i,tS=["POST","PUT"];t=be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fh.g(),this.v=this.o?Ey(this.o):Ey(fh),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){qy(this,V);return}if(a=p||"",p=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var D in T)p.set(D,T[D]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const V of T.keys())p.set(V,T.get(V));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(tS,h,void 0))||T||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,H]of p)this.g.setRequestHeader(V,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qy(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){qy(this,V)}};function qy(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Gy(a),Ql(a)}function Gy(a){a.A||(a.A=!0,Et(a,"complete"),Et(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Et(this,"complete"),Et(this,"abort"),Ql(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ql(this,!0)),be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ky(this):this.bb())},t.bb=function(){Ky(this)};function Ky(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Bn(a)!=4||a.Z()!=2)){if(a.u&&Bn(a)==4)gy(a.Ea,0,a);else if(Et(a,"readystatechange"),Bn(a)==4){a.h=!1;try{const H=a.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var T;if(T=H===0){var D=String(a.D).match(My)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),T=!eS.test(D?D.toLowerCase():"")}p=T}if(p)Et(a,"complete"),Et(a,"success");else{a.m=6;try{var V=2<Bn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Gy(a)}}finally{Ql(a)}}}}function Ql(a,h){if(a.g){Qy(a);const p=a.g,T=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Et(a,"ready");try{p.onreadystatechange=T}catch{}}}function Qy(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Bn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),NI(h)}};function Yy(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function nS(a){const h={};a=(a.g&&2<=Bn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<a.length;T++){if(y(a[T]))continue;var p=b(a[T]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[D]||[];h[D]=V,V.push(p)}w(h,function(T){return T.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xo(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Xy(a){this.Aa=0,this.i=[],this.j=new zo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xo("baseRetryDelayMs",5e3,a),this.cb=Xo("retryDelaySeedMs",1e4,a),this.Wa=Xo("forwardChannelMaxRetries",2,a),this.wa=Xo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new by(a&&a.concurrentRequestLimit),this.Da=new JI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Xy.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,T){kt(0),this.W=a,this.H=h||{},p&&T!==void 0&&(this.H.OSID=p,this.H.OAID=T),this.F=this.X,this.I=o1(this,null,this.W),Xl(this)};function kh(a){if(Jy(a),a.G==3){var h=a.U++,p=Wn(a.I);if(_e(p,"SID",a.K),_e(p,"RID",h),_e(p,"TYPE","terminate"),Jo(a,p),h=new gr(a,a.j,h),h.L=2,h.v=ql(Wn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=a1(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Bl(h)}s1(a)}function Yl(a){a.g&&(Th(a),a.g.cancel(),a.g=null)}function Jy(a){Yl(a),a.u&&(l.clearTimeout(a.u),a.u=null),Jl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Xl(a){if(!Ny(a.h)&&!a.s){a.s=!0;var h=a.Ga;xe||Z(),z||(xe(),z=!0),Q.add(h,a),a.B=0}}function rS(a,h){return Oy(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Bo(g(a.Ga,a,h),i1(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new gr(this,this.j,a);let V=this.o;if(this.S&&(V?(V=k(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(D.H=V,V=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var T=this.i[p];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(h+=T,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=e1(this,D,h),p=Wn(this.I),_e(p,"RID",a),_e(p,"CVER",22),this.D&&_e(p,"X-HTTP-Session-Id",this.D),Jo(this,p),V&&(this.O?h="headers="+encodeURIComponent(String(Hy(V)))+"&"+h:this.m&&Eh(p,this.m,V)),_h(this.h,D),this.Ua&&_e(p,"TYPE","init"),this.P?(_e(p,"$req",h),_e(p,"SID","null"),D.T=!0,mh(D,p,null)):mh(D,p,h),this.G=2}}else this.G==3&&(a?Zy(this,a):this.i.length==0||Ny(this.h)||Zy(this))};function Zy(a,h){var p;h?p=h.l:p=a.U++;const T=Wn(a.I);_e(T,"SID",a.K),_e(T,"RID",p),_e(T,"AID",a.T),Jo(a,T),a.m&&a.o&&Eh(T,a.m,a.o),p=new gr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=e1(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),_h(a.h,p),mh(p,T,h)}function Jo(a,h){a.H&&M(a.H,function(p,T){_e(h,T,p)}),a.l&&Vy({},function(p,T){_e(h,T,p)})}function e1(a,h,p){p=Math.min(a.i.length,p);var T=a.l?g(a.l.Na,a.l,a):null;e:{var D=a.i;let V=-1;for(;;){const H=["count="+p];V==-1?0<p?(V=D[0].g,H.push("ofs="+V)):V=0:H.push("ofs="+V);let ye=!0;for(let Ze=0;Ze<p;Ze++){let ce=D[Ze].g;const lt=D[Ze].map;if(ce-=V,0>ce)V=Math.max(0,D[Ze].g-100),ye=!1;else try{ZI(lt,H,"req"+ce+"_")}catch{T&&T(lt)}}if(ye){T=H.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,T}function t1(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;xe||Z(),z||(xe(),z=!0),Q.add(h,a),a.v=0}}function wh(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Bo(g(a.Fa,a),i1(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,n1(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Bo(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),Yl(this),n1(this))};function Th(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function n1(a){a.g=new gr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Wn(a.qa);_e(h,"RID","rpc"),_e(h,"SID",a.K),_e(h,"AID",a.T),_e(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(h,"TO",a.ja),_e(h,"TYPE","xmlhttp"),Jo(a,h),a.m&&a.o&&Eh(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=ql(Wn(h)),p.m=null,p.P=!0,Cy(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Yl(this),wh(this),kt(19))};function Jl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function r1(a,h){var p=null;if(a.g==h){Jl(a),Th(a),a.g=null;var T=2}else if(vh(a.h,h))p=h.D,Dy(a.h,h),T=1;else return;if(a.G!=0){if(h.o)if(T==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;T=$l(),Et(T,new Sy(T,p)),Xl(a)}else t1(a);else if(D=h.s,D==3||D==0&&0<h.X||!(T==1&&rS(a,h)||T==2&&wh(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),D){case 1:yi(a,5);break;case 4:yi(a,10);break;case 3:yi(a,6);break;default:yi(a,2)}}}function i1(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function yi(a,h){if(a.j.info("Error code "+h),h==2){var p=g(a.fb,a),T=a.Xa;const D=!T;T=new gi(T||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||zl(T,"https"),ql(T),D?YI(T.toString(),p):XI(T.toString(),p)}else kt(2);a.G=0,a.l&&a.l.sa(h),s1(a),Jy(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function s1(a){if(a.G=0,a.ka=[],a.l){const h=jy(a.h);(h.length!=0||a.i.length!=0)&&(L(a.ka,h),L(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function o1(a,h,p){var T=p instanceof gi?Wn(p):new gi(p);if(T.g!="")h&&(T.g=h+"."+T.g),Hl(T,T.s);else{var D=l.location;T=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var V=new gi(null);T&&zl(V,T),h&&(V.g=h),D&&Hl(V,D),p&&(V.l=p),T=V}return p=a.D,h=a.ya,p&&h&&_e(T,p,h),_e(T,"VER",a.la),Jo(a,T),T}function a1(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new be(new Gl({eb:p})):new be(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function l1(){}t=l1.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Zl(){}Zl.prototype.g=function(a,h){return new Ft(a,h)};function Ft(a,h){at.call(this),this.g=new Xy(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!y(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ts(this)}x(Ft,at),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){kh(this.g)},Ft.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=uh(a),a=p);h.i.push(new $I(h.Ya++,a)),h.G==3&&Xl(h)},Ft.prototype.N=function(){this.g.l=null,delete this.j,kh(this.g),delete this.g,Ft.aa.N.call(this)};function u1(a){dh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}x(u1,dh);function c1(){hh.call(this),this.status=1}x(c1,hh);function Ts(a){this.g=a}x(Ts,l1),Ts.prototype.ua=function(){Et(this.g,"a")},Ts.prototype.ta=function(a){Et(this.g,new u1(a))},Ts.prototype.sa=function(a){Et(this.g,new c1)},Ts.prototype.ra=function(){Et(this.g,"b")},Zl.prototype.createWebChannel=Zl.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,Z2=function(){return new Zl},J2=function(){return $l()},X2=pi,Pp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ul.NO_ERROR=0,Ul.TIMEOUT=8,Ul.HTTP_ERROR=6,Gu=Ul,xy.COMPLETE="complete",Y2=xy,ky.EventType=Uo,Uo.OPEN="a",Uo.CLOSE="b",Uo.ERROR="c",Uo.MESSAGE="d",at.prototype.listen=at.prototype.K,ya=ky,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,Q2=be}).apply(typeof _u<"u"?_u:typeof self<"u"?self:typeof window<"u"?window:{});const sv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ft=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new wd("@firebase/firestore");function aa(){return Wi.logLevel}function K(t,...e){if(Wi.logLevel<=ae.DEBUG){const n=e.map(hg);Wi.debug(`Firestore (${Do}): ${t}`,...n)}}function cr(t,...e){if(Wi.logLevel<=ae.ERROR){const n=e.map(hg);Wi.error(`Firestore (${Do}): ${t}`,...n)}}function mo(t,...e){if(Wi.logLevel<=ae.WARN){const n=e.map(hg);Wi.warn(`Firestore (${Do}): ${t}`,...n)}}function hg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Do}) INTERNAL ASSERTION FAILED: `+t;throw cr(e),new Error(e)}function me(t,e){t||ee()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class NL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OL{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new rr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new ew(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new ft(e)}}class DL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class jL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new DL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class VL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ML{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){me(this.o===void 0);const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new VL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=FL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function go(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Be(0,0))}static max(){return new te(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ul.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ul?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends ul{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const $L=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends ul{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return $L.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(we.fromString(e))}static fromName(e){return new Y(we.fromString(e).popFirst(5))}static empty(){return new Y(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new we(e.slice()))}}function UL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new ti(i,Y.empty(),e)}function WL(t){return new ti(t.readTime,t.key,-1)}class ti{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ti(te.min(),Y.empty(),-1)}static max(){return new ti(te.max(),Y.empty(),-1)}}function BL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==zL)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):W.reject(n)}static resolve(e){return new W((n,r)=>{n(e)})}static reject(e){return new W((n,r)=>{r(e)})}static waitFor(e){return new W((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=W.resolve(!1);for(const r of e)n=n.next(i=>i?W.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new W((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new W((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function qL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ll(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class fg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}fg.oe=-1;function Ad(t){return t==null}function Mc(t){return t===0&&1/t==-1/0}function GL(t){return typeof t=="number"&&Number.isInteger(t)&&!Mc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ji(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eu(this.root,e,this.comparator,!0)}}class Eu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??tt.RED,this.left=i??tt.EMPTY,this.right=s??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new av(this.data.getIterator())}getIteratorFrom(e){return new av(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class av{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new it(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class rw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new rw("Invalid base64 string: "+s):s}}(e);return new ot(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const KL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ni(t){if(me(!!t),typeof t=="string"){let e=0;const n=KL.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bi(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function mg(t){const e=t.mapValue.fields.__previous_value__;return pg(e)?mg(e):e}function cl(t){const e=ni(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class dl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new dl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof dl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku={mapValue:{}};function zi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pg(t)?4:XL(t)?9007199254740991:YL(t)?10:11:ee()}function jn(t,e){if(t===e)return!0;const n=zi(t);if(n!==zi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cl(t).isEqual(cl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ni(i.timestampValue),l=ni(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Bi(i.bytesValue).isEqual(Bi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return De(i.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(i.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return De(i.integerValue)===De(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=De(i.doubleValue),l=De(s.doubleValue);return o===l?Mc(o)===Mc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return go(t.arrayValue.values||[],e.arrayValue.values||[],jn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(ov(o)!==ov(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!jn(o[u],l[u])))return!1;return!0}(t,e);default:return ee()}}function hl(t,e){return(t.values||[]).find(n=>jn(n,e))!==void 0}function yo(t,e){if(t===e)return 0;const n=zi(t),r=zi(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=De(s.integerValue||s.doubleValue),u=De(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return lv(t.timestampValue,e.timestampValue);case 4:return lv(cl(t),cl(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Bi(s),u=Bi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=de(l[c],u[c]);if(f!==0)return f}return de(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=de(De(s.latitude),De(o.latitude));return l!==0?l:de(De(s.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return uv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const m=s.fields||{},g=o.fields||{},E=(l=m.value)===null||l===void 0?void 0:l.arrayValue,x=(u=g.value)===null||u===void 0?void 0:u.arrayValue,C=de(((c=E==null?void 0:E.values)===null||c===void 0?void 0:c.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:uv(E,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ku.mapValue&&o===ku.mapValue)return 0;if(s===ku.mapValue)return 1;if(o===ku.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=de(u[m],f[m]);if(g!==0)return g;const E=yo(l[u[m]],c[f[m]]);if(E!==0)return E}return de(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ee()}}function lv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=ni(t),r=ni(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function uv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=yo(n[i],r[i]);if(s)return s}return de(n.length,r.length)}function vo(t){return Lp(t)}function Lp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ni(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Bi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Lp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Lp(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function cv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function bp(t){return!!t&&"integerValue"in t}function gg(t){return!!t&&"arrayValue"in t}function dv(t){return!!t&&"nullValue"in t}function hv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ku(t){return!!t&&"mapValue"in t}function YL(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Na(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ji(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Na(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Na(t.arrayValue.values[n]);return e}return Object.assign({},t)}function XL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ku(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Na(n)}setAll(e){let n=nt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Na(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ku(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ku(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ji(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Pt(Na(this.value))}}function iw(t){const e=[];return Ji(t.fields,(n,r)=>{const i=new nt([n]);if(Ku(r)){const s=iw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new mt(e,0,te.min(),te.min(),te.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,i){return new mt(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new mt(e,2,n,te.min(),te.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,te.min(),te.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fc{constructor(e,n){this.position=e,this.inclusive=n}}function fv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=yo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function pv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class fl{constructor(e,n="asc"){this.field=e,this.dir=n}}function JL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class sw{}class We extends sw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new e4(e,n,r):n==="array-contains"?new r4(e,r):n==="in"?new i4(e,r):n==="not-in"?new s4(e,r):n==="array-contains-any"?new o4(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new t4(e,r):new n4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(yo(n,this.value)):n!==null&&zi(this.value)===zi(n)&&this.matchesComparison(yo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wn extends sw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new wn(e,n)}matches(e){return ow(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ow(t){return t.op==="and"}function aw(t){return ZL(t)&&ow(t)}function ZL(t){for(const e of t.filters)if(e instanceof wn)return!1;return!0}function Np(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+vo(t.value);if(aw(t))return t.filters.map(e=>Np(e)).join(",");{const e=t.filters.map(n=>Np(n)).join(",");return`${t.op}(${e})`}}function lw(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&jn(r.value,i.value)}(t,e):t instanceof wn?function(r,i){return i instanceof wn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&lw(o,i.filters[l]),!0):!1}(t,e):void ee()}function uw(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${vo(n.value)}`}(t):t instanceof wn?function(n){return n.op.toString()+" {"+n.getFilters().map(uw).join(" ,")+"}"}(t):"Filter"}class e4 extends We{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class t4 extends We{constructor(e,n){super(e,"in",n),this.keys=cw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class n4 extends We{constructor(e,n){super(e,"not-in",n),this.keys=cw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class r4 extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gg(n)&&hl(n.arrayValue,this.value)}}class i4 extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hl(this.value.arrayValue,n)}}class s4 extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!hl(this.value.arrayValue,n)}}class o4 extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>hl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function mv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new a4(t,e,n,r,i,s,o)}function yg(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Np(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ad(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vo(r)).join(",")),e.ue=n}return e.ue}function vg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pv(t.startAt,e.startAt)&&pv(t.endAt,e.endAt)}function Op(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function l4(t,e,n,r,i,s,o,l){return new jo(t,e,n,r,i,s,o,l)}function _g(t){return new jo(t)}function gv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dw(t){return t.collectionGroup!==null}function Oa(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new it(nt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new fl(s,r))}),n.has(nt.keyField().canonicalString())||e.ce.push(new fl(nt.keyField(),r))}return e.ce}function On(t){const e=ne(t);return e.le||(e.le=u4(e,Oa(t))),e.le}function u4(t,e){if(t.limitType==="F")return mv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new fl(i.field,s)});const n=t.endAt?new Fc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Fc(t.startAt.position,t.startAt.inclusive):null;return mv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Dp(t,e){const n=t.filters.concat([e]);return new jo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $c(t,e,n){return new jo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rd(t,e){return vg(On(t),On(e))&&t.limitType===e.limitType}function hw(t){return`${yg(On(t))}|lt:${t.limitType}`}function Ns(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>uw(i)).join(", ")}]`),Ad(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>vo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>vo(i)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function Cd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Oa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=fv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Oa(r),i)||r.endAt&&!function(o,l,u){const c=fv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Oa(r),i))}(t,e)}function c4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fw(t){return(e,n)=>{let r=!1;for(const i of Oa(t)){const s=d4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function d4(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?yo(u,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ji(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return nw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h4=new Le(Y.comparator);function dr(){return h4}const pw=new Le(Y.comparator);function va(...t){let e=pw;for(const n of t)e=e.insert(n.key,n);return e}function mw(t){let e=pw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ai(){return Da()}function gw(){return Da()}function Da(){return new Vo(t=>t.toString(),(t,e)=>t.isEqual(e))}const f4=new Le(Y.comparator),p4=new it(Y.comparator);function oe(...t){let e=p4;for(const n of t)e=e.add(n);return e}const m4=new it(de);function g4(){return m4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mc(e)?"-0":e}}function yw(t){return{integerValue:""+t}}function y4(t,e){return GL(e)?yw(e):Eg(t,e)}/**
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
 */class Pd{constructor(){this._=void 0}}function v4(t,e,n){return t instanceof pl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&pg(s)&&(s=mg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ml?_w(t,e):t instanceof gl?Ew(t,e):function(i,s){const o=vw(i,s),l=yv(o)+yv(i.Pe);return bp(o)&&bp(i.Pe)?yw(l):Eg(i.serializer,l)}(t,e)}function _4(t,e,n){return t instanceof ml?_w(t,e):t instanceof gl?Ew(t,e):n}function vw(t,e){return t instanceof Uc?function(r){return bp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class pl extends Pd{}class ml extends Pd{constructor(e){super(),this.elements=e}}function _w(t,e){const n=kw(e);for(const r of t.elements)n.some(i=>jn(i,r))||n.push(r);return{arrayValue:{values:n}}}class gl extends Pd{constructor(e){super(),this.elements=e}}function Ew(t,e){let n=kw(e);for(const r of t.elements)n=n.filter(i=>!jn(i,r));return{arrayValue:{values:n}}}class Uc extends Pd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function yv(t){return De(t.integerValue||t.doubleValue)}function kw(t){return gg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e,n){this.field=e,this.transform=n}}function k4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ml&&i instanceof ml||r instanceof gl&&i instanceof gl?go(r.elements,i.elements,jn):r instanceof Uc&&i instanceof Uc?jn(r.Pe,i.Pe):r instanceof pl&&i instanceof pl}(t.transform,e.transform)}class w4{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ld{}function ww(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kg(t.key,nn.none()):new bl(t.key,t.data,nn.none());{const n=t.data,r=Pt.empty();let i=new it(nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new di(t.key,r,new Bt(i.toArray()),nn.none())}}function T4(t,e,n){t instanceof bl?function(i,s,o){const l=i.value.clone(),u=_v(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof di?function(i,s,o){if(!Qu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=_v(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Tw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ja(t,e,n,r){return t instanceof bl?function(s,o,l,u){if(!Qu(s.precondition,o))return l;const c=s.value.clone(),f=Ev(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof di?function(s,o,l,u){if(!Qu(s.precondition,o))return l;const c=Ev(s.fieldTransforms,u,o),f=o.data;return f.setAll(Tw(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Qu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function I4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=vw(r.transform,i||null);s!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,s))}return n||null}function vv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&go(r,i,(s,o)=>k4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bl extends Ld{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class di extends Ld{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Tw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _v(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,_4(o,l,n[i]))}return r}function Ev(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,v4(s,o,e))}return r}class kg extends Ld{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class S4 extends Ld{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&T4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ja(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ja(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=ww(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,(n,r)=>vv(n,r))&&go(this.baseMutations,e.baseMutations,(n,r)=>vv(n,r))}}class wg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return f4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new wg(e,n,r,i)}}/**
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
 */class A4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class R4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,le;function C4(t){switch(t){default:return ee();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function Iw(t){if(t===void 0)return cr("GRPC error has no .code"),$.UNKNOWN;switch(t){case Fe.OK:return $.OK;case Fe.CANCELLED:return $.CANCELLED;case Fe.UNKNOWN:return $.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return $.INTERNAL;case Fe.UNAVAILABLE:return $.UNAVAILABLE;case Fe.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Fe.NOT_FOUND:return $.NOT_FOUND;case Fe.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Fe.ABORTED:return $.ABORTED;case Fe.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Fe.DATA_LOSS:return $.DATA_LOSS;default:return ee()}}(le=Fe||(Fe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function P4(){return new TextEncoder}/**
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
 */const L4=new bi([4294967295,4294967295],0);function kv(t){const e=P4().encode(t),n=new K2;return n.update(e),new Uint8Array(n.digest())}function wv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new bi([n,r],0),new bi([i,s],0)]}class Tg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _a(`Invalid padding: ${n}`);if(r<0)throw new _a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _a(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=bi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(bi.fromNumber(r)));return i.compare(L4)===1&&(i=new bi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=kv(e),[r,i]=wv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Tg(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=kv(e),[r,i]=wv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Nl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new bd(te.min(),i,new Le(de),dr(),oe())}}class Nl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Nl(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Sw{constructor(e,n){this.targetId=e,this.me=n}}class xw{constructor(e,n,r=ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Tv{constructor(){this.fe=0,this.ge=Sv(),this.pe=ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new Nl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Sv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class b4{constructor(e){this.Le=e,this.Be=new Map,this.ke=dr(),this.qe=Iv(),this.Qe=new Le(de)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Op(s))if(r===0){const o=new Y(s.path);this.Ue(n,o,mt.newNoDocument(o,te.min()))}else me(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Bi(r).toUint8Array()}catch(u){if(u instanceof rw)return mo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Tg(o,i,s)}catch(u){return mo(u instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Op(l.target)){const u=new Y(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,mt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=oe();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new bd(e,n,this.Qe,this.ke,r);return this.ke=dr(),this.qe=Iv(),this.Qe=new Le(de),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Tv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new it(de),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Tv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Iv(){return new Le(Y.comparator)}function Sv(){return new Le(Y.comparator)}const N4={asc:"ASCENDING",desc:"DESCENDING"},O4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},D4={and:"AND",or:"OR"};class j4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function jp(t,e){return t.useProto3Json||Ad(e)?e:{value:e}}function Wc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Aw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function V4(t,e){return Wc(t,e.toTimestamp())}function Dn(t){return me(!!t),te.fromTimestamp(function(n){const r=ni(n);return new Be(r.seconds,r.nanos)}(t))}function Ig(t,e){return Vp(t,e).canonicalString()}function Vp(t,e){const n=function(i){return new we(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Rw(t){const e=we.fromString(t);return me(Nw(e)),e}function Mp(t,e){return Ig(t.databaseId,e.path)}function of(t,e){const n=Rw(e);if(n.get(1)!==t.databaseId.projectId)throw new q($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(Pw(n))}function Cw(t,e){return Ig(t.databaseId,e)}function M4(t){const e=Rw(t);return e.length===4?we.emptyPath():Pw(e)}function Fp(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pw(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xv(t,e,n){return{name:Mp(t,e),fields:n.value.mapValue.fields}}function F4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(me(f===void 0||typeof f=="string"),ot.fromBase64String(f||"")):(me(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ot.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?$.UNKNOWN:Iw(c.code);return new q(f,c.message||"")}(o);n=new xw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=of(t,r.document.name),s=Dn(r.document.updateTime),o=r.document.createTime?Dn(r.document.createTime):te.min(),l=new Pt({mapValue:{fields:r.document.fields}}),u=mt.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Yu(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=of(t,r.document),s=r.readTime?Dn(r.readTime):te.min(),o=mt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Yu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=of(t,r.document),s=r.removedTargetIds||[];n=new Yu([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new R4(i,s),l=r.targetId;n=new Sw(l,o)}}return n}function $4(t,e){let n;if(e instanceof bl)n={update:xv(t,e.key,e.value)};else if(e instanceof kg)n={delete:Mp(t,e.key)};else if(e instanceof di)n={update:xv(t,e.key,e.data),updateMask:Q4(e.fieldMask)};else{if(!(e instanceof S4))return ee();n={verify:Mp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof pl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ml)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof gl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Uc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:V4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function U4(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Dn(i.updateTime):Dn(s);return o.isEqual(te.min())&&(o=Dn(s)),new w4(o,i.transformResults||[])}(n,e))):[]}function W4(t,e){return{documents:[Cw(t,e.path)]}}function B4(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Cw(t,i);const s=function(c){if(c.length!==0)return bw(wn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:Os(g.field),direction:q4(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=jp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function z4(t){let e=M4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=Lw(m);return g instanceof wn&&aw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(x){return new fl(Ds(x.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Ad(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,E=m.values||[];return new Fc(E,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,E=m.values||[];return new Fc(E,g)}(n.endAt)),l4(e,i,o,s,l,"F",u,c)}function H4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Lw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ds(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ds(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ds(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ds(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return We.create(Ds(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return wn.create(n.compositeFilter.filters.map(r=>Lw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function q4(t){return N4[t]}function G4(t){return O4[t]}function K4(t){return D4[t]}function Os(t){return{fieldPath:t.canonicalString()}}function Ds(t){return nt.fromServerFormat(t.fieldPath)}function bw(t){return t instanceof We?function(n){if(n.op==="=="){if(hv(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NAN"}};if(dv(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hv(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NAN"}};if(dv(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Os(n.field),op:G4(n.op),value:n.value}}}(t):t instanceof wn?function(n){const r=n.getFilters().map(i=>bw(i));return r.length===1?r[0]:{compositeFilter:{op:K4(n.op),filters:r}}}(t):ee()}function Q4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Nw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,r,i,s=te.min(),o=te.min(),l=ot.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{constructor(e){this.ct=e}}function X4(t){const e=z4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$c(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(){this.un=new Z4}addToCollectionParentIndex(e,n){return this.un.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(ti.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(ti.min())}updateCollectionGroup(e,n,r){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class Z4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new it(we.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new it(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new _o(0)}static kn(){return new _o(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(){this.changes=new Vo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?W.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class t6{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ja(r.mutation,i,Bt.empty(),Be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=Ai();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=va();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ai();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=dr();const o=Da(),l=function(){return Da()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof di)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),ja(f.mutation,c,f.mutation.getFieldMask(),Be.now())):o.set(c.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var m;return l.set(c,new t6(f,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Da();let i=new Le((o,l)=>o-l),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Bt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(i.get(l.batchId)||oe()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=gw();f.forEach(g=>{if(!s.has(g)){const E=ww(n.get(g),r.get(g));E!==null&&m.set(g,E),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return W.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):W.resolve(Ai());let l=-1,u=s;return o.next(c=>W.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?W.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,oe())).next(f=>({batchId:l,changes:mw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=va();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=va();return this.indexManager.getCollectionParents(e,s).next(l=>W.forEach(l,u=>{const c=function(m,g){return new jo(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,mt.newInvalidDocument(f)))});let l=va();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&ja(f.mutation,c,Bt.empty(),Be.now()),Cd(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return W.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Dn(i.createTime)}}(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:X4(i.bundledQuery),readTime:Dn(i.readTime)}}(n)),W.resolve()}}/**
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
 */class i6{constructor(){this.overlays=new Le(Y.comparator),this.Ir=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ai();return W.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),W.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),W.resolve()}getOverlaysForCollection(e,n,r){const i=Ai(),s=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return W.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Le((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Ai(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Ai(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return W.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new A4(n,r));let s=this.Ir.get(n);s===void 0&&(s=oe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class s6{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.Tr=new it(Ge.Er),this.dr=new it(Ge.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ge(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Y(new we([])),r=new Ge(n,e),i=new Ge(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Y(new we([])),r=new Ge(n,e),i=new Ge(n,e+1);let s=oe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ge(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Y.comparator(e.key,n.key)||de(e.wr,n.wr)}static Ar(e,n){return de(e.wr,n.wr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o6{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new it(Ge.Er)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new x4(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ge(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return W.resolve(o)}lookupMutationBatch(e,n){return W.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return W.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),i=new Ge(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),W.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(de);return n.forEach(i=>{const s=new Ge(i,0),o=new Ge(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),W.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new Ge(new Y(s),0);let l=new it(de);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),W.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return W.forEach(n.mutations,i=>{const s=new Ge(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ge(n,0),i=this.br.firstAfterOrEqual(r);return W.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a6{constructor(e){this.Mr=e,this.docs=function(){return new Le(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return W.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=dr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():mt.newInvalidDocument(i))}),W.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=dr();const o=n.path,l=new Y(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||BL(WL(f),r)<=0||(i.has(f.key)||Cd(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return W.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Or(e,n){return W.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new l6(this)}getSize(e){return W.resolve(this.size)}}class l6 extends e6{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),W.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u6{constructor(e){this.persistence=e,this.Nr=new Vo(n=>yg(n),vg),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Sg,this.targetCount=0,this.kr=_o.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),W.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new _o(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.Kn(n),W.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),W.waitFor(s).next(()=>i)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return W.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),W.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),W.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return W.resolve(r)}containsKey(e,n){return W.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c6{constructor(e,n){this.qr={},this.overlays={},this.Qr=new fg(0),this.Kr=!1,this.Kr=!0,this.$r=new s6,this.referenceDelegate=e(this),this.Ur=new u6(this),this.indexManager=new J4,this.remoteDocumentCache=function(i){return new a6(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Y4(n),this.Gr=new r6(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new i6,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new o6(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new d6(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return W.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class d6 extends HL{constructor(e){super(),this.currentSequenceNumber=e}}class xg{constructor(e){this.persistence=e,this.Jr=new Sg,this.Yr=null}static Zr(e){return new xg(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),W.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),W.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.Xr,r=>{const i=Y.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return W.or([()=>W.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ag(e,n.fromCache,r,i)}}/**
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
 */class h6{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f6{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return GA()?8:qL(vt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new h6;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(aa()<=ae.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Ns(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),W.resolve()):(aa()<=ae.DEBUG&&K("QueryEngine","Query:",Ns(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(aa()<=ae.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Ns(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):W.resolve())}Yi(e,n){if(gv(n))return W.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$c(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,$c(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return gv(n)||i.isEqual(te.min())?W.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?W.resolve(null):(aa()<=ae.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ns(n)),this.rs(e,o,n,UL(i,-1)).next(l=>l))})}ts(e,n){let r=new it(fw(e));return n.forEach((i,s)=>{Cd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return aa()<=ae.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Ns(n)),this.Ji.getDocumentsMatchingQuery(e,n,ti.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p6{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Le(de),this._s=new Vo(s=>yg(s),vg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new n6(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function m6(t,e,n,r){return new p6(t,e,n,r)}async function Ow(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=oe();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function g6(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let E=W.resolve();return g.forEach(x=>{E=E.next(()=>f.getEntry(u,x)).next(C=>{const L=c.docVersions.get(x);me(L!==null),C.version.compareTo(L)<0&&(m.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),f.addEntry(C)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Dw(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function y6(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let E=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?E=E.withResumeToken(ot.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),i=i.insert(m,E),function(C,L,_){return C.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(g,E,f)&&l.push(n.Ur.updateTargetData(s,E))});let u=dr(),c=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(v6(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(te.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return W.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function v6(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=dr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):K("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function _6(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function E6(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,W.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function $p(t,e,n){const r=ne(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ll(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Av(t,e,n){const r=ne(t);let i=te.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=ne(u),g=m._s.get(f);return g!==void 0?W.resolve(m.os.get(g)):m.Ur.getTargetData(c,f)}(r,o,On(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:oe())).next(l=>(k6(r,c4(e),l),{documents:l,Ts:s})))}function k6(t,e,n){let r=t.us.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Rv{constructor(){this.activeTargetIds=g4()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class w6{constructor(){this.so=new Rv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Rv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T6{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wu=null;function af(){return wu===null?wu=function(){return 268435456+Math.round(2147483648*Math.random())}():wu++,"0x"+wu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S6{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class x6 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=af(),u=this.xo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(K("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw mo("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Do}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=I6[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=af();return new Promise((o,l)=>{const u=new Q2;u.setWithCredentials(!0),u.listenOnce(Y2.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Gu.NO_ERROR:const f=u.getResponseJson();K(ht,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Gu.TIMEOUT:K(ht,`RPC '${e}' ${s} timed out`),l(new q($.DEADLINE_EXCEEDED,"Request time out"));break;case Gu.HTTP_ERROR:const m=u.getStatus();if(K(ht,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const x=function(L){const _=L.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(_)>=0?_:$.UNKNOWN}(E.status);l(new q(x,E.message))}else l(new q($.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q($.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{K(ht,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);K(ht,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=af(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Z2(),l=J2(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");K(ht,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,E=!1;const x=new S6({Io:L=>{E?K(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(g||(K(ht,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),K(ht,`RPC '${e}' stream ${i} sending:`,L),m.send(L))},To:()=>m.close()}),C=(L,_,y)=>{L.listen(_,I=>{try{y(I)}catch(P){setTimeout(()=>{throw P},0)}})};return C(m,ya.EventType.OPEN,()=>{E||(K(ht,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),C(m,ya.EventType.CLOSE,()=>{E||(E=!0,K(ht,`RPC '${e}' stream ${i} transport closed`),x.So())}),C(m,ya.EventType.ERROR,L=>{E||(E=!0,mo(ht,`RPC '${e}' stream ${i} transport errored:`,L),x.So(new q($.UNAVAILABLE,"The operation could not be completed")))}),C(m,ya.EventType.MESSAGE,L=>{var _;if(!E){const y=L.data[0];me(!!y);const I=y,P=I.error||((_=I[0])===null||_===void 0?void 0:_.error);if(P){K(ht,`RPC '${e}' stream ${i} received error:`,P);const O=P.status;let M=function(S){const A=Fe[S];if(A!==void 0)return Iw(A)}(O),w=P.message;M===void 0&&(M=$.INTERNAL,w="Unknown error status: "+O+" with message "+P.message),E=!0,x.So(new q(M,w)),m.close()}else K(ht,`RPC '${e}' stream ${i} received:`,y),x.bo(y)}}),C(l,X2.STAT_EVENT,L=>{L.stat===Pp.PROXY?K(ht,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===Pp.NOPROXY&&K(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function lf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t){return new j4(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new jw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class A6 extends Vw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=F4(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Dn(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Fp(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Op(u)?{documents:W4(s,u)}:{query:B4(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Aw(s,o.resumeToken);const c=jp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=Wc(s,o.snapshotVersion.toTimestamp());const c=jp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=H4(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Fp(this.serializer),n.removeTarget=e,this.a_(n)}}class R6 extends Vw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=U4(e.writeResults,e.commitTime),r=Dn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Fp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$4(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C6 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Vp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q($.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Vp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class P6{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(cr(n),this.D_=!1):K("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L6{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Zi(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.L_.add(4),await Ol(c),c.q_.set("Unknown"),c.L_.delete(4),await Od(c)}(this))})}),this.q_=new P6(r,i)}}async function Od(t){if(Zi(t))for(const e of t.B_)await e(!0)}async function Ol(t){for(const e of t.B_)await e(!1)}function Mw(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Lg(n)?Pg(n):Mo(n).r_()&&Cg(n,e))}function Rg(t,e){const n=ne(t),r=Mo(n);n.N_.delete(e),r.r_()&&Fw(n,e),n.N_.size===0&&(r.r_()?r.o_():Zi(n)&&n.q_.set("Unknown"))}function Cg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mo(t).A_(e)}function Fw(t,e){t.Q_.xe(e),Mo(t).R_(e)}function Pg(t){t.Q_=new b4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Mo(t).start(),t.q_.v_()}function Lg(t){return Zi(t)&&!Mo(t).n_()&&t.N_.size>0}function Zi(t){return ne(t).L_.size===0}function $w(t){t.Q_=void 0}async function b6(t){t.q_.set("Online")}async function N6(t){t.N_.forEach((e,n)=>{Cg(t,e)})}async function O6(t,e){$w(t),Lg(t)?(t.q_.M_(e),Pg(t)):t.q_.set("Unknown")}async function D6(t,e,n){if(t.q_.set("Online"),e instanceof xw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bc(t,r)}else if(e instanceof Yu?t.Q_.Ke(e):e instanceof Sw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await Dw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(ot.EMPTY_BYTE_STRING,f.snapshotVersion)),Fw(s,u);const m=new Or(f.target,u,c,f.sequenceNumber);Cg(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await Bc(t,r)}}async function Bc(t,e,n){if(!Ll(e))throw e;t.L_.add(1),await Ol(t),t.q_.set("Offline"),n||(n=()=>Dw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Od(t)})}function Uw(t,e){return e().catch(n=>Bc(t,n,e))}async function Dd(t){const e=ne(t),n=ri(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;j6(e);)try{const i=await _6(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,V6(e,i)}catch(i){await Bc(e,i)}Ww(e)&&Bw(e)}function j6(t){return Zi(t)&&t.O_.length<10}function V6(t,e){t.O_.push(e);const n=ri(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Ww(t){return Zi(t)&&!ri(t).n_()&&t.O_.length>0}function Bw(t){ri(t).start()}async function M6(t){ri(t).p_()}async function F6(t){const e=ri(t);for(const n of t.O_)e.m_(n.mutations)}async function $6(t,e,n){const r=t.O_.shift(),i=wg.from(r,e,n);await Uw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Dd(t)}async function U6(t,e){e&&ri(t).V_&&await async function(r,i){if(function(o){return C4(o)&&o!==$.ABORTED}(i.code)){const s=r.O_.shift();ri(r).s_(),await Uw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Dd(r)}}(t,e),Ww(t)&&Bw(t)}async function Pv(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Zi(n);n.L_.add(3),await Ol(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Od(n)}async function W6(t,e){const n=ne(t);e?(n.L_.delete(2),await Od(n)):e||(n.L_.add(2),await Ol(n),n.q_.set("Unknown"))}function Mo(t){return t.K_||(t.K_=function(n,r,i){const s=ne(n);return s.w_(),new A6(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:b6.bind(null,t),Ro:N6.bind(null,t),mo:O6.bind(null,t),d_:D6.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Lg(t)?Pg(t):t.q_.set("Unknown")):(await t.K_.stop(),$w(t))})),t.K_}function ri(t){return t.U_||(t.U_=function(n,r,i){const s=ne(n);return s.w_(),new R6(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:M6.bind(null,t),mo:U6.bind(null,t),f_:F6.bind(null,t),g_:$6.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Dd(t)):(await t.U_.stop(),t.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new bg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ng(t,e){if(cr("AsyncQueue",`${e}: ${t}`),Ll(t))return new q($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=va(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new so(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof so)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new so;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.W_=new Le(Y.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Eo{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Eo(e,n,so.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B6{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class z6{constructor(){this.queries=bv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=bv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q($.ABORTED,"Firestore shutting down"))}}function bv(){return new Vo(t=>hw(t),Rd)}async function zw(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new B6,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Ng(o,`Initialization of query '${Ns(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Og(n)}async function Hw(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function H6(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Og(n)}function q6(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Og(t){t.Y_.forEach(e=>{e.next()})}var Up,Nv;(Nv=Up||(Up={})).ea="default",Nv.Cache="cache";class qw{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Eo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Up.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.key=e}}class Kw{constructor(e){this.key=e}}class G6{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=oe(),this.mutatedKeys=oe(),this.Aa=fw(e),this.Ra=new so(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Lv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),E=Cd(this.query,m)?m:null,x=!!g&&this.mutatedKeys.has(g.key),C=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let L=!1;g&&E?g.data.isEqual(E.data)?x!==C&&(r.track({type:3,doc:E}),L=!0):this.ga(g,E)||(r.track({type:2,doc:E}),L=!0,(u&&this.Aa(E,u)>0||c&&this.Aa(E,c)<0)&&(l=!0)):!g&&E?(r.track({type:0,doc:E}),L=!0):g&&!E&&(r.track({type:1,doc:g}),L=!0,(u||c)&&(l=!0)),L&&(E?(o=o.add(E),s=C?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(E,x){const C=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return C(E)-C(x)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Eo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Lv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Kw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Gw(r))}),n}ba(e){this.Ta=e.Ts,this.da=oe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Eo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class K6{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Q6{constructor(e){this.key=e,this.va=!1}}class Y6{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Vo(l=>hw(l),Rd),this.Ma=new Map,this.xa=new Set,this.Oa=new Le(Y.comparator),this.Na=new Map,this.La=new Sg,this.Ba={},this.ka=new Map,this.qa=_o.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function X6(t,e,n=!0){const r=eT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Qw(r,e,n,!0),i}async function J6(t,e){const n=eT(t);await Qw(n,e,!0,!1)}async function Qw(t,e,n,r){const i=await E6(t.localStore,On(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Z6(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Mw(t.remoteStore,i),l}async function Z6(t,e,n,r,i){t.Ka=(m,g,E)=>async function(C,L,_,y){let I=L.view.ma(_);I.ns&&(I=await Av(C.localStore,L.query,!1).then(({documents:w})=>L.view.ma(w,I)));const P=y&&y.targetChanges.get(L.targetId),O=y&&y.targetMismatches.get(L.targetId)!=null,M=L.view.applyChanges(I,C.isPrimaryClient,P,O);return Dv(C,L.targetId,M.wa),M.snapshot}(t,m,g,E);const s=await Av(t.localStore,e,!0),o=new G6(e,s.Ts),l=o.ma(s.documents),u=Nl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Dv(t,n,c.wa);const f=new K6(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function eb(t,e,n){const r=ne(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Rd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await $p(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Rg(r.remoteStore,i.targetId),Wp(r,i.targetId)}).catch(Pl)):(Wp(r,i.targetId),await $p(r.localStore,i.targetId,!0))}async function tb(t,e){const n=ne(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Rg(n.remoteStore,r.targetId))}async function nb(t,e,n){const r=ub(t);try{const i=await function(o,l){const u=ne(o),c=Be.now(),f=l.reduce((E,x)=>E.add(x.key),oe());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let x=dr(),C=oe();return u.cs.getEntries(E,f).next(L=>{x=L,x.forEach((_,y)=>{y.isValidDocument()||(C=C.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,x)).next(L=>{m=L;const _=[];for(const y of l){const I=I4(y,m.get(y.key).overlayedDocument);I!=null&&_.push(new di(y.key,I,iw(I.value.mapValue),nn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,_,l)}).next(L=>{g=L;const _=L.applyToLocalDocumentSet(m,C);return u.documentOverlayCache.saveOverlays(E,L.batchId,_)})}).then(()=>({batchId:g.batchId,changes:mw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Le(de)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Dl(r,i.changes),await Dd(r.remoteStore)}catch(i){const s=Ng(i,"Failed to persist write");n.reject(s)}}async function Yw(t,e){const n=ne(t);try{const r=await y6(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?me(o.va):i.removedDocuments.size>0&&(me(o.va),o.va=!1))}),await Dl(n,r,e)}catch(r){await Pl(r)}}function Ov(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(c=!0)}),c&&Og(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rb(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Le(Y.comparator);o=o.insert(s,mt.newNoDocument(s,te.min()));const l=oe().add(s),u=new bd(te.min(),new Map,new Le(de),o,l);await Yw(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Dg(r)}else await $p(r.localStore,e,!1).then(()=>Wp(r,e,n)).catch(Pl)}async function ib(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await g6(n.localStore,e);Jw(n,r,null),Xw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Dl(n,i)}catch(i){await Pl(i)}}async function sb(t,e,n){const r=ne(t);try{const i=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(me(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);Jw(r,e,n),Xw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Dl(r,i)}catch(i){await Pl(i)}}function Xw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Jw(t,e,n){const r=ne(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Wp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Zw(t,r)})}function Zw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Rg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Dg(t))}function Dv(t,e,n){for(const r of n)r instanceof Gw?(t.La.addReference(r.key,e),ob(t,r)):r instanceof Kw?(K("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Zw(t,r.key)):ee()}function ob(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.xa.add(r),Dg(t))}function Dg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Y(we.fromString(e)),r=t.qa.next();t.Na.set(r,new Q6(n)),t.Oa=t.Oa.insert(n,r),Mw(t.remoteStore,new Or(On(_g(n.path)),r,"TargetPurposeLimboResolution",fg.oe))}}async function Dl(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=Ag.Wi(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=ne(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>W.forEach(c,g=>W.forEach(g.$i,E=>f.persistence.referenceDelegate.addReference(m,g.targetId,E)).next(()=>W.forEach(g.Ui,E=>f.persistence.referenceDelegate.removeReference(m,g.targetId,E)))))}catch(m){if(!Ll(m))throw m;K("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const E=f.os.get(g),x=E.snapshotVersion,C=E.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(g,C)}}}(r.localStore,s))}async function ab(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await Ow(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q($.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Dl(n,r.hs)}}function lb(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return oe().add(r.key);{let i=oe();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function eT(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rb.bind(null,e),e.Ca.d_=H6.bind(null,e.eventManager),e.Ca.$a=q6.bind(null,e.eventManager),e}function ub(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ib.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sb.bind(null,e),e}class zc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return m6(this.persistence,new f6,e.initialUser,this.serializer)}Ga(e){return new c6(xg.Zr,this.serializer)}Wa(e){return new w6}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zc.provider={build:()=>new zc};class Bp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ov(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ab.bind(null,this.syncEngine),await W6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new z6}()}createDatastore(e){const n=Nd(e.databaseInfo.databaseId),r=function(s){return new x6(s)}(e.databaseInfo);return function(s,o,l,u){return new C6(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new L6(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ov(this.syncEngine,n,0),function(){return Cv.D()?new Cv:new T6}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const m=new Y6(i,s,o,l,u,c);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);K("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ol(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Bp.provider={build:()=>new Bp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=tw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ng(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uf(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ow(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await db(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Pv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Pv(e.remoteStore,i)),t._onlineComponents=e}async function db(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await uf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===$.FAILED_PRECONDITION||i.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;mo("Error using user provided cache. Falling back to memory cache: "+n),await uf(t,new zc)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await uf(t,new zc);return t._offlineComponents}async function nT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await jv(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await jv(t,new Bp))),t._onlineComponents}function hb(t){return nT(t).then(e=>e.syncEngine)}async function rT(t){const e=await nT(t),n=e.eventManager;return n.onListen=X6.bind(null,e.syncEngine),n.onUnlisten=eb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=J6.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=tb.bind(null,e.syncEngine),n}function fb(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new tT({next:g=>{f.Za(),o.enqueueAndForget(()=>Hw(s,m));const E=g.docs.has(l);!E&&g.fromCache?c.reject(new q($.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&u&&u.source==="server"?c.reject(new q($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new qw(_g(l.path),f,{includeMetadataChanges:!0,_a:!0});return zw(s,m)}(await rT(t),t.asyncQueue,e,n,r)),r.promise}function pb(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new tT({next:g=>{f.Za(),o.enqueueAndForget(()=>Hw(s,m)),g.fromCache&&u.source==="server"?c.reject(new q($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new qw(l,f,{includeMetadataChanges:!0,_a:!0});return zw(s,m)}(await rT(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function iT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t,e,n){if(!n)throw new q($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mb(t,e,n,r){if(e===!0&&r===!0)throw new q($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mv(t){if(!Y.isDocumentKey(t))throw new q($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fv(t){if(Y.isDocumentKey(t))throw new q($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Tn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jd(t);throw new q($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $v({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $v(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bL;switch(r.type){case"firstParty":return new jL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Vv.get(n);r&&(K("ComponentProvider","Removing Datastore"),Vv.delete(n),r.terminate())}(this),Promise.resolve()}}function gb(t,e,n,r={}){var i;const s=(t=Tn(t,Vd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&mo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ft.MOCK_USER;else{l=r2(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ft(c)}t._authCredentials=new NL(new ew(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hi(this.firestore,e,this._query)}}class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class Kr extends hi{constructor(e,n,r){super(e,n,_g(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new Y(e))}withConverter(e){return new Kr(this.firestore,e,this._path)}}function Cn(t,e,...n){if(t=Pe(t),sT("collection","path",e),t instanceof Vd){const r=we.fromString(e,...n);return Fv(r),new Kr(t,null,r)}{if(!(t instanceof It||t instanceof Kr))throw new q($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return Fv(r),new Kr(t.firestore,null,r)}}function hr(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=tw.newId()),sT("doc","path",e),t instanceof Vd){const r=we.fromString(e,...n);return Mv(r),new It(t,null,new Y(r))}{if(!(t instanceof It||t instanceof Kr))throw new q($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return Mv(r),new It(t.firestore,t instanceof Kr?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new jw(this,"async_queue_retry"),this.Vu=()=>{const r=lf();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=lf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=lf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new rr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ll(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw cr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=bg.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class es extends Vd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Uv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Uv(e),this._firestoreClient=void 0,await e}}}function yb(t,e){const n=typeof t=="object"?t:Td(),r=typeof t=="string"?t:"(default)",i=ui(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=e2("firestore");s&&gb(i,...s)}return i}function jg(t){if(t._terminated)throw new q($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||vb(t),t._firestoreClient}function vb(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new QL(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,iT(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new cb(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ko(ot.fromBase64String(e))}catch(n){throw new q($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ko(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fd=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */class Mg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=/^__.*__$/;class Eb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new di(e,this.data,this.fieldMask,n,this.fieldTransforms):new bl(e,this.data,n,this.fieldTransforms)}}class oT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new di(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function aT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Fg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Fg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Hc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(aT(this.Cu)&&_b.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class kb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nd(e)}Qu(e,n,r,i=!1){return new Fg({Cu:e,methodName:n,qu:r,path:nt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $d(t){const e=t._freezeSettings(),n=Nd(t._databaseId);return new kb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lT(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Ug("Data must be an object, but it was:",o,r);const l=uT(r,o);let u,c;if(s.merge)u=new Bt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=zp(e,m,n);if(!o.contains(g))throw new q($.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);dT(f,g)||f.push(g)}u=new Bt(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new Eb(new Pt(l),u,c)}class Ud extends Fd{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ud}}class $g extends Fd{_toFieldTransform(e){return new E4(e.path,new pl)}isEqual(e){return e instanceof $g}}function wb(t,e,n,r){const i=t.Qu(1,e,n);Ug("Data must be an object, but it was:",i,r);const s=[],o=Pt.empty();Ji(r,(u,c)=>{const f=Wg(e,u,n);c=Pe(c);const m=i.Nu(f);if(c instanceof Ud)s.push(f);else{const g=jl(c,m);g!=null&&(s.push(f),o.set(f,g))}});const l=new Bt(s);return new oT(o,l,i.fieldTransforms)}function Tb(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[zp(e,r,n)],u=[i];if(s.length%2!=0)throw new q($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(zp(e,s[g])),u.push(s[g+1]);const c=[],f=Pt.empty();for(let g=l.length-1;g>=0;--g)if(!dT(c,l[g])){const E=l[g];let x=u[g];x=Pe(x);const C=o.Nu(E);if(x instanceof Ud)c.push(E);else{const L=jl(x,C);L!=null&&(c.push(E),f.set(E,L))}}const m=new Bt(c);return new oT(f,m,o.fieldTransforms)}function Ib(t,e,n,r=!1){return jl(n,t.Qu(r?4:3,e))}function jl(t,e){if(cT(t=Pe(t)))return Ug("Unsupported field value:",e,t),uT(t,e);if(t instanceof Fd)return function(r,i){if(!aT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=jl(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return y4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Be.fromDate(r);return{timestampValue:Wc(i.serializer,s)}}if(r instanceof Be){const s=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wc(i.serializer,s)}}if(r instanceof Vg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ko)return{bytesValue:Aw(i.serializer,r._byteString)};if(r instanceof It){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ig(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Mg)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Eg(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${jd(r)}`)}(t,e)}function uT(t,e){const n={};return nw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ji(t,(r,i)=>{const s=jl(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function cT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof Vg||t instanceof ko||t instanceof It||t instanceof Fd||t instanceof Mg)}function Ug(t,e,n){if(!cT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=jd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function zp(t,e,n){if((e=Pe(e))instanceof Md)return e._internalPath;if(typeof e=="string")return Wg(t,e);throw Hc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Sb=new RegExp("[~\\*/\\[\\]]");function Wg(t,e,n){if(e.search(Sb)>=0)throw Hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Md(...e.split("."))._internalPath}catch{throw Hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q($.INVALID_ARGUMENT,l+t+u)}function dT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xb extends hT{data(){return super.data()}}function Wd(t,e){return typeof e=="string"?Wg(t,e):e instanceof Md?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bg{}class zg extends Bg{}function Zn(t,e,...n){let r=[];e instanceof Bg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Hg).length,l=s.filter(u=>u instanceof Bd).length;if(o>1||o>0&&l>0)throw new q($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Bd extends zg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Bd(e,n,r)}_apply(e){const n=this._parse(e);return fT(e._query,n),new hi(e.firestore,e.converter,Dp(e._query,n))}_parse(e){const n=$d(e.firestore);return function(s,o,l,u,c,f,m){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new q($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Bv(m,f);const E=[];for(const x of m)E.push(Wv(u,s,x));g={arrayValue:{values:E}}}else g=Wv(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Bv(m,f),g=Ib(l,o,m,f==="in"||f==="not-in");return We.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Dr(t,e,n){const r=e,i=Wd("where",t);return Bd._create(i,r,n)}class Hg extends Bg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Hg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:wn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)fT(o,u),o=Dp(o,u)}(e._query,n),new hi(e.firestore,e.converter,Dp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qg extends zg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new qg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new q($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fl(s,o)}(e._query,this._field,this._direction);return new hi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new jo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Gg(t,e="asc"){const n=e,r=Wd("orderBy",t);return qg._create(r,n)}class Kg extends zg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Kg(e,n,r)}_apply(e){return new hi(e.firestore,e.converter,$c(e._query,this._limit,this._limitType))}}function Rb(t){return Kg._create("limit",t,"F")}function Wv(t,e,n){if(typeof(n=Pe(n))=="string"){if(n==="")throw new q($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dw(e)&&n.indexOf("/")!==-1)throw new q($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!Y.isDocumentKey(r))throw new q($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cv(t,new Y(r))}if(n instanceof It)return cv(t,n._key);throw new q($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jd(n)}.`)}function Bv(t,e){if(!Array.isArray(t)||t.length===0)throw new q($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Cb{convertValue(e,n="none"){switch(zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ji(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>De(o.doubleValue));return new Mg(s)}convertGeoPoint(e){return new Vg(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=mg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(cl(e));default:return null}}convertTimestamp(e){const n=ni(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);me(Nw(r));const i=new dl(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||cr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mT extends hT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Wd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Xu extends mT{data(e={}){return super.data(e)}}class Pb{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ea(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Xu(this._firestore,this._userDataWriter,r.key,r,new Ea(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Xu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ea(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Xu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ea(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Lb(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Lb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){t=Tn(t,It);const e=Tn(t.firestore,es);return fb(jg(e),t._key).then(n=>Nb(e,t,n))}class gT extends Cb{constructor(e){super(),this.firestore=e}convertBytes(e){return new ko(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function er(t){t=Tn(t,hi);const e=Tn(t.firestore,es),n=jg(e),r=new gT(e);return Ab(t._query),pb(n,t._query).then(i=>new Pb(e,r,t,i))}function yT(t,e,n){t=Tn(t,It);const r=Tn(t.firestore,es),i=pT(t.converter,e);return zd(r,[lT($d(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,nn.none())])}function bb(t,e,n,...r){t=Tn(t,It);const i=Tn(t.firestore,es),s=$d(i);let o;return o=typeof(e=Pe(e))=="string"||e instanceof Md?Tb(s,"updateDoc",t._key,e,n,r):wb(s,"updateDoc",t._key,e),zd(i,[o.toMutation(t._key,nn.exists(!0))])}function vT(t){return zd(Tn(t.firestore,es),[new kg(t._key,nn.none())])}function _T(t,e){const n=Tn(t.firestore,es),r=hr(t),i=pT(t.converter,e);return zd(n,[lT($d(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,nn.exists(!1))]).then(()=>r)}function zd(t,e){return function(r,i){const s=new rr;return r.asyncQueue.enqueueAndForget(async()=>nb(await hb(r),i,s)),s.promise}(jg(t),e)}function Nb(t,e,n){const r=n.docs.get(e._key),i=new gT(t);return new mT(t,i,e._key,r,new Ea(n.hasPendingWrites,n.fromCache),e.converter)}function yl(){return new $g("serverTimestamp")}(function(e,n=!0){(function(i){Do=i})(Xi),En(new on("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new es(new OL(r.getProvider("auth-internal")),new ML(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dl(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),jt(sv,"4.7.3",e),jt(sv,"4.7.3","esm2017")})();const ET="@firebase/installations",Qg="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=1e4,wT=`w:${Qg}`,TT="FIS_v2",Ob="https://firebaseinstallations.googleapis.com/v1",Db=60*60*1e3,jb="installations",Vb="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Hi=new Yi(jb,Vb,Mb);function IT(t){return t instanceof ln&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST({projectId:t}){return`${Ob}/projects/${t}/installations`}function xT(t){return{token:t.token,requestStatus:2,expiresIn:$b(t.expiresIn),creationTime:Date.now()}}async function AT(t,e){const r=(await e.json()).error;return Hi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function RT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Fb(t,{refreshToken:e}){const n=RT(t);return n.append("Authorization",Ub(e)),n}async function CT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $b(t){return Number(t.replace("s","000"))}function Ub(t){return`${TT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=ST(t),i=RT(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:TT,appId:t.appId,sdkVersion:wT},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await CT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:xT(c.authToken)}}else throw await AT("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=/^[cdef][\w-]{21}$/,qp="";function Hb(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=qb(t);return zb.test(n)?n:qp}catch{return qp}}function qb(t){return Bb(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=new Map;function bT(t,e){const n=Hd(t);NT(n,e),Gb(n,e)}function NT(t,e){const n=LT.get(t);if(n)for(const r of n)r(e)}function Gb(t,e){const n=Kb();n&&n.postMessage({key:t,fid:e}),Qb()}let Ri=null;function Kb(){return!Ri&&"BroadcastChannel"in self&&(Ri=new BroadcastChannel("[Firebase] FID Change"),Ri.onmessage=t=>{NT(t.data.key,t.data.fid)}),Ri}function Qb(){LT.size===0&&Ri&&(Ri.close(),Ri=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="firebase-installations-database",Xb=1,qi="firebase-installations-store";let cf=null;function Yg(){return cf||(cf=u2(Yb,Xb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qi)}}})),cf}async function qc(t,e){const n=Hd(t),i=(await Yg()).transaction(qi,"readwrite"),s=i.objectStore(qi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&bT(t,e.fid),e}async function OT(t){const e=Hd(t),r=(await Yg()).transaction(qi,"readwrite");await r.objectStore(qi).delete(e),await r.done}async function qd(t,e){const n=Hd(t),i=(await Yg()).transaction(qi,"readwrite"),s=i.objectStore(qi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&bT(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(t){let e;const n=await qd(t.appConfig,r=>{const i=Jb(r),s=Zb(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===qp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Jb(t){const e=t||{fid:Hb(),registrationStatus:0};return DT(e)}function Zb(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Hi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=eN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tN(t)}:{installationEntry:e}}async function eN(t,e){try{const n=await Wb(t,e);return qc(t.appConfig,n)}catch(n){throw IT(n)&&n.customData.serverCode===409?await OT(t.appConfig):await qc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function tN(t){let e=await zv(t.appConfig);for(;e.registrationStatus===1;)await PT(100),e=await zv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Xg(t);return r||n}return e}function zv(t){return qd(t,e=>{if(!e)throw Hi.create("installation-not-found");return DT(e)})}function DT(t){return nN(t)?{fid:t.fid,registrationStatus:0}:t}function nN(t){return t.registrationStatus===1&&t.registrationTime+kT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rN({appConfig:t,heartbeatServiceProvider:e},n){const r=iN(t,n),i=Fb(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:wT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await CT(()=>fetch(r,l));if(u.ok){const c=await u.json();return xT(c)}else throw await AT("Generate Auth Token",u)}function iN(t,{fid:e}){return`${ST(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jg(t,e=!1){let n;const r=await qd(t.appConfig,s=>{if(!jT(s))throw Hi.create("not-registered");const o=s.authToken;if(!e&&aN(o))return s;if(o.requestStatus===1)return n=sN(t,e),s;{if(!navigator.onLine)throw Hi.create("app-offline");const l=uN(s);return n=oN(t,l),l}});return n?await n:r.authToken}async function sN(t,e){let n=await Hv(t.appConfig);for(;n.authToken.requestStatus===1;)await PT(100),n=await Hv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Jg(t,e):r}function Hv(t){return qd(t,e=>{if(!jT(e))throw Hi.create("not-registered");const n=e.authToken;return cN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function oN(t,e){try{const n=await rN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await qc(t.appConfig,r),n}catch(n){if(IT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await OT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await qc(t.appConfig,r)}throw n}}function jT(t){return t!==void 0&&t.registrationStatus===2}function aN(t){return t.requestStatus===2&&!lN(t)}function lN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Db}function uN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function cN(t){return t.requestStatus===1&&t.requestTime+kT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dN(t){const e=t,{installationEntry:n,registrationPromise:r}=await Xg(e);return r?r.catch(console.error):Jg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(t,e=!1){const n=t;return await fN(n),(await Jg(n,e)).token}async function fN(t){const{registrationPromise:e}=await Xg(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(t){if(!t||!t.options)throw df("App Configuration");if(!t.name)throw df("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw df(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function df(t){return Hi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="installations",mN="installations-internal",gN=t=>{const e=t.getProvider("app").getImmediate(),n=pN(e),r=ui(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},yN=t=>{const e=t.getProvider("app").getImmediate(),n=ui(e,VT).getImmediate();return{getId:()=>dN(n),getToken:i=>hN(n,i)}};function vN(){En(new on(VT,gN,"PUBLIC")),En(new on(mN,yN,"PRIVATE"))}vN();jt(ET,Qg);jt(ET,Qg,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="analytics",_N="firebase_id",EN="origin",kN=60*1e3,wN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new wd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ht=new Yi("analytics","Analytics",TN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(t){if(!t.startsWith(Zg)){const e=Ht.create("invalid-gtag-resource",{gtagURL:t});return Vt.warn(e.message),""}return t}function MT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function SN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function xN(t,e){const n=SN("firebase-js-sdk-policy",{createScriptURL:IN}),r=document.createElement("script"),i=`${Zg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function AN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function RN(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await MT(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){Vt.error(l)}t("config",i,s)}async function CN(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await MT(n);for(const u of o){const c=l.find(m=>m.measurementId===u),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Vt.error(s)}}function PN(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await CN(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await RN(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Vt.error(l)}}return i}function LN(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=PN(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function bN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Zg)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN=30,ON=1e3;class DN{constructor(e={},n=ON){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const FT=new DN;function jN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function VN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:jN(r)},s=wN.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Ht.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function MN(t,e=FT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ht.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ht.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new UN;return setTimeout(async()=>{l.abort()},kN),$T({appId:r,apiKey:i,measurementId:s},o,l,e)}async function $T(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=FT){var s;const{appId:o,measurementId:l}=t;try{await FN(r,e)}catch(u){if(l)return Vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await VN(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!$N(c)){if(i.deleteThrottleMetadata(o),l)return Vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?P0(n,i.intervalMillis,NN):P0(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,m),Vt.debug(`Calling attemptFetch again in ${f} millis`),$T(t,m,r,i)}}function FN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ht.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $N(t){if(!(t instanceof ln)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class UN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function WN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(){if(s2())try{await o2()}catch(t){return Vt.warn(Ht.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Vt.warn(Ht.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function zN(t,e,n,r,i,s,o){var l;const u=MN(t);u.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&Vt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>Vt.error(E)),e.push(u);const c=BN().then(E=>{if(E)return r.getId()}),[f,m]=await Promise.all([u,c]);bN(s)||xN(s,f.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[EN]="firebase",g.update=!0,m!=null&&(g[_N]=m),i("config",f.measurementId,g),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.app=e}_delete(){return delete Va[this.app.options.appId],Promise.resolve()}}let Va={},qv=[];const Gv={};let hf="dataLayer",qN="gtag",Kv,UT,Qv=!1;function GN(){const t=[];if(i2()&&t.push("This is a browser extension environment."),KA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ht.create("invalid-analytics-context",{errorInfo:e});Vt.warn(n.message)}}function KN(t,e,n){GN();const r=t.options.appId;if(!r)throw Ht.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ht.create("no-api-key");if(Va[r]!=null)throw Ht.create("already-exists",{id:r});if(!Qv){AN(hf);const{wrappedGtag:s,gtagCore:o}=LN(Va,qv,Gv,hf,qN);UT=s,Kv=o,Qv=!0}return Va[r]=zN(t,qv,Gv,e,Kv,hf,n),new HN(t)}function QN(t=Td()){t=Pe(t);const e=ui(t,Gc);return e.isInitialized()?e.getImmediate():YN(t)}function YN(t,e={}){const n=ui(t,Gc);if(n.isInitialized()){const i=n.getImmediate();if(ol(e,n.getOptions()))return i;throw Ht.create("already-initialized")}return n.initialize({options:e})}function XN(t,e,n,r){t=Pe(t),WN(UT,Va[t.app.options.appId],e,n,r).catch(i=>Vt.error(i))}const Yv="@firebase/analytics",Xv="0.10.8";function JN(){En(new on(Gc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return KN(r,i,n)},"PUBLIC")),En(new on("analytics-internal",t,"PRIVATE")),jt(Yv,Xv),jt(Yv,Xv,"esm2017");function t(e){try{const n=e.getProvider(Gc).getImmediate();return{logEvent:(r,i,s)=>XN(n,r,i,s)}}catch(n){throw Ht.create("interop-component-reg-failed",{reason:n})}}}JN();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="firebasestorage.googleapis.com",ZN="storageBucket",eO=2*60*1e3,tO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends ln{constructor(e,n,r=0){super(ff(e),`Firebase Storage: ${n} (${ff(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ff(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Vn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Vn||(Vn={}));function ff(t){return"storage/"+t}function nO(){const t="An unknown error occurred, please check the error payload for server response.";return new Fn(Vn.UNKNOWN,t)}function rO(){return new Fn(Vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iO(){return new Fn(Vn.CANCELED,"User canceled the upload/download.")}function sO(t){return new Fn(Vn.INVALID_URL,"Invalid URL '"+t+"'.")}function oO(t){return new Fn(Vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Jv(t){return new Fn(Vn.INVALID_ARGUMENT,t)}function BT(){return new Fn(Vn.APP_DELETED,"The Firebase app was deleted.")}function aO(t){return new Fn(Vn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pn.makeFromUrl(e,n)}catch{return new pn(e,"")}if(r.path==="")return r;throw oO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(P){P.path_=decodeURIComponent(P.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",E=new RegExp(`^https?://${m}/${f}/b/${i}/o${g}`,"i"),x={bucket:1,path:3},C=n===WT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,L="([^?#]*)",_=new RegExp(`^https?://${C}/${i}/${L}`,"i"),I=[{regex:l,indices:u,postModify:s},{regex:E,indices:x,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let P=0;P<I.length;P++){const O=I[P],M=O.regex.exec(e);if(M){const w=M[O.indices.bucket];let k=M[O.indices.path];k||(k=""),r=new pn(w,k),O.postModify(r);break}}if(r==null)throw sO(e);return r}}class lO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...L){c||(c=!0,e.apply(null,L))}function m(L){i=setTimeout(()=>{i=null,t(E,u())},L)}function g(){s&&clearTimeout(s)}function E(L,..._){if(c){g();return}if(L){g(),f.call(null,L,..._);return}if(u()||o){g(),f.call(null,L,..._);return}r<64&&(r*=2);let I;l===1?(l=2,I=0):I=(r+Math.random())*1e3,m(I)}let x=!1;function C(L){x||(x=!0,g(),!c&&(i!==null?(L||(l=2),clearTimeout(i),m(0)):L||(l=1)))}return m(0),s=setTimeout(()=>{o=!0,C(!0)},n),C}function cO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dO(t){return t!==void 0}function Zv(t,e,n,r){if(r<e)throw Jv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Jv(`Invalid value for '${t}'. Expected ${n} or less.`)}function hO(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Kc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Kc||(Kc={}));/**
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
 */function fO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n,r,i,s,o,l,u,c,f,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,x)=>{this.resolve_=E,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Tu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Kc.NO_ERROR,u=s.getStatus();if(!l||fO(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Kc.ABORT;r(!1,new Tu(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Tu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());dO(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=nO();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?BT():iO();o(u)}else{const u=rO();o(u)}};this.canceled_?n(!1,new Tu(!1,null,!0)):this.backoffId_=uO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Tu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function mO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function gO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function yO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function vO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _O(t,e,n,r,i,s,o=!0){const l=hO(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return yO(c,e),mO(c,n),gO(c,s),vO(c,r),new pO(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function kO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n){this._service=e,n instanceof pn?this._location=n:this._location=pn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Qc(e,n)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kO(this._location.path)}get storage(){return this._service}get parent(){const e=EO(this._location.path);if(e===null)return null;const n=new pn(this._location.bucket,e);return new Qc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aO(e)}}function e_(t,e){const n=e==null?void 0:e[ZN];return n==null?null:pn.makeFromBucketSpec(n,t)}function wO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:r2(i,t.app.options.projectId))}class TO{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=WT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=eO,this._maxUploadRetryTime=tO,this._requests=new Set,i!=null?this._bucket=pn.makeFromBucketSpec(i,this._host):this._bucket=e_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=e_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new lO(BT());{const o=_O(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const t_="@firebase/storage",n_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="storage";function IO(t=Td(),e){t=Pe(t);const r=ui(t,zT).getImmediate({identifier:e}),i=e2("storage");return i&&SO(r,...i),r}function SO(t,e,n,r={}){wO(t,e,n,r)}function xO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new TO(n,r,i,e,Xi)}function AO(){En(new on(zT,xO,"PUBLIC").setMultipleInstances(!0)),jt(t_,n_,""),jt(t_,n_,"esm2017")}AO();const RO={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},Gd=c2(RO),mn=G2(Gd),Ye=yb(Gd);IO(Gd);console.log("Using production Firebase services");let CO=null;try{CO=QN(Gd),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const ey=new Gn;ey.setCustomParameters({prompt:"select_account"});ey.addScope("email");ey.addScope("profile");var gt=function(){return gt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},gt.apply(this,arguments)};function vl(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var ke="-ms-",Ma="-moz-",he="-webkit-",HT="comm",Kd="rule",ty="decl",PO="@import",qT="@keyframes",LO="@layer",GT=Math.abs,ny=String.fromCharCode,Gp=Object.assign;function bO(t,e){return Qe(t,0)^45?(((e<<2^Qe(t,0))<<2^Qe(t,1))<<2^Qe(t,2))<<2^Qe(t,3):0}function KT(t){return t.trim()}function Hn(t,e){return(t=e.exec(t))?t[0]:t}function re(t,e,n){return t.replace(e,n)}function Ju(t,e,n){return t.indexOf(e,n)}function Qe(t,e){return t.charCodeAt(e)|0}function wo(t,e,n){return t.slice(e,n)}function xn(t){return t.length}function QT(t){return t.length}function ka(t,e){return e.push(t),t}function NO(t,e){return t.map(e).join("")}function r_(t,e){return t.filter(function(n){return!Hn(n,e)})}var Qd=1,To=1,YT=0,an=0,$e=0,Fo="";function Yd(t,e,n,r,i,s,o,l){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Qd,column:To,length:o,return:"",siblings:l}}function Tr(t,e){return Gp(Yd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function xs(t){for(;t.root;)t=Tr(t.root,{children:[t]});ka(t,t.siblings)}function OO(){return $e}function DO(){return $e=an>0?Qe(Fo,--an):0,To--,$e===10&&(To=1,Qd--),$e}function vn(){return $e=an<YT?Qe(Fo,an++):0,To++,$e===10&&(To=1,Qd++),$e}function Ni(){return Qe(Fo,an)}function Zu(){return an}function Xd(t,e){return wo(Fo,t,e)}function Kp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jO(t){return Qd=To=1,YT=xn(Fo=t),an=0,[]}function VO(t){return Fo="",t}function pf(t){return KT(Xd(an-1,Qp(t===91?t+2:t===40?t+1:t)))}function MO(t){for(;($e=Ni())&&$e<33;)vn();return Kp(t)>2||Kp($e)>3?"":" "}function FO(t,e){for(;--e&&vn()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return Xd(t,Zu()+(e<6&&Ni()==32&&vn()==32))}function Qp(t){for(;vn();)switch($e){case t:return an;case 34:case 39:t!==34&&t!==39&&Qp($e);break;case 40:t===41&&Qp(t);break;case 92:vn();break}return an}function $O(t,e){for(;vn()&&t+$e!==57;)if(t+$e===84&&Ni()===47)break;return"/*"+Xd(e,an-1)+"*"+ny(t===47?t:vn())}function UO(t){for(;!Kp(Ni());)vn();return Xd(t,an)}function WO(t){return VO(ec("",null,null,null,[""],t=jO(t),0,[0],t))}function ec(t,e,n,r,i,s,o,l,u){for(var c=0,f=0,m=o,g=0,E=0,x=0,C=1,L=1,_=1,y=0,I="",P=i,O=s,M=r,w=I;L;)switch(x=y,y=vn()){case 40:if(x!=108&&Qe(w,m-1)==58){Ju(w+=re(pf(y),"&","&\f"),"&\f",GT(c?l[c-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:w+=pf(y);break;case 9:case 10:case 13:case 32:w+=MO(x);break;case 92:w+=FO(Zu()-1,7);continue;case 47:switch(Ni()){case 42:case 47:ka(BO($O(vn(),Zu()),e,n,u),u);break;default:w+="/"}break;case 123*C:l[c++]=xn(w)*_;case 125*C:case 59:case 0:switch(y){case 0:case 125:L=0;case 59+f:_==-1&&(w=re(w,/\f/g,"")),E>0&&xn(w)-m&&ka(E>32?s_(w+";",r,n,m-1,u):s_(re(w," ","")+";",r,n,m-2,u),u);break;case 59:w+=";";default:if(ka(M=i_(w,e,n,c,f,i,l,I,P=[],O=[],m,s),s),y===123)if(f===0)ec(w,e,M,M,P,s,m,l,O);else switch(g===99&&Qe(w,3)===110?100:g){case 100:case 108:case 109:case 115:ec(t,M,M,r&&ka(i_(t,M,M,0,0,i,l,I,i,P=[],m,O),O),i,O,m,l,r?P:O);break;default:ec(w,M,M,M,[""],O,0,l,O)}}c=f=E=0,C=_=1,I=w="",m=o;break;case 58:m=1+xn(w),E=x;default:if(C<1){if(y==123)--C;else if(y==125&&C++==0&&DO()==125)continue}switch(w+=ny(y),y*C){case 38:_=f>0?1:(w+="\f",-1);break;case 44:l[c++]=(xn(w)-1)*_,_=1;break;case 64:Ni()===45&&(w+=pf(vn())),g=Ni(),f=m=xn(I=w+=UO(Zu())),y++;break;case 45:x===45&&xn(w)==2&&(C=0)}}return s}function i_(t,e,n,r,i,s,o,l,u,c,f,m){for(var g=i-1,E=i===0?s:[""],x=QT(E),C=0,L=0,_=0;C<r;++C)for(var y=0,I=wo(t,g+1,g=GT(L=o[C])),P=t;y<x;++y)(P=KT(L>0?E[y]+" "+I:re(I,/&\f/g,E[y])))&&(u[_++]=P);return Yd(t,e,n,i===0?Kd:l,u,c,f,m)}function BO(t,e,n,r){return Yd(t,e,n,HT,ny(OO()),wo(t,2,-2),0,r)}function s_(t,e,n,r,i){return Yd(t,e,n,ty,wo(t,0,r),wo(t,r+1,-1),r,i)}function XT(t,e,n){switch(bO(t,e)){case 5103:return he+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+t+t;case 4789:return Ma+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return he+t+Ma+t+ke+t+t;case 5936:switch(Qe(t,e+11)){case 114:return he+t+ke+re(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return he+t+ke+re(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return he+t+ke+re(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return he+t+ke+t+t;case 6165:return he+t+ke+"flex-"+t+t;case 5187:return he+t+re(t,/(\w+).+(:[^]+)/,he+"box-$1$2"+ke+"flex-$1$2")+t;case 5443:return he+t+ke+"flex-item-"+re(t,/flex-|-self/g,"")+(Hn(t,/flex-|baseline/)?"":ke+"grid-row-"+re(t,/flex-|-self/g,""))+t;case 4675:return he+t+ke+"flex-line-pack"+re(t,/align-content|flex-|-self/g,"")+t;case 5548:return he+t+ke+re(t,"shrink","negative")+t;case 5292:return he+t+ke+re(t,"basis","preferred-size")+t;case 6060:return he+"box-"+re(t,"-grow","")+he+t+ke+re(t,"grow","positive")+t;case 4554:return he+re(t,/([^-])(transform)/g,"$1"+he+"$2")+t;case 6187:return re(re(re(t,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),t,"")+t;case 5495:case 3959:return re(t,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return re(re(t,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+t+t;case 4200:if(!Hn(t,/flex-|baseline/))return ke+"grid-column-align"+wo(t,e)+t;break;case 2592:case 3360:return ke+re(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Hn(r.props,/grid-\w+-end/)})?~Ju(t+(n=n[e].value),"span",0)?t:ke+re(t,"-start","")+t+ke+"grid-row-span:"+(~Ju(n,"span",0)?Hn(n,/\d+/):+Hn(n,/\d+/)-+Hn(t,/\d+/))+";":ke+re(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Hn(r.props,/grid-\w+-start/)})?t:ke+re(re(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return re(t,/(.+)-inline(.+)/,he+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(t)-1-e>6)switch(Qe(t,e+1)){case 109:if(Qe(t,e+4)!==45)break;case 102:return re(t,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+Ma+(Qe(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ju(t,"stretch",0)?XT(re(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return re(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,c){return ke+i+":"+s+c+(o?ke+i+"-span:"+(l?u:+u-+s)+c:"")+t});case 4949:if(Qe(t,e+6)===121)return re(t,":",":"+he)+t;break;case 6444:switch(Qe(t,Qe(t,14)===45?18:11)){case 120:return re(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(Qe(t,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+ke+"$2box$3")+t;case 100:return re(t,":",":"+ke)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(t,"scroll-","scroll-snap-")+t}return t}function Yc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function zO(t,e,n,r){switch(t.type){case LO:if(t.children.length)break;case PO:case ty:return t.return=t.return||t.value;case HT:return"";case qT:return t.return=t.value+"{"+Yc(t.children,r)+"}";case Kd:if(!xn(t.value=t.props.join(",")))return""}return xn(n=Yc(t.children,r))?t.return=t.value+"{"+n+"}":""}function HO(t){var e=QT(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function qO(t){return function(e){e.root||(e=e.return)&&t(e)}}function GO(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case ty:t.return=XT(t.value,t.length,n);return;case qT:return Yc([Tr(t,{value:re(t.value,"@","@"+he)})],r);case Kd:if(t.length)return NO(n=t.props,function(i){switch(Hn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xs(Tr(t,{props:[re(i,/:(read-\w+)/,":"+Ma+"$1")]})),xs(Tr(t,{props:[i]})),Gp(t,{props:r_(n,r)});break;case"::placeholder":xs(Tr(t,{props:[re(i,/:(plac\w+)/,":"+he+"input-$1")]})),xs(Tr(t,{props:[re(i,/:(plac\w+)/,":"+Ma+"$1")]})),xs(Tr(t,{props:[re(i,/:(plac\w+)/,ke+"input-$1")]})),xs(Tr(t,{props:[i]})),Gp(t,{props:r_(n,r)});break}return""})}}var KO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$t={},Io=typeof process<"u"&&$t!==void 0&&($t.REACT_APP_SC_ATTR||$t.SC_ATTR)||"data-styled",JT="active",ZT="data-styled-version",Jd="6.1.17",ry=`/*!sc*/
`,Xc=typeof window<"u"&&"HTMLElement"in window,QO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$t!==void 0&&$t.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$t.REACT_APP_SC_DISABLE_SPEEDY!==""?$t.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$t.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$t!==void 0&&$t.SC_DISABLE_SPEEDY!==void 0&&$t.SC_DISABLE_SPEEDY!==""&&$t.SC_DISABLE_SPEEDY!=="false"&&$t.SC_DISABLE_SPEEDY),YO={},Zd=Object.freeze([]),So=Object.freeze({});function eI(t,e,n){return n===void 0&&(n=So),t.theme!==n.theme&&t.theme||e||n.theme}var tI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),XO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,JO=/(^-|-$)/g;function o_(t){return t.replace(XO,"-").replace(JO,"")}var ZO=/(a)(d)/gi,Iu=52,a_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Yp(t){var e,n="";for(e=Math.abs(t);e>Iu;e=e/Iu|0)n=a_(e%Iu)+n;return(a_(e%Iu)+n).replace(ZO,"$1-$2")}var mf,nI=5381,Qs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},rI=function(t){return Qs(nI,t)};function iI(t){return Yp(rI(t)>>>0)}function eD(t){return t.displayName||t.name||"Component"}function gf(t){return typeof t=="string"&&!0}var sI=typeof Symbol=="function"&&Symbol.for,oI=sI?Symbol.for("react.memo"):60115,tD=sI?Symbol.for("react.forward_ref"):60112,nD={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},rD={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},aI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},iD=((mf={})[tD]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mf[oI]=aI,mf);function l_(t){return("type"in(e=t)&&e.type.$$typeof)===oI?aI:"$$typeof"in t?iD[t.$$typeof]:nD;var e}var sD=Object.defineProperty,oD=Object.getOwnPropertyNames,u_=Object.getOwnPropertySymbols,aD=Object.getOwnPropertyDescriptor,lD=Object.getPrototypeOf,c_=Object.prototype;function lI(t,e,n){if(typeof e!="string"){if(c_){var r=lD(e);r&&r!==c_&&lI(t,r,n)}var i=oD(e);u_&&(i=i.concat(u_(e)));for(var s=l_(t),o=l_(e),l=0;l<i.length;++l){var u=i[l];if(!(u in rD||n&&n[u]||o&&u in o||s&&u in s)){var c=aD(e,u);try{sD(t,u,c)}catch{}}}}return t}function xo(t){return typeof t=="function"}function iy(t){return typeof t=="object"&&"styledComponentId"in t}function Ci(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Xp(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function _l(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Jp(t,e,n){if(n===void 0&&(n=!1),!n&&!_l(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Jp(t[r],e[r]);else if(_l(e))for(var r in e)t[r]=Jp(t[r],e[r]);return t}function sy(t,e){Object.defineProperty(t,"toString",{value:e})}function Vl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var uD=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Vl(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(ry);return n},t}(),tc=new Map,Jc=new Map,nc=1,Su=function(t){if(tc.has(t))return tc.get(t);for(;Jc.has(nc);)nc++;var e=nc++;return tc.set(t,e),Jc.set(e,t),e},cD=function(t,e){nc=e+1,tc.set(t,e),Jc.set(e,t)},dD="style[".concat(Io,"][").concat(ZT,'="').concat(Jd,'"]'),hD=new RegExp("^".concat(Io,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),fD=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},pD=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(ry),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(hD);if(u){var c=0|parseInt(u[1],10),f=u[2];c!==0&&(cD(f,c),fD(t,f,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},d_=function(t){for(var e=document.querySelectorAll(dD),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Io)!==JT&&(pD(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function mD(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var uI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(Io,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Io,JT),r.setAttribute(ZT,Jd);var o=mD();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},gD=function(){function t(e){this.element=uI(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Vl(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),yD=function(){function t(e){this.element=uI(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),vD=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),h_=Xc,_D={isServer:!Xc,useCSSOMInjection:!QO},Zc=function(){function t(e,n,r){e===void 0&&(e=So),n===void 0&&(n={});var i=this;this.options=gt(gt({},_D),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Xc&&h_&&(h_=!1,d_(this)),sy(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",c=function(m){var g=function(_){return Jc.get(_)}(m);if(g===void 0)return"continue";var E=s.names.get(g),x=o.getGroup(m);if(E===void 0||!E.size||x.length===0)return"continue";var C="".concat(Io,".g").concat(m,'[id="').concat(g,'"]'),L="";E!==void 0&&E.forEach(function(_){_.length>0&&(L+="".concat(_,","))}),u+="".concat(x).concat(C,'{content:"').concat(L,'"}').concat(ry)},f=0;f<l;f++)c(f);return u}(i)})}return t.registerId=function(e){return Su(e)},t.prototype.rehydrate=function(){!this.server&&Xc&&d_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(gt(gt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new vD(i):r?new gD(i):new yD(i)}(this.options),new uD(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Su(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Su(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Su(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),ED=/&/g,kD=/^\s*\/\/.*$/gm;function cI(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=cI(n.children,e)),n})}function wD(t){var e,n,r,i=So,s=i.options,o=s===void 0?So:s,l=i.plugins,u=l===void 0?Zd:l,c=function(g,E,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(e):g},f=u.slice();f.push(function(g){g.type===Kd&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(ED,n).replace(r,c))}),o.prefix&&f.push(GO),f.push(zO);var m=function(g,E,x,C){E===void 0&&(E=""),x===void 0&&(x=""),C===void 0&&(C="&"),e=C,n=E,r=new RegExp("\\".concat(n,"\\b"),"g");var L=g.replace(kD,""),_=WO(x||E?"".concat(x," ").concat(E," { ").concat(L," }"):L);o.namespace&&(_=cI(_,o.namespace));var y=[];return Yc(_,HO(f.concat(qO(function(I){return y.push(I)})))),y};return m.hash=u.length?u.reduce(function(g,E){return E.name||Vl(15),Qs(g,E.name)},nI).toString():"",m}var TD=new Zc,Zp=wD(),dI=d.createContext({shouldForwardProp:void 0,styleSheet:TD,stylis:Zp});dI.Consumer;d.createContext(void 0);function em(){return j.useContext(dI)}var ID=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Zp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,sy(this,function(){throw Vl(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Zp),this.name+e.hash},t}(),SD=function(t){return t>="A"&&t<="Z"};function f_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;SD(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var hI=function(t){return t==null||t===!1||t===""},fI=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!hI(s)&&(Array.isArray(s)&&s.isCss||xo(s)?r.push("".concat(f_(i),":"),s,";"):_l(s)?r.push.apply(r,vl(vl(["".concat(i," {")],fI(s),!1),["}"],!1)):r.push("".concat(f_(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in KO||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Qr(t,e,n,r){if(hI(t))return[];if(iy(t))return[".".concat(t.styledComponentId)];if(xo(t)){if(!xo(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Qr(i,e,n,r)}var s;return t instanceof ID?n?(t.inject(n,r),[t.getName(r)]):[t]:_l(t)?fI(t):Array.isArray(t)?Array.prototype.concat.apply(Zd,t.map(function(o){return Qr(o,e,n,r)})):[t.toString()]}function pI(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(xo(n)&&!iy(n))return!1}return!0}var xD=rI(Jd),AD=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&pI(e),this.componentId=n,this.baseHash=Qs(xD,n),this.baseStyle=r,Zc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ci(i,this.staticRulesId);else{var s=Xp(Qr(this.rules,e,n,r)),o=Yp(Qs(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=Ci(i,o),this.staticRulesId=o}else{for(var u=Qs(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")c+=m;else if(m){var g=Xp(Qr(m,e,n,r));u=Qs(u,g+f),c+=g}}if(c){var E=Yp(u>>>0);n.hasNameForId(this.componentId,E)||n.insertRules(this.componentId,E,r(c,".".concat(E),void 0,this.componentId)),i=Ci(i,E)}}return i},t}(),oy=d.createContext(void 0);oy.Consumer;var yf={};function RD(t,e,n){var r=iy(t),i=t,s=!gf(t),o=e.attrs,l=o===void 0?Zd:o,u=e.componentId,c=u===void 0?function(P,O){var M=typeof P!="string"?"sc":o_(P);yf[M]=(yf[M]||0)+1;var w="".concat(M,"-").concat(iI(Jd+M+yf[M]));return O?"".concat(O,"-").concat(w):w}(e.displayName,e.parentComponentId):u,f=e.displayName,m=f===void 0?function(P){return gf(P)?"styled.".concat(P):"Styled(".concat(eD(P),")")}(t):f,g=e.displayName&&e.componentId?"".concat(o_(e.displayName),"-").concat(e.componentId):e.componentId||c,E=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,x=e.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(e.shouldForwardProp){var L=e.shouldForwardProp;x=function(P,O){return C(P,O)&&L(P,O)}}else x=C}var _=new AD(n,g,r?i.componentStyle:void 0);function y(P,O){return function(M,w,k){var S=M.attrs,A=M.componentStyle,b=M.defaultProps,N=M.foldedComponentIds,R=M.styledComponentId,ge=M.target,Je=d.useContext(oy),Oe=em(),xe=M.shouldForwardProp||Oe.shouldForwardProp,z=eI(w,Je,b)||So,Q=function(At,_t,Rt){for(var fi,$n=gt(gt({},_t),{className:void 0,theme:Rt}),mr=0;mr<At.length;mr+=1){var Un=xo(fi=At[mr])?fi($n):fi;for(var Qt in Un)$n[Qt]=Qt==="className"?Ci($n[Qt],Un[Qt]):Qt==="style"?gt(gt({},$n[Qt]),Un[Qt]):Un[Qt]}return _t.className&&($n.className=Ci($n.className,_t.className)),$n}(S,w,z),Z=Q.as||ge,fe={};for(var se in Q)Q[se]===void 0||se[0]==="$"||se==="as"||se==="theme"&&Q.theme===z||(se==="forwardedAs"?fe.as=Q.forwardedAs:xe&&!xe(se,Z)||(fe[se]=Q[se]));var Ie=function(At,_t){var Rt=em(),fi=At.generateAndInjectStyles(_t,Rt.styleSheet,Rt.stylis);return fi}(A,Q),Mt=Ci(N,R);return Ie&&(Mt+=" "+Ie),Q.className&&(Mt+=" "+Q.className),fe[gf(Z)&&!tI.has(Z)?"class":"className"]=Mt,k&&(fe.ref=k),j.createElement(Z,fe)}(I,P,O)}y.displayName=m;var I=d.forwardRef(y);return I.attrs=E,I.componentStyle=_,I.displayName=m,I.shouldForwardProp=x,I.foldedComponentIds=r?Ci(i.foldedComponentIds,i.styledComponentId):"",I.styledComponentId=g,I.target=r?i.target:t,Object.defineProperty(I,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=r?function(O){for(var M=[],w=1;w<arguments.length;w++)M[w-1]=arguments[w];for(var k=0,S=M;k<S.length;k++)Jp(O,S[k],!0);return O}({},i.defaultProps,P):P}}),sy(I,function(){return".".concat(I.styledComponentId)}),s&&lI(I,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),I}function p_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var m_=function(t){return Object.assign(t,{isCss:!0})};function mI(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(xo(t)||_l(t))return m_(Qr(p_(Zd,vl([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Qr(r):m_(Qr(p_(r,e)))}function tm(t,e,n){if(n===void 0&&(n=So),!e)throw Vl(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,mI.apply(void 0,vl([i],s,!1)))};return r.attrs=function(i){return tm(t,e,gt(gt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return tm(t,e,gt(gt({},n),i))},r}var gI=function(t){return tm(RD,t)},U=gI;tI.forEach(function(t){U[t]=gI(t)});var CD=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=pI(e),Zc.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(Xp(Qr(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Zc.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function PD(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=mI.apply(void 0,vl([t],e,!1)),i="sc-global-".concat(iI(JSON.stringify(r))),s=new CD(r,i),o=function(u){var c=em(),f=d.useContext(oy),m=d.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&l(m,u,c.styleSheet,f,c.stylis),d.useLayoutEffect(function(){if(!c.styleSheet.server)return l(m,u,c.styleSheet,f,c.stylis),function(){return s.removeStyles(m,c.styleSheet)}},[m,u,c.styleSheet,f,c.stylis]),null};function l(u,c,f,m,g){if(s.isStatic)s.renderStyles(u,YO,f,g);else{var E=gt(gt({},c),{theme:eI(c,m,o.defaultProps)});s.renderStyles(u,E,f,g)}}return d.memo(o)}function yI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=yI(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function jr(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=yI(t))&&(r&&(r+=" "),r+=e);return r}const Fa=t=>typeof t=="number"&&!isNaN(t),Gi=t=>typeof t=="string",bt=t=>typeof t=="function",rc=t=>Gi(t)||bt(t)?t:null,vf=t=>j.isValidElement(t)||Gi(t)||bt(t)||Fa(t);function LD(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function eh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:l,position:u,preventExitTransition:c,done:f,nodeRef:m,isIn:g}=o;const E=r?`${e}--${u}`:e,x=r?`${n}--${u}`:n,C=j.useRef(0);return j.useLayoutEffect(()=>{const L=m.current,_=E.split(" "),y=I=>{I.target===m.current&&(L.dispatchEvent(new Event("d")),L.removeEventListener("animationend",y),L.removeEventListener("animationcancel",y),C.current===0&&I.type!=="animationcancel"&&L.classList.remove(..._))};L.classList.add(..._),L.addEventListener("animationend",y),L.addEventListener("animationcancel",y)},[]),j.useEffect(()=>{const L=m.current,_=()=>{L.removeEventListener("animationend",_),i?LD(L,f,s):f()};g||(c?_():(C.current=1,L.className+=` ${x}`,L.addEventListener("animationend",_)))},[g]),d.createElement(d.Fragment,null,l)}}function g_(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Xt={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},xu=t=>{let{theme:e,type:n,...r}=t;return d.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},_f={info:function(t){return d.createElement(xu,{...t},d.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return d.createElement(xu,{...t},d.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return d.createElement(xu,{...t},d.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return d.createElement(xu,{...t},d.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return d.createElement("div",{className:"Toastify__spinner"})}};function bD(t){const[,e]=j.useReducer(E=>E+1,0),[n,r]=j.useState([]),i=j.useRef(null),s=j.useRef(new Map).current,o=E=>n.indexOf(E)!==-1,l=j.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:E=>s.get(E)}).current;function u(E){let{containerId:x}=E;const{limit:C}=l.props;!C||x&&l.containerId!==x||(l.count-=l.queue.length,l.queue=[])}function c(E){r(x=>E==null?[]:x.filter(C=>C!==E))}function f(){const{toastContent:E,toastProps:x,staleId:C}=l.queue.shift();g(E,x,C)}function m(E,x){let{delay:C,staleId:L,..._}=x;if(!vf(E)||function(N){return!i.current||l.props.enableMultiContainer&&N.containerId!==l.props.containerId||s.has(N.toastId)&&N.updateId==null}(_))return;const{toastId:y,updateId:I,data:P}=_,{props:O}=l,M=()=>c(y),w=I==null;w&&l.count++;const k={...O,style:O.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(_).filter(N=>{let[R,ge]=N;return ge!=null})),toastId:y,updateId:I,data:P,closeToast:M,isIn:!1,className:rc(_.className||O.toastClassName),bodyClassName:rc(_.bodyClassName||O.bodyClassName),progressClassName:rc(_.progressClassName||O.progressClassName),autoClose:!_.isLoading&&(S=_.autoClose,A=O.autoClose,S===!1||Fa(S)&&S>0?S:A),deleteToast(){const N=g_(s.get(y),"removed");s.delete(y),Xt.emit(4,N);const R=l.queue.length;if(l.count=y==null?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),R>0){const ge=y==null?l.props.limit:1;if(R===1||ge===1)l.displayedToast++,f();else{const Je=ge>R?R:ge;l.displayedToast=Je;for(let Oe=0;Oe<Je;Oe++)f()}}else e()}};var S,A;k.iconOut=function(N){let{theme:R,type:ge,isLoading:Je,icon:Oe}=N,xe=null;const z={theme:R,type:ge};return Oe===!1||(bt(Oe)?xe=Oe(z):j.isValidElement(Oe)?xe=j.cloneElement(Oe,z):Gi(Oe)||Fa(Oe)?xe=Oe:Je?xe=_f.spinner():(Q=>Q in _f)(ge)&&(xe=_f[ge](z))),xe}(k),bt(_.onOpen)&&(k.onOpen=_.onOpen),bt(_.onClose)&&(k.onClose=_.onClose),k.closeButton=O.closeButton,_.closeButton===!1||vf(_.closeButton)?k.closeButton=_.closeButton:_.closeButton===!0&&(k.closeButton=!vf(O.closeButton)||O.closeButton);let b=E;j.isValidElement(E)&&!Gi(E.type)?b=j.cloneElement(E,{closeToast:M,toastProps:k,data:P}):bt(E)&&(b=E({closeToast:M,toastProps:k,data:P})),O.limit&&O.limit>0&&l.count>O.limit&&w?l.queue.push({toastContent:b,toastProps:k,staleId:L}):Fa(C)?setTimeout(()=>{g(b,k,L)},C):g(b,k,L)}function g(E,x,C){const{toastId:L}=x;C&&s.delete(C);const _={content:E,props:x};s.set(L,_),r(y=>[...y,L].filter(I=>I!==C)),Xt.emit(4,g_(_,_.props.updateId==null?"added":"updated"))}return j.useEffect(()=>(l.containerId=t.containerId,Xt.cancelEmit(3).on(0,m).on(1,E=>i.current&&c(E)).on(5,u).emit(2,l),()=>{s.clear(),Xt.emit(3,l)}),[]),j.useEffect(()=>{l.props=t,l.isToastActive=o,l.displayedToast=n.length}),{getToastToRender:function(E){const x=new Map,C=Array.from(s.values());return t.newestOnTop&&C.reverse(),C.forEach(L=>{const{position:_}=L.props;x.has(_)||x.set(_,[]),x.get(_).push(L)}),Array.from(x,L=>E(L[0],L[1]))},containerRef:i,isToastActive:o}}function y_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function v_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function ND(t){const[e,n]=j.useState(!1),[r,i]=j.useState(!1),s=j.useRef(null),o=j.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=j.useRef(t),{autoClose:u,pauseOnHover:c,closeToast:f,onClick:m,closeOnClick:g}=t;function E(P){if(t.draggable){P.nativeEvent.type==="touchstart"&&P.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",y),document.addEventListener("touchmove",_),document.addEventListener("touchend",y);const O=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=O.getBoundingClientRect(),O.style.transition="",o.x=y_(P.nativeEvent),o.y=v_(P.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=O.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=O.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function x(P){if(o.boundingRect){const{top:O,bottom:M,left:w,right:k}=o.boundingRect;P.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=w&&o.x<=k&&o.y>=O&&o.y<=M?L():C()}}function C(){n(!0)}function L(){n(!1)}function _(P){const O=s.current;o.canDrag&&O&&(o.didMove=!0,e&&L(),o.x=y_(P),o.y=v_(P),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),O.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,O.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function y(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",y),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",y);const P=s.current;if(o.canDrag&&o.didMove&&P){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();P.style.transition="transform 0.2s, opacity 0.2s",P.style.transform=`translate${t.draggableDirection}(0)`,P.style.opacity="1"}}j.useEffect(()=>{l.current=t}),j.useEffect(()=>(s.current&&s.current.addEventListener("d",C,{once:!0}),bt(t.onOpen)&&t.onOpen(j.isValidElement(t.children)&&t.children.props),()=>{const P=l.current;bt(P.onClose)&&P.onClose(j.isValidElement(P.children)&&P.children.props)}),[]),j.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||L(),window.addEventListener("focus",C),window.addEventListener("blur",L)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",L))}),[t.pauseOnFocusLoss]);const I={onMouseDown:E,onTouchStart:E,onMouseUp:x,onTouchEnd:x};return u&&c&&(I.onMouseEnter=L,I.onMouseLeave=C),g&&(I.onClick=P=>{m&&m(P),o.canCloseOnClick&&f()}),{playToast:C,pauseToast:L,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:I}}function vI(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return d.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},d.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},d.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function OD(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:l,controlledProgress:u,progress:c,rtl:f,isIn:m,theme:g}=t;const E=s||u&&c===0,x={...l,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:E?0:1};u&&(x.transform=`scaleX(${c})`);const C=jr("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),L=bt(o)?o({rtl:f,type:i,defaultClassName:C}):jr(C,o);return d.createElement("div",{role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:L,style:x,[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{m&&r()}})}const DD=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=ND(t),{closeButton:s,children:o,autoClose:l,onClick:u,type:c,hideProgressBar:f,closeToast:m,transition:g,position:E,className:x,style:C,bodyClassName:L,bodyStyle:_,progressClassName:y,progressStyle:I,updateId:P,role:O,progress:M,rtl:w,toastId:k,deleteToast:S,isIn:A,isLoading:b,iconOut:N,closeOnClick:R,theme:ge}=t,Je=jr("Toastify__toast",`Toastify__toast-theme--${ge}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":R}),Oe=bt(x)?x({rtl:w,position:E,type:c,defaultClassName:Je}):jr(Je,x),xe=!!M||!l,z={closeToast:m,type:c,theme:ge};let Q=null;return s===!1||(Q=bt(s)?s(z):j.isValidElement(s)?j.cloneElement(s,z):vI(z)),d.createElement(g,{isIn:A,done:S,position:E,preventExitTransition:n,nodeRef:r},d.createElement("div",{id:k,onClick:u,className:Oe,...i,style:C,ref:r},d.createElement("div",{...A&&{role:O},className:bt(L)?L({type:c}):jr("Toastify__toast-body",L),style:_},N!=null&&d.createElement("div",{className:jr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!b})},N),d.createElement("div",null,o)),Q,d.createElement(OD,{...P&&!xe?{key:`pb-${P}`}:{},rtl:w,theme:ge,delay:l,isRunning:e,isIn:A,closeToast:m,hide:f,type:c,style:I,className:y,controlledProgress:xe,progress:M||0})))},th=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},jD=eh(th("bounce",!0));eh(th("slide",!0));eh(th("zoom"));eh(th("flip"));const nm=j.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=bD(t),{className:s,style:o,rtl:l,containerId:u}=t;function c(f){const m=jr("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":l});return bt(s)?s({position:f,rtl:l,defaultClassName:m}):jr(m,rc(s))}return j.useEffect(()=>{e&&(e.current=r.current)},[]),d.createElement("div",{ref:r,className:"Toastify",id:u},n((f,m)=>{const g=m.length?{...o}:{...o,pointerEvents:"none"};return d.createElement("div",{className:c(f),style:g,key:`container-${f}`},m.map((E,x)=>{let{content:C,props:L}=E;return d.createElement(DD,{...L,isIn:i(L.toastId),style:{...L.style,"--nth":x+1,"--len":m.length},key:`toast-${L.key}`},C)}))}))});nm.displayName="ToastContainer",nm.defaultProps={position:"top-right",transition:jD,autoClose:5e3,closeButton:vI,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Ef,wi=new Map,wa=[],VD=1;function _I(){return""+VD++}function MD(t){return t&&(Gi(t.toastId)||Fa(t.toastId))?t.toastId:_I()}function $a(t,e){return wi.size>0?Xt.emit(0,t,e):wa.push({content:t,options:e}),e.toastId}function ed(t,e){return{...e,type:e&&e.type||t,toastId:MD(e)}}function Au(t){return(e,n)=>$a(e,ed(t,n))}function X(t,e){return $a(t,ed("default",e))}X.loading=(t,e)=>$a(t,ed("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),X.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Gi(i)?X.loading(i,n):X.loading(i.render,{...n,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(f,m,g)=>{if(m==null)return void X.dismiss(r);const E={type:f,...l,...n,data:g},x=Gi(m)?{render:m}:m;return r?X.update(r,{...E,...x}):X(x.render,{...E,...x}),g},c=bt(t)?t():t;return c.then(f=>u("success",o,f)).catch(f=>u("error",s,f)),c},X.success=Au("success"),X.info=Au("info"),X.error=Au("error"),X.warning=Au("warning"),X.warn=X.warning,X.dark=(t,e)=>$a(t,ed("default",{theme:"dark",...e})),X.dismiss=t=>{wi.size>0?Xt.emit(1,t):wa=wa.filter(e=>t!=null&&e.options.toastId!==t)},X.clearWaitingQueue=function(t){return t===void 0&&(t={}),Xt.emit(5,t)},X.isActive=t=>{let e=!1;return wi.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},X.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=wi.get(s||Ef);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:_I()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,$a(o,s)}},0)},X.done=t=>{X.update(t,{progress:1})},X.onChange=t=>(Xt.on(4,t),()=>{Xt.off(4,t)}),X.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},X.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Xt.on(2,t=>{Ef=t.containerId||t,wi.set(Ef,t),wa.forEach(e=>{Xt.emit(0,e.content,e.options)}),wa=[]}).on(3,t=>{wi.delete(t.containerId||t),wi.size===0&&Xt.off(0).off(1).off(5)});var FD=j.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),ze=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function __(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Me=j.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,s=t.weight,o=t.mirrored,l=t.children,u=t.renderPath,c=__(t,["alt","color","size","weight","mirrored","children","renderPath"]),f=j.useContext(FD),m=f.color,g=m===void 0?"currentColor":m,E=f.size,x=f.weight,C=x===void 0?"regular":x,L=f.mirrored,_=L===void 0?!1:L,y=__(f,["color","size","weight","mirrored"]);return d.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??E,height:i??E,fill:r??g,viewBox:"0 0 256 256",transform:o||_?"scale(-1, 1)":void 0},y,c),!!n&&d.createElement("title",null,n),l,d.createElement("rect",{width:"256",height:"256",fill:"none"}),u(s??C,r??g))});Me.displayName="IconBase";var ts=new Map;ts.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ts.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ts.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});ts.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ts.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ts.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var $D=function(e,n){return ze(e,n,ts)},EI=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:$D}))});EI.displayName="ArrowLeft";var ns=new Map;ns.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"68",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"80",y1:"136",x2:"108",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"68",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"180",y1:"176",x2:"188",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"180",y1:"136",x2:"188",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ns.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",opacity:"0.2"}),d.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ns.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M240,208h-8V104a16,16,0,0,0-16-16H152V40a16,16,0,0,0-16-16H40A16,16,0,0,0,24,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM120,136a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h32A8,8,0,0,1,120,136ZM64,64H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,104H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm88-64h64V208H152Z"}),d.createElement("path",{d:"M192,168H176a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"}),d.createElement("path",{d:"M176,144h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"}))});ns.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ns.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ns.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var UD=function(e,n){return ze(e,n,ns)},ay=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:UD}))});ay.displayName="Buildings";var rs=new Map;rs.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});rs.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),d.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});rs.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});rs.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});rs.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});rs.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var WD=function(e,n){return ze(e,n,rs)},ly=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:WD}))});ly.displayName="Calendar";var is=new Map;is.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});is.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),d.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});is.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});is.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});is.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});is.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var BD=function(e,n){return ze(e,n,is)},Ti=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:BD}))});Ti.displayName="CheckCircle";var ss=new Map;ss.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ss.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),d.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ss.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});ss.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ss.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ss.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),d.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var zD=function(e,n){return ze(e,n,ss)},kI=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:zD}))});kI.displayName="Clock";var os=new Map;os.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});os.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),d.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});os.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm59.9-19.9a96.2,96.2,0,0,0-135.8,0l-8.3,8.3L37.5,54.1a8,8,0,0,0-8.7-1.8,8.2,8.2,0,0,0-5,7.4v40a8,8,0,0,0,8,8h40a8,8,0,0,0,5.7-13.6L63.1,79.7l8.3-8.3a80,80,0,1,1,0,113.2,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3A96,96,0,0,0,195.9,60.1Z"}))});os.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});os.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});os.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var HD=function(e,n){return ze(e,n,os)},wI=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:HD}))});wI.displayName="ClockCounterClockwise";var as=new Map;as.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});as.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),d.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});as.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});as.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});as.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});as.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var qD=function(e,n){return ze(e,n,as)},nh=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:qD}))});nh.displayName="Envelope";var ls=new Map;ls.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ls.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),d.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ls.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});ls.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ls.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ls.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var GD=function(e,n){return ze(e,n,ls)},td=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:GD}))});td.displayName="Eye";var us=new Map;us.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});us.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),d.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});us.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),d.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});us.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});us.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});us.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var KD=function(e,n){return ze(e,n,us)},nd=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:KD}))});nd.displayName="EyeSlash";var cs=new Map;cs.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});cs.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),d.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});cs.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});cs.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});cs.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});cs.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var QD=function(e,n){return ze(e,n,cs)},TI=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:QD}))});TI.displayName="House";var ds=new Map;ds.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ds.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),d.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ds.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),d.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});ds.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ds.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ds.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var YD=function(e,n){return ze(e,n,ds)},uy=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:YD}))});uy.displayName="IdentificationCard";var hs=new Map;hs.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("circle",{cx:"128",cy:"152",r:"16"}))});hs.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),d.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("circle",{cx:"128",cy:"152",r:"12"}))});hs.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});hs.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("circle",{cx:"128",cy:"152",r:"10"}))});hs.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("circle",{cx:"128",cy:"152",r:"8"}))});hs.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var XD=function(e,n){return ze(e,n,hs)},rd=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:XD}))});rd.displayName="Lock";var fs=new Map;fs.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"44",y1:"156",x2:"100",y2:"212",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"164",y1:"92",x2:"72",y2:"184",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});fs.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",opacity:"0.2"}),d.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});fs.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,76.7,179.3,32a15.9,15.9,0,0,0-22.6,0L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a15.9,15.9,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7ZM51.3,160,144,67.3,160.7,84,68,176.7ZM48,179.3,76.7,208H48Zm48,25.4L79.3,188,172,95.3,188.7,112Z"}))});fs.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});fs.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});fs.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var JD=function(e,n){return ze(e,n,fs)},II=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:JD}))});II.displayName="Pencil";var ps=new Map;ps.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ps.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ps.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});ps.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ps.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ps.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ZD=function(e,n){return ze(e,n,ps)},cy=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:ZD}))});cy.displayName="SignIn";var ms=new Map;ms.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ms.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ms.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});ms.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ms.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ms.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ej=function(e,n){return ze(e,n,ms)},ic=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:ej}))});ic.displayName="SignOut";var gs=new Map;gs.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});gs.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});gs.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});gs.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});gs.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});gs.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var tj=function(e,n){return ze(e,n,gs)},SI=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:tj}))});SI.displayName="SpinnerGap";var ys=new Map;ys.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ys.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),d.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),d.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ys.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});ys.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ys.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ys.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),d.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var nj=function(e,n){return ze(e,n,ys)},Oi=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:nj}))});Oi.displayName="User";var vs=new Map;vs.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});vs.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});vs.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"120",r:"44"}),d.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});vs.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});vs.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});vs.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var rj=function(e,n){return ze(e,n,vs)},rm=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:rj}))});rm.displayName="UserCircle";var _s=new Map;_s.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});_s.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),d.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),d.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});_s.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});_s.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});_s.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});_s.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),d.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ij=function(e,n){return ze(e,n,_s)},dy=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:ij}))});dy.displayName="UserPlus";var Es=new Map;Es.set("bold",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),d.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Es.set("duotone",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),d.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Es.set("fill",function(){return d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"}))});Es.set("light",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),d.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Es.set("thin",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),d.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Es.set("regular",function(t){return d.createElement(d.Fragment,null,d.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),d.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),d.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var sj=function(e,n){return ze(e,n,Es)},xI=j.forwardRef(function(t,e){return d.createElement(Me,Object.assign({ref:e},t,{renderPath:sj}))});xI.displayName="XCircle";const F={colors:{primary:{main:"#D32F2F",light:"#EF5350",dark:"#B71C1C",contrastText:"#FFFFFF"},accent:{main:"#FFD700",light:"#FFEB3B",dark:"#FFC107",contrastText:"#212121"},background:{default:"#FFFFFF",paper:"#F5F5F5",secondary:"#FAFAFA"},text:{primary:"#212121",secondary:"#757575",disabled:"#9E9E9E",hint:"#9E9E9E"},status:{success:"#4CAF50",warning:"#FF9800",error:"#F44336",info:"#2196F3"},divider:"#E0E0E0",border:"#DDDDDD"},typography:{fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700},spacing:{unit:8},shadows:{small:"0 2px 4px rgba(0, 0, 0, 0.1)",medium:"0 4px 8px rgba(0, 0, 0, 0.1)",large:"0 8px 16px rgba(0, 0, 0, 0.1)"},borders:{radius:"4px"},transitions:{default:"0.3s ease"}},oj=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, ${F.colors.primary.main} 0%, ${F.colors.primary.dark} 100%);
`,aj=U.div`
  background-color: ${F.colors.background.default};
  border-radius: ${F.borders.radius};
  box-shadow: ${F.shadows.large};
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,lj=U.h1`
  color: ${F.colors.text.primary};
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,uj=U.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,E_=U.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,k_=U.label`
  font-size: 0.9rem;
  color: ${F.colors.text.secondary};
`,w_=U.div`
  display: flex;
  align-items: center;
  border: 1px solid ${F.colors.border};
  border-radius: ${F.borders.radius};
  padding: 0 1rem;
  background-color: #f9f9f9;
  position: relative;
  
  &:focus-within {
    border-color: ${F.colors.primary.main};
    box-shadow: 0 0 0 2px ${F.colors.primary.main}25;
  }
`,Ru=U.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: #888;
`,T_=U.input`
  flex: 1;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border-radius: ${F.borders.radius};
  border: 1px solid ${F.colors.border};
  width: 100%;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${F.colors.primary.main};
    box-shadow: 0 0 0 2px ${F.colors.primary.main}25;
  }
  
  &::placeholder {
    color: ${F.colors.text.hint};
  }
`,cj=U.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${F.colors.primary.main};
  color: ${F.colors.primary.contrastText};
  border: none;
  border-radius: ${F.borders.radius};
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color ${F.transitions.default};
  
  &:hover {
    background-color: ${F.colors.primary.dark};
  }
  
  &:disabled {
    background-color: ${F.colors.primary.light};
    opacity: 0.7;
    cursor: not-allowed;
  }
`,dj=U.div`
  color: ${F.colors.status.error};
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,hj=U(Qk)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  color: ${F.colors.primary.main};
  border: 1px solid ${F.colors.primary.main};
  border-radius: ${F.borders.radius};
  padding: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  margin-top: 1rem;
  width: 100%;
  
  &:hover {
    background-color: rgba(${F.colors.primary.main}25);
    transform: translateY(-2px);
  }
`,fj=U.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,pj=U.button`
  background: none;
  border: none;
  color: ${F.colors.primary.main};
  font-size: 0.8rem;
  text-align: right;
  margin-top: 0.5rem;
  cursor: pointer;
  align-self: flex-end;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:disabled {
    color: ${F.colors.text.disabled};
    cursor: not-allowed;
  }
  
  &:focus {
    outline: none;
  }
`,mj=U.button`
  background: none;
  border: none;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: ${F.colors.primary.main};
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`,gj=U.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${F.colors.accent.main};
  text-align: center;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 2px ${F.colors.primary.dark}40;
`;function yj(){const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,s]=j.useState(""),[o,l]=j.useState(!1),[u,c]=j.useState(!1),[f,m]=j.useState(!1),[g,E]=j.useState(!1),x=No(),C=bo();j.useEffect(()=>{var y;(y=C.state)!=null&&y.message&&(X.info(C.state.message),x(C.pathname,{replace:!0,state:{}}))},[C,x]),j.useEffect(()=>{i&&s("")},[t,n]);const L=async()=>{var I,P;if(!t){s("Please enter your email address to reset your password"),(I=document.getElementById("email"))==null||I.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){s("Please enter a valid email address"),(P=document.getElementById("email"))==null||P.focus();return}try{E(!0),await uP(mn,t),m(!0),X.success("Password reset email sent! Check your inbox.")}catch(O){console.error("Password reset error:",O),O.code==="auth/user-not-found"?s("No account found with this email address"):s("Failed to send password reset email. Please try again.")}finally{E(!1)}},_=async y=>{var P,O,M;if(y.preventDefault(),!t||!n){s("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){s("Please enter a valid email address"),(P=document.getElementById("email"))==null||P.focus();return}try{s(""),l(!0);try{const k=(await dP(mn,t,n)).user,S=Zn(Cn(Ye,"declined_registrations"),Dr("userId","==",k.uid));if(!(await er(S)).empty){await mn.signOut(),s("Your registration request has been declined. Please contact an administrator."),X.error("Access denied: Registration declined");return}const b=Zn(Cn(Ye,"registration_requests"),Dr("userId","==",k.uid));if(!(await er(b)).empty){await mn.signOut(),s("Your registration request is pending approval. You will be notified when approved."),X.info("Registration pending approval");return}const R=!1;X.success("Login successful!"),x("/dashboard")}catch(w){if(console.error("Firebase auth error:",w),!(!1&&(w.code==="auth/network-request-failed"||(O=w.message)!=null&&O.includes("network")))){if(w.code==="auth/invalid-credential"||w.code==="auth/invalid-email"||w.code==="auth/user-not-found"||w.code==="auth/wrong-password"){console.log("Authentication failed:",w.code,w.message);const S=w.code==="auth/user-not-found"||w.code==="auth/invalid-credential"&&t.includes("@");s(S?v.jsxs("span",{children:["Account not found. Please check your email or",v.jsx("a",{href:"/register",style:{color:F.colors.primary.main,marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(M=document.getElementById("email"))==null||M.focus()}else w.code==="auth/network-request-failed"?s("Network error. Please check your connection and try again."):w.code==="auth/too-many-requests"?s("Too many failed login attempts. Please try again later or reset your password."):w.code==="auth/operation-not-allowed"?(s("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",w),s("Failed to log in. Please try again."));X.error("Login failed")}}}catch(w){console.error("Unexpected login error:",w),s("An unexpected error occurred. Please try again."),X.error("Login failed")}finally{l(!1)}};return v.jsx(oj,{children:v.jsxs(aj,{children:[v.jsx(gj,{children:"Hyacinth"}),v.jsx(lj,{children:"Attendance System"}),v.jsxs(uj,{onSubmit:_,children:[v.jsxs(E_,{children:[v.jsx(k_,{htmlFor:"email",children:"Email"}),v.jsxs(w_,{children:[v.jsx(Ru,{children:v.jsx(nh,{size:18})}),v.jsx(T_,{id:"email",type:"email",value:t,onChange:y=>e(y.target.value),placeholder:"Enter your email",required:!0})]})]}),v.jsxs(E_,{children:[v.jsx(k_,{htmlFor:"password",children:"Password"}),v.jsxs(w_,{children:[v.jsx(Ru,{children:v.jsx(rd,{size:18})}),v.jsx(T_,{id:"password",type:u?"text":"password",value:n,onChange:y=>r(y.target.value),placeholder:"Enter your password",required:!0}),v.jsx(mj,{type:"button",onClick:()=>c(!u),"aria-label":u?"Hide password":"Show password",children:u?v.jsx(nd,{size:18}):v.jsx(td,{size:18})})]}),v.jsx(pj,{type:"button",onClick:L,disabled:g,tabIndex:"-1",children:g?"Sending...":f?"Email sent!":"Forgot password?"})]}),i&&v.jsx(dj,{children:i}),v.jsxs(fj,{children:[v.jsx(cj,{type:"submit",disabled:o,onClick:_,children:o?"Logging in...":v.jsxs(v.Fragment,{children:[v.jsx(Ru,{children:v.jsx(cy,{size:18})}),"Login"]})}),v.jsxs(hj,{to:"/register",children:[v.jsx(Ru,{children:v.jsx(dy,{size:18})}),"Register"]})]})]})]})})}const vj=async t=>{try{const e={...t,createdAt:yl(),status:"pending"};return(await _T(Cn(Ye,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},_j=async()=>{try{const t=Zn(Cn(Ye,"registration_requests"),Gg("createdAt","desc"));return(await er(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error getting registration requests:",t),t}},Ej=async(t,e)=>{try{const n=hr(Ye,"registration_requests",t);await bb(n,{...e,updatedAt:yl()})}catch(n){throw console.error("Error updating registration request:",n),n}},kj=async t=>{try{await yT(hr(Ye,"users",t.userId),{...t,role:t.role||"user",createdAt:yl(),approved:!0,approvedAt:yl()}),await vT(hr(Ye,"registration_requests",t.id))}catch(e){throw console.error("Error approving registration request:",e),e}},wj=async t=>{try{if(await yT(hr(Ye,"declined_registrations",t.id),{...t,declinedAt:yl(),status:"declined",blocked:!0}),await vT(hr(Ye,"registration_requests",t.id)),t.userId&&!t.userId.startsWith("temp_"))try{const n=G2().currentUser;n&&n.uid===t.userId?(await vP(n),console.log("Deleted declined user from Firebase Authentication")):console.log("User marked as declined in Firestore. They will be blocked from accessing the system.")}catch(e){console.error("Error handling user authentication:",e)}}catch(e){throw console.error("Error declining registration request:",e),e}},Tj=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, ${F.colors.primary.main} 0%, ${F.colors.primary.dark} 100%);
  padding: 2rem 1rem;
`,Ij=U.div`
  background-color: ${F.colors.background.default};
  border-radius: ${F.borders.radius};
  box-shadow: ${F.shadows.large};
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,Sj=U.h1`
  color: ${F.colors.text.primary};
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,xj=U.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,la=U.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Aj=U.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,kf=U.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${t=>t.flex||1};
  min-width: ${t=>t.minWidth||"0"};
`,kr=U.label`
  font-size: 0.9rem;
  color: ${F.colors.text.secondary};
`,vi=U.div`
  display: flex;
  align-items: center;
  border: 1px solid ${F.colors.border};
  border-radius: ${F.borders.radius};
  padding: 0 1rem;
  background-color: ${F.colors.background.paper};
  position: relative;
  
  &:focus-within {
    border-color: ${F.colors.primary.main};
    box-shadow: 0 0 0 2px ${F.colors.primary.main}25;
  }
`,Yt=U.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: ${F.colors.primary.main};
`,As=U.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`,Rj=U.select`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  appearance: none;
  cursor: pointer;
  width: 100%;
  
  &:focus {
    outline: none;
  }
  
  option {
    background-color: ${F.colors.background.default};
    color: ${F.colors.text.primary};
  }
`,Cj=U.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${F.colors.primary.main};
  color: ${F.colors.primary.contrastText};
  border: none;
  border-radius: ${F.borders.radius};
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  transition: background-color ${F.transitions.default};
  margin-top: 1.5rem;
  
  &:hover {
    background-color: ${F.colors.primary.dark};
  }
  
  &:disabled {
    background-color: ${F.colors.primary.light};
    opacity: 0.7;
    cursor: not-allowed;
  }
`,wf=U.button`
  background: none;
  border: none;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: ${F.colors.primary.main};
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`,I_=U(SI)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,Pj=U(Qk)`
  display: inline-flex;
  align-items: center;
  color: ${F.colors.primary.main};
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  text-decoration: none;
  transition: color ${F.transitions.default};
  
  &:hover {
    color: ${F.colors.primary.dark};
  }
  
  ${Yt} {
    margin-right: 0.25rem;
  }
`,Rs=U.div`
  color: ${F.colors.status.error};
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,Lj=U.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: ${F.colors.text.secondary};
`,ua=U.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?F.colors.status.success:F.colors.text.secondary};
`;function bj(){const[t,e]=j.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=j.useState({}),[i,s]=j.useState(!1),[o,l]=j.useState(!1),[u,c]=j.useState(!1),[f,m]=j.useState(!1),g=No();j.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const E={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},x=y=>{const{name:I,value:P}=y.target;if(e(I==="middleInitial"?O=>({...O,[I]:P.toUpperCase()}):O=>({...O,[I]:P})),I==="email"&&P.includes("@")&&P.includes(".")){m(!0);const O=setTimeout(()=>{C(P)},800);return()=>clearTimeout(O)}},C=async y=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y)){m(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:y})}).then(O=>O.json())).registered&&r(O=>({...O,email:"This email is already registered. Please use a different email or login instead."}))}catch(I){console.error("Error checking email:",I)}finally{m(!1)}},L=()=>{const y={};return t.lastName.trim()||(y.lastName="Last name is required"),t.firstName.trim()||(y.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(y.email="Email is invalid"):y.email="Email is required",t.password?E.length?E.validChars?E.hasLetter?E.hasNumber||(y.password="Password must contain at least one number"):y.password="Password must contain at least one letter":y.password="Password contains invalid characters":y.password="Password must be at least 4 characters":y.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(y.confirmPassword="Passwords do not match"):y.confirmPassword="Please confirm your password",t.position||(y.position="Please select your position"),r(y),Object.keys(y).length===0},_=async y=>{var I,P,O,M;if(y.preventDefault(),!!L())try{s(!0);const w=!1;let k,S;try{S=await cP(mn,t.email,t.password),k=S.user.uid}catch(N){if(console.error("Auth error:",N),N.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),k=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(w&&(N.code==="auth/network-request-failed"||(I=N.message)!=null&&I.includes("network"))))throw N}const A=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(S!=null&&S.user)try{await fP(S.user,{displayName:A})}catch(N){console.warn("Could not update profile, continuing with registration:",N)}const b={userId:k,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:A,email:t.email,position:t.position,role:"user",status:"pending",userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await vj(b)}catch(N){if(console.error("Firestore error:",N),!w)throw N}X.success("Registration request submitted! An administrator will review your request."),w&&!S||g("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(w){if(console.error("Registration error:",w),w.code==="auth/email-already-in-use"||typeof w=="object"&&w.code==="auth/email-already-in-use"){const k=w.message||"Email is already registered. Please use a different email or login instead.";r(S=>({...S,email:k})),X.error(v.jsxs("div",{children:["Email already exists. ",v.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(P=document.getElementById("email"))==null||P.scrollIntoView({behavior:"smooth",block:"center"}),(O=document.getElementById("email"))==null||O.focus()}else w.code==="auth/network-request-failed"?X.error("Network error. Please check your connection and try again."):w.code==="auth/operation-not-allowed"?(r(k=>({...k,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(M=w.code)!=null&&M.includes("auth/")?X.error(`Authentication error: ${w.message||"Please try again later"}`):(console.error("Registration error details:",w),X.error("Registration failed. Please try again."))}finally{s(!1)}};return v.jsx(Tj,{children:v.jsxs(Ij,{children:[v.jsxs(Pj,{to:"/",children:[v.jsx(Yt,{children:v.jsx(EI,{size:16})}),"Back to Login"]}),v.jsx(Sj,{children:"Create Account"}),v.jsxs(xj,{onSubmit:_,children:[v.jsxs(la,{children:[v.jsx(kr,{children:"Full Name"}),v.jsxs(Aj,{children:[v.jsxs(kf,{flex:"2",minWidth:"150px",children:[v.jsx(kr,{htmlFor:"lastName",children:"Last Name"}),v.jsxs(vi,{children:[v.jsx(Yt,{children:v.jsx(Oi,{size:18})}),v.jsx(As,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:x,placeholder:"Last name"})]}),n.lastName&&v.jsx(Rs,{children:n.lastName})]}),v.jsxs(kf,{flex:"2",minWidth:"150px",children:[v.jsx(kr,{htmlFor:"firstName",children:"First Name"}),v.jsx(vi,{children:v.jsx(As,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:x,placeholder:"First name"})}),n.firstName&&v.jsx(Rs,{children:n.firstName})]}),v.jsxs(kf,{flex:"1",minWidth:"80px",children:[v.jsx(kr,{htmlFor:"middleInitial",children:"M.I."}),v.jsx(vi,{children:v.jsx(As,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:x,placeholder:"M.I.",maxLength:"1"})})]})]})]}),v.jsxs(la,{children:[v.jsx(kr,{htmlFor:"email",children:"Email"}),v.jsxs(vi,{children:[v.jsx(Yt,{children:v.jsx(nh,{size:18})}),v.jsx(As,{id:"email",name:"email",type:"email",value:t.email,onChange:x,placeholder:"Enter your email"}),f&&v.jsx(wf,{as:"span","aria-label":"Checking email",children:v.jsx(I_,{size:18})})]}),n.email&&v.jsx(Rs,{children:n.email})]}),v.jsxs(la,{children:[v.jsx(kr,{htmlFor:"position",children:"Position"}),v.jsxs(vi,{children:[v.jsx(Yt,{children:v.jsx(uy,{size:18})}),v.jsxs(Rj,{id:"position",name:"position",value:t.position,onChange:x,children:[v.jsx("option",{value:"",disabled:!0,children:"Select your position"}),v.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),v.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&v.jsx(Rs,{children:n.position})]}),v.jsxs(la,{children:[v.jsx(kr,{htmlFor:"password",children:"Password"}),v.jsxs(vi,{children:[v.jsx(Yt,{children:v.jsx(rd,{size:18})}),v.jsx(As,{id:"password",name:"password",type:o?"text":"password",value:t.password,onChange:x,placeholder:"Create a password"}),v.jsx(wf,{type:"button",onClick:()=>l(!o),"aria-label":o?"Hide password":"Show password",children:o?v.jsx(nd,{size:18}):v.jsx(td,{size:18})})]}),n.password&&v.jsx(Rs,{children:n.password}),v.jsxs(Lj,{children:[v.jsxs(ua,{met:E.length,children:[v.jsx(Yt,{children:v.jsx(Ti,{size:14,weight:E.length?"fill":"regular"})}),"At least 4 characters"]}),v.jsxs(ua,{met:E.validChars,children:[v.jsx(Yt,{children:v.jsx(Ti,{size:14,weight:E.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),v.jsxs(ua,{met:E.hasLetter,children:[v.jsx(Yt,{children:v.jsx(Ti,{size:14,weight:E.hasLetter?"fill":"regular"})}),"At least one letter"]}),v.jsxs(ua,{met:E.hasNumber,children:[v.jsx(Yt,{children:v.jsx(Ti,{size:14,weight:E.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),v.jsxs(la,{children:[v.jsx(kr,{htmlFor:"confirmPassword",children:"Confirm Password"}),v.jsxs(vi,{children:[v.jsx(Yt,{children:v.jsx(rd,{size:18})}),v.jsx(As,{id:"confirmPassword",name:"confirmPassword",type:u?"text":"password",value:t.confirmPassword,onChange:x,placeholder:"Confirm your password"}),v.jsx(wf,{type:"button",onClick:()=>c(!u),"aria-label":u?"Hide password":"Show password",children:u?v.jsx(nd,{size:18}):v.jsx(td,{size:18})})]}),n.confirmPassword&&v.jsx(Rs,{children:n.confirmPassword}),t.confirmPassword&&v.jsxs(ua,{met:E.match,children:[v.jsx(Yt,{children:v.jsx(Ti,{size:14,weight:E.match?"fill":"regular"})}),"Passwords match"]})]}),v.jsx(Cj,{type:"submit",disabled:i||f,children:i?v.jsxs(v.Fragment,{children:[v.jsx(I_,{size:18}),"Creating Account..."]}):f?"Checking email...":"Register"})]})]})})}const Nj=U.div`
  display: flex;
  min-height: 100vh;
`,Oj=U.div`
  width: 250px;
  background: linear-gradient(180deg, ${F.colors.primary.main} 0%, ${F.colors.primary.dark} 100%);
  color: ${F.colors.primary.contrastText};
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
`,Dj=U.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  color: ${F.colors.accent.main};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`,Cs=U.div`
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
`,AI=U.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: auto;
  padding: 0.75rem;
  background-color: ${F.colors.accent.main};
  color: ${F.colors.accent.contrastText};
  border: none;
  border-radius: ${F.borders.radius};
  cursor: pointer;
  font-weight: 500;
  transition: all ${F.transitions.default};
  
  &:hover {
    background-color: ${F.colors.accent.dark};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }
`,jj=U(AI)`
  background-color: #4caf50;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: #43a047;
  }
`,Vj=U(AI)`
  background-color: #f44336;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: #e53935;
  }
`,wr=U.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`,Mj=U.div`
  flex: 1;
  padding: 2rem;
  background-color: ${F.colors.background.default};
  overflow-y: auto;
`,Fj=U.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${F.colors.divider};
`,$j=U.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,Uj=U.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${F.colors.text.secondary};
  font-size: 0.9rem;
`,Wj=U.span`
  margin-right: 1rem;
  font-weight: 500;
`,Bj=U.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  color: ${F.colors.text.secondary};
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  font-size: 0.9rem;
  border-radius: ${F.borders.radius};
  transition: all ${F.transitions.default};
  
  &:hover {
    background-color: ${F.colors.primary.main}15;
    color: ${F.colors.primary.main};
  }
`,zj=({user:t,activeTab:e,setActiveTab:n,attendanceStatus:r,loading:i,handleTimeInOut:s,lastRecord:o,isSuperAdmin:l,children:u})=>{const c=No(),f=async()=>{try{await yP(mn),c("/login")}catch(m){console.error("Error signing out:",m),X.error("Failed to sign out")}};return v.jsxs(Nj,{children:[v.jsxs(Oj,{children:[v.jsx(Dj,{children:"Hyacinth"}),v.jsxs(Cs,{className:e==="dashboard"?"active":"",onClick:()=>n("dashboard"),children:[v.jsx(wr,{children:v.jsx(TI,{size:16})}),"Dashboard"]}),v.jsxs(Cs,{className:e==="attendance"?"active":"",onClick:()=>n("attendance"),children:[v.jsx(wr,{children:v.jsx(kI,{size:16})}),"Attendance"]}),v.jsxs(Cs,{className:e==="schedule"?"active":"",onClick:()=>n("schedule"),children:[v.jsx(wr,{children:v.jsx(ly,{size:16})}),"Schedule"]}),v.jsxs(Cs,{className:e==="profile"?"active":"",onClick:()=>n("profile"),children:[v.jsx(wr,{children:v.jsx(Oi,{size:16})}),"Profile"]}),l&&v.jsxs(Cs,{className:e==="registration_requests"?"active":"",onClick:()=>n("registration_requests"),children:[v.jsx(wr,{children:v.jsx(dy,{size:16})}),"Registration Requests"]}),v.jsxs("div",{style:{marginTop:"auto"},children:[v.jsxs("div",{style:{marginBottom:"1.5rem"},children:[v.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),v.jsxs(jj,{onClick:()=>s("In"),disabled:i||r==="In",children:[v.jsx(wr,{children:v.jsx(cy,{size:16})}),"Time In"]}),v.jsxs(Vj,{onClick:()=>s("Out"),disabled:i||r==="Out"||!r,children:[v.jsx(wr,{children:v.jsx(ic,{size:16})}),"Time Out"]}),r&&v.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Status: ",v.jsx("strong",{children:r==="In"?"Clocked In":"Clocked Out"})]})]}),v.jsxs(Cs,{onClick:f,children:[v.jsx(wr,{children:v.jsx(ic,{size:16})}),"Logout"]})]})]}),v.jsxs(Mj,{children:[v.jsxs(Fj,{children:[v.jsxs($j,{children:[e==="dashboard"&&"Dashboard",e==="attendance"&&"Attendance",e==="schedule"&&"Schedule",e==="profile"&&"Profile",e==="registration_requests"&&"Registration Requests"]}),v.jsxs(Uj,{children:[v.jsx(Wj,{children:t==null?void 0:t.displayName}),v.jsxs(Bj,{onClick:f,children:[v.jsx(ic,{size:16}),"Logout"]})]})]}),u]})]})},Yr=U.div`
  background-color: ${F.colors.background.default};
  border-radius: ${F.borders.radius};
  box-shadow: ${F.shadows.medium};
  overflow: hidden;
  margin-bottom: 1.5rem;
`,Xr=U.h2`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid ${F.colors.divider};
  color: ${F.colors.primary.main};
`,Jr=U.div`
  padding: 1.25rem;
`,Hj=U.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;U.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid ${F.colors.divider};
  }
  
  th {
    font-weight: 600;
    color: ${F.colors.text.secondary};
  }
  
  tr:hover td {
    background-color: ${F.colors.primary.main}05;
  }
`;const RI=U.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="In"?`${F.colors.status.success}20`:t.status==="Out"?`${F.colors.status.error}20`:t.status==="Late"?`${F.colors.status.warning}20`:F.colors.background.secondary};
  color: ${t=>t.status==="In"?F.colors.status.success:t.status==="Out"?F.colors.status.error:t.status==="Late"?F.colors.status.warning:F.colors.text.secondary};
`;U.button`
  background: linear-gradient(135deg, ${F.colors.primary.main} 0%, ${F.colors.primary.dark} 100%);
  color: ${F.colors.primary.contrastText};
  border: none;
  border-radius: ${F.borders.radius};
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all ${F.transitions.default};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${F.colors.primary.main}40;
  }
  
  &:disabled {
    background: ${F.colors.text.disabled};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;U.div`
  margin-bottom: 1.5rem;
`;U.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${F.colors.text.secondary};
`;U.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${F.colors.border};
  border-radius: ${F.borders.radius};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${F.colors.primary.main};
    box-shadow: 0 0 0 2px ${F.colors.primary.main}25;
  }
`;U.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${F.colors.border};
  border-radius: ${F.borders.radius};
  font-size: 1rem;
  background-color: ${F.colors.background.default};
  
  &:focus {
    outline: none;
    border-color: ${F.colors.primary.main};
    box-shadow: 0 0 0 2px ${F.colors.primary.main}25;
  }
`;U.div`
  color: #d32f2f;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;U.div`
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
`;const qj=({attendanceStatus:t,lastRecord:e})=>v.jsx(v.Fragment,{children:v.jsxs(Hj,{children:[v.jsxs(Yr,{children:[v.jsx(Xr,{children:"Today's Schedule"}),v.jsx(Jr,{children:v.jsx("p",{children:"No schedule for today"})})]}),v.jsxs(Yr,{children:[v.jsx(Xr,{children:"Attendance Status"}),v.jsx(Jr,{children:t?v.jsxs(v.Fragment,{children:[v.jsxs("p",{children:["Current Status:",v.jsx(RI,{status:t,children:t==="In"?"Clocked In":"Clocked Out"})]}),e&&v.jsxs("p",{children:["Last action: ",new Date(e.timestamp.toDate()).toLocaleString()]})]}):v.jsx("p",{children:"You haven't clocked in today"})})]}),v.jsxs(Yr,{children:[v.jsx(Xr,{children:"Recent Activity"}),v.jsx(Jr,{children:e?v.jsxs("p",{children:["Last ",e.type==="In"?"Time In":"Time Out",": ",new Date(e.timestamp.toDate()).toLocaleString()]}):v.jsx("p",{children:"No recent activity"})})]})]})}),Gj=U.table`
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
`,Kj=U.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,Qj=({user:t})=>{const[e,n]=j.useState([]),[r,i]=j.useState(!0);j.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{i(!0);const u=Cn(Ye,"attendance"),c=Zn(u,Dr("userId","==",t.uid),Gg("timestamp","desc")),f=await er(c),m=[];f.forEach(g=>{m.push({id:g.id,...g.data()})}),n(m)}catch(u){console.error("Error fetching attendance records:",u)}finally{i(!1)}})()},[t]);const s=l=>l?l.toDate().toLocaleDateString():"N/A",o=l=>l?l.toDate().toLocaleTimeString():"N/A";return v.jsxs(Yr,{children:[v.jsx(Xr,{children:"Attendance Records"}),v.jsx(Jr,{children:r?v.jsx("p",{children:"Loading attendance records..."}):e.length>0?v.jsxs(Gj,{children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{children:"Date"}),v.jsx("th",{children:"Time"}),v.jsx("th",{children:"Type"}),v.jsx("th",{children:"Status"}),v.jsx("th",{children:"Notes"})]})}),v.jsx("tbody",{children:e.map(l=>v.jsxs("tr",{children:[v.jsx("td",{children:s(l.timestamp)}),v.jsx("td",{children:o(l.timestamp)}),v.jsx("td",{children:l.type}),v.jsx("td",{children:v.jsx(RI,{status:l.type,children:l.type==="In"?"Clocked In":"Clocked Out"})}),v.jsx("td",{children:l.notes||"-"})]},l.id))})]}):v.jsx(Kj,{children:v.jsx("p",{children:"No attendance records found"})})})]})},Yj=U.table`
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
`,Xj=U.div`
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
`,Jj=U.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,Zj=({user:t})=>{const[e,n]=j.useState(null),[r,i]=j.useState(!0);j.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{i(!0);const c=hr(Ye,"users",t.uid),f=await Hp(c);if(f.exists()&&f.data().scheduleId){const m=f.data().scheduleId,g=hr(Ye,"schedules",m),E=await Hp(g);E.exists()&&n(E.data())}else{const m=Cn(Ye,"schedules"),g=Zn(m,Dr("isDefault","==",!0)),E=await er(g);E.empty||n(E.docs[0].data())}}catch(c){console.error("Error fetching schedule:",c)}finally{i(!1)}})()},[t]);const s=u=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][u],o=u=>{if(!u)return"N/A";try{const[c,f]=u.split(":"),m=new Date;return m.setHours(parseInt(c,10)),m.setMinutes(parseInt(f,10)),m.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}catch{return u}},l=()=>new Date().getDay();return v.jsxs(Yr,{children:[v.jsx(Xr,{children:"Your Schedule"}),v.jsx(Jr,{children:r?v.jsx("p",{children:"Loading schedule..."}):e?v.jsxs(v.Fragment,{children:[v.jsxs("p",{children:[v.jsx("strong",{children:"Schedule Name:"})," ",e.name||"Regular Schedule"]}),e.days&&Object.keys(e.days).length>0?Object.entries(e.days).map(([u,c])=>{const f=parseInt(u,10),m=f===l();return v.jsxs(Xj,{isToday:m,children:[v.jsxs("h3",{children:[s(f)," ",m&&"(Today)"]}),c.shifts&&c.shifts.length>0?v.jsxs(Yj,{children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{children:"Shift"}),v.jsx("th",{children:"Start Time"}),v.jsx("th",{children:"End Time"})]})}),v.jsx("tbody",{children:c.shifts.map((g,E)=>v.jsxs("tr",{children:[v.jsxs("td",{children:["Shift ",E+1]}),v.jsx("td",{children:o(g.startTime)}),v.jsx("td",{children:o(g.endTime)})]},E))})]}):v.jsx("p",{children:"No shifts scheduled"})]},u)}):v.jsx("p",{children:"No daily schedule defined"})]}):v.jsx(Jj,{children:v.jsx("p",{children:"No schedule assigned yet"})})})]})},e3=U.div`
  margin-bottom: 1.5rem;
`,Ps=U.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`,Ls=U.strong`
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
`,t3=U.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,bs=U.span`
  color: #333;
  word-break: break-word;
`,n3=({user:t,userData:e,loadingUserData:n})=>v.jsxs(Yr,{children:[v.jsx(Xr,{children:"User Profile"}),v.jsx(Jr,{children:n?v.jsx("p",{children:"Loading user data..."}):v.jsx(v.Fragment,{children:v.jsxs(e3,{children:[v.jsxs(t3,{children:[v.jsx(rm,{size:20,weight:"bold"}),"User Information"]}),v.jsxs(Ps,{children:[v.jsxs(Ls,{children:[v.jsx(nh,{size:18}),"Email:"]}),v.jsx(bs,{children:t==null?void 0:t.email})]}),v.jsxs(Ps,{children:[v.jsxs(Ls,{children:[v.jsx(Oi,{size:18}),"Name:"]}),v.jsx(bs,{children:t==null?void 0:t.displayName})]}),v.jsxs(Ps,{children:[v.jsxs(Ls,{children:[v.jsx(uy,{size:18}),"User ID:"]}),v.jsx(bs,{children:t==null?void 0:t.uid})]}),v.jsxs(Ps,{children:[v.jsxs(Ls,{children:[v.jsx(ay,{size:18}),"Position:"]}),v.jsx(bs,{children:(e==null?void 0:e.position)||"Not specified"})]}),v.jsxs(Ps,{children:[v.jsxs(Ls,{children:[v.jsx(rm,{size:18}),"Role:"]}),v.jsx(bs,{children:(e==null?void 0:e.role)||"Not specified"})]}),e&&v.jsxs(Ps,{children:[v.jsxs(Ls,{children:[v.jsx(ly,{size:18}),"Created At:"]}),v.jsx(bs,{children:(()=>{var r,i;try{return(r=e.createdAt)!=null&&r.seconds?new Date(e.createdAt.seconds*1e3).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):(i=e.createdAt)!=null&&i.toDate?e.createdAt.toDate().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):e.createdAt instanceof Date?e.createdAt.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):typeof e.createdAt=="string"?new Date(e.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):`${new Date().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})} (Current)`}catch(s){return console.error("Error formatting timestamp:",s,e.createdAt),"April 26, 2025, 04:27 AM"}})()})]})]})})})]}),r3=U.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,i3=U.div`
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
`,s3=U.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,o3=U.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,a3=U.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,l3=U.div`
  margin-bottom: 1.5rem;
`,Tf=U.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`,If=U.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`,Sf=U.span`
  color: #333;
`,u3=U.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,Ml=U.button`
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
`,c3=U(Ml)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`,d3=U(Ml)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`,h3=U(Ml)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`,f3=U.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`,p3=U.div`
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
`,m3=U.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,g3=U.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,y3=U.h3`
  margin: 0;
  font-size: 1.2rem;
`,v3=U.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,_3=U.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Cu=U.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Pu=U.label`
  font-weight: 500;
  color: #555;
`,xf=U.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,E3=U.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,k3=U.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,w3=U(Ml)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`,T3=U(Ml)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`,I3=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`,S3=t=>{if(!t)return"N/A";try{let e;if(t!=null&&t.seconds)e=new Date(t.seconds*1e3);else if(t!=null&&t.toDate)e=t.toDate();else if(t instanceof Date)e=t;else if(typeof t=="string")e=new Date(t);else return"Invalid date";return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch(e){return console.error("Error formatting timestamp:",e),"Invalid date"}},x3=()=>{const[t,e]=j.useState([]),[n,r]=j.useState(!0),[i,s]=j.useState(null),[o,l]=j.useState({name:"",email:"",position:"",role:""}),[u,c]=j.useState(!1);j.useEffect(()=>{f()},[]);const f=async()=>{try{r(!0);const _=await _j();e(_)}catch(_){console.error("Error fetching registration requests:",_),X.error("Failed to load registration requests")}finally{r(!1)}},m=async _=>{try{c(!0),await kj(_),X.success(`Registration for ${_.name||_.email} approved`),f()}catch(y){console.error("Error approving registration:",y),X.error("Failed to approve registration")}finally{c(!1)}},g=async _=>{try{c(!0),await wj(_),X.success(`Registration for ${_.name||_.email} declined`),X.warning("Note: The user may still exist in Firebase Authentication. They will be blocked from accessing the system, but the account still exists."),f()}catch(y){console.error("Error declining registration:",y),X.error("Failed to decline registration")}finally{c(!1)}},E=_=>{s(_),l({name:_.name||"",email:_.email||"",position:_.position||"",role:_.role||"user"})},x=()=>{s(null)},C=_=>{const{name:y,value:I}=_.target;l(P=>({...P,[y]:I}))},L=async _=>{_.preventDefault();try{c(!0),await Ej(i.id,{name:o.name,email:o.email,position:o.position,role:o.role}),X.success("Registration request updated"),s(null),f()}catch(y){console.error("Error updating registration request:",y),X.error("Failed to update registration request")}finally{c(!1)}};return n?v.jsxs(Yr,{children:[v.jsx(Xr,{children:"Registration Requests"}),v.jsx(Jr,{children:v.jsx(I3,{children:"Loading registration requests..."})})]}):v.jsxs(Yr,{children:[v.jsx(Xr,{children:"Registration Requests"}),v.jsxs(Jr,{children:[v.jsx(r3,{children:t.length===0?v.jsx(f3,{children:v.jsx("p",{children:"No pending registration requests"})}):t.map(_=>v.jsxs(i3,{children:[v.jsxs(s3,{children:[v.jsxs(o3,{children:[v.jsx(Oi,{size:18,weight:"bold"}),_.name||_.email]}),v.jsxs(a3,{children:[v.jsx(wI,{size:14}),S3(_.createdAt)]})]}),v.jsxs(l3,{children:[v.jsxs(Tf,{children:[v.jsxs(If,{children:[v.jsx(Oi,{size:16}),"Email:"]}),v.jsx(Sf,{children:_.email})]}),v.jsxs(Tf,{children:[v.jsxs(If,{children:[v.jsx(ay,{size:16}),"Position:"]}),v.jsx(Sf,{children:_.position||"Not specified"})]}),v.jsxs(Tf,{children:[v.jsxs(If,{children:[v.jsx(Oi,{size:16}),"Role:"]}),v.jsx(Sf,{children:_.role||"user"})]})]}),v.jsxs(u3,{children:[v.jsxs(h3,{onClick:()=>E(_),disabled:u,children:[v.jsx(II,{size:16}),"Edit"]}),v.jsxs(c3,{onClick:()=>m(_),disabled:u,children:[v.jsx(Ti,{size:16}),"Accept"]}),v.jsxs(d3,{onClick:()=>g(_),disabled:u,children:[v.jsx(xI,{size:16}),"Decline"]})]})]},_.id))}),i&&v.jsx(p3,{children:v.jsxs(m3,{children:[v.jsxs(g3,{children:[v.jsx(y3,{children:"Edit Registration Request"}),v.jsx(v3,{onClick:x,children:"×"})]}),v.jsxs(_3,{onSubmit:L,children:[v.jsxs(Cu,{children:[v.jsx(Pu,{htmlFor:"name",children:"Name"}),v.jsx(xf,{type:"text",id:"name",name:"name",value:o.name,onChange:C,placeholder:"Enter name"})]}),v.jsxs(Cu,{children:[v.jsx(Pu,{htmlFor:"email",children:"Email"}),v.jsx(xf,{type:"email",id:"email",name:"email",value:o.email,onChange:C,placeholder:"Enter email",required:!0})]}),v.jsxs(Cu,{children:[v.jsx(Pu,{htmlFor:"position",children:"Position"}),v.jsx(xf,{type:"text",id:"position",name:"position",value:o.position,onChange:C,placeholder:"Enter position"})]}),v.jsxs(Cu,{children:[v.jsx(Pu,{htmlFor:"role",children:"Role"}),v.jsxs(E3,{id:"role",name:"role",value:o.role,onChange:C,children:[v.jsx("option",{value:"user",children:"User"}),v.jsx("option",{value:"admin",children:"Admin"}),v.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),v.jsxs(k3,{children:[v.jsx(T3,{type:"button",onClick:x,children:"Cancel"}),v.jsx(w3,{type:"submit",disabled:u,children:"Save Changes"})]})]})]})})]})]})};function A3(){const[t,e]=j.useState(null),[n,r]=j.useState("dashboard"),[i,s]=j.useState(null),[o,l]=j.useState(null),[u,c]=j.useState(!1),[f,m]=j.useState(null),[g,E]=j.useState(!1),x=No();j.useEffect(()=>{const y=mn.currentUser;if(y){const I={uid:y.uid,email:y.email,displayName:y.displayName||y.email.split("@")[0]};e(I),C(y.uid)}},[]);const C=async y=>{if(y)try{E(!0);try{const O=Zn(Cn(Ye,"declined_registrations"),Dr("userId","==",y));if(!(await er(O)).empty){X.error("Your registration request has been declined. Please contact an administrator."),await mn.signOut(),x("/login");return}}catch(O){console.error("Error checking declined status:",O)}try{const O=Zn(Cn(Ye,"registration_requests"),Dr("userId","==",y));if(!(await er(O)).empty){X.info("Your registration request is pending approval. You will be notified when approved."),await mn.signOut(),x("/login");return}}catch(O){console.error("Error checking pending status:",O)}const I=hr(Ye,"users",y),P=await Hp(I);if(P.exists()){const O=P.data();m(O)}else console.log("No user data found in Firestore"),X.error("Your account is not properly set up. Please contact an administrator."),await mn.signOut(),x("/login")}catch(I){console.error("Error fetching user data:",I),X.error("Error loading user data. Please try again later.")}finally{E(!1)}};j.useEffect(()=>{t!=null&&t.uid&&L()},[t]);const L=async()=>{try{const y=Cn(Ye,"attendance");try{const I=Zn(y,Dr("userId","==",t.uid),Gg("timestamp","desc"),Rb(1)),P=await er(I);if(P.empty)s(null),l(null);else{const O=P.docs[0].data();l(O),s(O.type)}}catch(I){if(I.message&&I.message.includes("index is currently building")){console.log("Index is still building, using fallback method");const P=Zn(y,Dr("userId","==",t.uid)),O=await er(P);if(O.empty)s(null),l(null);else{let M=null,w=new Date(0);O.forEach(k=>{var b;const S=k.data(),A=((b=S.timestamp)==null?void 0:b.toDate())||new Date(0);A>w&&(w=A,M=S)}),M?(l(M),s(M.type)):(s(null),l(null))}X.info("System is updating. Some features may be temporarily limited.",{autoClose:5e3,hideProgressBar:!1})}else throw I}}catch(y){console.error("Error fetching attendance status:",y),y.message&&y.message.includes("index")?X.warning("System is updating attendance records. Please try again in a few minutes."):X.error("Unable to fetch your attendance status. Please refresh the page.")}},_=async y=>{if(t){c(!0);try{const I=Be.now(),P=y==="In"?"On Time":"",O={userId:t.uid,email:t.email,name:t.displayName,type:y,status:P,timestamp:I,notes:""};await _T(Cn(Ye,"attendance"),O),X.success(`Time ${y} recorded successfully!`),s(y),l(O)}catch(I){console.error(`Error recording time ${y}:`,I),X.error(`Failed to record time ${y}`)}finally{c(!1)}}};return v.jsxs(zj,{user:t,activeTab:n,setActiveTab:r,attendanceStatus:i,loading:u,handleTimeInOut:_,lastRecord:o,isSuperAdmin:(f==null?void 0:f.role)==="super_admin",children:[n==="dashboard"&&v.jsx(qj,{attendanceStatus:i,lastRecord:o}),n==="attendance"&&v.jsx(Qj,{user:t}),n==="schedule"&&v.jsx(Zj,{user:t}),n==="profile"&&v.jsx(n3,{user:t,userData:f,loadingUserData:g}),n==="registration_requests"&&(f==null?void 0:f.role)==="super_admin"&&v.jsx(x3,{})]})}const R3=PD`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${F.typography.fontFamily};
  }

  body {
    background-color: ${F.colors.background.default};
    color: ${F.colors.text.primary};
    font-size: ${F.typography.fontSize}px;
    line-height: 1.5;
  }

  a {
    color: ${F.colors.primary.main};
    text-decoration: none;
    transition: color ${F.transitions.default};

    &:hover {
      color: ${F.colors.primary.dark};
    }
  }

  button {
    cursor: pointer;
    font-family: ${F.typography.fontFamily};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
    font-weight: ${F.typography.fontWeightBold};
    line-height: 1.2;
  }

  p {
    margin-bottom: 1rem;
  }

  /* Toast notification styling */
  .Toastify__toast {
    border-radius: ${F.borders.radius};
  }

  .Toastify__toast--success {
    background-color: ${F.colors.status.success};
  }

  .Toastify__toast--error {
    background-color: ${F.colors.status.error};
  }

  .Toastify__toast--warning {
    background-color: ${F.colors.status.warning};
  }

  .Toastify__toast--info {
    background-color: ${F.colors.status.info};
  }
`,C3=({children:t})=>{const[e,n]=j.useState(!0),[r,i]=j.useState(null);return j.useEffect(()=>{const s=gP(mn,o=>{i(o),n(!1)});return()=>s()},[]),e?v.jsx(P3,{children:"Loading..."}):r?t:v.jsx(Kk,{to:"/",replace:!0})},P3=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: ${F.colors.primary.main};
  background-color: ${F.colors.background.paper};
`;function L3(){return v.jsxs(v.Fragment,{children:[v.jsx(R3,{}),v.jsx(PA,{children:v.jsxs(TA,{children:[v.jsx(pa,{path:"/",element:v.jsx(yj,{})}),v.jsx(pa,{path:"/register",element:v.jsx(bj,{})}),v.jsx(pa,{path:"/dashboard",element:v.jsx(C3,{children:v.jsx(A3,{})})}),v.jsx(pa,{path:"*",element:v.jsx(Kk,{to:"/",replace:!0})})]})}),v.jsx(nm,{position:"top-right",autoClose:3e3,theme:"colored",toastStyle:{backgroundColor:F.colors.primary.main,color:F.colors.primary.contrastText}})]})}Vk(document.getElementById("root")).render(v.jsx(j.StrictMode,{children:v.jsx(L3,{})}));
