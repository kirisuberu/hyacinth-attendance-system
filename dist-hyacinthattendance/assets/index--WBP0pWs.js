function MS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function lu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var B_={exports:{}},sh={},H_={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uu=Symbol.for("react.element"),NS=Symbol.for("react.portal"),VS=Symbol.for("react.fragment"),FS=Symbol.for("react.strict_mode"),WS=Symbol.for("react.profiler"),US=Symbol.for("react.provider"),$S=Symbol.for("react.context"),zS=Symbol.for("react.forward_ref"),BS=Symbol.for("react.suspense"),HS=Symbol.for("react.memo"),qS=Symbol.for("react.lazy"),ov=Symbol.iterator;function YS(t){return t===null||typeof t!="object"?null:(t=ov&&t[ov]||t["@@iterator"],typeof t=="function"?t:null)}var q_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y_=Object.assign,G_={};function da(t,e,n){this.props=t,this.context=e,this.refs=G_,this.updater=n||q_}da.prototype.isReactComponent={};da.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};da.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function K_(){}K_.prototype=da.prototype;function Yg(t,e,n){this.props=t,this.context=e,this.refs=G_,this.updater=n||q_}var Gg=Yg.prototype=new K_;Gg.constructor=Yg;Y_(Gg,da.prototype);Gg.isPureReactComponent=!0;var sv=Array.isArray,Q_=Object.prototype.hasOwnProperty,Kg={current:null},Z_={key:!0,ref:!0,__self:!0,__source:!0};function X_(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Q_.call(e,r)&&!Z_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:uu,type:t,key:o,ref:s,props:i,_owner:Kg.current}}function GS(t,e){return{$$typeof:uu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qg(t){return typeof t=="object"&&t!==null&&t.$$typeof===uu}function KS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var av=/\/+/g;function Cf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?KS(""+t.key):e.toString(36)}function Lc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case uu:case NS:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Cf(s,0):r,sv(i)?(n="",t!=null&&(n=t.replace(av,"$&/")+"/"),Lc(i,e,n,"",function(d){return d})):i!=null&&(Qg(i)&&(i=GS(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(av,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",sv(t))for(var a=0;a<t.length;a++){o=t[a];var u=r+Cf(o,a);s+=Lc(o,e,n,u,i)}else if(u=YS(t),typeof u=="function")for(t=u.call(t),a=0;!(o=t.next()).done;)o=o.value,u=r+Cf(o,a++),s+=Lc(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Yu(t,e,n){if(t==null)return t;var r=[],i=0;return Lc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function QS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},Ac={transition:null},ZS={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Ac,ReactCurrentOwner:Kg};function J_(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:Yu,forEach:function(t,e,n){Yu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yu(t,function(){e++}),e},toArray:function(t){return Yu(t,function(e){return e})||[]},only:function(t){if(!Qg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=da;he.Fragment=VS;he.Profiler=WS;he.PureComponent=Yg;he.StrictMode=FS;he.Suspense=BS;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;he.act=J_;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Y_({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Kg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Q_.call(e,u)&&!Z_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:uu,type:t.type,key:i,ref:o,props:r,_owner:s}};he.createContext=function(t){return t={$$typeof:$S,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:US,_context:t},t.Consumer=t};he.createElement=X_;he.createFactory=function(t){var e=X_.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:zS,render:t}};he.isValidElement=Qg;he.lazy=function(t){return{$$typeof:qS,_payload:{_status:-1,_result:t},_init:QS}};he.memo=function(t,e){return{$$typeof:HS,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=Ac.transition;Ac.transition={};try{t()}finally{Ac.transition=e}};he.unstable_act=J_;he.useCallback=function(t,e){return $t.current.useCallback(t,e)};he.useContext=function(t){return $t.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};he.useEffect=function(t,e){return $t.current.useEffect(t,e)};he.useId=function(){return $t.current.useId()};he.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return $t.current.useMemo(t,e)};he.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};he.useRef=function(t){return $t.current.useRef(t)};he.useState=function(t){return $t.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return $t.current.useTransition()};he.version="18.3.1";H_.exports=he;var M=H_.exports;const c=lu(M),XS=MS({__proto__:null,default:c},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JS=M,e6=Symbol.for("react.element"),t6=Symbol.for("react.fragment"),n6=Object.prototype.hasOwnProperty,r6=JS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i6={key:!0,ref:!0,__self:!0,__source:!0};function eE(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)n6.call(e,r)&&!i6.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:e6,type:t,key:o,ref:s,props:i,_owner:r6.current}}sh.Fragment=t6;sh.jsx=eE;sh.jsxs=eE;B_.exports=sh;var h=B_.exports,tE={exports:{}},fn={},nE={exports:{}},rE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var X=z.length;z.push(G);e:for(;0<X;){var le=X-1>>>1,ee=z[le];if(0<i(ee,G))z[le]=G,z[X]=ee,X=le;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],X=z.pop();if(X!==G){z[0]=X;e:for(var le=0,ee=z.length,ye=ee>>>1;le<ye;){var Ye=2*(le+1)-1,Ge=z[Ye],rt=Ye+1,Be=z[rt];if(0>i(Ge,X))rt<ee&&0>i(Be,Ge)?(z[le]=Be,z[rt]=X,le=rt):(z[le]=Ge,z[Ye]=X,le=Ye);else if(rt<ee&&0>i(Be,X))z[le]=Be,z[rt]=X,le=rt;else break e}}return G}function i(z,G){var X=z.sortIndex-G.sortIndex;return X!==0?X:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var u=[],d=[],f=1,m=null,E=3,k=!1,I=!1,L=!1,T=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(z){for(var G=n(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=z)r(d),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(d)}}function w(z){if(L=!1,_(z),!I)if(n(u)!==null)I=!0,ue(R);else{var G=n(d);G!==null&&ce(w,G.startTime-z)}}function R(z,G){I=!1,L&&(L=!1,y(S),S=-1),k=!0;var X=E;try{for(_(G),m=n(u);m!==null&&(!(m.expirationTime>G)||z&&!j());){var le=m.callback;if(typeof le=="function"){m.callback=null,E=m.priorityLevel;var ee=le(m.expirationTime<=G);G=t.unstable_now(),typeof ee=="function"?m.callback=ee:m===n(u)&&r(u),_(G)}else r(u);m=n(u)}if(m!==null)var ye=!0;else{var Ye=n(d);Ye!==null&&ce(w,Ye.startTime-G),ye=!1}return ye}finally{m=null,E=X,k=!1}}var O=!1,x=null,S=-1,A=5,b=-1;function j(){return!(t.unstable_now()-b<A)}function D(){if(x!==null){var z=t.unstable_now();b=z;var G=!0;try{G=x(!0,z)}finally{G?P():(O=!1,x=null)}}else O=!1}var P;if(typeof g=="function")P=function(){g(D)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,re=q.port2;q.port1.onmessage=D,P=function(){re.postMessage(null)}}else P=function(){T(D,0)};function ue(z){x=z,O||(O=!0,P())}function ce(z,G){S=T(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){I||k||(I=!0,ue(R))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return E},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(E){case 1:case 2:case 3:var G=3;break;default:G=E}var X=E;E=G;try{return z()}finally{E=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=E;E=z;try{return G()}finally{E=X}},t.unstable_scheduleCallback=function(z,G,X){var le=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?le+X:le):X=le,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=X+ee,z={id:f++,callback:G,priorityLevel:z,startTime:X,expirationTime:ee,sortIndex:-1},X>le?(z.sortIndex=X,e(d,z),n(u)===null&&z===n(d)&&(L?(y(S),S=-1):L=!0,ce(w,X-le))):(z.sortIndex=ee,e(u,z),I||k||(I=!0,ue(R))),z},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(z){var G=E;return function(){var X=E;E=G;try{return z.apply(this,arguments)}finally{E=X}}}})(rE);nE.exports=rE;var o6=nE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s6=M,hn=o6;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iE=new Set,Ll={};function yo(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(Ll[t]=e,t=0;t<e.length;t++)iE.add(e[t])}var Ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Op=Object.prototype.hasOwnProperty,a6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lv={},uv={};function l6(t){return Op.call(uv,t)?!0:Op.call(lv,t)?!1:a6.test(t)?uv[t]=!0:(lv[t]=!0,!1)}function u6(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function c6(t,e,n,r){if(e===null||typeof e>"u"||u6(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function zt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_t[t]=new zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_t[e]=new zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_t[t]=new zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_t[t]=new zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_t[t]=new zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_t[t]=new zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_t[t]=new zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_t[t]=new zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_t[t]=new zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zg=/[\-:]([a-z])/g;function Xg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zg,Xg);_t[e]=new zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zg,Xg);_t[e]=new zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zg,Xg);_t[e]=new zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_t[t]=new zt(t,1,!1,t.toLowerCase(),null,!1,!1)});_t.xlinkHref=new zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_t[t]=new zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jg(t,e,n,r){var i=_t.hasOwnProperty(e)?_t[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(c6(e,n,i,r)&&(n=null),r||i===null?l6(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jr=s6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gu=Symbol.for("react.element"),_s=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),e0=Symbol.for("react.strict_mode"),Mp=Symbol.for("react.profiler"),oE=Symbol.for("react.provider"),sE=Symbol.for("react.context"),t0=Symbol.for("react.forward_ref"),Np=Symbol.for("react.suspense"),Vp=Symbol.for("react.suspense_list"),n0=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),aE=Symbol.for("react.offscreen"),cv=Symbol.iterator;function Na(t){return t===null||typeof t!="object"?null:(t=cv&&t[cv]||t["@@iterator"],typeof t=="function"?t:null)}var We=Object.assign,Lf;function Qa(t){if(Lf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lf=e&&e[1]||""}return`
`+Lf+t}var Af=!1;function Pf(t,e){if(!t||Af)return"";Af=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=a);break}}}finally{Af=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qa(t):""}function d6(t){switch(t.tag){case 5:return Qa(t.type);case 16:return Qa("Lazy");case 13:return Qa("Suspense");case 19:return Qa("SuspenseList");case 0:case 2:case 15:return t=Pf(t.type,!1),t;case 11:return t=Pf(t.type.render,!1),t;case 1:return t=Pf(t.type,!0),t;default:return""}}function Fp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case _s:return"Portal";case Mp:return"Profiler";case e0:return"StrictMode";case Np:return"Suspense";case Vp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sE:return(t.displayName||"Context")+".Consumer";case oE:return(t._context.displayName||"Context")+".Provider";case t0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case n0:return e=t.displayName||null,e!==null?e:Fp(t.type)||"Memo";case Hr:e=t._payload,t=t._init;try{return Fp(t(e))}catch{}}return null}function h6(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fp(e);case 8:return e===e0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function f6(t){var e=lE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ku(t){t._valueTracker||(t._valueTracker=f6(t))}function uE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=lE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function nd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wp(t,e){var n=e.checked;return We({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cE(t,e){e=e.checked,e!=null&&Jg(t,"checked",e,!1)}function Up(t,e){cE(t,e);var n=vi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$p(t,e.type,n):e.hasOwnProperty("defaultValue")&&$p(t,e.type,vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $p(t,e,n){(e!=="number"||nd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Za=Array.isArray;function Os(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return We({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Za(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vi(n)}}function dE(t,e){var n=vi(e.value),r=vi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qu,fE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qu=Qu||document.createElement("div"),Qu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Al(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ul={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p6=["Webkit","ms","Moz","O"];Object.keys(ul).forEach(function(t){p6.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ul[e]=ul[t]})});function pE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ul.hasOwnProperty(t)&&ul[t]?(""+e).trim():e+"px"}function mE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var m6=We({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hp(t,e){if(e){if(m6[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function qp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yp=null;function r0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gp=null,Ms=null,Ns=null;function mv(t){if(t=hu(t)){if(typeof Gp!="function")throw Error(B(280));var e=t.stateNode;e&&(e=dh(e),Gp(t.stateNode,t.type,e))}}function gE(t){Ms?Ns?Ns.push(t):Ns=[t]:Ms=t}function yE(){if(Ms){var t=Ms,e=Ns;if(Ns=Ms=null,mv(t),e)for(t=0;t<e.length;t++)mv(e[t])}}function vE(t,e){return t(e)}function kE(){}var Rf=!1;function _E(t,e,n){if(Rf)return t(e,n);Rf=!0;try{return vE(t,e,n)}finally{Rf=!1,(Ms!==null||Ns!==null)&&(kE(),yE())}}function Pl(t,e){var n=t.stateNode;if(n===null)return null;var r=dh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Kp=!1;if(Ir)try{var Va={};Object.defineProperty(Va,"passive",{get:function(){Kp=!0}}),window.addEventListener("test",Va,Va),window.removeEventListener("test",Va,Va)}catch{Kp=!1}function g6(t,e,n,r,i,o,s,a,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var cl=!1,rd=null,id=!1,Qp=null,y6={onError:function(t){cl=!0,rd=t}};function v6(t,e,n,r,i,o,s,a,u){cl=!1,rd=null,g6.apply(y6,arguments)}function k6(t,e,n,r,i,o,s,a,u){if(v6.apply(this,arguments),cl){if(cl){var d=rd;cl=!1,rd=null}else throw Error(B(198));id||(id=!0,Qp=d)}}function vo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function EE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gv(t){if(vo(t)!==t)throw Error(B(188))}function _6(t){var e=t.alternate;if(!e){if(e=vo(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return gv(i),t;if(o===r)return gv(i),e;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function wE(t){return t=_6(t),t!==null?xE(t):null}function xE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xE(t);if(e!==null)return e;t=t.sibling}return null}var TE=hn.unstable_scheduleCallback,yv=hn.unstable_cancelCallback,E6=hn.unstable_shouldYield,w6=hn.unstable_requestPaint,Qe=hn.unstable_now,x6=hn.unstable_getCurrentPriorityLevel,i0=hn.unstable_ImmediatePriority,IE=hn.unstable_UserBlockingPriority,od=hn.unstable_NormalPriority,T6=hn.unstable_LowPriority,SE=hn.unstable_IdlePriority,ah=null,Xn=null;function I6(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(ah,t,void 0,(t.current.flags&128)===128)}catch{}}var Nn=Math.clz32?Math.clz32:L6,S6=Math.log,C6=Math.LN2;function L6(t){return t>>>=0,t===0?32:31-(S6(t)/C6|0)|0}var Zu=64,Xu=4194304;function Xa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Xa(a):(o&=s,o!==0&&(r=Xa(o)))}else s=n&~i,s!==0?r=Xa(s):o!==0&&(r=Xa(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nn(e),i=1<<n,r|=t[n],e&=~i;return r}function A6(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P6(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Nn(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=A6(a,e)):u<=e&&(t.expiredLanes|=a),o&=~a}}function Zp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function CE(){var t=Zu;return Zu<<=1,!(Zu&4194240)&&(Zu=64),t}function bf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function cu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nn(e),t[e]=n}function R6(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function o0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ce=0;function LE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var AE,s0,PE,RE,bE,Xp=!1,Ju=[],ri=null,ii=null,oi=null,Rl=new Map,bl=new Map,Yr=[],b6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vv(t,e){switch(t){case"focusin":case"focusout":ri=null;break;case"dragenter":case"dragleave":ii=null;break;case"mouseover":case"mouseout":oi=null;break;case"pointerover":case"pointerout":Rl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bl.delete(e.pointerId)}}function Fa(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=hu(e),e!==null&&s0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function j6(t,e,n,r,i){switch(e){case"focusin":return ri=Fa(ri,t,e,n,r,i),!0;case"dragenter":return ii=Fa(ii,t,e,n,r,i),!0;case"mouseover":return oi=Fa(oi,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Rl.set(o,Fa(Rl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,bl.set(o,Fa(bl.get(o)||null,t,e,n,r,i)),!0}return!1}function jE(t){var e=Hi(t.target);if(e!==null){var n=vo(e);if(n!==null){if(e=n.tag,e===13){if(e=EE(n),e!==null){t.blockedOn=e,bE(t.priority,function(){PE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yp=r,n.target.dispatchEvent(r),Yp=null}else return e=hu(n),e!==null&&s0(e),t.blockedOn=n,!1;e.shift()}return!0}function kv(t,e,n){Pc(t)&&n.delete(e)}function D6(){Xp=!1,ri!==null&&Pc(ri)&&(ri=null),ii!==null&&Pc(ii)&&(ii=null),oi!==null&&Pc(oi)&&(oi=null),Rl.forEach(kv),bl.forEach(kv)}function Wa(t,e){t.blockedOn===e&&(t.blockedOn=null,Xp||(Xp=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,D6)))}function jl(t){function e(i){return Wa(i,t)}if(0<Ju.length){Wa(Ju[0],t);for(var n=1;n<Ju.length;n++){var r=Ju[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ri!==null&&Wa(ri,t),ii!==null&&Wa(ii,t),oi!==null&&Wa(oi,t),Rl.forEach(e),bl.forEach(e),n=0;n<Yr.length;n++)r=Yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yr.length&&(n=Yr[0],n.blockedOn===null);)jE(n),n.blockedOn===null&&Yr.shift()}var Vs=jr.ReactCurrentBatchConfig,ad=!0;function O6(t,e,n,r){var i=Ce,o=Vs.transition;Vs.transition=null;try{Ce=1,a0(t,e,n,r)}finally{Ce=i,Vs.transition=o}}function M6(t,e,n,r){var i=Ce,o=Vs.transition;Vs.transition=null;try{Ce=4,a0(t,e,n,r)}finally{Ce=i,Vs.transition=o}}function a0(t,e,n,r){if(ad){var i=Jp(t,e,n,r);if(i===null)$f(t,e,r,ld,n),vv(t,r);else if(j6(i,t,e,n,r))r.stopPropagation();else if(vv(t,r),e&4&&-1<b6.indexOf(t)){for(;i!==null;){var o=hu(i);if(o!==null&&AE(o),o=Jp(t,e,n,r),o===null&&$f(t,e,r,ld,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else $f(t,e,r,null,n)}}var ld=null;function Jp(t,e,n,r){if(ld=null,t=r0(r),t=Hi(t),t!==null)if(e=vo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=EE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ld=t,null}function DE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x6()){case i0:return 1;case IE:return 4;case od:case T6:return 16;case SE:return 536870912;default:return 16}default:return 16}}var Xr=null,l0=null,Rc=null;function OE(){if(Rc)return Rc;var t,e=l0,n=e.length,r,i="value"in Xr?Xr.value:Xr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Rc=i.slice(t,1<r?1-r:void 0)}function bc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ec(){return!0}function _v(){return!1}function pn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ec:_v,this.isPropagationStopped=_v,this}return We(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ec)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ec)},persist:function(){},isPersistent:ec}),e}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},u0=pn(ha),du=We({},ha,{view:0,detail:0}),N6=pn(du),jf,Df,Ua,lh=We({},du,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:c0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ua&&(Ua&&t.type==="mousemove"?(jf=t.screenX-Ua.screenX,Df=t.screenY-Ua.screenY):Df=jf=0,Ua=t),jf)},movementY:function(t){return"movementY"in t?t.movementY:Df}}),Ev=pn(lh),V6=We({},lh,{dataTransfer:0}),F6=pn(V6),W6=We({},du,{relatedTarget:0}),Of=pn(W6),U6=We({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),$6=pn(U6),z6=We({},ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),B6=pn(z6),H6=We({},ha,{data:0}),wv=pn(H6),q6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K6(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=G6[t])?!!e[t]:!1}function c0(){return K6}var Q6=We({},du,{key:function(t){if(t.key){var e=q6[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Y6[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:c0,charCode:function(t){return t.type==="keypress"?bc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Z6=pn(Q6),X6=We({},lh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xv=pn(X6),J6=We({},du,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:c0}),e4=pn(J6),t4=We({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),n4=pn(t4),r4=We({},lh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),i4=pn(r4),o4=[9,13,27,32],d0=Ir&&"CompositionEvent"in window,dl=null;Ir&&"documentMode"in document&&(dl=document.documentMode);var s4=Ir&&"TextEvent"in window&&!dl,ME=Ir&&(!d0||dl&&8<dl&&11>=dl),Tv=" ",Iv=!1;function NE(t,e){switch(t){case"keyup":return o4.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function VE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function a4(t,e){switch(t){case"compositionend":return VE(e);case"keypress":return e.which!==32?null:(Iv=!0,Tv);case"textInput":return t=e.data,t===Tv&&Iv?null:t;default:return null}}function l4(t,e){if(ws)return t==="compositionend"||!d0&&NE(t,e)?(t=OE(),Rc=l0=Xr=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ME&&e.locale!=="ko"?null:e.data;default:return null}}var u4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!u4[t.type]:e==="textarea"}function FE(t,e,n,r){gE(r),e=ud(e,"onChange"),0<e.length&&(n=new u0("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var hl=null,Dl=null;function c4(t){QE(t,0)}function uh(t){var e=Is(t);if(uE(e))return t}function d4(t,e){if(t==="change")return e}var WE=!1;if(Ir){var Mf;if(Ir){var Nf="oninput"in document;if(!Nf){var Cv=document.createElement("div");Cv.setAttribute("oninput","return;"),Nf=typeof Cv.oninput=="function"}Mf=Nf}else Mf=!1;WE=Mf&&(!document.documentMode||9<document.documentMode)}function Lv(){hl&&(hl.detachEvent("onpropertychange",UE),Dl=hl=null)}function UE(t){if(t.propertyName==="value"&&uh(Dl)){var e=[];FE(e,Dl,t,r0(t)),_E(c4,e)}}function h4(t,e,n){t==="focusin"?(Lv(),hl=e,Dl=n,hl.attachEvent("onpropertychange",UE)):t==="focusout"&&Lv()}function f4(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uh(Dl)}function p4(t,e){if(t==="click")return uh(e)}function m4(t,e){if(t==="input"||t==="change")return uh(e)}function g4(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:g4;function Ol(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Op.call(e,i)||!Wn(t[i],e[i]))return!1}return!0}function Av(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pv(t,e){var n=Av(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Av(n)}}function $E(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$E(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zE(){for(var t=window,e=nd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nd(t.document)}return e}function h0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function y4(t){var e=zE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$E(n.ownerDocument.documentElement,n)){if(r!==null&&h0(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Pv(n,o);var s=Pv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var v4=Ir&&"documentMode"in document&&11>=document.documentMode,xs=null,em=null,fl=null,tm=!1;function Rv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tm||xs==null||xs!==nd(r)||(r=xs,"selectionStart"in r&&h0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fl&&Ol(fl,r)||(fl=r,r=ud(em,"onSelect"),0<r.length&&(e=new u0("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xs)))}function tc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:tc("Animation","AnimationEnd"),animationiteration:tc("Animation","AnimationIteration"),animationstart:tc("Animation","AnimationStart"),transitionend:tc("Transition","TransitionEnd")},Vf={},BE={};Ir&&(BE=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function ch(t){if(Vf[t])return Vf[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in BE)return Vf[t]=e[n];return t}var HE=ch("animationend"),qE=ch("animationiteration"),YE=ch("animationstart"),GE=ch("transitionend"),KE=new Map,bv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ti(t,e){KE.set(t,e),yo(e,[t])}for(var Ff=0;Ff<bv.length;Ff++){var Wf=bv[Ff],k4=Wf.toLowerCase(),_4=Wf[0].toUpperCase()+Wf.slice(1);Ti(k4,"on"+_4)}Ti(HE,"onAnimationEnd");Ti(qE,"onAnimationIteration");Ti(YE,"onAnimationStart");Ti("dblclick","onDoubleClick");Ti("focusin","onFocus");Ti("focusout","onBlur");Ti(GE,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);yo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yo("onBeforeInput",["compositionend","keypress","textInput","paste"]);yo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E4=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ja));function jv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,k6(r,e,void 0,t),t.currentTarget=null}function QE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;jv(i,a,d),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,d=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;jv(i,a,d),o=u}}}if(id)throw t=Qp,id=!1,Qp=null,t}function je(t,e){var n=e[sm];n===void 0&&(n=e[sm]=new Set);var r=t+"__bubble";n.has(r)||(ZE(e,t,2,!1),n.add(r))}function Uf(t,e,n){var r=0;e&&(r|=4),ZE(n,t,r,e)}var nc="_reactListening"+Math.random().toString(36).slice(2);function Ml(t){if(!t[nc]){t[nc]=!0,iE.forEach(function(n){n!=="selectionchange"&&(E4.has(n)||Uf(n,!1,t),Uf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nc]||(e[nc]=!0,Uf("selectionchange",!1,e))}}function ZE(t,e,n,r){switch(DE(e)){case 1:var i=O6;break;case 4:i=M6;break;default:i=a0}n=i.bind(null,e,n,t),i=void 0,!Kp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $f(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Hi(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}_E(function(){var d=o,f=r0(n),m=[];e:{var E=KE.get(t);if(E!==void 0){var k=u0,I=t;switch(t){case"keypress":if(bc(n)===0)break e;case"keydown":case"keyup":k=Z6;break;case"focusin":I="focus",k=Of;break;case"focusout":I="blur",k=Of;break;case"beforeblur":case"afterblur":k=Of;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Ev;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=F6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=e4;break;case HE:case qE:case YE:k=$6;break;case GE:k=n4;break;case"scroll":k=N6;break;case"wheel":k=i4;break;case"copy":case"cut":case"paste":k=B6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=xv}var L=(e&4)!==0,T=!L&&t==="scroll",y=L?E!==null?E+"Capture":null:E;L=[];for(var g=d,_;g!==null;){_=g;var w=_.stateNode;if(_.tag===5&&w!==null&&(_=w,y!==null&&(w=Pl(g,y),w!=null&&L.push(Nl(g,w,_)))),T)break;g=g.return}0<L.length&&(E=new k(E,I,null,n,f),m.push({event:E,listeners:L}))}}if(!(e&7)){e:{if(E=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",E&&n!==Yp&&(I=n.relatedTarget||n.fromElement)&&(Hi(I)||I[Sr]))break e;if((k||E)&&(E=f.window===f?f:(E=f.ownerDocument)?E.defaultView||E.parentWindow:window,k?(I=n.relatedTarget||n.toElement,k=d,I=I?Hi(I):null,I!==null&&(T=vo(I),I!==T||I.tag!==5&&I.tag!==6)&&(I=null)):(k=null,I=d),k!==I)){if(L=Ev,w="onMouseLeave",y="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(L=xv,w="onPointerLeave",y="onPointerEnter",g="pointer"),T=k==null?E:Is(k),_=I==null?E:Is(I),E=new L(w,g+"leave",k,n,f),E.target=T,E.relatedTarget=_,w=null,Hi(f)===d&&(L=new L(y,g+"enter",I,n,f),L.target=_,L.relatedTarget=T,w=L),T=w,k&&I)t:{for(L=k,y=I,g=0,_=L;_;_=ss(_))g++;for(_=0,w=y;w;w=ss(w))_++;for(;0<g-_;)L=ss(L),g--;for(;0<_-g;)y=ss(y),_--;for(;g--;){if(L===y||y!==null&&L===y.alternate)break t;L=ss(L),y=ss(y)}L=null}else L=null;k!==null&&Dv(m,E,k,L,!1),I!==null&&T!==null&&Dv(m,T,I,L,!0)}}e:{if(E=d?Is(d):window,k=E.nodeName&&E.nodeName.toLowerCase(),k==="select"||k==="input"&&E.type==="file")var R=d4;else if(Sv(E))if(WE)R=m4;else{R=f4;var O=h4}else(k=E.nodeName)&&k.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(R=p4);if(R&&(R=R(t,d))){FE(m,R,n,f);break e}O&&O(t,E,d),t==="focusout"&&(O=E._wrapperState)&&O.controlled&&E.type==="number"&&$p(E,"number",E.value)}switch(O=d?Is(d):window,t){case"focusin":(Sv(O)||O.contentEditable==="true")&&(xs=O,em=d,fl=null);break;case"focusout":fl=em=xs=null;break;case"mousedown":tm=!0;break;case"contextmenu":case"mouseup":case"dragend":tm=!1,Rv(m,n,f);break;case"selectionchange":if(v4)break;case"keydown":case"keyup":Rv(m,n,f)}var x;if(d0)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else ws?NE(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(ME&&n.locale!=="ko"&&(ws||S!=="onCompositionStart"?S==="onCompositionEnd"&&ws&&(x=OE()):(Xr=f,l0="value"in Xr?Xr.value:Xr.textContent,ws=!0)),O=ud(d,S),0<O.length&&(S=new wv(S,t,null,n,f),m.push({event:S,listeners:O}),x?S.data=x:(x=VE(n),x!==null&&(S.data=x)))),(x=s4?a4(t,n):l4(t,n))&&(d=ud(d,"onBeforeInput"),0<d.length&&(f=new wv("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=x))}QE(m,e)})}function Nl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ud(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pl(t,n),o!=null&&r.unshift(Nl(t,o,i)),o=Pl(t,e),o!=null&&r.push(Nl(t,o,i))),t=t.return}return r}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dv(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,i?(u=Pl(n,o),u!=null&&s.unshift(Nl(n,u,a))):i||(u=Pl(n,o),u!=null&&s.push(Nl(n,u,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var w4=/\r\n?/g,x4=/\u0000|\uFFFD/g;function Ov(t){return(typeof t=="string"?t:""+t).replace(w4,`
`).replace(x4,"")}function rc(t,e,n){if(e=Ov(e),Ov(t)!==e&&n)throw Error(B(425))}function cd(){}var nm=null,rm=null;function im(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var om=typeof setTimeout=="function"?setTimeout:void 0,T4=typeof clearTimeout=="function"?clearTimeout:void 0,Mv=typeof Promise=="function"?Promise:void 0,I4=typeof queueMicrotask=="function"?queueMicrotask:typeof Mv<"u"?function(t){return Mv.resolve(null).then(t).catch(S4)}:om;function S4(t){setTimeout(function(){throw t})}function zf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),jl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);jl(e)}function si(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fa=Math.random().toString(36).slice(2),Gn="__reactFiber$"+fa,Vl="__reactProps$"+fa,Sr="__reactContainer$"+fa,sm="__reactEvents$"+fa,C4="__reactListeners$"+fa,L4="__reactHandles$"+fa;function Hi(t){var e=t[Gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sr]||n[Gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nv(t);t!==null;){if(n=t[Gn])return n;t=Nv(t)}return e}t=n,n=t.parentNode}return null}function hu(t){return t=t[Gn]||t[Sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function dh(t){return t[Vl]||null}var am=[],Ss=-1;function Ii(t){return{current:t}}function Me(t){0>Ss||(t.current=am[Ss],am[Ss]=null,Ss--)}function Re(t,e){Ss++,am[Ss]=t.current,t.current=e}var ki={},Rt=Ii(ki),Zt=Ii(!1),ro=ki;function qs(t,e){var n=t.type.contextTypes;if(!n)return ki;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Xt(t){return t=t.childContextTypes,t!=null}function dd(){Me(Zt),Me(Rt)}function Vv(t,e,n){if(Rt.current!==ki)throw Error(B(168));Re(Rt,e),Re(Zt,n)}function XE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,h6(t)||"Unknown",i));return We({},n,r)}function hd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ki,ro=Rt.current,Re(Rt,t),Re(Zt,Zt.current),!0}function Fv(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=XE(t,e,ro),r.__reactInternalMemoizedMergedChildContext=t,Me(Zt),Me(Rt),Re(Rt,t)):Me(Zt),Re(Zt,n)}var mr=null,hh=!1,Bf=!1;function JE(t){mr===null?mr=[t]:mr.push(t)}function A4(t){hh=!0,JE(t)}function Si(){if(!Bf&&mr!==null){Bf=!0;var t=0,e=Ce;try{var n=mr;for(Ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mr=null,hh=!1}catch(i){throw mr!==null&&(mr=mr.slice(t+1)),TE(i0,Si),i}finally{Ce=e,Bf=!1}}return null}var Cs=[],Ls=0,fd=null,pd=0,vn=[],kn=0,io=null,yr=1,vr="";function Fi(t,e){Cs[Ls++]=pd,Cs[Ls++]=fd,fd=t,pd=e}function ew(t,e,n){vn[kn++]=yr,vn[kn++]=vr,vn[kn++]=io,io=t;var r=yr;t=vr;var i=32-Nn(r)-1;r&=~(1<<i),n+=1;var o=32-Nn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,yr=1<<32-Nn(e)+i|n<<i|r,vr=o+t}else yr=1<<o|n<<i|r,vr=t}function f0(t){t.return!==null&&(Fi(t,1),ew(t,1,0))}function p0(t){for(;t===fd;)fd=Cs[--Ls],Cs[Ls]=null,pd=Cs[--Ls],Cs[Ls]=null;for(;t===io;)io=vn[--kn],vn[kn]=null,vr=vn[--kn],vn[kn]=null,yr=vn[--kn],vn[kn]=null}var cn=null,an=null,Ne=!1,Dn=null;function tw(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,an=si(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,an=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=io!==null?{id:yr,overflow:vr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,an=null,!0):!1;default:return!1}}function lm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function um(t){if(Ne){var e=an;if(e){var n=e;if(!Wv(t,e)){if(lm(t))throw Error(B(418));e=si(n.nextSibling);var r=cn;e&&Wv(t,e)?tw(r,n):(t.flags=t.flags&-4097|2,Ne=!1,cn=t)}}else{if(lm(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ne=!1,cn=t}}}function Uv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function ic(t){if(t!==cn)return!1;if(!Ne)return Uv(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!im(t.type,t.memoizedProps)),e&&(e=an)){if(lm(t))throw nw(),Error(B(418));for(;e;)tw(t,e),e=si(e.nextSibling)}if(Uv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=si(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=cn?si(t.stateNode.nextSibling):null;return!0}function nw(){for(var t=an;t;)t=si(t.nextSibling)}function Ys(){an=cn=null,Ne=!1}function m0(t){Dn===null?Dn=[t]:Dn.push(t)}var P4=jr.ReactCurrentBatchConfig;function $a(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function oc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $v(t){var e=t._init;return e(t._payload)}function rw(t){function e(y,g){if(t){var _=y.deletions;_===null?(y.deletions=[g],y.flags|=16):_.push(g)}}function n(y,g){if(!t)return null;for(;g!==null;)e(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=ci(y,g),y.index=0,y.sibling=null,y}function o(y,g,_){return y.index=_,t?(_=y.alternate,_!==null?(_=_.index,_<g?(y.flags|=2,g):_):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,g,_,w){return g===null||g.tag!==6?(g=Zf(_,y.mode,w),g.return=y,g):(g=i(g,_),g.return=y,g)}function u(y,g,_,w){var R=_.type;return R===Es?f(y,g,_.props.children,w,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Hr&&$v(R)===g.type)?(w=i(g,_.props),w.ref=$a(y,g,_),w.return=y,w):(w=Fc(_.type,_.key,_.props,null,y.mode,w),w.ref=$a(y,g,_),w.return=y,w)}function d(y,g,_,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Xf(_,y.mode,w),g.return=y,g):(g=i(g,_.children||[]),g.return=y,g)}function f(y,g,_,w,R){return g===null||g.tag!==7?(g=Xi(_,y.mode,w,R),g.return=y,g):(g=i(g,_),g.return=y,g)}function m(y,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Zf(""+g,y.mode,_),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Gu:return _=Fc(g.type,g.key,g.props,null,y.mode,_),_.ref=$a(y,null,g),_.return=y,_;case _s:return g=Xf(g,y.mode,_),g.return=y,g;case Hr:var w=g._init;return m(y,w(g._payload),_)}if(Za(g)||Na(g))return g=Xi(g,y.mode,_,null),g.return=y,g;oc(y,g)}return null}function E(y,g,_,w){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(y,g,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Gu:return _.key===R?u(y,g,_,w):null;case _s:return _.key===R?d(y,g,_,w):null;case Hr:return R=_._init,E(y,g,R(_._payload),w)}if(Za(_)||Na(_))return R!==null?null:f(y,g,_,w,null);oc(y,_)}return null}function k(y,g,_,w,R){if(typeof w=="string"&&w!==""||typeof w=="number")return y=y.get(_)||null,a(g,y,""+w,R);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Gu:return y=y.get(w.key===null?_:w.key)||null,u(g,y,w,R);case _s:return y=y.get(w.key===null?_:w.key)||null,d(g,y,w,R);case Hr:var O=w._init;return k(y,g,_,O(w._payload),R)}if(Za(w)||Na(w))return y=y.get(_)||null,f(g,y,w,R,null);oc(g,w)}return null}function I(y,g,_,w){for(var R=null,O=null,x=g,S=g=0,A=null;x!==null&&S<_.length;S++){x.index>S?(A=x,x=null):A=x.sibling;var b=E(y,x,_[S],w);if(b===null){x===null&&(x=A);break}t&&x&&b.alternate===null&&e(y,x),g=o(b,g,S),O===null?R=b:O.sibling=b,O=b,x=A}if(S===_.length)return n(y,x),Ne&&Fi(y,S),R;if(x===null){for(;S<_.length;S++)x=m(y,_[S],w),x!==null&&(g=o(x,g,S),O===null?R=x:O.sibling=x,O=x);return Ne&&Fi(y,S),R}for(x=r(y,x);S<_.length;S++)A=k(x,y,S,_[S],w),A!==null&&(t&&A.alternate!==null&&x.delete(A.key===null?S:A.key),g=o(A,g,S),O===null?R=A:O.sibling=A,O=A);return t&&x.forEach(function(j){return e(y,j)}),Ne&&Fi(y,S),R}function L(y,g,_,w){var R=Na(_);if(typeof R!="function")throw Error(B(150));if(_=R.call(_),_==null)throw Error(B(151));for(var O=R=null,x=g,S=g=0,A=null,b=_.next();x!==null&&!b.done;S++,b=_.next()){x.index>S?(A=x,x=null):A=x.sibling;var j=E(y,x,b.value,w);if(j===null){x===null&&(x=A);break}t&&x&&j.alternate===null&&e(y,x),g=o(j,g,S),O===null?R=j:O.sibling=j,O=j,x=A}if(b.done)return n(y,x),Ne&&Fi(y,S),R;if(x===null){for(;!b.done;S++,b=_.next())b=m(y,b.value,w),b!==null&&(g=o(b,g,S),O===null?R=b:O.sibling=b,O=b);return Ne&&Fi(y,S),R}for(x=r(y,x);!b.done;S++,b=_.next())b=k(x,y,S,b.value,w),b!==null&&(t&&b.alternate!==null&&x.delete(b.key===null?S:b.key),g=o(b,g,S),O===null?R=b:O.sibling=b,O=b);return t&&x.forEach(function(D){return e(y,D)}),Ne&&Fi(y,S),R}function T(y,g,_,w){if(typeof _=="object"&&_!==null&&_.type===Es&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Gu:e:{for(var R=_.key,O=g;O!==null;){if(O.key===R){if(R=_.type,R===Es){if(O.tag===7){n(y,O.sibling),g=i(O,_.props.children),g.return=y,y=g;break e}}else if(O.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Hr&&$v(R)===O.type){n(y,O.sibling),g=i(O,_.props),g.ref=$a(y,O,_),g.return=y,y=g;break e}n(y,O);break}else e(y,O);O=O.sibling}_.type===Es?(g=Xi(_.props.children,y.mode,w,_.key),g.return=y,y=g):(w=Fc(_.type,_.key,_.props,null,y.mode,w),w.ref=$a(y,g,_),w.return=y,y=w)}return s(y);case _s:e:{for(O=_.key;g!==null;){if(g.key===O)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(y,g.sibling),g=i(g,_.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else e(y,g);g=g.sibling}g=Xf(_,y.mode,w),g.return=y,y=g}return s(y);case Hr:return O=_._init,T(y,g,O(_._payload),w)}if(Za(_))return I(y,g,_,w);if(Na(_))return L(y,g,_,w);oc(y,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,_),g.return=y,y=g):(n(y,g),g=Zf(_,y.mode,w),g.return=y,y=g),s(y)):n(y,g)}return T}var Gs=rw(!0),iw=rw(!1),md=Ii(null),gd=null,As=null,g0=null;function y0(){g0=As=gd=null}function v0(t){var e=md.current;Me(md),t._currentValue=e}function cm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){gd=t,g0=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Gt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(g0!==t)if(t={context:t,memoizedValue:e,next:null},As===null){if(gd===null)throw Error(B(308));As=t,gd.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return e}var qi=null;function k0(t){qi===null?qi=[t]:qi.push(t)}function ow(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,k0(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cr(t,r)}function Cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qr=!1;function _0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ai(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ke&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cr(t,n)}return i=r.interleaved,i===null?(e.next=e,k0(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cr(t,n)}function jc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,o0(t,n)}}function zv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yd(t,e,n,r){var i=t.updateQueue;qr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,d=u.next;u.next=null,s===null?o=d:s.next=d,s=u;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=d:a.next=d,f.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;s=0,f=d=u=null,a=o;do{var E=a.lane,k=a.eventTime;if((r&E)===E){f!==null&&(f=f.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,L=a;switch(E=e,k=n,L.tag){case 1:if(I=L.payload,typeof I=="function"){m=I.call(k,m,E);break e}m=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=L.payload,E=typeof I=="function"?I.call(k,m,E):I,E==null)break e;m=We({},m,E);break e;case 2:qr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,E=i.effects,E===null?i.effects=[a]:E.push(a))}else k={eventTime:k,lane:E,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(d=f=k,u=m):f=f.next=k,s|=E;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;E=a,a=E.next,E.next=null,i.lastBaseUpdate=E,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);so|=s,t.lanes=s,t.memoizedState=m}}function Bv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var fu={},Jn=Ii(fu),Fl=Ii(fu),Wl=Ii(fu);function Yi(t){if(t===fu)throw Error(B(174));return t}function E0(t,e){switch(Re(Wl,e),Re(Fl,t),Re(Jn,fu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bp(e,t)}Me(Jn),Re(Jn,e)}function Ks(){Me(Jn),Me(Fl),Me(Wl)}function aw(t){Yi(Wl.current);var e=Yi(Jn.current),n=Bp(e,t.type);e!==n&&(Re(Fl,t),Re(Jn,n))}function w0(t){Fl.current===t&&(Me(Jn),Me(Fl))}var Ve=Ii(0);function vd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hf=[];function x0(){for(var t=0;t<Hf.length;t++)Hf[t]._workInProgressVersionPrimary=null;Hf.length=0}var Dc=jr.ReactCurrentDispatcher,qf=jr.ReactCurrentBatchConfig,oo=0,Fe=null,it=null,at=null,kd=!1,pl=!1,Ul=0,R4=0;function It(){throw Error(B(321))}function T0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function I0(t,e,n,r,i,o){if(oo=o,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dc.current=t===null||t.memoizedState===null?O4:M4,t=n(r,i),pl){o=0;do{if(pl=!1,Ul=0,25<=o)throw Error(B(301));o+=1,at=it=null,e.updateQueue=null,Dc.current=N4,t=n(r,i)}while(pl)}if(Dc.current=_d,e=it!==null&&it.next!==null,oo=0,at=it=Fe=null,kd=!1,e)throw Error(B(300));return t}function S0(){var t=Ul!==0;return Ul=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Fe.memoizedState=at=t:at=at.next=t,at}function In(){if(it===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=at===null?Fe.memoizedState:at.next;if(e!==null)at=e,it=t;else{if(t===null)throw Error(B(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},at===null?Fe.memoizedState=at=t:at=at.next=t}return at}function $l(t,e){return typeof e=="function"?e(t):e}function Yf(t){var e=In(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=it,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,d=o;do{var f=d.lane;if((oo&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=m,s=r):u=u.next=m,Fe.lanes|=f,so|=f}d=d.next}while(d!==null&&d!==o);u===null?s=r:u.next=a,Wn(r,e.memoizedState)||(Gt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Fe.lanes|=o,so|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gf(t){var e=In(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Wn(o,e.memoizedState)||(Gt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function lw(){}function uw(t,e){var n=Fe,r=In(),i=e(),o=!Wn(r.memoizedState,i);if(o&&(r.memoizedState=i,Gt=!0),r=r.queue,C0(hw.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,zl(9,dw.bind(null,n,r,i,e),void 0,null),ct===null)throw Error(B(349));oo&30||cw(n,e,i)}return i}function cw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dw(t,e,n,r){e.value=n,e.getSnapshot=r,fw(e)&&pw(t)}function hw(t,e,n){return n(function(){fw(e)&&pw(t)})}function fw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function pw(t){var e=Cr(t,1);e!==null&&Vn(e,t,1,-1)}function Hv(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$l,lastRenderedState:t},e.queue=t,t=t.dispatch=D4.bind(null,Fe,t),[e.memoizedState,t]}function zl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function mw(){return In().memoizedState}function Oc(t,e,n,r){var i=qn();Fe.flags|=t,i.memoizedState=zl(1|e,n,void 0,r===void 0?null:r)}function fh(t,e,n,r){var i=In();r=r===void 0?null:r;var o=void 0;if(it!==null){var s=it.memoizedState;if(o=s.destroy,r!==null&&T0(r,s.deps)){i.memoizedState=zl(e,n,o,r);return}}Fe.flags|=t,i.memoizedState=zl(1|e,n,o,r)}function qv(t,e){return Oc(8390656,8,t,e)}function C0(t,e){return fh(2048,8,t,e)}function gw(t,e){return fh(4,2,t,e)}function yw(t,e){return fh(4,4,t,e)}function vw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kw(t,e,n){return n=n!=null?n.concat([t]):null,fh(4,4,vw.bind(null,e,t),n)}function L0(){}function _w(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&T0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ew(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&T0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ww(t,e,n){return oo&21?(Wn(n,e)||(n=CE(),Fe.lanes|=n,so|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Gt=!0),t.memoizedState=n)}function b4(t,e){var n=Ce;Ce=n!==0&&4>n?n:4,t(!0);var r=qf.transition;qf.transition={};try{t(!1),e()}finally{Ce=n,qf.transition=r}}function xw(){return In().memoizedState}function j4(t,e,n){var r=ui(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tw(t))Iw(e,n);else if(n=ow(t,e,n,r),n!==null){var i=Wt();Vn(n,t,r,i),Sw(n,e,r)}}function D4(t,e,n){var r=ui(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tw(t))Iw(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Wn(a,s)){var u=e.interleaved;u===null?(i.next=i,k0(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=ow(t,e,i,r),n!==null&&(i=Wt(),Vn(n,t,r,i),Sw(n,e,r))}}function Tw(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function Iw(t,e){pl=kd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,o0(t,n)}}var _d={readContext:Tn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},O4={readContext:Tn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:qv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oc(4194308,4,vw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oc(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=j4.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:Hv,useDebugValue:L0,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Hv(!1),e=t[0];return t=b4.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=qn();if(Ne){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),ct===null)throw Error(B(349));oo&30||cw(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,qv(hw.bind(null,r,o,t),[t]),r.flags|=2048,zl(9,dw.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=qn(),e=ct.identifierPrefix;if(Ne){var n=vr,r=yr;n=(r&~(1<<32-Nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ul++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=R4++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},M4={readContext:Tn,useCallback:_w,useContext:Tn,useEffect:C0,useImperativeHandle:kw,useInsertionEffect:gw,useLayoutEffect:yw,useMemo:Ew,useReducer:Yf,useRef:mw,useState:function(){return Yf($l)},useDebugValue:L0,useDeferredValue:function(t){var e=In();return ww(e,it.memoizedState,t)},useTransition:function(){var t=Yf($l)[0],e=In().memoizedState;return[t,e]},useMutableSource:lw,useSyncExternalStore:uw,useId:xw,unstable_isNewReconciler:!1},N4={readContext:Tn,useCallback:_w,useContext:Tn,useEffect:C0,useImperativeHandle:kw,useInsertionEffect:gw,useLayoutEffect:yw,useMemo:Ew,useReducer:Gf,useRef:mw,useState:function(){return Gf($l)},useDebugValue:L0,useDeferredValue:function(t){var e=In();return it===null?e.memoizedState=t:ww(e,it.memoizedState,t)},useTransition:function(){var t=Gf($l)[0],e=In().memoizedState;return[t,e]},useMutableSource:lw,useSyncExternalStore:uw,useId:xw,unstable_isNewReconciler:!1};function bn(t,e){if(t&&t.defaultProps){e=We({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function dm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:We({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ph={isMounted:function(t){return(t=t._reactInternals)?vo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Wt(),i=ui(t),o=wr(r,i);o.payload=e,n!=null&&(o.callback=n),e=ai(t,o,i),e!==null&&(Vn(e,t,i,r),jc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Wt(),i=ui(t),o=wr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=ai(t,o,i),e!==null&&(Vn(e,t,i,r),jc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),r=ui(t),i=wr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ai(t,i,r),e!==null&&(Vn(e,t,r,n),jc(e,t,r))}};function Yv(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ol(n,r)||!Ol(i,o):!0}function Cw(t,e,n){var r=!1,i=ki,o=e.contextType;return typeof o=="object"&&o!==null?o=Tn(o):(i=Xt(e)?ro:Rt.current,r=e.contextTypes,o=(r=r!=null)?qs(t,i):ki),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ph,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Gv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ph.enqueueReplaceState(e,e.state,null)}function hm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},_0(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Tn(o):(o=Xt(e)?ro:Rt.current,i.context=qs(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(dm(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ph.enqueueReplaceState(i,i.state,null),yd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qs(t,e){try{var n="",r=e;do n+=d6(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Kf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var V4=typeof WeakMap=="function"?WeakMap:Map;function Lw(t,e,n){n=wr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wd||(wd=!0,xm=r),fm(t,e)},n}function Aw(t,e,n){n=wr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fm(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){fm(t,e),typeof r!="function"&&(li===null?li=new Set([this]):li.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Kv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new V4;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=X4.bind(null,t,e,n),e.then(t,t))}function Qv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wr(-1,1),e.tag=2,ai(n,e,1))),n.lanes|=1),t)}var F4=jr.ReactCurrentOwner,Gt=!1;function Vt(t,e,n,r){e.child=t===null?iw(e,null,n,r):Gs(e,t.child,n,r)}function Xv(t,e,n,r,i){n=n.render;var o=e.ref;return Fs(e,i),r=I0(t,e,n,r,o,i),n=S0(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lr(t,e,i)):(Ne&&n&&f0(e),e.flags|=1,Vt(t,e,r,i),e.child)}function Jv(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!M0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Pw(t,e,o,r,i)):(t=Fc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ol,n(s,r)&&t.ref===e.ref)return Lr(t,e,i)}return e.flags|=1,t=ci(o,r),t.ref=e.ref,t.return=e,e.child=t}function Pw(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Ol(o,r)&&t.ref===e.ref)if(Gt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Gt=!0);else return e.lanes=t.lanes,Lr(t,e,i)}return pm(t,e,n,r,i)}function Rw(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(Rs,on),on|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(Rs,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Re(Rs,on),on|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Re(Rs,on),on|=r;return Vt(t,e,i,n),e.child}function bw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pm(t,e,n,r,i){var o=Xt(n)?ro:Rt.current;return o=qs(e,o),Fs(e,i),n=I0(t,e,n,r,o,i),r=S0(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lr(t,e,i)):(Ne&&r&&f0(e),e.flags|=1,Vt(t,e,n,i),e.child)}function e2(t,e,n,r,i){if(Xt(n)){var o=!0;hd(e)}else o=!1;if(Fs(e,i),e.stateNode===null)Mc(t,e),Cw(e,n,r),hm(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var u=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=Tn(d):(d=Xt(n)?ro:Rt.current,d=qs(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==d)&&Gv(e,s,r,d),qr=!1;var E=e.memoizedState;s.state=E,yd(e,r,s,i),u=e.memoizedState,a!==r||E!==u||Zt.current||qr?(typeof f=="function"&&(dm(e,n,f,r),u=e.memoizedState),(a=qr||Yv(e,n,a,r,E,u,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,sw(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:bn(e.type,a),s.props=d,m=e.pendingProps,E=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Tn(u):(u=Xt(n)?ro:Rt.current,u=qs(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||E!==u)&&Gv(e,s,r,u),qr=!1,E=e.memoizedState,s.state=E,yd(e,r,s,i);var I=e.memoizedState;a!==m||E!==I||Zt.current||qr?(typeof k=="function"&&(dm(e,n,k,r),I=e.memoizedState),(d=qr||Yv(e,n,d,r,E,I,u)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,I,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,I,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),s.props=r,s.state=I,s.context=u,r=d):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),r=!1)}return mm(t,e,n,r,o,i)}function mm(t,e,n,r,i,o){bw(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Fv(e,n,!1),Lr(t,e,o);r=e.stateNode,F4.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Gs(e,t.child,null,o),e.child=Gs(e,null,a,o)):Vt(t,e,a,o),e.memoizedState=r.state,i&&Fv(e,n,!0),e.child}function jw(t){var e=t.stateNode;e.pendingContext?Vv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vv(t,e.context,!1),E0(t,e.containerInfo)}function t2(t,e,n,r,i){return Ys(),m0(i),e.flags|=256,Vt(t,e,n,r),e.child}var gm={dehydrated:null,treeContext:null,retryLane:0};function ym(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dw(t,e,n){var r=e.pendingProps,i=Ve.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Re(Ve,i&1),t===null)return um(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=yh(s,r,0,null),t=Xi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=ym(n),e.memoizedState=gm,t):A0(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return W4(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ci(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ci(a,o):(o=Xi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?ym(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=gm,r}return o=t.child,t=o.sibling,r=ci(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function A0(t,e){return e=yh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sc(t,e,n,r){return r!==null&&m0(r),Gs(e,t.child,null,n),t=A0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function W4(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Kf(Error(B(422))),sc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=yh({mode:"visible",children:r.children},i,0,null),o=Xi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Gs(e,t.child,null,s),e.child.memoizedState=ym(s),e.memoizedState=gm,o);if(!(e.mode&1))return sc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(B(419)),r=Kf(o,r,void 0),sc(t,e,s,r)}if(a=(s&t.childLanes)!==0,Gt||a){if(r=ct,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Cr(t,i),Vn(r,t,i,-1))}return O0(),r=Kf(Error(B(421))),sc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=J4.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,an=si(i.nextSibling),cn=e,Ne=!0,Dn=null,t!==null&&(vn[kn++]=yr,vn[kn++]=vr,vn[kn++]=io,yr=t.id,vr=t.overflow,io=e),e=A0(e,r.children),e.flags|=4096,e)}function n2(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cm(t.return,e,n)}function Qf(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ow(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Vt(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&n2(t,n,e);else if(t.tag===19)n2(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&vd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qf(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&vd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qf(e,!0,n,null,o);break;case"together":Qf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),so|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=ci(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ci(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function U4(t,e,n){switch(e.tag){case 3:jw(e),Ys();break;case 5:aw(e);break;case 1:Xt(e.type)&&hd(e);break;case 4:E0(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Re(md,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?Dw(t,e,n):(Re(Ve,Ve.current&1),t=Lr(t,e,n),t!==null?t.sibling:null);Re(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ow(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Re(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,Rw(t,e,n)}return Lr(t,e,n)}var Mw,vm,Nw,Vw;Mw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vm=function(){};Nw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yi(Jn.current);var o=null;switch(n){case"input":i=Wp(t,i),r=Wp(t,r),o=[];break;case"select":i=We({},i,{value:void 0}),r=We({},r,{value:void 0}),o=[];break;case"textarea":i=zp(t,i),r=zp(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=cd)}Hp(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ll.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ll.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&je("scroll",t),o||a===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};Vw=function(t,e,n,r){n!==r&&(e.flags|=4)};function za(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $4(t,e,n){var r=e.pendingProps;switch(p0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return Xt(e.type)&&dd(),St(e),null;case 3:return r=e.stateNode,Ks(),Me(Zt),Me(Rt),x0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ic(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(Sm(Dn),Dn=null))),vm(t,e),St(e),null;case 5:w0(e);var i=Yi(Wl.current);if(n=e.type,t!==null&&e.stateNode!=null)Nw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return St(e),null}if(t=Yi(Jn.current),ic(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Gn]=e,r[Vl]=o,t=(e.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<Ja.length;i++)je(Ja[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":dv(r,o),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},je("invalid",r);break;case"textarea":fv(r,o),je("invalid",r)}Hp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&rc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&rc(r.textContent,a,t),i=["children",""+a]):Ll.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&je("scroll",r)}switch(n){case"input":Ku(r),hv(r,o,!0);break;case"textarea":Ku(r),pv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=cd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Gn]=e,t[Vl]=r,Mw(t,e,!1,!1),e.stateNode=t;e:{switch(s=qp(n,r),n){case"dialog":je("cancel",t),je("close",t),i=r;break;case"iframe":case"object":case"embed":je("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ja.length;i++)je(Ja[i],t);i=r;break;case"source":je("error",t),i=r;break;case"img":case"image":case"link":je("error",t),je("load",t),i=r;break;case"details":je("toggle",t),i=r;break;case"input":dv(t,r),i=Wp(t,r),je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=We({},r,{value:void 0}),je("invalid",t);break;case"textarea":fv(t,r),i=zp(t,r),je("invalid",t);break;default:i=r}Hp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?mE(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&fE(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Al(t,u):typeof u=="number"&&Al(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ll.hasOwnProperty(o)?u!=null&&o==="onScroll"&&je("scroll",t):u!=null&&Jg(t,o,u,s))}switch(n){case"input":Ku(t),hv(t,r,!1);break;case"textarea":Ku(t),pv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Os(t,!!r.multiple,o,!1):r.defaultValue!=null&&Os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=cd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(t&&e.stateNode!=null)Vw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Yi(Wl.current),Yi(Jn.current),ic(e)){if(r=e.stateNode,n=e.memoizedProps,r[Gn]=e,(o=r.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:rc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rc(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gn]=e,e.stateNode=r}return St(e),null;case 13:if(Me(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&an!==null&&e.mode&1&&!(e.flags&128))nw(),Ys(),e.flags|=98560,o=!1;else if(o=ic(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(B(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[Gn]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),o=!1}else Dn!==null&&(Sm(Dn),Dn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?ot===0&&(ot=3):O0())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return Ks(),vm(t,e),t===null&&Ml(e.stateNode.containerInfo),St(e),null;case 10:return v0(e.type._context),St(e),null;case 17:return Xt(e.type)&&dd(),St(e),null;case 19:if(Me(Ve),o=e.memoizedState,o===null)return St(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)za(o,!1);else{if(ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=vd(t),s!==null){for(e.flags|=128,za(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re(Ve,Ve.current&1|2),e.child}t=t.sibling}o.tail!==null&&Qe()>Zs&&(e.flags|=128,r=!0,za(o,!1),e.lanes=4194304)}else{if(!r)if(t=vd(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),za(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ne)return St(e),null}else 2*Qe()-o.renderingStartTime>Zs&&n!==1073741824&&(e.flags|=128,r=!0,za(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Qe(),e.sibling=null,n=Ve.current,Re(Ve,r?n&1|2:n&1),e):(St(e),null);case 22:case 23:return D0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?on&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function z4(t,e){switch(p0(e),e.tag){case 1:return Xt(e.type)&&dd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),Me(Zt),Me(Rt),x0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return w0(e),null;case 13:if(Me(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Me(Ve),null;case 4:return Ks(),null;case 10:return v0(e.type._context),null;case 22:case 23:return D0(),null;case 24:return null;default:return null}}var ac=!1,At=!1,B4=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(t,e,r)}else n.current=null}function km(t,e,n){try{n()}catch(r){qe(t,e,r)}}var r2=!1;function H4(t,e){if(nm=ad,t=zE(),h0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,d=0,f=0,m=t,E=null;t:for(;;){for(var k;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(u=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(k=m.firstChild)!==null;)E=m,m=k;for(;;){if(m===t)break t;if(E===n&&++d===i&&(a=s),E===o&&++f===r&&(u=s),(k=m.nextSibling)!==null)break;m=E,E=m.parentNode}m=k}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rm={focusedElem:t,selectionRange:n},ad=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var L=I.memoizedProps,T=I.memoizedState,y=e.stateNode,g=y.getSnapshotBeforeUpdate(e.elementType===e.type?L:bn(e.type,L),T);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(w){qe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return I=r2,r2=!1,I}function ml(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&km(e,n,o)}i=i.next}while(i!==r)}}function mh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function _m(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Fw(t){var e=t.alternate;e!==null&&(t.alternate=null,Fw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gn],delete e[Vl],delete e[sm],delete e[C4],delete e[L4])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ww(t){return t.tag===5||t.tag===3||t.tag===4}function i2(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ww(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Em(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cd));else if(r!==4&&(t=t.child,t!==null))for(Em(t,e,n),t=t.sibling;t!==null;)Em(t,e,n),t=t.sibling}function wm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wm(t,e,n),t=t.sibling;t!==null;)wm(t,e,n),t=t.sibling}var mt=null,jn=!1;function Vr(t,e,n){for(n=n.child;n!==null;)Uw(t,e,n),n=n.sibling}function Uw(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(ah,n)}catch{}switch(n.tag){case 5:At||Ps(n,e);case 6:var r=mt,i=jn;mt=null,Vr(t,e,n),mt=r,jn=i,mt!==null&&(jn?(t=mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mt.removeChild(n.stateNode));break;case 18:mt!==null&&(jn?(t=mt,n=n.stateNode,t.nodeType===8?zf(t.parentNode,n):t.nodeType===1&&zf(t,n),jl(t)):zf(mt,n.stateNode));break;case 4:r=mt,i=jn,mt=n.stateNode.containerInfo,jn=!0,Vr(t,e,n),mt=r,jn=i;break;case 0:case 11:case 14:case 15:if(!At&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&km(n,e,s),i=i.next}while(i!==r)}Vr(t,e,n);break;case 1:if(!At&&(Ps(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){qe(n,e,a)}Vr(t,e,n);break;case 21:Vr(t,e,n);break;case 22:n.mode&1?(At=(r=At)||n.memoizedState!==null,Vr(t,e,n),At=r):Vr(t,e,n);break;default:Vr(t,e,n)}}function o2(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new B4),e.forEach(function(r){var i=eC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:mt=a.stateNode,jn=!1;break e;case 3:mt=a.stateNode.containerInfo,jn=!0;break e;case 4:mt=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(mt===null)throw Error(B(160));Uw(o,s,i),mt=null,jn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){qe(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$w(e,t),e=e.sibling}function $w(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Hn(t),r&4){try{ml(3,t,t.return),mh(3,t)}catch(L){qe(t,t.return,L)}try{ml(5,t,t.return)}catch(L){qe(t,t.return,L)}}break;case 1:Pn(e,t),Hn(t),r&512&&n!==null&&Ps(n,n.return);break;case 5:if(Pn(e,t),Hn(t),r&512&&n!==null&&Ps(n,n.return),t.flags&32){var i=t.stateNode;try{Al(i,"")}catch(L){qe(t,t.return,L)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&cE(i,o),qp(a,s);var d=qp(a,o);for(s=0;s<u.length;s+=2){var f=u[s],m=u[s+1];f==="style"?mE(i,m):f==="dangerouslySetInnerHTML"?fE(i,m):f==="children"?Al(i,m):Jg(i,f,m,d)}switch(a){case"input":Up(i,o);break;case"textarea":dE(i,o);break;case"select":var E=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?Os(i,!!o.multiple,k,!1):E!==!!o.multiple&&(o.defaultValue!=null?Os(i,!!o.multiple,o.defaultValue,!0):Os(i,!!o.multiple,o.multiple?[]:"",!1))}i[Vl]=o}catch(L){qe(t,t.return,L)}}break;case 6:if(Pn(e,t),Hn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(L){qe(t,t.return,L)}}break;case 3:if(Pn(e,t),Hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jl(e.containerInfo)}catch(L){qe(t,t.return,L)}break;case 4:Pn(e,t),Hn(t);break;case 13:Pn(e,t),Hn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(b0=Qe())),r&4&&o2(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(At=(d=At)||f,Pn(e,t),At=d):Pn(e,t),Hn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(m=Q=f;Q!==null;){switch(E=Q,k=E.child,E.tag){case 0:case 11:case 14:case 15:ml(4,E,E.return);break;case 1:Ps(E,E.return);var I=E.stateNode;if(typeof I.componentWillUnmount=="function"){r=E,n=E.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(L){qe(r,n,L)}}break;case 5:Ps(E,E.return);break;case 22:if(E.memoizedState!==null){a2(m);continue}}k!==null?(k.return=E,Q=k):a2(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=pE("display",s))}catch(L){qe(t,t.return,L)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(L){qe(t,t.return,L)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Pn(e,t),Hn(t),r&4&&o2(t);break;case 21:break;default:Pn(e,t),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ww(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Al(i,""),r.flags&=-33);var o=i2(t);wm(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=i2(t);Em(t,a,s);break;default:throw Error(B(161))}}catch(u){qe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function q4(t,e,n){Q=t,zw(t)}function zw(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ac;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||At;a=ac;var d=At;if(ac=s,(At=u)&&!d)for(Q=i;Q!==null;)s=Q,u=s.child,s.tag===22&&s.memoizedState!==null?l2(i):u!==null?(u.return=s,Q=u):l2(i);for(;o!==null;)Q=o,zw(o),o=o.sibling;Q=i,ac=a,At=d}s2(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Q=o):s2(t)}}function s2(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:At||mh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!At)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Bv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bv(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&jl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}At||e.flags&512&&_m(e)}catch(E){qe(e,e.return,E)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function a2(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function l2(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mh(4,e)}catch(u){qe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){qe(e,i,u)}}var o=e.return;try{_m(e)}catch(u){qe(e,o,u)}break;case 5:var s=e.return;try{_m(e)}catch(u){qe(e,s,u)}}}catch(u){qe(e,e.return,u)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var Y4=Math.ceil,Ed=jr.ReactCurrentDispatcher,P0=jr.ReactCurrentOwner,wn=jr.ReactCurrentBatchConfig,ke=0,ct=null,et=null,vt=0,on=0,Rs=Ii(0),ot=0,Bl=null,so=0,gh=0,R0=0,gl=null,qt=null,b0=0,Zs=1/0,fr=null,wd=!1,xm=null,li=null,lc=!1,Jr=null,xd=0,yl=0,Tm=null,Nc=-1,Vc=0;function Wt(){return ke&6?Qe():Nc!==-1?Nc:Nc=Qe()}function ui(t){return t.mode&1?ke&2&&vt!==0?vt&-vt:P4.transition!==null?(Vc===0&&(Vc=CE()),Vc):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:DE(t.type)),t):1}function Vn(t,e,n,r){if(50<yl)throw yl=0,Tm=null,Error(B(185));cu(t,n,r),(!(ke&2)||t!==ct)&&(t===ct&&(!(ke&2)&&(gh|=n),ot===4&&Gr(t,vt)),Jt(t,r),n===1&&ke===0&&!(e.mode&1)&&(Zs=Qe()+500,hh&&Si()))}function Jt(t,e){var n=t.callbackNode;P6(t,e);var r=sd(t,t===ct?vt:0);if(r===0)n!==null&&yv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&yv(n),e===1)t.tag===0?A4(u2.bind(null,t)):JE(u2.bind(null,t)),I4(function(){!(ke&6)&&Si()}),n=null;else{switch(LE(r)){case 1:n=i0;break;case 4:n=IE;break;case 16:n=od;break;case 536870912:n=SE;break;default:n=od}n=Zw(n,Bw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Bw(t,e){if(Nc=-1,Vc=0,ke&6)throw Error(B(327));var n=t.callbackNode;if(Ws()&&t.callbackNode!==n)return null;var r=sd(t,t===ct?vt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Td(t,r);else{e=r;var i=ke;ke|=2;var o=qw();(ct!==t||vt!==e)&&(fr=null,Zs=Qe()+500,Zi(t,e));do try{Q4();break}catch(a){Hw(t,a)}while(!0);y0(),Ed.current=o,ke=i,et!==null?e=0:(ct=null,vt=0,e=ot)}if(e!==0){if(e===2&&(i=Zp(t),i!==0&&(r=i,e=Im(t,i))),e===1)throw n=Bl,Zi(t,0),Gr(t,r),Jt(t,Qe()),n;if(e===6)Gr(t,r);else{if(i=t.current.alternate,!(r&30)&&!G4(i)&&(e=Td(t,r),e===2&&(o=Zp(t),o!==0&&(r=o,e=Im(t,o))),e===1))throw n=Bl,Zi(t,0),Gr(t,r),Jt(t,Qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Wi(t,qt,fr);break;case 3:if(Gr(t,r),(r&130023424)===r&&(e=b0+500-Qe(),10<e)){if(sd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=om(Wi.bind(null,t,qt,fr),e);break}Wi(t,qt,fr);break;case 4:if(Gr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Nn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Y4(r/1960))-r,10<r){t.timeoutHandle=om(Wi.bind(null,t,qt,fr),r);break}Wi(t,qt,fr);break;case 5:Wi(t,qt,fr);break;default:throw Error(B(329))}}}return Jt(t,Qe()),t.callbackNode===n?Bw.bind(null,t):null}function Im(t,e){var n=gl;return t.current.memoizedState.isDehydrated&&(Zi(t,e).flags|=256),t=Td(t,e),t!==2&&(e=qt,qt=n,e!==null&&Sm(e)),t}function Sm(t){qt===null?qt=t:qt.push.apply(qt,t)}function G4(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Wn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gr(t,e){for(e&=~R0,e&=~gh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nn(e),r=1<<n;t[n]=-1,e&=~r}}function u2(t){if(ke&6)throw Error(B(327));Ws();var e=sd(t,0);if(!(e&1))return Jt(t,Qe()),null;var n=Td(t,e);if(t.tag!==0&&n===2){var r=Zp(t);r!==0&&(e=r,n=Im(t,r))}if(n===1)throw n=Bl,Zi(t,0),Gr(t,e),Jt(t,Qe()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wi(t,qt,fr),Jt(t,Qe()),null}function j0(t,e){var n=ke;ke|=1;try{return t(e)}finally{ke=n,ke===0&&(Zs=Qe()+500,hh&&Si())}}function ao(t){Jr!==null&&Jr.tag===0&&!(ke&6)&&Ws();var e=ke;ke|=1;var n=wn.transition,r=Ce;try{if(wn.transition=null,Ce=1,t)return t()}finally{Ce=r,wn.transition=n,ke=e,!(ke&6)&&Si()}}function D0(){on=Rs.current,Me(Rs)}function Zi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,T4(n)),et!==null)for(n=et.return;n!==null;){var r=n;switch(p0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dd();break;case 3:Ks(),Me(Zt),Me(Rt),x0();break;case 5:w0(r);break;case 4:Ks();break;case 13:Me(Ve);break;case 19:Me(Ve);break;case 10:v0(r.type._context);break;case 22:case 23:D0()}n=n.return}if(ct=t,et=t=ci(t.current,null),vt=on=e,ot=0,Bl=null,R0=gh=so=0,qt=gl=null,qi!==null){for(e=0;e<qi.length;e++)if(n=qi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}qi=null}return t}function Hw(t,e){do{var n=et;try{if(y0(),Dc.current=_d,kd){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}kd=!1}if(oo=0,at=it=Fe=null,pl=!1,Ul=0,P0.current=null,n===null||n.return===null){ot=1,Bl=e,et=null;break}e:{var o=t,s=n.return,a=n,u=e;if(e=vt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var E=f.alternate;E?(f.updateQueue=E.updateQueue,f.memoizedState=E.memoizedState,f.lanes=E.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=Qv(s);if(k!==null){k.flags&=-257,Zv(k,s,a,o,e),k.mode&1&&Kv(o,d,e),e=k,u=d;var I=e.updateQueue;if(I===null){var L=new Set;L.add(u),e.updateQueue=L}else I.add(u);break e}else{if(!(e&1)){Kv(o,d,e),O0();break e}u=Error(B(426))}}else if(Ne&&a.mode&1){var T=Qv(s);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Zv(T,s,a,o,e),m0(Qs(u,a));break e}}o=u=Qs(u,a),ot!==4&&(ot=2),gl===null?gl=[o]:gl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var y=Lw(o,u,e);zv(o,y);break e;case 1:a=u;var g=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(li===null||!li.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=Aw(o,a,e);zv(o,w);break e}}o=o.return}while(o!==null)}Gw(n)}catch(R){e=R,et===n&&n!==null&&(et=n=n.return);continue}break}while(!0)}function qw(){var t=Ed.current;return Ed.current=_d,t===null?_d:t}function O0(){(ot===0||ot===3||ot===2)&&(ot=4),ct===null||!(so&268435455)&&!(gh&268435455)||Gr(ct,vt)}function Td(t,e){var n=ke;ke|=2;var r=qw();(ct!==t||vt!==e)&&(fr=null,Zi(t,e));do try{K4();break}catch(i){Hw(t,i)}while(!0);if(y0(),ke=n,Ed.current=r,et!==null)throw Error(B(261));return ct=null,vt=0,ot}function K4(){for(;et!==null;)Yw(et)}function Q4(){for(;et!==null&&!E6();)Yw(et)}function Yw(t){var e=Qw(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?Gw(t):et=e,P0.current=null}function Gw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=z4(n,e),n!==null){n.flags&=32767,et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ot=6,et=null;return}}else if(n=$4(n,e,on),n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);ot===0&&(ot=5)}function Wi(t,e,n){var r=Ce,i=wn.transition;try{wn.transition=null,Ce=1,Z4(t,e,n,r)}finally{wn.transition=i,Ce=r}return null}function Z4(t,e,n,r){do Ws();while(Jr!==null);if(ke&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(R6(t,o),t===ct&&(et=ct=null,vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lc||(lc=!0,Zw(od,function(){return Ws(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=wn.transition,wn.transition=null;var s=Ce;Ce=1;var a=ke;ke|=4,P0.current=null,H4(t,n),$w(n,t),y4(rm),ad=!!nm,rm=nm=null,t.current=n,q4(n),w6(),ke=a,Ce=s,wn.transition=o}else t.current=n;if(lc&&(lc=!1,Jr=t,xd=i),o=t.pendingLanes,o===0&&(li=null),I6(n.stateNode),Jt(t,Qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wd)throw wd=!1,t=xm,xm=null,t;return xd&1&&t.tag!==0&&Ws(),o=t.pendingLanes,o&1?t===Tm?yl++:(yl=0,Tm=t):yl=0,Si(),null}function Ws(){if(Jr!==null){var t=LE(xd),e=wn.transition,n=Ce;try{if(wn.transition=null,Ce=16>t?16:t,Jr===null)var r=!1;else{if(t=Jr,Jr=null,xd=0,ke&6)throw Error(B(331));var i=ke;for(ke|=4,Q=t.current;Q!==null;){var o=Q,s=o.child;if(Q.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(Q=d;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:ml(8,f,o)}var m=f.child;if(m!==null)m.return=f,Q=m;else for(;Q!==null;){f=Q;var E=f.sibling,k=f.return;if(Fw(f),f===d){Q=null;break}if(E!==null){E.return=k,Q=E;break}Q=k}}}var I=o.alternate;if(I!==null){var L=I.child;if(L!==null){I.child=null;do{var T=L.sibling;L.sibling=null,L=T}while(L!==null)}}Q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Q=s;else e:for(;Q!==null;){if(o=Q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ml(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,Q=y;break e}Q=o.return}}var g=t.current;for(Q=g;Q!==null;){s=Q;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,Q=_;else e:for(s=g;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mh(9,a)}}catch(R){qe(a,a.return,R)}if(a===s){Q=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,Q=w;break e}Q=a.return}}if(ke=i,Si(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(ah,t)}catch{}r=!0}return r}finally{Ce=n,wn.transition=e}}return!1}function c2(t,e,n){e=Qs(n,e),e=Lw(t,e,1),t=ai(t,e,1),e=Wt(),t!==null&&(cu(t,1,e),Jt(t,e))}function qe(t,e,n){if(t.tag===3)c2(t,t,n);else for(;e!==null;){if(e.tag===3){c2(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(li===null||!li.has(r))){t=Qs(n,t),t=Aw(e,t,1),e=ai(e,t,1),t=Wt(),e!==null&&(cu(e,1,t),Jt(e,t));break}}e=e.return}}function X4(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,ct===t&&(vt&n)===n&&(ot===4||ot===3&&(vt&130023424)===vt&&500>Qe()-b0?Zi(t,0):R0|=n),Jt(t,e)}function Kw(t,e){e===0&&(t.mode&1?(e=Xu,Xu<<=1,!(Xu&130023424)&&(Xu=4194304)):e=1);var n=Wt();t=Cr(t,e),t!==null&&(cu(t,e,n),Jt(t,n))}function J4(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Kw(t,n)}function eC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),Kw(t,n)}var Qw;Qw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Gt=!1,U4(t,e,n);Gt=!!(t.flags&131072)}else Gt=!1,Ne&&e.flags&1048576&&ew(e,pd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Mc(t,e),t=e.pendingProps;var i=qs(e,Rt.current);Fs(e,n),i=I0(null,e,r,t,i,n);var o=S0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xt(r)?(o=!0,hd(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_0(e),i.updater=ph,e.stateNode=i,i._reactInternals=e,hm(e,r,t,n),e=mm(null,e,r,!0,o,n)):(e.tag=0,Ne&&o&&f0(e),Vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Mc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=nC(r),t=bn(r,t),i){case 0:e=pm(null,e,r,t,n);break e;case 1:e=e2(null,e,r,t,n);break e;case 11:e=Xv(null,e,r,t,n);break e;case 14:e=Jv(null,e,r,bn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),pm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),e2(t,e,r,i,n);case 3:e:{if(jw(e),t===null)throw Error(B(387));r=e.pendingProps,o=e.memoizedState,i=o.element,sw(t,e),yd(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Qs(Error(B(423)),e),e=t2(t,e,r,n,i);break e}else if(r!==i){i=Qs(Error(B(424)),e),e=t2(t,e,r,n,i);break e}else for(an=si(e.stateNode.containerInfo.firstChild),cn=e,Ne=!0,Dn=null,n=iw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),r===i){e=Lr(t,e,n);break e}Vt(t,e,r,n)}e=e.child}return e;case 5:return aw(e),t===null&&um(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,im(r,i)?s=null:o!==null&&im(r,o)&&(e.flags|=32),bw(t,e),Vt(t,e,s,n),e.child;case 6:return t===null&&um(e),null;case 13:return Dw(t,e,n);case 4:return E0(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gs(e,null,r,n):Vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),Xv(t,e,r,i,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Re(md,r._currentValue),r._currentValue=s,o!==null)if(Wn(o.value,s)){if(o.children===i.children&&!Zt.current){e=Lr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=wr(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),cm(o.return,n,e),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(B(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),cm(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fs(e,n),i=Tn(i),r=r(i),e.flags|=1,Vt(t,e,r,n),e.child;case 14:return r=e.type,i=bn(r,e.pendingProps),i=bn(r.type,i),Jv(t,e,r,i,n);case 15:return Pw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),Mc(t,e),e.tag=1,Xt(r)?(t=!0,hd(e)):t=!1,Fs(e,n),Cw(e,r,i),hm(e,r,i,n),mm(null,e,r,!0,t,n);case 19:return Ow(t,e,n);case 22:return Rw(t,e,n)}throw Error(B(156,e.tag))};function Zw(t,e){return TE(t,e)}function tC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,r){return new tC(t,e,n,r)}function M0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nC(t){if(typeof t=="function")return M0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===t0)return 11;if(t===n0)return 14}return 2}function ci(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")M0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Es:return Xi(n.children,i,o,e);case e0:s=8,i|=8;break;case Mp:return t=_n(12,n,e,i|2),t.elementType=Mp,t.lanes=o,t;case Np:return t=_n(13,n,e,i),t.elementType=Np,t.lanes=o,t;case Vp:return t=_n(19,n,e,i),t.elementType=Vp,t.lanes=o,t;case aE:return yh(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case oE:s=10;break e;case sE:s=9;break e;case t0:s=11;break e;case n0:s=14;break e;case Hr:s=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=_n(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Xi(t,e,n,r){return t=_n(7,t,r,e),t.lanes=n,t}function yh(t,e,n,r){return t=_n(22,t,r,e),t.elementType=aE,t.lanes=n,t.stateNode={isHidden:!1},t}function Zf(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function Xf(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bf(0),this.expirationTimes=bf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function N0(t,e,n,r,i,o,s,a,u){return t=new rC(t,e,n,a,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=_n(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_0(o),t}function iC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Xw(t){if(!t)return ki;t=t._reactInternals;e:{if(vo(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Xt(n))return XE(t,n,e)}return e}function Jw(t,e,n,r,i,o,s,a,u){return t=N0(n,r,!0,t,i,o,s,a,u),t.context=Xw(null),n=t.current,r=Wt(),i=ui(n),o=wr(r,i),o.callback=e??null,ai(n,o,i),t.current.lanes=i,cu(t,i,r),Jt(t,r),t}function vh(t,e,n,r){var i=e.current,o=Wt(),s=ui(i);return n=Xw(n),e.context===null?e.context=n:e.pendingContext=n,e=wr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ai(i,e,s),t!==null&&(Vn(t,i,s,o),jc(t,i,s)),s}function Id(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function d2(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function V0(t,e){d2(t,e),(t=t.alternate)&&d2(t,e)}function oC(){return null}var ex=typeof reportError=="function"?reportError:function(t){console.error(t)};function F0(t){this._internalRoot=t}kh.prototype.render=F0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));vh(t,e,null,null)};kh.prototype.unmount=F0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ao(function(){vh(null,t,null,null)}),e[Sr]=null}};function kh(t){this._internalRoot=t}kh.prototype.unstable_scheduleHydration=function(t){if(t){var e=RE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yr.length&&e!==0&&e<Yr[n].priority;n++);Yr.splice(n,0,t),n===0&&jE(t)}};function W0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function h2(){}function sC(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Id(s);o.call(d)}}var s=Jw(e,r,t,0,null,!1,!1,"",h2);return t._reactRootContainer=s,t[Sr]=s.current,Ml(t.nodeType===8?t.parentNode:t),ao(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=Id(u);a.call(d)}}var u=N0(t,0,!1,null,null,!1,!1,"",h2);return t._reactRootContainer=u,t[Sr]=u.current,Ml(t.nodeType===8?t.parentNode:t),ao(function(){vh(e,u,n,r)}),u}function Eh(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=Id(s);a.call(u)}}vh(e,s,t,i)}else s=sC(n,e,t,i,r);return Id(s)}AE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xa(e.pendingLanes);n!==0&&(o0(e,n|1),Jt(e,Qe()),!(ke&6)&&(Zs=Qe()+500,Si()))}break;case 13:ao(function(){var r=Cr(t,1);if(r!==null){var i=Wt();Vn(r,t,1,i)}}),V0(t,1)}};s0=function(t){if(t.tag===13){var e=Cr(t,134217728);if(e!==null){var n=Wt();Vn(e,t,134217728,n)}V0(t,134217728)}};PE=function(t){if(t.tag===13){var e=ui(t),n=Cr(t,e);if(n!==null){var r=Wt();Vn(n,t,e,r)}V0(t,e)}};RE=function(){return Ce};bE=function(t,e){var n=Ce;try{return Ce=t,e()}finally{Ce=n}};Gp=function(t,e,n){switch(e){case"input":if(Up(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=dh(r);if(!i)throw Error(B(90));uE(r),Up(r,i)}}}break;case"textarea":dE(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};vE=j0;kE=ao;var aC={usingClientEntryPoint:!1,Events:[hu,Is,dh,gE,yE,j0]},Ba={findFiberByHostInstance:Hi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lC={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wE(t),t===null?null:t.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||oC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{ah=uc.inject(lC),Xn=uc}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aC;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!W0(e))throw Error(B(200));return iC(t,e,null,n)};fn.createRoot=function(t,e){if(!W0(t))throw Error(B(299));var n=!1,r="",i=ex;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=N0(t,1,!1,null,null,n,!1,r,i),t[Sr]=e.current,Ml(t.nodeType===8?t.parentNode:t),new F0(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=wE(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return ao(t)};fn.hydrate=function(t,e,n){if(!_h(e))throw Error(B(200));return Eh(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!W0(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=ex;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Jw(e,null,t,1,n??null,i,!1,o,s),t[Sr]=e.current,Ml(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new kh(e)};fn.render=function(t,e,n){if(!_h(e))throw Error(B(200));return Eh(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!_h(t))throw Error(B(40));return t._reactRootContainer?(ao(function(){Eh(null,null,t,!1,function(){t._reactRootContainer=null,t[Sr]=null})}),!0):!1};fn.unstable_batchedUpdates=j0;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_h(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Eh(t,e,n,!1,r)};fn.version="18.3.1-next-f1338f8080-20240426";function tx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tx)}catch(t){console.error(t)}}tx(),tE.exports=fn;var uC=tE.exports,nx,f2=uC;nx=f2.createRoot,f2.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hl(){return Hl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hl.apply(this,arguments)}var ei;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ei||(ei={}));const p2="popstate";function cC(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Cm("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Sd(i)}return hC(e,n,null,t)}function Ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rx(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dC(){return Math.random().toString(36).substr(2,8)}function m2(t,e){return{usr:t.state,key:t.key,idx:e}}function Cm(t,e,n,r){return n===void 0&&(n=null),Hl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?pa(e):e,{state:n,key:e&&e.key||r||dC()})}function Sd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function pa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function hC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=ei.Pop,u=null,d=f();d==null&&(d=0,s.replaceState(Hl({},s.state,{idx:d}),""));function f(){return(s.state||{idx:null}).idx}function m(){a=ei.Pop;let T=f(),y=T==null?null:T-d;d=T,u&&u({action:a,location:L.location,delta:y})}function E(T,y){a=ei.Push;let g=Cm(L.location,T,y);d=f()+1;let _=m2(g,d),w=L.createHref(g);try{s.pushState(_,"",w)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(w)}o&&u&&u({action:a,location:L.location,delta:1})}function k(T,y){a=ei.Replace;let g=Cm(L.location,T,y);d=f();let _=m2(g,d),w=L.createHref(g);s.replaceState(_,"",w),o&&u&&u({action:a,location:L.location,delta:0})}function I(T){let y=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof T=="string"?T:Sd(T);return g=g.replace(/ $/,"%20"),Ze(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let L={get action(){return a},get location(){return t(i,s)},listen(T){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(p2,m),u=T,()=>{i.removeEventListener(p2,m),u=null}},createHref(T){return e(i,T)},createURL:I,encodeLocation(T){let y=I(T);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:E,replace:k,go(T){return s.go(T)}};return L}var g2;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(g2||(g2={}));function fC(t,e,n){return n===void 0&&(n="/"),pC(t,e,n)}function pC(t,e,n,r){let i=typeof e=="string"?pa(e):e,o=U0(i.pathname||"/",n);if(o==null)return null;let s=ix(t);mC(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let d=CC(o);a=TC(s[u],d)}return a}function ix(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(Ze(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=di([r,u.relativePath]),f=n.concat(u);o.children&&o.children.length>0&&(Ze(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),ix(o.children,e,f,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:wC(d,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let u of ox(o.path))i(o,s,u)}),e}function ox(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=ox(r.join("/")),a=[];return a.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...s),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function mC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:xC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const gC=/^:[\w-]+$/,yC=3,vC=2,kC=1,_C=10,EC=-2,y2=t=>t==="*";function wC(t,e){let n=t.split("/"),r=n.length;return n.some(y2)&&(r+=EC),e&&(r+=vC),n.filter(i=>!y2(i)).reduce((i,o)=>i+(gC.test(o)?yC:o===""?kC:_C),r)}function xC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function TC(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],d=a===r.length-1,f=o==="/"?e:e.slice(o.length)||"/",m=IC({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),E=u.route;if(!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:di([o,m.pathname]),pathnameBase:RC(di([o,m.pathnameBase])),route:E}),m.pathnameBase!=="/"&&(o=di([o,m.pathnameBase]))}return s}function IC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=SC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:E,isOptional:k}=f;if(E==="*"){let L=a[m]||"";s=o.slice(0,o.length-L.length).replace(/(.)\/+$/,"$1")}const I=a[m];return k&&!I?d[E]=void 0:d[E]=(I||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:t}}function SC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),rx(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function CC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return rx(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function U0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function LC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?pa(t):t;return{pathname:n?n.startsWith("/")?n:AC(n,e):e,search:bC(r),hash:jC(i)}}function AC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Jf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function PC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $0(t,e){let n=PC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function z0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=pa(t):(i=Hl({},t),Ze(!i.pathname||!i.pathname.includes("?"),Jf("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),Jf("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),Jf("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let m=e.length-1;if(!r&&s.startsWith("..")){let E=s.split("/");for(;E[0]==="..";)E.shift(),m-=1;i.pathname=E.join("/")}a=m>=0?e[m]:"/"}let u=LC(i,a),d=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const di=t=>t.join("/").replace(/\/\/+/g,"/"),RC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),bC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,jC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function DC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const sx=["post","put","patch","delete"];new Set(sx);const OC=["get",...sx];new Set(OC);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ql(){return ql=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ql.apply(this,arguments)}const B0=M.createContext(null),MC=M.createContext(null),Ci=M.createContext(null),wh=M.createContext(null),Li=M.createContext({outlet:null,matches:[],isDataRoute:!1}),ax=M.createContext(null);function NC(t,e){let{relative:n}=e===void 0?{}:e;ma()||Ze(!1);let{basename:r,navigator:i}=M.useContext(Ci),{hash:o,pathname:s,search:a}=ux(t,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:di([r,s])),i.createHref({pathname:u,search:a,hash:o})}function ma(){return M.useContext(wh)!=null}function ga(){return ma()||Ze(!1),M.useContext(wh).location}function lx(t){M.useContext(Ci).static||M.useLayoutEffect(t)}function ya(){let{isDataRoute:t}=M.useContext(Li);return t?QC():VC()}function VC(){ma()||Ze(!1);let t=M.useContext(B0),{basename:e,future:n,navigator:r}=M.useContext(Ci),{matches:i}=M.useContext(Li),{pathname:o}=ga(),s=JSON.stringify($0(i,n.v7_relativeSplatPath)),a=M.useRef(!1);return lx(()=>{a.current=!0}),M.useCallback(function(d,f){if(f===void 0&&(f={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let m=z0(d,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:di([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,s,o,t])}function ux(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(Ci),{matches:i}=M.useContext(Li),{pathname:o}=ga(),s=JSON.stringify($0(i,r.v7_relativeSplatPath));return M.useMemo(()=>z0(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function FC(t,e){return WC(t,e)}function WC(t,e,n,r){ma()||Ze(!1);let{navigator:i,static:o}=M.useContext(Ci),{matches:s}=M.useContext(Li),a=s[s.length-1],u=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let f=ga(),m;if(e){var E;let y=typeof e=="string"?pa(e):e;d==="/"||(E=y.pathname)!=null&&E.startsWith(d)||Ze(!1),m=y}else m=f;let k=m.pathname||"/",I=k;if(d!=="/"){let y=d.replace(/^\//,"").split("/");I="/"+k.replace(/^\//,"").split("/").slice(y.length).join("/")}let L=fC(t,{pathname:I}),T=HC(L&&L.map(y=>Object.assign({},y,{params:Object.assign({},u,y.params),pathname:di([d,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:di([d,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return e&&T?M.createElement(wh.Provider,{value:{location:ql({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:ei.Pop}},T):T}function UC(){let t=KC(),e=DC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const $C=M.createElement(UC,null);class zC extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(Li.Provider,{value:this.props.routeContext},M.createElement(ax.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function BC(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(B0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Li.Provider,{value:e},r)}function HC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);f>=0||Ze(!1),s=s.slice(0,Math.min(s.length,f+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let m=s[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:E,errors:k}=n,I=m.route.loader&&E[m.route.id]===void 0&&(!k||k[m.route.id]===void 0);if(m.route.lazy||I){u=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((f,m,E)=>{let k,I=!1,L=null,T=null;n&&(k=a&&m.route.id?a[m.route.id]:void 0,L=m.route.errorElement||$C,u&&(d<0&&E===0?(ZC("route-fallback"),I=!0,T=null):d===E&&(I=!0,T=m.route.hydrateFallbackElement||null)));let y=e.concat(s.slice(0,E+1)),g=()=>{let _;return k?_=L:I?_=T:m.route.Component?_=M.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=f,M.createElement(BC,{match:m,routeContext:{outlet:f,matches:y,isDataRoute:n!=null},children:_})};return n&&(m.route.ErrorBoundary||m.route.errorElement||E===0)?M.createElement(zC,{location:n.location,revalidation:n.revalidation,component:L,error:k,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var cx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(cx||{}),dx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(dx||{});function qC(t){let e=M.useContext(B0);return e||Ze(!1),e}function YC(t){let e=M.useContext(MC);return e||Ze(!1),e}function GC(t){let e=M.useContext(Li);return e||Ze(!1),e}function hx(t){let e=GC(),n=e.matches[e.matches.length-1];return n.route.id||Ze(!1),n.route.id}function KC(){var t;let e=M.useContext(ax),n=YC(),r=hx();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function QC(){let{router:t}=qC(cx.UseNavigateStable),e=hx(dx.UseNavigateStable),n=M.useRef(!1);return lx(()=>{n.current=!0}),M.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ql({fromRouteId:e},o)))},[t,e])}const v2={};function ZC(t,e,n){v2[t]||(v2[t]=!0)}function XC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function fx(t){let{to:e,replace:n,state:r,relative:i}=t;ma()||Ze(!1);let{future:o,static:s}=M.useContext(Ci),{matches:a}=M.useContext(Li),{pathname:u}=ga(),d=ya(),f=z0(e,$0(a,o.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(f);return M.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function el(t){Ze(!1)}function JC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ei.Pop,navigator:o,static:s=!1,future:a}=t;ma()&&Ze(!1);let u=e.replace(/^\/*/,"/"),d=M.useMemo(()=>({basename:u,navigator:o,static:s,future:ql({v7_relativeSplatPath:!1},a)}),[u,a,o,s]);typeof r=="string"&&(r=pa(r));let{pathname:f="/",search:m="",hash:E="",state:k=null,key:I="default"}=r,L=M.useMemo(()=>{let T=U0(f,u);return T==null?null:{location:{pathname:T,search:m,hash:E,state:k,key:I},navigationType:i}},[u,f,m,E,k,I,i]);return L==null?null:M.createElement(Ci.Provider,{value:d},M.createElement(wh.Provider,{children:n,value:L}))}function eL(t){let{children:e,location:n}=t;return FC(Lm(e),n)}new Promise(()=>{});function Lm(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let o=[...e,i];if(r.type===M.Fragment){n.push.apply(n,Lm(r.props.children,o));return}r.type!==el&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Lm(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Am(){return Am=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Am.apply(this,arguments)}function tL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function nL(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function rL(t,e){return t.button===0&&(!e||e==="_self")&&!nL(t)}const iL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],oL="6";try{window.__reactRouterVersion=oL}catch{}const sL="startTransition",k2=XS[sL];function aL(t){let{basename:e,children:n,future:r,window:i}=t,o=M.useRef();o.current==null&&(o.current=cC({window:i,v5Compat:!0}));let s=o.current,[a,u]=M.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},f=M.useCallback(m=>{d&&k2?k2(()=>u(m)):u(m)},[u,d]);return M.useLayoutEffect(()=>s.listen(f),[s,f]),M.useEffect(()=>XC(r),[r]),M.createElement(JC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const lL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,px=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:u,to:d,preventScrollReset:f,viewTransition:m}=e,E=tL(e,iL),{basename:k}=M.useContext(Ci),I,L=!1;if(typeof d=="string"&&uL.test(d)&&(I=d,lL))try{let _=new URL(window.location.href),w=d.startsWith("//")?new URL(_.protocol+d):new URL(d),R=U0(w.pathname,k);w.origin===_.origin&&R!=null?d=R+w.search+w.hash:L=!0}catch{}let T=NC(d,{relative:i}),y=cL(d,{replace:s,state:a,target:u,preventScrollReset:f,relative:i,viewTransition:m});function g(_){r&&r(_),_.defaultPrevented||y(_)}return M.createElement("a",Am({},E,{href:I||T,onClick:L||o?r:g,ref:n,target:u}))});var _2;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(_2||(_2={}));var E2;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(E2||(E2={}));function cL(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,u=ya(),d=ga(),f=ux(t,{relative:s});return M.useCallback(m=>{if(rL(m,n)){m.preventDefault();let E=r!==void 0?r:Sd(d)===Sd(f);u(t,{replace:E,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[d,u,f,r,i,n,t,o,s,a])}var w2={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dL=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},gx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=o>>2,m=(o&3)<<4|a>>4;let E=(a&15)<<2|d>>6,k=d&63;u||(k=64,s||(E=64)),r.push(n[f],n[m],n[E],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||d==null||m==null)throw new hL;const E=o<<2|a>>4;if(r.push(E),d!==64){const k=a<<4&240|d>>2;if(r.push(k),m!==64){const I=d<<6&192|m;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fL=function(t){const e=mx(t);return gx.encodeByteArray(e,!0)},Cd=function(t){return fL(t).replace(/\./g,"")},yx=function(t){try{return gx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mL=()=>pL().__FIREBASE_DEFAULTS__,gL=()=>{if(typeof process>"u"||typeof w2>"u")return;const t=w2.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yx(t[1]);return e&&JSON.parse(e)},xh=()=>{try{return mL()||gL()||yL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vx=t=>{var e,n;return(n=(e=xh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kx=t=>{const e=vx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_x=()=>{var t;return(t=xh())===null||t===void 0?void 0:t.config},Ex=t=>{var e;return(e=xh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function wx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Cd(JSON.stringify(n)),Cd(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function _L(){var t;const e=(t=xh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function EL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xL(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function TL(){return!_L()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tx(){try{return typeof indexedDB=="object"}catch{return!1}}function Ix(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function IL(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SL="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SL,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ko.prototype.create)}}class ko{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?CL(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Ln(i,a,r)}}function CL(t,e){return t.replace(LL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LL=/\{\$([^}]+)}/g;function AL(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(x2(o)&&x2(s)){if(!Yl(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function x2(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function nl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function PL(t,e){const n=new RL(t,e);return n.subscribe.bind(n)}class RL{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bL(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ep),i.error===void 0&&(i.error=ep),i.complete===void 0&&(i.complete=ep);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bL(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ep(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL=1e3,DL=2,OL=4*60*60*1e3,ML=.5;function T2(t,e=jL,n=DL){const r=e*Math.pow(n,t),i=Math.round(ML*r*(Math.random()-.5)*2);return Math.min(OL,r+i)}/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}class Sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class NL{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FL(e))try{this.getOrInitializeService({instanceIdentifier:Ui})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ui){return this.instances.has(e)}getOptions(e=Ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VL(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ui){return this.component?this.component.multipleInstances?e:Ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VL(t){return t===Ui?void 0:t}function FL(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new NL(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const UL={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},$L=ge.INFO,zL={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},BL=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zL[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Th{constructor(e){this.name=e,this._logLevel=$L,this._logHandler=BL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const HL=(t,e)=>e.some(n=>t instanceof n);let I2,S2;function qL(){return I2||(I2=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YL(){return S2||(S2=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sx=new WeakMap,Pm=new WeakMap,Cx=new WeakMap,tp=new WeakMap,H0=new WeakMap;function GL(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(hi(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Sx.set(n,t)}).catch(()=>{}),H0.set(e,t),e}function KL(t){if(Pm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Pm.set(t,e)}let Rm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QL(t){Rm=t(Rm)}function ZL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(np(this),e,...n);return Cx.set(r,e.sort?e.sort():[e]),hi(r)}:YL().includes(t)?function(...e){return t.apply(np(this),e),hi(Sx.get(this))}:function(...e){return hi(t.apply(np(this),e))}}function XL(t){return typeof t=="function"?ZL(t):(t instanceof IDBTransaction&&KL(t),HL(t,qL())?new Proxy(t,Rm):t)}function hi(t){if(t instanceof IDBRequest)return GL(t);if(tp.has(t))return tp.get(t);const e=XL(t);return e!==t&&(tp.set(t,e),H0.set(e,t)),e}const np=t=>H0.get(t);function Lx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=hi(s);return r&&s.addEventListener("upgradeneeded",u=>{r(hi(s.result),u.oldVersion,u.newVersion,hi(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const JL=["get","getKey","getAll","getAllKeys","count"],eA=["put","add","delete","clear"],rp=new Map;function C2(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rp.get(e))return rp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=eA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||JL.includes(n)))return;const o=async function(s,...a){const u=this.transaction(s,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&u.done]))[0]};return rp.set(e,o),o}QL(t=>({...t,get:(e,n,r)=>C2(e,n)||t.get(e,n,r),has:(e,n)=>!!C2(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bm="@firebase/app",L2="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Th("@firebase/app"),rA="@firebase/app-compat",iA="@firebase/analytics-compat",oA="@firebase/analytics",sA="@firebase/app-check-compat",aA="@firebase/app-check",lA="@firebase/auth",uA="@firebase/auth-compat",cA="@firebase/database",dA="@firebase/data-connect",hA="@firebase/database-compat",fA="@firebase/functions",pA="@firebase/functions-compat",mA="@firebase/installations",gA="@firebase/installations-compat",yA="@firebase/messaging",vA="@firebase/messaging-compat",kA="@firebase/performance",_A="@firebase/performance-compat",EA="@firebase/remote-config",wA="@firebase/remote-config-compat",xA="@firebase/storage",TA="@firebase/storage-compat",IA="@firebase/firestore",SA="@firebase/vertexai-preview",CA="@firebase/firestore-compat",LA="firebase",AA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="[DEFAULT]",PA={[bm]:"fire-core",[rA]:"fire-core-compat",[oA]:"fire-analytics",[iA]:"fire-analytics-compat",[aA]:"fire-app-check",[sA]:"fire-app-check-compat",[lA]:"fire-auth",[uA]:"fire-auth-compat",[cA]:"fire-rtdb",[dA]:"fire-data-connect",[hA]:"fire-rtdb-compat",[fA]:"fire-fn",[pA]:"fire-fn-compat",[mA]:"fire-iid",[gA]:"fire-iid-compat",[yA]:"fire-fcm",[vA]:"fire-fcm-compat",[kA]:"fire-perf",[_A]:"fire-perf-compat",[EA]:"fire-rc",[wA]:"fire-rc-compat",[xA]:"fire-gcs",[TA]:"fire-gcs-compat",[IA]:"fire-fst",[CA]:"fire-fst-compat",[SA]:"fire-vertex","fire-js":"fire-js",[LA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=new Map,RA=new Map,Dm=new Map;function A2(t,e){try{t.container.addComponent(e)}catch(n){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Un(t){const e=t.name;if(Dm.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;Dm.set(e,t);for(const n of Ld.values())A2(n,t);for(const n of RA.values())A2(n,t);return!0}function Ai(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fi=new ko("app","Firebase",bA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=AA;function Ax(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fi.create("bad-app-name",{appName:String(i)});if(n||(n=_x()),!n)throw fi.create("no-options");const o=Ld.get(i);if(o){if(Yl(n,o.options)&&Yl(r,o.config))return o;throw fi.create("duplicate-app",{appName:i})}const s=new WL(i);for(const u of Dm.values())s.addComponent(u);const a=new jA(n,r,s);return Ld.set(i,a),a}function Ih(t=jm){const e=Ld.get(t);if(!e&&t===jm&&_x())return Ax();if(!e)throw fi.create("no-app",{appName:t});return e}function en(t,e,n){var r;let i=(r=PA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(a.join(" "));return}Un(new Sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const DA="firebase-heartbeat-database",OA=1,Gl="firebase-heartbeat-store";let ip=null;function Px(){return ip||(ip=Lx(DA,OA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Gl)}catch(n){console.warn(n)}}}}).catch(t=>{throw fi.create("idb-open",{originalErrorMessage:t.message})})),ip}async function MA(t){try{const n=(await Px()).transaction(Gl),r=await n.objectStore(Gl).get(Rx(t));return await n.done,r}catch(e){if(e instanceof Ln)Ar.warn(e.message);else{const n=fi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ar.warn(n.message)}}}async function P2(t,e){try{const r=(await Px()).transaction(Gl,"readwrite");await r.objectStore(Gl).put(e,Rx(t)),await r.done}catch(n){if(n instanceof Ln)Ar.warn(n.message);else{const r=fi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ar.warn(r.message)}}}function Rx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const NA=1024,VA=30*24*60*60*1e3;class FA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new UA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=R2();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=VA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ar.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=R2(),{heartbeatsToSend:r,unsentEntries:i}=WA(this._heartbeatsCache.heartbeats),o=Cd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Ar.warn(n),""}}}function R2(){return new Date().toISOString().substring(0,10)}function WA(t,e=NA){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),b2(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),b2(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class UA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tx()?Ix().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await MA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return P2(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return P2(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function b2(t){return Cd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){Un(new Sn("platform-logger",e=>new tA(e),"PRIVATE")),Un(new Sn("heartbeat",e=>new FA(e),"PRIVATE")),en(bm,L2,t),en(bm,L2,"esm2017"),en("fire-js","")}$A("");function q0(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function bx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zA=bx,jx=new ko("auth","Firebase",bx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=new Th("@firebase/auth");function BA(t,...e){Ad.logLevel<=ge.WARN&&Ad.warn(`Auth (${_o}): ${t}`,...e)}function Wc(t,...e){Ad.logLevel<=ge.ERROR&&Ad.error(`Auth (${_o}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,...e){throw Y0(t,...e)}function er(t,...e){return Y0(t,...e)}function Dx(t,e,n){const r=Object.assign(Object.assign({},zA()),{[e]:n});return new ko("auth","Firebase",r).create(e,{appName:t.name})}function xr(t){return Dx(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Y0(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jx.create(t,...e)}function te(t,e,...n){if(!t)throw Y0(e,...n)}function kr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wc(e),new Error(e)}function Pr(t,e){t||kr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HA(){return j2()==="http:"||j2()==="https:"}function j2(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HA()||xx()||"connection"in navigator)?navigator.onLine:!0}function YA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pr(n>e,"Short delay should be less than long delay!"),this.isMobile=kL()||wL()}get(){return qA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t,e){Pr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=new mu(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function sr(t,e,n,r,i={}){return Mx(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=pu(Object.assign({key:t.config.apiKey},s)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},o);return EL()||(d.referrerPolicy="no-referrer"),Ox.fetch()(Nx(t,t.config.apiHost,n,a),d)})}async function Mx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GA),e);try{const i=new ZA(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw cc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[u,d]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw cc(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw cc(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw cc(t,"user-disabled",s);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Dx(t,f,d);$n(t,f)}}catch(i){if(i instanceof Ln)throw i;$n(t,"network-request-failed",{message:String(i)})}}async function gu(t,e,n,r,i={}){const o=await sr(t,e,n,r,i);return"mfaPendingCredential"in o&&$n(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Nx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?G0(t.config,i):`${t.config.apiScheme}://${i}`}function QA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(er(this.auth,"network-request-failed")),KA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=er(t,e,r);return i.customData._tokenResponse=n,i}function D2(t){return t!==void 0&&t.enterprise!==void 0}class XA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return QA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function JA(t,e){return sr(t,"GET","/v2/recaptchaConfig",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(t,e){return sr(t,"POST","/v1/accounts:delete",e)}async function Vx(t,e){return sr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tP(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),i=K0(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:vl(op(i.auth_time)),issuedAtTime:vl(op(i.iat)),expirationTime:vl(op(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function op(t){return Number(t)*1e3}function K0(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wc("JWT malformed, contained fewer than 3 sections"),null;try{const i=yx(n);return i?JSON.parse(i):(Wc("Failed to decode base64 JWT payload"),null)}catch(i){return Wc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function O2(t){const e=K0(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&nP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vl(this.lastLoginAt),this.creationTime=vl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xs(t,Vx(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Fx(o.providerUserInfo):[],a=oP(t.providerData,s),u=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=u?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Mm(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function iP(t){const e=Ue(t);await Pd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Fx(t){return t.map(e=>{var{providerId:n}=e,r=q0(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sP(t,e){const n=await Mx(t,{},async()=>{const r=pu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Nx(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ox.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aP(t,e){return sr(t,"POST","/v2/accounts:revokeToken",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):O2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=O2(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await sP(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Us;return r&&(te(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(te(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _r{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=q0(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Mm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Xs(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tP(this,e)}reload(){return iP(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qn(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await Xs(this,eP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,u,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,E=(i=n.email)!==null&&i!==void 0?i:void 0,k=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,I=(s=n.photoURL)!==null&&s!==void 0?s:void 0,L=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,y=(d=n.createdAt)!==null&&d!==void 0?d:void 0,g=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:_,emailVerified:w,isAnonymous:R,providerData:O,stsTokenManager:x}=n;te(_&&x,e,"internal-error");const S=Us.fromJSON(this.name,x);te(typeof _=="string",e,"internal-error"),Fr(m,e.name),Fr(E,e.name),te(typeof w=="boolean",e,"internal-error"),te(typeof R=="boolean",e,"internal-error"),Fr(k,e.name),Fr(I,e.name),Fr(L,e.name),Fr(T,e.name),Fr(y,e.name),Fr(g,e.name);const A=new _r({uid:_,auth:e,email:E,emailVerified:w,displayName:m,isAnonymous:R,photoURL:I,phoneNumber:k,tenantId:L,stsTokenManager:S,createdAt:y,lastLoginAt:g});return O&&Array.isArray(O)&&(A.providerData=O.map(b=>Object.assign({},b))),T&&(A._redirectEventId=T),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Us;i.updateFromServerResponse(n);const o=new _r({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Pd(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Fx(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Us;a.updateFromIdToken(r);const u=new _r({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Mm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=new Map;function Er(t){Pr(t instanceof Function,"Expected a class definition");let e=M2.get(t);return e?(Pr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,M2.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wx.type="NONE";const N2=Wx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t,e,n){return`firebase:${t}:${e}:${n}`}class $s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Uc(this.userKey,i.apiKey,o),this.fullPersistenceKey=Uc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $s(Er(N2),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Er(N2);const s=Uc(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const f=await d._get(s);if(f){const m=_r._fromJSON(e,f);d!==o&&(a=m),o=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new $s(o,e,r):(o=u[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(s)}catch{}})),new $s(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ux(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qx(e))return"Blackberry";if(Yx(e))return"Webos";if($x(e))return"Safari";if((e.includes("chrome/")||zx(e))&&!e.includes("edge/"))return"Chrome";if(Hx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ux(t=bt()){return/firefox\//i.test(t)}function $x(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zx(t=bt()){return/crios\//i.test(t)}function Bx(t=bt()){return/iemobile/i.test(t)}function Hx(t=bt()){return/android/i.test(t)}function qx(t=bt()){return/blackberry/i.test(t)}function Yx(t=bt()){return/webos/i.test(t)}function Q0(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lP(t=bt()){var e;return Q0(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uP(){return xL()&&document.documentMode===10}function Gx(t=bt()){return Q0(t)||Hx(t)||Yx(t)||qx(t)||/windows phone/i.test(t)||Bx(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t,e=[]){let n;switch(t){case"Browser":n=V2(bt());break;case"Worker":n=`${V2(bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_o}/${r}`}/**
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
 */class cP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const u=e(o);s(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function dP(t,e={}){return sr(t,"GET","/v2/passwordPolicy",Dr(t,e))}/**
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
 */const hP=6;class fP{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:hP,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(s=u.containsNumericCharacter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new F2(this),this.idTokenSubscription=new F2(this),this.beforeStateQueue=new cP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $s.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vx(this,{idToken:e}),r=await _r._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!s||s===a)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qn(this.app))return Promise.reject(xr(this));const n=e?Ue(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qn(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qn(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dP(this),n=new fP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ko("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Er(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await $s.create(this,[Er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{s=!0,u()}}else{const u=e.addObserver(n);return()=>{s=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&BA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pi(t){return Ue(t)}class F2{constructor(e){this.auth=e,this.observer=null,this.addObserver=PL(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mP(t){Sh=t}function Qx(t){return Sh.loadJS(t)}function gP(){return Sh.recaptchaEnterpriseScript}function yP(){return Sh.gapiScript}function vP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const kP="recaptcha-enterprise",_P="NO_RECAPTCHA";class EP{constructor(e){this.type=kP,this.auth=Pi(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{JA(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new XA(u);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,s(d.siteKey)}}).catch(u=>{a(u)})})}function i(o,s,a){const u=window.grecaptcha;D2(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(d=>{s(d)}).catch(()=>{s(_P)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&D2(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let u=gP();u.length!==0&&(u+=a),Qx(u).then(()=>{i(a,o,s)}).catch(d=>{s(d)})}}).catch(a=>{s(a)})})}}async function W2(t,e,n,r=!1){const i=new EP(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Rd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await W2(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await W2(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t,e){const n=Ai(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Yl(o,e??{}))return i;$n(i,"already-initialized")}return n.initialize({options:e})}function xP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TP(t,e,n){const r=Pi(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Zx(e),{host:s,port:a}=IP(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),SP()}function Zx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function IP(t){const e=Zx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:U2(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:U2(s)}}}function U2(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,n){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}async function CP(t,e){return sr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LP(t,e){return gu(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}async function AP(t,e){return sr(t,"POST","/v1/accounts:sendOobCode",Dr(t,e))}async function PP(t,e){return AP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RP(t,e){return gu(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function bP(t,e){return gu(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends Z0{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Kl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Kl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rd(e,n,"signInWithPassword",LP);case"emailLink":return RP(e,{email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rd(e,r,"signUpPassword",CP);case"emailLink":return bP(e,{idToken:n,email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t,e){return gu(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP="http://localhost";class lo extends Z0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=q0(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new lo(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zs(e,n)}buildRequest(){const e={requestUri:jP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OP(t){const e=tl(nl(t)).link,n=e?tl(nl(e)).deep_link_id:null,r=tl(nl(t)).deep_link_id;return(r?tl(nl(r)).link:null)||r||n||e||t}class X0{constructor(e){var n,r,i,o,s,a;const u=tl(nl(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=DP((i=u.mode)!==null&&i!==void 0?i:null);te(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=u.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=OP(e);try{return new X0(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.providerId=va.PROVIDER_ID}static credential(e,n){return Kl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=X0.parseLink(n);return te(r,"argument-error"),Kl._fromEmailAndCode(e,r.code,r.tenantId)}}va.PROVIDER_ID="password";va.EMAIL_PASSWORD_SIGN_IN_METHOD="password";va.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yu extends Xx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends yu{constructor(){super("facebook.com")}static credential(e){return lo._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends yu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lo._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com";gr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends yu{constructor(){super("github.com")}static credential(e){return lo._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.GITHUB_SIGN_IN_METHOD="github.com";Qr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends yu{constructor(){super("twitter.com")}static credential(e,n){return lo._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zr.credential(n,r)}catch{return null}}}Zr.TWITTER_SIGN_IN_METHOD="twitter.com";Zr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MP(t,e){return gu(t,"POST","/v1/accounts:signUp",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await _r._fromIdTokenResponse(e,r,i),s=$2(r);return new uo({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=$2(r);return new uo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function $2(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd extends Ln{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bd.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new bd(e,n,r,i)}}function Jx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?bd._fromErrorAndOperation(t,o,e,r):o})}async function NP(t,e,n=!1){const r=await Xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return uo._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t,e,n=!1){const{auth:r}=t;if(Qn(r.app))return Promise.reject(xr(r));const i="reauthenticate";try{const o=await Xs(t,Jx(r,i,e,t),n);te(o.idToken,r,"internal-error");const s=K0(o.idToken);te(s,r,"internal-error");const{sub:a}=s;return te(t.uid===a,r,"user-mismatch"),uo._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&$n(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(t,e,n=!1){if(Qn(t.app))return Promise.reject(xr(t));const r="signIn",i=await Jx(t,r,e),o=await uo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function FP(t,e){return eT(Pi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT(t){const e=Pi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function WP(t,e,n){const r=Pi(t);await Rd(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",PP)}async function UP(t,e,n){if(Qn(t.app))return Promise.reject(xr(t));const r=Pi(t),s=await Rd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",MP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&tT(t),u}),a=await uo._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function $P(t,e,n){return Qn(t.app)?Promise.reject(xr(t)):FP(Ue(t),va.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tT(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(t,e){return sr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ue(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await Xs(r,zP(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function HP(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function qP(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function YP(t,e,n,r){return Ue(t).onAuthStateChanged(e,n,r)}function GP(t){return Ue(t).signOut()}async function KP(t){return Ue(t).delete()}const jd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jd,"1"),this.storage.removeItem(jd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=1e3,ZP=10;class rT extends nT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,u)=>{this.notifyListeners(s,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);uP()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ZP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rT.type="LOCAL";const XP=rT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function JP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ch(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async d=>d(n.origin,o)),u=await JP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ch.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,u)=>{const d=J0("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const E=m;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(E.data.response);break;default:clearTimeout(f),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return window}function tR(t){tr().location.href=t}/**
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
 */function sT(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function nR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iR(){return sT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="firebaseLocalStorageDb",oR=1,Dd="firebaseLocalStorage",lT="fbase_key";class vu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lh(t,e){return t.transaction([Dd],e?"readwrite":"readonly").objectStore(Dd)}function sR(){const t=indexedDB.deleteDatabase(aT);return new vu(t).toPromise()}function Nm(){const t=indexedDB.open(aT,oR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Dd,{keyPath:lT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Dd)?e(r):(r.close(),await sR(),e(await Nm()))})})}async function z2(t,e,n){const r=Lh(t,!0).put({[lT]:e,value:n});return new vu(r).toPromise()}async function aR(t,e){const n=Lh(t,!1).get(e),r=await new vu(n).toPromise();return r===void 0?null:r.value}function B2(t,e){const n=Lh(t,!0).delete(e);return new vu(n).toPromise()}const lR=800,uR=3;class uT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ch._getInstance(iR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nR(),!this.activeServiceWorker)return;this.sender=new eR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nm();return await z2(e,jd,"1"),await B2(e,jd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>z2(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>B2(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Lh(i,!1).getAll();return new vu(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uT.type="LOCAL";const cR=uT;new mu(3e4,6e4);/**
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
 */function dR(t,e){return e?Er(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1 extends Z0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hR(t){return eT(t.auth,new e1(t),t.bypassAuthState)}function fR(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),VP(n,new e1(t),t.bypassAuthState)}async function pR(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),NP(n,new e1(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hR;case"linkViaPopup":case"linkViaRedirect":return pR;case"reauthViaPopup":case"reauthViaRedirect":return fR;default:$n(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=new mu(2e3,1e4);class bs extends cT{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=J0();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mR.get())};e()}}bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR="pendingRedirect",$c=new Map;class yR extends cT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$c.get(this.auth._key());if(!e){try{const r=await vR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$c.set(this.auth._key(),e)}return this.bypassAuthState||$c.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vR(t,e){const n=ER(e),r=_R(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kR(t,e){$c.set(t._key(),e)}function _R(t){return Er(t._redirectPersistence)}function ER(t){return Uc(gR,t.config.apiKey,t.name)}async function wR(t,e,n=!1){if(Qn(t.app))return Promise.reject(xr(t));const r=Pi(t),i=dR(r,e),s=await new yR(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=10*60*1e3;class TR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(er(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xR&&this.cachedEventUids.clear(),this.cachedEventUids.has(H2(e))}saveEventToCache(e){this.cachedEventUids.add(H2(e)),this.lastProcessedEventTime=Date.now()}}function H2(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(t,e={}){return sr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LR=/^https?/;async function AR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SR(t);for(const n of e)try{if(PR(n))return}catch{}$n(t,"unauthorized-domain")}function PR(t){const e=Om(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!LR.test(n))return!1;if(CR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const RR=new mu(3e4,6e4);function q2(){const t=tr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bR(t){return new Promise((e,n)=>{var r,i,o;function s(){q2(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{q2(),n(er(t,"network-request-failed"))},timeout:RR.get()})}if(!((i=(r=tr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=tr().gapi)===null||o===void 0)&&o.load)s();else{const a=vP("iframefcb");return tr()[a]=()=>{gapi.load?s():n(er(t,"network-request-failed"))},Qx(`${yP()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw zc=null,e})}let zc=null;function jR(t){return zc=zc||bR(t),zc}/**
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
 */const DR=new mu(5e3,15e3),OR="__/auth/iframe",MR="emulator/auth/iframe",NR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FR(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?G0(e,MR):`https://${t.config.authDomain}/${OR}`,r={apiKey:e.apiKey,appName:t.name,v:_o},i=VR.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${pu(r).slice(1)}`}async function WR(t){const e=await jR(t),n=tr().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:FR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=er(t,"network-request-failed"),a=tr().setTimeout(()=>{o(s)},DR.get());function u(){tr().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{o(s)})}))}/**
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
 */const UR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$R=500,zR=600,BR="_blank",HR="http://localhost";class Y2{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qR(t,e,n,r=$R,i=zR){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},UR),{width:r.toString(),height:i.toString(),top:o,left:s}),d=bt().toLowerCase();n&&(a=zx(d)?BR:n),Ux(d)&&(e=e||HR,u.scrollbars="yes");const f=Object.entries(u).reduce((E,[k,I])=>`${E}${k}=${I},`,"");if(lP(d)&&a!=="_self")return YR(e||"",a),new Y2(null);const m=window.open(e||"",a,f);te(m,t,"popup-blocked");try{m.focus()}catch{}return new Y2(m)}function YR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const GR="__/auth/handler",KR="emulator/auth/handler",QR=encodeURIComponent("fac");async function G2(t,e,n,r,i,o){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_o,eventId:i};if(e instanceof Xx){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",AL(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))s[f]=m}if(e instanceof yu){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const u=await t._getAppCheckToken(),d=u?`#${QR}=${encodeURIComponent(u)}`:"";return`${ZR(t)}?${pu(a).slice(1)}${d}`}function ZR({config:t}){return t.emulator?G0(t,KR):`https://${t.authDomain}/${GR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="webStorageSupport";class XR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oT,this._completeRedirectFn=wR,this._overrideRedirectResult=kR}async _openPopup(e,n,r,i){var o;Pr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await G2(e,n,r,Om(),i);return qR(e,s,J0())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await G2(e,n,r,Om(),i);return tR(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Pr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WR(e),r=new TR(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sp,{type:sp},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[sp];s!==void 0&&n(!!s),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gx()||$x()||Q0()}}const JR=XR;var K2="@firebase/auth",Q2="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nb(t){Un(new Sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;te(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kx(t)},d=new pP(r,i,o,u);return xP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Un(new Sn("auth-internal",e=>{const n=Pi(e.getProvider("auth").getImmediate());return(r=>new eb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(K2,Q2,tb(t)),en(K2,Q2,"esm2017")}/**
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
 */const rb=5*60,ib=Ex("authIdTokenMaxAge")||rb;let Z2=null;const ob=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ib)return;const i=n==null?void 0:n.token;Z2!==i&&(Z2=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hT(t=Ih()){const e=Ai(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wP(t,{popupRedirectResolver:JR,persistence:[cR,XP,oT]}),r=Ex("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=ob(o.toString());qP(n,s,()=>s(n.currentUser)),HP(n,a=>s(a))}}const i=vx("auth");return i&&TP(n,`http://${i}`),n}function sb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=er("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",sb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nb("Browser");var ab="firebase",lb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(ab,lb,"app");var X2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ji,fT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function A(){}A.prototype=S.prototype,x.D=S.prototype,x.prototype=new A,x.prototype.constructor=x,x.C=function(b,j,D){for(var P=Array(arguments.length-2),q=2;q<arguments.length;q++)P[q-2]=arguments[q];return S.prototype[j].apply(b,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(x,S,A){A||(A=0);var b=Array(16);if(typeof S=="string")for(var j=0;16>j;++j)b[j]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(j=0;16>j;++j)b[j]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=x.g[0],A=x.g[1],j=x.g[2];var D=x.g[3],P=S+(D^A&(j^D))+b[0]+3614090360&4294967295;S=A+(P<<7&4294967295|P>>>25),P=D+(j^S&(A^j))+b[1]+3905402710&4294967295,D=S+(P<<12&4294967295|P>>>20),P=j+(A^D&(S^A))+b[2]+606105819&4294967295,j=D+(P<<17&4294967295|P>>>15),P=A+(S^j&(D^S))+b[3]+3250441966&4294967295,A=j+(P<<22&4294967295|P>>>10),P=S+(D^A&(j^D))+b[4]+4118548399&4294967295,S=A+(P<<7&4294967295|P>>>25),P=D+(j^S&(A^j))+b[5]+1200080426&4294967295,D=S+(P<<12&4294967295|P>>>20),P=j+(A^D&(S^A))+b[6]+2821735955&4294967295,j=D+(P<<17&4294967295|P>>>15),P=A+(S^j&(D^S))+b[7]+4249261313&4294967295,A=j+(P<<22&4294967295|P>>>10),P=S+(D^A&(j^D))+b[8]+1770035416&4294967295,S=A+(P<<7&4294967295|P>>>25),P=D+(j^S&(A^j))+b[9]+2336552879&4294967295,D=S+(P<<12&4294967295|P>>>20),P=j+(A^D&(S^A))+b[10]+4294925233&4294967295,j=D+(P<<17&4294967295|P>>>15),P=A+(S^j&(D^S))+b[11]+2304563134&4294967295,A=j+(P<<22&4294967295|P>>>10),P=S+(D^A&(j^D))+b[12]+1804603682&4294967295,S=A+(P<<7&4294967295|P>>>25),P=D+(j^S&(A^j))+b[13]+4254626195&4294967295,D=S+(P<<12&4294967295|P>>>20),P=j+(A^D&(S^A))+b[14]+2792965006&4294967295,j=D+(P<<17&4294967295|P>>>15),P=A+(S^j&(D^S))+b[15]+1236535329&4294967295,A=j+(P<<22&4294967295|P>>>10),P=S+(j^D&(A^j))+b[1]+4129170786&4294967295,S=A+(P<<5&4294967295|P>>>27),P=D+(A^j&(S^A))+b[6]+3225465664&4294967295,D=S+(P<<9&4294967295|P>>>23),P=j+(S^A&(D^S))+b[11]+643717713&4294967295,j=D+(P<<14&4294967295|P>>>18),P=A+(D^S&(j^D))+b[0]+3921069994&4294967295,A=j+(P<<20&4294967295|P>>>12),P=S+(j^D&(A^j))+b[5]+3593408605&4294967295,S=A+(P<<5&4294967295|P>>>27),P=D+(A^j&(S^A))+b[10]+38016083&4294967295,D=S+(P<<9&4294967295|P>>>23),P=j+(S^A&(D^S))+b[15]+3634488961&4294967295,j=D+(P<<14&4294967295|P>>>18),P=A+(D^S&(j^D))+b[4]+3889429448&4294967295,A=j+(P<<20&4294967295|P>>>12),P=S+(j^D&(A^j))+b[9]+568446438&4294967295,S=A+(P<<5&4294967295|P>>>27),P=D+(A^j&(S^A))+b[14]+3275163606&4294967295,D=S+(P<<9&4294967295|P>>>23),P=j+(S^A&(D^S))+b[3]+4107603335&4294967295,j=D+(P<<14&4294967295|P>>>18),P=A+(D^S&(j^D))+b[8]+1163531501&4294967295,A=j+(P<<20&4294967295|P>>>12),P=S+(j^D&(A^j))+b[13]+2850285829&4294967295,S=A+(P<<5&4294967295|P>>>27),P=D+(A^j&(S^A))+b[2]+4243563512&4294967295,D=S+(P<<9&4294967295|P>>>23),P=j+(S^A&(D^S))+b[7]+1735328473&4294967295,j=D+(P<<14&4294967295|P>>>18),P=A+(D^S&(j^D))+b[12]+2368359562&4294967295,A=j+(P<<20&4294967295|P>>>12),P=S+(A^j^D)+b[5]+4294588738&4294967295,S=A+(P<<4&4294967295|P>>>28),P=D+(S^A^j)+b[8]+2272392833&4294967295,D=S+(P<<11&4294967295|P>>>21),P=j+(D^S^A)+b[11]+1839030562&4294967295,j=D+(P<<16&4294967295|P>>>16),P=A+(j^D^S)+b[14]+4259657740&4294967295,A=j+(P<<23&4294967295|P>>>9),P=S+(A^j^D)+b[1]+2763975236&4294967295,S=A+(P<<4&4294967295|P>>>28),P=D+(S^A^j)+b[4]+1272893353&4294967295,D=S+(P<<11&4294967295|P>>>21),P=j+(D^S^A)+b[7]+4139469664&4294967295,j=D+(P<<16&4294967295|P>>>16),P=A+(j^D^S)+b[10]+3200236656&4294967295,A=j+(P<<23&4294967295|P>>>9),P=S+(A^j^D)+b[13]+681279174&4294967295,S=A+(P<<4&4294967295|P>>>28),P=D+(S^A^j)+b[0]+3936430074&4294967295,D=S+(P<<11&4294967295|P>>>21),P=j+(D^S^A)+b[3]+3572445317&4294967295,j=D+(P<<16&4294967295|P>>>16),P=A+(j^D^S)+b[6]+76029189&4294967295,A=j+(P<<23&4294967295|P>>>9),P=S+(A^j^D)+b[9]+3654602809&4294967295,S=A+(P<<4&4294967295|P>>>28),P=D+(S^A^j)+b[12]+3873151461&4294967295,D=S+(P<<11&4294967295|P>>>21),P=j+(D^S^A)+b[15]+530742520&4294967295,j=D+(P<<16&4294967295|P>>>16),P=A+(j^D^S)+b[2]+3299628645&4294967295,A=j+(P<<23&4294967295|P>>>9),P=S+(j^(A|~D))+b[0]+4096336452&4294967295,S=A+(P<<6&4294967295|P>>>26),P=D+(A^(S|~j))+b[7]+1126891415&4294967295,D=S+(P<<10&4294967295|P>>>22),P=j+(S^(D|~A))+b[14]+2878612391&4294967295,j=D+(P<<15&4294967295|P>>>17),P=A+(D^(j|~S))+b[5]+4237533241&4294967295,A=j+(P<<21&4294967295|P>>>11),P=S+(j^(A|~D))+b[12]+1700485571&4294967295,S=A+(P<<6&4294967295|P>>>26),P=D+(A^(S|~j))+b[3]+2399980690&4294967295,D=S+(P<<10&4294967295|P>>>22),P=j+(S^(D|~A))+b[10]+4293915773&4294967295,j=D+(P<<15&4294967295|P>>>17),P=A+(D^(j|~S))+b[1]+2240044497&4294967295,A=j+(P<<21&4294967295|P>>>11),P=S+(j^(A|~D))+b[8]+1873313359&4294967295,S=A+(P<<6&4294967295|P>>>26),P=D+(A^(S|~j))+b[15]+4264355552&4294967295,D=S+(P<<10&4294967295|P>>>22),P=j+(S^(D|~A))+b[6]+2734768916&4294967295,j=D+(P<<15&4294967295|P>>>17),P=A+(D^(j|~S))+b[13]+1309151649&4294967295,A=j+(P<<21&4294967295|P>>>11),P=S+(j^(A|~D))+b[4]+4149444226&4294967295,S=A+(P<<6&4294967295|P>>>26),P=D+(A^(S|~j))+b[11]+3174756917&4294967295,D=S+(P<<10&4294967295|P>>>22),P=j+(S^(D|~A))+b[2]+718787259&4294967295,j=D+(P<<15&4294967295|P>>>17),P=A+(D^(j|~S))+b[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(j+(P<<21&4294967295|P>>>11))&4294967295,x.g[2]=x.g[2]+j&4294967295,x.g[3]=x.g[3]+D&4294967295}r.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var A=S-this.blockSize,b=this.B,j=this.h,D=0;D<S;){if(j==0)for(;D<=A;)i(this,x,D),D+=this.blockSize;if(typeof x=="string"){for(;D<S;)if(b[j++]=x.charCodeAt(D++),j==this.blockSize){i(this,b),j=0;break}}else for(;D<S;)if(b[j++]=x[D++],j==this.blockSize){i(this,b),j=0;break}}this.h=j,this.o+=S},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var A=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=A&255,A/=256;for(this.u(x),x=Array(16),S=A=0;4>S;++S)for(var b=0;32>b;b+=8)x[A++]=this.g[S]>>>b&255;return x};function o(x,S){var A=a;return Object.prototype.hasOwnProperty.call(A,x)?A[x]:A[x]=S(x)}function s(x,S){this.h=S;for(var A=[],b=!0,j=x.length-1;0<=j;j--){var D=x[j]|0;b&&D==S||(A[j]=D,b=!1)}this.g=A}var a={};function u(x){return-128<=x&&128>x?o(x,function(S){return new s([S|0],0>S?-1:0)}):new s([x|0],0>x?-1:0)}function d(x){if(isNaN(x)||!isFinite(x))return m;if(0>x)return T(d(-x));for(var S=[],A=1,b=0;x>=A;b++)S[b]=x/A|0,A*=4294967296;return new s(S,0)}function f(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return T(f(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=d(Math.pow(S,8)),b=m,j=0;j<x.length;j+=8){var D=Math.min(8,x.length-j),P=parseInt(x.substring(j,j+D),S);8>D?(D=d(Math.pow(S,D)),b=b.j(D).add(d(P))):(b=b.j(A),b=b.add(d(P)))}return b}var m=u(0),E=u(1),k=u(16777216);t=s.prototype,t.m=function(){if(L(this))return-T(this).m();for(var x=0,S=1,A=0;A<this.g.length;A++){var b=this.i(A);x+=(0<=b?b:4294967296+b)*S,S*=4294967296}return x},t.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(I(this))return"0";if(L(this))return"-"+T(this).toString(x);for(var S=d(Math.pow(x,6)),A=this,b="";;){var j=w(A,S).g;A=y(A,j.j(S));var D=((0<A.g.length?A.g[0]:A.h)>>>0).toString(x);if(A=j,I(A))return D+b;for(;6>D.length;)D="0"+D;b=D+b}},t.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function I(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function L(x){return x.h==-1}t.l=function(x){return x=y(this,x),L(x)?-1:I(x)?0:1};function T(x){for(var S=x.g.length,A=[],b=0;b<S;b++)A[b]=~x.g[b];return new s(A,~x.h).add(E)}t.abs=function(){return L(this)?T(this):this},t.add=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],b=0,j=0;j<=S;j++){var D=b+(this.i(j)&65535)+(x.i(j)&65535),P=(D>>>16)+(this.i(j)>>>16)+(x.i(j)>>>16);b=P>>>16,D&=65535,P&=65535,A[j]=P<<16|D}return new s(A,A[A.length-1]&-2147483648?-1:0)};function y(x,S){return x.add(T(S))}t.j=function(x){if(I(this)||I(x))return m;if(L(this))return L(x)?T(this).j(T(x)):T(T(this).j(x));if(L(x))return T(this.j(T(x)));if(0>this.l(k)&&0>x.l(k))return d(this.m()*x.m());for(var S=this.g.length+x.g.length,A=[],b=0;b<2*S;b++)A[b]=0;for(b=0;b<this.g.length;b++)for(var j=0;j<x.g.length;j++){var D=this.i(b)>>>16,P=this.i(b)&65535,q=x.i(j)>>>16,re=x.i(j)&65535;A[2*b+2*j]+=P*re,g(A,2*b+2*j),A[2*b+2*j+1]+=D*re,g(A,2*b+2*j+1),A[2*b+2*j+1]+=P*q,g(A,2*b+2*j+1),A[2*b+2*j+2]+=D*q,g(A,2*b+2*j+2)}for(b=0;b<S;b++)A[b]=A[2*b+1]<<16|A[2*b];for(b=S;b<2*S;b++)A[b]=0;return new s(A,0)};function g(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function _(x,S){this.g=x,this.h=S}function w(x,S){if(I(S))throw Error("division by zero");if(I(x))return new _(m,m);if(L(x))return S=w(T(x),S),new _(T(S.g),T(S.h));if(L(S))return S=w(x,T(S)),new _(T(S.g),S.h);if(30<x.g.length){if(L(x)||L(S))throw Error("slowDivide_ only works with positive integers.");for(var A=E,b=S;0>=b.l(x);)A=R(A),b=R(b);var j=O(A,1),D=O(b,1);for(b=O(b,2),A=O(A,2);!I(b);){var P=D.add(b);0>=P.l(x)&&(j=j.add(A),D=P),b=O(b,1),A=O(A,1)}return S=y(x,j.j(S)),new _(j,S)}for(j=m;0<=x.l(S);){for(A=Math.max(1,Math.floor(x.m()/S.m())),b=Math.ceil(Math.log(A)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),D=d(A),P=D.j(S);L(P)||0<P.l(x);)A-=b,D=d(A),P=D.j(S);I(D)&&(D=E),j=j.add(D),x=y(x,P)}return new _(j,x)}t.A=function(x){return w(this,x).h},t.and=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],b=0;b<S;b++)A[b]=this.i(b)&x.i(b);return new s(A,this.h&x.h)},t.or=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],b=0;b<S;b++)A[b]=this.i(b)|x.i(b);return new s(A,this.h|x.h)},t.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],b=0;b<S;b++)A[b]=this.i(b)^x.i(b);return new s(A,this.h^x.h)};function R(x){for(var S=x.g.length+1,A=[],b=0;b<S;b++)A[b]=x.i(b)<<1|x.i(b-1)>>>31;return new s(A,x.h)}function O(x,S){var A=S>>5;S%=32;for(var b=x.g.length-A,j=[],D=0;D<b;D++)j[D]=0<S?x.i(D+A)>>>S|x.i(D+A+1)<<32-S:x.i(D+A);return new s(j,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fT=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=d,s.fromString=f,Ji=s}).apply(typeof X2<"u"?X2:typeof self<"u"?self:typeof window<"u"?window:{});var dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pT,rl,mT,Bc,Vm,gT,yT,vT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,p,v){return l==Array.prototype||l==Object.prototype||(l[p]=v.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof dc=="object"&&dc];for(var p=0;p<l.length;++p){var v=l[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=n(this);function i(l,p){if(p)e:{var v=r;l=l.split(".");for(var C=0;C<l.length-1;C++){var V=l[C];if(!(V in v))break e;v=v[V]}l=l[l.length-1],C=v[l],p=p(C),p!=C&&p!=null&&e(v,l,{configurable:!0,writable:!0,value:p})}}function o(l,p){l instanceof String&&(l+="");var v=0,C=!1,V={next:function(){if(!C&&v<l.length){var W=v++;return{value:p(W,l[W]),done:!1}}return C=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(l){return l||function(){return o(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function u(l){var p=typeof l;return p=p!="object"?p:l?Array.isArray(l)?"array":p:"null",p=="array"||p=="object"&&typeof l.length=="number"}function d(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function f(l,p,v){return l.call.apply(l.bind,arguments)}function m(l,p,v){if(!l)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,C),l.apply(p,V)}}return function(){return l.apply(p,arguments)}}function E(l,p,v){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,E.apply(null,arguments)}function k(l,p){var v=Array.prototype.slice.call(arguments,1);return function(){var C=v.slice();return C.push.apply(C,arguments),l.apply(this,C)}}function I(l,p){function v(){}v.prototype=p.prototype,l.aa=p.prototype,l.prototype=new v,l.prototype.constructor=l,l.Qb=function(C,V,W){for(var H=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)H[Pe-2]=arguments[Pe];return p.prototype[V].apply(C,H)}}function L(l){const p=l.length;if(0<p){const v=Array(p);for(let C=0;C<p;C++)v[C]=l[C];return v}return[]}function T(l,p){for(let v=1;v<arguments.length;v++){const C=arguments[v];if(u(C)){const V=l.length||0,W=C.length||0;l.length=V+W;for(let H=0;H<W;H++)l[V+H]=C[H]}else l.push(C)}}class y{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function g(l){return/^[\s\xa0]*$/.test(l)}function _(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function w(l){return w[" "](l),l}w[" "]=function(){};var R=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function O(l,p,v){for(const C in l)p.call(v,l[C],C,l)}function x(l,p){for(const v in l)p.call(void 0,l[v],v,l)}function S(l){const p={};for(const v in l)p[v]=l[v];return p}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(l,p){let v,C;for(let V=1;V<arguments.length;V++){C=arguments[V];for(v in C)l[v]=C[v];for(let W=0;W<A.length;W++)v=A[W],Object.prototype.hasOwnProperty.call(C,v)&&(l[v]=C[v])}}function j(l){var p=1;l=l.split(":");const v=[];for(;0<p&&l.length;)v.push(l.shift()),p--;return l.length&&v.push(l.join(":")),v}function D(l){a.setTimeout(()=>{throw l},0)}function P(){var l=G;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class q{constructor(){this.h=this.g=null}add(p,v){const C=re.get();C.set(p,v),this.h?this.h.next=C:this.g=C,this.h=C}}var re=new y(()=>new ue,l=>l.reset());class ue{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,z=!1,G=new q,X=()=>{const l=a.Promise.resolve(void 0);ce=()=>{l.then(le)}};var le=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(v){D(v)}var p=re;p.j(l),100>p.h&&(p.h++,l.next=p.g,p.g=l)}z=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var Ye=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const v=()=>{};a.addEventListener("test",v,p),a.removeEventListener("test",v,p)}catch{}return l}();function Ge(l,p){if(ye.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var v=this.type=l.type,C=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget){if(R){e:{try{w(p.nodeName);var V=!0;break e}catch{}V=!1}V||(p=null)}}else v=="mouseover"?p=l.fromElement:v=="mouseout"&&(p=l.toElement);this.relatedTarget=p,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:rt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ge.aa.h.call(this)}}I(Ge,ye);var rt={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Be="closure_listenable_"+(1e6*Math.random()|0),Dt=0;function Ot(l,p,v,C,V){this.listener=l,this.proxy=null,this.src=p,this.type=v,this.capture=!!C,this.ha=V,this.key=++Dt,this.da=this.fa=!1}function Ht(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function dt(l){this.src=l,this.g={},this.h=0}dt.prototype.add=function(l,p,v,C,V){var W=l.toString();l=this.g[W],l||(l=this.g[W]=[],this.h++);var H=de(l,p,C,V);return-1<H?(p=l[H],v||(p.fa=!1)):(p=new Ot(p,this.src,W,!!C,V),p.fa=v,l.push(p)),p};function N(l,p){var v=p.type;if(v in l.g){var C=l.g[v],V=Array.prototype.indexOf.call(C,p,void 0),W;(W=0<=V)&&Array.prototype.splice.call(C,V,1),W&&(Ht(p),l.g[v].length==0&&(delete l.g[v],l.h--))}}function de(l,p,v,C){for(var V=0;V<l.length;++V){var W=l[V];if(!W.da&&W.listener==p&&W.capture==!!v&&W.ha==C)return V}return-1}var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function se(l,p,v,C,V){if(Array.isArray(p)){for(var W=0;W<p.length;W++)se(l,p[W],v,C,V);return null}return v=uy(v),l&&l[Be]?l.K(p,v,d(C)?!!C.capture:!1,V):Ae(l,p,v,!1,C,V)}function Ae(l,p,v,C,V,W){if(!p)throw Error("Invalid event type");var H=d(V)?!!V.capture:!!V,Pe=uf(l);if(Pe||(l[fe]=Pe=new dt(l)),v=Pe.add(p,v,C,H,W),v.proxy)return v;if(C=cr(),v.proxy=C,C.src=l,C.listener=v,l.addEventListener)Ye||(V=H),V===void 0&&(V=!1),l.addEventListener(p.toString(),C,V);else if(l.attachEvent)l.attachEvent(ly(p.toString()),C);else if(l.addListener&&l.removeListener)l.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return v}function cr(){function l(v){return p.call(l.src,l.listener,v)}const p=uS;return l}function Pu(l,p,v,C,V){if(Array.isArray(p))for(var W=0;W<p.length;W++)Pu(l,p[W],v,C,V);else C=d(C)?!!C.capture:!!C,v=uy(v),l&&l[Be]?(l=l.i,p=String(p).toString(),p in l.g&&(W=l.g[p],v=de(W,v,C,V),-1<v&&(Ht(W[v]),Array.prototype.splice.call(W,v,1),W.length==0&&(delete l.g[p],l.h--)))):l&&(l=uf(l))&&(p=l.g[p.toString()],l=-1,p&&(l=de(p,v,C,V)),(v=-1<l?p[l]:null)&&lf(v))}function lf(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[Be])N(p.i,l);else{var v=l.type,C=l.proxy;p.removeEventListener?p.removeEventListener(v,C,l.capture):p.detachEvent?p.detachEvent(ly(v),C):p.addListener&&p.removeListener&&p.removeListener(C),(v=uf(p))?(N(v,l),v.h==0&&(v.src=null,p[fe]=null)):Ht(l)}}}function ly(l){return l in pe?pe[l]:pe[l]="on"+l}function uS(l,p){if(l.da)l=!0;else{p=new Ge(p,this);var v=l.listener,C=l.ha||l.src;l.fa&&lf(l),l=v.call(C,p)}return l}function uf(l){return l=l[fe],l instanceof dt?l:null}var cf="__closure_events_fn_"+(1e9*Math.random()>>>0);function uy(l){return typeof l=="function"?l:(l[cf]||(l[cf]=function(p){return l.handleEvent(p)}),l[cf])}function wt(){ee.call(this),this.i=new dt(this),this.M=this,this.F=null}I(wt,ee),wt.prototype[Be]=!0,wt.prototype.removeEventListener=function(l,p,v,C){Pu(this,l,p,v,C)};function Mt(l,p){var v,C=l.F;if(C)for(v=[];C;C=C.F)v.push(C);if(l=l.M,C=p.type||p,typeof p=="string")p=new ye(p,l);else if(p instanceof ye)p.target=p.target||l;else{var V=p;p=new ye(C,l),b(p,V)}if(V=!0,v)for(var W=v.length-1;0<=W;W--){var H=p.g=v[W];V=Ru(H,C,!0,p)&&V}if(H=p.g=l,V=Ru(H,C,!0,p)&&V,V=Ru(H,C,!1,p)&&V,v)for(W=0;W<v.length;W++)H=p.g=v[W],V=Ru(H,C,!1,p)&&V}wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var l=this.i,p;for(p in l.g){for(var v=l.g[p],C=0;C<v.length;C++)Ht(v[C]);delete l.g[p],l.h--}}this.F=null},wt.prototype.K=function(l,p,v,C){return this.i.add(String(l),p,!1,v,C)},wt.prototype.L=function(l,p,v,C){return this.i.add(String(l),p,!0,v,C)};function Ru(l,p,v,C){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();for(var V=!0,W=0;W<p.length;++W){var H=p[W];if(H&&!H.da&&H.capture==v){var Pe=H.listener,ht=H.ha||H.src;H.fa&&N(l.i,H),V=Pe.call(ht,C)!==!1&&V}}return V&&!C.defaultPrevented}function cy(l,p,v){if(typeof l=="function")v&&(l=E(l,v));else if(l&&typeof l.handleEvent=="function")l=E(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(l,p||0)}function dy(l){l.g=cy(()=>{l.g=null,l.i&&(l.i=!1,dy(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class cS extends ee{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:dy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ta(l){ee.call(this),this.h=l,this.g={}}I(Ta,ee);var hy=[];function fy(l){O(l.g,function(p,v){this.g.hasOwnProperty(v)&&lf(p)},l),l.g={}}Ta.prototype.N=function(){Ta.aa.N.call(this),fy(this)},Ta.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var df=a.JSON.stringify,dS=a.JSON.parse,hS=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function hf(){}hf.prototype.h=null;function py(l){return l.h||(l.h=l.i())}function my(){}var Ia={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ff(){ye.call(this,"d")}I(ff,ye);function pf(){ye.call(this,"c")}I(pf,ye);var ji={},gy=null;function bu(){return gy=gy||new wt}ji.La="serverreachability";function yy(l){ye.call(this,ji.La,l)}I(yy,ye);function Sa(l){const p=bu();Mt(p,new yy(p))}ji.STAT_EVENT="statevent";function vy(l,p){ye.call(this,ji.STAT_EVENT,l),this.stat=p}I(vy,ye);function Nt(l){const p=bu();Mt(p,new vy(p,l))}ji.Ma="timingevent";function ky(l,p){ye.call(this,ji.Ma,l),this.size=p}I(ky,ye);function Ca(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},p)}function La(){this.g=!0}La.prototype.xa=function(){this.g=!1};function fS(l,p,v,C,V,W){l.info(function(){if(l.g)if(W)for(var H="",Pe=W.split("&"),ht=0;ht<Pe.length;ht++){var _e=Pe[ht].split("=");if(1<_e.length){var xt=_e[0];_e=_e[1];var Tt=xt.split("_");H=2<=Tt.length&&Tt[1]=="type"?H+(xt+"="+_e+"&"):H+(xt+"=redacted&")}}else H=null;else H=W;return"XMLHTTP REQ ("+C+") [attempt "+V+"]: "+p+`
`+v+`
`+H})}function pS(l,p,v,C,V,W,H){l.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+V+"]: "+p+`
`+v+`
`+W+" "+H})}function ns(l,p,v,C){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+gS(l,v)+(C?" "+C:"")})}function mS(l,p){l.info(function(){return"TIMEOUT: "+p})}La.prototype.info=function(){};function gS(l,p){if(!l.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(l=0;l<v.length;l++)if(Array.isArray(v[l])){var C=v[l];if(!(2>C.length)){var V=C[1];if(Array.isArray(V)&&!(1>V.length)){var W=V[0];if(W!="noop"&&W!="stop"&&W!="close")for(var H=1;H<V.length;H++)V[H]=""}}}}return df(v)}catch{return p}}var ju={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_y={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mf;function Du(){}I(Du,hf),Du.prototype.g=function(){return new XMLHttpRequest},Du.prototype.i=function(){return{}},mf=new Du;function Or(l,p,v,C){this.j=l,this.i=p,this.l=v,this.R=C||1,this.U=new Ta(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ey}function Ey(){this.i=null,this.g="",this.h=!1}var wy={},gf={};function yf(l,p,v){l.L=1,l.v=Vu(dr(p)),l.m=v,l.P=!0,xy(l,null)}function xy(l,p){l.F=Date.now(),Ou(l),l.A=dr(l.v);var v=l.A,C=l.R;Array.isArray(C)||(C=[String(C)]),Ny(v.i,"t",C),l.C=0,v=l.j.J,l.h=new Ey,l.g=tv(l.j,v?p:null,!l.m),0<l.O&&(l.M=new cS(E(l.Y,l,l.g),l.O)),p=l.U,v=l.g,C=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(hy[0]=V.toString()),V=hy);for(var W=0;W<V.length;W++){var H=se(v,V[W],C||p.handleEvent,!1,p.h||p);if(!H)break;p.g[H.key]=H}p=l.H?S(l.H):{},l.m?(l.u||(l.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,p)):(l.u="GET",l.g.ea(l.A,l.u,null,p)),Sa(),fS(l.i,l.u,l.A,l.l,l.R,l.m)}Or.prototype.ca=function(l){l=l.target;const p=this.M;p&&hr(l)==3?p.j():this.Y(l)},Or.prototype.Y=function(l){try{if(l==this.g)e:{const Tt=hr(this.g);var p=this.g.Ba();const os=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||By(this.g)))){this.J||Tt!=4||p==7||(p==8||0>=os?Sa(3):Sa(2)),vf(this);var v=this.g.Z();this.X=v;t:if(Ty(this)){var C=By(this.g);l="";var V=C.length,W=hr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Di(this),Aa(this);var H="";break t}this.h.i=new a.TextDecoder}for(p=0;p<V;p++)this.h.h=!0,l+=this.h.i.decode(C[p],{stream:!(W&&p==V-1)});C.length=0,this.h.g+=l,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=v==200,pS(this.i,this.u,this.A,this.l,this.R,Tt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,ht=this.g;if((Pe=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Pe)){var _e=Pe;break t}}_e=null}if(v=_e)ns(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kf(this,v);else{this.o=!1,this.s=3,Nt(12),Di(this),Aa(this);break e}}if(this.P){v=!0;let An;for(;!this.J&&this.C<H.length;)if(An=yS(this,H),An==gf){Tt==4&&(this.s=4,Nt(14),v=!1),ns(this.i,this.l,null,"[Incomplete Response]");break}else if(An==wy){this.s=4,Nt(15),ns(this.i,this.l,H,"[Invalid Chunk]"),v=!1;break}else ns(this.i,this.l,An,null),kf(this,An);if(Ty(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||H.length!=0||this.h.h||(this.s=1,Nt(16),v=!1),this.o=this.o&&v,!v)ns(this.i,this.l,H,"[Invalid Chunked Response]"),Di(this),Aa(this);else if(0<H.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),If(xt),xt.M=!0,Nt(11))}}else ns(this.i,this.l,H,null),kf(this,H);Tt==4&&Di(this),this.o&&!this.J&&(Tt==4?Zy(this.j,this):(this.o=!1,Ou(this)))}else DS(this.g),v==400&&0<H.indexOf("Unknown SID")?(this.s=3,Nt(12)):(this.s=0,Nt(13)),Di(this),Aa(this)}}}catch{}finally{}};function Ty(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function yS(l,p){var v=l.C,C=p.indexOf(`
`,v);return C==-1?gf:(v=Number(p.substring(v,C)),isNaN(v)?wy:(C+=1,C+v>p.length?gf:(p=p.slice(C,C+v),l.C=C+v,p)))}Or.prototype.cancel=function(){this.J=!0,Di(this)};function Ou(l){l.S=Date.now()+l.I,Iy(l,l.I)}function Iy(l,p){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ca(E(l.ba,l),p)}function vf(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Or.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(mS(this.i,this.A),this.L!=2&&(Sa(),Nt(17)),Di(this),this.s=2,Aa(this)):Iy(this,this.S-l)};function Aa(l){l.j.G==0||l.J||Zy(l.j,l)}function Di(l){vf(l);var p=l.M;p&&typeof p.ma=="function"&&p.ma(),l.M=null,fy(l.U),l.g&&(p=l.g,l.g=null,p.abort(),p.ma())}function kf(l,p){try{var v=l.j;if(v.G!=0&&(v.g==l||_f(v.h,l))){if(!l.K&&_f(v.h,l)&&v.G==3){try{var C=v.Da.g.parse(p)}catch{C=null}if(Array.isArray(C)&&C.length==3){var V=C;if(V[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<l.F)Bu(v),$u(v);else break e;Tf(v),Nt(18)}}else v.za=V[1],0<v.za-v.T&&37500>V[2]&&v.F&&v.v==0&&!v.C&&(v.C=Ca(E(v.Za,v),6e3));if(1>=Ly(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Mi(v,11)}else if((l.K||v.g==l)&&Bu(v),!g(p))for(V=v.Da.g.parse(p),p=0;p<V.length;p++){let _e=V[p];if(v.T=_e[0],_e=_e[1],v.G==2)if(_e[0]=="c"){v.K=_e[1],v.ia=_e[2];const xt=_e[3];xt!=null&&(v.la=xt,v.j.info("VER="+v.la));const Tt=_e[4];Tt!=null&&(v.Aa=Tt,v.j.info("SVER="+v.Aa));const os=_e[5];os!=null&&typeof os=="number"&&0<os&&(C=1.5*os,v.L=C,v.j.info("backChannelRequestTimeoutMs_="+C)),C=v;const An=l.g;if(An){const qu=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qu){var W=C.h;W.g||qu.indexOf("spdy")==-1&&qu.indexOf("quic")==-1&&qu.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(Ef(W,W.h),W.h=null))}if(C.D){const Sf=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;Sf&&(C.ya=Sf,be(C.I,C.D,Sf))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-l.F,v.j.info("Handshake RTT: "+v.R+"ms")),C=v;var H=l;if(C.qa=ev(C,C.J?C.ia:null,C.W),H.K){Ay(C.h,H);var Pe=H,ht=C.L;ht&&(Pe.I=ht),Pe.B&&(vf(Pe),Ou(Pe)),C.g=H}else Ky(C);0<v.i.length&&zu(v)}else _e[0]!="stop"&&_e[0]!="close"||Mi(v,7);else v.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Mi(v,7):xf(v):_e[0]!="noop"&&v.l&&v.l.ta(_e),v.v=0)}}Sa(4)}catch{}}var vS=class{constructor(l,p){this.g=l,this.map=p}};function Sy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ly(l){return l.h?1:l.g?l.g.size:0}function _f(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Ef(l,p){l.g?l.g.add(p):l.h=p}function Ay(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Sy.prototype.cancel=function(){if(this.i=Py(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Py(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const v of l.g.values())p=p.concat(v.D);return p}return L(l.i)}function kS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var p=[],v=l.length,C=0;C<v;C++)p.push(l[C]);return p}p=[],v=0;for(C in l)p[v++]=l[C];return p}function _S(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var p=[];l=l.length;for(var v=0;v<l;v++)p.push(v);return p}p=[],v=0;for(const C in l)p[v++]=C;return p}}}function Ry(l,p){if(l.forEach&&typeof l.forEach=="function")l.forEach(p,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,p,void 0);else for(var v=_S(l),C=kS(l),V=C.length,W=0;W<V;W++)p.call(void 0,C[W],v&&v[W],l)}var by=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ES(l,p){if(l){l=l.split("&");for(var v=0;v<l.length;v++){var C=l[v].indexOf("="),V=null;if(0<=C){var W=l[v].substring(0,C);V=l[v].substring(C+1)}else W=l[v];p(W,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Oi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Oi){this.h=l.h,Mu(this,l.j),this.o=l.o,this.g=l.g,Nu(this,l.s),this.l=l.l;var p=l.i,v=new ba;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),jy(this,v),this.m=l.m}else l&&(p=String(l).match(by))?(this.h=!1,Mu(this,p[1]||"",!0),this.o=Pa(p[2]||""),this.g=Pa(p[3]||"",!0),Nu(this,p[4]),this.l=Pa(p[5]||"",!0),jy(this,p[6]||"",!0),this.m=Pa(p[7]||"")):(this.h=!1,this.i=new ba(null,this.h))}Oi.prototype.toString=function(){var l=[],p=this.j;p&&l.push(Ra(p,Dy,!0),":");var v=this.g;return(v||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Ra(p,Dy,!0),"@"),l.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&l.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&l.push("/"),l.push(Ra(v,v.charAt(0)=="/"?TS:xS,!0))),(v=this.i.toString())&&l.push("?",v),(v=this.m)&&l.push("#",Ra(v,SS)),l.join("")};function dr(l){return new Oi(l)}function Mu(l,p,v){l.j=v?Pa(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Nu(l,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);l.s=p}else l.s=null}function jy(l,p,v){p instanceof ba?(l.i=p,CS(l.i,l.h)):(v||(p=Ra(p,IS)),l.i=new ba(p,l.h))}function be(l,p,v){l.i.set(p,v)}function Vu(l){return be(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Pa(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ra(l,p,v){return typeof l=="string"?(l=encodeURI(l).replace(p,wS),v&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function wS(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Dy=/[#\/\?@]/g,xS=/[#\?:]/g,TS=/[#\?]/g,IS=/[#\?@]/g,SS=/#/g;function ba(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Mr(l){l.g||(l.g=new Map,l.h=0,l.i&&ES(l.i,function(p,v){l.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}t=ba.prototype,t.add=function(l,p){Mr(this),this.i=null,l=rs(this,l);var v=this.g.get(l);return v||this.g.set(l,v=[]),v.push(p),this.h+=1,this};function Oy(l,p){Mr(l),p=rs(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function My(l,p){return Mr(l),p=rs(l,p),l.g.has(p)}t.forEach=function(l,p){Mr(this),this.g.forEach(function(v,C){v.forEach(function(V){l.call(p,V,C,this)},this)},this)},t.na=function(){Mr(this);const l=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let C=0;C<p.length;C++){const V=l[C];for(let W=0;W<V.length;W++)v.push(p[C])}return v},t.V=function(l){Mr(this);let p=[];if(typeof l=="string")My(this,l)&&(p=p.concat(this.g.get(rs(this,l))));else{l=Array.from(this.g.values());for(let v=0;v<l.length;v++)p=p.concat(l[v])}return p},t.set=function(l,p){return Mr(this),this.i=null,l=rs(this,l),My(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},t.get=function(l,p){return l?(l=this.V(l),0<l.length?String(l[0]):p):p};function Ny(l,p,v){Oy(l,p),0<v.length&&(l.i=null,l.g.set(rs(l,p),L(v)),l.h+=v.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var C=p[v];const W=encodeURIComponent(String(C)),H=this.V(C);for(C=0;C<H.length;C++){var V=W;H[C]!==""&&(V+="="+encodeURIComponent(String(H[C]))),l.push(V)}}return this.i=l.join("&")};function rs(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function CS(l,p){p&&!l.j&&(Mr(l),l.i=null,l.g.forEach(function(v,C){var V=C.toLowerCase();C!=V&&(Oy(this,C),Ny(this,V,v))},l)),l.j=p}function LS(l,p){const v=new La;if(a.Image){const C=new Image;C.onload=k(Nr,v,"TestLoadImage: loaded",!0,p,C),C.onerror=k(Nr,v,"TestLoadImage: error",!1,p,C),C.onabort=k(Nr,v,"TestLoadImage: abort",!1,p,C),C.ontimeout=k(Nr,v,"TestLoadImage: timeout",!1,p,C),a.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=l}else p(!1)}function AS(l,p){const v=new La,C=new AbortController,V=setTimeout(()=>{C.abort(),Nr(v,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:C.signal}).then(W=>{clearTimeout(V),W.ok?Nr(v,"TestPingServer: ok",!0,p):Nr(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(V),Nr(v,"TestPingServer: error",!1,p)})}function Nr(l,p,v,C,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),C(v)}catch{}}function PS(){this.g=new hS}function RS(l,p,v){const C=v||"";try{Ry(l,function(V,W){let H=V;d(V)&&(H=df(V)),p.push(C+W+"="+encodeURIComponent(H))})}catch(V){throw p.push(C+"type="+encodeURIComponent("_badmap")),V}}function Fu(l){this.l=l.Ub||null,this.j=l.eb||!1}I(Fu,hf),Fu.prototype.g=function(){return new Wu(this.l,this.j)},Fu.prototype.i=function(l){return function(){return l}}({});function Wu(l,p){wt.call(this),this.D=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Wu,wt),t=Wu.prototype,t.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=p,this.readyState=1,Da(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(p.body=l),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ja(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Da(this)),this.g&&(this.readyState=3,Da(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?ja(this):Da(this),this.readyState==3&&Vy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ja(this))},t.Qa=function(l){this.g&&(this.response=l,ja(this))},t.ga=function(){this.g&&ja(this)};function ja(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Da(l)}t.setRequestHeader=function(l,p){this.u.append(l,p)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,l.push(v[0]+": "+v[1]),v=p.next();return l.join(`\r
`)};function Da(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Wu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Fy(l){let p="";return O(l,function(v,C){p+=C,p+=":",p+=v,p+=`\r
`}),p}function wf(l,p,v){e:{for(C in v){var C=!1;break e}C=!0}C||(v=Fy(v),typeof l=="string"?v!=null&&encodeURIComponent(String(v)):be(l,p,v))}function He(l){wt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(He,wt);var bS=/^https?$/i,jS=["POST","PUT"];t=He.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,p,v,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mf.g(),this.v=this.o?py(this.o):py(mf),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(W){Wy(this,W);return}if(l=v||"",v=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var V in C)v.set(V,C[V]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const W of C.keys())v.set(W,C.get(W));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(v.keys()).find(W=>W.toLowerCase()=="content-type"),V=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(jS,p,void 0))||C||V||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,H]of v)this.g.setRequestHeader(W,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zy(this),this.u=!0,this.g.send(l),this.u=!1}catch(W){Wy(this,W)}};function Wy(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.m=5,Uy(l),Uu(l)}function Uy(l){l.A||(l.A=!0,Mt(l,"complete"),Mt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Mt(this,"complete"),Mt(this,"abort"),Uu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Uu(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?$y(this):this.bb())},t.bb=function(){$y(this)};function $y(l){if(l.h&&typeof s<"u"&&(!l.v[1]||hr(l)!=4||l.Z()!=2)){if(l.u&&hr(l)==4)cy(l.Ea,0,l);else if(Mt(l,"readystatechange"),hr(l)==4){l.h=!1;try{const H=l.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var C;if(C=H===0){var V=String(l.D).match(by)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),C=!bS.test(V?V.toLowerCase():"")}v=C}if(v)Mt(l,"complete"),Mt(l,"success");else{l.m=6;try{var W=2<hr(l)?l.g.statusText:""}catch{W=""}l.l=W+" ["+l.Z()+"]",Uy(l)}}finally{Uu(l)}}}}function Uu(l,p){if(l.g){zy(l);const v=l.g,C=l.v[0]?()=>{}:null;l.g=null,l.v=null,p||Mt(l,"ready");try{v.onreadystatechange=C}catch{}}}function zy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function hr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<hr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),dS(p)}};function By(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function DS(l){const p={};l=(l.g&&2<=hr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<l.length;C++){if(g(l[C]))continue;var v=j(l[C]);const V=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const W=p[V]||[];p[V]=W,W.push(v)}x(p,function(C){return C.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oa(l,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[l]||p}function Hy(l){this.Aa=0,this.i=[],this.j=new La,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Oa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Oa("baseRetryDelayMs",5e3,l),this.cb=Oa("retryDelaySeedMs",1e4,l),this.Wa=Oa("forwardChannelMaxRetries",2,l),this.wa=Oa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Sy(l&&l.concurrentRequestLimit),this.Da=new PS,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Hy.prototype,t.la=8,t.G=1,t.connect=function(l,p,v,C){Nt(0),this.W=l,this.H=p||{},v&&C!==void 0&&(this.H.OSID=v,this.H.OAID=C),this.F=this.X,this.I=ev(this,null,this.W),zu(this)};function xf(l){if(qy(l),l.G==3){var p=l.U++,v=dr(l.I);if(be(v,"SID",l.K),be(v,"RID",p),be(v,"TYPE","terminate"),Ma(l,v),p=new Or(l,l.j,p),p.L=2,p.v=Vu(dr(v)),v=!1,a.navigator&&a.navigator.sendBeacon)try{v=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&a.Image&&(new Image().src=p.v,v=!0),v||(p.g=tv(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Ou(p)}Jy(l)}function $u(l){l.g&&(If(l),l.g.cancel(),l.g=null)}function qy(l){$u(l),l.u&&(a.clearTimeout(l.u),l.u=null),Bu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function zu(l){if(!Cy(l.h)&&!l.s){l.s=!0;var p=l.Ga;ce||X(),z||(ce(),z=!0),G.add(p,l),l.B=0}}function OS(l,p){return Ly(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=p.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ca(E(l.Ga,l,p),Xy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new Or(this,this.j,l);let W=this.o;if(this.S&&(W?(W=S(W),b(W,this.S)):W=this.S),this.m!==null||this.O||(V.H=W,W=null),this.P)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var C=this.i[v];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(p+=C,4096<p){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=Gy(this,V,p),v=dr(this.I),be(v,"RID",l),be(v,"CVER",22),this.D&&be(v,"X-HTTP-Session-Id",this.D),Ma(this,v),W&&(this.O?p="headers="+encodeURIComponent(String(Fy(W)))+"&"+p:this.m&&wf(v,this.m,W)),Ef(this.h,V),this.Ua&&be(v,"TYPE","init"),this.P?(be(v,"$req",p),be(v,"SID","null"),V.T=!0,yf(V,v,null)):yf(V,v,p),this.G=2}}else this.G==3&&(l?Yy(this,l):this.i.length==0||Cy(this.h)||Yy(this))};function Yy(l,p){var v;p?v=p.l:v=l.U++;const C=dr(l.I);be(C,"SID",l.K),be(C,"RID",v),be(C,"AID",l.T),Ma(l,C),l.m&&l.o&&wf(C,l.m,l.o),v=new Or(l,l.j,v,l.B+1),l.m===null&&(v.H=l.o),p&&(l.i=p.D.concat(l.i)),p=Gy(l,v,1e3),v.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ef(l.h,v),yf(v,C,p)}function Ma(l,p){l.H&&O(l.H,function(v,C){be(p,C,v)}),l.l&&Ry({},function(v,C){be(p,C,v)})}function Gy(l,p,v){v=Math.min(l.i.length,v);var C=l.l?E(l.l.Na,l.l,l):null;e:{var V=l.i;let W=-1;for(;;){const H=["count="+v];W==-1?0<v?(W=V[0].g,H.push("ofs="+W)):W=0:H.push("ofs="+W);let Pe=!0;for(let ht=0;ht<v;ht++){let _e=V[ht].g;const xt=V[ht].map;if(_e-=W,0>_e)W=Math.max(0,V[ht].g-100),Pe=!1;else try{RS(xt,H,"req"+_e+"_")}catch{C&&C(xt)}}if(Pe){C=H.join("&");break e}}}return l=l.i.splice(0,v),p.D=l,C}function Ky(l){if(!l.g&&!l.u){l.Y=1;var p=l.Fa;ce||X(),z||(ce(),z=!0),G.add(p,l),l.v=0}}function Tf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ca(E(l.Fa,l),Xy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Qy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ca(E(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Nt(10),$u(this),Qy(this))};function If(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Qy(l){l.g=new Or(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var p=dr(l.qa);be(p,"RID","rpc"),be(p,"SID",l.K),be(p,"AID",l.T),be(p,"CI",l.F?"0":"1"),!l.F&&l.ja&&be(p,"TO",l.ja),be(p,"TYPE","xmlhttp"),Ma(l,p),l.m&&l.o&&wf(p,l.m,l.o),l.L&&(l.g.I=l.L);var v=l.g;l=l.ia,v.L=1,v.v=Vu(dr(p)),v.m=null,v.P=!0,xy(v,l)}t.Za=function(){this.C!=null&&(this.C=null,$u(this),Tf(this),Nt(19))};function Bu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Zy(l,p){var v=null;if(l.g==p){Bu(l),If(l),l.g=null;var C=2}else if(_f(l.h,p))v=p.D,Ay(l.h,p),C=1;else return;if(l.G!=0){if(p.o)if(C==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var V=l.B;C=bu(),Mt(C,new ky(C,v)),zu(l)}else Ky(l);else if(V=p.s,V==3||V==0&&0<p.X||!(C==1&&OS(l,p)||C==2&&Tf(l)))switch(v&&0<v.length&&(p=l.h,p.i=p.i.concat(v)),V){case 1:Mi(l,5);break;case 4:Mi(l,10);break;case 3:Mi(l,6);break;default:Mi(l,2)}}}function Xy(l,p){let v=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(v*=2),v*p}function Mi(l,p){if(l.j.info("Error code "+p),p==2){var v=E(l.fb,l),C=l.Xa;const V=!C;C=new Oi(C||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Mu(C,"https"),Vu(C),V?LS(C.toString(),v):AS(C.toString(),v)}else Nt(2);l.G=0,l.l&&l.l.sa(p),Jy(l),qy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))};function Jy(l){if(l.G=0,l.ka=[],l.l){const p=Py(l.h);(p.length!=0||l.i.length!=0)&&(T(l.ka,p),T(l.ka,l.i),l.h.i.length=0,L(l.i),l.i.length=0),l.l.ra()}}function ev(l,p,v){var C=v instanceof Oi?dr(v):new Oi(v);if(C.g!="")p&&(C.g=p+"."+C.g),Nu(C,C.s);else{var V=a.location;C=V.protocol,p=p?p+"."+V.hostname:V.hostname,V=+V.port;var W=new Oi(null);C&&Mu(W,C),p&&(W.g=p),V&&Nu(W,V),v&&(W.l=v),C=W}return v=l.D,p=l.ya,v&&p&&be(C,v,p),be(C,"VER",l.la),Ma(l,C),C}function tv(l,p,v){if(p&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Ca&&!l.pa?new He(new Fu({eb:v})):new He(l.pa),p.Ha(l.J),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function nv(){}t=nv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Hu(){}Hu.prototype.g=function(l,p){return new nn(l,p)};function nn(l,p){wt.call(this),this.g=new Hy(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(l?l["X-WebChannel-Client-Profile"]=p.va:l={"X-WebChannel-Client-Profile":p.va}),this.g.S=l,(l=p&&p.Sb)&&!g(l)&&(this.g.m=l),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!g(p)&&(this.g.D=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new is(this)}I(nn,wt),nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nn.prototype.close=function(){xf(this.g)},nn.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var v={};v.__data__=l,l=v}else this.u&&(v={},v.__data__=df(l),l=v);p.i.push(new vS(p.Ya++,l)),p.G==3&&zu(p)},nn.prototype.N=function(){this.g.l=null,delete this.j,xf(this.g),delete this.g,nn.aa.N.call(this)};function rv(l){ff.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const v in p){l=v;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}I(rv,ff);function iv(){pf.call(this),this.status=1}I(iv,pf);function is(l){this.g=l}I(is,nv),is.prototype.ua=function(){Mt(this.g,"a")},is.prototype.ta=function(l){Mt(this.g,new rv(l))},is.prototype.sa=function(l){Mt(this.g,new iv)},is.prototype.ra=function(){Mt(this.g,"b")},Hu.prototype.createWebChannel=Hu.prototype.g,nn.prototype.send=nn.prototype.o,nn.prototype.open=nn.prototype.m,nn.prototype.close=nn.prototype.close,vT=function(){return new Hu},yT=function(){return bu()},gT=ji,Vm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ju.NO_ERROR=0,ju.TIMEOUT=8,ju.HTTP_ERROR=6,Bc=ju,_y.COMPLETE="complete",mT=_y,my.EventType=Ia,Ia.OPEN="a",Ia.CLOSE="b",Ia.ERROR="c",Ia.MESSAGE="d",wt.prototype.listen=wt.prototype.K,rl=my,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,pT=He}).apply(typeof dc<"u"?dc:typeof self<"u"?self:typeof window<"u"?window:{});const J2="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Th("@firebase/firestore");function Ha(){return co.logLevel}function Z(t,...e){if(co.logLevel<=ge.DEBUG){const n=e.map(t1);co.debug(`Firestore (${ka}): ${t}`,...n)}}function Rr(t,...e){if(co.logLevel<=ge.ERROR){const n=e.map(t1);co.error(`Firestore (${ka}): ${t}`,...n)}}function Js(t,...e){if(co.logLevel<=ge.WARN){const n=e.map(t1);co.warn(`Firestore (${ka}): ${t}`,...n)}}function t1(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${ka}) INTERNAL ASSERTION FAILED: `+t;throw Rr(e),new Error(e)}function Le(t,e){t||ne()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ub{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Lt.UNAUTHENTICATED))}shutdown(){}}class cb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class db{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Le(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Tr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Tr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new kT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new Lt(e)}}class hb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new hb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Le(this.o===void 0);const r=o=>{o.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,Z("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new pb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=gb(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function ea(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new nt(0,0))}static max(){return new ie(new nt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ql.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ql?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends Ql{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const yb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Ql{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return yb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new K(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new K(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Oe.fromString(e))}static fromName(e){return new J(Oe.fromString(e).popFirst(5))}static empty(){return new J(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Oe(e.slice()))}}function vb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new _i(i,J.empty(),e)}function kb(t){return new _i(t.readTime,t.key,-1)}class _i{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _i(ie.min(),J.empty(),-1)}static max(){return new _i(ie.max(),J.empty(),-1)}}function _b(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ku(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==Eb)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let u=0;u<o;u++){const d=u;n(e[d]).next(f=>{s[d]=f,++a,a===o&&r(s)},f=>i(f))}})}static doWhile(e,n){return new $((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function xb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _u(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class n1{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}n1.oe=-1;function Ah(t){return t==null}function Od(t){return t===0&&1/t==-1/0}function Tb(t){return typeof t=="number"&&Number.isInteger(t)&&!Od(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Eo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ET(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hc(this.root,e,this.comparator,!1)}getReverseIterator(){return new hc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hc(this.root,e,this.comparator,!0)}}class hc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??gt.RED,this.left=i??gt.EMPTY,this.right=o??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new gt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,i,o){return this}insert(e,n,r){return new gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tk(this.data.getIterator())}getIteratorFrom(e){return new tk(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class tk{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new ln([])}unionWith(e){let n=new kt(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ln(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ea(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new wT("Invalid base64 string: "+o):o}}(e);return new Et(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const Ib=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ei(t){if(Le(!!t),typeof t=="string"){let e=0;const n=Ib.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ho(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function i1(t){const e=t.mapValue.fields.__previous_value__;return r1(e)?i1(e):e}function Zl(t){const e=Ei(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,n,r,i,o,s,a,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=d}}class Xl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc={mapValue:{}};function fo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?r1(t)?4:Lb(t)?9007199254740991:Cb(t)?10:11:ne()}function ir(t,e){if(t===e)return!0;const n=fo(t);if(n!==fo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zl(t).isEqual(Zl(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Ei(i.timestampValue),a=Ei(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return ho(i.bytesValue).isEqual(ho(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Ke(i.geoPointValue.latitude)===Ke(o.geoPointValue.latitude)&&Ke(i.geoPointValue.longitude)===Ke(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Ke(i.integerValue)===Ke(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Ke(i.doubleValue),a=Ke(o.doubleValue);return s===a?Od(s)===Od(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return ea(t.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(ek(s)!==ek(a))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(a[u]===void 0||!ir(s[u],a[u])))return!1;return!0}(t,e);default:return ne()}}function Jl(t,e){return(t.values||[]).find(n=>ir(n,e))!==void 0}function ta(t,e){if(t===e)return 0;const n=fo(t),r=fo(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Ke(o.integerValue||o.doubleValue),u=Ke(s.integerValue||s.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return nk(t.timestampValue,e.timestampValue);case 4:return nk(Zl(t),Zl(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(o,s){const a=ho(o),u=ho(s);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),u=s.split("/");for(let d=0;d<a.length&&d<u.length;d++){const f=Ee(a[d],u[d]);if(f!==0)return f}return Ee(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=Ee(Ke(o.latitude),Ke(s.latitude));return a!==0?a:Ee(Ke(o.longitude),Ke(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return rk(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,u,d,f;const m=o.fields||{},E=s.fields||{},k=(a=m.value)===null||a===void 0?void 0:a.arrayValue,I=(u=E.value)===null||u===void 0?void 0:u.arrayValue,L=Ee(((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0,((f=I==null?void 0:I.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:rk(k,I)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===fc.mapValue&&s===fc.mapValue)return 0;if(o===fc.mapValue)return 1;if(s===fc.mapValue)return-1;const a=o.fields||{},u=Object.keys(a),d=s.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const E=Ee(u[m],f[m]);if(E!==0)return E;const k=ta(a[u[m]],d[f[m]]);if(k!==0)return k}return Ee(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ne()}}function nk(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=Ei(t),r=Ei(e),i=Ee(n.seconds,r.seconds);return i!==0?i:Ee(n.nanos,r.nanos)}function rk(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=ta(n[i],r[i]);if(o)return o}return Ee(n.length,r.length)}function na(t){return Fm(t)}function Fm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ei(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ho(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Fm(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Fm(n.fields[s])}`;return i+"}"}(t.mapValue):ne()}function ik(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wm(t){return!!t&&"integerValue"in t}function o1(t){return!!t&&"arrayValue"in t}function ok(t){return!!t&&"nullValue"in t}function sk(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hc(t){return!!t&&"mapValue"in t}function Cb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function kl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Eo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=kl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=kl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Lb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Hc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=kl(n)}setAll(e){let n=yt.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=kl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Hc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Hc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Eo(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Yt(kl(this.value))}}function xT(t){const e=[];return Eo(t.fields,(n,r)=>{const i=new yt([n]);if(Hc(r)){const o=xT(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new ln(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Pt(e,0,ie.min(),ie.min(),ie.min(),Yt.empty(),0)}static newFoundDocument(e,n,r,i){return new Pt(e,1,n,ie.min(),r,i,0)}static newNoDocument(e,n){return new Pt(e,2,n,ie.min(),ie.min(),Yt.empty(),0)}static newUnknownDocument(e,n){return new Pt(e,3,n,ie.min(),ie.min(),Yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Md{constructor(e,n){this.position=e,this.inclusive=n}}function ak(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=J.comparator(J.fromName(s.referenceValue),n.key):r=ta(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function lk(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ir(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class eu{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ab(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class TT{}class tt extends TT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Rb(e,n,r):n==="array-contains"?new Db(e,r):n==="in"?new Ob(e,r):n==="not-in"?new Mb(e,r):n==="array-contains-any"?new Nb(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bb(e,r):new jb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ta(n,this.value)):n!==null&&fo(this.value)===fo(n)&&this.matchesComparison(ta(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zn extends TT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new zn(e,n)}matches(e){return IT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function IT(t){return t.op==="and"}function ST(t){return Pb(t)&&IT(t)}function Pb(t){for(const e of t.filters)if(e instanceof zn)return!1;return!0}function Um(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+na(t.value);if(ST(t))return t.filters.map(e=>Um(e)).join(",");{const e=t.filters.map(n=>Um(n)).join(",");return`${t.op}(${e})`}}function CT(t,e){return t instanceof tt?function(r,i){return i instanceof tt&&r.op===i.op&&r.field.isEqual(i.field)&&ir(r.value,i.value)}(t,e):t instanceof zn?function(r,i){return i instanceof zn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&CT(s,i.filters[a]),!0):!1}(t,e):void ne()}function LT(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${na(n.value)}`}(t):t instanceof zn?function(n){return n.op.toString()+" {"+n.getFilters().map(LT).join(" ,")+"}"}(t):"Filter"}class Rb extends tt{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class bb extends tt{constructor(e,n){super(e,"in",n),this.keys=AT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jb extends tt{constructor(e,n){super(e,"not-in",n),this.keys=AT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function AT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class Db extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return o1(n)&&Jl(n.arrayValue,this.value)}}class Ob extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jl(this.value.arrayValue,n)}}class Mb extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jl(this.value.arrayValue,n)}}class Nb extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!o1(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Jl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function uk(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Vb(t,e,n,r,i,o,s)}function s1(t){const e=oe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Um(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ah(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>na(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>na(r)).join(",")),e.ue=n}return e.ue}function a1(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ab(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!CT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lk(t.startAt,e.startAt)&&lk(t.endAt,e.endAt)}function $m(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Fb(t,e,n,r,i,o,s,a){return new _a(t,e,n,r,i,o,s,a)}function l1(t){return new _a(t)}function ck(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function PT(t){return t.collectionGroup!==null}function _l(t){const e=oe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new kt(yt.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new eu(o,r))}),n.has(yt.keyField().canonicalString())||e.ce.push(new eu(yt.keyField(),r))}return e.ce}function nr(t){const e=oe(t);return e.le||(e.le=Wb(e,_l(t))),e.le}function Wb(t,e){if(t.limitType==="F")return uk(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new eu(i.field,o)});const n=t.endAt?new Md(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Md(t.startAt.position,t.startAt.inclusive):null;return uk(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zm(t,e){const n=t.filters.concat([e]);return new _a(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Nd(t,e,n){return new _a(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ph(t,e){return a1(nr(t),nr(e))&&t.limitType===e.limitType}function RT(t){return`${s1(nr(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>LT(i)).join(", ")}]`),Ah(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>na(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>na(i)).join(",")),`Target(${r})`}(nr(t))}; limitType=${t.limitType})`}function Rh(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):J.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of _l(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,u){const d=ak(s,a,u);return s.inclusive?d<=0:d<0}(r.startAt,_l(r),i)||r.endAt&&!function(s,a,u){const d=ak(s,a,u);return s.inclusive?d>=0:d>0}(r.endAt,_l(r),i))}(t,e)}function Ub(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bT(t){return(e,n)=>{let r=!1;for(const i of _l(t)){const o=$b(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function $b(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(o,s,a){const u=s.data.field(o),d=a.data.field(o);return u!==null&&d!==null?ta(u,d):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Eo(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return ET(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=new $e(J.comparator);function br(){return zb}const jT=new $e(J.comparator);function il(...t){let e=jT;for(const n of t)e=e.insert(n.key,n);return e}function DT(t){let e=jT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gi(){return El()}function OT(){return El()}function El(){return new Ea(t=>t.toString(),(t,e)=>t.isEqual(e))}const Bb=new $e(J.comparator),Hb=new kt(J.comparator);function me(...t){let e=Hb;for(const n of t)e=e.add(n);return e}const qb=new kt(Ee);function Yb(){return qb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Od(e)?"-0":e}}function MT(t){return{integerValue:""+t}}function Gb(t,e){return Tb(e)?MT(e):u1(t,e)}/**
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
 */class bh{constructor(){this._=void 0}}function Kb(t,e,n){return t instanceof tu?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&r1(o)&&(o=i1(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof nu?VT(t,e):t instanceof ru?FT(t,e):function(i,o){const s=NT(i,o),a=dk(s)+dk(i.Pe);return Wm(s)&&Wm(i.Pe)?MT(a):u1(i.serializer,a)}(t,e)}function Qb(t,e,n){return t instanceof nu?VT(t,e):t instanceof ru?FT(t,e):n}function NT(t,e){return t instanceof Vd?function(r){return Wm(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class tu extends bh{}class nu extends bh{constructor(e){super(),this.elements=e}}function VT(t,e){const n=WT(e);for(const r of t.elements)n.some(i=>ir(i,r))||n.push(r);return{arrayValue:{values:n}}}class ru extends bh{constructor(e){super(),this.elements=e}}function FT(t,e){let n=WT(e);for(const r of t.elements)n=n.filter(i=>!ir(i,r));return{arrayValue:{values:n}}}class Vd extends bh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function dk(t){return Ke(t.integerValue||t.doubleValue)}function WT(t){return o1(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n){this.field=e,this.transform=n}}function Xb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof nu&&i instanceof nu||r instanceof ru&&i instanceof ru?ea(r.elements,i.elements,ir):r instanceof Vd&&i instanceof Vd?ir(r.Pe,i.Pe):r instanceof tu&&i instanceof tu}(t.transform,e.transform)}class Jb{constructor(e,n){this.version=e,this.transformResults=n}}class xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jh{}function UT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new c1(t.key,xn.none()):new Eu(t.key,t.data,xn.none());{const n=t.data,r=Yt.empty();let i=new kt(yt.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Ri(t.key,r,new ln(i.toArray()),xn.none())}}function ej(t,e,n){t instanceof Eu?function(i,o,s){const a=i.value.clone(),u=fk(i.fieldTransforms,o,s.transformResults);a.setAll(u),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ri?function(i,o,s){if(!qc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=fk(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll($T(i)),u.setAll(a),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function wl(t,e,n,r){return t instanceof Eu?function(o,s,a,u){if(!qc(o.precondition,s))return a;const d=o.value.clone(),f=pk(o.fieldTransforms,u,s);return d.setAll(f),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ri?function(o,s,a,u){if(!qc(o.precondition,s))return a;const d=pk(o.fieldTransforms,u,s),f=s.data;return f.setAll($T(o)),f.setAll(d),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(o,s,a){return qc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function tj(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=NT(r.transform,i||null);o!=null&&(n===null&&(n=Yt.empty()),n.set(r.field,o))}return n||null}function hk(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ea(r,i,(o,s)=>Xb(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Eu extends jh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ri extends jh{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function $T(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function fk(t,e,n){const r=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Qb(s,a,n[i]))}return r}function pk(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,Kb(o,s,e))}return r}class c1 extends jh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nj extends jh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&ej(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=OT();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const u=UT(s,a);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&ea(this.mutations,e.mutations,(n,r)=>hk(n,r))&&ea(this.baseMutations,e.baseMutations,(n,r)=>hk(n,r))}}class d1{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Le(e.mutations.length===r.length);let i=function(){return Bb}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new d1(e,n,r,i)}}/**
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
 */class ij{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class oj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,ve;function sj(t){switch(t){default:return ne();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function zT(t){if(t===void 0)return Rr("GRPC error has no .code"),U.UNKNOWN;switch(t){case Xe.OK:return U.OK;case Xe.CANCELLED:return U.CANCELLED;case Xe.UNKNOWN:return U.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return U.INTERNAL;case Xe.UNAVAILABLE:return U.UNAVAILABLE;case Xe.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Xe.NOT_FOUND:return U.NOT_FOUND;case Xe.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Xe.ABORTED:return U.ABORTED;case Xe.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Xe.DATA_LOSS:return U.DATA_LOSS;default:return ne()}}(ve=Xe||(Xe={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function aj(){return new TextEncoder}/**
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
 */const lj=new Ji([4294967295,4294967295],0);function mk(t){const e=aj().encode(t),n=new fT;return n.update(e),new Uint8Array(n.digest())}function gk(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Ji([n,r],0),new Ji([i,o],0)]}class h1{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ol(`Invalid padding: ${n}`);if(r<0)throw new ol(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ol(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ol(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ji.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ji.fromNumber(r)));return i.compare(lj)===1&&(i=new Ji([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=mk(e),[r,i]=gk(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new h1(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=mk(e),[r,i]=gk(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ol extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,wu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dh(ie.min(),i,new $e(Ee),br(),me())}}class wu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wu(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class BT{constructor(e,n){this.targetId=e,this.me=n}}class HT{constructor(e,n,r=Et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class yk{constructor(){this.fe=0,this.ge=kk(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),n=me(),r=me();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new wu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=kk()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class uj{constructor(e){this.Le=e,this.Be=new Map,this.ke=br(),this.qe=vk(),this.Qe=new $e(Ee)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if($m(o))if(r===0){const s=new J(o.path);this.Ue(n,s,Pt.newNoDocument(s,ie.min()))}else Le(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),u=a?this.Xe(a,e,s):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=ho(r).toUint8Array()}catch(u){if(u instanceof wT)return Js("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new h1(s,i,o)}catch(u){return Js(u instanceof ol?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&$m(a.target)){const u=new J(a.target.path);this.ke.get(u)!==null||this.it(s,u)||this.Ue(s,u,Pt.newNoDocument(u,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=me();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Dh(e,n,this.Qe,this.ke,r);return this.ke=br(),this.qe=vk(),this.Qe=new $e(Ee),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new yk,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new kt(Ee),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new yk),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function vk(){return new $e(J.comparator)}function kk(){return new $e(J.comparator)}const cj={asc:"ASCENDING",desc:"DESCENDING"},dj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hj={and:"AND",or:"OR"};class fj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bm(t,e){return t.useProto3Json||Ah(e)?e:{value:e}}function Fd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pj(t,e){return Fd(t,e.toTimestamp())}function rr(t){return Le(!!t),ie.fromTimestamp(function(n){const r=Ei(n);return new nt(r.seconds,r.nanos)}(t))}function f1(t,e){return Hm(t,e).canonicalString()}function Hm(t,e){const n=function(i){return new Oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function YT(t){const e=Oe.fromString(t);return Le(XT(e)),e}function qm(t,e){return f1(t.databaseId,e.path)}function ap(t,e){const n=YT(e);if(n.get(1)!==t.databaseId.projectId)throw new K(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(KT(n))}function GT(t,e){return f1(t.databaseId,e)}function mj(t){const e=YT(t);return e.length===4?Oe.emptyPath():KT(e)}function Ym(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function KT(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _k(t,e,n){return{name:qm(t,e),fields:n.value.mapValue.fields}}function gj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,f){return d.useProto3Json?(Le(f===void 0||typeof f=="string"),Et.fromBase64String(f||"")):(Le(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(d){const f=d.code===void 0?U.UNKNOWN:zT(d.code);return new K(f,d.message||"")}(s);n=new HT(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ap(t,r.document.name),o=rr(r.document.updateTime),s=r.document.createTime?rr(r.document.createTime):ie.min(),a=new Yt({mapValue:{fields:r.document.fields}}),u=Pt.newFoundDocument(i,o,s,a),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Yc(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ap(t,r.document),o=r.readTime?rr(r.readTime):ie.min(),s=Pt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Yc([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ap(t,r.document),o=r.removedTargetIds||[];n=new Yc([],o,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new oj(i,o),a=r.targetId;n=new BT(a,s)}}return n}function yj(t,e){let n;if(e instanceof Eu)n={update:_k(t,e.key,e.value)};else if(e instanceof c1)n={delete:qm(t,e.key)};else if(e instanceof Ri)n={update:_k(t,e.key,e.data),updateMask:Sj(e.fieldMask)};else{if(!(e instanceof nj))return ne();n={verify:qm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof tu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof nu)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ru)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Vd)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:pj(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ne()}(t,e.precondition)),n}function vj(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?rr(i.updateTime):rr(o);return s.isEqual(ie.min())&&(s=rr(o)),new Jb(s,i.transformResults||[])}(n,e))):[]}function kj(t,e){return{documents:[GT(t,e.path)]}}function _j(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=GT(t,i);const o=function(d){if(d.length!==0)return ZT(zn.create(d,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(d){if(d.length!==0)return d.map(f=>function(E){return{field:ys(E.field),direction:xj(E.dir)}}(f))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=Bm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function Ej(t){let e=mj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Le(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=function(m){const E=QT(m);return E instanceof zn&&ST(E)?E.getFilters():[E]}(n.where));let s=[];n.orderBy&&(s=function(m){return m.map(E=>function(I){return new eu(vs(I.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(E))}(n.orderBy));let a=null;n.limit&&(a=function(m){let E;return E=typeof m=="object"?m.value:m,Ah(E)?null:E}(n.limit));let u=null;n.startAt&&(u=function(m){const E=!!m.before,k=m.values||[];return new Md(k,E)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const E=!m.before,k=m.values||[];return new Md(k,E)}(n.endAt)),Fb(e,i,s,o,a,"F",u,d)}function wj(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function QT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vs(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=vs(n.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=vs(n.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=vs(n.unaryFilter.field);return tt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return tt.create(vs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zn.create(n.compositeFilter.filters.map(r=>QT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function xj(t){return cj[t]}function Tj(t){return dj[t]}function Ij(t){return hj[t]}function ys(t){return{fieldPath:t.canonicalString()}}function vs(t){return yt.fromServerFormat(t.fieldPath)}function ZT(t){return t instanceof tt?function(n){if(n.op==="=="){if(sk(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NAN"}};if(ok(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sk(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NAN"}};if(ok(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(n.field),op:Tj(n.op),value:n.value}}}(t):t instanceof zn?function(n){const r=n.getFilters().map(i=>ZT(i));return r.length===1?r[0]:{compositeFilter:{op:Ij(n.op),filters:r}}}(t):ne()}function Sj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function XT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r,i,o=ie.min(),s=ie.min(),a=Et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cj{constructor(e){this.ct=e}}function Lj(t){const e=Ej({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aj{constructor(){this.un=new Pj}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(_i.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(_i.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class Pj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new kt(Oe.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new kt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Rj{constructor(){this.changes=new Ea(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jj{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&wl(r.mutation,i,ln.empty(),nt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const i=Gi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=il();return o.forEach((a,u)=>{s=s.insert(a,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Gi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=br();const s=El(),a=function(){return El()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Ri)?o=o.insert(d.key,d):f!==void 0?(s.set(d.key,f.mutation.getFieldMask()),wl(f.mutation,d,f.mutation.getFieldMask(),nt.now())):s.set(d.key,ln.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((d,f)=>s.set(d,f)),n.forEach((d,f)=>{var m;return a.set(d,new bj(f,(m=s.get(d))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,n){const r=El();let i=new $e((s,a)=>s-a),o=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||ln.empty();f=a.applyToLocalView(d,f),r.set(u,f);const m=(i.get(a.batchId)||me()).add(u);i=i.insert(a.batchId,m)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),d=u.key,f=u.value,m=OT();f.forEach(E=>{if(!o.has(E)){const k=UT(n.get(E),r.get(E));k!==null&&m.set(E,k),o=o.add(E)}}),s.push(this.documentOverlayCache.saveOverlays(e,d,m))}return $.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return J.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):PT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):$.resolve(Gi());let a=-1,u=o;return s.next(d=>$.forEach(d,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),o.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{u=u.insert(f,E)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,u,d,me())).next(f=>({batchId:a,changes:DT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=il();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=il();return this.indexManager.getCollectionParents(e,o).next(a=>$.forEach(a,u=>{const d=function(m,E){return new _a(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,E)=>{s=s.insert(m,E)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,d)=>{const f=d.getKey();s.get(f)===null&&(s=s.insert(f,Pt.newInvalidDocument(f)))});let a=il();return s.forEach((u,d)=>{const f=o.get(u);f!==void 0&&wl(f.mutation,d,ln.empty(),nt.now()),Rh(n,d)&&(a=a.insert(u,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dj{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:rr(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Lj(i.bundledQuery),readTime:rr(i.readTime)}}(n)),$.resolve()}}/**
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
 */class Oj{constructor(){this.overlays=new $e(J.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gi();return $.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Gi(),o=n.length+1,s=new J(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const u=a.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new $e((d,f)=>d-f);const s=this.overlays.getIterator();for(;s.hasNext();){const d=s.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=o.get(d.largestBatchId);f===null&&(f=Gi(),o=o.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const a=Gi(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>a.set(d,f)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new ij(n,r));let o=this.Ir.get(n);o===void 0&&(o=me(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
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
 */class Mj{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.Tr=new kt(st.Er),this.dr=new kt(st.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new st(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new J(new Oe([])),r=new st(n,e),i=new st(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new J(new Oe([])),r=new st(n,e),i=new st(n,e+1);let o=me();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new st(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return J.comparator(e.key,n.key)||Ee(e.wr,n.wr)}static Ar(e,n){return Ee(e.wr,n.wr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new kt(st.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new rj(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new st(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(s)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return $.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),i=new st(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const a=this.Dr(s.wr);o.push(a)}),$.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new kt(Ee);return n.forEach(i=>{const o=new st(i,0),s=new st(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],a=>{r=r.add(a.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;J.isDocumentKey(o)||(o=o.child(""));const s=new st(new J(o),0);let a=new kt(Ee);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(u.wr)),!0)},s),$.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const o=new st(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new st(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vj{constructor(e){this.Mr=e,this.docs=function(){return new $e(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(n))}getEntries(e,n){let r=br();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Pt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=br();const s=n.path,a=new J(s.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!s.isPrefixOf(d.path))break;d.path.length>s.length+1||_b(kb(f),r)<=0||(i.has(f.key)||Rh(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return $.resolve(o)}getAllFromCollectionGroup(e,n,r,i){ne()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Fj(this)}getSize(e){return $.resolve(this.size)}}class Fj extends Rj{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wj{constructor(e){this.persistence=e,this.Nr=new Ea(n=>s1(n),a1),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Lr=0,this.Br=new p1,this.targetCount=0,this.kr=ra.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ra(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(o).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),$.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uj{constructor(e,n){this.qr={},this.overlays={},this.Qr=new n1(0),this.Kr=!1,this.Kr=!0,this.$r=new Mj,this.referenceDelegate=e(this),this.Ur=new Wj(this),this.indexManager=new Aj,this.remoteDocumentCache=function(i){return new Vj(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Cj(n),this.Gr=new Dj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Oj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Nj(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const i=new $j(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class $j extends wb{constructor(e){super(),this.currentSequenceNumber=e}}class m1{constructor(e){this.persistence=e,this.Jr=new p1,this.Yr=null}static Zr(e){return new m1(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=J.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,ie.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=me(),i=me();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new g1(e,n.fromCache,r,i)}}/**
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
 */class zj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bj{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return TL()?8:xb(bt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new zj;return this.Xi(e,n,s).next(a=>{if(o.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ha()<=ge.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Ha()<=ge.DEBUG&&Z("QueryEngine","Query:",gs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ha()<=ge.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nr(n))):$.resolve())}Yi(e,n){if(ck(n))return $.resolve(null);let r=nr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nd(n,null,"F"),r=nr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=me(...o);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,a);return this.ns(n,d,s,u.readTime)?this.Yi(e,Nd(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return ck(n)||i.isEqual(ie.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?$.resolve(null):(Ha()<=ge.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gs(n)),this.rs(e,s,n,vb(i,-1)).next(a=>a))})}ts(e,n){let r=new kt(bT(e));return n.forEach((i,o)=>{Rh(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return Ha()<=ge.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",gs(n)),this.Ji.getDocumentsMatchingQuery(e,n,_i.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hj{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new $e(Ee),this._s=new Ea(o=>s1(o),a1),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jj(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function qj(t,e,n,r){return new Hj(t,e,n,r)}async function JT(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let u=me();for(const d of i){s.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of o){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:s,addedBatchIds:a}))})})}function Yj(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,d,f){const m=d.batch,E=m.keys();let k=$.resolve();return E.forEach(I=>{k=k.next(()=>f.getEntry(u,I)).next(L=>{const T=d.docVersions.get(I);Le(T!==null),L.version.compareTo(T)<0&&(m.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),f.addEntry(L)))})}),k.next(()=>a.mutationQueue.removeMutationBatch(u,m))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=me();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(u=u.add(a.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function e8(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Gj(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,m)=>{const E=i.get(m);if(!E)return;a.push(n.Ur.removeMatchingKeys(o,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(o,f.addedDocuments,m)));let k=E.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(m)!==null?k=k.withResumeToken(Et.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),i=i.insert(m,k),function(L,T,y){return L.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(E,k,f)&&a.push(n.Ur.updateTargetData(o,k))});let u=br(),d=me();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))}),a.push(Kj(o,s,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(ie.min())){const f=n.Ur.getLastRemoteSnapshotVersion(o).next(m=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(f)}return $.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,u,d)).next(()=>u)}).then(o=>(n.os=i,o))}function Kj(t,e,n){let r=me(),i=me();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=br();return n.forEach((a,u)=>{const d=o.get(a);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ie.min())?(e.removeEntry(a,u.readTime),s=s.insert(a,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),s=s.insert(a,u)):Z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",u.version)}),{Ps:s,Is:i}})}function Qj(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Zj(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,$.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new ti(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Gm(t,e,n){const r=oe(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!_u(s))throw s;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Ek(t,e,n){const r=oe(t);let i=ie.min(),o=me();return r.persistence.runTransaction("Execute query","readwrite",s=>function(u,d,f){const m=oe(u),E=m._s.get(f);return E!==void 0?$.resolve(m.os.get(E)):m.Ur.getTargetData(d,f)}(r,s,nr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(u=>{o=u})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:ie.min(),n?o:me())).next(a=>(Xj(r,Ub(e),a),{documents:a,Ts:o})))}function Xj(t,e,n){let r=t.us.get(e)||ie.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class wk{constructor(){this.activeTargetIds=Yb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jj{constructor(){this.so=new wk,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new wk,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pc=null;function lp(){return pc===null?pc=function(){return 268435456+Math.round(2147483648*Math.random())}():pc++,"0x"+pc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class r5 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const a=lp(),u=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,s),this.No(n,u,d,i).then(f=>(Z("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw Js("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,o,s,a){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ka}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=t5[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=lp();return new Promise((s,a)=>{const u=new pT;u.setWithCredentials(!0),u.listenOnce(mT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Bc.NO_ERROR:const f=u.getResponseJson();Z(Ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),s(f);break;case Bc.TIMEOUT:Z(Ct,`RPC '${e}' ${o} timed out`),a(new K(U.DEADLINE_EXCEEDED,"Request time out"));break;case Bc.HTTP_ERROR:const m=u.getStatus();if(Z(Ct,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const k=E==null?void 0:E.error;if(k&&k.status&&k.message){const I=function(T){const y=T.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(y)>=0?y:U.UNKNOWN}(k.status);a(new K(I,k.message))}else a(new K(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new K(U.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{Z(Ct,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);Z(Ct,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=lp(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=vT(),a=yT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=o.join("");Z(Ct,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=s.createWebChannel(f,u);let E=!1,k=!1;const I=new n5({Io:T=>{k?Z(Ct,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(E||(Z(Ct,`Opening RPC '${e}' stream ${i} transport.`),m.open(),E=!0),Z(Ct,`RPC '${e}' stream ${i} sending:`,T),m.send(T))},To:()=>m.close()}),L=(T,y,g)=>{T.listen(y,_=>{try{g(_)}catch(w){setTimeout(()=>{throw w},0)}})};return L(m,rl.EventType.OPEN,()=>{k||(Z(Ct,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),L(m,rl.EventType.CLOSE,()=>{k||(k=!0,Z(Ct,`RPC '${e}' stream ${i} transport closed`),I.So())}),L(m,rl.EventType.ERROR,T=>{k||(k=!0,Js(Ct,`RPC '${e}' stream ${i} transport errored:`,T),I.So(new K(U.UNAVAILABLE,"The operation could not be completed")))}),L(m,rl.EventType.MESSAGE,T=>{var y;if(!k){const g=T.data[0];Le(!!g);const _=g,w=_.error||((y=_[0])===null||y===void 0?void 0:y.error);if(w){Z(Ct,`RPC '${e}' stream ${i} received error:`,w);const R=w.status;let O=function(A){const b=Xe[A];if(b!==void 0)return zT(b)}(R),x=w.message;O===void 0&&(O=U.INTERNAL,x="Unknown error status: "+R+" with message "+w.message),k=!0,I.So(new K(O,x)),m.close()}else Z(Ct,`RPC '${e}' stream ${i} received:`,g),I.bo(g)}}),L(a,gT.STAT_EVENT,T=>{T.stat===Vm.PROXY?Z(Ct,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===Vm.NOPROXY&&Z(Ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function up(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t){return new fj(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t8{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8{constructor(e,n,r,i,o,s,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new t8(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Rr(n.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class i5 extends n8{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=gj(this.serializer,e),r=function(o){if(!("targetChange"in o))return ie.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?ie.min():s.readTime?rr(s.readTime):ie.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ym(this.serializer),n.addTarget=function(o,s){let a;const u=s.target;if(a=$m(u)?{documents:kj(o,u)}:{query:_j(o,u)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=qT(o,s.resumeToken);const d=Bm(o,s.expectedCount);d!==null&&(a.expectedCount=d)}else if(s.snapshotVersion.compareTo(ie.min())>0){a.readTime=Fd(o,s.snapshotVersion.toTimestamp());const d=Bm(o,s.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=wj(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ym(this.serializer),n.removeTarget=e,this.a_(n)}}class o5 extends n8{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Le(!!e.streamToken),this.lastStreamToken=e.streamToken,Le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=vj(e.writeResults,e.commitTime),r=rr(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ym(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yj(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Hm(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(U.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,Hm(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(U.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class a5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Rr(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l5{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{wo(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=oe(u);d.L_.add(4),await xu(d),d.q_.set("Unknown"),d.L_.delete(4),await Mh(d)}(this))})}),this.q_=new a5(r,i)}}async function Mh(t){if(wo(t))for(const e of t.B_)await e(!0)}async function xu(t){for(const e of t.B_)await e(!1)}function r8(t,e){const n=oe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),_1(n)?k1(n):wa(n).r_()&&v1(n,e))}function y1(t,e){const n=oe(t),r=wa(n);n.N_.delete(e),r.r_()&&i8(n,e),n.N_.size===0&&(r.r_()?r.o_():wo(n)&&n.q_.set("Unknown"))}function v1(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}wa(t).A_(e)}function i8(t,e){t.Q_.xe(e),wa(t).R_(e)}function k1(t){t.Q_=new uj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),wa(t).start(),t.q_.v_()}function _1(t){return wo(t)&&!wa(t).n_()&&t.N_.size>0}function wo(t){return oe(t).L_.size===0}function o8(t){t.Q_=void 0}async function u5(t){t.q_.set("Online")}async function c5(t){t.N_.forEach((e,n)=>{v1(t,e)})}async function d5(t,e){o8(t),_1(t)?(t.q_.M_(e),k1(t)):t.q_.set("Unknown")}async function h5(t,e,n){if(t.q_.set("Online"),e instanceof HT&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wd(t,r)}else if(e instanceof Yc?t.Q_.Ke(e):e instanceof BT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ie.min()))try{const r=await e8(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.Q_.rt(s);return a.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=o.N_.get(d);f&&o.N_.set(d,f.withResumeToken(u.resumeToken,s))}}),a.targetMismatches.forEach((u,d)=>{const f=o.N_.get(u);if(!f)return;o.N_.set(u,f.withResumeToken(Et.EMPTY_BYTE_STRING,f.snapshotVersion)),i8(o,u);const m=new ti(f.target,u,d,f.sequenceNumber);v1(o,m)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Wd(t,r)}}async function Wd(t,e,n){if(!_u(e))throw e;t.L_.add(1),await xu(t),t.q_.set("Offline"),n||(n=()=>e8(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Mh(t)})}function s8(t,e){return e().catch(n=>Wd(t,n,e))}async function Nh(t){const e=oe(t),n=wi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;f5(e);)try{const i=await Qj(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,p5(e,i)}catch(i){await Wd(e,i)}a8(e)&&l8(e)}function f5(t){return wo(t)&&t.O_.length<10}function p5(t,e){t.O_.push(e);const n=wi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function a8(t){return wo(t)&&!wi(t).n_()&&t.O_.length>0}function l8(t){wi(t).start()}async function m5(t){wi(t).p_()}async function g5(t){const e=wi(t);for(const n of t.O_)e.m_(n.mutations)}async function y5(t,e,n){const r=t.O_.shift(),i=d1.from(r,e,n);await s8(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Nh(t)}async function v5(t,e){e&&wi(t).V_&&await async function(r,i){if(function(s){return sj(s)&&s!==U.ABORTED}(i.code)){const o=r.O_.shift();wi(r).s_(),await s8(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Nh(r)}}(t,e),a8(t)&&l8(t)}async function Tk(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=wo(n);n.L_.add(3),await xu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Mh(n)}async function k5(t,e){const n=oe(t);e?(n.L_.delete(2),await Mh(n)):e||(n.L_.add(2),await xu(n),n.q_.set("Unknown"))}function wa(t){return t.K_||(t.K_=function(n,r,i){const o=oe(n);return o.w_(),new i5(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:u5.bind(null,t),Ro:c5.bind(null,t),mo:d5.bind(null,t),d_:h5.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),_1(t)?k1(t):t.q_.set("Unknown")):(await t.K_.stop(),o8(t))})),t.K_}function wi(t){return t.U_||(t.U_=function(n,r,i){const o=oe(n);return o.w_(),new o5(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:m5.bind(null,t),mo:v5.bind(null,t),f_:g5.bind(null,t),g_:y5.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Nh(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new E1(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function w1(t,e){if(Rr("AsyncQueue",`${e}: ${t}`),_u(t))return new K(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=il(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Ik{constructor(){this.W_=new $e(J.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ia{constructor(e,n,r,i,o,s,a,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new ia(e,n,Bs.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ph(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _5{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class E5{constructor(){this.queries=Sk(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=oe(n),o=i.queries;i.queries=Sk(),o.forEach((s,a)=>{for(const u of a.j_)u.onError(r)})})(this,new K(U.ABORTED,"Firestore shutting down"))}}function Sk(){return new Ea(t=>RT(t),Ph)}async function u8(t,e){const n=oe(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new _5,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=w1(s,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&x1(n)}async function c8(t,e){const n=oe(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function w5(t,e){const n=oe(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.j_)a.X_(i)&&(r=!0);s.z_=i}}r&&x1(n)}function x5(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function x1(t){t.Y_.forEach(e=>{e.next()})}var Km,Ck;(Ck=Km||(Km={})).ea="default",Ck.Cache="cache";class d8{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ia(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ia.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Km.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h8{constructor(e){this.key=e}}class f8{constructor(e){this.key=e}}class T5{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=me(),this.mutatedKeys=me(),this.Aa=bT(e),this.Ra=new Bs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ik,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const E=i.get(f),k=Rh(this.query,m)?m:null,I=!!E&&this.mutatedKeys.has(E.key),L=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let T=!1;E&&k?E.data.isEqual(k.data)?I!==L&&(r.track({type:3,doc:k}),T=!0):this.ga(E,k)||(r.track({type:2,doc:k}),T=!0,(u&&this.Aa(k,u)>0||d&&this.Aa(k,d)<0)&&(a=!0)):!E&&k?(r.track({type:0,doc:k}),T=!0):E&&!k&&(r.track({type:1,doc:E}),T=!0,(u||d)&&(a=!0)),T&&(k?(s=s.add(k),o=L?o.add(f):o.delete(f)):(s=s.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{Ra:s,fa:r,ns:a,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((f,m)=>function(k,I){const L=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return L(k)-L(I)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,s.length!==0||d?{snapshot:new ia(this.query,e.Ra,o,s,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ik,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=me(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new f8(r))}),this.da.forEach(r=>{e.has(r)||n.push(new h8(r))}),n}ba(e){this.Ta=e.Ts,this.da=me();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ia.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class I5{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class S5{constructor(e){this.key=e,this.va=!1}}class C5{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Ea(a=>RT(a),Ph),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(J.comparator),this.Na=new Map,this.La=new p1,this.Ba={},this.ka=new Map,this.qa=ra.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function L5(t,e,n=!0){const r=k8(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await p8(r,e,n,!0),i}async function A5(t,e){const n=k8(t);await p8(n,e,!0,!1)}async function p8(t,e,n,r){const i=await Zj(t.localStore,nr(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await P5(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&r8(t.remoteStore,i),a}async function P5(t,e,n,r,i){t.Ka=(m,E,k)=>async function(L,T,y,g){let _=T.view.ma(y);_.ns&&(_=await Ek(L.localStore,T.query,!1).then(({documents:x})=>T.view.ma(x,_)));const w=g&&g.targetChanges.get(T.targetId),R=g&&g.targetMismatches.get(T.targetId)!=null,O=T.view.applyChanges(_,L.isPrimaryClient,w,R);return Ak(L,T.targetId,O.wa),O.snapshot}(t,m,E,k);const o=await Ek(t.localStore,e,!0),s=new T5(e,o.Ts),a=s.ma(o.documents),u=wu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=s.applyChanges(a,t.isPrimaryClient,u);Ak(t,n,d.wa);const f=new I5(e,n,s);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function R5(t,e,n){const r=oe(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!Ph(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Gm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&y1(r.remoteStore,i.targetId),Qm(r,i.targetId)}).catch(ku)):(Qm(r,i.targetId),await Gm(r.localStore,i.targetId,!0))}async function b5(t,e){const n=oe(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),y1(n.remoteStore,r.targetId))}async function j5(t,e,n){const r=W5(t);try{const i=await function(s,a){const u=oe(s),d=nt.now(),f=a.reduce((k,I)=>k.add(I.key),me());let m,E;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let I=br(),L=me();return u.cs.getEntries(k,f).next(T=>{I=T,I.forEach((y,g)=>{g.isValidDocument()||(L=L.add(y))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,I)).next(T=>{m=T;const y=[];for(const g of a){const _=tj(g,m.get(g.key).overlayedDocument);_!=null&&y.push(new Ri(g.key,_,xT(_.value.mapValue),xn.exists(!0)))}return u.mutationQueue.addMutationBatch(k,d,y,a)}).next(T=>{E=T;const y=T.applyToLocalDocumentSet(m,L);return u.documentOverlayCache.saveOverlays(k,T.batchId,y)})}).then(()=>({batchId:E.batchId,changes:DT(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,u){let d=s.Ba[s.currentUser.toKey()];d||(d=new $e(Ee)),d=d.insert(a,u),s.Ba[s.currentUser.toKey()]=d}(r,i.batchId,n),await Tu(r,i.changes),await Nh(r.remoteStore)}catch(i){const o=w1(i,"Failed to persist write");n.reject(o)}}async function m8(t,e){const n=oe(t);try{const r=await Gj(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?Le(s.va):i.removedDocuments.size>0&&(Le(s.va),s.va=!1))}),await Tu(n,r,e)}catch(r){await ku(r)}}function Lk(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const a=s.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const u=oe(s);u.onlineState=a;let d=!1;u.queries.forEach((f,m)=>{for(const E of m.j_)E.Z_(a)&&(d=!0)}),d&&x1(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function D5(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new $e(J.comparator);s=s.insert(o,Pt.newNoDocument(o,ie.min()));const a=me().add(o),u=new Dh(ie.min(),new Map,new $e(Ee),s,a);await m8(r,u),r.Oa=r.Oa.remove(o),r.Na.delete(e),T1(r)}else await Gm(r.localStore,e,!1).then(()=>Qm(r,e,n)).catch(ku)}async function O5(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await Yj(n.localStore,e);y8(n,r,null),g8(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tu(n,i)}catch(i){await ku(i)}}async function M5(t,e,n){const r=oe(t);try{const i=await function(s,a){const u=oe(s);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,a).next(m=>(Le(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);y8(r,e,n),g8(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Tu(r,i)}catch(i){await ku(i)}}function g8(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function y8(t,e,n){const r=oe(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Qm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||v8(t,r)})}function v8(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(y1(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),T1(t))}function Ak(t,e,n){for(const r of n)r instanceof h8?(t.La.addReference(r.key,e),N5(t,r)):r instanceof f8?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||v8(t,r.key)):ne()}function N5(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),T1(t))}function T1(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new J(Oe.fromString(e)),r=t.qa.next();t.Na.set(r,new S5(n)),t.Oa=t.Oa.insert(n,r),r8(t.remoteStore,new ti(nr(l1(n.path)),r,"TargetPurposeLimboResolution",n1.oe))}}async function Tu(t,e,n){const r=oe(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{s.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=g1.Wi(u.targetId,d);o.push(m)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(u,d){const f=oe(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>$.forEach(d,E=>$.forEach(E.$i,k=>f.persistence.referenceDelegate.addReference(m,E.targetId,k)).next(()=>$.forEach(E.Ui,k=>f.persistence.referenceDelegate.removeReference(m,E.targetId,k)))))}catch(m){if(!_u(m))throw m;Z("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const E=m.targetId;if(!m.fromCache){const k=f.os.get(E),I=k.snapshotVersion,L=k.withLastLimboFreeSnapshotVersion(I);f.os=f.os.insert(E,L)}}}(r.localStore,o))}async function V5(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await JT(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(a=>{a.forEach(u=>{u.reject(new K(U.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Tu(n,r.hs)}}function F5(t,e){const n=oe(t),r=n.Na.get(e);if(r&&r.va)return me().add(r.key);{let i=me();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const a=n.Fa.get(s);i=i.unionWith(a.view.Va)}return i}}function k8(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=m8.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=F5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=D5.bind(null,e),e.Ca.d_=w5.bind(null,e.eventManager),e.Ca.$a=x5.bind(null,e.eventManager),e}function W5(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=O5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=M5.bind(null,e),e}class Ud{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Oh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return qj(this.persistence,new Bj,e.initialUser,this.serializer)}Ga(e){return new Uj(m1.Zr,this.serializer)}Wa(e){return new Jj}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ud.provider={build:()=>new Ud};class Zm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lk(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=V5.bind(null,this.syncEngine),await k5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new E5}()}createDatastore(e){const n=Oh(e.databaseInfo.databaseId),r=function(o){return new r5(o)}(e.databaseInfo);return function(o,s,a,u){return new s5(o,s,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new l5(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Lk(this.syncEngine,n,0),function(){return xk.D()?new xk:new e5}())}createSyncEngine(e,n){return function(i,o,s,a,u,d,f){const m=new C5(i,o,s,a,u,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=oe(i);Z("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await xu(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Zm.provider={build:()=>new Zm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _8{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Rr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U5{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Lt.UNAUTHENTICATED,this.clientId=_T.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{Z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=w1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cp(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await JT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Pk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $5(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Tk(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Tk(e.remoteStore,i)),t._onlineComponents=e}async function $5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await cp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Js("Error using user provided cache. Falling back to memory cache: "+n),await cp(t,new Ud)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await cp(t,new Ud);return t._offlineComponents}async function E8(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await Pk(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await Pk(t,new Zm))),t._onlineComponents}function z5(t){return E8(t).then(e=>e.syncEngine)}async function w8(t){const e=await E8(t),n=e.eventManager;return n.onListen=L5.bind(null,e.syncEngine),n.onUnlisten=R5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=A5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=b5.bind(null,e.syncEngine),n}function B5(t,e,n={}){const r=new Tr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,d){const f=new _8({next:E=>{f.Za(),s.enqueueAndForget(()=>c8(o,m));const k=E.docs.has(a);!k&&E.fromCache?d.reject(new K(U.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&E.fromCache&&u&&u.source==="server"?d.reject(new K(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new d8(l1(a.path),f,{includeMetadataChanges:!0,_a:!0});return u8(o,m)}(await w8(t),t.asyncQueue,e,n,r)),r.promise}function H5(t,e,n={}){const r=new Tr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,d){const f=new _8({next:E=>{f.Za(),s.enqueueAndForget(()=>c8(o,m)),E.fromCache&&u.source==="server"?d.reject(new K(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new d8(a,f,{includeMetadataChanges:!0,_a:!0});return u8(o,m)}(await w8(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const Rk=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T8(t,e,n){if(!n)throw new K(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function q5(t,e,n,r){if(e===!0&&r===!0)throw new K(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bk(t){if(!J.isDocumentKey(t))throw new K(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jk(t){if(J.isDocumentKey(t))throw new K(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function Bn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vh(t);throw new K(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}q5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=x8((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new K(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new K(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new K(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dk({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dk(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ub;switch(r.type){case"firstParty":return new fb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Rk.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Rk.delete(n),r.terminate())}(this),Promise.resolve()}}function Y5(t,e,n,r={}){var i;const o=(t=Bn(t,Fh))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Lt.MOCK_USER;else{a=wx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new K(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Lt(d)}t._authCredentials=new cb(new kT(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bi(this.firestore,e,this._query)}}class Ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}}class pi extends bi{constructor(e,n,r){super(e,n,l1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new J(e))}withConverter(e){return new pi(this.firestore,e,this._path)}}function un(t,e,...n){if(t=Ue(t),T8("collection","path",e),t instanceof Fh){const r=Oe.fromString(e,...n);return jk(r),new pi(t,null,r)}{if(!(t instanceof Ut||t instanceof pi))throw new K(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return jk(r),new pi(t.firestore,null,r)}}function ut(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=_T.newId()),T8("doc","path",e),t instanceof Fh){const r=Oe.fromString(e,...n);return bk(r),new Ut(t,null,new J(r))}{if(!(t instanceof Ut||t instanceof pi))throw new K(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return bk(r),new Ut(t.firestore,t instanceof pi?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new t8(this,"async_queue_retry"),this.Vu=()=>{const r=up();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=up();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=up();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Tr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!_u(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw Rr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=E1.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class xo extends Fh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Ok,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ok(e),this._firestoreClient=void 0,await e}}}function G5(t,e){const n=typeof t=="object"?t:Ih(),r=typeof t=="string"?t:"(default)",i=Ai(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=kx("firestore");o&&Y5(i,...o)}return i}function I1(t){if(t._terminated)throw new K(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||K5(t),t._firestoreClient}function K5(t){var e,n,r;const i=t._freezeSettings(),o=function(a,u,d,f){return new Sb(a,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,x8(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new U5(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oa(Et.fromBase64String(e))}catch(n){throw new K(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new oa(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uh=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
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
 */const Q5=/^__.*__$/;class Z5{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new Eu(e,this.data,n,this.fieldTransforms)}}class I8{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function S8(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class L1{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new L1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return $d(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(S8(this.Cu)&&Q5.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class X5{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Oh(e)}Qu(e,n,r,i=!1){return new L1({Cu:e,methodName:n,qu:r,path:yt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $h(t){const e=t._freezeSettings(),n=Oh(t._databaseId);return new X5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function C8(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);P1("Data must be an object, but it was:",s,r);const a=L8(r,s);let u,d;if(o.merge)u=new ln(s.fieldMask),d=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const m of o.mergeFields){const E=Xm(e,m,n);if(!s.contains(E))throw new K(U.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);P8(f,E)||f.push(E)}u=new ln(f),d=s.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=s.fieldTransforms;return new Z5(new Yt(a),u,d)}class zh extends Uh{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zh}}class A1 extends Uh{_toFieldTransform(e){return new Zb(e.path,new tu)}isEqual(e){return e instanceof A1}}function J5(t,e,n,r){const i=t.Qu(1,e,n);P1("Data must be an object, but it was:",i,r);const o=[],s=Yt.empty();Eo(r,(u,d)=>{const f=R1(e,u,n);d=Ue(d);const m=i.Nu(f);if(d instanceof zh)o.push(f);else{const E=Iu(d,m);E!=null&&(o.push(f),s.set(f,E))}});const a=new ln(o);return new I8(s,a,i.fieldTransforms)}function eD(t,e,n,r,i,o){const s=t.Qu(1,e,n),a=[Xm(e,r,n)],u=[i];if(o.length%2!=0)throw new K(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<o.length;E+=2)a.push(Xm(e,o[E])),u.push(o[E+1]);const d=[],f=Yt.empty();for(let E=a.length-1;E>=0;--E)if(!P8(d,a[E])){const k=a[E];let I=u[E];I=Ue(I);const L=s.Nu(k);if(I instanceof zh)d.push(k);else{const T=Iu(I,L);T!=null&&(d.push(k),f.set(k,T))}}const m=new ln(d);return new I8(f,m,s.fieldTransforms)}function tD(t,e,n,r=!1){return Iu(n,t.Qu(r?4:3,e))}function Iu(t,e){if(A8(t=Ue(t)))return P1("Unsupported field value:",e,t),L8(t,e);if(t instanceof Uh)return function(r,i){if(!S8(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let u=Iu(a,i.Lu(s));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=Ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Gb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=nt.fromDate(r);return{timestampValue:Fd(i.serializer,o)}}if(r instanceof nt){const o=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fd(i.serializer,o)}}if(r instanceof S1)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof oa)return{bytesValue:qT(i.serializer,r._byteString)};if(r instanceof Ut){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:f1(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof C1)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return u1(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Vh(r)}`)}(t,e)}function L8(t,e){const n={};return ET(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Eo(t,(r,i)=>{const o=Iu(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function A8(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof S1||t instanceof oa||t instanceof Ut||t instanceof Uh||t instanceof C1)}function P1(t,e,n){if(!A8(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Vh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Xm(t,e,n){if((e=Ue(e))instanceof Wh)return e._internalPath;if(typeof e=="string")return R1(t,e);throw $d("Field path arguments must be of type string or ",t,!1,void 0,n)}const nD=new RegExp("[~\\*/\\[\\]]");function R1(t,e,n){if(e.search(nD)>=0)throw $d(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wh(...e.split("."))._internalPath}catch{throw $d(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $d(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new K(U.INVALID_ARGUMENT,a+t+u)}function P8(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R8{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rD extends R8{data(){return super.data()}}function Bh(t,e){return typeof e=="string"?R1(t,e):e instanceof Wh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class b1{}class j1 extends b1{}function On(t,e,...n){let r=[];e instanceof b1&&r.push(e),r=r.concat(n),function(o){const s=o.filter(u=>u instanceof D1).length,a=o.filter(u=>u instanceof Hh).length;if(s>1||s>0&&a>0)throw new K(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Hh extends j1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Hh(e,n,r)}_apply(e){const n=this._parse(e);return b8(e._query,n),new bi(e.firestore,e.converter,zm(e._query,n))}_parse(e){const n=$h(e.firestore);return function(o,s,a,u,d,f,m){let E;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Nk(m,f);const k=[];for(const I of m)k.push(Mk(u,o,I));E={arrayValue:{values:k}}}else E=Mk(u,o,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Nk(m,f),E=tD(a,s,m,f==="in"||f==="not-in");return tt.create(d,f,E)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Zn(t,e,n){const r=e,i=Bh("where",t);return Hh._create(i,r,n)}class D1 extends b1{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new D1(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:zn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const u of a)b8(s,u),s=zm(s,u)}(e._query,n),new bi(e.firestore,e.converter,zm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class O1 extends j1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new O1(e,n)}_apply(e){const n=function(i,o,s){if(i.startAt!==null)throw new K(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new eu(o,s)}(e._query,this._field,this._direction);return new bi(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new _a(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function M1(t,e="asc"){const n=e,r=Bh("orderBy",t);return O1._create(r,n)}class N1 extends j1{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new N1(e,n,r)}_apply(e){return new bi(e.firestore,e.converter,Nd(e._query,this._limit,this._limitType))}}function oD(t){return N1._create("limit",t,"F")}function Mk(t,e,n){if(typeof(n=Ue(n))=="string"){if(n==="")throw new K(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!PT(e)&&n.indexOf("/")!==-1)throw new K(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!J.isDocumentKey(r))throw new K(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ik(t,new J(r))}if(n instanceof Ut)return ik(t,n._key);throw new K(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vh(n)}.`)}function Nk(t,e){if(!Array.isArray(t)||t.length===0)throw new K(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function b8(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class sD{convertValue(e,n="none"){switch(fo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ho(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Eo(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>Ke(s.doubleValue));return new C1(o)}convertGeoPoint(e){return new S1(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=i1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Zl(e));default:return null}}convertTimestamp(e){const n=Ei(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Le(XT(r));const i=new Xl(r.get(1),r.get(3)),o=new J(r.popFirst(5));return i.isEqual(n)||Rr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class D8 extends R8{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Gc extends D8{data(e={}){return super.data(e)}}class aD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new sl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Gc(this._firestore,this._userDataWriter,r.key,r,new sl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const u=new Gc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new sl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const u=new Gc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new sl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return a.type!==0&&(d=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),f=s.indexOf(a.doc.key)),{type:lD(a.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t){t=Bn(t,Ut);const e=Bn(t.firestore,xo);return B5(I1(e),t._key).then(n=>uD(e,t,n))}class O8 extends sD{constructor(e){super(),this.firestore=e}convertBytes(e){return new oa(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function En(t){t=Bn(t,bi);const e=Bn(t.firestore,xo),n=I1(e),r=new O8(e);return iD(t._query),H5(n,t._query).then(i=>new aD(e,r,t,i))}function ou(t,e,n){t=Bn(t,Ut);const r=Bn(t.firestore,xo),i=j8(t.converter,e,n);return qh(r,[C8($h(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,xn.none())])}function xl(t,e,n,...r){t=Bn(t,Ut);const i=Bn(t.firestore,xo),o=$h(i);let s;return s=typeof(e=Ue(e))=="string"||e instanceof Wh?eD(o,"updateDoc",t._key,e,n,r):J5(o,"updateDoc",t._key,e),qh(i,[s.toMutation(t._key,xn.exists(!0))])}function V1(t){return qh(Bn(t.firestore,xo),[new c1(t._key,xn.none())])}function M8(t,e){const n=Bn(t.firestore,xo),r=ut(t),i=j8(t.converter,e);return qh(n,[C8($h(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,xn.exists(!1))]).then(()=>r)}function qh(t,e){return function(r,i){const o=new Tr;return r.asyncQueue.enqueueAndForget(async()=>j5(await z5(r),i,o)),o.promise}(I1(t),e)}function uD(t,e,n){const r=n.docs.get(e._key),i=new O8(t);return new D8(t,i,e._key,r,new sl(n.hasPendingWrites,n.fromCache),e.converter)}function Su(){return new A1("serverTimestamp")}(function(e,n=!0){(function(i){ka=i})(_o),Un(new Sn("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new xo(new db(r.getProvider("auth-internal")),new mb(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new K(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xl(d.options.projectId,f)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),en(J2,"4.7.3",e),en(J2,"4.7.3","esm2017")})();const N8="@firebase/installations",F1="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V8=1e4,F8=`w:${F1}`,W8="FIS_v2",cD="https://firebaseinstallations.googleapis.com/v1",dD=60*60*1e3,hD="installations",fD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},po=new ko(hD,fD,pD);function U8(t){return t instanceof Ln&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $8({projectId:t}){return`${cD}/projects/${t}/installations`}function z8(t){return{token:t.token,requestStatus:2,expiresIn:gD(t.expiresIn),creationTime:Date.now()}}async function B8(t,e){const r=(await e.json()).error;return po.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function H8({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function mD(t,{refreshToken:e}){const n=H8(t);return n.append("Authorization",yD(e)),n}async function q8(t){const e=await t();return e.status>=500&&e.status<600?t():e}function gD(t){return Number(t.replace("s","000"))}function yD(t){return`${W8} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=$8(t),i=H8(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={fid:n,authVersion:W8,appId:t.appId,sdkVersion:F8},a={method:"POST",headers:i,body:JSON.stringify(s)},u=await q8(()=>fetch(r,a));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:z8(d.authToken)}}else throw await B8("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function kD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=/^[cdef][\w-]{21}$/,Jm="";function ED(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=wD(t);return _D.test(n)?n:Jm}catch{return Jm}}function wD(t){return kD(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G8=new Map;function K8(t,e){const n=Yh(t);Q8(n,e),xD(n,e)}function Q8(t,e){const n=G8.get(t);if(n)for(const r of n)r(e)}function xD(t,e){const n=TD();n&&n.postMessage({key:t,fid:e}),ID()}let Ki=null;function TD(){return!Ki&&"BroadcastChannel"in self&&(Ki=new BroadcastChannel("[Firebase] FID Change"),Ki.onmessage=t=>{Q8(t.data.key,t.data.fid)}),Ki}function ID(){G8.size===0&&Ki&&(Ki.close(),Ki=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD="firebase-installations-database",CD=1,mo="firebase-installations-store";let dp=null;function W1(){return dp||(dp=Lx(SD,CD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mo)}}})),dp}async function zd(t,e){const n=Yh(t),i=(await W1()).transaction(mo,"readwrite"),o=i.objectStore(mo),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&K8(t,e.fid),e}async function Z8(t){const e=Yh(t),r=(await W1()).transaction(mo,"readwrite");await r.objectStore(mo).delete(e),await r.done}async function Gh(t,e){const n=Yh(t),i=(await W1()).transaction(mo,"readwrite"),o=i.objectStore(mo),s=await o.get(n),a=e(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&K8(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(t){let e;const n=await Gh(t.appConfig,r=>{const i=LD(r),o=AD(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===Jm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function LD(t){const e=t||{fid:ED(),registrationStatus:0};return X8(e)}function AD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(po.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=PD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:RD(t)}:{installationEntry:e}}async function PD(t,e){try{const n=await vD(t,e);return zd(t.appConfig,n)}catch(n){throw U8(n)&&n.customData.serverCode===409?await Z8(t.appConfig):await zd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function RD(t){let e=await Vk(t.appConfig);for(;e.registrationStatus===1;)await Y8(100),e=await Vk(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await U1(t);return r||n}return e}function Vk(t){return Gh(t,e=>{if(!e)throw po.create("installation-not-found");return X8(e)})}function X8(t){return bD(t)?{fid:t.fid,registrationStatus:0}:t}function bD(t){return t.registrationStatus===1&&t.registrationTime+V8<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jD({appConfig:t,heartbeatServiceProvider:e},n){const r=DD(t,n),i=mD(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={installation:{sdkVersion:F8,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},u=await q8(()=>fetch(r,a));if(u.ok){const d=await u.json();return z8(d)}else throw await B8("Generate Auth Token",u)}function DD(t,{fid:e}){return`${$8(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(t,e=!1){let n;const r=await Gh(t.appConfig,o=>{if(!J8(o))throw po.create("not-registered");const s=o.authToken;if(!e&&ND(s))return o;if(s.requestStatus===1)return n=OD(t,e),o;{if(!navigator.onLine)throw po.create("app-offline");const a=FD(o);return n=MD(t,a),a}});return n?await n:r.authToken}async function OD(t,e){let n=await Fk(t.appConfig);for(;n.authToken.requestStatus===1;)await Y8(100),n=await Fk(t.appConfig);const r=n.authToken;return r.requestStatus===0?$1(t,e):r}function Fk(t){return Gh(t,e=>{if(!J8(e))throw po.create("not-registered");const n=e.authToken;return WD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function MD(t,e){try{const n=await jD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await zd(t.appConfig,r),n}catch(n){if(U8(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Z8(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await zd(t.appConfig,r)}throw n}}function J8(t){return t!==void 0&&t.registrationStatus===2}function ND(t){return t.requestStatus===2&&!VD(t)}function VD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+dD}function FD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function WD(t){return t.requestStatus===1&&t.requestTime+V8<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UD(t){const e=t,{installationEntry:n,registrationPromise:r}=await U1(e);return r?r.catch(console.error):$1(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $D(t,e=!1){const n=t;return await zD(n),(await $1(n,e)).token}async function zD(t){const{registrationPromise:e}=await U1(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){if(!t||!t.options)throw hp("App Configuration");if(!t.name)throw hp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw hp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function hp(t){return po.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="installations",HD="installations-internal",qD=t=>{const e=t.getProvider("app").getImmediate(),n=BD(e),r=Ai(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},YD=t=>{const e=t.getProvider("app").getImmediate(),n=Ai(e,eI).getImmediate();return{getId:()=>UD(n),getToken:i=>$D(n,i)}};function GD(){Un(new Sn(eI,qD,"PUBLIC")),Un(new Sn(HD,YD,"PRIVATE"))}GD();en(N8,F1);en(N8,F1,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="analytics",KD="firebase_id",QD="origin",ZD=60*1e3,XD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",z1="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new Th("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dn=new ko("analytics","Analytics",JD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e3(t){if(!t.startsWith(z1)){const e=dn.create("invalid-gtag-resource",{gtagURL:t});return tn.warn(e.message),""}return t}function tI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function t3(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function n3(t,e){const n=t3("firebase-js-sdk-policy",{createScriptURL:e3}),r=document.createElement("script"),i=`${z1}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function r3(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function i3(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const u=(await tI(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(a){tn.error(a)}t("config",i,o)}async function o3(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await tI(n);for(const u of s){const d=a.find(m=>m.measurementId===u),f=d&&e[d.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){tn.error(o)}}function s3(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[a,u]=s;await o3(t,e,n,a,u)}else if(o==="config"){const[a,u]=s;await i3(t,e,n,r,a,u)}else if(o==="consent"){const[a,u]=s;t("consent",a,u)}else if(o==="get"){const[a,u,d]=s;t("get",a,u,d)}else if(o==="set"){const[a]=s;t("set",a)}else t(o,...s)}catch(a){tn.error(a)}}return i}function a3(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=s3(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function l3(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(z1)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u3=30,c3=1e3;class d3{constructor(e={},n=c3){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const nI=new d3;function h3(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function f3(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:h3(r)},o=XD.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const u=await s.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw dn.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function p3(t,e=nI,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw dn.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw dn.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new y3;return setTimeout(async()=>{a.abort()},ZD),rI({appId:r,apiKey:i,measurementId:o},s,a,e)}async function rI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=nI){var o;const{appId:s,measurementId:a}=t;try{await m3(r,e)}catch(u){if(a)return tn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw u}try{const u=await f3(t);return i.deleteThrottleMetadata(s),u}catch(u){const d=u;if(!g3(d)){if(i.deleteThrottleMetadata(s),a)return tn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:a};throw u}const f=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?T2(n,i.intervalMillis,u3):T2(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),tn.debug(`Calling attemptFetch again in ${f} millis`),rI(t,m,r,i)}}function m3(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(dn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function g3(t){if(!(t instanceof Ln)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class y3{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function v3(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k3(){if(Tx())try{await Ix()}catch(t){return tn.warn(dn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return tn.warn(dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _3(t,e,n,r,i,o,s){var a;const u=p3(t);u.then(k=>{n[k.measurementId]=k.appId,t.options.measurementId&&k.measurementId!==t.options.measurementId&&tn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>tn.error(k)),e.push(u);const d=k3().then(k=>{if(k)return r.getId()}),[f,m]=await Promise.all([u,d]);l3(o)||n3(o,f.measurementId),i("js",new Date);const E=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return E[QD]="firebase",E.update=!0,m!=null&&(E[KD]=m),i("config",f.measurementId,E),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E3{constructor(e){this.app=e}_delete(){return delete Tl[this.app.options.appId],Promise.resolve()}}let Tl={},Wk=[];const Uk={};let fp="dataLayer",w3="gtag",$k,iI,zk=!1;function x3(){const t=[];if(xx()&&t.push("This is a browser extension environment."),IL()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=dn.create("invalid-analytics-context",{errorInfo:e});tn.warn(n.message)}}function T3(t,e,n){x3();const r=t.options.appId;if(!r)throw dn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)tn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dn.create("no-api-key");if(Tl[r]!=null)throw dn.create("already-exists",{id:r});if(!zk){r3(fp);const{wrappedGtag:o,gtagCore:s}=a3(Tl,Wk,Uk,fp,w3);iI=o,$k=s,zk=!0}return Tl[r]=_3(t,Wk,Uk,e,$k,fp,n),new E3(t)}function I3(t=Ih()){t=Ue(t);const e=Ai(t,Bd);return e.isInitialized()?e.getImmediate():S3(t)}function S3(t,e={}){const n=Ai(t,Bd);if(n.isInitialized()){const i=n.getImmediate();if(Yl(e,n.getOptions()))return i;throw dn.create("already-initialized")}return n.initialize({options:e})}function C3(t,e,n,r){t=Ue(t),v3(iI,Tl[t.app.options.appId],e,n,r).catch(i=>tn.error(i))}const Bk="@firebase/analytics",Hk="0.10.8";function L3(){Un(new Sn(Bd,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return T3(r,i,n)},"PUBLIC")),Un(new Sn("analytics-internal",t,"PRIVATE")),en(Bk,Hk),en(Bk,Hk,"esm2017");function t(e){try{const n=e.getProvider(Bd).getImmediate();return{logEvent:(r,i,o)=>C3(n,r,i,o)}}catch(n){throw dn.create("interop-component-reg-failed",{reason:n})}}}L3();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="firebasestorage.googleapis.com",A3="storageBucket",P3=2*60*1e3,R3=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Ln{constructor(e,n,r=0){super(pp(e),`Firebase Storage: ${n} (${pp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ar.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var or;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(or||(or={}));function pp(t){return"storage/"+t}function b3(){const t="An unknown error occurred, please check the error payload for server response.";return new ar(or.UNKNOWN,t)}function j3(){return new ar(or.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function D3(){return new ar(or.CANCELED,"User canceled the upload/download.")}function O3(t){return new ar(or.INVALID_URL,"Invalid URL '"+t+"'.")}function M3(t){return new ar(or.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function qk(t){return new ar(or.INVALID_ARGUMENT,t)}function sI(){return new ar(or.APP_DELETED,"The Firebase app was deleted.")}function N3(t){return new ar(or.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Mn.makeFromUrl(e,n)}catch{return new Mn(e,"")}if(r.path==="")return r;throw M3(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),u={bucket:1,path:3};function d(w){w.path_=decodeURIComponent(w.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",k=new RegExp(`^https?://${m}/${f}/b/${i}/o${E}`,"i"),I={bucket:1,path:3},L=n===oI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",y=new RegExp(`^https?://${L}/${i}/${T}`,"i"),_=[{regex:a,indices:u,postModify:o},{regex:k,indices:I,postModify:d},{regex:y,indices:{bucket:1,path:2},postModify:d}];for(let w=0;w<_.length;w++){const R=_[w],O=R.regex.exec(e);if(O){const x=O[R.indices.bucket];let S=O[R.indices.path];S||(S=""),r=new Mn(x,S),R.postModify(r);break}}if(r==null)throw O3(e);return r}}class V3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F3(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function u(){return a===2}let d=!1;function f(...T){d||(d=!0,e.apply(null,T))}function m(T){i=setTimeout(()=>{i=null,t(k,u())},T)}function E(){o&&clearTimeout(o)}function k(T,...y){if(d){E();return}if(T){E(),f.call(null,T,...y);return}if(u()||s){E(),f.call(null,T,...y);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,m(_)}let I=!1;function L(T){I||(I=!0,E(),!d&&(i!==null?(T||(a=2),clearTimeout(i),m(0)):T||(a=1)))}return m(0),o=setTimeout(()=>{s=!0,L(!0)},n),L}function W3(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U3(t){return t!==void 0}function Yk(t,e,n,r){if(r<e)throw qk(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw qk(`Invalid value for '${t}'. Expected ${n} or less.`)}function $3(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Hd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Hd||(Hd={}));/**
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
 */function z3(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B3{constructor(e,n,r,i,o,s,a,u,d,f,m,E=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,I)=>{this.resolve_=k,this.reject_=I,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new mc(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const u=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===Hd.NO_ERROR,u=o.getStatus();if(!a||z3(u,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===Hd.ABORT;r(!1,new mc(!1,null,f));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new mc(d,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());U3(u)?o(u):o()}catch(u){s(u)}else if(a!==null){const u=b3();u.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,u)):s(u)}else if(i.canceled){const u=this.appDelete_?sI():D3();s(u)}else{const u=j3();s(u)}};this.canceled_?n(!1,new mc(!1,null,!0)):this.backoffId_=F3(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&W3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class mc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function H3(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function q3(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Y3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function G3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function K3(t,e,n,r,i,o,s=!0){const a=$3(t.urlParams),u=t.url+a,d=Object.assign({},t.headers);return Y3(d,e),H3(d,n),q3(d,o),G3(d,r),new B3(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q3(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Z3(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n){this._service=e,n instanceof Mn?this._location=n:this._location=Mn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new qd(e,n)}get root(){const e=new Mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Z3(this._location.path)}get storage(){return this._service}get parent(){const e=Q3(this._location.path);if(e===null)return null;const n=new Mn(this._location.bucket,e);return new qd(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw N3(e)}}function Gk(t,e){const n=e==null?void 0:e[A3];return n==null?null:Mn.makeFromBucketSpec(n,t)}function X3(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:wx(i,t.app.options.projectId))}class J3{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=oI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=P3,this._maxUploadRetryTime=R3,this._requests=new Set,i!=null?this._bucket=Mn.makeFromBucketSpec(i,this._host):this._bucket=Gk(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mn.makeFromBucketSpec(this._url,e):this._bucket=Gk(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yk("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yk("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qd(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new V3(sI());{const s=K3(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Kk="@firebase/storage",Qk="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="storage";function eO(t=Ih(),e){t=Ue(t);const r=Ai(t,aI).getImmediate({identifier:e}),i=kx("storage");return i&&tO(r,...i),r}function tO(t,e,n,r={}){X3(t,e,n,r)}function nO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new J3(n,r,i,e,_o)}function rO(){Un(new Sn(aI,nO,"PUBLIC").setMultipleInstances(!0)),en(Kk,Qk,""),en(Kk,Qk,"esm2017")}rO();const iO={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},Kh=Ax(iO),sn=hT(Kh),we=G5(Kh);eO(Kh);console.log("Using production Firebase services");let oO=null;try{oO=I3(Kh),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const B1=new gr;B1.setCustomParameters({prompt:"select_account"});B1.addScope("email");B1.addScope("profile");const lI=M.createContext(),H1=()=>M.useContext(lI),sO=({children:t})=>{const[e,n]=M.useState(null),[r,i]=M.useState(!0);M.useEffect(()=>{const s=YP(sn,a=>{n(a),i(!1)});return()=>s()},[]);const o={currentUser:e,loading:r};return h.jsx(lI.Provider,{value:o,children:t})};var Kt=function(){return Kt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Kt.apply(this,arguments)};function Yd(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var De="-ms-",Il="-moz-",Te="-webkit-",uI="comm",Qh="rule",q1="decl",aO="@import",cI="@keyframes",lO="@layer",dI=Math.abs,Y1=String.fromCharCode,eg=Object.assign;function uO(t,e){return lt(t,0)^45?(((e<<2^lt(t,0))<<2^lt(t,1))<<2^lt(t,2))<<2^lt(t,3):0}function hI(t){return t.trim()}function pr(t,e){return(t=e.exec(t))?t[0]:t}function ae(t,e,n){return t.replace(e,n)}function Kc(t,e,n){return t.indexOf(e,n)}function lt(t,e){return t.charCodeAt(e)|0}function sa(t,e,n){return t.slice(e,n)}function Yn(t){return t.length}function fI(t){return t.length}function al(t,e){return e.push(t),t}function cO(t,e){return t.map(e).join("")}function Zk(t,e){return t.filter(function(n){return!pr(n,e)})}var Zh=1,aa=1,pI=0,Cn=0,Je=0,xa="";function Xh(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:Zh,column:aa,length:s,return:"",siblings:a}}function Br(t,e){return eg(Xh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function as(t){for(;t.root;)t=Br(t.root,{children:[t]});al(t,t.siblings)}function dO(){return Je}function hO(){return Je=Cn>0?lt(xa,--Cn):0,aa--,Je===10&&(aa=1,Zh--),Je}function Fn(){return Je=Cn<pI?lt(xa,Cn++):0,aa++,Je===10&&(aa=1,Zh++),Je}function eo(){return lt(xa,Cn)}function Qc(){return Cn}function Jh(t,e){return sa(xa,t,e)}function tg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fO(t){return Zh=aa=1,pI=Yn(xa=t),Cn=0,[]}function pO(t){return xa="",t}function mp(t){return hI(Jh(Cn-1,ng(t===91?t+2:t===40?t+1:t)))}function mO(t){for(;(Je=eo())&&Je<33;)Fn();return tg(t)>2||tg(Je)>3?"":" "}function gO(t,e){for(;--e&&Fn()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return Jh(t,Qc()+(e<6&&eo()==32&&Fn()==32))}function ng(t){for(;Fn();)switch(Je){case t:return Cn;case 34:case 39:t!==34&&t!==39&&ng(Je);break;case 40:t===41&&ng(t);break;case 92:Fn();break}return Cn}function yO(t,e){for(;Fn()&&t+Je!==57;)if(t+Je===84&&eo()===47)break;return"/*"+Jh(e,Cn-1)+"*"+Y1(t===47?t:Fn())}function vO(t){for(;!tg(eo());)Fn();return Jh(t,Cn)}function kO(t){return pO(Zc("",null,null,null,[""],t=fO(t),0,[0],t))}function Zc(t,e,n,r,i,o,s,a,u){for(var d=0,f=0,m=s,E=0,k=0,I=0,L=1,T=1,y=1,g=0,_="",w=i,R=o,O=r,x=_;T;)switch(I=g,g=Fn()){case 40:if(I!=108&&lt(x,m-1)==58){Kc(x+=ae(mp(g),"&","&\f"),"&\f",dI(d?a[d-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:x+=mp(g);break;case 9:case 10:case 13:case 32:x+=mO(I);break;case 92:x+=gO(Qc()-1,7);continue;case 47:switch(eo()){case 42:case 47:al(_O(yO(Fn(),Qc()),e,n,u),u);break;default:x+="/"}break;case 123*L:a[d++]=Yn(x)*y;case 125*L:case 59:case 0:switch(g){case 0:case 125:T=0;case 59+f:y==-1&&(x=ae(x,/\f/g,"")),k>0&&Yn(x)-m&&al(k>32?Jk(x+";",r,n,m-1,u):Jk(ae(x," ","")+";",r,n,m-2,u),u);break;case 59:x+=";";default:if(al(O=Xk(x,e,n,d,f,i,a,_,w=[],R=[],m,o),o),g===123)if(f===0)Zc(x,e,O,O,w,o,m,a,R);else switch(E===99&&lt(x,3)===110?100:E){case 100:case 108:case 109:case 115:Zc(t,O,O,r&&al(Xk(t,O,O,0,0,i,a,_,i,w=[],m,R),R),i,R,m,a,r?w:R);break;default:Zc(x,O,O,O,[""],R,0,a,R)}}d=f=k=0,L=y=1,_=x="",m=s;break;case 58:m=1+Yn(x),k=I;default:if(L<1){if(g==123)--L;else if(g==125&&L++==0&&hO()==125)continue}switch(x+=Y1(g),g*L){case 38:y=f>0?1:(x+="\f",-1);break;case 44:a[d++]=(Yn(x)-1)*y,y=1;break;case 64:eo()===45&&(x+=mp(Fn())),E=eo(),f=m=Yn(_=x+=vO(Qc())),g++;break;case 45:I===45&&Yn(x)==2&&(L=0)}}return o}function Xk(t,e,n,r,i,o,s,a,u,d,f,m){for(var E=i-1,k=i===0?o:[""],I=fI(k),L=0,T=0,y=0;L<r;++L)for(var g=0,_=sa(t,E+1,E=dI(T=s[L])),w=t;g<I;++g)(w=hI(T>0?k[g]+" "+_:ae(_,/&\f/g,k[g])))&&(u[y++]=w);return Xh(t,e,n,i===0?Qh:a,u,d,f,m)}function _O(t,e,n,r){return Xh(t,e,n,uI,Y1(dO()),sa(t,2,-2),0,r)}function Jk(t,e,n,r,i){return Xh(t,e,n,q1,sa(t,0,r),sa(t,r+1,-1),r,i)}function mI(t,e,n){switch(uO(t,e)){case 5103:return Te+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Te+t+t;case 4789:return Il+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Te+t+Il+t+De+t+t;case 5936:switch(lt(t,e+11)){case 114:return Te+t+De+ae(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Te+t+De+ae(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Te+t+De+ae(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Te+t+De+t+t;case 6165:return Te+t+De+"flex-"+t+t;case 5187:return Te+t+ae(t,/(\w+).+(:[^]+)/,Te+"box-$1$2"+De+"flex-$1$2")+t;case 5443:return Te+t+De+"flex-item-"+ae(t,/flex-|-self/g,"")+(pr(t,/flex-|baseline/)?"":De+"grid-row-"+ae(t,/flex-|-self/g,""))+t;case 4675:return Te+t+De+"flex-line-pack"+ae(t,/align-content|flex-|-self/g,"")+t;case 5548:return Te+t+De+ae(t,"shrink","negative")+t;case 5292:return Te+t+De+ae(t,"basis","preferred-size")+t;case 6060:return Te+"box-"+ae(t,"-grow","")+Te+t+De+ae(t,"grow","positive")+t;case 4554:return Te+ae(t,/([^-])(transform)/g,"$1"+Te+"$2")+t;case 6187:return ae(ae(ae(t,/(zoom-|grab)/,Te+"$1"),/(image-set)/,Te+"$1"),t,"")+t;case 5495:case 3959:return ae(t,/(image-set\([^]*)/,Te+"$1$`$1");case 4968:return ae(ae(t,/(.+:)(flex-)?(.*)/,Te+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Te+t+t;case 4200:if(!pr(t,/flex-|baseline/))return De+"grid-column-align"+sa(t,e)+t;break;case 2592:case 3360:return De+ae(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,pr(r.props,/grid-\w+-end/)})?~Kc(t+(n=n[e].value),"span",0)?t:De+ae(t,"-start","")+t+De+"grid-row-span:"+(~Kc(n,"span",0)?pr(n,/\d+/):+pr(n,/\d+/)-+pr(t,/\d+/))+";":De+ae(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return pr(r.props,/grid-\w+-start/)})?t:De+ae(ae(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ae(t,/(.+)-inline(.+)/,Te+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Yn(t)-1-e>6)switch(lt(t,e+1)){case 109:if(lt(t,e+4)!==45)break;case 102:return ae(t,/(.+:)(.+)-([^]+)/,"$1"+Te+"$2-$3$1"+Il+(lt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Kc(t,"stretch",0)?mI(ae(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ae(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,u,d){return De+i+":"+o+d+(s?De+i+"-span:"+(a?u:+u-+o)+d:"")+t});case 4949:if(lt(t,e+6)===121)return ae(t,":",":"+Te)+t;break;case 6444:switch(lt(t,lt(t,14)===45?18:11)){case 120:return ae(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Te+(lt(t,14)===45?"inline-":"")+"box$3$1"+Te+"$2$3$1"+De+"$2box$3")+t;case 100:return ae(t,":",":"+De)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ae(t,"scroll-","scroll-snap-")+t}return t}function Gd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function EO(t,e,n,r){switch(t.type){case lO:if(t.children.length)break;case aO:case q1:return t.return=t.return||t.value;case uI:return"";case cI:return t.return=t.value+"{"+Gd(t.children,r)+"}";case Qh:if(!Yn(t.value=t.props.join(",")))return""}return Yn(n=Gd(t.children,r))?t.return=t.value+"{"+n+"}":""}function wO(t){var e=fI(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function xO(t){return function(e){e.root||(e=e.return)&&t(e)}}function TO(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case q1:t.return=mI(t.value,t.length,n);return;case cI:return Gd([Br(t,{value:ae(t.value,"@","@"+Te)})],r);case Qh:if(t.length)return cO(n=t.props,function(i){switch(pr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":as(Br(t,{props:[ae(i,/:(read-\w+)/,":"+Il+"$1")]})),as(Br(t,{props:[i]})),eg(t,{props:Zk(n,r)});break;case"::placeholder":as(Br(t,{props:[ae(i,/:(plac\w+)/,":"+Te+"input-$1")]})),as(Br(t,{props:[ae(i,/:(plac\w+)/,":"+Il+"$1")]})),as(Br(t,{props:[ae(i,/:(plac\w+)/,De+"input-$1")]})),as(Br(t,{props:[i]})),eg(t,{props:Zk(n,r)});break}return""})}}var IO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},rn={},la=typeof process<"u"&&rn!==void 0&&(rn.REACT_APP_SC_ATTR||rn.SC_ATTR)||"data-styled",gI="active",yI="data-styled-version",ef="6.1.17",G1=`/*!sc*/
`,Kd=typeof window<"u"&&"HTMLElement"in window,SO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&rn!==void 0&&rn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&rn.REACT_APP_SC_DISABLE_SPEEDY!==""?rn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&rn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&rn!==void 0&&rn.SC_DISABLE_SPEEDY!==void 0&&rn.SC_DISABLE_SPEEDY!==""&&rn.SC_DISABLE_SPEEDY!=="false"&&rn.SC_DISABLE_SPEEDY),tf=Object.freeze([]),ua=Object.freeze({});function CO(t,e,n){return n===void 0&&(n=ua),t.theme!==n.theme&&t.theme||e||n.theme}var vI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),LO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,AO=/(^-|-$)/g;function e_(t){return t.replace(LO,"-").replace(AO,"")}var PO=/(a)(d)/gi,gc=52,t_=function(t){return String.fromCharCode(t+(t>25?39:97))};function rg(t){var e,n="";for(e=Math.abs(t);e>gc;e=e/gc|0)n=t_(e%gc)+n;return(t_(e%gc)+n).replace(PO,"$1-$2")}var gp,kI=5381,js=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},_I=function(t){return js(kI,t)};function RO(t){return rg(_I(t)>>>0)}function bO(t){return t.displayName||t.name||"Component"}function yp(t){return typeof t=="string"&&!0}var EI=typeof Symbol=="function"&&Symbol.for,wI=EI?Symbol.for("react.memo"):60115,jO=EI?Symbol.for("react.forward_ref"):60112,DO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},OO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},MO=((gp={})[jO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gp[wI]=xI,gp);function n_(t){return("type"in(e=t)&&e.type.$$typeof)===wI?xI:"$$typeof"in t?MO[t.$$typeof]:DO;var e}var NO=Object.defineProperty,VO=Object.getOwnPropertyNames,r_=Object.getOwnPropertySymbols,FO=Object.getOwnPropertyDescriptor,WO=Object.getPrototypeOf,i_=Object.prototype;function TI(t,e,n){if(typeof e!="string"){if(i_){var r=WO(e);r&&r!==i_&&TI(t,r,n)}var i=VO(e);r_&&(i=i.concat(r_(e)));for(var o=n_(t),s=n_(e),a=0;a<i.length;++a){var u=i[a];if(!(u in OO||n&&n[u]||s&&u in s||o&&u in o)){var d=FO(e,u);try{NO(t,u,d)}catch{}}}}return t}function ca(t){return typeof t=="function"}function K1(t){return typeof t=="object"&&"styledComponentId"in t}function Qi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function o_(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function su(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function ig(t,e,n){if(n===void 0&&(n=!1),!n&&!su(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=ig(t[r],e[r]);else if(su(e))for(var r in e)t[r]=ig(t[r],e[r]);return t}function Q1(t,e){Object.defineProperty(t,"toString",{value:e})}function Cu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var UO=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Cu(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(G1);return n},t}(),Xc=new Map,Qd=new Map,Jc=1,yc=function(t){if(Xc.has(t))return Xc.get(t);for(;Qd.has(Jc);)Jc++;var e=Jc++;return Xc.set(t,e),Qd.set(e,t),e},$O=function(t,e){Jc=e+1,Xc.set(t,e),Qd.set(e,t)},zO="style[".concat(la,"][").concat(yI,'="').concat(ef,'"]'),BO=new RegExp("^".concat(la,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),HO=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},qO=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(G1),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var u=a.match(BO);if(u){var d=0|parseInt(u[1],10),f=u[2];d!==0&&($O(f,d),HO(t,f,u[3]),t.getTag().insertRules(d,i)),i.length=0}else i.push(a)}}},s_=function(t){for(var e=document.querySelectorAll(zO),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(la)!==gI&&(qO(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function YO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var II=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(la,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(la,gI),r.setAttribute(yI,ef);var s=YO();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},GO=function(){function t(e){this.element=II(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Cu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),KO=function(){function t(e){this.element=II(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),QO=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),a_=Kd,ZO={isServer:!Kd,useCSSOMInjection:!SO},SI=function(){function t(e,n,r){e===void 0&&(e=ua),n===void 0&&(n={});var i=this;this.options=Kt(Kt({},ZO),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Kd&&a_&&(a_=!1,s_(this)),Q1(this,function(){return function(o){for(var s=o.getTag(),a=s.length,u="",d=function(m){var E=function(y){return Qd.get(y)}(m);if(E===void 0)return"continue";var k=o.names.get(E),I=s.getGroup(m);if(k===void 0||!k.size||I.length===0)return"continue";var L="".concat(la,".g").concat(m,'[id="').concat(E,'"]'),T="";k!==void 0&&k.forEach(function(y){y.length>0&&(T+="".concat(y,","))}),u+="".concat(I).concat(L,'{content:"').concat(T,'"}').concat(G1)},f=0;f<a;f++)d(f);return u}(i)})}return t.registerId=function(e){return yc(e)},t.prototype.rehydrate=function(){!this.server&&Kd&&s_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Kt(Kt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new QO(i):r?new GO(i):new KO(i)}(this.options),new UO(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(yc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(yc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(yc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),XO=/&/g,JO=/^\s*\/\/.*$/gm;function CI(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=CI(n.children,e)),n})}function eM(t){var e,n,r,i=ua,o=i.options,s=o===void 0?ua:o,a=i.plugins,u=a===void 0?tf:a,d=function(E,k,I){return I.startsWith(n)&&I.endsWith(n)&&I.replaceAll(n,"").length>0?".".concat(e):E},f=u.slice();f.push(function(E){E.type===Qh&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(XO,n).replace(r,d))}),s.prefix&&f.push(TO),f.push(EO);var m=function(E,k,I,L){k===void 0&&(k=""),I===void 0&&(I=""),L===void 0&&(L="&"),e=L,n=k,r=new RegExp("\\".concat(n,"\\b"),"g");var T=E.replace(JO,""),y=kO(I||k?"".concat(I," ").concat(k," { ").concat(T," }"):T);s.namespace&&(y=CI(y,s.namespace));var g=[];return Gd(y,wO(f.concat(xO(function(_){return g.push(_)})))),g};return m.hash=u.length?u.reduce(function(E,k){return k.name||Cu(15),js(E,k.name)},kI).toString():"",m}var tM=new SI,og=eM(),LI=c.createContext({shouldForwardProp:void 0,styleSheet:tM,stylis:og});LI.Consumer;c.createContext(void 0);function l_(){return M.useContext(LI)}var nM=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=og);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Q1(this,function(){throw Cu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=og),this.name+e.hash},t}(),rM=function(t){return t>="A"&&t<="Z"};function u_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;rM(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var AI=function(t){return t==null||t===!1||t===""},PI=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!AI(o)&&(Array.isArray(o)&&o.isCss||ca(o)?r.push("".concat(u_(i),":"),o,";"):su(o)?r.push.apply(r,Yd(Yd(["".concat(i," {")],PI(o),!1),["}"],!1)):r.push("".concat(u_(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in IO||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function to(t,e,n,r){if(AI(t))return[];if(K1(t))return[".".concat(t.styledComponentId)];if(ca(t)){if(!ca(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return to(i,e,n,r)}var o;return t instanceof nM?n?(t.inject(n,r),[t.getName(r)]):[t]:su(t)?PI(t):Array.isArray(t)?Array.prototype.concat.apply(tf,t.map(function(s){return to(s,e,n,r)})):[t.toString()]}function iM(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ca(n)&&!K1(n))return!1}return!0}var oM=_I(ef),sM=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&iM(e),this.componentId=n,this.baseHash=js(oM,n),this.baseStyle=r,SI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Qi(i,this.staticRulesId);else{var o=o_(to(this.rules,e,n,r)),s=rg(js(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Qi(i,s),this.staticRulesId=s}else{for(var u=js(this.baseHash,r.hash),d="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")d+=m;else if(m){var E=o_(to(m,e,n,r));u=js(u,E+f),d+=E}}if(d){var k=rg(u>>>0);n.hasNameForId(this.componentId,k)||n.insertRules(this.componentId,k,r(d,".".concat(k),void 0,this.componentId)),i=Qi(i,k)}}return i},t}(),RI=c.createContext(void 0);RI.Consumer;var vp={};function aM(t,e,n){var r=K1(t),i=t,o=!yp(t),s=e.attrs,a=s===void 0?tf:s,u=e.componentId,d=u===void 0?function(w,R){var O=typeof w!="string"?"sc":e_(w);vp[O]=(vp[O]||0)+1;var x="".concat(O,"-").concat(RO(ef+O+vp[O]));return R?"".concat(R,"-").concat(x):x}(e.displayName,e.parentComponentId):u,f=e.displayName,m=f===void 0?function(w){return yp(w)?"styled.".concat(w):"Styled(".concat(bO(w),")")}(t):f,E=e.displayName&&e.componentId?"".concat(e_(e.displayName),"-").concat(e.componentId):e.componentId||d,k=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,I=e.shouldForwardProp;if(r&&i.shouldForwardProp){var L=i.shouldForwardProp;if(e.shouldForwardProp){var T=e.shouldForwardProp;I=function(w,R){return L(w,R)&&T(w,R)}}else I=L}var y=new sM(n,E,r?i.componentStyle:void 0);function g(w,R){return function(O,x,S){var A=O.attrs,b=O.componentStyle,j=O.defaultProps,D=O.foldedComponentIds,P=O.styledComponentId,q=O.target,re=c.useContext(RI),ue=l_(),ce=O.shouldForwardProp||ue.shouldForwardProp,z=CO(x,re,j)||ua,G=function(Ge,rt,Be){for(var Dt,Ot=Kt(Kt({},rt),{className:void 0,theme:Be}),Ht=0;Ht<Ge.length;Ht+=1){var dt=ca(Dt=Ge[Ht])?Dt(Ot):Dt;for(var N in dt)Ot[N]=N==="className"?Qi(Ot[N],dt[N]):N==="style"?Kt(Kt({},Ot[N]),dt[N]):dt[N]}return rt.className&&(Ot.className=Qi(Ot.className,rt.className)),Ot}(A,x,z),X=G.as||q,le={};for(var ee in G)G[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&G.theme===z||(ee==="forwardedAs"?le.as=G.forwardedAs:ce&&!ce(ee,X)||(le[ee]=G[ee]));var ye=function(Ge,rt){var Be=l_(),Dt=Ge.generateAndInjectStyles(rt,Be.styleSheet,Be.stylis);return Dt}(b,G),Ye=Qi(D,P);return ye&&(Ye+=" "+ye),G.className&&(Ye+=" "+G.className),le[yp(X)&&!vI.has(X)?"class":"className"]=Ye,S&&(le.ref=S),M.createElement(X,le)}(_,w,R)}g.displayName=m;var _=c.forwardRef(g);return _.attrs=k,_.componentStyle=y,_.displayName=m,_.shouldForwardProp=I,_.foldedComponentIds=r?Qi(i.foldedComponentIds,i.styledComponentId):"",_.styledComponentId=E,_.target=r?i.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(R){for(var O=[],x=1;x<arguments.length;x++)O[x-1]=arguments[x];for(var S=0,A=O;S<A.length;S++)ig(R,A[S],!0);return R}({},i.defaultProps,w):w}}),Q1(_,function(){return".".concat(_.styledComponentId)}),o&&TI(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function c_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var d_=function(t){return Object.assign(t,{isCss:!0})};function lM(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ca(t)||su(t))return d_(to(c_(tf,Yd([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?to(r):d_(to(c_(r,e)))}function sg(t,e,n){if(n===void 0&&(n=ua),!e)throw Cu(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,lM.apply(void 0,Yd([i],o,!1)))};return r.attrs=function(i){return sg(t,e,Kt(Kt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return sg(t,e,Kt(Kt({},n),i))},r}var bI=function(t){return sg(aM,t)},F=bI;vI.forEach(function(t){F[t]=bI(t)});function jI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=jI(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function ni(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=jI(t))&&(r&&(r+=" "),r+=e);return r}const Sl=t=>typeof t=="number"&&!isNaN(t),go=t=>typeof t=="string",Qt=t=>typeof t=="function",ed=t=>go(t)||Qt(t)?t:null,kp=t=>M.isValidElement(t)||go(t)||Qt(t)||Sl(t);function uM(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function nf(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:u,preventExitTransition:d,done:f,nodeRef:m,isIn:E}=s;const k=r?`${e}--${u}`:e,I=r?`${n}--${u}`:n,L=M.useRef(0);return M.useLayoutEffect(()=>{const T=m.current,y=k.split(" "),g=_=>{_.target===m.current&&(T.dispatchEvent(new Event("d")),T.removeEventListener("animationend",g),T.removeEventListener("animationcancel",g),L.current===0&&_.type!=="animationcancel"&&T.classList.remove(...y))};T.classList.add(...y),T.addEventListener("animationend",g),T.addEventListener("animationcancel",g)},[]),M.useEffect(()=>{const T=m.current,y=()=>{T.removeEventListener("animationend",y),i?uM(T,f,o):f()};E||(d?y():(L.current=1,T.className+=` ${I}`,T.addEventListener("animationend",y)))},[E]),c.createElement(c.Fragment,null,a)}}function h_(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const yn={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},vc=t=>{let{theme:e,type:n,...r}=t;return c.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},_p={info:function(t){return c.createElement(vc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(vc,{...t},c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(vc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(vc,{...t},c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function cM(t){const[,e]=M.useReducer(k=>k+1,0),[n,r]=M.useState([]),i=M.useRef(null),o=M.useRef(new Map).current,s=k=>n.indexOf(k)!==-1,a=M.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:k=>o.get(k)}).current;function u(k){let{containerId:I}=k;const{limit:L}=a.props;!L||I&&a.containerId!==I||(a.count-=a.queue.length,a.queue=[])}function d(k){r(I=>k==null?[]:I.filter(L=>L!==k))}function f(){const{toastContent:k,toastProps:I,staleId:L}=a.queue.shift();E(k,I,L)}function m(k,I){let{delay:L,staleId:T,...y}=I;if(!kp(k)||function(D){return!i.current||a.props.enableMultiContainer&&D.containerId!==a.props.containerId||o.has(D.toastId)&&D.updateId==null}(y))return;const{toastId:g,updateId:_,data:w}=y,{props:R}=a,O=()=>d(g),x=_==null;x&&a.count++;const S={...R,style:R.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(y).filter(D=>{let[P,q]=D;return q!=null})),toastId:g,updateId:_,data:w,closeToast:O,isIn:!1,className:ed(y.className||R.toastClassName),bodyClassName:ed(y.bodyClassName||R.bodyClassName),progressClassName:ed(y.progressClassName||R.progressClassName),autoClose:!y.isLoading&&(A=y.autoClose,b=R.autoClose,A===!1||Sl(A)&&A>0?A:b),deleteToast(){const D=h_(o.get(g),"removed");o.delete(g),yn.emit(4,D);const P=a.queue.length;if(a.count=g==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),P>0){const q=g==null?a.props.limit:1;if(P===1||q===1)a.displayedToast++,f();else{const re=q>P?P:q;a.displayedToast=re;for(let ue=0;ue<re;ue++)f()}}else e()}};var A,b;S.iconOut=function(D){let{theme:P,type:q,isLoading:re,icon:ue}=D,ce=null;const z={theme:P,type:q};return ue===!1||(Qt(ue)?ce=ue(z):M.isValidElement(ue)?ce=M.cloneElement(ue,z):go(ue)||Sl(ue)?ce=ue:re?ce=_p.spinner():(G=>G in _p)(q)&&(ce=_p[q](z))),ce}(S),Qt(y.onOpen)&&(S.onOpen=y.onOpen),Qt(y.onClose)&&(S.onClose=y.onClose),S.closeButton=R.closeButton,y.closeButton===!1||kp(y.closeButton)?S.closeButton=y.closeButton:y.closeButton===!0&&(S.closeButton=!kp(R.closeButton)||R.closeButton);let j=k;M.isValidElement(k)&&!go(k.type)?j=M.cloneElement(k,{closeToast:O,toastProps:S,data:w}):Qt(k)&&(j=k({closeToast:O,toastProps:S,data:w})),R.limit&&R.limit>0&&a.count>R.limit&&x?a.queue.push({toastContent:j,toastProps:S,staleId:T}):Sl(L)?setTimeout(()=>{E(j,S,T)},L):E(j,S,T)}function E(k,I,L){const{toastId:T}=I;L&&o.delete(L);const y={content:k,props:I};o.set(T,y),r(g=>[...g,T].filter(_=>_!==L)),yn.emit(4,h_(y,y.props.updateId==null?"added":"updated"))}return M.useEffect(()=>(a.containerId=t.containerId,yn.cancelEmit(3).on(0,m).on(1,k=>i.current&&d(k)).on(5,u).emit(2,a),()=>{o.clear(),yn.emit(3,a)}),[]),M.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(k){const I=new Map,L=Array.from(o.values());return t.newestOnTop&&L.reverse(),L.forEach(T=>{const{position:y}=T.props;I.has(y)||I.set(y,[]),I.get(y).push(T)}),Array.from(I,T=>k(T[0],T[1]))},containerRef:i,isToastActive:s}}function f_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function p_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function dM(t){const[e,n]=M.useState(!1),[r,i]=M.useState(!1),o=M.useRef(null),s=M.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=M.useRef(t),{autoClose:u,pauseOnHover:d,closeToast:f,onClick:m,closeOnClick:E}=t;function k(w){if(t.draggable){w.nativeEvent.type==="touchstart"&&w.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",g),document.addEventListener("touchmove",y),document.addEventListener("touchend",g);const R=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=R.getBoundingClientRect(),R.style.transition="",s.x=f_(w.nativeEvent),s.y=p_(w.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=R.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=R.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function I(w){if(s.boundingRect){const{top:R,bottom:O,left:x,right:S}=s.boundingRect;w.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=x&&s.x<=S&&s.y>=R&&s.y<=O?T():L()}}function L(){n(!0)}function T(){n(!1)}function y(w){const R=o.current;s.canDrag&&R&&(s.didMove=!0,e&&T(),s.x=f_(w),s.y=p_(w),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),R.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,R.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",g);const w=o.current;if(s.canDrag&&s.didMove&&w){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();w.style.transition="transform 0.2s, opacity 0.2s",w.style.transform=`translate${t.draggableDirection}(0)`,w.style.opacity="1"}}M.useEffect(()=>{a.current=t}),M.useEffect(()=>(o.current&&o.current.addEventListener("d",L,{once:!0}),Qt(t.onOpen)&&t.onOpen(M.isValidElement(t.children)&&t.children.props),()=>{const w=a.current;Qt(w.onClose)&&w.onClose(M.isValidElement(w.children)&&w.children.props)}),[]),M.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||T(),window.addEventListener("focus",L),window.addEventListener("blur",T)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",L),window.removeEventListener("blur",T))}),[t.pauseOnFocusLoss]);const _={onMouseDown:k,onTouchStart:k,onMouseUp:I,onTouchEnd:I};return u&&d&&(_.onMouseEnter=T,_.onMouseLeave=L),E&&(_.onClick=w=>{m&&m(w),s.canCloseOnClick&&f()}),{playToast:L,pauseToast:T,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:_}}function DI(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return c.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function hM(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:u,progress:d,rtl:f,isIn:m,theme:E}=t;const k=o||u&&d===0,I={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:k?0:1};u&&(I.transform=`scaleX(${d})`);const L=ni("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${E}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),T=Qt(s)?s({rtl:f,type:i,defaultClassName:L}):ni(L,s);return c.createElement("div",{role:"progressbar","aria-hidden":k?"true":"false","aria-label":"notification timer",className:T,style:I,[u&&d>=1?"onTransitionEnd":"onAnimationEnd"]:u&&d<1?null:()=>{m&&r()}})}const fM=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=dM(t),{closeButton:o,children:s,autoClose:a,onClick:u,type:d,hideProgressBar:f,closeToast:m,transition:E,position:k,className:I,style:L,bodyClassName:T,bodyStyle:y,progressClassName:g,progressStyle:_,updateId:w,role:R,progress:O,rtl:x,toastId:S,deleteToast:A,isIn:b,isLoading:j,iconOut:D,closeOnClick:P,theme:q}=t,re=ni("Toastify__toast",`Toastify__toast-theme--${q}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":x},{"Toastify__toast--close-on-click":P}),ue=Qt(I)?I({rtl:x,position:k,type:d,defaultClassName:re}):ni(re,I),ce=!!O||!a,z={closeToast:m,type:d,theme:q};let G=null;return o===!1||(G=Qt(o)?o(z):M.isValidElement(o)?M.cloneElement(o,z):DI(z)),c.createElement(E,{isIn:b,done:A,position:k,preventExitTransition:n,nodeRef:r},c.createElement("div",{id:S,onClick:u,className:ue,...i,style:L,ref:r},c.createElement("div",{...b&&{role:R},className:Qt(T)?T({type:d}):ni("Toastify__toast-body",T),style:y},D!=null&&c.createElement("div",{className:ni("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},D),c.createElement("div",null,s)),G,c.createElement(hM,{...w&&!ce?{key:`pb-${w}`}:{},rtl:x,theme:q,delay:a,isRunning:e,isIn:b,closeToast:m,hide:f,type:d,style:_,className:g,controlledProgress:ce,progress:O||0})))},rf=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},pM=nf(rf("bounce",!0));nf(rf("slide",!0));nf(rf("zoom"));nf(rf("flip"));const ag=M.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=cM(t),{className:o,style:s,rtl:a,containerId:u}=t;function d(f){const m=ni("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":a});return Qt(o)?o({position:f,rtl:a,defaultClassName:m}):ni(m,ed(o))}return M.useEffect(()=>{e&&(e.current=r.current)},[]),c.createElement("div",{ref:r,className:"Toastify",id:u},n((f,m)=>{const E=m.length?{...s}:{...s,pointerEvents:"none"};return c.createElement("div",{className:d(f),style:E,key:`container-${f}`},m.map((k,I)=>{let{content:L,props:T}=k;return c.createElement(fM,{...T,isIn:i(T.toastId),style:{...T.style,"--nth":I+1,"--len":m.length},key:`toast-${T.key}`},L)}))}))});ag.displayName="ToastContainer",ag.defaultProps={position:"top-right",transition:pM,autoClose:5e3,closeButton:DI,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Ep,$i=new Map,ll=[],mM=1;function OI(){return""+mM++}function gM(t){return t&&(go(t.toastId)||Sl(t.toastId))?t.toastId:OI()}function Cl(t,e){return $i.size>0?yn.emit(0,t,e):ll.push({content:t,options:e}),e.toastId}function Zd(t,e){return{...e,type:e&&e.type||t,toastId:gM(e)}}function kc(t){return(e,n)=>Cl(e,Zd(t,n))}function Y(t,e){return Cl(t,Zd("default",e))}Y.loading=(t,e)=>Cl(t,Zd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Y.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=go(i)?Y.loading(i,n):Y.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(f,m,E)=>{if(m==null)return void Y.dismiss(r);const k={type:f,...a,...n,data:E},I=go(m)?{render:m}:m;return r?Y.update(r,{...k,...I}):Y(I.render,{...k,...I}),E},d=Qt(t)?t():t;return d.then(f=>u("success",s,f)).catch(f=>u("error",o,f)),d},Y.success=kc("success"),Y.info=kc("info"),Y.error=kc("error"),Y.warning=kc("warning"),Y.warn=Y.warning,Y.dark=(t,e)=>Cl(t,Zd("default",{theme:"dark",...e})),Y.dismiss=t=>{$i.size>0?yn.emit(1,t):ll=ll.filter(e=>t!=null&&e.options.toastId!==t)},Y.clearWaitingQueue=function(t){return t===void 0&&(t={}),yn.emit(5,t)},Y.isActive=t=>{let e=!1;return $i.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},Y.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=$i.get(o||Ep);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:OI()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,Cl(s,o)}},0)},Y.done=t=>{Y.update(t,{progress:1})},Y.onChange=t=>(yn.on(4,t),()=>{yn.off(4,t)}),Y.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Y.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},yn.on(2,t=>{Ep=t.containerId||t,$i.set(Ep,t),ll.forEach(e=>{yn.emit(0,e.content,e.options)}),ll=[]}).on(3,t=>{$i.delete(t.containerId||t),$i.size===0&&yn.off(0).off(1).off(5)});var yM=M.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Ie=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function m_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var xe=M.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,o=t.weight,s=t.mirrored,a=t.children,u=t.renderPath,d=m_(t,["alt","color","size","weight","mirrored","children","renderPath"]),f=M.useContext(yM),m=f.color,E=m===void 0?"currentColor":m,k=f.size,I=f.weight,L=I===void 0?"regular":I,T=f.mirrored,y=T===void 0?!1:T,g=m_(f,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??k,height:i??k,fill:r??E,viewBox:"0 0 256 256",transform:s||y?"scale(-1, 1)":void 0},g,d),!!n&&c.createElement("title",null,n),a,c.createElement("rect",{width:"256",height:"256",fill:"none"}),u(o??L,r??E))});xe.displayName="IconBase";var To=new Map;To.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});To.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});To.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});To.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});To.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});To.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var vM=function(e,n){return Ie(e,n,To)},MI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:vM}))});MI.displayName="ArrowLeft";var Io=new Map;Io.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Io.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Io.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});Io.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Io.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Io.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var kM=function(e,n){return Ie(e,n,Io)},lg=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:kM}))});lg.displayName="ArrowRight";var So=new Map;So.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"136",x2:"108",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"176",x2:"188",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"136",x2:"188",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});So.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",opacity:"0.2"}),c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});So.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M240,208h-8V104a16,16,0,0,0-16-16H152V40a16,16,0,0,0-16-16H40A16,16,0,0,0,24,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM120,136a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h32A8,8,0,0,1,120,136ZM64,64H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,104H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm88-64h64V208H152Z"}),c.createElement("path",{d:"M192,168H176a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"}),c.createElement("path",{d:"M176,144h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"}))});So.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});So.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});So.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var _M=function(e,n){return Ie(e,n,So)},Z1=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:_M}))});Z1.displayName="Buildings";var Co=new Map;Co.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Co.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Co.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});Co.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Co.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Co.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var EM=function(e,n){return Ie(e,n,Co)},Kn=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:EM}))});Kn.displayName="Calendar";var Lo=new Map;Lo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Lo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Lo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});Lo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Lo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Lo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var wM=function(e,n){return Ie(e,n,Lo)},X1=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:wM}))});X1.displayName="Check";var Ao=new Map;Ao.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ao.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ao.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});Ao.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ao.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ao.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var xM=function(e,n){return Ie(e,n,Ao)},Bi=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:xM}))});Bi.displayName="CheckCircle";var Po=new Map;Po.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Po.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Po.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});Po.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Po.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Po.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var TM=function(e,n){return Ie(e,n,Po)},Ds=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:TM}))});Ds.displayName="Clock";var Ro=new Map;Ro.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ro.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ro.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm91.2-27.7a8,8,0,0,0-8.7,1.8L204.2,68.4l-8.3-8.3a96,96,0,1,0,0,135.8,8,8,0,0,0,0-11.3,7.9,7.9,0,0,0-11.3,0,80,80,0,1,1,0-113.2l8.3,8.3L178.5,94.1a8,8,0,0,0,5.7,13.6h40a8,8,0,0,0,8-8v-40A8.2,8.2,0,0,0,227.2,52.3Z"}))});Ro.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ro.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ro.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var IM=function(e,n){return Ie(e,n,Ro)},NI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:IM}))});NI.displayName="ClockClockwise";var bo=new Map;bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm59.9-19.9a96.2,96.2,0,0,0-135.8,0l-8.3,8.3L37.5,54.1a8,8,0,0,0-8.7-1.8,8.2,8.2,0,0,0-5,7.4v40a8,8,0,0,0,8,8h40a8,8,0,0,0,5.7-13.6L63.1,79.7l8.3-8.3a80,80,0,1,1,0,113.2,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3A96,96,0,0,0,195.9,60.1Z"}))});bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var SM=function(e,n){return Ie(e,n,bo)},VI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:SM}))});VI.displayName="ClockCounterClockwise";var jo=new Map;jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var CM=function(e,n){return Ie(e,n,jo)},of=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:CM}))});of.displayName="Envelope";var Do=new Map;Do.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Do.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Do.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});Do.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Do.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Do.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var LM=function(e,n){return Ie(e,n,Do)},Xd=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:LM}))});Xd.displayName="Eye";var Oo=new Map;Oo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Oo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Oo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),c.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});Oo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Oo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Oo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var AM=function(e,n){return Ie(e,n,Oo)},Jd=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:AM}))});Jd.displayName="EyeSlash";var Mo=new Map;Mo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"80",x2:"96",y2:"80",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Mo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64h32a8,8,0,0,0,8-8V91.3a7.9,7.9,0,0,0-2.3-5.6L170.3,42.3a7.9,7.9,0,0,0-5.6-2.3H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8Z",opacity:"0.2"}),c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Mo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M219.3,80,176,36.7A15.9,15.9,0,0,0,164.7,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V91.3A15.9,15.9,0,0,0,219.3,80ZM208,91.3V208H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H164.7L208,91.3ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"}))});Mo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Mo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Mo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var PM=function(e,n){return Ie(e,n,Mo)},FI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:PM}))});FI.displayName="FloppyDisk";var No=new Map;No.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});No.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z",opacity:"0.2"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});No.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"}))});No.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});No.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});No.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var RM=function(e,n){return Ie(e,n,No)},WI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:RM}))});WI.displayName="GlobeHemisphereWest";var Vo=new Map;Vo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Vo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Vo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});Vo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Vo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Vo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var bM=function(e,n){return Ie(e,n,Vo)},UI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:bM}))});UI.displayName="House";var Fo=new Map;Fo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Fo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Fo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});Fo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Fo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Fo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var jM=function(e,n){return Ie(e,n,Fo)},J1=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:jM}))});J1.displayName="IdentificationCard";var Wo=new Map;Wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"152",r:"16"}))});Wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});Wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});Wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"152",r:"10"}))});Wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"152",r:"8"}))});Wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var DM=function(e,n){return Ie(e,n,Wo)},eh=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:DM}))});eh.displayName="Lock";var Uo=new Map;Uo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"44",y1:"156",x2:"100",y2:"212",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"164",y1:"92",x2:"72",y2:"184",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Uo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",opacity:"0.2"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Uo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.3,32a15.9,15.9,0,0,0-22.6,0L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a15.9,15.9,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7ZM51.3,160,144,67.3,160.7,84,68,176.7ZM48,179.3,76.7,208H48Zm48,25.4L79.3,188,172,95.3,188.7,112Z"}))});Uo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Uo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Uo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var OM=function(e,n){return Ie(e,n,Uo)},$I=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:OM}))});$I.displayName="Pencil";var $o=new Map;$o.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});$o.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,64l56,56,26.3-26.3a8,8,0,0,0,0-11.4L173.7,37.7a8,8,0,0,0-11.4,0Z",opacity:"0.2"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});$o.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"}))});$o.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});$o.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});$o.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var MM=function(e,n){return Ie(e,n,$o)},ug=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:MM}))});ug.displayName="PencilSimple";var zo=new Map;zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,120H136V40a8,8,0,0,0-16,0v80H40a8,8,0,0,0,0,16h80v80a8,8,0,0,0,16,0V136h80a8,8,0,0,0,0-16Z"}))});zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var NM=function(e,n){return Ie(e,n,zo)},zI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:NM}))});zI.displayName="Plus";var Bo=new Map;Bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});Bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var VM=function(e,n){return Ie(e,n,Bo)},ey=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:VM}))});ey.displayName="SignIn";var Ho=new Map;Ho.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ho.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ho.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});Ho.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ho.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ho.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var FM=function(e,n){return Ie(e,n,Ho)},td=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:FM}))});td.displayName="SignOut";var qo=new Map;qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var WM=function(e,n){return Ie(e,n,qo)},BI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:WM}))});BI.displayName="SpinnerGap";var Yo=new Map;Yo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"60",x2:"40",y2:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Yo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Yo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))});Yo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Yo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Yo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var UM=function(e,n){return Ie(e,n,Yo)},cg=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:UM}))});cg.displayName="Trash";var Go=new Map;Go.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Go.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Go.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});Go.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Go.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Go.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var $M=function(e,n){return Ie(e,n,Go)},no=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:$M}))});no.displayName="User";var Ko=new Map;Ko.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ko.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ko.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"120",r:"44"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});Ko.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ko.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ko.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var zM=function(e,n){return Ie(e,n,Ko)},au=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:zM}))});au.displayName="UserCircle";var Qo=new Map;Qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});Qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var BM=function(e,n){return Ie(e,n,Qo)},ty=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:BM}))});ty.displayName="UserPlus";var Zo=new Map;Zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",opacity:"0.2"}),c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M121.2,157.9a60,60,0,1,0-66.4,0A95.5,95.5,0,0,0,9.5,192.8a7.8,7.8,0,0,0-.6,8.3,8.1,8.1,0,0,0,7.1,4.3H160a8.1,8.1,0,0,0,7.1-4.3,7.8,7.8,0,0,0-.6-8.3A95.5,95.5,0,0,0,121.2,157.9Z"}),c.createElement("path",{d:"M248.1,192.8a96.3,96.3,0,0,0-45.4-34.9A59.9,59.9,0,0,0,169.5,48a64,64,0,0,0-16.3,2.2,8.2,8.2,0,0,0-5.4,5.2,8,8,0,0,0,1.2,7.3,75.8,75.8,0,0,1,3.8,84.9,8.1,8.1,0,0,0,2.1,10.6q4.5,3.5,8.7,7.2l.5.5a112.6,112.6,0,0,1,25.5,34.9,7.9,7.9,0,0,0,7.2,4.6h44.7a8.1,8.1,0,0,0,7.1-4.3A8,8,0,0,0,248.1,192.8Z"}))});Zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var HM=function(e,n){return Ie(e,n,Zo)},ny=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:HM}))});ny.displayName="Users";var Xo=new Map;Xo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Xo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Xo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"}))});Xo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Xo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Xo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var qM=function(e,n){return Ie(e,n,Xo)},ry=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:qM}))});ry.displayName="X";var Jo=new Map;Jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"}))});Jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var YM=function(e,n){return Ie(e,n,Jo)},HI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:YM}))});HI.displayName="XCircle";const GM=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #801100 100%);
`,KM=F.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,QM=F.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,ZM=F.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,g_=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,y_=F.label`
  font-size: 0.9rem;
  color: #555;
`,v_=F.div`
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
`,_c=F.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  margin-right: 0.5rem;
`,k_=F.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`,XM=F.button`
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
`,JM=F.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,eN=F(px)`
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
`,tN=F.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,nN=F.button`
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
`,rN=F.button`
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
`,iN=F.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;function oN(){const[t,e]=M.useState(""),[n,r]=M.useState(""),[i,o]=M.useState(""),[s,a]=M.useState(!1),[u,d]=M.useState(!1),[f,m]=M.useState(!1),[E,k]=M.useState(!1),I=ya(),L=ga();M.useEffect(()=>{var g;(g=L.state)!=null&&g.message&&(Y.info(L.state.message),I(L.pathname,{replace:!0,state:{}}))},[L,I]),M.useEffect(()=>{i&&o("")},[t,n]);const T=async()=>{var _,w;if(!t){o("Please enter your email address to reset your password"),(_=document.getElementById("email"))==null||_.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(w=document.getElementById("email"))==null||w.focus();return}try{k(!0),await WP(sn,t),m(!0),Y.success("Password reset email sent! Check your inbox.")}catch(R){console.error("Password reset error:",R),R.code==="auth/user-not-found"?o("No account found with this email address"):o("Failed to send password reset email. Please try again.")}finally{k(!1)}},y=async g=>{var w,R,O;if(g.preventDefault(),!t||!n){o("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(w=document.getElementById("email"))==null||w.focus();return}try{o(""),a(!0);try{const S=(await $P(sn,t,n)).user,A=On(un(we,"declined_registrations"),Zn("userId","==",S.uid));if(!(await En(A)).empty){await sn.signOut(),o("Your registration request has been declined. Please contact an administrator."),Y.error("Access denied: Registration declined");return}const j=On(un(we,"registration_requests"),Zn("userId","==",S.uid));if(!(await En(j)).empty){await sn.signOut(),o("Your registration request is pending approval. You will be notified when approved."),Y.info("Registration pending approval");return}try{const q=On(un(we,"users"),Zn("email","==",S.email)),re=await En(q);if(re.empty){const ue=On(un(we,"users"),Zn("userId","==",S.uid)),ce=await En(ue);if(!ce.empty&&ce.docs[0].data().status==="inactive"){await sn.signOut(),o("Your account has been deactivated. Please contact an administrator."),Y.error("Account deactivated");return}}else if(re.docs[0].data().status==="inactive"){await sn.signOut(),o("Your account has been deactivated. Please contact an administrator."),Y.error("Account deactivated");return}}catch(q){console.error("Error checking user status:",q)}const P=!1;Y.success("Login successful!"),I("/dashboard")}catch(x){if(console.error("Firebase auth error:",x),!(!1&&(x.code==="auth/network-request-failed"||(R=x.message)!=null&&R.includes("network")))){if(x.code==="auth/invalid-credential"||x.code==="auth/invalid-email"||x.code==="auth/user-not-found"||x.code==="auth/wrong-password"){console.log("Authentication failed:",x.code,x.message);const A=x.code==="auth/user-not-found"||x.code==="auth/invalid-credential"&&t.includes("@");o(A?h.jsxs("span",{children:["Account not found. Please check your email or",h.jsx("a",{href:"/register",style:{color:"#800000",marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(O=document.getElementById("email"))==null||O.focus()}else x.code==="auth/network-request-failed"?o("Network error. Please check your connection and try again."):x.code==="auth/too-many-requests"?o("Too many failed login attempts. Please try again later or reset your password."):x.code==="auth/operation-not-allowed"?(o("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",x),o("Failed to log in. Please try again."));Y.error("Login failed")}}}catch(x){console.error("Unexpected login error:",x),o("An unexpected error occurred. Please try again."),Y.error("Login failed")}finally{a(!1)}};return h.jsx(GM,{children:h.jsxs(KM,{children:[h.jsx(iN,{children:"Hyacinth"}),h.jsx(QM,{children:"Attendance System"}),h.jsxs(ZM,{onSubmit:y,children:[h.jsxs(g_,{children:[h.jsx(y_,{htmlFor:"email",children:"Email"}),h.jsxs(v_,{children:[h.jsx(_c,{children:h.jsx(of,{size:18})}),h.jsx(k_,{id:"email",type:"email",value:t,onChange:g=>e(g.target.value),placeholder:"Enter your email",required:!0})]})]}),h.jsxs(g_,{children:[h.jsx(y_,{htmlFor:"password",children:"Password"}),h.jsxs(v_,{children:[h.jsx(_c,{children:h.jsx(eh,{size:18})}),h.jsx(k_,{id:"password",type:u?"text":"password",value:n,onChange:g=>r(g.target.value),placeholder:"Enter your password",required:!0}),h.jsx(rN,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?h.jsx(Jd,{size:18}):h.jsx(Xd,{size:18})})]}),h.jsx(nN,{type:"button",onClick:T,disabled:E,tabIndex:"-1",children:E?"Sending...":f?"Email sent!":"Forgot password?"})]}),i&&h.jsx(JM,{children:i}),h.jsxs(tN,{children:[h.jsx(XM,{type:"submit",disabled:s,onClick:y,children:s?"Logging in...":h.jsxs(h.Fragment,{children:[h.jsx(_c,{children:h.jsx(ey,{size:18})}),"Login"]})}),h.jsxs(eN,{to:"/register",children:[h.jsx(_c,{children:h.jsx(ty,{size:18})}),"Register"]})]})]})]})})}const sN=async t=>{try{const e={...t,createdAt:Su(),status:"pending"};return(await M8(un(we,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},aN=async()=>{try{const t=On(un(we,"registration_requests"),M1("createdAt","desc"));return(await En(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error getting registration requests:",t),t}},lN=async(t,e)=>{try{const n=ut(we,"registration_requests",t);await xl(n,{...e,updatedAt:Su()})}catch(n){throw console.error("Error updating registration request:",n),n}},uN=async t=>{try{const e=ut(we,"users",t.userId);await ou(e,{userId:t.userId,name:t.name,email:t.email,position:t.position,role:t.role||"user",status:"active",timeRegion:t.timeRegion||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila",createdAt:Su(),userID:t.userID||`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`}),await V1(ut(we,"registration_requests",t.id))}catch(e){throw console.error("Error approving registration request:",e),e}},cN=async t=>{try{if(await ou(ut(we,"declined_registrations",t.id),{...t,declinedAt:Su(),status:"declined",blocked:!0}),await V1(ut(we,"registration_requests",t.id)),t.userId&&!t.userId.startsWith("temp_"))try{const n=hT().currentUser;n&&n.uid===t.userId?(await KP(n),console.log("Deleted declined user from Firebase Authentication")):console.log("User marked as declined in Firestore. They will be blocked from accessing the system.")}catch(e){console.error("Error handling user authentication:",e)}}catch(e){throw console.error("Error declining registration request:",e),e}},dN=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  padding: 2rem 1rem;
`,hN=F.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,fN=F.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,pN=F.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,qa=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,mN=F.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,wp=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${t=>t.flex||1};
  min-width: ${t=>t.minWidth||"0"};
`,Wr=F.label`
  font-size: 0.9rem;
  color: #555;
`,Ni=F.div`
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
`,Rn=F.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: #800000;
`,ls=F.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`,gN=F.select`
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
`,yN=F.button`
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
`,xp=F.button`
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
`,__=F(BI)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,vN=F(px)`
  display: flex;
  align-items: center;
  color: #800000;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,us=F.div`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,kN=F.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`,Ya=F.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?"#000000":"#666"};
`;function _N(){const[t,e]=M.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=M.useState({}),[i,o]=M.useState(!1),[s,a]=M.useState(!1),[u,d]=M.useState(!1),[f,m]=M.useState(!1),E=ya();M.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const k={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},I=g=>{const{name:_,value:w}=g.target;if(e(_==="middleInitial"?R=>({...R,[_]:w.toUpperCase()}):R=>({...R,[_]:w})),_==="email"&&w.includes("@")&&w.includes(".")){m(!0);const R=setTimeout(()=>{L(w)},800);return()=>clearTimeout(R)}},L=async g=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)){m(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:g})}).then(R=>R.json())).registered&&r(R=>({...R,email:"This email is already registered. Please use a different email or login instead."}))}catch(_){console.error("Error checking email:",_)}finally{m(!1)}},T=()=>{const g={};return t.lastName.trim()||(g.lastName="Last name is required"),t.firstName.trim()||(g.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(g.email="Email is invalid"):g.email="Email is required",t.password?k.length?k.validChars?k.hasLetter?k.hasNumber||(g.password="Password must contain at least one number"):g.password="Password must contain at least one letter":g.password="Password contains invalid characters":g.password="Password must be at least 4 characters":g.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(g.confirmPassword="Passwords do not match"):g.confirmPassword="Please confirm your password",t.position||(g.position="Please select your position"),r(g),Object.keys(g).length===0},y=async g=>{var _,w,R,O;if(g.preventDefault(),!!T())try{o(!0);const x=!1;let S,A;try{A=await UP(sn,t.email,t.password),S=A.user.uid}catch(P){if(console.error("Auth error:",P),P.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),S=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(x&&(P.code==="auth/network-request-failed"||(_=P.message)!=null&&_.includes("network"))))throw P}const b=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(A!=null&&A.user)try{await BP(A.user,{displayName:b})}catch(P){console.warn("Could not update profile, continuing with registration:",P)}let j="Asia/Manila";try{j=Intl.DateTimeFormat().resolvedOptions().timeZone,console.log("Detected device time zone during registration:",j)}catch(P){console.error("Error detecting time zone during registration:",P)}const D={userId:S,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:b,email:t.email,position:t.position,role:"user",status:"pending",timeRegion:j,userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await sN(D)}catch(P){if(console.error("Firestore error:",P),!x)throw P}Y.success("Registration request submitted! An administrator will review your request."),x&&!A||E("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(x){if(console.error("Registration error:",x),x.code==="auth/email-already-in-use"||typeof x=="object"&&x.code==="auth/email-already-in-use"){const S=x.message||"Email is already registered. Please use a different email or login instead.";r(A=>({...A,email:S})),Y.error(h.jsxs("div",{children:["Email already exists. ",h.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(w=document.getElementById("email"))==null||w.scrollIntoView({behavior:"smooth",block:"center"}),(R=document.getElementById("email"))==null||R.focus()}else x.code==="auth/network-request-failed"?Y.error("Network error. Please check your connection and try again."):x.code==="auth/operation-not-allowed"?(r(S=>({...S,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(O=x.code)!=null&&O.includes("auth/")?Y.error(`Authentication error: ${x.message||"Please try again later"}`):(console.error("Registration error details:",x),Y.error("Registration failed. Please try again."))}finally{o(!1)}};return h.jsx(dN,{children:h.jsxs(hN,{children:[h.jsxs(vN,{to:"/",children:[h.jsx(Rn,{children:h.jsx(MI,{size:16})}),"Back to Login"]}),h.jsx(fN,{children:"Create Account"}),h.jsxs(pN,{onSubmit:y,children:[h.jsxs(qa,{children:[h.jsx(Wr,{children:"Full Name"}),h.jsxs(mN,{children:[h.jsxs(wp,{flex:"2",minWidth:"150px",children:[h.jsx(Wr,{htmlFor:"lastName",children:"Last Name"}),h.jsxs(Ni,{children:[h.jsx(Rn,{children:h.jsx(no,{size:18})}),h.jsx(ls,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:I,placeholder:"Last name"})]}),n.lastName&&h.jsx(us,{children:n.lastName})]}),h.jsxs(wp,{flex:"2",minWidth:"150px",children:[h.jsx(Wr,{htmlFor:"firstName",children:"First Name"}),h.jsx(Ni,{children:h.jsx(ls,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:I,placeholder:"First name"})}),n.firstName&&h.jsx(us,{children:n.firstName})]}),h.jsxs(wp,{flex:"1",minWidth:"80px",children:[h.jsx(Wr,{htmlFor:"middleInitial",children:"M.I."}),h.jsx(Ni,{children:h.jsx(ls,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:I,placeholder:"M.I.",maxLength:"1"})})]})]})]}),h.jsxs(qa,{children:[h.jsx(Wr,{htmlFor:"email",children:"Email"}),h.jsxs(Ni,{children:[h.jsx(Rn,{children:h.jsx(of,{size:18})}),h.jsx(ls,{id:"email",name:"email",type:"email",value:t.email,onChange:I,placeholder:"Enter your email"}),f&&h.jsx(xp,{as:"span","aria-label":"Checking email",children:h.jsx(__,{size:18})})]}),n.email&&h.jsx(us,{children:n.email})]}),h.jsxs(qa,{children:[h.jsx(Wr,{htmlFor:"position",children:"Position"}),h.jsxs(Ni,{children:[h.jsx(Rn,{children:h.jsx(J1,{size:18})}),h.jsxs(gN,{id:"position",name:"position",value:t.position,onChange:I,children:[h.jsx("option",{value:"",disabled:!0,children:"Select your position"}),h.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),h.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&h.jsx(us,{children:n.position})]}),h.jsxs(qa,{children:[h.jsx(Wr,{htmlFor:"password",children:"Password"}),h.jsxs(Ni,{children:[h.jsx(Rn,{children:h.jsx(eh,{size:18})}),h.jsx(ls,{id:"password",name:"password",type:s?"text":"password",value:t.password,onChange:I,placeholder:"Create a password"}),h.jsx(xp,{type:"button",onClick:()=>a(!s),"aria-label":s?"Hide password":"Show password",children:s?h.jsx(Jd,{size:18}):h.jsx(Xd,{size:18})})]}),n.password&&h.jsx(us,{children:n.password}),h.jsxs(kN,{children:[h.jsxs(Ya,{met:k.length,children:[h.jsx(Rn,{children:h.jsx(Bi,{size:14,weight:k.length?"fill":"regular"})}),"At least 4 characters"]}),h.jsxs(Ya,{met:k.validChars,children:[h.jsx(Rn,{children:h.jsx(Bi,{size:14,weight:k.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),h.jsxs(Ya,{met:k.hasLetter,children:[h.jsx(Rn,{children:h.jsx(Bi,{size:14,weight:k.hasLetter?"fill":"regular"})}),"At least one letter"]}),h.jsxs(Ya,{met:k.hasNumber,children:[h.jsx(Rn,{children:h.jsx(Bi,{size:14,weight:k.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),h.jsxs(qa,{children:[h.jsx(Wr,{htmlFor:"confirmPassword",children:"Confirm Password"}),h.jsxs(Ni,{children:[h.jsx(Rn,{children:h.jsx(eh,{size:18})}),h.jsx(ls,{id:"confirmPassword",name:"confirmPassword",type:u?"text":"password",value:t.confirmPassword,onChange:I,placeholder:"Confirm your password"}),h.jsx(xp,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?h.jsx(Jd,{size:18}):h.jsx(Xd,{size:18})})]}),n.confirmPassword&&h.jsx(us,{children:n.confirmPassword}),t.confirmPassword&&h.jsxs(Ya,{met:k.match,children:[h.jsx(Rn,{children:h.jsx(Bi,{size:14,weight:k.match?"fill":"regular"})}),"Passwords match"]})]}),h.jsx(yN,{type:"submit",disabled:i||f,children:i?h.jsxs(h.Fragment,{children:[h.jsx(__,{size:18}),"Creating Account..."]}):f?"Checking email...":"Register"})]})]})})}const qI=M.createContext(),iy=()=>M.useContext(qI),EN=({children:t})=>{const{currentUser:e}=H1(),[n,r]=M.useState(!1),[i,o]=M.useState(!0);M.useEffect(()=>{(async()=>{if(!(e!=null&&e.uid)){o(!1);return}try{const d=ut(we,"users_settings",e.uid),f=await iu(d);if(f.exists()){const m=f.data();m.use24HourFormat!==void 0&&r(m.use24HourFormat)}else await ou(d,{use24HourFormat:!1,userId:e.uid})}catch(d){console.error("Error fetching user settings:",d)}finally{o(!1)}})()},[e]);const a={use24HourFormat:n,toggleTimeFormat:async()=>{if(e!=null&&e.uid)try{const u=ut(we,"users_settings",e.uid);return await ou(u,{use24HourFormat:!n,userId:e.uid},{merge:!0}),r(!n),!0}catch(u){return console.error("Error updating time format:",u),!1}},loading:i};return h.jsx(qI.Provider,{value:a,children:t})},wN=F.div`
  display: flex;
  height: 100vh; /* Lock to viewport height */
  overflow: hidden; /* Prevent overall page scrolling */
`,xN=F.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Allow sidebar to scroll if needed */
`,TN=F.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,Ur=F.div`
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
`,E_=F.button`
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
`,YI=F.button`
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
`,IN=F(YI)`
  background-color: #111111;
  color: #76da7c;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,SN=F(YI)`
  background-color: #111111;
  color: #e67979;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,cs=F.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,CN=F.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Make content area scrollable */
`,LN=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  background-color: #f5f5f5;
  z-index: 10; /* Ensure header stays on top */
`,AN=F.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,PN=F.div`
  display: flex;
  align-items: center;
`,RN=F.span`
  margin-right: 1rem;
  font-weight: 500;
`,bN=F.button`
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
`,jN=F.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto; /* Make content area scrollable */
  height: calc(100vh - 73px); /* Subtract header height */
`,DN=F.div`
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
`,ON=F.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`,MN=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`,NN=F.div`
  padding: 1rem;
  overflow-y: auto;
`,VN=F.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
  gap: 0.5rem;
`,FN=F.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`,w_=F.div`
  margin-bottom: 1rem;
`,x_=F.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,WN=F.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`,T_=F.button`
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
`,UN=({user:t,activeTab:e,setActiveTab:n,attendanceStatus:r,loading:i,handleTimeInOut:o,lastRecord:s,isSuperAdmin:a,userData:u,setUserData:d,children:f})=>{var P;const m=ya(),{currentUser:E}=H1(),{use24HourFormat:k,toggleTimeFormat:I}=iy(),[L,T]=M.useState(!1),[y,g]=M.useState((u==null?void 0:u.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila"),[_,w]=M.useState(!1),[R,O]=M.useState(""),[x,S]=M.useState(!1),A=q=>{try{const re=new Date,ue={timeZone:q,timeZoneName:"short"},G=new Intl.DateTimeFormat("en-US",ue).format(re).match(/GMT([+-]\d+)/);if(G&&G[1])return`UTC${G[1]}`;const X=new Date,ee=(new Date(X.toLocaleString("en-US",{timeZone:q}))-X)/6e4,ye=Math.floor(Math.abs(ee)/60),Ye=Math.abs(ee)%60;return`UTC${ee>=0?"+":"-"}${ye.toString().padStart(2,"0")}:${Ye.toString().padStart(2,"0")}`}catch(re){return console.error("Error calculating UTC offset:",re),""}};M.useEffect(()=>{try{const q=Intl.DateTimeFormat().resolvedOptions().timeZone;O(q),console.log("Detected device time zone:",q)}catch(q){console.error("Error detecting time zone:",q),O("Unable to detect")}},[]),M.useEffect(()=>{u!=null&&u.timeRegion?g(u.timeRegion):R&&!(u!=null&&u.timeRegion)&&g(R)},[u,R]);const b=async()=>{if(!(!(t!=null&&t.uid)||_))try{w(!0);const q=ut(we,"users",t.uid);await xl(q,{timeRegion:y}),d(re=>({...re,timeRegion:y})),Y.success("Time region updated successfully"),T(!1)}catch(q){console.error("Error updating time region:",q),Y.error("Failed to update time region")}finally{w(!1)}},j=async()=>{if(!x)try{S(!0),await I()?Y.success(`Time format updated to ${k?"12-hour":"24-hour"} format`):Y.error("Failed to update time format")}catch(q){console.error("Error updating time format:",q),Y.error("Failed to update time format")}finally{S(!1)}},D=async()=>{try{await GP(sn),m("/login")}catch(q){console.error("Error signing out:",q),Y.error("Failed to sign out")}};return h.jsxs(wN,{children:[h.jsxs(xN,{children:[h.jsx(TN,{children:"Hyacinth"}),h.jsxs(Ur,{className:e==="home"?"active":"",onClick:()=>n("home"),children:[h.jsx(UI,{size:20,style:{marginRight:"0.5rem"}}),"Home"]}),h.jsxs(Ur,{className:e==="schedule"?"active":"",onClick:()=>n("schedule"),children:[h.jsx(Kn,{size:20,style:{marginRight:"0.5rem"}}),"Schedule"]}),h.jsxs(Ur,{className:e==="attendance"?"active":"",onClick:()=>n("attendance"),children:[h.jsx(Ds,{size:20,style:{marginRight:"0.5rem"}}),"Attendance"]}),h.jsxs(Ur,{className:e==="profile"?"active":"",onClick:()=>n("profile"),children:[h.jsx(no,{size:20,style:{marginRight:"0.5rem"}}),"Profile"]}),a&&h.jsxs(h.Fragment,{children:[h.jsxs(Ur,{className:e==="registration_requests"?"active":"",onClick:()=>n("registration_requests"),children:[h.jsx(cs,{children:h.jsx(ty,{size:16})}),"Registration Requests"]}),h.jsxs(Ur,{className:e==="user_management"?"active":"",onClick:()=>n("user_management"),children:[h.jsx(cs,{children:h.jsx(ny,{size:16})}),"User Management"]})]}),h.jsxs("div",{style:{marginTop:"auto"},children:[h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"User Settings"}),h.jsxs(Ur,{onClick:()=>T(!0),children:[h.jsx(cs,{children:h.jsx(WI,{size:16})}),"Change Time Region",h.jsxs("div",{style:{fontSize:"0.75rem",marginLeft:"auto",opacity:.7},children:[((P=u==null?void 0:u.timeRegion)==null?void 0:P.replace("_"," "))||"Asia/Manila",h.jsx("div",{style:{fontSize:"0.7rem",marginTop:"2px"},children:A((u==null?void 0:u.timeRegion)||"Asia/Manila")})]})]})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),h.jsxs(IN,{onClick:()=>o("In"),disabled:i||r==="In",children:[h.jsx(cs,{children:h.jsx(ey,{size:16})}),"Time In"]}),h.jsxs(SN,{onClick:()=>o("Out"),disabled:i||r==="Out"||!r,children:[h.jsx(cs,{children:h.jsx(td,{size:16})}),"Time Out"]}),r&&h.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Status: ",h.jsx("strong",{children:r==="In"?"Clocked In":"Clocked Out"})]})]}),h.jsxs(Ur,{onClick:D,children:[h.jsx(cs,{children:h.jsx(td,{size:16})}),"Logout"]})]})]}),h.jsxs(CN,{children:[h.jsxs(LN,{children:[h.jsxs(AN,{children:[e==="dashboard"&&"Dashboard",e==="attendance"&&"Attendance",e==="schedule"&&"Schedule",e==="profile"&&"Profile",e==="registration_requests"&&"Registration Requests",e==="user_management"&&"User Management"]}),h.jsxs(PN,{children:[h.jsx(RN,{children:t==null?void 0:t.displayName}),h.jsxs(bN,{onClick:D,children:[h.jsx(td,{size:16}),"Logout"]})]})]}),h.jsx(jN,{children:f})]}),L&&h.jsx(DN,{children:h.jsxs(ON,{children:[h.jsxs(MN,{children:[h.jsx("h3",{children:"Change Time Region"}),h.jsx(FN,{onClick:()=>T(!1),children:"×"})]}),h.jsxs(NN,{children:[h.jsx("p",{style:{marginBottom:"1rem"},children:"Changing your time region will affect how times are displayed throughout the application and how your attendance is recorded."}),R&&h.jsxs("p",{style:{marginBottom:"1rem",backgroundColor:"#f0f7ff",padding:"0.5rem",borderRadius:"4px",fontSize:"0.9rem"},children:[h.jsx("strong",{children:"Detected device time zone:"})," ",R,h.jsxs("span",{style:{fontWeight:"normal"},children:["(",A(R),")"]}),R!==y&&h.jsx("button",{onClick:()=>g(R),style:{display:"block",marginTop:"0.5rem",padding:"0.25rem 0.5rem",fontSize:"0.8rem",backgroundColor:"#e6f0ff",border:"1px solid #bbd6fb",borderRadius:"4px",cursor:"pointer"},children:"Use device time zone"})]}),h.jsxs(w_,{children:[h.jsx(x_,{children:"Select Time Region"}),h.jsxs(WN,{value:y,onChange:q=>g(q.target.value),children:[h.jsx("optgroup",{label:"Asia",children:h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT, UTC+8)"})}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern, UTC-5/-4)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central, UTC-6/-5)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain, UTC-7/-6)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific, UTC-8/-7)"})]}),h.jsx("optgroup",{label:"Europe",children:h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST, UTC+0/+1)"})})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"Note: UTC offsets may vary during Daylight Saving Time transitions."})]}),h.jsxs(w_,{style:{marginTop:"1.5rem"},children:[h.jsxs(x_,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(NI,{size:18}),"Time Format"]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"0.5rem"},children:[h.jsx(E_,{active:!k,onClick:j,disabled:x,children:"12-hour (AM/PM)"}),h.jsx(E_,{active:k,onClick:j,disabled:x,children:"24-hour"})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"This setting affects how time is displayed throughout the application."})]})]}),h.jsxs(VN,{children:[h.jsx(T_,{onClick:()=>T(!1),children:"Cancel"}),h.jsx(T_,{primary:!0,onClick:b,disabled:_,children:_?"Updating...":"Save Changes"})]})]})})]})},mi=F.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
`,gi=F.h2`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid #eee;
`,yi=F.div`
  padding: 1.25rem;
`,$N=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,zN=F.span`
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
`;const BN=({attendanceStatus:t,lastRecord:e})=>h.jsx(h.Fragment,{children:h.jsxs($N,{children:[h.jsxs(mi,{children:[h.jsx(gi,{children:"Today's Schedule"}),h.jsx(yi,{children:h.jsx("p",{children:"No schedule for today"})})]}),h.jsxs(mi,{children:[h.jsx(gi,{children:"Attendance Status"}),h.jsx(yi,{children:t?h.jsxs(h.Fragment,{children:[h.jsxs("p",{children:["Current Status:",h.jsx(zN,{status:t,children:t==="In"?"Clocked In":"Clocked Out"})]}),e&&h.jsxs("p",{children:["Last action: ",new Date(e.timestamp.toDate()).toLocaleString()]})]}):h.jsx("p",{children:"You haven't clocked in today"})})]}),h.jsxs(mi,{children:[h.jsx(gi,{children:"Recent Activity"}),h.jsx(yi,{children:e?h.jsxs("p",{children:["Last ",e.type==="In"?"Time In":"Time Out",": ",new Date(e.timestamp.toDate()).toLocaleString()]}):h.jsx("p",{children:"No recent activity"})})]})]})}),HN=F.table`
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
`,qN=F.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,I_=F.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,YN=({user:t})=>{const[e,n]=M.useState([]),[r,i]=M.useState(!0),[o,s]=M.useState(null),{use24HourFormat:a}=iy();M.useEffect(()=>{const k=async()=>{if(t!=null&&t.uid)try{const L=await getDoc(doc(we,"users",t.uid));L.exists()&&s(L.data())}catch(L){console.error("Error fetching user data:",L)}},I=async()=>{if(t!=null&&t.uid)try{i(!0);const L=un(we,"attendance"),T=On(L,Zn("userId","==",t.uid),M1("timestamp","desc")),y=await En(T),g=[];if(y.forEach(w=>{g.push({id:w.id,...w.data()})}),console.log("Raw attendance records:",g.length),g.length===0){n([]),i(!1);return}const _=u(g);console.log("Processed attendance records:",_.length),n(_)}catch(L){console.error("Error fetching attendance records:",L)}finally{i(!1)}};k(),I()},[t]);const u=k=>{const I={};k.forEach(T=>{if(!T.timestamp){console.log("Skipping record without timestamp:",T);return}try{const y=T.timestamp.toDate(),g=y.toISOString().split("T")[0];I[g]||(I[g]={date:y,day:f(T.timestamp),inRecord:null,outRecord:null}),T.type==="In"?I[g].inRecord=T:T.type==="Out"?I[g].outRecord=T:console.log("Record with unknown type:",T.type,T)}catch(y){console.error("Error processing record:",y,T)}});const L=Object.values(I).sort((T,y)=>y.date-T.date);return console.log("Processed records by date:",L),L},d=k=>{if(!k)return"N/A";if(k instanceof Date)return k.toLocaleDateString();try{return k.toDate().toLocaleDateString()}catch(I){return console.error("Error formatting date:",I,k),"Invalid Date"}},f=k=>{if(!k)return"N/A";try{const I=k instanceof Date?k:k.toDate();return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][I.getDay()]}catch(I){return console.error("Error getting day of week:",I,k),"Unknown"}},m=k=>{if(!k)return"N/A";try{return(k instanceof Date?k:k.toDate()).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!a})}catch(I){return console.error("Error formatting time:",I,k),"Invalid Time"}},E=(k,I)=>{if(!k||k.type!=="In")return"N/A";try{const L=k.timestamp.toDate(),T=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][L.getDay()];let y="On Time";const _=((o==null?void 0:o.schedule)||[]).find(w=>w.dayOfWeek===T);if(_&&_.timeIn){const[w,R]=_.timeIn.split(":").map(Number),O=new Date(L);O.setHours(w,R,0,0);const x=Math.round((L-O)/(1e3*60));x<-15?y="Early":x<=15?y="On Time":y="Late"}return y}catch(L){return console.error("Error calculating time-in status:",L,k),"On Time"}};return h.jsxs(mi,{children:[h.jsx(gi,{children:"Attendance Records"}),h.jsx(yi,{children:r?h.jsx("p",{children:"Loading attendance records..."}):e.length>0?h.jsxs(HN,{children:[h.jsxs("thead",{children:[h.jsxs("tr",{children:[h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Day"}),h.jsx("th",{colSpan:"2",children:"IN"}),h.jsx("th",{colSpan:"2",children:"OUT"}),h.jsx("th",{children:"Notes"})]}),h.jsxs("tr",{children:[h.jsx("th",{}),h.jsx("th",{}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{})]})]}),h.jsx("tbody",{children:e.map((k,I)=>{var L,T,y,g;return h.jsxs("tr",{children:[h.jsx("td",{children:d(k.date)}),h.jsx("td",{children:k.day}),h.jsx("td",{children:k.inRecord?m(k.inRecord.timestamp):"-"}),h.jsx("td",{children:k.inRecord?h.jsx(I_,{status:E(k.inRecord,k.date),children:E(k.inRecord,k.date)}):"-"}),h.jsx("td",{children:k.outRecord?m(k.outRecord.timestamp):"-"}),h.jsx("td",{children:k.outRecord?h.jsx(I_,{status:"Complete",children:"Complete"}):"-"}),h.jsx("td",{children:(L=k.inRecord)!=null&&L.notes&&((T=k.outRecord)!=null&&T.notes)?h.jsxs(h.Fragment,{children:[h.jsx("strong",{children:"IN:"})," ",k.inRecord.notes,h.jsx("br",{}),h.jsx("strong",{children:"OUT:"})," ",k.outRecord.notes]}):(y=k.inRecord)!=null&&y.notes?k.inRecord.notes:(g=k.outRecord)!=null&&g.notes?k.outRecord.notes:"-"})]},I)})})]}):h.jsx(qN,{children:h.jsx("p",{children:"No attendance records found"})})})]})};function th(t){"@babel/helpers - typeof";return th=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},th(t)}function xi(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function jt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function lr(t){jt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||th(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function GI(t,e){jt(2,arguments);var n=lr(t).getTime(),r=xi(e);return new Date(n+r)}var GN=36e5;function KN(t,e){jt(2,arguments);var n=xi(e);return GI(t,n*GN)}var QN={};function sf(){return QN}function ZN(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function XN(t){return jt(1,arguments),t instanceof Date||th(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function JN(t){if(jt(1,arguments),!XN(t)&&typeof t!="number")return!1;var e=lr(t);return!isNaN(Number(e))}function e9(t,e){jt(2,arguments);var n=xi(e);return GI(t,-n)}var t9=864e5;function n9(t){jt(1,arguments);var e=lr(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/t9)+1}function nh(t){jt(1,arguments);var e=1,n=lr(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function KI(t){jt(1,arguments);var e=lr(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=nh(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=nh(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function r9(t){jt(1,arguments);var e=KI(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=nh(n);return r}var i9=6048e5;function o9(t){jt(1,arguments);var e=lr(t),n=nh(e).getTime()-r9(e).getTime();return Math.round(n/i9)+1}function rh(t,e){var n,r,i,o,s,a,u,d;jt(1,arguments);var f=sf(),m=xi((n=(r=(i=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:f.weekStartsOn)!==null&&r!==void 0?r:(u=f.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var E=lr(t),k=E.getUTCDay(),I=(k<m?7:0)+k-m;return E.setUTCDate(E.getUTCDate()-I),E.setUTCHours(0,0,0,0),E}function QI(t,e){var n,r,i,o,s,a,u,d;jt(1,arguments);var f=lr(t),m=f.getUTCFullYear(),E=sf(),k=xi((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:E.firstWeekContainsDate)!==null&&r!==void 0?r:(u=E.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(k>=1&&k<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var I=new Date(0);I.setUTCFullYear(m+1,0,k),I.setUTCHours(0,0,0,0);var L=rh(I,e),T=new Date(0);T.setUTCFullYear(m,0,k),T.setUTCHours(0,0,0,0);var y=rh(T,e);return f.getTime()>=L.getTime()?m+1:f.getTime()>=y.getTime()?m:m-1}function s9(t,e){var n,r,i,o,s,a,u,d;jt(1,arguments);var f=sf(),m=xi((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:f.firstWeekContainsDate)!==null&&r!==void 0?r:(u=f.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1),E=QI(t,e),k=new Date(0);k.setUTCFullYear(E,0,m),k.setUTCHours(0,0,0,0);var I=rh(k,e);return I}var a9=6048e5;function l9(t,e){jt(1,arguments);var n=lr(t),r=rh(n,e).getTime()-s9(n,e).getTime();return Math.round(r/a9)+1}function Se(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var $r={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return Se(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):Se(r+1,2)},d:function(e,n){return Se(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return Se(e.getUTCHours()%12||12,n.length)},H:function(e,n){return Se(e.getUTCHours(),n.length)},m:function(e,n){return Se(e.getUTCMinutes(),n.length)},s:function(e,n){return Se(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return Se(o,n.length)}},ds={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},u9={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return $r.y(e,n)},Y:function(e,n,r,i){var o=QI(e,i),s=o>0?o:1-o;if(n==="YY"){var a=s%100;return Se(a,2)}return n==="Yo"?r.ordinalNumber(s,{unit:"year"}):Se(s,n.length)},R:function(e,n){var r=KI(e);return Se(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return Se(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return Se(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return Se(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return $r.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return Se(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var o=l9(e,i);return n==="wo"?r.ordinalNumber(o,{unit:"week"}):Se(o,n.length)},I:function(e,n,r){var i=o9(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):Se(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):$r.d(e,n)},D:function(e,n,r){var i=n9(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):Se(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return Se(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return Se(s,n.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),o=i===0?7:i;switch(n){case"i":return String(o);case"ii":return Se(o,n.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),o=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),o;switch(i===12?o=ds.noon:i===0?o=ds.midnight:o=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),o;switch(i>=17?o=ds.evening:i>=12?o=ds.afternoon:i>=4?o=ds.morning:o=ds.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return $r.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):$r.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):Se(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):Se(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):$r.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):$r.s(e,n)},S:function(e,n){return $r.S(e,n)},X:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();if(s===0)return"Z";switch(n){case"X":return C_(s);case"XXXX":case"XX":return zi(s);case"XXXXX":case"XXX":default:return zi(s,":")}},x:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"x":return C_(s);case"xxxx":case"xx":return zi(s);case"xxxxx":case"xxx":default:return zi(s,":")}},O:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+S_(s,":");case"OOOO":default:return"GMT"+zi(s,":")}},z:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+S_(s,":");case"zzzz":default:return"GMT"+zi(s,":")}},t:function(e,n,r,i){var o=i._originalDate||e,s=Math.floor(o.getTime()/1e3);return Se(s,n.length)},T:function(e,n,r,i){var o=i._originalDate||e,s=o.getTime();return Se(s,n.length)}};function S_(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+Se(o,2)}function C_(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Se(Math.abs(t)/60,2)}return zi(t,e)}function zi(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=Se(Math.floor(i/60),2),s=Se(i%60,2);return r+o+n+s}var L_=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},ZI=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},c9=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return L_(e,n);var s;switch(i){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",L_(i,n)).replace("{{time}}",ZI(o,n))},d9={p:ZI,P:c9},h9=["D","DD"],f9=["YY","YYYY"];function p9(t){return h9.indexOf(t)!==-1}function m9(t){return f9.indexOf(t)!==-1}function A_(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var g9={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},y9=function(e,n,r){var i,o=g9[e];return typeof o=="string"?i=o:n===1?i=o.one:i=o.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function Tp(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var v9={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},k9={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},_9={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},E9={date:Tp({formats:v9,defaultWidth:"full"}),time:Tp({formats:k9,defaultWidth:"full"}),dateTime:Tp({formats:_9,defaultWidth:"full"})},w9={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},x9=function(e,n,r,i){return w9[e]};function Ga(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):o;i=t.formattingValues[s]||t.formattingValues[o]}else{var a=t.defaultWidth,u=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[u]||t.values[a]}var d=t.argumentCallback?t.argumentCallback(e):e;return i[d]}}var T9={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},I9={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},S9={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},C9={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},L9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},A9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},P9=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},R9={ordinalNumber:P9,era:Ga({values:T9,defaultWidth:"wide"}),quarter:Ga({values:I9,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Ga({values:S9,defaultWidth:"wide"}),day:Ga({values:C9,defaultWidth:"wide"}),dayPeriod:Ga({values:L9,defaultWidth:"wide",formattingValues:A9,defaultFormattingWidth:"wide"})};function Ka(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var s=o[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(a)?j9(a,function(m){return m.test(s)}):b9(a,function(m){return m.test(s)}),d;d=t.valueCallback?t.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d;var f=e.slice(s.length);return{value:d,rest:f}}}function b9(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function j9(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function D9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],o=e.match(t.parsePattern);if(!o)return null;var s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;var a=e.slice(i.length);return{value:s,rest:a}}}var O9=/^(\d+)(th|st|nd|rd)?/i,M9=/\d+/i,N9={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},V9={any:[/^b/i,/^(a|c)/i]},F9={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},W9={any:[/1/i,/2/i,/3/i,/4/i]},U9={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},$9={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},z9={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},B9={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},H9={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},q9={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Y9={ordinalNumber:D9({matchPattern:O9,parsePattern:M9,valueCallback:function(e){return parseInt(e,10)}}),era:Ka({matchPatterns:N9,defaultMatchWidth:"wide",parsePatterns:V9,defaultParseWidth:"any"}),quarter:Ka({matchPatterns:F9,defaultMatchWidth:"wide",parsePatterns:W9,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Ka({matchPatterns:U9,defaultMatchWidth:"wide",parsePatterns:$9,defaultParseWidth:"any"}),day:Ka({matchPatterns:z9,defaultMatchWidth:"wide",parsePatterns:B9,defaultParseWidth:"any"}),dayPeriod:Ka({matchPatterns:H9,defaultMatchWidth:"any",parsePatterns:q9,defaultParseWidth:"any"})},G9={code:"en-US",formatDistance:y9,formatLong:E9,formatRelative:x9,localize:R9,match:Y9,options:{weekStartsOn:0,firstWeekContainsDate:1}},K9=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Q9=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Z9=/^'([^]*?)'?$/,X9=/''/g,J9=/[a-zA-Z]/;function e7(t,e,n){var r,i,o,s,a,u,d,f,m,E,k,I,L,T;jt(2,arguments);var y=String(e),g=sf(),_=(r=(i=void 0)!==null&&i!==void 0?i:g.locale)!==null&&r!==void 0?r:G9,w=xi((o=(s=(a=(u=void 0)!==null&&u!==void 0?u:void 0)!==null&&a!==void 0?a:g.firstWeekContainsDate)!==null&&s!==void 0?s:(d=g.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(w>=1&&w<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var R=xi((m=(E=(k=(I=void 0)!==null&&I!==void 0?I:void 0)!==null&&k!==void 0?k:g.weekStartsOn)!==null&&E!==void 0?E:(L=g.locale)===null||L===void 0||(T=L.options)===null||T===void 0?void 0:T.weekStartsOn)!==null&&m!==void 0?m:0);if(!(R>=0&&R<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!_.localize)throw new RangeError("locale must contain localize property");if(!_.formatLong)throw new RangeError("locale must contain formatLong property");var O=lr(t);if(!JN(O))throw new RangeError("Invalid time value");var x=ZN(O),S=e9(O,x),A={firstWeekContainsDate:w,weekStartsOn:R,locale:_,_originalDate:O},b=y.match(Q9).map(function(j){var D=j[0];if(D==="p"||D==="P"){var P=d9[D];return P(j,_.formatLong)}return j}).join("").match(K9).map(function(j){if(j==="''")return"'";var D=j[0];if(D==="'")return t7(j);var P=u9[D];if(P)return m9(j)&&A_(j,e,String(t)),p9(j)&&A_(j,e,String(t)),P(S,j,_.localize,A);if(D.match(J9))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return j}).join("");return b}function t7(t){var e=t.match(Z9);return e?e[1].replace(X9,"'"):t}var dg={exports:{}},XI={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(XI);var ze=XI.exports,hg={exports:{}},fg={exports:{}},JI={exports:{}};(function(t){function e(n){"@babel/helpers - typeof";return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(JI);var eS=JI.exports,pg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(i.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+i.length+" present")}t.exports=e.default})(pg,pg.exports);var Bt=pg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(eS),i=n(Bt);function o(s){return(0,i.default)(1,arguments),s instanceof Date||(0,r.default)(s)==="object"&&Object.prototype.toString.call(s)==="[object Date]"}t.exports=e.default})(fg,fg.exports);var n7=fg.exports,mg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(eS),i=n(Bt);function o(s){(0,i.default)(1,arguments);var a=Object.prototype.toString.call(s);return s instanceof Date||(0,r.default)(s)==="object"&&a==="[object Date]"?new Date(s.getTime()):typeof s=="number"||a==="[object Number]"?new Date(s):((typeof s=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}t.exports=e.default})(mg,mg.exports);var ur=mg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(n7),i=n(ur),o=n(Bt);function s(a){if((0,o.default)(1,arguments),!(0,r.default)(a)&&typeof a!="number")return!1;var u=(0,i.default)(a);return!isNaN(Number(u))}t.exports=e.default})(hg,hg.exports);var r7=hg.exports,gg={exports:{}},yg={exports:{}},vg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){if(r===null||r===!0||r===!1)return NaN;var i=Number(r);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}t.exports=e.default})(vg,vg.exports);var es=vg.exports;const i7=lu(es);(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(es),i=n(ur),o=n(Bt);function s(a,u){(0,o.default)(2,arguments);var d=(0,i.default)(a).getTime(),f=(0,r.default)(u);return new Date(d+f)}t.exports=e.default})(yg,yg.exports);var o7=yg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(o7),i=n(Bt),o=n(es);function s(a,u){(0,i.default)(2,arguments);var d=(0,o.default)(u);return(0,r.default)(a,-d)}t.exports=e.default})(gg,gg.exports);var s7=gg.exports,kg={exports:{}},_g={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(ur),i=n(Bt),o=864e5;function s(a){(0,i.default)(1,arguments);var u=(0,r.default)(a),d=u.getTime();u.setUTCMonth(0,1),u.setUTCHours(0,0,0,0);var f=u.getTime(),m=d-f;return Math.floor(m/o)+1}t.exports=e.default})(_g,_g.exports);var a7=_g.exports,Eg={exports:{}},wg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(ur),i=n(Bt);function o(s){(0,i.default)(1,arguments);var a=1,u=(0,r.default)(s),d=u.getUTCDay(),f=(d<a?7:0)+d-a;return u.setUTCDate(u.getUTCDate()-f),u.setUTCHours(0,0,0,0),u}t.exports=e.default})(wg,wg.exports);var oy=wg.exports,xg={exports:{}},Tg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(ur),i=n(Bt),o=n(oy);function s(a){(0,i.default)(1,arguments);var u=(0,r.default)(a),d=u.getUTCFullYear(),f=new Date(0);f.setUTCFullYear(d+1,0,4),f.setUTCHours(0,0,0,0);var m=(0,o.default)(f),E=new Date(0);E.setUTCFullYear(d,0,4),E.setUTCHours(0,0,0,0);var k=(0,o.default)(E);return u.getTime()>=m.getTime()?d+1:u.getTime()>=k.getTime()?d:d-1}t.exports=e.default})(Tg,Tg.exports);var tS=Tg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(tS),i=n(oy),o=n(Bt);function s(a){(0,o.default)(1,arguments);var u=(0,r.default)(a),d=new Date(0);d.setUTCFullYear(u,0,4),d.setUTCHours(0,0,0,0);var f=(0,i.default)(d);return f}t.exports=e.default})(xg,xg.exports);var l7=xg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(ur),i=n(oy),o=n(l7),s=n(Bt),a=6048e5;function u(d){(0,s.default)(1,arguments);var f=(0,r.default)(d),m=(0,i.default)(f).getTime()-(0,o.default)(f).getTime();return Math.round(m/a)+1}t.exports=e.default})(Eg,Eg.exports);var u7=Eg.exports,Ig={exports:{}},Sg={exports:{}},ts={};Object.defineProperty(ts,"__esModule",{value:!0});ts.getDefaultOptions=c7;ts.setDefaultOptions=d7;var nS={};function c7(){return nS}function d7(t){nS=t}(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=n(ur),i=n(Bt),o=n(es),s=ts;function a(u,d){var f,m,E,k,I,L,T,y;(0,i.default)(1,arguments);var g=(0,s.getDefaultOptions)(),_=(0,o.default)((f=(m=(E=(k=d==null?void 0:d.weekStartsOn)!==null&&k!==void 0?k:d==null||(I=d.locale)===null||I===void 0||(L=I.options)===null||L===void 0?void 0:L.weekStartsOn)!==null&&E!==void 0?E:g.weekStartsOn)!==null&&m!==void 0?m:(T=g.locale)===null||T===void 0||(y=T.options)===null||y===void 0?void 0:y.weekStartsOn)!==null&&f!==void 0?f:0);if(!(_>=0&&_<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=(0,r.default)(u),R=w.getUTCDay(),O=(R<_?7:0)+R-_;return w.setUTCDate(w.getUTCDate()-O),w.setUTCHours(0,0,0,0),w}t.exports=e.default})(Sg,Sg.exports);var sy=Sg.exports,Cg={exports:{}},Lg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(ur),i=n(Bt),o=n(sy),s=n(es),a=ts;function u(d,f){var m,E,k,I,L,T,y,g;(0,i.default)(1,arguments);var _=(0,r.default)(d),w=_.getUTCFullYear(),R=(0,a.getDefaultOptions)(),O=(0,s.default)((m=(E=(k=(I=f==null?void 0:f.firstWeekContainsDate)!==null&&I!==void 0?I:f==null||(L=f.locale)===null||L===void 0||(T=L.options)===null||T===void 0?void 0:T.firstWeekContainsDate)!==null&&k!==void 0?k:R.firstWeekContainsDate)!==null&&E!==void 0?E:(y=R.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1);if(!(O>=1&&O<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=new Date(0);x.setUTCFullYear(w+1,0,O),x.setUTCHours(0,0,0,0);var S=(0,o.default)(x,f),A=new Date(0);A.setUTCFullYear(w,0,O),A.setUTCHours(0,0,0,0);var b=(0,o.default)(A,f);return _.getTime()>=S.getTime()?w+1:_.getTime()>=b.getTime()?w:w-1}t.exports=e.default})(Lg,Lg.exports);var rS=Lg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(rS),i=n(Bt),o=n(sy),s=n(es),a=ts;function u(d,f){var m,E,k,I,L,T,y,g;(0,i.default)(1,arguments);var _=(0,a.getDefaultOptions)(),w=(0,s.default)((m=(E=(k=(I=f==null?void 0:f.firstWeekContainsDate)!==null&&I!==void 0?I:f==null||(L=f.locale)===null||L===void 0||(T=L.options)===null||T===void 0?void 0:T.firstWeekContainsDate)!==null&&k!==void 0?k:_.firstWeekContainsDate)!==null&&E!==void 0?E:(y=_.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1),R=(0,r.default)(d,f),O=new Date(0);O.setUTCFullYear(R,0,w),O.setUTCHours(0,0,0,0);var x=(0,o.default)(O,f);return x}t.exports=e.default})(Cg,Cg.exports);var h7=Cg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(ur),i=n(sy),o=n(h7),s=n(Bt),a=6048e5;function u(d,f){(0,s.default)(1,arguments);var m=(0,r.default)(d),E=(0,i.default)(m,f).getTime()-(0,o.default)(m,f).getTime();return Math.round(E/a)+1}t.exports=e.default})(Ig,Ig.exports);var f7=Ig.exports,Ag={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){for(var o=r<0?"-":"",s=Math.abs(r).toString();s.length<i;)s="0"+s;return o+s}t.exports=e.default})(Ag,Ag.exports);var iS=Ag.exports,Pg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(iS),i={y:function(a,u){var d=a.getUTCFullYear(),f=d>0?d:1-d;return(0,r.default)(u==="yy"?f%100:f,u.length)},M:function(a,u){var d=a.getUTCMonth();return u==="M"?String(d+1):(0,r.default)(d+1,2)},d:function(a,u){return(0,r.default)(a.getUTCDate(),u.length)},a:function(a,u){var d=a.getUTCHours()/12>=1?"pm":"am";switch(u){case"a":case"aa":return d.toUpperCase();case"aaa":return d;case"aaaaa":return d[0];case"aaaa":default:return d==="am"?"a.m.":"p.m."}},h:function(a,u){return(0,r.default)(a.getUTCHours()%12||12,u.length)},H:function(a,u){return(0,r.default)(a.getUTCHours(),u.length)},m:function(a,u){return(0,r.default)(a.getUTCMinutes(),u.length)},s:function(a,u){return(0,r.default)(a.getUTCSeconds(),u.length)},S:function(a,u){var d=u.length,f=a.getUTCMilliseconds(),m=Math.floor(f*Math.pow(10,d-3));return(0,r.default)(m,u.length)}},o=i;e.default=o,t.exports=e.default})(Pg,Pg.exports);var p7=Pg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a7),i=n(u7),o=n(tS),s=n(f7),a=n(rS),u=n(iS),d=n(p7),f={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},m={G:function(y,g,_){var w=y.getUTCFullYear()>0?1:0;switch(g){case"G":case"GG":case"GGG":return _.era(w,{width:"abbreviated"});case"GGGGG":return _.era(w,{width:"narrow"});case"GGGG":default:return _.era(w,{width:"wide"})}},y:function(y,g,_){if(g==="yo"){var w=y.getUTCFullYear(),R=w>0?w:1-w;return _.ordinalNumber(R,{unit:"year"})}return d.default.y(y,g)},Y:function(y,g,_,w){var R=(0,a.default)(y,w),O=R>0?R:1-R;if(g==="YY"){var x=O%100;return(0,u.default)(x,2)}return g==="Yo"?_.ordinalNumber(O,{unit:"year"}):(0,u.default)(O,g.length)},R:function(y,g){var _=(0,o.default)(y);return(0,u.default)(_,g.length)},u:function(y,g){var _=y.getUTCFullYear();return(0,u.default)(_,g.length)},Q:function(y,g,_){var w=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"Q":return String(w);case"QQ":return(0,u.default)(w,2);case"Qo":return _.ordinalNumber(w,{unit:"quarter"});case"QQQ":return _.quarter(w,{width:"abbreviated",context:"formatting"});case"QQQQQ":return _.quarter(w,{width:"narrow",context:"formatting"});case"QQQQ":default:return _.quarter(w,{width:"wide",context:"formatting"})}},q:function(y,g,_){var w=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"q":return String(w);case"qq":return(0,u.default)(w,2);case"qo":return _.ordinalNumber(w,{unit:"quarter"});case"qqq":return _.quarter(w,{width:"abbreviated",context:"standalone"});case"qqqqq":return _.quarter(w,{width:"narrow",context:"standalone"});case"qqqq":default:return _.quarter(w,{width:"wide",context:"standalone"})}},M:function(y,g,_){var w=y.getUTCMonth();switch(g){case"M":case"MM":return d.default.M(y,g);case"Mo":return _.ordinalNumber(w+1,{unit:"month"});case"MMM":return _.month(w,{width:"abbreviated",context:"formatting"});case"MMMMM":return _.month(w,{width:"narrow",context:"formatting"});case"MMMM":default:return _.month(w,{width:"wide",context:"formatting"})}},L:function(y,g,_){var w=y.getUTCMonth();switch(g){case"L":return String(w+1);case"LL":return(0,u.default)(w+1,2);case"Lo":return _.ordinalNumber(w+1,{unit:"month"});case"LLL":return _.month(w,{width:"abbreviated",context:"standalone"});case"LLLLL":return _.month(w,{width:"narrow",context:"standalone"});case"LLLL":default:return _.month(w,{width:"wide",context:"standalone"})}},w:function(y,g,_,w){var R=(0,s.default)(y,w);return g==="wo"?_.ordinalNumber(R,{unit:"week"}):(0,u.default)(R,g.length)},I:function(y,g,_){var w=(0,i.default)(y);return g==="Io"?_.ordinalNumber(w,{unit:"week"}):(0,u.default)(w,g.length)},d:function(y,g,_){return g==="do"?_.ordinalNumber(y.getUTCDate(),{unit:"date"}):d.default.d(y,g)},D:function(y,g,_){var w=(0,r.default)(y);return g==="Do"?_.ordinalNumber(w,{unit:"dayOfYear"}):(0,u.default)(w,g.length)},E:function(y,g,_){var w=y.getUTCDay();switch(g){case"E":case"EE":case"EEE":return _.day(w,{width:"abbreviated",context:"formatting"});case"EEEEE":return _.day(w,{width:"narrow",context:"formatting"});case"EEEEEE":return _.day(w,{width:"short",context:"formatting"});case"EEEE":default:return _.day(w,{width:"wide",context:"formatting"})}},e:function(y,g,_,w){var R=y.getUTCDay(),O=(R-w.weekStartsOn+8)%7||7;switch(g){case"e":return String(O);case"ee":return(0,u.default)(O,2);case"eo":return _.ordinalNumber(O,{unit:"day"});case"eee":return _.day(R,{width:"abbreviated",context:"formatting"});case"eeeee":return _.day(R,{width:"narrow",context:"formatting"});case"eeeeee":return _.day(R,{width:"short",context:"formatting"});case"eeee":default:return _.day(R,{width:"wide",context:"formatting"})}},c:function(y,g,_,w){var R=y.getUTCDay(),O=(R-w.weekStartsOn+8)%7||7;switch(g){case"c":return String(O);case"cc":return(0,u.default)(O,g.length);case"co":return _.ordinalNumber(O,{unit:"day"});case"ccc":return _.day(R,{width:"abbreviated",context:"standalone"});case"ccccc":return _.day(R,{width:"narrow",context:"standalone"});case"cccccc":return _.day(R,{width:"short",context:"standalone"});case"cccc":default:return _.day(R,{width:"wide",context:"standalone"})}},i:function(y,g,_){var w=y.getUTCDay(),R=w===0?7:w;switch(g){case"i":return String(R);case"ii":return(0,u.default)(R,g.length);case"io":return _.ordinalNumber(R,{unit:"day"});case"iii":return _.day(w,{width:"abbreviated",context:"formatting"});case"iiiii":return _.day(w,{width:"narrow",context:"formatting"});case"iiiiii":return _.day(w,{width:"short",context:"formatting"});case"iiii":default:return _.day(w,{width:"wide",context:"formatting"})}},a:function(y,g,_){var w=y.getUTCHours(),R=w/12>=1?"pm":"am";switch(g){case"a":case"aa":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"aaa":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return _.dayPeriod(R,{width:"narrow",context:"formatting"});case"aaaa":default:return _.dayPeriod(R,{width:"wide",context:"formatting"})}},b:function(y,g,_){var w=y.getUTCHours(),R;switch(w===12?R=f.noon:w===0?R=f.midnight:R=w/12>=1?"pm":"am",g){case"b":case"bb":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"bbb":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return _.dayPeriod(R,{width:"narrow",context:"formatting"});case"bbbb":default:return _.dayPeriod(R,{width:"wide",context:"formatting"})}},B:function(y,g,_){var w=y.getUTCHours(),R;switch(w>=17?R=f.evening:w>=12?R=f.afternoon:w>=4?R=f.morning:R=f.night,g){case"B":case"BB":case"BBB":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"BBBBB":return _.dayPeriod(R,{width:"narrow",context:"formatting"});case"BBBB":default:return _.dayPeriod(R,{width:"wide",context:"formatting"})}},h:function(y,g,_){if(g==="ho"){var w=y.getUTCHours()%12;return w===0&&(w=12),_.ordinalNumber(w,{unit:"hour"})}return d.default.h(y,g)},H:function(y,g,_){return g==="Ho"?_.ordinalNumber(y.getUTCHours(),{unit:"hour"}):d.default.H(y,g)},K:function(y,g,_){var w=y.getUTCHours()%12;return g==="Ko"?_.ordinalNumber(w,{unit:"hour"}):(0,u.default)(w,g.length)},k:function(y,g,_){var w=y.getUTCHours();return w===0&&(w=24),g==="ko"?_.ordinalNumber(w,{unit:"hour"}):(0,u.default)(w,g.length)},m:function(y,g,_){return g==="mo"?_.ordinalNumber(y.getUTCMinutes(),{unit:"minute"}):d.default.m(y,g)},s:function(y,g,_){return g==="so"?_.ordinalNumber(y.getUTCSeconds(),{unit:"second"}):d.default.s(y,g)},S:function(y,g){return d.default.S(y,g)},X:function(y,g,_,w){var R=w._originalDate||y,O=R.getTimezoneOffset();if(O===0)return"Z";switch(g){case"X":return k(O);case"XXXX":case"XX":return I(O);case"XXXXX":case"XXX":default:return I(O,":")}},x:function(y,g,_,w){var R=w._originalDate||y,O=R.getTimezoneOffset();switch(g){case"x":return k(O);case"xxxx":case"xx":return I(O);case"xxxxx":case"xxx":default:return I(O,":")}},O:function(y,g,_,w){var R=w._originalDate||y,O=R.getTimezoneOffset();switch(g){case"O":case"OO":case"OOO":return"GMT"+E(O,":");case"OOOO":default:return"GMT"+I(O,":")}},z:function(y,g,_,w){var R=w._originalDate||y,O=R.getTimezoneOffset();switch(g){case"z":case"zz":case"zzz":return"GMT"+E(O,":");case"zzzz":default:return"GMT"+I(O,":")}},t:function(y,g,_,w){var R=w._originalDate||y,O=Math.floor(R.getTime()/1e3);return(0,u.default)(O,g.length)},T:function(y,g,_,w){var R=w._originalDate||y,O=R.getTime();return(0,u.default)(O,g.length)}};function E(T,y){var g=T>0?"-":"+",_=Math.abs(T),w=Math.floor(_/60),R=_%60;if(R===0)return g+String(w);var O=y;return g+String(w)+O+(0,u.default)(R,2)}function k(T,y){if(T%60===0){var g=T>0?"-":"+";return g+(0,u.default)(Math.abs(T)/60,2)}return I(T,y)}function I(T,y){var g=y||"",_=T>0?"-":"+",w=Math.abs(T),R=(0,u.default)(Math.floor(w/60),2),O=(0,u.default)(w%60,2);return _+R+g+O}var L=m;e.default=L,t.exports=e.default})(kg,kg.exports);var m7=kg.exports,Rg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(u,d){switch(u){case"P":return d.date({width:"short"});case"PP":return d.date({width:"medium"});case"PPP":return d.date({width:"long"});case"PPPP":default:return d.date({width:"full"})}},r=function(u,d){switch(u){case"p":return d.time({width:"short"});case"pp":return d.time({width:"medium"});case"ppp":return d.time({width:"long"});case"pppp":default:return d.time({width:"full"})}},i=function(u,d){var f=u.match(/(P+)(p+)?/)||[],m=f[1],E=f[2];if(!E)return n(u,d);var k;switch(m){case"P":k=d.dateTime({width:"short"});break;case"PP":k=d.dateTime({width:"medium"});break;case"PPP":k=d.dateTime({width:"long"});break;case"PPPP":default:k=d.dateTime({width:"full"});break}return k.replace("{{date}}",n(m,d)).replace("{{time}}",r(E,d))},o={p:r,P:i},s=o;e.default=s,t.exports=e.default})(Rg,Rg.exports);var g7=Rg.exports,bg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){var i=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return i.setUTCFullYear(r.getFullYear()),r.getTime()-i.getTime()}t.exports=e.default})(bg,bg.exports);var oS=bg.exports;const P_=lu(oS);var Lu={};Object.defineProperty(Lu,"__esModule",{value:!0});Lu.isProtectedDayOfYearToken=k7;Lu.isProtectedWeekYearToken=_7;Lu.throwProtectedError=E7;var y7=["D","DD"],v7=["YY","YYYY"];function k7(t){return y7.indexOf(t)!==-1}function _7(t){return v7.indexOf(t)!==-1}function E7(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var jg={exports:{}},Dg={exports:{}},Og={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(s,a,u){var d,f=n[s];return typeof f=="string"?d=f:a===1?d=f.one:d=f.other.replace("{{count}}",a.toString()),u!=null&&u.addSuffix?u.comparison&&u.comparison>0?"in "+d:d+" ago":d},i=r;e.default=i,t.exports=e.default})(Og,Og.exports);var w7=Og.exports,Mg={exports:{}},Ng={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.width?String(i.width):r.defaultWidth,s=r.formats[o]||r.formats[r.defaultWidth];return s}}t.exports=e.default})(Ng,Ng.exports);var x7=Ng.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(x7),i={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},s={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},a={date:(0,r.default)({formats:i,defaultWidth:"full"}),time:(0,r.default)({formats:o,defaultWidth:"full"}),dateTime:(0,r.default)({formats:s,defaultWidth:"full"})},u=a;e.default=u,t.exports=e.default})(Mg,Mg.exports);var T7=Mg.exports,Vg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},r=function(s,a,u,d){return n[s]},i=r;e.default=i,t.exports=e.default})(Vg,Vg.exports);var I7=Vg.exports,Fg={exports:{}},Wg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i,o){var s=o!=null&&o.context?String(o.context):"standalone",a;if(s==="formatting"&&r.formattingValues){var u=r.defaultFormattingWidth||r.defaultWidth,d=o!=null&&o.width?String(o.width):u;a=r.formattingValues[d]||r.formattingValues[u]}else{var f=r.defaultWidth,m=o!=null&&o.width?String(o.width):r.defaultWidth;a=r.values[m]||r.values[f]}var E=r.argumentCallback?r.argumentCallback(i):i;return a[E]}}t.exports=e.default})(Wg,Wg.exports);var S7=Wg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(S7),i={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},s={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},a={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},u={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},d={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},f=function(I,L){var T=Number(I),y=T%100;if(y>20||y<10)switch(y%10){case 1:return T+"st";case 2:return T+"nd";case 3:return T+"rd"}return T+"th"},m={ordinalNumber:f,era:(0,r.default)({values:i,defaultWidth:"wide"}),quarter:(0,r.default)({values:o,defaultWidth:"wide",argumentCallback:function(I){return I-1}}),month:(0,r.default)({values:s,defaultWidth:"wide"}),day:(0,r.default)({values:a,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:u,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"})},E=m;e.default=E,t.exports=e.default})(Fg,Fg.exports);var C7=Fg.exports,Ug={exports:{}},$g={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(o){return function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=a.width,d=u&&o.matchPatterns[u]||o.matchPatterns[o.defaultMatchWidth],f=s.match(d);if(!f)return null;var m=f[0],E=u&&o.parsePatterns[u]||o.parsePatterns[o.defaultParseWidth],k=Array.isArray(E)?i(E,function(T){return T.test(m)}):r(E,function(T){return T.test(m)}),I;I=o.valueCallback?o.valueCallback(k):k,I=a.valueCallback?a.valueCallback(I):I;var L=s.slice(m.length);return{value:I,rest:L}}}function r(o,s){for(var a in o)if(o.hasOwnProperty(a)&&s(o[a]))return a}function i(o,s){for(var a=0;a<o.length;a++)if(s(o[a]))return a}t.exports=e.default})($g,$g.exports);var L7=$g.exports,zg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.match(r.matchPattern);if(!s)return null;var a=s[0],u=i.match(r.parsePattern);if(!u)return null;var d=r.valueCallback?r.valueCallback(u[0]):u[0];d=o.valueCallback?o.valueCallback(d):d;var f=i.slice(a.length);return{value:d,rest:f}}}t.exports=e.default})(zg,zg.exports);var A7=zg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(L7),i=n(A7),o=/^(\d+)(th|st|nd|rd)?/i,s=/\d+/i,a={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},u={any:[/^b/i,/^(a|c)/i]},d={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},f={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},E={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},k={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},I={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},L={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},T={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},y={ordinalNumber:(0,i.default)({matchPattern:o,parsePattern:s,valueCallback:function(w){return parseInt(w,10)}}),era:(0,r.default)({matchPatterns:a,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(w){return w+1}}),month:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:k,defaultMatchWidth:"wide",parsePatterns:I,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:L,defaultMatchWidth:"any",parsePatterns:T,defaultParseWidth:"any"})},g=y;e.default=g,t.exports=e.default})(Ug,Ug.exports);var P7=Ug.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(w7),i=n(T7),o=n(I7),s=n(C7),a=n(P7),u={code:"en-US",formatDistance:r.default,formatLong:i.default,formatRelative:o.default,localize:s.default,match:a.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},d=u;e.default=d,t.exports=e.default})(Dg,Dg.exports);var R7=Dg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(R7),i=r.default;e.default=i,t.exports=e.default})(jg,jg.exports);var b7=jg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=_;var r=n(r7),i=n(s7),o=n(ur),s=n(m7),a=n(g7),u=n(oS),d=Lu,f=n(es),m=n(Bt),E=ts,k=n(b7),I=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,L=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,T=/^'([^]*?)'?$/,y=/''/g,g=/[a-zA-Z]/;function _(R,O,x){var S,A,b,j,D,P,q,re,ue,ce,z,G,X,le,ee,ye,Ye,Ge;(0,m.default)(2,arguments);var rt=String(O),Be=(0,E.getDefaultOptions)(),Dt=(S=(A=x==null?void 0:x.locale)!==null&&A!==void 0?A:Be.locale)!==null&&S!==void 0?S:k.default,Ot=(0,f.default)((b=(j=(D=(P=x==null?void 0:x.firstWeekContainsDate)!==null&&P!==void 0?P:x==null||(q=x.locale)===null||q===void 0||(re=q.options)===null||re===void 0?void 0:re.firstWeekContainsDate)!==null&&D!==void 0?D:Be.firstWeekContainsDate)!==null&&j!==void 0?j:(ue=Be.locale)===null||ue===void 0||(ce=ue.options)===null||ce===void 0?void 0:ce.firstWeekContainsDate)!==null&&b!==void 0?b:1);if(!(Ot>=1&&Ot<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Ht=(0,f.default)((z=(G=(X=(le=x==null?void 0:x.weekStartsOn)!==null&&le!==void 0?le:x==null||(ee=x.locale)===null||ee===void 0||(ye=ee.options)===null||ye===void 0?void 0:ye.weekStartsOn)!==null&&X!==void 0?X:Be.weekStartsOn)!==null&&G!==void 0?G:(Ye=Be.locale)===null||Ye===void 0||(Ge=Ye.options)===null||Ge===void 0?void 0:Ge.weekStartsOn)!==null&&z!==void 0?z:0);if(!(Ht>=0&&Ht<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!Dt.localize)throw new RangeError("locale must contain localize property");if(!Dt.formatLong)throw new RangeError("locale must contain formatLong property");var dt=(0,o.default)(R);if(!(0,r.default)(dt))throw new RangeError("Invalid time value");var N=(0,u.default)(dt),de=(0,i.default)(dt,N),fe={firstWeekContainsDate:Ot,weekStartsOn:Ht,locale:Dt,_originalDate:dt},pe=rt.match(L).map(function(se){var Ae=se[0];if(Ae==="p"||Ae==="P"){var cr=a.default[Ae];return cr(se,Dt.formatLong)}return se}).join("").match(I).map(function(se){if(se==="''")return"'";var Ae=se[0];if(Ae==="'")return w(se);var cr=s.default[Ae];if(cr)return!(x!=null&&x.useAdditionalWeekYearTokens)&&(0,d.isProtectedWeekYearToken)(se)&&(0,d.throwProtectedError)(se,O,String(R)),!(x!=null&&x.useAdditionalDayOfYearTokens)&&(0,d.isProtectedDayOfYearToken)(se)&&(0,d.throwProtectedError)(se,O,String(R)),cr(de,se,Dt.localize,fe);if(Ae.match(g))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Ae+"`");return se}).join("");return pe}function w(R){var O=R.match(T);return O?O[1].replace(y,"'"):R}t.exports=e.default})(dg,dg.exports);var j7=dg.exports;const D7=lu(j7);function R_(t,e,n){var r=N7(t,n.timeZone,n.locale);return r.formatToParts?O7(r,e):M7(r,e)}function O7(t,e){for(var n=t.formatToParts(e),r=n.length-1;r>=0;--r)if(n[r].type==="timeZoneName")return n[r].value}function M7(t,e){var n=t.format(e).replace(/\u200E/g,""),r=/ [\w-+ ]+$/.exec(n);return r?r[0].substr(1):""}function N7(t,e,n){if(n&&!n.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(n?[n.code,"en-US"]:void 0,{timeZone:e,timeZoneName:t})}function V7(t,e){var n=$7(e);return n.formatToParts?W7(n,t):U7(n,t)}var F7={year:0,month:1,day:2,hour:3,minute:4,second:5};function W7(t,e){try{for(var n=t.formatToParts(e),r=[],i=0;i<n.length;i++){var o=F7[n[i].type];o>=0&&(r[o]=parseInt(n[i].value,10))}return r}catch(s){if(s instanceof RangeError)return[NaN];throw s}}function U7(t,e){var n=t.format(e),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var Ip={};function $7(t){if(!Ip[t]){var e=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n=e==="06/25/2014, 00:00:00"||e==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";Ip[t]=n?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return Ip[t]}function ay(t,e,n,r,i,o,s){var a=new Date(0);return a.setUTCFullYear(t,e,n),a.setUTCHours(r,i,o,s),a}var b_=36e5,z7=6e4,Sp={timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function af(t,e,n){var r,i;if(!t||(r=Sp.timezoneZ.exec(t),r))return 0;var o;if(r=Sp.timezoneHH.exec(t),r)return o=parseInt(r[1],10),j_(o)?-(o*b_):NaN;if(r=Sp.timezoneHHMM.exec(t),r){o=parseInt(r[2],10);var s=parseInt(r[3],10);return j_(o,s)?(i=Math.abs(o)*b_+s*z7,r[1]==="+"?-i:i):NaN}if(q7(t)){e=new Date(e||Date.now());var a=n?e:B7(e),u=Bg(a,t),d=n?u:H7(e,u,t);return-d}return NaN}function B7(t){return ay(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function Bg(t,e){var n=V7(t,e),r=ay(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime(),i=t.getTime(),o=i%1e3;return i-=o>=0?o:1e3+o,r-i}function H7(t,e,n){var r=t.getTime(),i=r-e,o=Bg(new Date(i),n);if(e===o)return e;i-=o-e;var s=Bg(new Date(i),n);return o===s?o:Math.max(o,s)}function j_(t,e){return-23<=t&&t<=23&&(e==null||0<=e&&e<=59)}var D_={};function q7(t){if(D_[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),D_[t]=!0,!0}catch{return!1}}var Y7=60*1e3,G7={X:function(t,e,n,r){var i=Cp(r.timeZone,t);if(i===0)return"Z";switch(e){case"X":return O_(i);case"XXXX":case"XX":return ks(i);case"XXXXX":case"XXX":default:return ks(i,":")}},x:function(t,e,n,r){var i=Cp(r.timeZone,t);switch(e){case"x":return O_(i);case"xxxx":case"xx":return ks(i);case"xxxxx":case"xxx":default:return ks(i,":")}},O:function(t,e,n,r){var i=Cp(r.timeZone,t);switch(e){case"O":case"OO":case"OOO":return"GMT"+K7(i,":");case"OOOO":default:return"GMT"+ks(i,":")}},z:function(t,e,n,r){switch(e){case"z":case"zz":case"zzz":return R_("short",t,r);case"zzzz":default:return R_("long",t,r)}}};function Cp(t,e){var n=t?af(t,e,!0)/Y7:e.getTimezoneOffset();if(Number.isNaN(n))throw new RangeError("Invalid time zone specified: "+t);return n}function ih(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}function ks(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=ih(Math.floor(i/60),2),s=ih(Math.floor(i%60),2);return r+o+n+s}function O_(t,e){if(t%60===0){var n=t>0?"-":"+";return n+ih(Math.abs(t)/60,2)}return ks(t,e)}function K7(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+ih(o,2)}var sS=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,Lp=36e5,M_=6e4,Q7=2,Ft={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:sS};function oh(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);var n=e||{},r=n.additionalDigits==null?Q7:i7(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var i=Z7(t),o=X7(i.date,r),s=o.year,a=o.restDateString,u=J7(a,s);if(isNaN(u))return new Date(NaN);if(u){var d=u.getTime(),f=0,m;if(i.time&&(f=eV(i.time),isNaN(f)))return new Date(NaN);if(i.timeZone||n.timeZone){if(m=af(i.timeZone||n.timeZone,new Date(d+f)),isNaN(m))return new Date(NaN)}else m=P_(new Date(d+f)),m=P_(new Date(d+f+m));return new Date(d+f+m)}else return new Date(NaN)}function Z7(t){var e={},n=Ft.dateTimePattern.exec(t),r;if(n?(e.date=n[1],r=n[3]):(n=Ft.datePattern.exec(t),n?(e.date=n[1],r=n[2]):(e.date=null,r=t)),r){var i=Ft.timeZone.exec(r);i?(e.time=r.replace(i[1],""),e.timeZone=i[1].trim()):e.time=r}return e}function X7(t,e){var n=Ft.YYY[e],r=Ft.YYYYY[e],i;if(i=Ft.YYYY.exec(t)||r.exec(t),i){var o=i[1];return{year:parseInt(o,10),restDateString:t.slice(o.length)}}if(i=Ft.YY.exec(t)||n.exec(t),i){var s=i[1];return{year:parseInt(s,10)*100,restDateString:t.slice(s.length)}}return{year:null}}function J7(t,e){if(e===null)return null;var n,r,i,o;if(t.length===0)return r=new Date(0),r.setUTCFullYear(e),r;if(n=Ft.MM.exec(t),n)return r=new Date(0),i=parseInt(n[1],10)-1,V_(e,i)?(r.setUTCFullYear(e,i),r):new Date(NaN);if(n=Ft.DDD.exec(t),n){r=new Date(0);var s=parseInt(n[1],10);return rV(e,s)?(r.setUTCFullYear(e,0,s),r):new Date(NaN)}if(n=Ft.MMDD.exec(t),n){r=new Date(0),i=parseInt(n[1],10)-1;var a=parseInt(n[2],10);return V_(e,i,a)?(r.setUTCFullYear(e,i,a),r):new Date(NaN)}if(n=Ft.Www.exec(t),n)return o=parseInt(n[1],10)-1,F_(e,o)?N_(e,o):new Date(NaN);if(n=Ft.WwwD.exec(t),n){o=parseInt(n[1],10)-1;var u=parseInt(n[2],10)-1;return F_(e,o,u)?N_(e,o,u):new Date(NaN)}return null}function eV(t){var e,n,r;if(e=Ft.HH.exec(t),e)return n=parseFloat(e[1].replace(",",".")),Ap(n)?n%24*Lp:NaN;if(e=Ft.HHMM.exec(t),e)return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),Ap(n,r)?n%24*Lp+r*M_:NaN;if(e=Ft.HHMMSS.exec(t),e){n=parseInt(e[1],10),r=parseInt(e[2],10);var i=parseFloat(e[3].replace(",","."));return Ap(n,r,i)?n%24*Lp+r*M_+i*1e3:NaN}return null}function N_(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var i=r.getUTCDay()||7,o=e*7+n+1-i;return r.setUTCDate(r.getUTCDate()+o),r}var tV=[31,28,31,30,31,30,31,31,30,31,30,31],nV=[31,29,31,30,31,30,31,31,30,31,30,31];function aS(t){return t%400===0||t%4===0&&t%100!==0}function V_(t,e,n){if(e<0||e>11)return!1;if(n!=null){if(n<1)return!1;var r=aS(t);if(r&&n>nV[e]||!r&&n>tV[e])return!1}return!0}function rV(t,e){if(e<1)return!1;var n=aS(t);return!(n&&e>366||!n&&e>365)}function F_(t,e,n){return!(e<0||e>52||n!=null&&(n<0||n>6))}function Ap(t,e,n){return!(t!=null&&(t<0||t>=25)||e!=null&&(e<0||e>=60)||n!=null&&(n<0||n>=60))}var iV=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function oV(t,e,n){var r=String(e),i=n||{},o=r.match(iV);if(o){var s=oh(i.originalDate||t,i);r=o.reduce(function(a,u){if(u[0]==="'")return a;var d=a.indexOf(u),f=a[d-1]==="'",m=a.replace(u,"'"+G7[u[0]](s,u,null,i)+"'");return f?m.substring(0,d-1)+m.substring(d+1):m},r)}return D7(t,r,i)}var Hg={exports:{}},qg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o]);return r}t.exports=e.default})(qg,qg.exports);var sV=qg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(sV);function i(o){return(0,r.default)({},o)}t.exports=e.default})(Hg,Hg.exports);var aV=Hg.exports;const lV=lu(aV);function uV(t,e,n){var r=oh(t,n),i=af(e,r,!0),o=new Date(r.getTime()-i),s=new Date(0);return s.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),s.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),s}function cV(t,e,n){if(typeof t=="string"&&!t.match(sS)){var r=lV(n);return r.timeZone=e,oh(t,r)}var i=oh(t,n),o=ay(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()).getTime(),s=af(e,new Date(o));return new Date(o+s)}const W_=F.table`
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
`,U_=F.div`
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
`,$_=F.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px dashed #ddd;
`,dV=({user:t,userData:e})=>{const[n,r]=M.useState(null),[i,o]=M.useState(!0),[s,a]=M.useState(null),{use24HourFormat:u}=iy(),d=(e==null?void 0:e.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila";M.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{if(o(!0),e&&e.schedule&&Array.isArray(e.schedule)&&e.schedule.length>0)console.log("Using schedule from userData prop:",e.schedule),r(e.schedule);else{const I=ut(we,"users",t.uid),L=await iu(I);if(L.exists()){const T=L.data();if(T.schedule&&Array.isArray(T.schedule)&&T.schedule.length>0)console.log("Found user schedule in Firestore:",T.schedule),r(T.schedule);else if(T.scheduleId){const y=T.scheduleId,g=ut(we,"schedules",y),_=await iu(g);_.exists()&&r(_.data())}else{const y=un(we,"schedules"),g=On(y,Zn("isDefault","==",!0)),_=await En(g);_.empty||r(_.docs[0].data())}}}}catch(I){console.error("Error fetching schedule:",I),a("Failed to load schedule. Please try again later.")}finally{o(!1)}})()},[t,e]);const f=k=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][k],m=(k,I=null,L=d)=>{if(!k)return"N/A";try{if(!I||I===L){const[x,S]=k.split(":"),A=new Date;return A.setHours(parseInt(x,10)),A.setMinutes(parseInt(S,10)),A.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!u})}const[T,y]=k.split(":"),g=new Date;g.setHours(0,0,0,0);const _=new Date(g);_.setHours(parseInt(T,10),parseInt(y,10),0,0);const w=cV(_,I),R=uV(w,L);return oV(R,u?"HH:mm":"h:mm a",{timeZone:L})}catch(T){return console.error("Error formatting time:",T),k}},E=(k,I,L)=>{try{const[T,y]=k.split(":").map(Number),g=new Date;g.setHours(0,0,0,0);const _=new Date(g);_.setHours(T,y,0,0);const w=KN(_,I);return e7(w,"HH:mm")}catch(T){console.error("Error calculating end time:",T);let y=(parseInt(k.split(":")[0],10)+I)%24,g=k.split(":")[1];return`${y.toString().padStart(2,"0")}:${g}`}};return h.jsxs(mi,{children:[h.jsx(gi,{children:"My Schedule"}),h.jsx(yi,{children:i?h.jsx("p",{children:"Loading your schedule..."}):s?h.jsxs($_,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(Kn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]}):n?h.jsx("div",{children:Array.isArray(n)?h.jsxs(h.Fragment,{children:[h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.map((k,I)=>{const L=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(k.dayOfWeek),g=L.getDay()===y,_=k.timeRegion||"Asia/Manila",w=m(k.timeIn,_,d),R=k.shiftDuration||8,O=E(k.timeIn,R),x=m(O,_,d);return h.jsxs(U_,{isToday:g,children:[h.jsxs("h3",{children:[h.jsx(Kn,{weight:"fill",size:20,style:{color:g?"#1a73e8":"#666"}}),k.dayOfWeek]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(Ds,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:w}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(lg,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(Ds,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:x}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"0.75rem",backgroundColor:"#f9f9f9",borderRadius:"8px",fontSize:"0.9rem"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Duration"}),h.jsxs("div",{children:[k.shiftDuration," hours"]})]}),h.jsxs("div",{style:{textAlign:"right"},children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Time Zone"}),h.jsx("div",{style:{fontSize:"0.85rem"},children:d})]})]})]},I)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(W_,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.map((k,I)=>{const L=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(k.dayOfWeek),g=L.getDay()===y,_=k.timeRegion||"Asia/Manila",w=m(k.timeIn,_,d),R=k.shiftDuration||8,O=E(k.timeIn,R),x=m(O,_,d);return h.jsxs("tr",{style:{backgroundColor:g?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:g?"600":"400",color:g?"#1a73e8":"inherit"},children:[k.dayOfWeek,g&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:w}),h.jsx("td",{children:x}),h.jsxs("td",{children:[k.shiftDuration," hours"]})]},I)})})]}),h.jsxs("div",{style:{marginTop:"1rem",fontSize:"0.85rem",color:"#666",textAlign:"right"},children:["All times shown in your local time zone: ",h.jsx("strong",{children:d})]})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{marginBottom:"1.5rem",padding:"1rem",backgroundColor:"#f9f9f9",borderRadius:"8px",borderLeft:"4px solid #4CAF50"},children:[h.jsxs("h3",{style:{margin:"0 0 0.5rem 0",display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Kn,{weight:"fill",size:20,style:{color:"#4CAF50"}}),n.name||"Standard Schedule"]}),h.jsx("p",{style:{margin:0,color:"#666"},children:"Your assigned work schedule"})]}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.shifts&&n.shifts.map((k,I)=>{const T=new Date().getDay()===k.day;return h.jsxs(U_,{isToday:T,children:[h.jsxs("h3",{children:[h.jsx(Kn,{weight:"fill",size:20,style:{color:T?"#1a73e8":"#666"}}),f(k.day)]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(Ds,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(k.timeIn)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(lg,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(Ds,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(k.timeOut)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]})]},I)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(W_,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.shifts&&n.shifts.map((k,I)=>{const T=new Date().getDay()===k.day,y=k.timeIn.split(":").map(Number),g=k.timeOut.split(":").map(Number),_=y[0]+y[1]/60;let R=g[0]+g[1]/60-_;R<0&&(R+=24);const O=Math.round(R*10)/10;return h.jsxs("tr",{style:{backgroundColor:T?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:T?"600":"400",color:T?"#1a73e8":"inherit"},children:[f(k.day),T&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:m(k.timeIn)}),h.jsx("td",{children:m(k.timeOut)}),h.jsxs("td",{children:[O," hours"]})]},I)})})]})]})]})}):h.jsxs($_,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(Kn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]})})]})},hV=F.div`
  margin-bottom: 1.5rem;
`,hs=F.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`,fs=F.strong`
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
`,fV=F.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,ps=F.span`
  color: #333;
  word-break: break-word;
`,pV=({user:t,userData:e,loadingUserData:n})=>h.jsxs(mi,{children:[h.jsx(gi,{children:"User Profile"}),h.jsx(yi,{children:n?h.jsx("p",{children:"Loading user data..."}):h.jsx(h.Fragment,{children:h.jsxs(hV,{children:[h.jsxs(fV,{children:[h.jsx(au,{size:20,weight:"bold"}),"User Information"]}),h.jsxs(hs,{children:[h.jsxs(fs,{children:[h.jsx(of,{size:18}),"Email:"]}),h.jsx(ps,{children:t==null?void 0:t.email})]}),h.jsxs(hs,{children:[h.jsxs(fs,{children:[h.jsx(no,{size:18}),"Name:"]}),h.jsx(ps,{children:t==null?void 0:t.displayName})]}),h.jsxs(hs,{children:[h.jsxs(fs,{children:[h.jsx(J1,{size:18}),"User ID:"]}),h.jsx(ps,{children:t==null?void 0:t.uid})]}),h.jsxs(hs,{children:[h.jsxs(fs,{children:[h.jsx(Z1,{size:18}),"Position:"]}),h.jsx(ps,{children:(e==null?void 0:e.position)||"Not specified"})]}),h.jsxs(hs,{children:[h.jsxs(fs,{children:[h.jsx(au,{size:18}),"Role:"]}),h.jsx(ps,{children:(e==null?void 0:e.role)||"Not specified"})]}),e&&h.jsxs(hs,{children:[h.jsxs(fs,{children:[h.jsx(Kn,{size:18}),"Created At:"]}),h.jsx(ps,{children:(()=>{var r,i;try{return(r=e.createdAt)!=null&&r.seconds?new Date(e.createdAt.seconds*1e3).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):(i=e.createdAt)!=null&&i.toDate?e.createdAt.toDate().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):e.createdAt instanceof Date?e.createdAt.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):typeof e.createdAt=="string"?new Date(e.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):`${new Date().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})} (Current)`}catch(o){return console.error("Error formatting timestamp:",o,e.createdAt),"April 26, 2025, 04:27 AM"}})()})]})]})})})]}),mV=F.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,gV=F.div`
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
`,yV=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,vV=F.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,kV=F.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,_V=F.div`
  margin-bottom: 1.5rem;
`,Pp=F.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`,Rp=F.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`,bp=F.span`
  color: #333;
`,EV=F.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,Au=F.button`
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
`,wV=F(Au)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`,xV=F(Au)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`,TV=F(Au)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`,IV=F.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`,SV=F.div`
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
`,CV=F.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,LV=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,AV=F.h3`
  margin: 0;
  font-size: 1.2rem;
`,PV=F.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,RV=F.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ec=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,wc=F.label`
  font-weight: 500;
  color: #555;
`,jp=F.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,bV=F.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,jV=F.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,DV=F(Au)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`,OV=F(Au)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`,MV=F.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`,NV=t=>{if(!t)return"N/A";try{let e;if(t!=null&&t.seconds)e=new Date(t.seconds*1e3);else if(t!=null&&t.toDate)e=t.toDate();else if(t instanceof Date)e=t;else if(typeof t=="string")e=new Date(t);else return"Invalid date";return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch(e){return console.error("Error formatting timestamp:",e),"Invalid date"}},VV=()=>{const[t,e]=M.useState([]),[n,r]=M.useState(!0),[i,o]=M.useState(null),[s,a]=M.useState({name:"",email:"",position:"",role:""}),[u,d]=M.useState(!1);M.useEffect(()=>{f()},[]);const f=async()=>{try{r(!0);const y=await aN();e(y)}catch(y){console.error("Error fetching registration requests:",y),Y.error("Failed to load registration requests")}finally{r(!1)}},m=async y=>{try{d(!0),await uN(y),Y.success(`Registration for ${y.name||y.email} approved`),f()}catch(g){console.error("Error approving registration:",g),Y.error("Failed to approve registration")}finally{d(!1)}},E=async y=>{try{d(!0),await cN(y),Y.success(`Registration for ${y.name||y.email} declined`),Y.warning("Note: The user may still exist in Firebase Authentication. They will be blocked from accessing the system, but the account still exists."),f()}catch(g){console.error("Error declining registration:",g),Y.error("Failed to decline registration")}finally{d(!1)}},k=y=>{o(y),a({name:y.name||"",email:y.email||"",position:y.position||"",role:y.role||"user"})},I=()=>{o(null)},L=y=>{const{name:g,value:_}=y.target;a(w=>({...w,[g]:_}))},T=async y=>{y.preventDefault();try{d(!0),await lN(i.id,{name:s.name,email:s.email,position:s.position,role:s.role}),Y.success("Registration request updated"),o(null),f()}catch(g){console.error("Error updating registration request:",g),Y.error("Failed to update registration request")}finally{d(!1)}};return n?h.jsxs(mi,{children:[h.jsx(gi,{children:"Registration Requests"}),h.jsx(yi,{children:h.jsx(MV,{children:"Loading registration requests..."})})]}):h.jsxs(mi,{children:[h.jsx(gi,{children:"Registration Requests"}),h.jsxs(yi,{children:[h.jsx(mV,{children:t.length===0?h.jsx(IV,{children:h.jsx("p",{children:"No pending registration requests"})}):t.map(y=>h.jsxs(gV,{children:[h.jsxs(yV,{children:[h.jsxs(vV,{children:[h.jsx(no,{size:18,weight:"bold"}),y.name||y.email]}),h.jsxs(kV,{children:[h.jsx(VI,{size:14}),NV(y.createdAt)]})]}),h.jsxs(_V,{children:[h.jsxs(Pp,{children:[h.jsxs(Rp,{children:[h.jsx(no,{size:16}),"Email:"]}),h.jsx(bp,{children:y.email})]}),h.jsxs(Pp,{children:[h.jsxs(Rp,{children:[h.jsx(Z1,{size:16}),"Position:"]}),h.jsx(bp,{children:y.position||"Not specified"})]}),h.jsxs(Pp,{children:[h.jsxs(Rp,{children:[h.jsx(no,{size:16}),"Role:"]}),h.jsx(bp,{children:y.role||"user"})]})]}),h.jsxs(EV,{children:[h.jsxs(TV,{onClick:()=>k(y),disabled:u,children:[h.jsx($I,{size:16}),"Edit"]}),h.jsxs(wV,{onClick:()=>m(y),disabled:u,children:[h.jsx(Bi,{size:16}),"Accept"]}),h.jsxs(xV,{onClick:()=>E(y),disabled:u,children:[h.jsx(HI,{size:16}),"Decline"]})]})]},y.id))}),i&&h.jsx(SV,{children:h.jsxs(CV,{children:[h.jsxs(LV,{children:[h.jsx(AV,{children:"Edit Registration Request"}),h.jsx(PV,{onClick:I,children:"×"})]}),h.jsxs(RV,{onSubmit:T,children:[h.jsxs(Ec,{children:[h.jsx(wc,{htmlFor:"name",children:"Name"}),h.jsx(jp,{type:"text",id:"name",name:"name",value:s.name,onChange:L,placeholder:"Enter name"})]}),h.jsxs(Ec,{children:[h.jsx(wc,{htmlFor:"email",children:"Email"}),h.jsx(jp,{type:"email",id:"email",name:"email",value:s.email,onChange:L,placeholder:"Enter email",required:!0})]}),h.jsxs(Ec,{children:[h.jsx(wc,{htmlFor:"position",children:"Position"}),h.jsx(jp,{type:"text",id:"position",name:"position",value:s.position,onChange:L,placeholder:"Enter position"})]}),h.jsxs(Ec,{children:[h.jsx(wc,{htmlFor:"role",children:"Role"}),h.jsxs(bV,{id:"role",name:"role",value:s.role,onChange:L,children:[h.jsx("option",{value:"user",children:"User"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),h.jsxs(jV,{children:[h.jsx(OV,{type:"button",onClick:I,children:"Cancel"}),h.jsx(DV,{type:"submit",disabled:u,children:"Save Changes"})]})]})]})})]})]})},FV=F.div`
  padding: 2rem;
`,WV=F.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,UV=F.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,$V=F.thead`
  background-color: #f5f5f5;
`,Dp=F.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,Vi=F.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,zr=F.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,ms=F.button`
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
`,zV=F.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.role){case"admin":return"#800000";case"superadmin":return"#000000";default:return"#555555"}}};
  color: white;
`,BV=F.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.status){case"active":return"#4caf50";case"inactive":return"#f44336";case"pending":return"#ff9800";default:return"#9e9e9e"}}};
  color: white;
`,HV=F.input`
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
`,xc=F.div`
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
`,Tc=F.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Ic=F.h3`
  margin-top: 0;
  color: #333;
`,qV=F.p`
  margin-bottom: 1.5rem;
  color: #666;
`,Sc=F.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,mn=F.button`
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
`,ft=F.div`
  margin-bottom: 1rem;
`,YV=F.div`
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
`,pt=F.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,gn=F.input`
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
`,Cc=F.select`
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
`,GV=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,KV=F.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,QV=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,ZV=F.h4`
  margin: 0;
  color: #333;
`,XV=F.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;F.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;const JV=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,z_=F.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;function eF(){const[t,e]=M.useState([]),[n,r]=M.useState(!0),[i,o]=M.useState(""),[s,a]=M.useState(!1),[u,d]=M.useState(null),[f,m]=M.useState(!1),[E,k]=M.useState(!1),[I,L]=M.useState(!1),[T,y]=M.useState(null),[g,_]=M.useState([]),[w,R]=M.useState({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),[O,x]=M.useState(null),[S,A]=M.useState(!1),[b,j]=M.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member"}),[D,P]=M.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member",status:"active"}),q=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],re=N=>!N||!Array.isArray(N)||N.length===0?0:N.reduce((fe,pe)=>fe+(parseInt(pe.shiftDuration,10)||0),0);M.useEffect(()=>{ue()},[]);const ue=async()=>{try{r(!0);const N=un(we,"users"),fe=(await En(N)).docs.map(pe=>{const se=pe.data();return{id:pe.id,userId:se.userId||pe.id,...se,schedule:se.schedule||[]}});e(fe),r(!1)}catch(N){console.error("Error fetching users:",N),Y.error("Failed to load users"),r(!1)}},ce=N=>{d(N),a(!0)},z=N=>{let de="",fe="",pe="";if(N.name){const se=N.name.trim().split(" ");se.length===1?de=se[0]:se.length===2?(de=se[0],fe=se[1]):se.length>=3&&(de=se[0],se[1].length===2&&se[1].endsWith(".")?(pe=se[1].charAt(0),fe=se.slice(2).join(" ")):(pe=se[1],fe=se.slice(2).join(" ")))}j({firstName:de,lastName:fe,middleInitial:pe,email:N.email||"",position:N.position||"",role:N.role||"member"}),y(N),k(!0)},G=async()=>{if(u)try{const N=u.userId||u.id;await V1(ut(we,"users",N)),e(t.filter(de=>!(de.userId===u.userId||de.id===u.id))),Y.success(`User ${u.name||u.email} has been deleted`),a(!1),d(null)}catch(N){console.error("Error deleting user:",N),Y.error(`Failed to delete user: ${N.message}`)}},X=()=>{a(!1),d(null)},le=async(N,de)=>{const fe=de==="active"?"inactive":"active";try{const pe=N.userId||N.id,se=ut(we,"users",pe);await xl(se,{status:fe}),e(t.map(Ae=>Ae.userId&&Ae.userId===N.userId||Ae.id===N.id?{...Ae,status:fe}:Ae)),Y.success(`User status updated to ${fe}`)}catch(pe){console.error("Error updating user status:",pe),Y.error(`Failed to update user status: ${pe.message}`)}},ee=N=>{y(N),_(N.schedule||[]),m(!0),A(!1),x(null)},ye=async()=>{if(T)try{let N=b.firstName;if(b.middleInitial&&(N+=` ${b.middleInitial}.`),b.lastName&&(N+=` ${b.lastName}`),!N.trim()||!b.email.trim()){Y.error("Name and email are required");return}const de=T.userId||T.id,fe=ut(we,"users",de);await xl(fe,{name:N.trim(),email:b.email.trim(),position:b.position.trim(),role:b.role}),e(t.map(pe=>pe.userId&&pe.userId===T.userId||pe.id===T.id?{...pe,name:N.trim(),email:b.email.trim(),position:b.position.trim(),role:b.role}:pe)),Y.success("User information updated successfully"),k(!1)}catch(N){console.error("Error updating user:",N),Y.error(`Failed to update user: ${N.message}`)}},Ye=async()=>{try{let N=D.firstName;if(D.middleInitial&&(N+=` ${D.middleInitial}.`),D.lastName&&(N+=` ${D.lastName}`),!N.trim()||!D.email.trim()){Y.error("Name and email are required");return}const de=Date.now(),fe=Math.random().toString(36).substring(2,8),pe=`uid_${de}_${fe}`,se=N.trim().toLowerCase().replace(/\s+/g,"_"),Ae=`${D.role}_${se}_${de}`,cr=ut(we,"users",Ae);await ou(cr,{userId:pe,name:N.trim(),email:D.email.trim(),position:D.position.trim(),role:D.role,status:D.status,createdAt:Su(),schedule:[]});const Pu={id:Ae,userId:pe,name:N.trim(),email:D.email.trim(),position:D.position.trim(),role:D.role,status:D.status,schedule:[],createdAt:new Date};e([...t,Pu]),Y.success(`User ${N.trim()} added successfully`),L(!1),P({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member",status:"active"})}catch(N){console.error("Error adding user:",N),Y.error(`Failed to add user: ${N.message}`)}},Ge=()=>{if(w.selectedDays.length===0){Y.warning("Please select at least one day of the week");return}const N=new Date,[de,fe]=w.timeIn.split(":").map(Number);N.setHours(de,fe,0,0);const pe=w.selectedDays.map(Ae=>({id:`${Date.now()}-${Ae}`,dayOfWeek:Ae,timeIn:w.timeIn,timeRegion:w.timeRegion,shiftDuration:parseInt(w.shiftDuration,10),utcTimeIn:N.toISOString()})),se=[...g,...pe];_(se),Y.success(`Added schedule for ${w.selectedDays.length} day(s)`),R({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},rt=async()=>{if(T)try{const N=T.userId||T.id;console.log("Updating schedule for user with document ID:",N);const de=ut(we,"users",N);await xl(de,{schedule:g}),e(t.map(fe=>fe.userId&&fe.userId===T.userId||fe.id===T.id?{...fe,schedule:g}:fe)),Y.success("Schedule updated successfully"),m(!1)}catch(N){console.error("Error updating schedule:",N),Y.error(`Failed to update schedule: ${N.message}`)}},Be=N=>{const de=g.filter(fe=>fe.id!==N);_(de)},Dt=N=>{x(N),A(!0),R({selectedDays:[N.dayOfWeek],timeIn:N.timeIn,timeRegion:N.timeRegion,shiftDuration:N.shiftDuration.toString()})},Ot=()=>{if(!O)return;if(w.selectedDays.length===0){Y.warning("Please select at least one day of the week");return}const N=new Date,[de,fe]=w.timeIn.split(":").map(Number);N.setHours(de,fe,0,0);let pe=g.filter(Ae=>Ae.id!==O.id);const se=w.selectedDays.map(Ae=>({id:Ae===O.dayOfWeek?O.id:`${Date.now()}-${Ae}`,dayOfWeek:Ae,timeIn:w.timeIn,timeRegion:w.timeRegion,shiftDuration:parseInt(w.shiftDuration,10),utcTimeIn:N.toISOString()}));pe=[...pe,...se],_(pe),Y.success(`Updated schedule for ${w.selectedDays.length} day(s)`),R({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),A(!1),x(null)},Ht=()=>{A(!1),x(null),R({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},dt=t.filter(N=>{const de=i.toLowerCase();return N.name&&N.name.toLowerCase().includes(de)||N.email&&N.email.toLowerCase().includes(de)||N.role&&N.role.toLowerCase().includes(de)||N.position&&N.position.toLowerCase().includes(de)});return h.jsxs(FV,{children:[h.jsxs(WV,{children:[h.jsx(ny,{size:24,weight:"bold"}),"User Management"]}),h.jsxs(JV,{children:[h.jsx(HV,{type:"text",placeholder:"Search users...",value:i,onChange:N=>o(N.target.value)}),h.jsxs(mn,{primary:!0,onClick:()=>L(!0),children:[h.jsx(z_,{children:h.jsx(zI,{size:16})}),"Add User"]})]}),n?h.jsx("p",{children:"Loading users..."}):h.jsxs(UV,{children:[h.jsx($V,{children:h.jsxs(Dp,{children:[h.jsx(Vi,{children:"Name"}),h.jsx(Vi,{children:"Email"}),h.jsx(Vi,{children:"Position"}),h.jsx(Vi,{children:"Role"}),h.jsx(Vi,{children:"Status"}),h.jsx(Vi,{children:"Shifts"}),h.jsx(Vi,{children:"Actions"})]})}),h.jsx("tbody",{children:dt.length>0?dt.map(N=>h.jsxs(Dp,{children:[h.jsx(zr,{children:N.name||"N/A"}),h.jsx(zr,{children:N.email}),h.jsx(zr,{children:N.position||"N/A"}),h.jsx(zr,{children:h.jsx(zV,{role:N.role,children:N.role||"member"})}),h.jsx(zr,{children:h.jsx(BV,{status:N.status||"active",children:N.status||"active"})}),h.jsx(zr,{children:N.schedule&&Array.isArray(N.schedule)?h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("strong",{children:N.schedule.length})," shifts"]}),h.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[re(N.schedule)," total hours"]})]}):"No shifts"}),h.jsxs(zr,{children:[h.jsx(ms,{color:"#000000",onClick:()=>ee(N),title:"Manage Schedule",children:h.jsx(Kn,{size:20})}),h.jsx(ms,{color:"#1a73e8",onClick:()=>z(N),title:"Edit User",children:h.jsx(ug,{size:20})}),h.jsx(ms,{color:N.status==="active"?"#f44336":"#4caf50",onClick:()=>le(N,N.status||"active"),title:N.status==="active"?"Deactivate user":"Activate user",children:N.status==="active"?h.jsx(ry,{size:20}):h.jsx(X1,{size:20})}),h.jsx(ms,{color:"#f44336",onClick:()=>ce(N),title:"Delete user",children:h.jsx(cg,{size:20})})]})]},N.id)):h.jsx(Dp,{children:h.jsx(zr,{colSpan:6,style:{textAlign:"center"},children:"No users found"})})})]}),s&&h.jsx(xc,{children:h.jsxs(Tc,{children:[h.jsx(Ic,{children:"Confirm Deletion"}),h.jsxs(qV,{children:["Are you sure you want to delete the user ",(u==null?void 0:u.name)||(u==null?void 0:u.email),"? This action cannot be undone."]}),h.jsxs(Sc,{children:[h.jsx(mn,{onClick:X,children:"Cancel"}),h.jsx(mn,{primary:!0,onClick:G,children:"Delete"})]})]})}),E&&T&&h.jsx(xc,{children:h.jsxs(Tc,{style:{maxWidth:"500px",width:"100%"},children:[h.jsx(Ic,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(au,{size:24}),"Edit User: ",T.name||T.email]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(ft,{children:[h.jsx(pt,{children:"First Name"}),h.jsx(gn,{type:"text",value:b.firstName,onChange:N=>j({...b,firstName:N.target.value}),placeholder:"First Name"})]}),h.jsxs(ft,{children:[h.jsx(pt,{children:"Middle Initial"}),h.jsx(gn,{type:"text",value:b.middleInitial,onChange:N=>j({...b,middleInitial:N.target.value}),placeholder:"Middle Initial",maxLength:1}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),h.jsxs(ft,{children:[h.jsx(pt,{children:"Last Name"}),h.jsx(gn,{type:"text",value:b.lastName,onChange:N=>j({...b,lastName:N.target.value}),placeholder:"Last Name"})]}),h.jsxs(ft,{children:[h.jsx(pt,{children:"Email"}),h.jsx(gn,{type:"email",value:b.email,onChange:N=>j({...b,email:N.target.value}),placeholder:"Email Address"})]}),h.jsxs(ft,{children:[h.jsx(pt,{children:"Position"}),h.jsx(gn,{type:"text",value:b.position,onChange:N=>j({...b,position:N.target.value}),placeholder:"Position"})]}),h.jsxs(ft,{children:[h.jsx(pt,{children:"Role"}),h.jsxs(Cc,{value:b.role,onChange:N=>j({...b,role:N.target.value}),children:[h.jsx("option",{value:"member",children:"Member"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]})]}),h.jsxs(Sc,{children:[h.jsx(mn,{onClick:()=>k(!1),children:"Cancel"}),h.jsx(mn,{primary:!0,onClick:ye,children:"Save Changes"})]})]})}),I&&h.jsx(xc,{children:h.jsxs(Tc,{style:{maxWidth:"500px",width:"100%"},children:[h.jsx(Ic,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(au,{size:24}),"Add New User"]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(ft,{children:[h.jsxs(pt,{children:["First Name ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(gn,{type:"text",value:D.firstName,onChange:N=>P({...D,firstName:N.target.value}),placeholder:"First Name",required:!0})]}),h.jsxs(ft,{children:[h.jsx(pt,{children:"Middle Initial"}),h.jsx(gn,{type:"text",value:D.middleInitial,onChange:N=>P({...D,middleInitial:N.target.value}),placeholder:"Middle Initial",maxLength:1}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),h.jsxs(ft,{children:[h.jsxs(pt,{children:["Last Name ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(gn,{type:"text",value:D.lastName,onChange:N=>P({...D,lastName:N.target.value}),placeholder:"Last Name",required:!0})]}),h.jsxs(ft,{children:[h.jsxs(pt,{children:["Email ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(gn,{type:"email",value:D.email,onChange:N=>P({...D,email:N.target.value}),placeholder:"Email Address",required:!0})]}),h.jsxs(ft,{children:[h.jsx(pt,{children:"Position"}),h.jsx(gn,{type:"text",value:D.position,onChange:N=>P({...D,position:N.target.value}),placeholder:"Position"})]}),h.jsxs(ft,{children:[h.jsx(pt,{children:"Role"}),h.jsxs(Cc,{value:D.role,onChange:N=>P({...D,role:N.target.value}),children:[h.jsx("option",{value:"member",children:"Member"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),h.jsxs(ft,{children:[h.jsx(pt,{children:"Status"}),h.jsxs(Cc,{value:D.status,onChange:N=>P({...D,status:N.target.value}),children:[h.jsx("option",{value:"active",children:"Active"}),h.jsx("option",{value:"inactive",children:"Inactive"}),h.jsx("option",{value:"pending",children:"Pending"})]})]})]}),h.jsxs(Sc,{children:[h.jsx(mn,{onClick:()=>L(!1),children:"Cancel"}),h.jsxs(mn,{primary:!0,onClick:Ye,children:[h.jsx(z_,{children:h.jsx(FI,{size:16})}),"Add User"]})]})]})}),f&&T&&h.jsx(xc,{children:h.jsxs(Tc,{style:{maxWidth:"600px",width:"100%"},children:[h.jsx(Ic,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Kn,{size:24}),"Manage Schedule for ",T.name||T.email]})}),h.jsx("div",{style:{marginBottom:"1rem",background:"#f5f9ff",padding:"0.75rem",borderRadius:"6px"},children:h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Total Shifts:"})," ",g.length]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Total Hours:"})," ",re(g)," hours/week"]})]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Current Schedule"}),g.length>0?h.jsx(GV,{children:g.map(N=>h.jsxs(KV,{children:[h.jsxs(QV,{children:[h.jsx(ZV,{children:N.dayOfWeek}),h.jsxs("div",{children:[h.jsx(ms,{color:"#000000",onClick:()=>Dt(N),title:"Edit schedule",style:{marginRight:"4px"},children:h.jsx(ug,{size:16})}),h.jsx(ms,{color:"#f44336",onClick:()=>Be(N.id),title:"Delete schedule",children:h.jsx(cg,{size:16})})]})]}),h.jsxs(XV,{children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Time In:"})," ",N.timeIn]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Region:"})," ",N.timeRegion]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Duration:"})," ",N.shiftDuration," hours"]})]})]},N.id))}):h.jsx("p",{children:"No schedules found. Add a new schedule below."})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:S?"Edit Schedule":"Add New Schedule"}),h.jsxs(ft,{children:[h.jsx(pt,{children:"Days of Week (select multiple)"}),h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:q.map(N=>h.jsxs(YV,{children:[h.jsx("input",{type:"checkbox",id:`day-${N}`,checked:w.selectedDays.includes(N),onChange:()=>{const de=w.selectedDays.includes(N)?w.selectedDays.filter(fe=>fe!==N):[...w.selectedDays,N];R({...w,selectedDays:de})}}),h.jsx("label",{htmlFor:`day-${N}`,children:N})]},N))})]}),h.jsxs(ft,{children:[h.jsx(pt,{children:"Time In"}),h.jsx(gn,{type:"time",value:w.timeIn,onChange:N=>R({...w,timeIn:N.target.value})})]}),h.jsxs(ft,{children:[h.jsx(pt,{children:"Time Region"}),h.jsxs(Cc,{value:w.timeRegion,onChange:N=>R({...w,timeRegion:N.target.value}),children:[h.jsxs("optgroup",{label:"Asia & Pacific",children:[h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),h.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),h.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),h.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),h.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),h.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),h.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),h.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),h.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),h.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),h.jsxs("optgroup",{label:"Europe & Africa",children:[h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),h.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),h.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),h.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),h.jsxs(ft,{children:[h.jsx(pt,{children:"Shift Duration (hours)"}),h.jsx(gn,{type:"number",min:"1",max:"24",value:w.shiftDuration,onChange:N=>R({...w,shiftDuration:N.target.value})})]}),h.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:S?h.jsxs(h.Fragment,{children:[h.jsx(mn,{primary:!0,onClick:Ot,children:"Update Schedule"}),h.jsx(mn,{onClick:Ht,children:"Cancel Edit"})]}):h.jsx(mn,{primary:!0,onClick:Ge,children:"Add Schedule"})})]}),h.jsxs(Sc,{children:[h.jsx(mn,{onClick:()=>m(!1),children:"Cancel"}),h.jsx(mn,{primary:!0,onClick:rt,children:"Save Changes"})]})]})})]})}const tF=F.div`
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
`,nF=F.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
`,rF=F.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`,iF=F.div`
  margin-bottom: 1.5rem;
`,oF=F.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`,lS=F.button`
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
`,sF=F(lS)`
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #eee;
  }
`,aF=F(lS)`
  background-color: #4caf50;
  color: white;
  border: 1px solid #43a047;
  
  &:hover {
    background-color: #43a047;
  }
`,lF=F.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,uF=F.textarea`
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

`;function cF(){const[t,e]=M.useState(null),[n,r]=M.useState("dashboard"),[i,o]=M.useState(null),[s,a]=M.useState(null),[u,d]=M.useState(!1),[f,m]=M.useState(null),[E,k]=M.useState(!1),I=ya();M.useEffect(()=>{const j=sn.currentUser;if(j){const D={uid:j.uid,email:j.email,displayName:j.displayName||j.email.split("@")[0]};e(D),L(j.uid)}},[]);const L=async j=>{if(j)try{k(!0);try{const q=On(un(we,"declined_registrations"),Zn("userId","==",j));if(!(await En(q)).empty){Y.error("Your registration request has been declined. Please contact an administrator."),await sn.signOut(),I("/login");return}}catch(q){console.error("Error checking declined status:",q)}try{const q=On(un(we,"registration_requests"),Zn("userId","==",j));if(!(await En(q)).empty){Y.info("Your registration request is pending approval. You will be notified when approved."),await sn.signOut(),I("/login");return}}catch(q){console.error("Error checking pending status:",q)}const D=ut(we,"users",j),P=await iu(D);if(P.exists()){const q=P.data();m(q)}else console.log("No user data found in Firestore"),Y.error("Your account is not properly set up. Please contact an administrator."),await sn.signOut(),I("/login")}catch(D){console.error("Error fetching user data:",D),Y.error("Error loading user data. Please try again later.")}finally{k(!1)}};M.useEffect(()=>{t!=null&&t.uid&&T()},[t]);const T=async()=>{try{const j=un(we,"attendance");try{const D=On(j,Zn("userId","==",t.uid),M1("timestamp","desc"),oD(1)),P=await En(D);if(P.empty)o(null),a(null);else{const q=P.docs[0].data();a(q),o(q.type)}}catch(D){if(D.message&&D.message.includes("index is currently building")){console.log("Index is still building, using fallback method");const P=On(j,Zn("userId","==",t.uid)),q=await En(P);if(q.empty)o(null),a(null);else{let re=null,ue=new Date(0);q.forEach(ce=>{var X;const z=ce.data(),G=((X=z.timestamp)==null?void 0:X.toDate())||new Date(0);G>ue&&(ue=G,re=z)}),re?(a(re),o(re.type)):(o(null),a(null))}Y.info("System is updating. Some features may be temporarily limited.",{autoClose:5e3,hideProgressBar:!1})}else throw D}}catch(j){console.error("Error fetching attendance status:",j),j.message&&j.message.includes("index")?Y.warning("System is updating attendance records. Please try again in a few minutes."):Y.error("Unable to fetch your attendance status. Please refresh the page.")}},[y,g]=M.useState(!1),[_,w]=M.useState(null),[R,O]=M.useState(""),x=async(j,D)=>{if(j==="Out")return"Complete";try{const P=await iu(ut(we,"users",D));if(!P.exists())return console.warn("User document not found when determining status"),"On Time";const re=P.data().schedule||[],ue=new Date,ce=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][ue.getDay()],z=re&&Array.isArray(re)?re.find(ye=>ye.dayOfWeek===ce):null;if(!z)return console.log("No schedule found for today:",ce),"On Time";console.log("Found schedule for today:",z);const[G,X]=z.timeIn.split(":").map(Number),le=new Date;le.setHours(G,X,0,0);const ee=Math.round((ue-le)/(1e3*60));return console.log("Time difference in minutes:",ee),ee<-15?"Early":ee<=15?"On Time":"Late"}catch(P){return console.error("Error determining status:",P),"On Time"}},S=async j=>{if(t){d(!0);try{const D=nt.now(),P=await x(j,t.uid),q={userId:t.uid,email:t.email,name:t.displayName,type:j,status:P,timestamp:D,notes:""};O(""),w(q),g(!0)}catch(D){console.error("Error preparing time in/out:",D),Y.error("Failed to prepare time in/out. Please try again.")}finally{d(!1)}}},A=async()=>{if(_){d(!0);try{const{status:j,...D}=_;D.notes=R;const P=await M8(un(we,"attendance"),D);Y.success(`Time ${_.type} recorded successfully!`),o(_.type);const q={..._,notes:R};a(q),g(!1),w(null),O(""),console.log(`Time ${_.type} recorded with ID: ${P.id}`)}catch(j){console.error(`Error recording time ${_.type}:`,j),Y.error(`Failed to record time ${_.type}`)}finally{d(!1)}}},b=()=>{g(!1),w(null),O("")};return h.jsxs(h.Fragment,{children:[h.jsxs(UN,{user:t,activeTab:n,setActiveTab:r,attendanceStatus:i,loading:u,handleTimeInOut:S,lastRecord:s,isSuperAdmin:(f==null?void 0:f.role)==="super_admin",userData:f,setUserData:m,children:[n==="dashboard"&&h.jsx(BN,{attendanceStatus:i,lastRecord:s}),n==="attendance"&&h.jsx(YN,{user:t}),n==="schedule"&&h.jsx(dV,{user:t,userData:f}),n==="profile"&&h.jsx(pV,{user:t,userData:f,loadingUserData:E}),n==="registration_requests"&&(f==null?void 0:f.role)==="super_admin"&&h.jsx(VV,{}),n==="user_management"&&(f==null?void 0:f.role)==="super_admin"&&h.jsx(eF,{})]}),y&&_&&h.jsx(tF,{children:h.jsxs(nF,{children:[h.jsxs(rF,{children:["Confirm Time ",_.type]}),h.jsxs(iF,{children:[h.jsxs("p",{children:[h.jsx("strong",{children:"Time:"})," ",_.timestamp.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Date:"})," ",_.timestamp.toDate().toLocaleDateString()]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Status:"}),h.jsx(lF,{status:_.status,children:_.status})]}),h.jsxs("div",{style:{marginTop:"1rem"},children:[h.jsx("strong",{children:"Notes (Optional):"}),h.jsx(uF,{value:R,onChange:j=>O(j.target.value),placeholder:"Add any notes about this attendance record..."})]})]}),h.jsxs(oF,{children:[h.jsxs(sF,{onClick:b,children:[h.jsx(ry,{size:16,style:{marginRight:"4px"}}),"Cancel"]}),h.jsxs(aF,{onClick:A,children:[h.jsx(X1,{size:16,style:{marginRight:"4px"}}),"Confirm"]})]})]})})]})}const dF=({children:t})=>{const{currentUser:e,loading:n}=H1();return n?h.jsx(hF,{children:"Loading..."}):e?t:h.jsx(fx,{to:"/",replace:!0})},hF=F.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;function fF(){return h.jsx(h.Fragment,{children:h.jsx(sO,{children:h.jsxs(EN,{children:[h.jsx(aL,{children:h.jsxs(eL,{children:[h.jsx(el,{path:"/",element:h.jsx(oN,{})}),h.jsx(el,{path:"/register",element:h.jsx(_N,{})}),h.jsx(el,{path:"/dashboard",element:h.jsx(dF,{children:h.jsx(cF,{})})}),h.jsx(el,{path:"*",element:h.jsx(fx,{to:"/",replace:!0})})]})}),h.jsx(ag,{position:"top-right",autoClose:3e3})]})})})}nx(document.getElementById("root")).render(h.jsx(M.StrictMode,{children:h.jsx(fF,{})}));
