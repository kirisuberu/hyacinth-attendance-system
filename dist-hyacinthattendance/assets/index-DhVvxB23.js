function RS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function iu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wk={exports:{}},Xd={},$k={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ou=Symbol.for("react.element"),bS=Symbol.for("react.portal"),jS=Symbol.for("react.fragment"),DS=Symbol.for("react.strict_mode"),OS=Symbol.for("react.profiler"),NS=Symbol.for("react.provider"),MS=Symbol.for("react.context"),VS=Symbol.for("react.forward_ref"),FS=Symbol.for("react.suspense"),US=Symbol.for("react.memo"),WS=Symbol.for("react.lazy"),nv=Symbol.iterator;function $S(t){return t===null||typeof t!="object"?null:(t=nv&&t[nv]||t["@@iterator"],typeof t=="function"?t:null)}var zk={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bk=Object.assign,Hk={};function aa(t,e,n){this.props=t,this.context=e,this.refs=Hk,this.updater=n||zk}aa.prototype.isReactComponent={};aa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};aa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qk(){}qk.prototype=aa.prototype;function zg(t,e,n){this.props=t,this.context=e,this.refs=Hk,this.updater=n||zk}var Bg=zg.prototype=new qk;Bg.constructor=zg;Bk(Bg,aa.prototype);Bg.isPureReactComponent=!0;var rv=Array.isArray,Yk=Object.prototype.hasOwnProperty,Hg={current:null},Gk={key:!0,ref:!0,__self:!0,__source:!0};function Kk(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Yk.call(e,r)&&!Gk.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ou,type:t,key:o,ref:s,props:i,_owner:Hg.current}}function zS(t,e){return{$$typeof:ou,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qg(t){return typeof t=="object"&&t!==null&&t.$$typeof===ou}function BS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var iv=/\/+/g;function _f(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BS(""+t.key):e.toString(36)}function yc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ou:case bS:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+_f(s,0):r,rv(i)?(n="",t!=null&&(n=t.replace(iv,"$&/")+"/"),yc(i,e,n,"",function(d){return d})):i!=null&&(qg(i)&&(i=zS(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(iv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",rv(t))for(var a=0;a<t.length;a++){o=t[a];var u=r+_f(o,a);s+=yc(o,e,n,u,i)}else if(u=$S(t),typeof u=="function")for(t=u.call(t),a=0;!(o=t.next()).done;)o=o.value,u=r+_f(o,a++),s+=yc(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Wu(t,e,n){if(t==null)return t;var r=[],i=0;return yc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function HS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},vc={transition:null},qS={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:vc,ReactCurrentOwner:Hg};function Qk(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:Wu,forEach:function(t,e,n){Wu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wu(t,function(){e++}),e},toArray:function(t){return Wu(t,function(e){return e})||[]},only:function(t){if(!qg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=aa;he.Fragment=jS;he.Profiler=OS;he.PureComponent=zg;he.StrictMode=DS;he.Suspense=FS;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qS;he.act=Qk;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Bk({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Hg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Yk.call(e,u)&&!Gk.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:ou,type:t.type,key:i,ref:o,props:r,_owner:s}};he.createContext=function(t){return t={$$typeof:MS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NS,_context:t},t.Consumer=t};he.createElement=Kk;he.createFactory=function(t){var e=Kk.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:VS,render:t}};he.isValidElement=qg;he.lazy=function(t){return{$$typeof:WS,_payload:{_status:-1,_result:t},_init:HS}};he.memo=function(t,e){return{$$typeof:US,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=vc.transition;vc.transition={};try{t()}finally{vc.transition=e}};he.unstable_act=Qk;he.useCallback=function(t,e){return Mt.current.useCallback(t,e)};he.useContext=function(t){return Mt.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};he.useEffect=function(t,e){return Mt.current.useEffect(t,e)};he.useId=function(){return Mt.current.useId()};he.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return Mt.current.useMemo(t,e)};he.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};he.useRef=function(t){return Mt.current.useRef(t)};he.useState=function(t){return Mt.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return Mt.current.useTransition()};he.version="18.3.1";$k.exports=he;var N=$k.exports;const c=iu(N),YS=RS({__proto__:null,default:c},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GS=N,KS=Symbol.for("react.element"),QS=Symbol.for("react.fragment"),XS=Object.prototype.hasOwnProperty,ZS=GS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,JS={key:!0,ref:!0,__self:!0,__source:!0};function Xk(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)XS.call(e,r)&&!JS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:KS,type:t,key:o,ref:s,props:i,_owner:ZS.current}}Xd.Fragment=QS;Xd.jsx=Xk;Xd.jsxs=Xk;Wk.exports=Xd;var h=Wk.exports,Zk={exports:{}},on={},Jk={exports:{}},ew={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,q){var Z=z.length;z.push(q);e:for(;0<Z;){var ce=Z-1>>>1,ee=z[ce];if(0<i(ee,q))z[ce]=q,z[Z]=ee,Z=ce;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var q=z[0],Z=z.pop();if(Z!==q){z[0]=Z;e:for(var ce=0,ee=z.length,ye=ee>>>1;ce<ye;){var qe=2*(ce+1)-1,Ye=z[qe],Xe=qe+1,F=z[Xe];if(0>i(Ye,Z))Xe<ee&&0>i(F,Ye)?(z[ce]=F,z[Xe]=Z,ce=Xe):(z[ce]=Ye,z[qe]=Z,ce=qe);else if(Xe<ee&&0>i(F,Z))z[ce]=F,z[Xe]=Z,ce=Xe;else break e}}return q}function i(z,q){var Z=z.sortIndex-q.sortIndex;return Z!==0?Z:z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var u=[],d=[],f=1,m=null,w=3,_=!1,T=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(z){for(var q=n(d);q!==null;){if(q.callback===null)r(d);else if(q.startTime<=z)r(d),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(d)}}function I(z){if(A=!1,k(z),!T)if(n(u)!==null)T=!0,pe(R);else{var q=n(d);q!==null&&me(I,q.startTime-z)}}function R(z,q){T=!1,A&&(A=!1,y(x),x=-1),_=!0;var Z=w;try{for(k(q),m=n(u);m!==null&&(!(m.expirationTime>q)||z&&!b());){var ce=m.callback;if(typeof ce=="function"){m.callback=null,w=m.priorityLevel;var ee=ce(m.expirationTime<=q);q=t.unstable_now(),typeof ee=="function"?m.callback=ee:m===n(u)&&r(u),k(q)}else r(u);m=n(u)}if(m!==null)var ye=!0;else{var qe=n(d);qe!==null&&me(I,qe.startTime-q),ye=!1}return ye}finally{m=null,w=Z,_=!1}}var O=!1,E=null,x=-1,L=5,j=-1;function b(){return!(t.unstable_now()-j<L)}function D(){if(E!==null){var z=t.unstable_now();j=z;var q=!0;try{q=E(!0,z)}finally{q?P():(O=!1,E=null)}}else O=!1}var P;if(typeof g=="function")P=function(){g(D)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,ae=Y.port2;Y.port1.onmessage=D,P=function(){ae.postMessage(null)}}else P=function(){S(D,0)};function pe(z){E=z,O||(O=!0,P())}function me(z,q){x=S(function(){z(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,pe(R))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(w){case 1:case 2:case 3:var q=3;break;default:q=w}var Z=w;w=q;try{return z()}finally{w=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=w;w=z;try{return q()}finally{w=Z}},t.unstable_scheduleCallback=function(z,q,Z){var ce=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ce+Z:ce):Z=ce,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=Z+ee,z={id:f++,callback:q,priorityLevel:z,startTime:Z,expirationTime:ee,sortIndex:-1},Z>ce?(z.sortIndex=Z,e(d,z),n(u)===null&&z===n(d)&&(A?(y(x),x=-1):A=!0,me(I,Z-ce))):(z.sortIndex=ee,e(u,z),T||_||(T=!0,pe(R))),z},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(z){var q=w;return function(){var Z=w;w=q;try{return z.apply(this,arguments)}finally{w=Z}}}})(ew);Jk.exports=ew;var e6=Jk.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t6=N,rn=e6;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tw=new Set,Sl={};function fo(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(Sl[t]=e,t=0;t<e.length;t++)tw.add(e[t])}var _r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rp=Object.prototype.hasOwnProperty,n6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ov={},sv={};function r6(t){return Rp.call(sv,t)?!0:Rp.call(ov,t)?!1:n6.test(t)?sv[t]=!0:(ov[t]=!0,!1)}function i6(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function o6(t,e,n,r){if(e===null||typeof e>"u"||i6(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gt[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gt[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gt[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gt[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gt[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gt[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yg=/[\-:]([a-z])/g;function Gg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yg,Gg);gt[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yg,Gg);gt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yg,Gg);gt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});gt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kg(t,e,n,r){var i=gt.hasOwnProperty(e)?gt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(o6(e,n,i,r)&&(n=null),r||i===null?r6(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Cr=t6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$u=Symbol.for("react.element"),gs=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),Qg=Symbol.for("react.strict_mode"),bp=Symbol.for("react.profiler"),nw=Symbol.for("react.provider"),rw=Symbol.for("react.context"),Xg=Symbol.for("react.forward_ref"),jp=Symbol.for("react.suspense"),Dp=Symbol.for("react.suspense_list"),Zg=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),iw=Symbol.for("react.offscreen"),av=Symbol.iterator;function Oa(t){return t===null||typeof t!="object"?null:(t=av&&t[av]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Object.assign,kf;function Ga(t){if(kf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kf=e&&e[1]||""}return`
`+kf+t}var wf=!1;function Ef(t,e){if(!t||wf)return"";wf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=a);break}}}finally{wf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ga(t):""}function s6(t){switch(t.tag){case 5:return Ga(t.type);case 16:return Ga("Lazy");case 13:return Ga("Suspense");case 19:return Ga("SuspenseList");case 0:case 2:case 15:return t=Ef(t.type,!1),t;case 11:return t=Ef(t.type.render,!1),t;case 1:return t=Ef(t.type,!0),t;default:return""}}function Op(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case gs:return"Portal";case bp:return"Profiler";case Qg:return"StrictMode";case jp:return"Suspense";case Dp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rw:return(t.displayName||"Context")+".Consumer";case nw:return(t._context.displayName||"Context")+".Provider";case Xg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zg:return e=t.displayName||null,e!==null?e:Op(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return Op(t(e))}catch{}}return null}function a6(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Op(e);case 8:return e===Qg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ow(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function l6(t){var e=ow(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zu(t){t._valueTracker||(t._valueTracker=l6(t))}function sw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ow(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Np(t,e){var n=e.checked;return Ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function aw(t,e){e=e.checked,e!=null&&Kg(t,"checked",e,!1)}function Mp(t,e){aw(t,e);var n=fi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vp(t,e.type,fi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function uv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vp(t,e,n){(e!=="number"||Hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ka=Array.isArray;function Rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Fp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Ka(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fi(n)}}function lw(t,e){var n=fi(e.value),r=fi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function uw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Up(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?uw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Bu,cw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Bu=Bu||document.createElement("div"),Bu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Bu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Cl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var al={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u6=["Webkit","ms","Moz","O"];Object.keys(al).forEach(function(t){u6.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),al[e]=al[t]})});function dw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||al.hasOwnProperty(t)&&al[t]?(""+e).trim():e+"px"}function hw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var c6=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wp(t,e){if(e){if(c6[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function $p(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zp=null;function Jg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bp=null,bs=null,js=null;function hv(t){if(t=lu(t)){if(typeof Bp!="function")throw Error(B(280));var e=t.stateNode;e&&(e=nh(e),Bp(t.stateNode,t.type,e))}}function fw(t){bs?js?js.push(t):js=[t]:bs=t}function pw(){if(bs){var t=bs,e=js;if(js=bs=null,hv(t),e)for(t=0;t<e.length;t++)hv(e[t])}}function mw(t,e){return t(e)}function gw(){}var xf=!1;function yw(t,e,n){if(xf)return t(e,n);xf=!0;try{return mw(t,e,n)}finally{xf=!1,(bs!==null||js!==null)&&(gw(),pw())}}function Al(t,e){var n=t.stateNode;if(n===null)return null;var r=nh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Hp=!1;if(_r)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){Hp=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{Hp=!1}function d6(t,e,n,r,i,o,s,a,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var ll=!1,qc=null,Yc=!1,qp=null,h6={onError:function(t){ll=!0,qc=t}};function f6(t,e,n,r,i,o,s,a,u){ll=!1,qc=null,d6.apply(h6,arguments)}function p6(t,e,n,r,i,o,s,a,u){if(f6.apply(this,arguments),ll){if(ll){var d=qc;ll=!1,qc=null}else throw Error(B(198));Yc||(Yc=!0,qp=d)}}function po(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fv(t){if(po(t)!==t)throw Error(B(188))}function m6(t){var e=t.alternate;if(!e){if(e=po(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return fv(i),t;if(o===r)return fv(i),e;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function _w(t){return t=m6(t),t!==null?kw(t):null}function kw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kw(t);if(e!==null)return e;t=t.sibling}return null}var ww=rn.unstable_scheduleCallback,pv=rn.unstable_cancelCallback,g6=rn.unstable_shouldYield,y6=rn.unstable_requestPaint,Ke=rn.unstable_now,v6=rn.unstable_getCurrentPriorityLevel,e0=rn.unstable_ImmediatePriority,Ew=rn.unstable_UserBlockingPriority,Gc=rn.unstable_NormalPriority,_6=rn.unstable_LowPriority,xw=rn.unstable_IdlePriority,Zd=null,Hn=null;function k6(t){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(Zd,t,void 0,(t.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:x6,w6=Math.log,E6=Math.LN2;function x6(t){return t>>>=0,t===0?32:31-(w6(t)/E6|0)|0}var Hu=64,qu=4194304;function Qa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Qa(a):(o&=s,o!==0&&(r=Qa(o)))}else s=n&~i,s!==0?r=Qa(s):o!==0&&(r=Qa(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Cn(e),i=1<<n,r|=t[n],e&=~i;return r}function T6(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I6(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Cn(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=T6(a,e)):u<=e&&(t.expiredLanes|=a),o&=~a}}function Yp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tw(){var t=Hu;return Hu<<=1,!(Hu&4194240)&&(Hu=64),t}function Tf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function su(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Cn(e),t[e]=n}function S6(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Cn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function t0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ie=0;function Iw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sw,n0,Cw,Aw,Lw,Gp=!1,Yu=[],Zr=null,Jr=null,ei=null,Ll=new Map,Pl=new Map,Wr=[],C6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mv(t,e){switch(t){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":ei=null;break;case"pointerover":case"pointerout":Ll.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(e.pointerId)}}function Ma(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=lu(e),e!==null&&n0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function A6(t,e,n,r,i){switch(e){case"focusin":return Zr=Ma(Zr,t,e,n,r,i),!0;case"dragenter":return Jr=Ma(Jr,t,e,n,r,i),!0;case"mouseover":return ei=Ma(ei,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ll.set(o,Ma(Ll.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Pl.set(o,Ma(Pl.get(o)||null,t,e,n,r,i)),!0}return!1}function Pw(t){var e=Wi(t.target);if(e!==null){var n=po(e);if(n!==null){if(e=n.tag,e===13){if(e=vw(n),e!==null){t.blockedOn=e,Lw(t.priority,function(){Cw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zp=r,n.target.dispatchEvent(r),zp=null}else return e=lu(n),e!==null&&n0(e),t.blockedOn=n,!1;e.shift()}return!0}function gv(t,e,n){_c(t)&&n.delete(e)}function L6(){Gp=!1,Zr!==null&&_c(Zr)&&(Zr=null),Jr!==null&&_c(Jr)&&(Jr=null),ei!==null&&_c(ei)&&(ei=null),Ll.forEach(gv),Pl.forEach(gv)}function Va(t,e){t.blockedOn===e&&(t.blockedOn=null,Gp||(Gp=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,L6)))}function Rl(t){function e(i){return Va(i,t)}if(0<Yu.length){Va(Yu[0],t);for(var n=1;n<Yu.length;n++){var r=Yu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zr!==null&&Va(Zr,t),Jr!==null&&Va(Jr,t),ei!==null&&Va(ei,t),Ll.forEach(e),Pl.forEach(e),n=0;n<Wr.length;n++)r=Wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wr.length&&(n=Wr[0],n.blockedOn===null);)Pw(n),n.blockedOn===null&&Wr.shift()}var Ds=Cr.ReactCurrentBatchConfig,Qc=!0;function P6(t,e,n,r){var i=Ie,o=Ds.transition;Ds.transition=null;try{Ie=1,r0(t,e,n,r)}finally{Ie=i,Ds.transition=o}}function R6(t,e,n,r){var i=Ie,o=Ds.transition;Ds.transition=null;try{Ie=4,r0(t,e,n,r)}finally{Ie=i,Ds.transition=o}}function r0(t,e,n,r){if(Qc){var i=Kp(t,e,n,r);if(i===null)Df(t,e,r,Xc,n),mv(t,r);else if(A6(i,t,e,n,r))r.stopPropagation();else if(mv(t,r),e&4&&-1<C6.indexOf(t)){for(;i!==null;){var o=lu(i);if(o!==null&&Sw(o),o=Kp(t,e,n,r),o===null&&Df(t,e,r,Xc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Df(t,e,r,null,n)}}var Xc=null;function Kp(t,e,n,r){if(Xc=null,t=Jg(r),t=Wi(t),t!==null)if(e=po(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xc=t,null}function Rw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v6()){case e0:return 1;case Ew:return 4;case Gc:case _6:return 16;case xw:return 536870912;default:return 16}default:return 16}}var qr=null,i0=null,kc=null;function bw(){if(kc)return kc;var t,e=i0,n=e.length,r,i="value"in qr?qr.value:qr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return kc=i.slice(t,1<r?1-r:void 0)}function wc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gu(){return!0}function yv(){return!1}function sn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Gu:yv,this.isPropagationStopped=yv,this}return Ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gu)},persist:function(){},isPersistent:Gu}),e}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},o0=sn(la),au=Ue({},la,{view:0,detail:0}),b6=sn(au),If,Sf,Fa,Jd=Ue({},au,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:s0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fa&&(Fa&&t.type==="mousemove"?(If=t.screenX-Fa.screenX,Sf=t.screenY-Fa.screenY):Sf=If=0,Fa=t),If)},movementY:function(t){return"movementY"in t?t.movementY:Sf}}),vv=sn(Jd),j6=Ue({},Jd,{dataTransfer:0}),D6=sn(j6),O6=Ue({},au,{relatedTarget:0}),Cf=sn(O6),N6=Ue({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),M6=sn(N6),V6=Ue({},la,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),F6=sn(V6),U6=Ue({},la,{data:0}),_v=sn(U6),W6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B6(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=z6[t])?!!e[t]:!1}function s0(){return B6}var H6=Ue({},au,{key:function(t){if(t.key){var e=W6[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$6[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:s0,charCode:function(t){return t.type==="keypress"?wc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),q6=sn(H6),Y6=Ue({},Jd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kv=sn(Y6),G6=Ue({},au,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:s0}),K6=sn(G6),Q6=Ue({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),X6=sn(Q6),Z6=Ue({},Jd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),J6=sn(Z6),eC=[9,13,27,32],a0=_r&&"CompositionEvent"in window,ul=null;_r&&"documentMode"in document&&(ul=document.documentMode);var tC=_r&&"TextEvent"in window&&!ul,jw=_r&&(!a0||ul&&8<ul&&11>=ul),wv=" ",Ev=!1;function Dw(t,e){switch(t){case"keyup":return eC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ow(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function nC(t,e){switch(t){case"compositionend":return Ow(e);case"keypress":return e.which!==32?null:(Ev=!0,wv);case"textInput":return t=e.data,t===wv&&Ev?null:t;default:return null}}function rC(t,e){if(vs)return t==="compositionend"||!a0&&Dw(t,e)?(t=bw(),kc=i0=qr=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jw&&e.locale!=="ko"?null:e.data;default:return null}}var iC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iC[t.type]:e==="textarea"}function Nw(t,e,n,r){fw(r),e=Zc(e,"onChange"),0<e.length&&(n=new o0("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var cl=null,bl=null;function oC(t){Yw(t,0)}function eh(t){var e=ws(t);if(sw(e))return t}function sC(t,e){if(t==="change")return e}var Mw=!1;if(_r){var Af;if(_r){var Lf="oninput"in document;if(!Lf){var Tv=document.createElement("div");Tv.setAttribute("oninput","return;"),Lf=typeof Tv.oninput=="function"}Af=Lf}else Af=!1;Mw=Af&&(!document.documentMode||9<document.documentMode)}function Iv(){cl&&(cl.detachEvent("onpropertychange",Vw),bl=cl=null)}function Vw(t){if(t.propertyName==="value"&&eh(bl)){var e=[];Nw(e,bl,t,Jg(t)),yw(oC,e)}}function aC(t,e,n){t==="focusin"?(Iv(),cl=e,bl=n,cl.attachEvent("onpropertychange",Vw)):t==="focusout"&&Iv()}function lC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eh(bl)}function uC(t,e){if(t==="click")return eh(e)}function cC(t,e){if(t==="input"||t==="change")return eh(e)}function dC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pn=typeof Object.is=="function"?Object.is:dC;function jl(t,e){if(Pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rp.call(e,i)||!Pn(t[i],e[i]))return!1}return!0}function Sv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cv(t,e){var n=Sv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sv(n)}}function Fw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uw(){for(var t=window,e=Hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hc(t.document)}return e}function l0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hC(t){var e=Uw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fw(n.ownerDocument.documentElement,n)){if(r!==null&&l0(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Cv(n,o);var s=Cv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fC=_r&&"documentMode"in document&&11>=document.documentMode,_s=null,Qp=null,dl=null,Xp=!1;function Av(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xp||_s==null||_s!==Hc(r)||(r=_s,"selectionStart"in r&&l0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dl&&jl(dl,r)||(dl=r,r=Zc(Qp,"onSelect"),0<r.length&&(e=new o0("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_s)))}function Ku(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ks={animationend:Ku("Animation","AnimationEnd"),animationiteration:Ku("Animation","AnimationIteration"),animationstart:Ku("Animation","AnimationStart"),transitionend:Ku("Transition","TransitionEnd")},Pf={},Ww={};_r&&(Ww=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function th(t){if(Pf[t])return Pf[t];if(!ks[t])return t;var e=ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ww)return Pf[t]=e[n];return t}var $w=th("animationend"),zw=th("animationiteration"),Bw=th("animationstart"),Hw=th("transitionend"),qw=new Map,Lv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _i(t,e){qw.set(t,e),fo(e,[t])}for(var Rf=0;Rf<Lv.length;Rf++){var bf=Lv[Rf],pC=bf.toLowerCase(),mC=bf[0].toUpperCase()+bf.slice(1);_i(pC,"on"+mC)}_i($w,"onAnimationEnd");_i(zw,"onAnimationIteration");_i(Bw,"onAnimationStart");_i("dblclick","onDoubleClick");_i("focusin","onFocus");_i("focusout","onBlur");_i(Hw,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);fo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fo("onBeforeInput",["compositionend","keypress","textInput","paste"]);fo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xa));function Pv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,p6(r,e,void 0,t),t.currentTarget=null}function Yw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Pv(i,a,d),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,d=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Pv(i,a,d),o=u}}}if(Yc)throw t=qp,Yc=!1,qp=null,t}function je(t,e){var n=e[nm];n===void 0&&(n=e[nm]=new Set);var r=t+"__bubble";n.has(r)||(Gw(e,t,2,!1),n.add(r))}function jf(t,e,n){var r=0;e&&(r|=4),Gw(n,t,r,e)}var Qu="_reactListening"+Math.random().toString(36).slice(2);function Dl(t){if(!t[Qu]){t[Qu]=!0,tw.forEach(function(n){n!=="selectionchange"&&(gC.has(n)||jf(n,!1,t),jf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qu]||(e[Qu]=!0,jf("selectionchange",!1,e))}}function Gw(t,e,n,r){switch(Rw(e)){case 1:var i=P6;break;case 4:i=R6;break;default:i=r0}n=i.bind(null,e,n,t),i=void 0,!Hp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Df(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Wi(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}yw(function(){var d=o,f=Jg(n),m=[];e:{var w=qw.get(t);if(w!==void 0){var _=o0,T=t;switch(t){case"keypress":if(wc(n)===0)break e;case"keydown":case"keyup":_=q6;break;case"focusin":T="focus",_=Cf;break;case"focusout":T="blur",_=Cf;break;case"beforeblur":case"afterblur":_=Cf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=vv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=D6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=K6;break;case $w:case zw:case Bw:_=M6;break;case Hw:_=X6;break;case"scroll":_=b6;break;case"wheel":_=J6;break;case"copy":case"cut":case"paste":_=F6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=kv}var A=(e&4)!==0,S=!A&&t==="scroll",y=A?w!==null?w+"Capture":null:w;A=[];for(var g=d,k;g!==null;){k=g;var I=k.stateNode;if(k.tag===5&&I!==null&&(k=I,y!==null&&(I=Al(g,y),I!=null&&A.push(Ol(g,I,k)))),S)break;g=g.return}0<A.length&&(w=new _(w,T,null,n,f),m.push({event:w,listeners:A}))}}if(!(e&7)){e:{if(w=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",w&&n!==zp&&(T=n.relatedTarget||n.fromElement)&&(Wi(T)||T[kr]))break e;if((_||w)&&(w=f.window===f?f:(w=f.ownerDocument)?w.defaultView||w.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=d,T=T?Wi(T):null,T!==null&&(S=po(T),T!==S||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=d),_!==T)){if(A=vv,I="onMouseLeave",y="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(A=kv,I="onPointerLeave",y="onPointerEnter",g="pointer"),S=_==null?w:ws(_),k=T==null?w:ws(T),w=new A(I,g+"leave",_,n,f),w.target=S,w.relatedTarget=k,I=null,Wi(f)===d&&(A=new A(y,g+"enter",T,n,f),A.target=k,A.relatedTarget=S,I=A),S=I,_&&T)t:{for(A=_,y=T,g=0,k=A;k;k=ns(k))g++;for(k=0,I=y;I;I=ns(I))k++;for(;0<g-k;)A=ns(A),g--;for(;0<k-g;)y=ns(y),k--;for(;g--;){if(A===y||y!==null&&A===y.alternate)break t;A=ns(A),y=ns(y)}A=null}else A=null;_!==null&&Rv(m,w,_,A,!1),T!==null&&S!==null&&Rv(m,S,T,A,!0)}}e:{if(w=d?ws(d):window,_=w.nodeName&&w.nodeName.toLowerCase(),_==="select"||_==="input"&&w.type==="file")var R=sC;else if(xv(w))if(Mw)R=cC;else{R=lC;var O=aC}else(_=w.nodeName)&&_.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(R=uC);if(R&&(R=R(t,d))){Nw(m,R,n,f);break e}O&&O(t,w,d),t==="focusout"&&(O=w._wrapperState)&&O.controlled&&w.type==="number"&&Vp(w,"number",w.value)}switch(O=d?ws(d):window,t){case"focusin":(xv(O)||O.contentEditable==="true")&&(_s=O,Qp=d,dl=null);break;case"focusout":dl=Qp=_s=null;break;case"mousedown":Xp=!0;break;case"contextmenu":case"mouseup":case"dragend":Xp=!1,Av(m,n,f);break;case"selectionchange":if(fC)break;case"keydown":case"keyup":Av(m,n,f)}var E;if(a0)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else vs?Dw(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(jw&&n.locale!=="ko"&&(vs||x!=="onCompositionStart"?x==="onCompositionEnd"&&vs&&(E=bw()):(qr=f,i0="value"in qr?qr.value:qr.textContent,vs=!0)),O=Zc(d,x),0<O.length&&(x=new _v(x,t,null,n,f),m.push({event:x,listeners:O}),E?x.data=E:(E=Ow(n),E!==null&&(x.data=E)))),(E=tC?nC(t,n):rC(t,n))&&(d=Zc(d,"onBeforeInput"),0<d.length&&(f=new _v("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=E))}Yw(m,e)})}function Ol(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Al(t,n),o!=null&&r.unshift(Ol(t,o,i)),o=Al(t,e),o!=null&&r.push(Ol(t,o,i))),t=t.return}return r}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rv(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,i?(u=Al(n,o),u!=null&&s.unshift(Ol(n,u,a))):i||(u=Al(n,o),u!=null&&s.push(Ol(n,u,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var yC=/\r\n?/g,vC=/\u0000|\uFFFD/g;function bv(t){return(typeof t=="string"?t:""+t).replace(yC,`
`).replace(vC,"")}function Xu(t,e,n){if(e=bv(e),bv(t)!==e&&n)throw Error(B(425))}function Jc(){}var Zp=null,Jp=null;function em(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tm=typeof setTimeout=="function"?setTimeout:void 0,_C=typeof clearTimeout=="function"?clearTimeout:void 0,jv=typeof Promise=="function"?Promise:void 0,kC=typeof queueMicrotask=="function"?queueMicrotask:typeof jv<"u"?function(t){return jv.resolve(null).then(t).catch(wC)}:tm;function wC(t){setTimeout(function(){throw t})}function Of(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Rl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Rl(e)}function ti(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ua=Math.random().toString(36).slice(2),Wn="__reactFiber$"+ua,Nl="__reactProps$"+ua,kr="__reactContainer$"+ua,nm="__reactEvents$"+ua,EC="__reactListeners$"+ua,xC="__reactHandles$"+ua;function Wi(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kr]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dv(t);t!==null;){if(n=t[Wn])return n;t=Dv(t)}return e}t=n,n=t.parentNode}return null}function lu(t){return t=t[Wn]||t[kr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function nh(t){return t[Nl]||null}var rm=[],Es=-1;function ki(t){return{current:t}}function Ne(t){0>Es||(t.current=rm[Es],rm[Es]=null,Es--)}function Re(t,e){Es++,rm[Es]=t.current,t.current=e}var pi={},At=ki(pi),Ht=ki(!1),Ji=pi;function $s(t,e){var n=t.type.contextTypes;if(!n)return pi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qt(t){return t=t.childContextTypes,t!=null}function ed(){Ne(Ht),Ne(At)}function Ov(t,e,n){if(At.current!==pi)throw Error(B(168));Re(At,e),Re(Ht,n)}function Kw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,a6(t)||"Unknown",i));return Ue({},n,r)}function td(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pi,Ji=At.current,Re(At,t),Re(Ht,Ht.current),!0}function Nv(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=Kw(t,e,Ji),r.__reactInternalMemoizedMergedChildContext=t,Ne(Ht),Ne(At),Re(At,t)):Ne(Ht),Re(Ht,n)}var lr=null,rh=!1,Nf=!1;function Qw(t){lr===null?lr=[t]:lr.push(t)}function TC(t){rh=!0,Qw(t)}function wi(){if(!Nf&&lr!==null){Nf=!0;var t=0,e=Ie;try{var n=lr;for(Ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}lr=null,rh=!1}catch(i){throw lr!==null&&(lr=lr.slice(t+1)),ww(e0,wi),i}finally{Ie=e,Nf=!1}}return null}var xs=[],Ts=0,nd=null,rd=0,ln=[],un=0,eo=null,cr=1,dr="";function Oi(t,e){xs[Ts++]=rd,xs[Ts++]=nd,nd=t,rd=e}function Xw(t,e,n){ln[un++]=cr,ln[un++]=dr,ln[un++]=eo,eo=t;var r=cr;t=dr;var i=32-Cn(r)-1;r&=~(1<<i),n+=1;var o=32-Cn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,cr=1<<32-Cn(e)+i|n<<i|r,dr=o+t}else cr=1<<o|n<<i|r,dr=t}function u0(t){t.return!==null&&(Oi(t,1),Xw(t,1,0))}function c0(t){for(;t===nd;)nd=xs[--Ts],xs[Ts]=null,rd=xs[--Ts],xs[Ts]=null;for(;t===eo;)eo=ln[--un],ln[un]=null,dr=ln[--un],ln[un]=null,cr=ln[--un],ln[un]=null}var tn=null,Jt=null,Me=!1,xn=null;function Zw(t,e){var n=cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Mv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tn=t,Jt=ti(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tn=t,Jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=eo!==null?{id:cr,overflow:dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tn=t,Jt=null,!0):!1;default:return!1}}function im(t){return(t.mode&1)!==0&&(t.flags&128)===0}function om(t){if(Me){var e=Jt;if(e){var n=e;if(!Mv(t,e)){if(im(t))throw Error(B(418));e=ti(n.nextSibling);var r=tn;e&&Mv(t,e)?Zw(r,n):(t.flags=t.flags&-4097|2,Me=!1,tn=t)}}else{if(im(t))throw Error(B(418));t.flags=t.flags&-4097|2,Me=!1,tn=t}}}function Vv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tn=t}function Zu(t){if(t!==tn)return!1;if(!Me)return Vv(t),Me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!em(t.type,t.memoizedProps)),e&&(e=Jt)){if(im(t))throw Jw(),Error(B(418));for(;e;)Zw(t,e),e=ti(e.nextSibling)}if(Vv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Jt=ti(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Jt=null}}else Jt=tn?ti(t.stateNode.nextSibling):null;return!0}function Jw(){for(var t=Jt;t;)t=ti(t.nextSibling)}function zs(){Jt=tn=null,Me=!1}function d0(t){xn===null?xn=[t]:xn.push(t)}var IC=Cr.ReactCurrentBatchConfig;function Ua(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Ju(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fv(t){var e=t._init;return e(t._payload)}function eE(t){function e(y,g){if(t){var k=y.deletions;k===null?(y.deletions=[g],y.flags|=16):k.push(g)}}function n(y,g){if(!t)return null;for(;g!==null;)e(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=oi(y,g),y.index=0,y.sibling=null,y}function o(y,g,k){return y.index=k,t?(k=y.alternate,k!==null?(k=k.index,k<g?(y.flags|=2,g):k):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,g,k,I){return g===null||g.tag!==6?(g=zf(k,y.mode,I),g.return=y,g):(g=i(g,k),g.return=y,g)}function u(y,g,k,I){var R=k.type;return R===ys?f(y,g,k.props.children,I,k.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fr&&Fv(R)===g.type)?(I=i(g,k.props),I.ref=Ua(y,g,k),I.return=y,I):(I=Ac(k.type,k.key,k.props,null,y.mode,I),I.ref=Ua(y,g,k),I.return=y,I)}function d(y,g,k,I){return g===null||g.tag!==4||g.stateNode.containerInfo!==k.containerInfo||g.stateNode.implementation!==k.implementation?(g=Bf(k,y.mode,I),g.return=y,g):(g=i(g,k.children||[]),g.return=y,g)}function f(y,g,k,I,R){return g===null||g.tag!==7?(g=Gi(k,y.mode,I,R),g.return=y,g):(g=i(g,k),g.return=y,g)}function m(y,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return g=zf(""+g,y.mode,k),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case $u:return k=Ac(g.type,g.key,g.props,null,y.mode,k),k.ref=Ua(y,null,g),k.return=y,k;case gs:return g=Bf(g,y.mode,k),g.return=y,g;case Fr:var I=g._init;return m(y,I(g._payload),k)}if(Ka(g)||Oa(g))return g=Gi(g,y.mode,k,null),g.return=y,g;Ju(y,g)}return null}function w(y,g,k,I){var R=g!==null?g.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return R!==null?null:a(y,g,""+k,I);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case $u:return k.key===R?u(y,g,k,I):null;case gs:return k.key===R?d(y,g,k,I):null;case Fr:return R=k._init,w(y,g,R(k._payload),I)}if(Ka(k)||Oa(k))return R!==null?null:f(y,g,k,I,null);Ju(y,k)}return null}function _(y,g,k,I,R){if(typeof I=="string"&&I!==""||typeof I=="number")return y=y.get(k)||null,a(g,y,""+I,R);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case $u:return y=y.get(I.key===null?k:I.key)||null,u(g,y,I,R);case gs:return y=y.get(I.key===null?k:I.key)||null,d(g,y,I,R);case Fr:var O=I._init;return _(y,g,k,O(I._payload),R)}if(Ka(I)||Oa(I))return y=y.get(k)||null,f(g,y,I,R,null);Ju(g,I)}return null}function T(y,g,k,I){for(var R=null,O=null,E=g,x=g=0,L=null;E!==null&&x<k.length;x++){E.index>x?(L=E,E=null):L=E.sibling;var j=w(y,E,k[x],I);if(j===null){E===null&&(E=L);break}t&&E&&j.alternate===null&&e(y,E),g=o(j,g,x),O===null?R=j:O.sibling=j,O=j,E=L}if(x===k.length)return n(y,E),Me&&Oi(y,x),R;if(E===null){for(;x<k.length;x++)E=m(y,k[x],I),E!==null&&(g=o(E,g,x),O===null?R=E:O.sibling=E,O=E);return Me&&Oi(y,x),R}for(E=r(y,E);x<k.length;x++)L=_(E,y,x,k[x],I),L!==null&&(t&&L.alternate!==null&&E.delete(L.key===null?x:L.key),g=o(L,g,x),O===null?R=L:O.sibling=L,O=L);return t&&E.forEach(function(b){return e(y,b)}),Me&&Oi(y,x),R}function A(y,g,k,I){var R=Oa(k);if(typeof R!="function")throw Error(B(150));if(k=R.call(k),k==null)throw Error(B(151));for(var O=R=null,E=g,x=g=0,L=null,j=k.next();E!==null&&!j.done;x++,j=k.next()){E.index>x?(L=E,E=null):L=E.sibling;var b=w(y,E,j.value,I);if(b===null){E===null&&(E=L);break}t&&E&&b.alternate===null&&e(y,E),g=o(b,g,x),O===null?R=b:O.sibling=b,O=b,E=L}if(j.done)return n(y,E),Me&&Oi(y,x),R;if(E===null){for(;!j.done;x++,j=k.next())j=m(y,j.value,I),j!==null&&(g=o(j,g,x),O===null?R=j:O.sibling=j,O=j);return Me&&Oi(y,x),R}for(E=r(y,E);!j.done;x++,j=k.next())j=_(E,y,x,j.value,I),j!==null&&(t&&j.alternate!==null&&E.delete(j.key===null?x:j.key),g=o(j,g,x),O===null?R=j:O.sibling=j,O=j);return t&&E.forEach(function(D){return e(y,D)}),Me&&Oi(y,x),R}function S(y,g,k,I){if(typeof k=="object"&&k!==null&&k.type===ys&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case $u:e:{for(var R=k.key,O=g;O!==null;){if(O.key===R){if(R=k.type,R===ys){if(O.tag===7){n(y,O.sibling),g=i(O,k.props.children),g.return=y,y=g;break e}}else if(O.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fr&&Fv(R)===O.type){n(y,O.sibling),g=i(O,k.props),g.ref=Ua(y,O,k),g.return=y,y=g;break e}n(y,O);break}else e(y,O);O=O.sibling}k.type===ys?(g=Gi(k.props.children,y.mode,I,k.key),g.return=y,y=g):(I=Ac(k.type,k.key,k.props,null,y.mode,I),I.ref=Ua(y,g,k),I.return=y,y=I)}return s(y);case gs:e:{for(O=k.key;g!==null;){if(g.key===O)if(g.tag===4&&g.stateNode.containerInfo===k.containerInfo&&g.stateNode.implementation===k.implementation){n(y,g.sibling),g=i(g,k.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else e(y,g);g=g.sibling}g=Bf(k,y.mode,I),g.return=y,y=g}return s(y);case Fr:return O=k._init,S(y,g,O(k._payload),I)}if(Ka(k))return T(y,g,k,I);if(Oa(k))return A(y,g,k,I);Ju(y,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,k),g.return=y,y=g):(n(y,g),g=zf(k,y.mode,I),g.return=y,y=g),s(y)):n(y,g)}return S}var Bs=eE(!0),tE=eE(!1),id=ki(null),od=null,Is=null,h0=null;function f0(){h0=Is=od=null}function p0(t){var e=id.current;Ne(id),t._currentValue=e}function sm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){od=t,h0=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function fn(t){var e=t._currentValue;if(h0!==t)if(t={context:t,memoizedValue:e,next:null},Is===null){if(od===null)throw Error(B(308));Is=t,od.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return e}var $i=null;function m0(t){$i===null?$i=[t]:$i.push(t)}function nE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,m0(e)):(n.next=i.next,i.next=n),e.interleaved=n,wr(t,r)}function wr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ur=!1;function g0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ni(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wr(t,n)}return i=r.interleaved,i===null?(e.next=e,m0(r)):(e.next=i.next,i.next=e),r.interleaved=e,wr(t,n)}function Ec(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,t0(t,n)}}function Uv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sd(t,e,n,r){var i=t.updateQueue;Ur=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,d=u.next;u.next=null,s===null?o=d:s.next=d,s=u;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=d:a.next=d,f.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;s=0,f=d=u=null,a=o;do{var w=a.lane,_=a.eventTime;if((r&w)===w){f!==null&&(f=f.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,A=a;switch(w=e,_=n,A.tag){case 1:if(T=A.payload,typeof T=="function"){m=T.call(_,m,w);break e}m=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=A.payload,w=typeof T=="function"?T.call(_,m,w):T,w==null)break e;m=Ue({},m,w);break e;case 2:Ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,w=i.effects,w===null?i.effects=[a]:w.push(a))}else _={eventTime:_,lane:w,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(d=f=_,u=m):f=f.next=_,s|=w;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;w=a,a=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);no|=s,t.lanes=s,t.memoizedState=m}}function Wv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var uu={},qn=ki(uu),Ml=ki(uu),Vl=ki(uu);function zi(t){if(t===uu)throw Error(B(174));return t}function y0(t,e){switch(Re(Vl,e),Re(Ml,t),Re(qn,uu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Up(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Up(e,t)}Ne(qn),Re(qn,e)}function Hs(){Ne(qn),Ne(Ml),Ne(Vl)}function iE(t){zi(Vl.current);var e=zi(qn.current),n=Up(e,t.type);e!==n&&(Re(Ml,t),Re(qn,n))}function v0(t){Ml.current===t&&(Ne(qn),Ne(Ml))}var Ve=ki(0);function ad(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mf=[];function _0(){for(var t=0;t<Mf.length;t++)Mf[t]._workInProgressVersionPrimary=null;Mf.length=0}var xc=Cr.ReactCurrentDispatcher,Vf=Cr.ReactCurrentBatchConfig,to=0,Fe=null,rt=null,st=null,ld=!1,hl=!1,Fl=0,SC=0;function Et(){throw Error(B(321))}function k0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pn(t[n],e[n]))return!1;return!0}function w0(t,e,n,r,i,o){if(to=o,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xc.current=t===null||t.memoizedState===null?PC:RC,t=n(r,i),hl){o=0;do{if(hl=!1,Fl=0,25<=o)throw Error(B(301));o+=1,st=rt=null,e.updateQueue=null,xc.current=bC,t=n(r,i)}while(hl)}if(xc.current=ud,e=rt!==null&&rt.next!==null,to=0,st=rt=Fe=null,ld=!1,e)throw Error(B(300));return t}function E0(){var t=Fl!==0;return Fl=0,t}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Fe.memoizedState=st=t:st=st.next=t,st}function pn(){if(rt===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=st===null?Fe.memoizedState:st.next;if(e!==null)st=e,rt=t;else{if(t===null)throw Error(B(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},st===null?Fe.memoizedState=st=t:st=st.next=t}return st}function Ul(t,e){return typeof e=="function"?e(t):e}function Ff(t){var e=pn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=rt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,d=o;do{var f=d.lane;if((to&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=m,s=r):u=u.next=m,Fe.lanes|=f,no|=f}d=d.next}while(d!==null&&d!==o);u===null?s=r:u.next=a,Pn(r,e.memoizedState)||($t=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Fe.lanes|=o,no|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uf(t){var e=pn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Pn(o,e.memoizedState)||($t=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function oE(){}function sE(t,e){var n=Fe,r=pn(),i=e(),o=!Pn(r.memoizedState,i);if(o&&(r.memoizedState=i,$t=!0),r=r.queue,x0(uE.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,Wl(9,lE.bind(null,n,r,i,e),void 0,null),lt===null)throw Error(B(349));to&30||aE(n,e,i)}return i}function aE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lE(t,e,n,r){e.value=n,e.getSnapshot=r,cE(e)&&dE(t)}function uE(t,e,n){return n(function(){cE(e)&&dE(t)})}function cE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pn(t,n)}catch{return!0}}function dE(t){var e=wr(t,1);e!==null&&An(e,t,1,-1)}function $v(t){var e=Fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ul,lastRenderedState:t},e.queue=t,t=t.dispatch=LC.bind(null,Fe,t),[e.memoizedState,t]}function Wl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function hE(){return pn().memoizedState}function Tc(t,e,n,r){var i=Fn();Fe.flags|=t,i.memoizedState=Wl(1|e,n,void 0,r===void 0?null:r)}function ih(t,e,n,r){var i=pn();r=r===void 0?null:r;var o=void 0;if(rt!==null){var s=rt.memoizedState;if(o=s.destroy,r!==null&&k0(r,s.deps)){i.memoizedState=Wl(e,n,o,r);return}}Fe.flags|=t,i.memoizedState=Wl(1|e,n,o,r)}function zv(t,e){return Tc(8390656,8,t,e)}function x0(t,e){return ih(2048,8,t,e)}function fE(t,e){return ih(4,2,t,e)}function pE(t,e){return ih(4,4,t,e)}function mE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gE(t,e,n){return n=n!=null?n.concat([t]):null,ih(4,4,mE.bind(null,e,t),n)}function T0(){}function yE(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&k0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function vE(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&k0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _E(t,e,n){return to&21?(Pn(n,e)||(n=Tw(),Fe.lanes|=n,no|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=n)}function CC(t,e){var n=Ie;Ie=n!==0&&4>n?n:4,t(!0);var r=Vf.transition;Vf.transition={};try{t(!1),e()}finally{Ie=n,Vf.transition=r}}function kE(){return pn().memoizedState}function AC(t,e,n){var r=ii(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wE(t))EE(e,n);else if(n=nE(t,e,n,r),n!==null){var i=Ot();An(n,t,r,i),xE(n,e,r)}}function LC(t,e,n){var r=ii(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wE(t))EE(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Pn(a,s)){var u=e.interleaved;u===null?(i.next=i,m0(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=nE(t,e,i,r),n!==null&&(i=Ot(),An(n,t,r,i),xE(n,e,r))}}function wE(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function EE(t,e){hl=ld=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,t0(t,n)}}var ud={readContext:fn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},PC={readContext:fn,useCallback:function(t,e){return Fn().memoizedState=[t,e===void 0?null:e],t},useContext:fn,useEffect:zv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tc(4194308,4,mE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tc(4,2,t,e)},useMemo:function(t,e){var n=Fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=AC.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=Fn();return t={current:t},e.memoizedState=t},useState:$v,useDebugValue:T0,useDeferredValue:function(t){return Fn().memoizedState=t},useTransition:function(){var t=$v(!1),e=t[0];return t=CC.bind(null,t[1]),Fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=Fn();if(Me){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),lt===null)throw Error(B(349));to&30||aE(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,zv(uE.bind(null,r,o,t),[t]),r.flags|=2048,Wl(9,lE.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Fn(),e=lt.identifierPrefix;if(Me){var n=dr,r=cr;n=(r&~(1<<32-Cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=SC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RC={readContext:fn,useCallback:yE,useContext:fn,useEffect:x0,useImperativeHandle:gE,useInsertionEffect:fE,useLayoutEffect:pE,useMemo:vE,useReducer:Ff,useRef:hE,useState:function(){return Ff(Ul)},useDebugValue:T0,useDeferredValue:function(t){var e=pn();return _E(e,rt.memoizedState,t)},useTransition:function(){var t=Ff(Ul)[0],e=pn().memoizedState;return[t,e]},useMutableSource:oE,useSyncExternalStore:sE,useId:kE,unstable_isNewReconciler:!1},bC={readContext:fn,useCallback:yE,useContext:fn,useEffect:x0,useImperativeHandle:gE,useInsertionEffect:fE,useLayoutEffect:pE,useMemo:vE,useReducer:Uf,useRef:hE,useState:function(){return Uf(Ul)},useDebugValue:T0,useDeferredValue:function(t){var e=pn();return rt===null?e.memoizedState=t:_E(e,rt.memoizedState,t)},useTransition:function(){var t=Uf(Ul)[0],e=pn().memoizedState;return[t,e]},useMutableSource:oE,useSyncExternalStore:sE,useId:kE,unstable_isNewReconciler:!1};function wn(t,e){if(t&&t.defaultProps){e=Ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function am(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var oh={isMounted:function(t){return(t=t._reactInternals)?po(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=ii(t),o=gr(r,i);o.payload=e,n!=null&&(o.callback=n),e=ni(t,o,i),e!==null&&(An(e,t,i,r),Ec(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=ii(t),o=gr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=ni(t,o,i),e!==null&&(An(e,t,i,r),Ec(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ot(),r=ii(t),i=gr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ni(t,i,r),e!==null&&(An(e,t,r,n),Ec(e,t,r))}};function Bv(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!jl(n,r)||!jl(i,o):!0}function TE(t,e,n){var r=!1,i=pi,o=e.contextType;return typeof o=="object"&&o!==null?o=fn(o):(i=qt(e)?Ji:At.current,r=e.contextTypes,o=(r=r!=null)?$s(t,i):pi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Hv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&oh.enqueueReplaceState(e,e.state,null)}function lm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},g0(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=fn(o):(o=qt(e)?Ji:At.current,i.context=$s(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(am(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&oh.enqueueReplaceState(i,i.state,null),sd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e){try{var n="",r=e;do n+=s6(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Wf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function um(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jC=typeof WeakMap=="function"?WeakMap:Map;function IE(t,e,n){n=gr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){dd||(dd=!0,_m=r),um(t,e)},n}function SE(t,e,n){n=gr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){um(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){um(t,e),typeof r!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function qv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new jC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=YC.bind(null,t,e,n),e.then(t,t))}function Yv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gr(-1,1),e.tag=2,ni(n,e,1))),n.lanes|=1),t)}var DC=Cr.ReactCurrentOwner,$t=!1;function jt(t,e,n,r){e.child=t===null?tE(e,null,n,r):Bs(e,t.child,n,r)}function Kv(t,e,n,r,i){n=n.render;var o=e.ref;return Os(e,i),r=w0(t,e,n,r,o,i),n=E0(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(Me&&n&&u0(e),e.flags|=1,jt(t,e,r,i),e.child)}function Qv(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!b0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,CE(t,e,o,r,i)):(t=Ac(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:jl,n(s,r)&&t.ref===e.ref)return Er(t,e,i)}return e.flags|=1,t=oi(o,r),t.ref=e.ref,t.return=e,e.child=t}function CE(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(jl(o,r)&&t.ref===e.ref)if($t=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,Er(t,e,i)}return cm(t,e,n,r,i)}function AE(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(Cs,Zt),Zt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(Cs,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Re(Cs,Zt),Zt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Re(Cs,Zt),Zt|=r;return jt(t,e,i,n),e.child}function LE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cm(t,e,n,r,i){var o=qt(n)?Ji:At.current;return o=$s(e,o),Os(e,i),n=w0(t,e,n,r,o,i),r=E0(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(Me&&r&&u0(e),e.flags|=1,jt(t,e,n,i),e.child)}function Xv(t,e,n,r,i){if(qt(n)){var o=!0;td(e)}else o=!1;if(Os(e,i),e.stateNode===null)Ic(t,e),TE(e,n,r),lm(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var u=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=fn(d):(d=qt(n)?Ji:At.current,d=$s(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==d)&&Hv(e,s,r,d),Ur=!1;var w=e.memoizedState;s.state=w,sd(e,r,s,i),u=e.memoizedState,a!==r||w!==u||Ht.current||Ur?(typeof f=="function"&&(am(e,n,f,r),u=e.memoizedState),(a=Ur||Bv(e,n,a,r,w,u,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,rE(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:wn(e.type,a),s.props=d,m=e.pendingProps,w=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=fn(u):(u=qt(n)?Ji:At.current,u=$s(e,u));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||w!==u)&&Hv(e,s,r,u),Ur=!1,w=e.memoizedState,s.state=w,sd(e,r,s,i);var T=e.memoizedState;a!==m||w!==T||Ht.current||Ur?(typeof _=="function"&&(am(e,n,_,r),T=e.memoizedState),(d=Ur||Bv(e,n,d,r,w,T,u)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,T,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,T,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),s.props=r,s.state=T,s.context=u,r=d):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),r=!1)}return dm(t,e,n,r,o,i)}function dm(t,e,n,r,i,o){LE(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Nv(e,n,!1),Er(t,e,o);r=e.stateNode,DC.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Bs(e,t.child,null,o),e.child=Bs(e,null,a,o)):jt(t,e,a,o),e.memoizedState=r.state,i&&Nv(e,n,!0),e.child}function PE(t){var e=t.stateNode;e.pendingContext?Ov(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ov(t,e.context,!1),y0(t,e.containerInfo)}function Zv(t,e,n,r,i){return zs(),d0(i),e.flags|=256,jt(t,e,n,r),e.child}var hm={dehydrated:null,treeContext:null,retryLane:0};function fm(t){return{baseLanes:t,cachePool:null,transitions:null}}function RE(t,e,n){var r=e.pendingProps,i=Ve.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Re(Ve,i&1),t===null)return om(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=lh(s,r,0,null),t=Gi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=fm(n),e.memoizedState=hm,t):I0(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return OC(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=oi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=oi(a,o):(o=Gi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?fm(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=hm,r}return o=t.child,t=o.sibling,r=oi(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function I0(t,e){return e=lh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ec(t,e,n,r){return r!==null&&d0(r),Bs(e,t.child,null,n),t=I0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function OC(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Wf(Error(B(422))),ec(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=lh({mode:"visible",children:r.children},i,0,null),o=Gi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Bs(e,t.child,null,s),e.child.memoizedState=fm(s),e.memoizedState=hm,o);if(!(e.mode&1))return ec(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(B(419)),r=Wf(o,r,void 0),ec(t,e,s,r)}if(a=(s&t.childLanes)!==0,$t||a){if(r=lt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wr(t,i),An(r,t,i,-1))}return R0(),r=Wf(Error(B(421))),ec(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=GC.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Jt=ti(i.nextSibling),tn=e,Me=!0,xn=null,t!==null&&(ln[un++]=cr,ln[un++]=dr,ln[un++]=eo,cr=t.id,dr=t.overflow,eo=e),e=I0(e,r.children),e.flags|=4096,e)}function Jv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),sm(t.return,e,n)}function $f(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function bE(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(jt(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jv(t,n,e);else if(t.tag===19)Jv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ad(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$f(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ad(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$f(e,!0,n,null,o);break;case"together":$f(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ic(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),no|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=oi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=oi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function NC(t,e,n){switch(e.tag){case 3:PE(e),zs();break;case 5:iE(e);break;case 1:qt(e.type)&&td(e);break;case 4:y0(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Re(id,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?RE(t,e,n):(Re(Ve,Ve.current&1),t=Er(t,e,n),t!==null?t.sibling:null);Re(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return bE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Re(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,AE(t,e,n)}return Er(t,e,n)}var jE,pm,DE,OE;jE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pm=function(){};DE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zi(qn.current);var o=null;switch(n){case"input":i=Np(t,i),r=Np(t,r),o=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),o=[];break;case"textarea":i=Fp(t,i),r=Fp(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Jc)}Wp(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Sl.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Sl.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&je("scroll",t),o||a===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};OE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Wa(t,e){if(!Me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function MC(t,e,n){var r=e.pendingProps;switch(c0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(e),null;case 1:return qt(e.type)&&ed(),xt(e),null;case 3:return r=e.stateNode,Hs(),Ne(Ht),Ne(At),_0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xn!==null&&(Em(xn),xn=null))),pm(t,e),xt(e),null;case 5:v0(e);var i=zi(Vl.current);if(n=e.type,t!==null&&e.stateNode!=null)DE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return xt(e),null}if(t=zi(qn.current),Zu(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Wn]=e,r[Nl]=o,t=(e.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<Xa.length;i++)je(Xa[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":lv(r,o),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},je("invalid",r);break;case"textarea":cv(r,o),je("invalid",r)}Wp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Xu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Xu(r.textContent,a,t),i=["children",""+a]):Sl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&je("scroll",r)}switch(n){case"input":zu(r),uv(r,o,!0);break;case"textarea":zu(r),dv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Jc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=uw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Wn]=e,t[Nl]=r,jE(t,e,!1,!1),e.stateNode=t;e:{switch(s=$p(n,r),n){case"dialog":je("cancel",t),je("close",t),i=r;break;case"iframe":case"object":case"embed":je("load",t),i=r;break;case"video":case"audio":for(i=0;i<Xa.length;i++)je(Xa[i],t);i=r;break;case"source":je("error",t),i=r;break;case"img":case"image":case"link":je("error",t),je("load",t),i=r;break;case"details":je("toggle",t),i=r;break;case"input":lv(t,r),i=Np(t,r),je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ue({},r,{value:void 0}),je("invalid",t);break;case"textarea":cv(t,r),i=Fp(t,r),je("invalid",t);break;default:i=r}Wp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?hw(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&cw(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Cl(t,u):typeof u=="number"&&Cl(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Sl.hasOwnProperty(o)?u!=null&&o==="onScroll"&&je("scroll",t):u!=null&&Kg(t,o,u,s))}switch(n){case"input":zu(t),uv(t,r,!1);break;case"textarea":zu(t),dv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Rs(t,!!r.multiple,o,!1):r.defaultValue!=null&&Rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Jc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xt(e),null;case 6:if(t&&e.stateNode!=null)OE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=zi(Vl.current),zi(qn.current),Zu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wn]=e,(o=r.nodeValue!==n)&&(t=tn,t!==null))switch(t.tag){case 3:Xu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xu(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wn]=e,e.stateNode=r}return xt(e),null;case 13:if(Ne(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Me&&Jt!==null&&e.mode&1&&!(e.flags&128))Jw(),zs(),e.flags|=98560,o=!1;else if(o=Zu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(B(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[Wn]=e}else zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xt(e),o=!1}else xn!==null&&(Em(xn),xn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?it===0&&(it=3):R0())),e.updateQueue!==null&&(e.flags|=4),xt(e),null);case 4:return Hs(),pm(t,e),t===null&&Dl(e.stateNode.containerInfo),xt(e),null;case 10:return p0(e.type._context),xt(e),null;case 17:return qt(e.type)&&ed(),xt(e),null;case 19:if(Ne(Ve),o=e.memoizedState,o===null)return xt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Wa(o,!1);else{if(it!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ad(t),s!==null){for(e.flags|=128,Wa(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re(Ve,Ve.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ke()>Ys&&(e.flags|=128,r=!0,Wa(o,!1),e.lanes=4194304)}else{if(!r)if(t=ad(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Me)return xt(e),null}else 2*Ke()-o.renderingStartTime>Ys&&n!==1073741824&&(e.flags|=128,r=!0,Wa(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ke(),e.sibling=null,n=Ve.current,Re(Ve,r?n&1|2:n&1),e):(xt(e),null);case 22:case 23:return P0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(xt(e),e.subtreeFlags&6&&(e.flags|=8192)):xt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function VC(t,e){switch(c0(e),e.tag){case 1:return qt(e.type)&&ed(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),Ne(Ht),Ne(At),_0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return v0(e),null;case 13:if(Ne(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ne(Ve),null;case 4:return Hs(),null;case 10:return p0(e.type._context),null;case 22:case 23:return P0(),null;case 24:return null;default:return null}}var tc=!1,St=!1,FC=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){He(t,e,r)}else n.current=null}function mm(t,e,n){try{n()}catch(r){He(t,e,r)}}var e_=!1;function UC(t,e){if(Zp=Qc,t=Uw(),l0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,d=0,f=0,m=t,w=null;t:for(;;){for(var _;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(u=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(_=m.firstChild)!==null;)w=m,m=_;for(;;){if(m===t)break t;if(w===n&&++d===i&&(a=s),w===o&&++f===r&&(u=s),(_=m.nextSibling)!==null)break;m=w,w=m.parentNode}m=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jp={focusedElem:t,selectionRange:n},Qc=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var A=T.memoizedProps,S=T.memoizedState,y=e.stateNode,g=y.getSnapshotBeforeUpdate(e.elementType===e.type?A:wn(e.type,A),S);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(I){He(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return T=e_,e_=!1,T}function fl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&mm(e,n,o)}i=i.next}while(i!==r)}}function sh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function NE(t){var e=t.alternate;e!==null&&(t.alternate=null,NE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[Nl],delete e[nm],delete e[EC],delete e[xC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ME(t){return t.tag===5||t.tag===3||t.tag===4}function t_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ME(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ym(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jc));else if(r!==4&&(t=t.child,t!==null))for(ym(t,e,n),t=t.sibling;t!==null;)ym(t,e,n),t=t.sibling}function vm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vm(t,e,n),t=t.sibling;t!==null;)vm(t,e,n),t=t.sibling}var ct=null,En=!1;function br(t,e,n){for(n=n.child;n!==null;)VE(t,e,n),n=n.sibling}function VE(t,e,n){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(Zd,n)}catch{}switch(n.tag){case 5:St||Ss(n,e);case 6:var r=ct,i=En;ct=null,br(t,e,n),ct=r,En=i,ct!==null&&(En?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(En?(t=ct,n=n.stateNode,t.nodeType===8?Of(t.parentNode,n):t.nodeType===1&&Of(t,n),Rl(t)):Of(ct,n.stateNode));break;case 4:r=ct,i=En,ct=n.stateNode.containerInfo,En=!0,br(t,e,n),ct=r,En=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&mm(n,e,s),i=i.next}while(i!==r)}br(t,e,n);break;case 1:if(!St&&(Ss(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){He(n,e,a)}br(t,e,n);break;case 21:br(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,br(t,e,n),St=r):br(t,e,n);break;default:br(t,e,n)}}function n_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new FC),e.forEach(function(r){var i=KC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _n(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,En=!1;break e;case 3:ct=a.stateNode.containerInfo,En=!0;break e;case 4:ct=a.stateNode.containerInfo,En=!0;break e}a=a.return}if(ct===null)throw Error(B(160));VE(o,s,i),ct=null,En=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){He(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)FE(e,t),e=e.sibling}function FE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_n(e,t),Nn(t),r&4){try{fl(3,t,t.return),sh(3,t)}catch(A){He(t,t.return,A)}try{fl(5,t,t.return)}catch(A){He(t,t.return,A)}}break;case 1:_n(e,t),Nn(t),r&512&&n!==null&&Ss(n,n.return);break;case 5:if(_n(e,t),Nn(t),r&512&&n!==null&&Ss(n,n.return),t.flags&32){var i=t.stateNode;try{Cl(i,"")}catch(A){He(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&aw(i,o),$p(a,s);var d=$p(a,o);for(s=0;s<u.length;s+=2){var f=u[s],m=u[s+1];f==="style"?hw(i,m):f==="dangerouslySetInnerHTML"?cw(i,m):f==="children"?Cl(i,m):Kg(i,f,m,d)}switch(a){case"input":Mp(i,o);break;case"textarea":lw(i,o);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var _=o.value;_!=null?Rs(i,!!o.multiple,_,!1):w!==!!o.multiple&&(o.defaultValue!=null?Rs(i,!!o.multiple,o.defaultValue,!0):Rs(i,!!o.multiple,o.multiple?[]:"",!1))}i[Nl]=o}catch(A){He(t,t.return,A)}}break;case 6:if(_n(e,t),Nn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(A){He(t,t.return,A)}}break;case 3:if(_n(e,t),Nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Rl(e.containerInfo)}catch(A){He(t,t.return,A)}break;case 4:_n(e,t),Nn(t);break;case 13:_n(e,t),Nn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(A0=Ke())),r&4&&n_(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(St=(d=St)||f,_n(e,t),St=d):_n(e,t),Nn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(m=Q=f;Q!==null;){switch(w=Q,_=w.child,w.tag){case 0:case 11:case 14:case 15:fl(4,w,w.return);break;case 1:Ss(w,w.return);var T=w.stateNode;if(typeof T.componentWillUnmount=="function"){r=w,n=w.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(A){He(r,n,A)}}break;case 5:Ss(w,w.return);break;case 22:if(w.memoizedState!==null){i_(m);continue}}_!==null?(_.return=w,Q=_):i_(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=dw("display",s))}catch(A){He(t,t.return,A)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(A){He(t,t.return,A)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:_n(e,t),Nn(t),r&4&&n_(t);break;case 21:break;default:_n(e,t),Nn(t)}}function Nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ME(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Cl(i,""),r.flags&=-33);var o=t_(t);vm(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=t_(t);ym(t,a,s);break;default:throw Error(B(161))}}catch(u){He(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WC(t,e,n){Q=t,UE(t)}function UE(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||tc;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||St;a=tc;var d=St;if(tc=s,(St=u)&&!d)for(Q=i;Q!==null;)s=Q,u=s.child,s.tag===22&&s.memoizedState!==null?o_(i):u!==null?(u.return=s,Q=u):o_(i);for(;o!==null;)Q=o,UE(o),o=o.sibling;Q=i,tc=a,St=d}r_(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Q=o):r_(t)}}function r_(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||sh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:wn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Wv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wv(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Rl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}St||e.flags&512&&gm(e)}catch(w){He(e,e.return,w)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function i_(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function o_(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sh(4,e)}catch(u){He(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){He(e,i,u)}}var o=e.return;try{gm(e)}catch(u){He(e,o,u)}break;case 5:var s=e.return;try{gm(e)}catch(u){He(e,s,u)}}}catch(u){He(e,e.return,u)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var $C=Math.ceil,cd=Cr.ReactCurrentDispatcher,S0=Cr.ReactCurrentOwner,dn=Cr.ReactCurrentBatchConfig,_e=0,lt=null,et=null,pt=0,Zt=0,Cs=ki(0),it=0,$l=null,no=0,ah=0,C0=0,pl=null,Ut=null,A0=0,Ys=1/0,sr=null,dd=!1,_m=null,ri=null,nc=!1,Yr=null,hd=0,ml=0,km=null,Sc=-1,Cc=0;function Ot(){return _e&6?Ke():Sc!==-1?Sc:Sc=Ke()}function ii(t){return t.mode&1?_e&2&&pt!==0?pt&-pt:IC.transition!==null?(Cc===0&&(Cc=Tw()),Cc):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:Rw(t.type)),t):1}function An(t,e,n,r){if(50<ml)throw ml=0,km=null,Error(B(185));su(t,n,r),(!(_e&2)||t!==lt)&&(t===lt&&(!(_e&2)&&(ah|=n),it===4&&$r(t,pt)),Yt(t,r),n===1&&_e===0&&!(e.mode&1)&&(Ys=Ke()+500,rh&&wi()))}function Yt(t,e){var n=t.callbackNode;I6(t,e);var r=Kc(t,t===lt?pt:0);if(r===0)n!==null&&pv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pv(n),e===1)t.tag===0?TC(s_.bind(null,t)):Qw(s_.bind(null,t)),kC(function(){!(_e&6)&&wi()}),n=null;else{switch(Iw(r)){case 1:n=e0;break;case 4:n=Ew;break;case 16:n=Gc;break;case 536870912:n=xw;break;default:n=Gc}n=GE(n,WE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function WE(t,e){if(Sc=-1,Cc=0,_e&6)throw Error(B(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var r=Kc(t,t===lt?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fd(t,r);else{e=r;var i=_e;_e|=2;var o=zE();(lt!==t||pt!==e)&&(sr=null,Ys=Ke()+500,Yi(t,e));do try{HC();break}catch(a){$E(t,a)}while(!0);f0(),cd.current=o,_e=i,et!==null?e=0:(lt=null,pt=0,e=it)}if(e!==0){if(e===2&&(i=Yp(t),i!==0&&(r=i,e=wm(t,i))),e===1)throw n=$l,Yi(t,0),$r(t,r),Yt(t,Ke()),n;if(e===6)$r(t,r);else{if(i=t.current.alternate,!(r&30)&&!zC(i)&&(e=fd(t,r),e===2&&(o=Yp(t),o!==0&&(r=o,e=wm(t,o))),e===1))throw n=$l,Yi(t,0),$r(t,r),Yt(t,Ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Ni(t,Ut,sr);break;case 3:if($r(t,r),(r&130023424)===r&&(e=A0+500-Ke(),10<e)){if(Kc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=tm(Ni.bind(null,t,Ut,sr),e);break}Ni(t,Ut,sr);break;case 4:if($r(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Cn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$C(r/1960))-r,10<r){t.timeoutHandle=tm(Ni.bind(null,t,Ut,sr),r);break}Ni(t,Ut,sr);break;case 5:Ni(t,Ut,sr);break;default:throw Error(B(329))}}}return Yt(t,Ke()),t.callbackNode===n?WE.bind(null,t):null}function wm(t,e){var n=pl;return t.current.memoizedState.isDehydrated&&(Yi(t,e).flags|=256),t=fd(t,e),t!==2&&(e=Ut,Ut=n,e!==null&&Em(e)),t}function Em(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function zC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Pn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $r(t,e){for(e&=~C0,e&=~ah,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Cn(e),r=1<<n;t[n]=-1,e&=~r}}function s_(t){if(_e&6)throw Error(B(327));Ns();var e=Kc(t,0);if(!(e&1))return Yt(t,Ke()),null;var n=fd(t,e);if(t.tag!==0&&n===2){var r=Yp(t);r!==0&&(e=r,n=wm(t,r))}if(n===1)throw n=$l,Yi(t,0),$r(t,e),Yt(t,Ke()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ni(t,Ut,sr),Yt(t,Ke()),null}function L0(t,e){var n=_e;_e|=1;try{return t(e)}finally{_e=n,_e===0&&(Ys=Ke()+500,rh&&wi())}}function ro(t){Yr!==null&&Yr.tag===0&&!(_e&6)&&Ns();var e=_e;_e|=1;var n=dn.transition,r=Ie;try{if(dn.transition=null,Ie=1,t)return t()}finally{Ie=r,dn.transition=n,_e=e,!(_e&6)&&wi()}}function P0(){Zt=Cs.current,Ne(Cs)}function Yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_C(n)),et!==null)for(n=et.return;n!==null;){var r=n;switch(c0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ed();break;case 3:Hs(),Ne(Ht),Ne(At),_0();break;case 5:v0(r);break;case 4:Hs();break;case 13:Ne(Ve);break;case 19:Ne(Ve);break;case 10:p0(r.type._context);break;case 22:case 23:P0()}n=n.return}if(lt=t,et=t=oi(t.current,null),pt=Zt=e,it=0,$l=null,C0=ah=no=0,Ut=pl=null,$i!==null){for(e=0;e<$i.length;e++)if(n=$i[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}$i=null}return t}function $E(t,e){do{var n=et;try{if(f0(),xc.current=ud,ld){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ld=!1}if(to=0,st=rt=Fe=null,hl=!1,Fl=0,S0.current=null,n===null||n.return===null){it=1,$l=e,et=null;break}e:{var o=t,s=n.return,a=n,u=e;if(e=pt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var w=f.alternate;w?(f.updateQueue=w.updateQueue,f.memoizedState=w.memoizedState,f.lanes=w.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=Yv(s);if(_!==null){_.flags&=-257,Gv(_,s,a,o,e),_.mode&1&&qv(o,d,e),e=_,u=d;var T=e.updateQueue;if(T===null){var A=new Set;A.add(u),e.updateQueue=A}else T.add(u);break e}else{if(!(e&1)){qv(o,d,e),R0();break e}u=Error(B(426))}}else if(Me&&a.mode&1){var S=Yv(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Gv(S,s,a,o,e),d0(qs(u,a));break e}}o=u=qs(u,a),it!==4&&(it=2),pl===null?pl=[o]:pl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var y=IE(o,u,e);Uv(o,y);break e;case 1:a=u;var g=o.type,k=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(ri===null||!ri.has(k)))){o.flags|=65536,e&=-e,o.lanes|=e;var I=SE(o,a,e);Uv(o,I);break e}}o=o.return}while(o!==null)}HE(n)}catch(R){e=R,et===n&&n!==null&&(et=n=n.return);continue}break}while(!0)}function zE(){var t=cd.current;return cd.current=ud,t===null?ud:t}function R0(){(it===0||it===3||it===2)&&(it=4),lt===null||!(no&268435455)&&!(ah&268435455)||$r(lt,pt)}function fd(t,e){var n=_e;_e|=2;var r=zE();(lt!==t||pt!==e)&&(sr=null,Yi(t,e));do try{BC();break}catch(i){$E(t,i)}while(!0);if(f0(),_e=n,cd.current=r,et!==null)throw Error(B(261));return lt=null,pt=0,it}function BC(){for(;et!==null;)BE(et)}function HC(){for(;et!==null&&!g6();)BE(et)}function BE(t){var e=YE(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?HE(t):et=e,S0.current=null}function HE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=VC(n,e),n!==null){n.flags&=32767,et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{it=6,et=null;return}}else if(n=MC(n,e,Zt),n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);it===0&&(it=5)}function Ni(t,e,n){var r=Ie,i=dn.transition;try{dn.transition=null,Ie=1,qC(t,e,n,r)}finally{dn.transition=i,Ie=r}return null}function qC(t,e,n,r){do Ns();while(Yr!==null);if(_e&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(S6(t,o),t===lt&&(et=lt=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nc||(nc=!0,GE(Gc,function(){return Ns(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=dn.transition,dn.transition=null;var s=Ie;Ie=1;var a=_e;_e|=4,S0.current=null,UC(t,n),FE(n,t),hC(Jp),Qc=!!Zp,Jp=Zp=null,t.current=n,WC(n),y6(),_e=a,Ie=s,dn.transition=o}else t.current=n;if(nc&&(nc=!1,Yr=t,hd=i),o=t.pendingLanes,o===0&&(ri=null),k6(n.stateNode),Yt(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(dd)throw dd=!1,t=_m,_m=null,t;return hd&1&&t.tag!==0&&Ns(),o=t.pendingLanes,o&1?t===km?ml++:(ml=0,km=t):ml=0,wi(),null}function Ns(){if(Yr!==null){var t=Iw(hd),e=dn.transition,n=Ie;try{if(dn.transition=null,Ie=16>t?16:t,Yr===null)var r=!1;else{if(t=Yr,Yr=null,hd=0,_e&6)throw Error(B(331));var i=_e;for(_e|=4,Q=t.current;Q!==null;){var o=Q,s=o.child;if(Q.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(Q=d;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:fl(8,f,o)}var m=f.child;if(m!==null)m.return=f,Q=m;else for(;Q!==null;){f=Q;var w=f.sibling,_=f.return;if(NE(f),f===d){Q=null;break}if(w!==null){w.return=_,Q=w;break}Q=_}}}var T=o.alternate;if(T!==null){var A=T.child;if(A!==null){T.child=null;do{var S=A.sibling;A.sibling=null,A=S}while(A!==null)}}Q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Q=s;else e:for(;Q!==null;){if(o=Q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:fl(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,Q=y;break e}Q=o.return}}var g=t.current;for(Q=g;Q!==null;){s=Q;var k=s.child;if(s.subtreeFlags&2064&&k!==null)k.return=s,Q=k;else e:for(s=g;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sh(9,a)}}catch(R){He(a,a.return,R)}if(a===s){Q=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,Q=I;break e}Q=a.return}}if(_e=i,wi(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(Zd,t)}catch{}r=!0}return r}finally{Ie=n,dn.transition=e}}return!1}function a_(t,e,n){e=qs(n,e),e=IE(t,e,1),t=ni(t,e,1),e=Ot(),t!==null&&(su(t,1,e),Yt(t,e))}function He(t,e,n){if(t.tag===3)a_(t,t,n);else for(;e!==null;){if(e.tag===3){a_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ri===null||!ri.has(r))){t=qs(n,t),t=SE(e,t,1),e=ni(e,t,1),t=Ot(),e!==null&&(su(e,1,t),Yt(e,t));break}}e=e.return}}function YC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ot(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(pt&n)===n&&(it===4||it===3&&(pt&130023424)===pt&&500>Ke()-A0?Yi(t,0):C0|=n),Yt(t,e)}function qE(t,e){e===0&&(t.mode&1?(e=qu,qu<<=1,!(qu&130023424)&&(qu=4194304)):e=1);var n=Ot();t=wr(t,e),t!==null&&(su(t,e,n),Yt(t,n))}function GC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qE(t,n)}function KC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),qE(t,n)}var YE;YE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ht.current)$t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $t=!1,NC(t,e,n);$t=!!(t.flags&131072)}else $t=!1,Me&&e.flags&1048576&&Xw(e,rd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ic(t,e),t=e.pendingProps;var i=$s(e,At.current);Os(e,n),i=w0(null,e,r,t,i,n);var o=E0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(o=!0,td(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,g0(e),i.updater=oh,e.stateNode=i,i._reactInternals=e,lm(e,r,t,n),e=dm(null,e,r,!0,o,n)):(e.tag=0,Me&&o&&u0(e),jt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ic(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=XC(r),t=wn(r,t),i){case 0:e=cm(null,e,r,t,n);break e;case 1:e=Xv(null,e,r,t,n);break e;case 11:e=Kv(null,e,r,t,n);break e;case 14:e=Qv(null,e,r,wn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),cm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),Xv(t,e,r,i,n);case 3:e:{if(PE(e),t===null)throw Error(B(387));r=e.pendingProps,o=e.memoizedState,i=o.element,rE(t,e),sd(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=qs(Error(B(423)),e),e=Zv(t,e,r,n,i);break e}else if(r!==i){i=qs(Error(B(424)),e),e=Zv(t,e,r,n,i);break e}else for(Jt=ti(e.stateNode.containerInfo.firstChild),tn=e,Me=!0,xn=null,n=tE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zs(),r===i){e=Er(t,e,n);break e}jt(t,e,r,n)}e=e.child}return e;case 5:return iE(e),t===null&&om(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,em(r,i)?s=null:o!==null&&em(r,o)&&(e.flags|=32),LE(t,e),jt(t,e,s,n),e.child;case 6:return t===null&&om(e),null;case 13:return RE(t,e,n);case 4:return y0(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bs(e,null,r,n):jt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),Kv(t,e,r,i,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Re(id,r._currentValue),r._currentValue=s,o!==null)if(Pn(o.value,s)){if(o.children===i.children&&!Ht.current){e=Er(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=gr(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),sm(o.return,n,e),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(B(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),sm(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}jt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Os(e,n),i=fn(i),r=r(i),e.flags|=1,jt(t,e,r,n),e.child;case 14:return r=e.type,i=wn(r,e.pendingProps),i=wn(r.type,i),Qv(t,e,r,i,n);case 15:return CE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),Ic(t,e),e.tag=1,qt(r)?(t=!0,td(e)):t=!1,Os(e,n),TE(e,r,i),lm(e,r,i,n),dm(null,e,r,!0,t,n);case 19:return bE(t,e,n);case 22:return AE(t,e,n)}throw Error(B(156,e.tag))};function GE(t,e){return ww(t,e)}function QC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(t,e,n,r){return new QC(t,e,n,r)}function b0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function XC(t){if(typeof t=="function")return b0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xg)return 11;if(t===Zg)return 14}return 2}function oi(t,e){var n=t.alternate;return n===null?(n=cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ac(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")b0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ys:return Gi(n.children,i,o,e);case Qg:s=8,i|=8;break;case bp:return t=cn(12,n,e,i|2),t.elementType=bp,t.lanes=o,t;case jp:return t=cn(13,n,e,i),t.elementType=jp,t.lanes=o,t;case Dp:return t=cn(19,n,e,i),t.elementType=Dp,t.lanes=o,t;case iw:return lh(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case nw:s=10;break e;case rw:s=9;break e;case Xg:s=11;break e;case Zg:s=14;break e;case Fr:s=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=cn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Gi(t,e,n,r){return t=cn(7,t,r,e),t.lanes=n,t}function lh(t,e,n,r){return t=cn(22,t,r,e),t.elementType=iw,t.lanes=n,t.stateNode={isHidden:!1},t}function zf(t,e,n){return t=cn(6,t,null,e),t.lanes=n,t}function Bf(t,e,n){return e=cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tf(0),this.expirationTimes=Tf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function j0(t,e,n,r,i,o,s,a,u){return t=new ZC(t,e,n,a,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=cn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},g0(o),t}function JC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function KE(t){if(!t)return pi;t=t._reactInternals;e:{if(po(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(qt(n))return Kw(t,n,e)}return e}function QE(t,e,n,r,i,o,s,a,u){return t=j0(n,r,!0,t,i,o,s,a,u),t.context=KE(null),n=t.current,r=Ot(),i=ii(n),o=gr(r,i),o.callback=e??null,ni(n,o,i),t.current.lanes=i,su(t,i,r),Yt(t,r),t}function uh(t,e,n,r){var i=e.current,o=Ot(),s=ii(i);return n=KE(n),e.context===null?e.context=n:e.pendingContext=n,e=gr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ni(i,e,s),t!==null&&(An(t,i,s,o),Ec(t,i,s)),s}function pd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function l_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function D0(t,e){l_(t,e),(t=t.alternate)&&l_(t,e)}function e4(){return null}var XE=typeof reportError=="function"?reportError:function(t){console.error(t)};function O0(t){this._internalRoot=t}ch.prototype.render=O0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));uh(t,e,null,null)};ch.prototype.unmount=O0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ro(function(){uh(null,t,null,null)}),e[kr]=null}};function ch(t){this._internalRoot=t}ch.prototype.unstable_scheduleHydration=function(t){if(t){var e=Aw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wr.length&&e!==0&&e<Wr[n].priority;n++);Wr.splice(n,0,t),n===0&&Pw(t)}};function N0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function u_(){}function t4(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=pd(s);o.call(d)}}var s=QE(e,r,t,0,null,!1,!1,"",u_);return t._reactRootContainer=s,t[kr]=s.current,Dl(t.nodeType===8?t.parentNode:t),ro(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=pd(u);a.call(d)}}var u=j0(t,0,!1,null,null,!1,!1,"",u_);return t._reactRootContainer=u,t[kr]=u.current,Dl(t.nodeType===8?t.parentNode:t),ro(function(){uh(e,u,n,r)}),u}function hh(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=pd(s);a.call(u)}}uh(e,s,t,i)}else s=t4(n,e,t,i,r);return pd(s)}Sw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qa(e.pendingLanes);n!==0&&(t0(e,n|1),Yt(e,Ke()),!(_e&6)&&(Ys=Ke()+500,wi()))}break;case 13:ro(function(){var r=wr(t,1);if(r!==null){var i=Ot();An(r,t,1,i)}}),D0(t,1)}};n0=function(t){if(t.tag===13){var e=wr(t,134217728);if(e!==null){var n=Ot();An(e,t,134217728,n)}D0(t,134217728)}};Cw=function(t){if(t.tag===13){var e=ii(t),n=wr(t,e);if(n!==null){var r=Ot();An(n,t,e,r)}D0(t,e)}};Aw=function(){return Ie};Lw=function(t,e){var n=Ie;try{return Ie=t,e()}finally{Ie=n}};Bp=function(t,e,n){switch(e){case"input":if(Mp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nh(r);if(!i)throw Error(B(90));sw(r),Mp(r,i)}}}break;case"textarea":lw(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};mw=L0;gw=ro;var n4={usingClientEntryPoint:!1,Events:[lu,ws,nh,fw,pw,L0]},$a={findFiberByHostInstance:Wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},r4={bundleType:$a.bundleType,version:$a.version,rendererPackageName:$a.rendererPackageName,rendererConfig:$a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_w(t),t===null?null:t.stateNode},findFiberByHostInstance:$a.findFiberByHostInstance||e4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{Zd=rc.inject(r4),Hn=rc}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n4;on.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!N0(e))throw Error(B(200));return JC(t,e,null,n)};on.createRoot=function(t,e){if(!N0(t))throw Error(B(299));var n=!1,r="",i=XE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=j0(t,1,!1,null,null,n,!1,r,i),t[kr]=e.current,Dl(t.nodeType===8?t.parentNode:t),new O0(e)};on.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=_w(e),t=t===null?null:t.stateNode,t};on.flushSync=function(t){return ro(t)};on.hydrate=function(t,e,n){if(!dh(e))throw Error(B(200));return hh(null,t,e,!0,n)};on.hydrateRoot=function(t,e,n){if(!N0(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=XE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=QE(e,null,t,1,n??null,i,!1,o,s),t[kr]=e.current,Dl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ch(e)};on.render=function(t,e,n){if(!dh(e))throw Error(B(200));return hh(null,t,e,!1,n)};on.unmountComponentAtNode=function(t){if(!dh(t))throw Error(B(40));return t._reactRootContainer?(ro(function(){hh(null,null,t,!1,function(){t._reactRootContainer=null,t[kr]=null})}),!0):!1};on.unstable_batchedUpdates=L0;on.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!dh(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return hh(t,e,n,!1,r)};on.version="18.3.1-next-f1338f8080-20240426";function ZE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ZE)}catch(t){console.error(t)}}ZE(),Zk.exports=on;var i4=Zk.exports,JE,c_=i4;JE=c_.createRoot,c_.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zl(){return zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zl.apply(this,arguments)}var Gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gr||(Gr={}));const d_="popstate";function o4(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return xm("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:md(i)}return a4(e,n,null,t)}function Qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ex(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function s4(){return Math.random().toString(36).substr(2,8)}function h_(t,e){return{usr:t.state,key:t.key,idx:e}}function xm(t,e,n,r){return n===void 0&&(n=null),zl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ca(e):e,{state:n,key:e&&e.key||r||s4()})}function md(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ca(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function a4(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Gr.Pop,u=null,d=f();d==null&&(d=0,s.replaceState(zl({},s.state,{idx:d}),""));function f(){return(s.state||{idx:null}).idx}function m(){a=Gr.Pop;let S=f(),y=S==null?null:S-d;d=S,u&&u({action:a,location:A.location,delta:y})}function w(S,y){a=Gr.Push;let g=xm(A.location,S,y);d=f()+1;let k=h_(g,d),I=A.createHref(g);try{s.pushState(k,"",I)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(I)}o&&u&&u({action:a,location:A.location,delta:1})}function _(S,y){a=Gr.Replace;let g=xm(A.location,S,y);d=f();let k=h_(g,d),I=A.createHref(g);s.replaceState(k,"",I),o&&u&&u({action:a,location:A.location,delta:0})}function T(S){let y=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof S=="string"?S:md(S);return g=g.replace(/ $/,"%20"),Qe(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let A={get action(){return a},get location(){return t(i,s)},listen(S){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(d_,m),u=S,()=>{i.removeEventListener(d_,m),u=null}},createHref(S){return e(i,S)},createURL:T,encodeLocation(S){let y=T(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:w,replace:_,go(S){return s.go(S)}};return A}var f_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(f_||(f_={}));function l4(t,e,n){return n===void 0&&(n="/"),u4(t,e,n)}function u4(t,e,n,r){let i=typeof e=="string"?ca(e):e,o=M0(i.pathname||"/",n);if(o==null)return null;let s=tx(t);c4(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let d=E4(o);a=_4(s[u],d)}return a}function tx(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(Qe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=si([r,u.relativePath]),f=n.concat(u);o.children&&o.children.length>0&&(Qe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),tx(o.children,e,f,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:y4(d,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let u of nx(o.path))i(o,s,u)}),e}function nx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=nx(r.join("/")),a=[];return a.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...s),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function c4(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:v4(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const d4=/^:[\w-]+$/,h4=3,f4=2,p4=1,m4=10,g4=-2,p_=t=>t==="*";function y4(t,e){let n=t.split("/"),r=n.length;return n.some(p_)&&(r+=g4),e&&(r+=f4),n.filter(i=>!p_(i)).reduce((i,o)=>i+(d4.test(o)?h4:o===""?p4:m4),r)}function v4(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function _4(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],d=a===r.length-1,f=o==="/"?e:e.slice(o.length)||"/",m=k4({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),w=u.route;if(!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:si([o,m.pathname]),pathnameBase:S4(si([o,m.pathnameBase])),route:w}),m.pathnameBase!=="/"&&(o=si([o,m.pathnameBase]))}return s}function k4(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=w4(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:w,isOptional:_}=f;if(w==="*"){let A=a[m]||"";s=o.slice(0,o.length-A.length).replace(/(.)\/+$/,"$1")}const T=a[m];return _&&!T?d[w]=void 0:d[w]=(T||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:t}}function w4(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ex(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function E4(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ex(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function M0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function x4(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ca(t):t;return{pathname:n?n.startsWith("/")?n:T4(n,e):e,search:C4(r),hash:A4(i)}}function T4(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function I4(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function V0(t,e){let n=I4(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function F0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ca(t):(i=zl({},t),Qe(!i.pathname||!i.pathname.includes("?"),Hf("?","pathname","search",i)),Qe(!i.pathname||!i.pathname.includes("#"),Hf("#","pathname","hash",i)),Qe(!i.search||!i.search.includes("#"),Hf("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let m=e.length-1;if(!r&&s.startsWith("..")){let w=s.split("/");for(;w[0]==="..";)w.shift(),m-=1;i.pathname=w.join("/")}a=m>=0?e[m]:"/"}let u=x4(i,a),d=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const si=t=>t.join("/").replace(/\/\/+/g,"/"),S4=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),C4=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,A4=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function L4(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const rx=["post","put","patch","delete"];new Set(rx);const P4=["get",...rx];new Set(P4);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bl(){return Bl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bl.apply(this,arguments)}const U0=N.createContext(null),R4=N.createContext(null),Ei=N.createContext(null),fh=N.createContext(null),xi=N.createContext({outlet:null,matches:[],isDataRoute:!1}),ix=N.createContext(null);function b4(t,e){let{relative:n}=e===void 0?{}:e;da()||Qe(!1);let{basename:r,navigator:i}=N.useContext(Ei),{hash:o,pathname:s,search:a}=sx(t,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:si([r,s])),i.createHref({pathname:u,search:a,hash:o})}function da(){return N.useContext(fh)!=null}function ha(){return da()||Qe(!1),N.useContext(fh).location}function ox(t){N.useContext(Ei).static||N.useLayoutEffect(t)}function fa(){let{isDataRoute:t}=N.useContext(xi);return t?H4():j4()}function j4(){da()||Qe(!1);let t=N.useContext(U0),{basename:e,future:n,navigator:r}=N.useContext(Ei),{matches:i}=N.useContext(xi),{pathname:o}=ha(),s=JSON.stringify(V0(i,n.v7_relativeSplatPath)),a=N.useRef(!1);return ox(()=>{a.current=!0}),N.useCallback(function(d,f){if(f===void 0&&(f={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let m=F0(d,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:si([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,s,o,t])}function sx(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=N.useContext(Ei),{matches:i}=N.useContext(xi),{pathname:o}=ha(),s=JSON.stringify(V0(i,r.v7_relativeSplatPath));return N.useMemo(()=>F0(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function D4(t,e){return O4(t,e)}function O4(t,e,n,r){da()||Qe(!1);let{navigator:i,static:o}=N.useContext(Ei),{matches:s}=N.useContext(xi),a=s[s.length-1],u=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let f=ha(),m;if(e){var w;let y=typeof e=="string"?ca(e):e;d==="/"||(w=y.pathname)!=null&&w.startsWith(d)||Qe(!1),m=y}else m=f;let _=m.pathname||"/",T=_;if(d!=="/"){let y=d.replace(/^\//,"").split("/");T="/"+_.replace(/^\//,"").split("/").slice(y.length).join("/")}let A=l4(t,{pathname:T}),S=U4(A&&A.map(y=>Object.assign({},y,{params:Object.assign({},u,y.params),pathname:si([d,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:si([d,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return e&&S?N.createElement(fh.Provider,{value:{location:Bl({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Gr.Pop}},S):S}function N4(){let t=B4(),e=L4(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,null)}const M4=N.createElement(N4,null);class V4 extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(xi.Provider,{value:this.props.routeContext},N.createElement(ix.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function F4(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(U0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(xi.Provider,{value:e},r)}function U4(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);f>=0||Qe(!1),s=s.slice(0,Math.min(s.length,f+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let m=s[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:w,errors:_}=n,T=m.route.loader&&w[m.route.id]===void 0&&(!_||_[m.route.id]===void 0);if(m.route.lazy||T){u=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((f,m,w)=>{let _,T=!1,A=null,S=null;n&&(_=a&&m.route.id?a[m.route.id]:void 0,A=m.route.errorElement||M4,u&&(d<0&&w===0?(q4("route-fallback"),T=!0,S=null):d===w&&(T=!0,S=m.route.hydrateFallbackElement||null)));let y=e.concat(s.slice(0,w+1)),g=()=>{let k;return _?k=A:T?k=S:m.route.Component?k=N.createElement(m.route.Component,null):m.route.element?k=m.route.element:k=f,N.createElement(F4,{match:m,routeContext:{outlet:f,matches:y,isDataRoute:n!=null},children:k})};return n&&(m.route.ErrorBoundary||m.route.errorElement||w===0)?N.createElement(V4,{location:n.location,revalidation:n.revalidation,component:A,error:_,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var ax=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ax||{}),lx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(lx||{});function W4(t){let e=N.useContext(U0);return e||Qe(!1),e}function $4(t){let e=N.useContext(R4);return e||Qe(!1),e}function z4(t){let e=N.useContext(xi);return e||Qe(!1),e}function ux(t){let e=z4(),n=e.matches[e.matches.length-1];return n.route.id||Qe(!1),n.route.id}function B4(){var t;let e=N.useContext(ix),n=$4(),r=ux();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function H4(){let{router:t}=W4(ax.UseNavigateStable),e=ux(lx.UseNavigateStable),n=N.useRef(!1);return ox(()=>{n.current=!0}),N.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Bl({fromRouteId:e},o)))},[t,e])}const m_={};function q4(t,e,n){m_[t]||(m_[t]=!0)}function Y4(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function cx(t){let{to:e,replace:n,state:r,relative:i}=t;da()||Qe(!1);let{future:o,static:s}=N.useContext(Ei),{matches:a}=N.useContext(xi),{pathname:u}=ha(),d=fa(),f=F0(e,V0(a,o.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(f);return N.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function Za(t){Qe(!1)}function G4(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gr.Pop,navigator:o,static:s=!1,future:a}=t;da()&&Qe(!1);let u=e.replace(/^\/*/,"/"),d=N.useMemo(()=>({basename:u,navigator:o,static:s,future:Bl({v7_relativeSplatPath:!1},a)}),[u,a,o,s]);typeof r=="string"&&(r=ca(r));let{pathname:f="/",search:m="",hash:w="",state:_=null,key:T="default"}=r,A=N.useMemo(()=>{let S=M0(f,u);return S==null?null:{location:{pathname:S,search:m,hash:w,state:_,key:T},navigationType:i}},[u,f,m,w,_,T,i]);return A==null?null:N.createElement(Ei.Provider,{value:d},N.createElement(fh.Provider,{children:n,value:A}))}function K4(t){let{children:e,location:n}=t;return D4(Tm(e),n)}new Promise(()=>{});function Tm(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let o=[...e,i];if(r.type===N.Fragment){n.push.apply(n,Tm(r.props.children,o));return}r.type!==Za&&Qe(!1),!r.props.index||!r.props.children||Qe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Tm(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Im(){return Im=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Im.apply(this,arguments)}function Q4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function X4(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Z4(t,e){return t.button===0&&(!e||e==="_self")&&!X4(t)}const J4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],eA="6";try{window.__reactRouterVersion=eA}catch{}const tA="startTransition",g_=YS[tA];function nA(t){let{basename:e,children:n,future:r,window:i}=t,o=N.useRef();o.current==null&&(o.current=o4({window:i,v5Compat:!0}));let s=o.current,[a,u]=N.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},f=N.useCallback(m=>{d&&g_?g_(()=>u(m)):u(m)},[u,d]);return N.useLayoutEffect(()=>s.listen(f),[s,f]),N.useEffect(()=>Y4(r),[r]),N.createElement(G4,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const rA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dx=N.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:u,to:d,preventScrollReset:f,viewTransition:m}=e,w=Q4(e,J4),{basename:_}=N.useContext(Ei),T,A=!1;if(typeof d=="string"&&iA.test(d)&&(T=d,rA))try{let k=new URL(window.location.href),I=d.startsWith("//")?new URL(k.protocol+d):new URL(d),R=M0(I.pathname,_);I.origin===k.origin&&R!=null?d=R+I.search+I.hash:A=!0}catch{}let S=b4(d,{relative:i}),y=oA(d,{replace:s,state:a,target:u,preventScrollReset:f,relative:i,viewTransition:m});function g(k){r&&r(k),k.defaultPrevented||y(k)}return N.createElement("a",Im({},w,{href:T||S,onClick:A||o?r:g,ref:n,target:u}))});var y_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(y_||(y_={}));var v_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(v_||(v_={}));function oA(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,u=fa(),d=ha(),f=sx(t,{relative:s});return N.useCallback(m=>{if(Z4(m,n)){m.preventDefault();let w=r!==void 0?r:md(d)===md(f);u(t,{replace:w,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[d,u,f,r,i,n,t,o,s,a])}var __={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},fx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=o>>2,m=(o&3)<<4|a>>4;let w=(a&15)<<2|d>>6,_=d&63;u||(_=64,s||(w=64)),r.push(n[f],n[m],n[w],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||d==null||m==null)throw new aA;const w=o<<2|a>>4;if(r.push(w),d!==64){const _=a<<4&240|d>>2;if(r.push(_),m!==64){const T=d<<6&192|m;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lA=function(t){const e=hx(t);return fx.encodeByteArray(e,!0)},gd=function(t){return lA(t).replace(/\./g,"")},px=function(t){try{return fx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cA=()=>uA().__FIREBASE_DEFAULTS__,dA=()=>{if(typeof process>"u"||typeof __>"u")return;const t=__.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&px(t[1]);return e&&JSON.parse(e)},ph=()=>{try{return cA()||dA()||hA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mx=t=>{var e,n;return(n=(e=ph())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gx=t=>{const e=mx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yx=()=>{var t;return(t=ph())===null||t===void 0?void 0:t.config},vx=t=>{var e;return(e=ph())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _x(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[gd(JSON.stringify(n)),gd(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function mA(){var t;const e=(t=ph())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vA(){const t=Lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _A(){return!mA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wx(){try{return typeof indexedDB=="object"}catch{return!1}}function Ex(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function kA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wA,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mo.prototype.create)}}class mo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?EA(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new yn(i,a,r)}}function EA(t,e){return t.replace(xA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xA=/\{\$([^}]+)}/g;function TA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(k_(o)&&k_(s)){if(!Hl(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function k_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ja(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function el(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function IA(t,e){const n=new SA(t,e);return n.subscribe.bind(n)}class SA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qf),i.error===void 0&&(i.error=qf),i.complete===void 0&&(i.complete=qf);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qf(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=1e3,LA=2,PA=4*60*60*1e3,RA=.5;function w_(t,e=AA,n=LA){const r=e*Math.pow(n,t),i=Math.round(RA*r*(Math.random()-.5)*2);return Math.min(PA,r+i)}/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class mn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DA(e))try{this.getOrInitializeService({instanceIdentifier:Mi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Mi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mi){return this.instances.has(e)}getOptions(e=Mi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mi){return this.component?this.component.multipleInstances?e:Mi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jA(t){return t===Mi?void 0:t}function DA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const NA={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},MA=ge.INFO,VA={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},FA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=VA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mh{constructor(e){this.name=e,this._logLevel=MA,this._logHandler=FA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const UA=(t,e)=>e.some(n=>t instanceof n);let E_,x_;function WA(){return E_||(E_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $A(){return x_||(x_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xx=new WeakMap,Sm=new WeakMap,Tx=new WeakMap,Yf=new WeakMap,W0=new WeakMap;function zA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(ai(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&xx.set(n,t)}).catch(()=>{}),W0.set(e,t),e}function BA(t){if(Sm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Sm.set(t,e)}let Cm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Tx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ai(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HA(t){Cm=t(Cm)}function qA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gf(this),e,...n);return Tx.set(r,e.sort?e.sort():[e]),ai(r)}:$A().includes(t)?function(...e){return t.apply(Gf(this),e),ai(xx.get(this))}:function(...e){return ai(t.apply(Gf(this),e))}}function YA(t){return typeof t=="function"?qA(t):(t instanceof IDBTransaction&&BA(t),UA(t,WA())?new Proxy(t,Cm):t)}function ai(t){if(t instanceof IDBRequest)return zA(t);if(Yf.has(t))return Yf.get(t);const e=YA(t);return e!==t&&(Yf.set(t,e),W0.set(e,t)),e}const Gf=t=>W0.get(t);function Ix(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=ai(s);return r&&s.addEventListener("upgradeneeded",u=>{r(ai(s.result),u.oldVersion,u.newVersion,ai(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const GA=["get","getKey","getAll","getAllKeys","count"],KA=["put","add","delete","clear"],Kf=new Map;function T_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kf.get(e))return Kf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=KA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||GA.includes(n)))return;const o=async function(s,...a){const u=this.transaction(s,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&u.done]))[0]};return Kf.set(e,o),o}HA(t=>({...t,get:(e,n,r)=>T_(e,n)||t.get(e,n,r),has:(e,n)=>!!T_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Am="@firebase/app",I_="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new mh("@firebase/app"),ZA="@firebase/app-compat",JA="@firebase/analytics-compat",eL="@firebase/analytics",tL="@firebase/app-check-compat",nL="@firebase/app-check",rL="@firebase/auth",iL="@firebase/auth-compat",oL="@firebase/database",sL="@firebase/data-connect",aL="@firebase/database-compat",lL="@firebase/functions",uL="@firebase/functions-compat",cL="@firebase/installations",dL="@firebase/installations-compat",hL="@firebase/messaging",fL="@firebase/messaging-compat",pL="@firebase/performance",mL="@firebase/performance-compat",gL="@firebase/remote-config",yL="@firebase/remote-config-compat",vL="@firebase/storage",_L="@firebase/storage-compat",kL="@firebase/firestore",wL="@firebase/vertexai-preview",EL="@firebase/firestore-compat",xL="firebase",TL="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="[DEFAULT]",IL={[Am]:"fire-core",[ZA]:"fire-core-compat",[eL]:"fire-analytics",[JA]:"fire-analytics-compat",[nL]:"fire-app-check",[tL]:"fire-app-check-compat",[rL]:"fire-auth",[iL]:"fire-auth-compat",[oL]:"fire-rtdb",[sL]:"fire-data-connect",[aL]:"fire-rtdb-compat",[lL]:"fire-fn",[uL]:"fire-fn-compat",[cL]:"fire-iid",[dL]:"fire-iid-compat",[hL]:"fire-fcm",[fL]:"fire-fcm-compat",[pL]:"fire-perf",[mL]:"fire-perf-compat",[gL]:"fire-rc",[yL]:"fire-rc-compat",[vL]:"fire-gcs",[_L]:"fire-gcs-compat",[kL]:"fire-fst",[EL]:"fire-fst-compat",[wL]:"fire-vertex","fire-js":"fire-js",[xL]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new Map,SL=new Map,Pm=new Map;function S_(t,e){try{t.container.addComponent(e)}catch(n){xr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if(Pm.has(e))return xr.debug(`There were multiple attempts to register component ${e}.`),!1;Pm.set(e,t);for(const n of yd.values())S_(n,t);for(const n of SL.values())S_(n,t);return!0}function Ti(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},li=new mo("app","Firebase",CL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw li.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=TL;function Sx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Lm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw li.create("bad-app-name",{appName:String(i)});if(n||(n=yx()),!n)throw li.create("no-options");const o=yd.get(i);if(o){if(Hl(n,o.options)&&Hl(r,o.config))return o;throw li.create("duplicate-app",{appName:i})}const s=new OA(i);for(const u of Pm.values())s.addComponent(u);const a=new AL(n,r,s);return yd.set(i,a),a}function gh(t=Lm){const e=yd.get(t);if(!e&&t===Lm&&yx())return Sx();if(!e)throw li.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let i=(r=IL[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xr.warn(a.join(" "));return}Rn(new mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const LL="firebase-heartbeat-database",PL=1,ql="firebase-heartbeat-store";let Qf=null;function Cx(){return Qf||(Qf=Ix(LL,PL,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ql)}catch(n){console.warn(n)}}}}).catch(t=>{throw li.create("idb-open",{originalErrorMessage:t.message})})),Qf}async function RL(t){try{const n=(await Cx()).transaction(ql),r=await n.objectStore(ql).get(Ax(t));return await n.done,r}catch(e){if(e instanceof yn)xr.warn(e.message);else{const n=li.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xr.warn(n.message)}}}async function C_(t,e){try{const r=(await Cx()).transaction(ql,"readwrite");await r.objectStore(ql).put(e,Ax(t)),await r.done}catch(n){if(n instanceof yn)xr.warn(n.message);else{const r=li.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xr.warn(r.message)}}}function Ax(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bL=1024,jL=30*24*60*60*1e3;class DL{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NL(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=A_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=jL}),this._storage.overwrite(this._heartbeatsCache))}catch(r){xr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=A_(),{heartbeatsToSend:r,unsentEntries:i}=OL(this._heartbeatsCache.heartbeats),o=gd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return xr.warn(n),""}}}function A_(){return new Date().toISOString().substring(0,10)}function OL(t,e=bL){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),L_(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),L_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wx()?Ex().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await RL(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return C_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return C_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function L_(t){return gd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ML(t){Rn(new mn("platform-logger",e=>new QA(e),"PRIVATE")),Rn(new mn("heartbeat",e=>new DL(e),"PRIVATE")),Gt(Am,I_,t),Gt(Am,I_,"esm2017"),Gt("fire-js","")}ML("");function $0(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Lx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VL=Lx,Px=new mo("auth","Firebase",Lx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=new mh("@firebase/auth");function FL(t,...e){vd.logLevel<=ge.WARN&&vd.warn(`Auth (${go}): ${t}`,...e)}function Lc(t,...e){vd.logLevel<=ge.ERROR&&vd.error(`Auth (${go}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,...e){throw z0(t,...e)}function Yn(t,...e){return z0(t,...e)}function Rx(t,e,n){const r=Object.assign(Object.assign({},VL()),{[e]:n});return new mo("auth","Firebase",r).create(e,{appName:t.name})}function yr(t){return Rx(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function z0(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Px.create(t,...e)}function te(t,e,...n){if(!t)throw z0(e,...n)}function hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lc(e),new Error(e)}function Tr(t,e){t||hr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function UL(){return P_()==="http:"||P_()==="https:"}function P_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UL()||kx()||"connection"in navigator)?navigator.onLine:!0}function $L(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tr(n>e,"Short delay should be less than long delay!"),this.isMobile=pA()||yA()}get(){return WL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t,e){Tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL=new du(3e4,6e4);function Ar(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jn(t,e,n,r,i={}){return jx(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=cu(Object.assign({key:t.config.apiKey},s)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},o);return gA()||(d.referrerPolicy="no-referrer"),bx.fetch()(Dx(t,t.config.apiHost,n,a),d)})}async function jx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zL),e);try{const i=new qL(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw ic(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[u,d]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ic(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw ic(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw ic(t,"user-disabled",s);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Rx(t,f,d);bn(t,f)}}catch(i){if(i instanceof yn)throw i;bn(t,"network-request-failed",{message:String(i)})}}async function hu(t,e,n,r,i={}){const o=await Jn(t,e,n,r,i);return"mfaPendingCredential"in o&&bn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Dx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?B0(t.config,i):`${t.config.apiScheme}://${i}`}function HL(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yn(this.auth,"network-request-failed")),BL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ic(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Yn(t,e,r);return i.customData._tokenResponse=n,i}function R_(t){return t!==void 0&&t.enterprise!==void 0}class YL{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return HL(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function GL(t,e){return Jn(t,"GET","/v2/recaptchaConfig",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KL(t,e){return Jn(t,"POST","/v1/accounts:delete",e)}async function Ox(t,e){return Jn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QL(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=H0(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:gl(Xf(i.auth_time)),issuedAtTime:gl(Xf(i.iat)),expirationTime:gl(Xf(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Xf(t){return Number(t)*1e3}function H0(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Lc("JWT malformed, contained fewer than 3 sections"),null;try{const i=px(n);return i?JSON.parse(i):(Lc("Failed to decode base64 JWT payload"),null)}catch(i){return Lc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function b_(t){const e=H0(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&XL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function XL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gl(this.lastLoginAt),this.creationTime=gl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _d(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Gs(t,Ox(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Nx(o.providerUserInfo):[],a=eP(t.providerData,s),u=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=u?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new bm(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function JL(t){const e=We(t);await _d(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Nx(t){return t.map(e=>{var{providerId:n}=e,r=$0(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(t,e){const n=await jx(t,{},async()=>{const r=cu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Dx(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bx.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nP(t,e){return Jn(t,"POST","/v2/accounts:revokeToken",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):b_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=b_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await tP(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ms;return r&&(te(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(te(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ms,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=$0(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new bm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Gs(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QL(this,e)}reload(){return JL(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _d(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zn(this.auth.app))return Promise.reject(yr(this.auth));const e=await this.getIdToken();return await Gs(this,KL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,u,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(i=n.email)!==null&&i!==void 0?i:void 0,_=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,T=(s=n.photoURL)!==null&&s!==void 0?s:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,y=(d=n.createdAt)!==null&&d!==void 0?d:void 0,g=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:I,isAnonymous:R,providerData:O,stsTokenManager:E}=n;te(k&&E,e,"internal-error");const x=Ms.fromJSON(this.name,E);te(typeof k=="string",e,"internal-error"),jr(m,e.name),jr(w,e.name),te(typeof I=="boolean",e,"internal-error"),te(typeof R=="boolean",e,"internal-error"),jr(_,e.name),jr(T,e.name),jr(A,e.name),jr(S,e.name),jr(y,e.name),jr(g,e.name);const L=new fr({uid:k,auth:e,email:w,emailVerified:I,displayName:m,isAnonymous:R,photoURL:T,phoneNumber:_,tenantId:A,stsTokenManager:x,createdAt:y,lastLoginAt:g});return O&&Array.isArray(O)&&(L.providerData=O.map(j=>Object.assign({},j))),S&&(L._redirectEventId=S),L}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ms;i.updateFromServerResponse(n);const o=new fr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _d(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Nx(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Ms;a.updateFromIdToken(r);const u=new fr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new bm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=new Map;function pr(t){Tr(t instanceof Function,"Expected a class definition");let e=j_.get(t);return e?(Tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,j_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mx.type="NONE";const D_=Mx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Pc(this.userKey,i.apiKey,o),this.fullPersistenceKey=Pc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vs(pr(D_),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||pr(D_);const s=Pc(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const f=await d._get(s);if(f){const m=fr._fromJSON(e,f);d!==o&&(a=m),o=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Vs(o,e,r):(o=u[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(s)}catch{}})),new Vs(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zx(e))return"Blackberry";if(Bx(e))return"Webos";if(Fx(e))return"Safari";if((e.includes("chrome/")||Ux(e))&&!e.includes("edge/"))return"Chrome";if($x(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vx(t=Lt()){return/firefox\//i.test(t)}function Fx(t=Lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ux(t=Lt()){return/crios\//i.test(t)}function Wx(t=Lt()){return/iemobile/i.test(t)}function $x(t=Lt()){return/android/i.test(t)}function zx(t=Lt()){return/blackberry/i.test(t)}function Bx(t=Lt()){return/webos/i.test(t)}function q0(t=Lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rP(t=Lt()){var e;return q0(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iP(){return vA()&&document.documentMode===10}function Hx(t=Lt()){return q0(t)||$x(t)||Bx(t)||zx(t)||/windows phone/i.test(t)||Wx(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(t,e=[]){let n;switch(t){case"Browser":n=O_(Lt());break;case"Worker":n=`${O_(Lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${go}/${r}`}/**
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
 */class oP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const u=e(o);s(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function sP(t,e={}){return Jn(t,"GET","/v2/passwordPolicy",Ar(t,e))}/**
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
 */const aP=6;class lP{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:aP,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(s=u.containsNumericCharacter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new N_(this),this.idTokenSubscription=new N_(this),this.beforeStateQueue=new oP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Px,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ox(this,{idToken:e}),r=await fr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!s||s===a)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _d(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$L()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zn(this.app))return Promise.reject(yr(this));const n=e?We(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zn(this.app)?Promise.reject(yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zn(this.app)?Promise.reject(yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sP(this),n=new lP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pr(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[pr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{s=!0,u()}}else{const u=e.addObserver(n);return()=>{s=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&FL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ii(t){return We(t)}class N_{constructor(e){this.auth=e,this.observer=null,this.addObserver=IA(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cP(t){yh=t}function Yx(t){return yh.loadJS(t)}function dP(){return yh.recaptchaEnterpriseScript}function hP(){return yh.gapiScript}function fP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pP="recaptcha-enterprise",mP="NO_RECAPTCHA";class gP{constructor(e){this.type=pP,this.auth=Ii(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{GL(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new YL(u);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,s(d.siteKey)}}).catch(u=>{a(u)})})}function i(o,s,a){const u=window.grecaptcha;R_(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(d=>{s(d)}).catch(()=>{s(mP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&R_(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let u=dP();u.length!==0&&(u+=a),Yx(u).then(()=>{i(a,o,s)}).catch(d=>{s(d)})}}).catch(a=>{s(a)})})}}async function M_(t,e,n,r=!1){const i=new gP(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function kd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await M_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await M_(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(t,e){const n=Ti(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Hl(o,e??{}))return i;bn(i,"already-initialized")}return n.initialize({options:e})}function vP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _P(t,e,n){const r=Ii(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Gx(e),{host:s,port:a}=kP(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),wP()}function Gx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kP(t){const e=Gx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:V_(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:V_(s)}}}function V_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,n){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}async function EP(t,e){return Jn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e){return hu(t,"POST","/v1/accounts:signInWithPassword",Ar(t,e))}async function TP(t,e){return Jn(t,"POST","/v1/accounts:sendOobCode",Ar(t,e))}async function IP(t,e){return TP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(t,e){return hu(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}async function CP(t,e){return hu(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends Y0{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Yl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Yl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kd(e,n,"signInWithPassword",xP);case"emailLink":return SP(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kd(e,r,"signUpPassword",EP);case"emailLink":return CP(e,{idToken:n,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(t,e){return hu(t,"POST","/v1/accounts:signInWithIdp",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP="http://localhost";class io extends Y0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new io(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=$0(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new io(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fs(e,n)}buildRequest(){const e={requestUri:AP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PP(t){const e=Ja(el(t)).link,n=e?Ja(el(e)).deep_link_id:null,r=Ja(el(t)).deep_link_id;return(r?Ja(el(r)).link:null)||r||n||e||t}class G0{constructor(e){var n,r,i,o,s,a;const u=Ja(el(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=LP((i=u.mode)!==null&&i!==void 0?i:null);te(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=u.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=PP(e);try{return new G0(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this.providerId=pa.PROVIDER_ID}static credential(e,n){return Yl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=G0.parseLink(n);return te(r,"argument-error"),Yl._fromEmailAndCode(e,r.code,r.tenantId)}}pa.PROVIDER_ID="password";pa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fu extends Kx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends fu{constructor(){super("facebook.com")}static credential(e){return io._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends fu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return io._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends fu{constructor(){super("github.com")}static credential(e){return io._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.GITHUB_SIGN_IN_METHOD="github.com";Br.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends fu{constructor(){super("twitter.com")}static credential(e,n){return io._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hr.credential(n,r)}catch{return null}}}Hr.TWITTER_SIGN_IN_METHOD="twitter.com";Hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RP(t,e){return hu(t,"POST","/v1/accounts:signUp",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await fr._fromIdTokenResponse(e,r,i),s=F_(r);return new oo({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=F_(r);return new oo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function F_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd extends yn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wd.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wd(e,n,r,i)}}function Qx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?wd._fromErrorAndOperation(t,o,e,r):o})}async function bP(t,e,n=!1){const r=await Gs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oo._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP(t,e,n=!1){const{auth:r}=t;if(zn(r.app))return Promise.reject(yr(r));const i="reauthenticate";try{const o=await Gs(t,Qx(r,i,e,t),n);te(o.idToken,r,"internal-error");const s=H0(o.idToken);te(s,r,"internal-error");const{sub:a}=s;return te(t.uid===a,r,"user-mismatch"),oo._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xx(t,e,n=!1){if(zn(t.app))return Promise.reject(yr(t));const r="signIn",i=await Qx(t,r,e),o=await oo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function DP(t,e){return Xx(Ii(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zx(t){const e=Ii(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function OP(t,e,n){const r=Ii(t);await kd(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",IP)}async function NP(t,e,n){if(zn(t.app))return Promise.reject(yr(t));const r=Ii(t),s=await kd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",RP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Zx(t),u}),a=await oo._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function MP(t,e,n){return zn(t.app)?Promise.reject(yr(t)):DP(We(t),pa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Zx(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t,e){return Jn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=We(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await Gs(r,VP(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function UP(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function WP(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function $P(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function zP(t){return We(t).signOut()}async function BP(t){return We(t).delete()}const Ed="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ed,"1"),this.storage.removeItem(Ed),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=1e3,qP=10;class eT extends Jx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,u)=>{this.notifyListeners(s,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);iP()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eT.type="LOCAL";const YP=eT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function GP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async d=>d(n.origin,o)),u=await GP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,u)=>{const d=K0("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const w=m;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(w.data.response);break;default:clearTimeout(f),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){return window}function QP(t){Gn().location.href=t}/**
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
 */function rT(){return typeof Gn().WorkerGlobalScope<"u"&&typeof Gn().importScripts=="function"}async function XP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function JP(){return rT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="firebaseLocalStorageDb",eR=1,xd="firebaseLocalStorage",oT="fbase_key";class pu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _h(t,e){return t.transaction([xd],e?"readwrite":"readonly").objectStore(xd)}function tR(){const t=indexedDB.deleteDatabase(iT);return new pu(t).toPromise()}function jm(){const t=indexedDB.open(iT,eR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xd,{keyPath:oT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xd)?e(r):(r.close(),await tR(),e(await jm()))})})}async function U_(t,e,n){const r=_h(t,!0).put({[oT]:e,value:n});return new pu(r).toPromise()}async function nR(t,e){const n=_h(t,!1).get(e),r=await new pu(n).toPromise();return r===void 0?null:r.value}function W_(t,e){const n=_h(t,!0).delete(e);return new pu(n).toPromise()}const rR=800,iR=3;class sT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vh._getInstance(JP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XP(),!this.activeServiceWorker)return;this.sender=new KP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jm();return await U_(e,Ed,"1"),await W_(e,Ed),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>U_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>W_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=_h(i,!1).getAll();return new pu(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sT.type="LOCAL";const oR=sT;new du(3e4,6e4);/**
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
 */function sR(t,e){return e?pr(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0 extends Y0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aR(t){return Xx(t.auth,new Q0(t),t.bypassAuthState)}function lR(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),jP(n,new Q0(t),t.bypassAuthState)}async function uR(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),bP(n,new Q0(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aR;case"linkViaPopup":case"linkViaRedirect":return uR;case"reauthViaPopup":case"reauthViaRedirect":return lR;default:bn(this.auth,"internal-error")}}resolve(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new du(2e3,1e4);class As extends aT{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Tr(this.filter.length===1,"Popup operations only handle one event");const e=K0();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cR.get())};e()}}As.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR="pendingRedirect",Rc=new Map;class hR extends aT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Rc.get(this.auth._key());if(!e){try{const r=await fR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Rc.set(this.auth._key(),e)}return this.bypassAuthState||Rc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fR(t,e){const n=gR(e),r=mR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pR(t,e){Rc.set(t._key(),e)}function mR(t){return pr(t._redirectPersistence)}function gR(t){return Pc(dR,t.config.apiKey,t.name)}async function yR(t,e,n=!1){if(zn(t.app))return Promise.reject(yr(t));const r=Ii(t),i=sR(r,e),s=await new hR(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=10*60*1e3;class _R{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!lT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vR&&this.cachedEventUids.clear(),this.cachedEventUids.has($_(e))}saveEventToCache(e){this.cachedEventUids.add($_(e)),this.lastProcessedEventTime=Date.now()}}function $_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wR(t,e={}){return Jn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xR=/^https?/;async function TR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wR(t);for(const n of e)try{if(IR(n))return}catch{}bn(t,"unauthorized-domain")}function IR(t){const e=Rm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!xR.test(n))return!1;if(ER.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const SR=new du(3e4,6e4);function z_(){const t=Gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CR(t){return new Promise((e,n)=>{var r,i,o;function s(){z_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{z_(),n(Yn(t,"network-request-failed"))},timeout:SR.get()})}if(!((i=(r=Gn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Gn().gapi)===null||o===void 0)&&o.load)s();else{const a=fP("iframefcb");return Gn()[a]=()=>{gapi.load?s():n(Yn(t,"network-request-failed"))},Yx(`${hP()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw bc=null,e})}let bc=null;function AR(t){return bc=bc||CR(t),bc}/**
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
 */const LR=new du(5e3,15e3),PR="__/auth/iframe",RR="emulator/auth/iframe",bR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DR(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?B0(e,RR):`https://${t.config.authDomain}/${PR}`,r={apiKey:e.apiKey,appName:t.name,v:go},i=jR.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${cu(r).slice(1)}`}async function OR(t){const e=await AR(t),n=Gn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:DR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Yn(t,"network-request-failed"),a=Gn().setTimeout(()=>{o(s)},LR.get());function u(){Gn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{o(s)})}))}/**
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
 */const NR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MR=500,VR=600,FR="_blank",UR="http://localhost";class B_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WR(t,e,n,r=MR,i=VR){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},NR),{width:r.toString(),height:i.toString(),top:o,left:s}),d=Lt().toLowerCase();n&&(a=Ux(d)?FR:n),Vx(d)&&(e=e||UR,u.scrollbars="yes");const f=Object.entries(u).reduce((w,[_,T])=>`${w}${_}=${T},`,"");if(rP(d)&&a!=="_self")return $R(e||"",a),new B_(null);const m=window.open(e||"",a,f);te(m,t,"popup-blocked");try{m.focus()}catch{}return new B_(m)}function $R(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const zR="__/auth/handler",BR="emulator/auth/handler",HR=encodeURIComponent("fac");async function H_(t,e,n,r,i,o){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:go,eventId:i};if(e instanceof Kx){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",TA(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))s[f]=m}if(e instanceof fu){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const u=await t._getAppCheckToken(),d=u?`#${HR}=${encodeURIComponent(u)}`:"";return`${qR(t)}?${cu(a).slice(1)}${d}`}function qR({config:t}){return t.emulator?B0(t,BR):`https://${t.authDomain}/${zR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="webStorageSupport";class YR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nT,this._completeRedirectFn=yR,this._overrideRedirectResult=pR}async _openPopup(e,n,r,i){var o;Tr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await H_(e,n,r,Rm(),i);return WR(e,s,K0())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await H_(e,n,r,Rm(),i);return QP(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Tr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await OR(e),r=new _R(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zf,{type:Zf},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Zf];s!==void 0&&n(!!s),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hx()||Fx()||q0()}}const GR=YR;var q_="@firebase/auth",Y_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XR(t){Rn(new mn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;te(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qx(t)},d=new uP(r,i,o,u);return vP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rn(new mn("auth-internal",e=>{const n=Ii(e.getProvider("auth").getImmediate());return(r=>new KR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(q_,Y_,QR(t)),Gt(q_,Y_,"esm2017")}/**
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
 */const ZR=5*60,JR=vx("authIdTokenMaxAge")||ZR;let G_=null;const eb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JR)return;const i=n==null?void 0:n.token;G_!==i&&(G_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uT(t=gh()){const e=Ti(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yP(t,{popupRedirectResolver:GR,persistence:[oR,YP,nT]}),r=vx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=eb(o.toString());WP(n,s,()=>s(n.currentUser)),UP(n,a=>s(a))}}const i=mx("auth");return i&&_P(n,`http://${i}`),n}function tb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}cP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Yn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",tb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XR("Browser");var nb="firebase",rb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(nb,rb,"app");var K_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ki,cT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,x){function L(){}L.prototype=x.prototype,E.D=x.prototype,E.prototype=new L,E.prototype.constructor=E,E.C=function(j,b,D){for(var P=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)P[Y-2]=arguments[Y];return x.prototype[b].apply(j,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,x,L){L||(L=0);var j=Array(16);if(typeof x=="string")for(var b=0;16>b;++b)j[b]=x.charCodeAt(L++)|x.charCodeAt(L++)<<8|x.charCodeAt(L++)<<16|x.charCodeAt(L++)<<24;else for(b=0;16>b;++b)j[b]=x[L++]|x[L++]<<8|x[L++]<<16|x[L++]<<24;x=E.g[0],L=E.g[1],b=E.g[2];var D=E.g[3],P=x+(D^L&(b^D))+j[0]+3614090360&4294967295;x=L+(P<<7&4294967295|P>>>25),P=D+(b^x&(L^b))+j[1]+3905402710&4294967295,D=x+(P<<12&4294967295|P>>>20),P=b+(L^D&(x^L))+j[2]+606105819&4294967295,b=D+(P<<17&4294967295|P>>>15),P=L+(x^b&(D^x))+j[3]+3250441966&4294967295,L=b+(P<<22&4294967295|P>>>10),P=x+(D^L&(b^D))+j[4]+4118548399&4294967295,x=L+(P<<7&4294967295|P>>>25),P=D+(b^x&(L^b))+j[5]+1200080426&4294967295,D=x+(P<<12&4294967295|P>>>20),P=b+(L^D&(x^L))+j[6]+2821735955&4294967295,b=D+(P<<17&4294967295|P>>>15),P=L+(x^b&(D^x))+j[7]+4249261313&4294967295,L=b+(P<<22&4294967295|P>>>10),P=x+(D^L&(b^D))+j[8]+1770035416&4294967295,x=L+(P<<7&4294967295|P>>>25),P=D+(b^x&(L^b))+j[9]+2336552879&4294967295,D=x+(P<<12&4294967295|P>>>20),P=b+(L^D&(x^L))+j[10]+4294925233&4294967295,b=D+(P<<17&4294967295|P>>>15),P=L+(x^b&(D^x))+j[11]+2304563134&4294967295,L=b+(P<<22&4294967295|P>>>10),P=x+(D^L&(b^D))+j[12]+1804603682&4294967295,x=L+(P<<7&4294967295|P>>>25),P=D+(b^x&(L^b))+j[13]+4254626195&4294967295,D=x+(P<<12&4294967295|P>>>20),P=b+(L^D&(x^L))+j[14]+2792965006&4294967295,b=D+(P<<17&4294967295|P>>>15),P=L+(x^b&(D^x))+j[15]+1236535329&4294967295,L=b+(P<<22&4294967295|P>>>10),P=x+(b^D&(L^b))+j[1]+4129170786&4294967295,x=L+(P<<5&4294967295|P>>>27),P=D+(L^b&(x^L))+j[6]+3225465664&4294967295,D=x+(P<<9&4294967295|P>>>23),P=b+(x^L&(D^x))+j[11]+643717713&4294967295,b=D+(P<<14&4294967295|P>>>18),P=L+(D^x&(b^D))+j[0]+3921069994&4294967295,L=b+(P<<20&4294967295|P>>>12),P=x+(b^D&(L^b))+j[5]+3593408605&4294967295,x=L+(P<<5&4294967295|P>>>27),P=D+(L^b&(x^L))+j[10]+38016083&4294967295,D=x+(P<<9&4294967295|P>>>23),P=b+(x^L&(D^x))+j[15]+3634488961&4294967295,b=D+(P<<14&4294967295|P>>>18),P=L+(D^x&(b^D))+j[4]+3889429448&4294967295,L=b+(P<<20&4294967295|P>>>12),P=x+(b^D&(L^b))+j[9]+568446438&4294967295,x=L+(P<<5&4294967295|P>>>27),P=D+(L^b&(x^L))+j[14]+3275163606&4294967295,D=x+(P<<9&4294967295|P>>>23),P=b+(x^L&(D^x))+j[3]+4107603335&4294967295,b=D+(P<<14&4294967295|P>>>18),P=L+(D^x&(b^D))+j[8]+1163531501&4294967295,L=b+(P<<20&4294967295|P>>>12),P=x+(b^D&(L^b))+j[13]+2850285829&4294967295,x=L+(P<<5&4294967295|P>>>27),P=D+(L^b&(x^L))+j[2]+4243563512&4294967295,D=x+(P<<9&4294967295|P>>>23),P=b+(x^L&(D^x))+j[7]+1735328473&4294967295,b=D+(P<<14&4294967295|P>>>18),P=L+(D^x&(b^D))+j[12]+2368359562&4294967295,L=b+(P<<20&4294967295|P>>>12),P=x+(L^b^D)+j[5]+4294588738&4294967295,x=L+(P<<4&4294967295|P>>>28),P=D+(x^L^b)+j[8]+2272392833&4294967295,D=x+(P<<11&4294967295|P>>>21),P=b+(D^x^L)+j[11]+1839030562&4294967295,b=D+(P<<16&4294967295|P>>>16),P=L+(b^D^x)+j[14]+4259657740&4294967295,L=b+(P<<23&4294967295|P>>>9),P=x+(L^b^D)+j[1]+2763975236&4294967295,x=L+(P<<4&4294967295|P>>>28),P=D+(x^L^b)+j[4]+1272893353&4294967295,D=x+(P<<11&4294967295|P>>>21),P=b+(D^x^L)+j[7]+4139469664&4294967295,b=D+(P<<16&4294967295|P>>>16),P=L+(b^D^x)+j[10]+3200236656&4294967295,L=b+(P<<23&4294967295|P>>>9),P=x+(L^b^D)+j[13]+681279174&4294967295,x=L+(P<<4&4294967295|P>>>28),P=D+(x^L^b)+j[0]+3936430074&4294967295,D=x+(P<<11&4294967295|P>>>21),P=b+(D^x^L)+j[3]+3572445317&4294967295,b=D+(P<<16&4294967295|P>>>16),P=L+(b^D^x)+j[6]+76029189&4294967295,L=b+(P<<23&4294967295|P>>>9),P=x+(L^b^D)+j[9]+3654602809&4294967295,x=L+(P<<4&4294967295|P>>>28),P=D+(x^L^b)+j[12]+3873151461&4294967295,D=x+(P<<11&4294967295|P>>>21),P=b+(D^x^L)+j[15]+530742520&4294967295,b=D+(P<<16&4294967295|P>>>16),P=L+(b^D^x)+j[2]+3299628645&4294967295,L=b+(P<<23&4294967295|P>>>9),P=x+(b^(L|~D))+j[0]+4096336452&4294967295,x=L+(P<<6&4294967295|P>>>26),P=D+(L^(x|~b))+j[7]+1126891415&4294967295,D=x+(P<<10&4294967295|P>>>22),P=b+(x^(D|~L))+j[14]+2878612391&4294967295,b=D+(P<<15&4294967295|P>>>17),P=L+(D^(b|~x))+j[5]+4237533241&4294967295,L=b+(P<<21&4294967295|P>>>11),P=x+(b^(L|~D))+j[12]+1700485571&4294967295,x=L+(P<<6&4294967295|P>>>26),P=D+(L^(x|~b))+j[3]+2399980690&4294967295,D=x+(P<<10&4294967295|P>>>22),P=b+(x^(D|~L))+j[10]+4293915773&4294967295,b=D+(P<<15&4294967295|P>>>17),P=L+(D^(b|~x))+j[1]+2240044497&4294967295,L=b+(P<<21&4294967295|P>>>11),P=x+(b^(L|~D))+j[8]+1873313359&4294967295,x=L+(P<<6&4294967295|P>>>26),P=D+(L^(x|~b))+j[15]+4264355552&4294967295,D=x+(P<<10&4294967295|P>>>22),P=b+(x^(D|~L))+j[6]+2734768916&4294967295,b=D+(P<<15&4294967295|P>>>17),P=L+(D^(b|~x))+j[13]+1309151649&4294967295,L=b+(P<<21&4294967295|P>>>11),P=x+(b^(L|~D))+j[4]+4149444226&4294967295,x=L+(P<<6&4294967295|P>>>26),P=D+(L^(x|~b))+j[11]+3174756917&4294967295,D=x+(P<<10&4294967295|P>>>22),P=b+(x^(D|~L))+j[2]+718787259&4294967295,b=D+(P<<15&4294967295|P>>>17),P=L+(D^(b|~x))+j[9]+3951481745&4294967295,E.g[0]=E.g[0]+x&4294967295,E.g[1]=E.g[1]+(b+(P<<21&4294967295|P>>>11))&4294967295,E.g[2]=E.g[2]+b&4294967295,E.g[3]=E.g[3]+D&4294967295}r.prototype.u=function(E,x){x===void 0&&(x=E.length);for(var L=x-this.blockSize,j=this.B,b=this.h,D=0;D<x;){if(b==0)for(;D<=L;)i(this,E,D),D+=this.blockSize;if(typeof E=="string"){for(;D<x;)if(j[b++]=E.charCodeAt(D++),b==this.blockSize){i(this,j),b=0;break}}else for(;D<x;)if(j[b++]=E[D++],b==this.blockSize){i(this,j),b=0;break}}this.h=b,this.o+=x},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var x=1;x<E.length-8;++x)E[x]=0;var L=8*this.o;for(x=E.length-8;x<E.length;++x)E[x]=L&255,L/=256;for(this.u(E),E=Array(16),x=L=0;4>x;++x)for(var j=0;32>j;j+=8)E[L++]=this.g[x]>>>j&255;return E};function o(E,x){var L=a;return Object.prototype.hasOwnProperty.call(L,E)?L[E]:L[E]=x(E)}function s(E,x){this.h=x;for(var L=[],j=!0,b=E.length-1;0<=b;b--){var D=E[b]|0;j&&D==x||(L[b]=D,j=!1)}this.g=L}var a={};function u(E){return-128<=E&&128>E?o(E,function(x){return new s([x|0],0>x?-1:0)}):new s([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return S(d(-E));for(var x=[],L=1,j=0;E>=L;j++)x[j]=E/L|0,L*=4294967296;return new s(x,0)}function f(E,x){if(E.length==0)throw Error("number format error: empty string");if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(E.charAt(0)=="-")return S(f(E.substring(1),x));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var L=d(Math.pow(x,8)),j=m,b=0;b<E.length;b+=8){var D=Math.min(8,E.length-b),P=parseInt(E.substring(b,b+D),x);8>D?(D=d(Math.pow(x,D)),j=j.j(D).add(d(P))):(j=j.j(L),j=j.add(d(P)))}return j}var m=u(0),w=u(1),_=u(16777216);t=s.prototype,t.m=function(){if(A(this))return-S(this).m();for(var E=0,x=1,L=0;L<this.g.length;L++){var j=this.i(L);E+=(0<=j?j:4294967296+j)*x,x*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(T(this))return"0";if(A(this))return"-"+S(this).toString(E);for(var x=d(Math.pow(E,6)),L=this,j="";;){var b=I(L,x).g;L=y(L,b.j(x));var D=((0<L.g.length?L.g[0]:L.h)>>>0).toString(E);if(L=b,T(L))return D+j;for(;6>D.length;)D="0"+D;j=D+j}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function T(E){if(E.h!=0)return!1;for(var x=0;x<E.g.length;x++)if(E.g[x]!=0)return!1;return!0}function A(E){return E.h==-1}t.l=function(E){return E=y(this,E),A(E)?-1:T(E)?0:1};function S(E){for(var x=E.g.length,L=[],j=0;j<x;j++)L[j]=~E.g[j];return new s(L,~E.h).add(w)}t.abs=function(){return A(this)?S(this):this},t.add=function(E){for(var x=Math.max(this.g.length,E.g.length),L=[],j=0,b=0;b<=x;b++){var D=j+(this.i(b)&65535)+(E.i(b)&65535),P=(D>>>16)+(this.i(b)>>>16)+(E.i(b)>>>16);j=P>>>16,D&=65535,P&=65535,L[b]=P<<16|D}return new s(L,L[L.length-1]&-2147483648?-1:0)};function y(E,x){return E.add(S(x))}t.j=function(E){if(T(this)||T(E))return m;if(A(this))return A(E)?S(this).j(S(E)):S(S(this).j(E));if(A(E))return S(this.j(S(E)));if(0>this.l(_)&&0>E.l(_))return d(this.m()*E.m());for(var x=this.g.length+E.g.length,L=[],j=0;j<2*x;j++)L[j]=0;for(j=0;j<this.g.length;j++)for(var b=0;b<E.g.length;b++){var D=this.i(j)>>>16,P=this.i(j)&65535,Y=E.i(b)>>>16,ae=E.i(b)&65535;L[2*j+2*b]+=P*ae,g(L,2*j+2*b),L[2*j+2*b+1]+=D*ae,g(L,2*j+2*b+1),L[2*j+2*b+1]+=P*Y,g(L,2*j+2*b+1),L[2*j+2*b+2]+=D*Y,g(L,2*j+2*b+2)}for(j=0;j<x;j++)L[j]=L[2*j+1]<<16|L[2*j];for(j=x;j<2*x;j++)L[j]=0;return new s(L,0)};function g(E,x){for(;(E[x]&65535)!=E[x];)E[x+1]+=E[x]>>>16,E[x]&=65535,x++}function k(E,x){this.g=E,this.h=x}function I(E,x){if(T(x))throw Error("division by zero");if(T(E))return new k(m,m);if(A(E))return x=I(S(E),x),new k(S(x.g),S(x.h));if(A(x))return x=I(E,S(x)),new k(S(x.g),x.h);if(30<E.g.length){if(A(E)||A(x))throw Error("slowDivide_ only works with positive integers.");for(var L=w,j=x;0>=j.l(E);)L=R(L),j=R(j);var b=O(L,1),D=O(j,1);for(j=O(j,2),L=O(L,2);!T(j);){var P=D.add(j);0>=P.l(E)&&(b=b.add(L),D=P),j=O(j,1),L=O(L,1)}return x=y(E,b.j(x)),new k(b,x)}for(b=m;0<=E.l(x);){for(L=Math.max(1,Math.floor(E.m()/x.m())),j=Math.ceil(Math.log(L)/Math.LN2),j=48>=j?1:Math.pow(2,j-48),D=d(L),P=D.j(x);A(P)||0<P.l(E);)L-=j,D=d(L),P=D.j(x);T(D)&&(D=w),b=b.add(D),E=y(E,P)}return new k(b,E)}t.A=function(E){return I(this,E).h},t.and=function(E){for(var x=Math.max(this.g.length,E.g.length),L=[],j=0;j<x;j++)L[j]=this.i(j)&E.i(j);return new s(L,this.h&E.h)},t.or=function(E){for(var x=Math.max(this.g.length,E.g.length),L=[],j=0;j<x;j++)L[j]=this.i(j)|E.i(j);return new s(L,this.h|E.h)},t.xor=function(E){for(var x=Math.max(this.g.length,E.g.length),L=[],j=0;j<x;j++)L[j]=this.i(j)^E.i(j);return new s(L,this.h^E.h)};function R(E){for(var x=E.g.length+1,L=[],j=0;j<x;j++)L[j]=E.i(j)<<1|E.i(j-1)>>>31;return new s(L,E.h)}function O(E,x){var L=x>>5;x%=32;for(var j=E.g.length-L,b=[],D=0;D<j;D++)b[D]=0<x?E.i(D+L)>>>x|E.i(D+L+1)<<32-x:E.i(D+L);return new s(b,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cT=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=d,s.fromString=f,Ki=s}).apply(typeof K_<"u"?K_:typeof self<"u"?self:typeof window<"u"?window:{});var oc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dT,tl,hT,jc,Dm,fT,pT,mT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,p,v){return l==Array.prototype||l==Object.prototype||(l[p]=v.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof oc=="object"&&oc];for(var p=0;p<l.length;++p){var v=l[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=n(this);function i(l,p){if(p)e:{var v=r;l=l.split(".");for(var C=0;C<l.length-1;C++){var M=l[C];if(!(M in v))break e;v=v[M]}l=l[l.length-1],C=v[l],p=p(C),p!=C&&p!=null&&e(v,l,{configurable:!0,writable:!0,value:p})}}function o(l,p){l instanceof String&&(l+="");var v=0,C=!1,M={next:function(){if(!C&&v<l.length){var U=v++;return{value:p(U,l[U]),done:!1}}return C=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}i("Array.prototype.values",function(l){return l||function(){return o(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function u(l){var p=typeof l;return p=p!="object"?p:l?Array.isArray(l)?"array":p:"null",p=="array"||p=="object"&&typeof l.length=="number"}function d(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function f(l,p,v){return l.call.apply(l.bind,arguments)}function m(l,p,v){if(!l)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,C),l.apply(p,M)}}return function(){return l.apply(p,arguments)}}function w(l,p,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,w.apply(null,arguments)}function _(l,p){var v=Array.prototype.slice.call(arguments,1);return function(){var C=v.slice();return C.push.apply(C,arguments),l.apply(this,C)}}function T(l,p){function v(){}v.prototype=p.prototype,l.aa=p.prototype,l.prototype=new v,l.prototype.constructor=l,l.Qb=function(C,M,U){for(var H=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)H[Pe-2]=arguments[Pe];return p.prototype[M].apply(C,H)}}function A(l){const p=l.length;if(0<p){const v=Array(p);for(let C=0;C<p;C++)v[C]=l[C];return v}return[]}function S(l,p){for(let v=1;v<arguments.length;v++){const C=arguments[v];if(u(C)){const M=l.length||0,U=C.length||0;l.length=M+U;for(let H=0;H<U;H++)l[M+H]=C[H]}else l.push(C)}}class y{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function g(l){return/^[\s\xa0]*$/.test(l)}function k(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function I(l){return I[" "](l),l}I[" "]=function(){};var R=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function O(l,p,v){for(const C in l)p.call(v,l[C],C,l)}function E(l,p){for(const v in l)p.call(void 0,l[v],v,l)}function x(l){const p={};for(const v in l)p[v]=l[v];return p}const L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(l,p){let v,C;for(let M=1;M<arguments.length;M++){C=arguments[M];for(v in C)l[v]=C[v];for(let U=0;U<L.length;U++)v=L[U],Object.prototype.hasOwnProperty.call(C,v)&&(l[v]=C[v])}}function b(l){var p=1;l=l.split(":");const v=[];for(;0<p&&l.length;)v.push(l.shift()),p--;return l.length&&v.push(l.join(":")),v}function D(l){a.setTimeout(()=>{throw l},0)}function P(){var l=q;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class Y{constructor(){this.h=this.g=null}add(p,v){const C=ae.get();C.set(p,v),this.h?this.h.next=C:this.g=C,this.h=C}}var ae=new y(()=>new pe,l=>l.reset());class pe{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let me,z=!1,q=new Y,Z=()=>{const l=a.Promise.resolve(void 0);me=()=>{l.then(ce)}};var ce=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(v){D(v)}var p=ae;p.j(l),100>p.h&&(p.h++,l.next=p.g,p.g=l)}z=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var qe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const v=()=>{};a.addEventListener("test",v,p),a.removeEventListener("test",v,p)}catch{}return l}();function Ye(l,p){if(ye.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var v=this.type=l.type,C=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget){if(R){e:{try{I(p.nodeName);var M=!0;break e}catch{}M=!1}M||(p=null)}}else v=="mouseover"?p=l.fromElement:v=="mouseout"&&(p=l.toElement);this.relatedTarget=p,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Xe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ye.aa.h.call(this)}}T(Ye,ye);var Xe={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),oe=0;function se(l,p,v,C,M){this.listener=l,this.proxy=null,this.src=p,this.type=v,this.capture=!!C,this.ha=M,this.key=++oe,this.da=this.fa=!1}function le(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function de(l){this.src=l,this.g={},this.h=0}de.prototype.add=function(l,p,v,C,M){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var H=Qo(l,p,C,M);return-1<H?(p=l[H],v||(p.fa=!1)):(p=new se(p,this.src,U,!!C,M),p.fa=v,l.push(p)),p};function xe(l,p){var v=p.type;if(v in l.g){var C=l.g[v],M=Array.prototype.indexOf.call(C,p,void 0),U;(U=0<=M)&&Array.prototype.splice.call(C,M,1),U&&(le(p),l.g[v].length==0&&(delete l.g[v],l.h--))}}function Qo(l,p,v,C){for(var M=0;M<l.length;++M){var U=l[M];if(!U.da&&U.listener==p&&U.capture==!!v&&U.ha==C)return M}return-1}var ka="closure_lm_"+(1e6*Math.random()|0),wa={};function vt(l,p,v,C,M){if(Array.isArray(p)){for(var U=0;U<p.length;U++)vt(l,p[U],v,C,M);return null}return v=sy(v),l&&l[F]?l.K(p,v,d(C)?!!C.capture:!1,M):On(l,p,v,!1,C,M)}function On(l,p,v,C,M,U){if(!p)throw Error("Invalid event type");var H=d(M)?!!M.capture:!!M,Pe=ef(l);if(Pe||(l[ka]=Pe=new de(l)),v=Pe.add(p,v,C,H,U),v.proxy)return v;if(C=Xo(),v.proxy=C,C.src=l,C.listener=v,l.addEventListener)qe||(M=H),M===void 0&&(M=!1),l.addEventListener(p.toString(),C,M);else if(l.attachEvent)l.attachEvent(oy(p.toString()),C);else if(l.addListener&&l.removeListener)l.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Xo(){function l(v){return p.call(l.src,l.listener,v)}const p=iS;return l}function iy(l,p,v,C,M){if(Array.isArray(p))for(var U=0;U<p.length;U++)iy(l,p[U],v,C,M);else C=d(C)?!!C.capture:!!C,v=sy(v),l&&l[F]?(l=l.i,p=String(p).toString(),p in l.g&&(U=l.g[p],v=Qo(U,v,C,M),-1<v&&(le(U[v]),Array.prototype.splice.call(U,v,1),U.length==0&&(delete l.g[p],l.h--)))):l&&(l=ef(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Qo(p,v,C,M)),(v=-1<l?p[l]:null)&&Jh(v))}function Jh(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[F])xe(p.i,l);else{var v=l.type,C=l.proxy;p.removeEventListener?p.removeEventListener(v,C,l.capture):p.detachEvent?p.detachEvent(oy(v),C):p.addListener&&p.removeListener&&p.removeListener(C),(v=ef(p))?(xe(v,l),v.h==0&&(v.src=null,p[ka]=null)):le(l)}}}function oy(l){return l in wa?wa[l]:wa[l]="on"+l}function iS(l,p){if(l.da)l=!0;else{p=new Ye(p,this);var v=l.listener,C=l.ha||l.src;l.fa&&Jh(l),l=v.call(C,p)}return l}function ef(l){return l=l[ka],l instanceof de?l:null}var tf="__closure_events_fn_"+(1e9*Math.random()>>>0);function sy(l){return typeof l=="function"?l:(l[tf]||(l[tf]=function(p){return l.handleEvent(p)}),l[tf])}function _t(){ee.call(this),this.i=new de(this),this.M=this,this.F=null}T(_t,ee),_t.prototype[F]=!0,_t.prototype.removeEventListener=function(l,p,v,C){iy(this,l,p,v,C)};function Rt(l,p){var v,C=l.F;if(C)for(v=[];C;C=C.F)v.push(C);if(l=l.M,C=p.type||p,typeof p=="string")p=new ye(p,l);else if(p instanceof ye)p.target=p.target||l;else{var M=p;p=new ye(C,l),j(p,M)}if(M=!0,v)for(var U=v.length-1;0<=U;U--){var H=p.g=v[U];M=Iu(H,C,!0,p)&&M}if(H=p.g=l,M=Iu(H,C,!0,p)&&M,M=Iu(H,C,!1,p)&&M,v)for(U=0;U<v.length;U++)H=p.g=v[U],M=Iu(H,C,!1,p)&&M}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var l=this.i,p;for(p in l.g){for(var v=l.g[p],C=0;C<v.length;C++)le(v[C]);delete l.g[p],l.h--}}this.F=null},_t.prototype.K=function(l,p,v,C){return this.i.add(String(l),p,!1,v,C)},_t.prototype.L=function(l,p,v,C){return this.i.add(String(l),p,!0,v,C)};function Iu(l,p,v,C){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();for(var M=!0,U=0;U<p.length;++U){var H=p[U];if(H&&!H.da&&H.capture==v){var Pe=H.listener,ut=H.ha||H.src;H.fa&&xe(l.i,H),M=Pe.call(ut,C)!==!1&&M}}return M&&!C.defaultPrevented}function ay(l,p,v){if(typeof l=="function")v&&(l=w(l,v));else if(l&&typeof l.handleEvent=="function")l=w(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(l,p||0)}function ly(l){l.g=ay(()=>{l.g=null,l.i&&(l.i=!1,ly(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class oS extends ee{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:ly(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ea(l){ee.call(this),this.h=l,this.g={}}T(Ea,ee);var uy=[];function cy(l){O(l.g,function(p,v){this.g.hasOwnProperty(v)&&Jh(p)},l),l.g={}}Ea.prototype.N=function(){Ea.aa.N.call(this),cy(this)},Ea.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nf=a.JSON.stringify,sS=a.JSON.parse,aS=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function rf(){}rf.prototype.h=null;function dy(l){return l.h||(l.h=l.i())}function hy(){}var xa={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function of(){ye.call(this,"d")}T(of,ye);function sf(){ye.call(this,"c")}T(sf,ye);var Ai={},fy=null;function Su(){return fy=fy||new _t}Ai.La="serverreachability";function py(l){ye.call(this,Ai.La,l)}T(py,ye);function Ta(l){const p=Su();Rt(p,new py(p))}Ai.STAT_EVENT="statevent";function my(l,p){ye.call(this,Ai.STAT_EVENT,l),this.stat=p}T(my,ye);function bt(l){const p=Su();Rt(p,new my(p,l))}Ai.Ma="timingevent";function gy(l,p){ye.call(this,Ai.Ma,l),this.size=p}T(gy,ye);function Ia(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},p)}function Sa(){this.g=!0}Sa.prototype.xa=function(){this.g=!1};function lS(l,p,v,C,M,U){l.info(function(){if(l.g)if(U)for(var H="",Pe=U.split("&"),ut=0;ut<Pe.length;ut++){var ke=Pe[ut].split("=");if(1<ke.length){var kt=ke[0];ke=ke[1];var wt=kt.split("_");H=2<=wt.length&&wt[1]=="type"?H+(kt+"="+ke+"&"):H+(kt+"=redacted&")}}else H=null;else H=U;return"XMLHTTP REQ ("+C+") [attempt "+M+"]: "+p+`
`+v+`
`+H})}function uS(l,p,v,C,M,U,H){l.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+M+"]: "+p+`
`+v+`
`+U+" "+H})}function Zo(l,p,v,C){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+dS(l,v)+(C?" "+C:"")})}function cS(l,p){l.info(function(){return"TIMEOUT: "+p})}Sa.prototype.info=function(){};function dS(l,p){if(!l.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(l=0;l<v.length;l++)if(Array.isArray(v[l])){var C=v[l];if(!(2>C.length)){var M=C[1];if(Array.isArray(M)&&!(1>M.length)){var U=M[0];if(U!="noop"&&U!="stop"&&U!="close")for(var H=1;H<M.length;H++)M[H]=""}}}}return nf(v)}catch{return p}}var Cu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},af;function Au(){}T(Au,rf),Au.prototype.g=function(){return new XMLHttpRequest},Au.prototype.i=function(){return{}},af=new Au;function Lr(l,p,v,C){this.j=l,this.i=p,this.l=v,this.R=C||1,this.U=new Ea(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vy}function vy(){this.i=null,this.g="",this.h=!1}var _y={},lf={};function uf(l,p,v){l.L=1,l.v=bu(rr(p)),l.m=v,l.P=!0,ky(l,null)}function ky(l,p){l.F=Date.now(),Lu(l),l.A=rr(l.v);var v=l.A,C=l.R;Array.isArray(C)||(C=[String(C)]),Dy(v.i,"t",C),l.C=0,v=l.j.J,l.h=new vy,l.g=Zy(l.j,v?p:null,!l.m),0<l.O&&(l.M=new oS(w(l.Y,l,l.g),l.O)),p=l.U,v=l.g,C=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(uy[0]=M.toString()),M=uy);for(var U=0;U<M.length;U++){var H=vt(v,M[U],C||p.handleEvent,!1,p.h||p);if(!H)break;p.g[H.key]=H}p=l.H?x(l.H):{},l.m?(l.u||(l.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,p)):(l.u="GET",l.g.ea(l.A,l.u,null,p)),Ta(),lS(l.i,l.u,l.A,l.l,l.R,l.m)}Lr.prototype.ca=function(l){l=l.target;const p=this.M;p&&ir(l)==3?p.j():this.Y(l)},Lr.prototype.Y=function(l){try{if(l==this.g)e:{const wt=ir(this.g);var p=this.g.Ba();const ts=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||Wy(this.g)))){this.J||wt!=4||p==7||(p==8||0>=ts?Ta(3):Ta(2)),cf(this);var v=this.g.Z();this.X=v;t:if(wy(this)){var C=Wy(this.g);l="";var M=C.length,U=ir(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Li(this),Ca(this);var H="";break t}this.h.i=new a.TextDecoder}for(p=0;p<M;p++)this.h.h=!0,l+=this.h.i.decode(C[p],{stream:!(U&&p==M-1)});C.length=0,this.h.g+=l,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=v==200,uS(this.i,this.u,this.A,this.l,this.R,wt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,ut=this.g;if((Pe=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Pe)){var ke=Pe;break t}}ke=null}if(v=ke)Zo(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,df(this,v);else{this.o=!1,this.s=3,bt(12),Li(this),Ca(this);break e}}if(this.P){v=!0;let vn;for(;!this.J&&this.C<H.length;)if(vn=hS(this,H),vn==lf){wt==4&&(this.s=4,bt(14),v=!1),Zo(this.i,this.l,null,"[Incomplete Response]");break}else if(vn==_y){this.s=4,bt(15),Zo(this.i,this.l,H,"[Invalid Chunk]"),v=!1;break}else Zo(this.i,this.l,vn,null),df(this,vn);if(wy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||H.length!=0||this.h.h||(this.s=1,bt(16),v=!1),this.o=this.o&&v,!v)Zo(this.i,this.l,H,"[Invalid Chunked Response]"),Li(this),Ca(this);else if(0<H.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),yf(kt),kt.M=!0,bt(11))}}else Zo(this.i,this.l,H,null),df(this,H);wt==4&&Li(this),this.o&&!this.J&&(wt==4?Gy(this.j,this):(this.o=!1,Lu(this)))}else LS(this.g),v==400&&0<H.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Li(this),Ca(this)}}}catch{}finally{}};function wy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function hS(l,p){var v=l.C,C=p.indexOf(`
`,v);return C==-1?lf:(v=Number(p.substring(v,C)),isNaN(v)?_y:(C+=1,C+v>p.length?lf:(p=p.slice(C,C+v),l.C=C+v,p)))}Lr.prototype.cancel=function(){this.J=!0,Li(this)};function Lu(l){l.S=Date.now()+l.I,Ey(l,l.I)}function Ey(l,p){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ia(w(l.ba,l),p)}function cf(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Lr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(cS(this.i,this.A),this.L!=2&&(Ta(),bt(17)),Li(this),this.s=2,Ca(this)):Ey(this,this.S-l)};function Ca(l){l.j.G==0||l.J||Gy(l.j,l)}function Li(l){cf(l);var p=l.M;p&&typeof p.ma=="function"&&p.ma(),l.M=null,cy(l.U),l.g&&(p=l.g,l.g=null,p.abort(),p.ma())}function df(l,p){try{var v=l.j;if(v.G!=0&&(v.g==l||hf(v.h,l))){if(!l.K&&hf(v.h,l)&&v.G==3){try{var C=v.Da.g.parse(p)}catch{C=null}if(Array.isArray(C)&&C.length==3){var M=C;if(M[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<l.F)Vu(v),Nu(v);else break e;gf(v),bt(18)}}else v.za=M[1],0<v.za-v.T&&37500>M[2]&&v.F&&v.v==0&&!v.C&&(v.C=Ia(w(v.Za,v),6e3));if(1>=Iy(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ri(v,11)}else if((l.K||v.g==l)&&Vu(v),!g(p))for(M=v.Da.g.parse(p),p=0;p<M.length;p++){let ke=M[p];if(v.T=ke[0],ke=ke[1],v.G==2)if(ke[0]=="c"){v.K=ke[1],v.ia=ke[2];const kt=ke[3];kt!=null&&(v.la=kt,v.j.info("VER="+v.la));const wt=ke[4];wt!=null&&(v.Aa=wt,v.j.info("SVER="+v.Aa));const ts=ke[5];ts!=null&&typeof ts=="number"&&0<ts&&(C=1.5*ts,v.L=C,v.j.info("backChannelRequestTimeoutMs_="+C)),C=v;const vn=l.g;if(vn){const Uu=vn.g?vn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Uu){var U=C.h;U.g||Uu.indexOf("spdy")==-1&&Uu.indexOf("quic")==-1&&Uu.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(ff(U,U.h),U.h=null))}if(C.D){const vf=vn.g?vn.g.getResponseHeader("X-HTTP-Session-Id"):null;vf&&(C.ya=vf,be(C.I,C.D,vf))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-l.F,v.j.info("Handshake RTT: "+v.R+"ms")),C=v;var H=l;if(C.qa=Xy(C,C.J?C.ia:null,C.W),H.K){Sy(C.h,H);var Pe=H,ut=C.L;ut&&(Pe.I=ut),Pe.B&&(cf(Pe),Lu(Pe)),C.g=H}else qy(C);0<v.i.length&&Mu(v)}else ke[0]!="stop"&&ke[0]!="close"||Ri(v,7);else v.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Ri(v,7):mf(v):ke[0]!="noop"&&v.l&&v.l.ta(ke),v.v=0)}}Ta(4)}catch{}}var fS=class{constructor(l,p){this.g=l,this.map=p}};function xy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ty(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Iy(l){return l.h?1:l.g?l.g.size:0}function hf(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function ff(l,p){l.g?l.g.add(p):l.h=p}function Sy(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}xy.prototype.cancel=function(){if(this.i=Cy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Cy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const v of l.g.values())p=p.concat(v.D);return p}return A(l.i)}function pS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var p=[],v=l.length,C=0;C<v;C++)p.push(l[C]);return p}p=[],v=0;for(C in l)p[v++]=l[C];return p}function mS(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var p=[];l=l.length;for(var v=0;v<l;v++)p.push(v);return p}p=[],v=0;for(const C in l)p[v++]=C;return p}}}function Ay(l,p){if(l.forEach&&typeof l.forEach=="function")l.forEach(p,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,p,void 0);else for(var v=mS(l),C=pS(l),M=C.length,U=0;U<M;U++)p.call(void 0,C[U],v&&v[U],l)}var Ly=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gS(l,p){if(l){l=l.split("&");for(var v=0;v<l.length;v++){var C=l[v].indexOf("="),M=null;if(0<=C){var U=l[v].substring(0,C);M=l[v].substring(C+1)}else U=l[v];p(U,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Pi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Pi){this.h=l.h,Pu(this,l.j),this.o=l.o,this.g=l.g,Ru(this,l.s),this.l=l.l;var p=l.i,v=new Pa;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),Py(this,v),this.m=l.m}else l&&(p=String(l).match(Ly))?(this.h=!1,Pu(this,p[1]||"",!0),this.o=Aa(p[2]||""),this.g=Aa(p[3]||"",!0),Ru(this,p[4]),this.l=Aa(p[5]||"",!0),Py(this,p[6]||"",!0),this.m=Aa(p[7]||"")):(this.h=!1,this.i=new Pa(null,this.h))}Pi.prototype.toString=function(){var l=[],p=this.j;p&&l.push(La(p,Ry,!0),":");var v=this.g;return(v||p=="file")&&(l.push("//"),(p=this.o)&&l.push(La(p,Ry,!0),"@"),l.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&l.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&l.push("/"),l.push(La(v,v.charAt(0)=="/"?_S:vS,!0))),(v=this.i.toString())&&l.push("?",v),(v=this.m)&&l.push("#",La(v,wS)),l.join("")};function rr(l){return new Pi(l)}function Pu(l,p,v){l.j=v?Aa(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Ru(l,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);l.s=p}else l.s=null}function Py(l,p,v){p instanceof Pa?(l.i=p,ES(l.i,l.h)):(v||(p=La(p,kS)),l.i=new Pa(p,l.h))}function be(l,p,v){l.i.set(p,v)}function bu(l){return be(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Aa(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function La(l,p,v){return typeof l=="string"?(l=encodeURI(l).replace(p,yS),v&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function yS(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ry=/[#\/\?@]/g,vS=/[#\?:]/g,_S=/[#\?]/g,kS=/[#\?@]/g,wS=/#/g;function Pa(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Pr(l){l.g||(l.g=new Map,l.h=0,l.i&&gS(l.i,function(p,v){l.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}t=Pa.prototype,t.add=function(l,p){Pr(this),this.i=null,l=Jo(this,l);var v=this.g.get(l);return v||this.g.set(l,v=[]),v.push(p),this.h+=1,this};function by(l,p){Pr(l),p=Jo(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function jy(l,p){return Pr(l),p=Jo(l,p),l.g.has(p)}t.forEach=function(l,p){Pr(this),this.g.forEach(function(v,C){v.forEach(function(M){l.call(p,M,C,this)},this)},this)},t.na=function(){Pr(this);const l=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let C=0;C<p.length;C++){const M=l[C];for(let U=0;U<M.length;U++)v.push(p[C])}return v},t.V=function(l){Pr(this);let p=[];if(typeof l=="string")jy(this,l)&&(p=p.concat(this.g.get(Jo(this,l))));else{l=Array.from(this.g.values());for(let v=0;v<l.length;v++)p=p.concat(l[v])}return p},t.set=function(l,p){return Pr(this),this.i=null,l=Jo(this,l),jy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},t.get=function(l,p){return l?(l=this.V(l),0<l.length?String(l[0]):p):p};function Dy(l,p,v){by(l,p),0<v.length&&(l.i=null,l.g.set(Jo(l,p),A(v)),l.h+=v.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var C=p[v];const U=encodeURIComponent(String(C)),H=this.V(C);for(C=0;C<H.length;C++){var M=U;H[C]!==""&&(M+="="+encodeURIComponent(String(H[C]))),l.push(M)}}return this.i=l.join("&")};function Jo(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function ES(l,p){p&&!l.j&&(Pr(l),l.i=null,l.g.forEach(function(v,C){var M=C.toLowerCase();C!=M&&(by(this,C),Dy(this,M,v))},l)),l.j=p}function xS(l,p){const v=new Sa;if(a.Image){const C=new Image;C.onload=_(Rr,v,"TestLoadImage: loaded",!0,p,C),C.onerror=_(Rr,v,"TestLoadImage: error",!1,p,C),C.onabort=_(Rr,v,"TestLoadImage: abort",!1,p,C),C.ontimeout=_(Rr,v,"TestLoadImage: timeout",!1,p,C),a.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=l}else p(!1)}function TS(l,p){const v=new Sa,C=new AbortController,M=setTimeout(()=>{C.abort(),Rr(v,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:C.signal}).then(U=>{clearTimeout(M),U.ok?Rr(v,"TestPingServer: ok",!0,p):Rr(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Rr(v,"TestPingServer: error",!1,p)})}function Rr(l,p,v,C,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),C(v)}catch{}}function IS(){this.g=new aS}function SS(l,p,v){const C=v||"";try{Ay(l,function(M,U){let H=M;d(M)&&(H=nf(M)),p.push(C+U+"="+encodeURIComponent(H))})}catch(M){throw p.push(C+"type="+encodeURIComponent("_badmap")),M}}function ju(l){this.l=l.Ub||null,this.j=l.eb||!1}T(ju,rf),ju.prototype.g=function(){return new Du(this.l,this.j)},ju.prototype.i=function(l){return function(){return l}}({});function Du(l,p){_t.call(this),this.D=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Du,_t),t=Du.prototype,t.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=p,this.readyState=1,ba(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(p.body=l),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ra(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ba(this)),this.g&&(this.readyState=3,ba(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Oy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Oy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Ra(this):ba(this),this.readyState==3&&Oy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ra(this))},t.Qa=function(l){this.g&&(this.response=l,Ra(this))},t.ga=function(){this.g&&Ra(this)};function Ra(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ba(l)}t.setRequestHeader=function(l,p){this.u.append(l,p)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,l.push(v[0]+": "+v[1]),v=p.next();return l.join(`\r
`)};function ba(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Du.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Ny(l){let p="";return O(l,function(v,C){p+=C,p+=":",p+=v,p+=`\r
`}),p}function pf(l,p,v){e:{for(C in v){var C=!1;break e}C=!0}C||(v=Ny(v),typeof l=="string"?v!=null&&encodeURIComponent(String(v)):be(l,p,v))}function Be(l){_t.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Be,_t);var CS=/^https?$/i,AS=["POST","PUT"];t=Be.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,p,v,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():af.g(),this.v=this.o?dy(this.o):dy(af),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(U){My(this,U);return}if(l=v||"",v=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var M in C)v.set(M,C[M]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const U of C.keys())v.set(U,C.get(U));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(v.keys()).find(U=>U.toLowerCase()=="content-type"),M=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(AS,p,void 0))||C||M||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,H]of v)this.g.setRequestHeader(U,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Uy(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){My(this,U)}};function My(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.m=5,Vy(l),Ou(l)}function Vy(l){l.A||(l.A=!0,Rt(l,"complete"),Rt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Rt(this,"complete"),Rt(this,"abort"),Ou(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ou(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Fy(this):this.bb())},t.bb=function(){Fy(this)};function Fy(l){if(l.h&&typeof s<"u"&&(!l.v[1]||ir(l)!=4||l.Z()!=2)){if(l.u&&ir(l)==4)ay(l.Ea,0,l);else if(Rt(l,"readystatechange"),ir(l)==4){l.h=!1;try{const H=l.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var C;if(C=H===0){var M=String(l.D).match(Ly)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),C=!CS.test(M?M.toLowerCase():"")}v=C}if(v)Rt(l,"complete"),Rt(l,"success");else{l.m=6;try{var U=2<ir(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",Vy(l)}}finally{Ou(l)}}}}function Ou(l,p){if(l.g){Uy(l);const v=l.g,C=l.v[0]?()=>{}:null;l.g=null,l.v=null,p||Rt(l,"ready");try{v.onreadystatechange=C}catch{}}}function Uy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function ir(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<ir(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),sS(p)}};function Wy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function LS(l){const p={};l=(l.g&&2<=ir(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<l.length;C++){if(g(l[C]))continue;var v=b(l[C]);const M=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const U=p[M]||[];p[M]=U,U.push(v)}E(p,function(C){return C.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ja(l,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[l]||p}function $y(l){this.Aa=0,this.i=[],this.j=new Sa,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ja("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ja("baseRetryDelayMs",5e3,l),this.cb=ja("retryDelaySeedMs",1e4,l),this.Wa=ja("forwardChannelMaxRetries",2,l),this.wa=ja("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new xy(l&&l.concurrentRequestLimit),this.Da=new IS,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=$y.prototype,t.la=8,t.G=1,t.connect=function(l,p,v,C){bt(0),this.W=l,this.H=p||{},v&&C!==void 0&&(this.H.OSID=v,this.H.OAID=C),this.F=this.X,this.I=Xy(this,null,this.W),Mu(this)};function mf(l){if(zy(l),l.G==3){var p=l.U++,v=rr(l.I);if(be(v,"SID",l.K),be(v,"RID",p),be(v,"TYPE","terminate"),Da(l,v),p=new Lr(l,l.j,p),p.L=2,p.v=bu(rr(v)),v=!1,a.navigator&&a.navigator.sendBeacon)try{v=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&a.Image&&(new Image().src=p.v,v=!0),v||(p.g=Zy(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Lu(p)}Qy(l)}function Nu(l){l.g&&(yf(l),l.g.cancel(),l.g=null)}function zy(l){Nu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Vu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Mu(l){if(!Ty(l.h)&&!l.s){l.s=!0;var p=l.Ga;me||Z(),z||(me(),z=!0),q.add(p,l),l.B=0}}function PS(l,p){return Iy(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=p.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ia(w(l.Ga,l,p),Ky(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new Lr(this,this.j,l);let U=this.o;if(this.S&&(U?(U=x(U),j(U,this.S)):U=this.S),this.m!==null||this.O||(M.H=U,U=null),this.P)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var C=this.i[v];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(p+=C,4096<p){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=Hy(this,M,p),v=rr(this.I),be(v,"RID",l),be(v,"CVER",22),this.D&&be(v,"X-HTTP-Session-Id",this.D),Da(this,v),U&&(this.O?p="headers="+encodeURIComponent(String(Ny(U)))+"&"+p:this.m&&pf(v,this.m,U)),ff(this.h,M),this.Ua&&be(v,"TYPE","init"),this.P?(be(v,"$req",p),be(v,"SID","null"),M.T=!0,uf(M,v,null)):uf(M,v,p),this.G=2}}else this.G==3&&(l?By(this,l):this.i.length==0||Ty(this.h)||By(this))};function By(l,p){var v;p?v=p.l:v=l.U++;const C=rr(l.I);be(C,"SID",l.K),be(C,"RID",v),be(C,"AID",l.T),Da(l,C),l.m&&l.o&&pf(C,l.m,l.o),v=new Lr(l,l.j,v,l.B+1),l.m===null&&(v.H=l.o),p&&(l.i=p.D.concat(l.i)),p=Hy(l,v,1e3),v.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ff(l.h,v),uf(v,C,p)}function Da(l,p){l.H&&O(l.H,function(v,C){be(p,C,v)}),l.l&&Ay({},function(v,C){be(p,C,v)})}function Hy(l,p,v){v=Math.min(l.i.length,v);var C=l.l?w(l.l.Na,l.l,l):null;e:{var M=l.i;let U=-1;for(;;){const H=["count="+v];U==-1?0<v?(U=M[0].g,H.push("ofs="+U)):U=0:H.push("ofs="+U);let Pe=!0;for(let ut=0;ut<v;ut++){let ke=M[ut].g;const kt=M[ut].map;if(ke-=U,0>ke)U=Math.max(0,M[ut].g-100),Pe=!1;else try{SS(kt,H,"req"+ke+"_")}catch{C&&C(kt)}}if(Pe){C=H.join("&");break e}}}return l=l.i.splice(0,v),p.D=l,C}function qy(l){if(!l.g&&!l.u){l.Y=1;var p=l.Fa;me||Z(),z||(me(),z=!0),q.add(p,l),l.v=0}}function gf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ia(w(l.Fa,l),Ky(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Yy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ia(w(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),Nu(this),Yy(this))};function yf(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Yy(l){l.g=new Lr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var p=rr(l.qa);be(p,"RID","rpc"),be(p,"SID",l.K),be(p,"AID",l.T),be(p,"CI",l.F?"0":"1"),!l.F&&l.ja&&be(p,"TO",l.ja),be(p,"TYPE","xmlhttp"),Da(l,p),l.m&&l.o&&pf(p,l.m,l.o),l.L&&(l.g.I=l.L);var v=l.g;l=l.ia,v.L=1,v.v=bu(rr(p)),v.m=null,v.P=!0,ky(v,l)}t.Za=function(){this.C!=null&&(this.C=null,Nu(this),gf(this),bt(19))};function Vu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Gy(l,p){var v=null;if(l.g==p){Vu(l),yf(l),l.g=null;var C=2}else if(hf(l.h,p))v=p.D,Sy(l.h,p),C=1;else return;if(l.G!=0){if(p.o)if(C==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var M=l.B;C=Su(),Rt(C,new gy(C,v)),Mu(l)}else qy(l);else if(M=p.s,M==3||M==0&&0<p.X||!(C==1&&PS(l,p)||C==2&&gf(l)))switch(v&&0<v.length&&(p=l.h,p.i=p.i.concat(v)),M){case 1:Ri(l,5);break;case 4:Ri(l,10);break;case 3:Ri(l,6);break;default:Ri(l,2)}}}function Ky(l,p){let v=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(v*=2),v*p}function Ri(l,p){if(l.j.info("Error code "+p),p==2){var v=w(l.fb,l),C=l.Xa;const M=!C;C=new Pi(C||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Pu(C,"https"),bu(C),M?xS(C.toString(),v):TS(C.toString(),v)}else bt(2);l.G=0,l.l&&l.l.sa(p),Qy(l),zy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Qy(l){if(l.G=0,l.ka=[],l.l){const p=Cy(l.h);(p.length!=0||l.i.length!=0)&&(S(l.ka,p),S(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function Xy(l,p,v){var C=v instanceof Pi?rr(v):new Pi(v);if(C.g!="")p&&(C.g=p+"."+C.g),Ru(C,C.s);else{var M=a.location;C=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;var U=new Pi(null);C&&Pu(U,C),p&&(U.g=p),M&&Ru(U,M),v&&(U.l=v),C=U}return v=l.D,p=l.ya,v&&p&&be(C,v,p),be(C,"VER",l.la),Da(l,C),C}function Zy(l,p,v){if(p&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Ca&&!l.pa?new Be(new ju({eb:v})):new Be(l.pa),p.Ha(l.J),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jy(){}t=Jy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Fu(){}Fu.prototype.g=function(l,p){return new Qt(l,p)};function Qt(l,p){_t.call(this),this.g=new $y(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(l?l["X-WebChannel-Client-Profile"]=p.va:l={"X-WebChannel-Client-Profile":p.va}),this.g.S=l,(l=p&&p.Sb)&&!g(l)&&(this.g.m=l),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!g(p)&&(this.g.D=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new es(this)}T(Qt,_t),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){mf(this.g)},Qt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var v={};v.__data__=l,l=v}else this.u&&(v={},v.__data__=nf(l),l=v);p.i.push(new fS(p.Ya++,l)),p.G==3&&Mu(p)},Qt.prototype.N=function(){this.g.l=null,delete this.j,mf(this.g),delete this.g,Qt.aa.N.call(this)};function ev(l){of.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const v in p){l=v;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}T(ev,of);function tv(){sf.call(this),this.status=1}T(tv,sf);function es(l){this.g=l}T(es,Jy),es.prototype.ua=function(){Rt(this.g,"a")},es.prototype.ta=function(l){Rt(this.g,new ev(l))},es.prototype.sa=function(l){Rt(this.g,new tv)},es.prototype.ra=function(){Rt(this.g,"b")},Fu.prototype.createWebChannel=Fu.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,mT=function(){return new Fu},pT=function(){return Su()},fT=Ai,Dm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Cu.NO_ERROR=0,Cu.TIMEOUT=8,Cu.HTTP_ERROR=6,jc=Cu,yy.COMPLETE="complete",hT=yy,hy.EventType=xa,xa.OPEN="a",xa.CLOSE="b",xa.ERROR="c",xa.MESSAGE="d",_t.prototype.listen=_t.prototype.K,tl=hy,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,dT=Be}).apply(typeof oc<"u"?oc:typeof self<"u"?self:typeof window<"u"?window:{});const Q_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let ma="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new mh("@firebase/firestore");function za(){return so.logLevel}function X(t,...e){if(so.logLevel<=ge.DEBUG){const n=e.map(X0);so.debug(`Firestore (${ma}): ${t}`,...n)}}function Ir(t,...e){if(so.logLevel<=ge.ERROR){const n=e.map(X0);so.error(`Firestore (${ma}): ${t}`,...n)}}function Ks(t,...e){if(so.logLevel<=ge.WARN){const n=e.map(X0);so.warn(`Firestore (${ma}): ${t}`,...n)}}function X0(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${ma}) INTERNAL ASSERTION FAILED: `+t;throw Ir(e),new Error(e)}function Se(t,e){t||ne()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ib{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class ob{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sb{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new vr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new vr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new gT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new It(e)}}class ab{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ab(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ub{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Se(this.o===void 0);const r=o=>{o.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,X("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new ub(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=db(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Qs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new nt(0,0))}static max(){return new re(new nt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends Gl{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const hb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Gl{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return hb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new K(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new K(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Oe.fromString(e))}static fromName(e){return new J(Oe.fromString(e).popFirst(5))}static empty(){return new J(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Oe(e.slice()))}}function fb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new mi(i,J.empty(),e)}function pb(t){return new mi(t.readTime,t.key,-1)}class mi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mi(re.min(),J.empty(),-1)}static max(){return new mi(re.max(),J.empty(),-1)}}function mb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==gb)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let u=0;u<o;u++){const d=u;n(e[d]).next(f=>{s[d]=f,++a,a===o&&r(s)},f=>i(f))}})}static doWhile(e,n){return new $((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function vb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function gu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Z0{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Z0.oe=-1;function kh(t){return t==null}function Td(t){return t===0&&1/t==-1/0}function _b(t){return typeof t=="number"&&Number.isInteger(t)&&!Td(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sc(this.root,e,this.comparator,!1)}getReverseIterator(){return new sc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sc(this.root,e,this.comparator,!0)}}class sc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??dt.RED,this.left=i??dt.EMPTY,this.right=o??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new dt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,i,o){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Z_(this.data.getIterator())}getIteratorFrom(e){return new Z_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new mt(this.comparator);return n.data=e,n}}class Z_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new en([])}unionWith(e){let n=new mt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class _T extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new _T("Invalid base64 string: "+o):o}}(e);return new yt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const kb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gi(t){if(Se(!!t),typeof t=="string"){let e=0;const n=kb.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ao(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function e1(t){const e=t.mapValue.fields.__previous_value__;return J0(e)?e1(e):e}function Kl(t){const e=gi(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n,r,i,o,s,a,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=d}}class Ql{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ql("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ql&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac={mapValue:{}};function lo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?J0(t)?4:xb(t)?9007199254740991:Eb(t)?10:11:ne()}function Xn(t,e){if(t===e)return!0;const n=lo(t);if(n!==lo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Kl(t).isEqual(Kl(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=gi(i.timestampValue),a=gi(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return ao(i.bytesValue).isEqual(ao(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Ge(i.geoPointValue.latitude)===Ge(o.geoPointValue.latitude)&&Ge(i.geoPointValue.longitude)===Ge(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Ge(i.integerValue)===Ge(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Ge(i.doubleValue),a=Ge(o.doubleValue);return s===a?Td(s)===Td(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return Qs(t.arrayValue.values||[],e.arrayValue.values||[],Xn);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(X_(s)!==X_(a))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(a[u]===void 0||!Xn(s[u],a[u])))return!1;return!0}(t,e);default:return ne()}}function Xl(t,e){return(t.values||[]).find(n=>Xn(n,e))!==void 0}function Xs(t,e){if(t===e)return 0;const n=lo(t),r=lo(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Ge(o.integerValue||o.doubleValue),u=Ge(s.integerValue||s.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return J_(t.timestampValue,e.timestampValue);case 4:return J_(Kl(t),Kl(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(o,s){const a=ao(o),u=ao(s);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),u=s.split("/");for(let d=0;d<a.length&&d<u.length;d++){const f=we(a[d],u[d]);if(f!==0)return f}return we(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=we(Ge(o.latitude),Ge(s.latitude));return a!==0?a:we(Ge(o.longitude),Ge(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return e2(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,u,d,f;const m=o.fields||{},w=s.fields||{},_=(a=m.value)===null||a===void 0?void 0:a.arrayValue,T=(u=w.value)===null||u===void 0?void 0:u.arrayValue,A=we(((d=_==null?void 0:_.values)===null||d===void 0?void 0:d.length)||0,((f=T==null?void 0:T.values)===null||f===void 0?void 0:f.length)||0);return A!==0?A:e2(_,T)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===ac.mapValue&&s===ac.mapValue)return 0;if(o===ac.mapValue)return 1;if(s===ac.mapValue)return-1;const a=o.fields||{},u=Object.keys(a),d=s.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const w=we(u[m],f[m]);if(w!==0)return w;const _=Xs(a[u[m]],d[f[m]]);if(_!==0)return _}return we(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ne()}}function J_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=gi(t),r=gi(e),i=we(n.seconds,r.seconds);return i!==0?i:we(n.nanos,r.nanos)}function e2(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=Xs(n[i],r[i]);if(o)return o}return we(n.length,r.length)}function Zs(t){return Om(t)}function Om(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ao(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Om(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Om(n.fields[s])}`;return i+"}"}(t.mapValue):ne()}function t2(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Nm(t){return!!t&&"integerValue"in t}function t1(t){return!!t&&"arrayValue"in t}function n2(t){return!!t&&"nullValue"in t}function r2(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Dc(t){return!!t&&"mapValue"in t}function Eb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function yl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return yo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Dc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yl(n)}setAll(e){let n=ht.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=yl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Dc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Dc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){yo(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Wt(yl(this.value))}}function kT(t){const e=[];return yo(t.fields,(n,r)=>{const i=new ht([n]);if(Dc(r)){const o=kT(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new en(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Ct(e,0,re.min(),re.min(),re.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ct(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new Ct(e,2,n,re.min(),re.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new Ct(e,3,n,re.min(),re.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Id{constructor(e,n){this.position=e,this.inclusive=n}}function i2(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=J.comparator(J.fromName(s.referenceValue),n.key):r=Xs(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function o2(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Zl{constructor(e,n="asc"){this.field=e,this.dir=n}}function Tb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class wT{}class tt extends wT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Sb(e,n,r):n==="array-contains"?new Lb(e,r):n==="in"?new Pb(e,r):n==="not-in"?new Rb(e,r):n==="array-contains-any"?new bb(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Cb(e,r):new Ab(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xs(n,this.value)):n!==null&&lo(this.value)===lo(n)&&this.matchesComparison(Xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends wT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new jn(e,n)}matches(e){return ET(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ET(t){return t.op==="and"}function xT(t){return Ib(t)&&ET(t)}function Ib(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function Mm(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+Zs(t.value);if(xT(t))return t.filters.map(e=>Mm(e)).join(",");{const e=t.filters.map(n=>Mm(n)).join(",");return`${t.op}(${e})`}}function TT(t,e){return t instanceof tt?function(r,i){return i instanceof tt&&r.op===i.op&&r.field.isEqual(i.field)&&Xn(r.value,i.value)}(t,e):t instanceof jn?function(r,i){return i instanceof jn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&TT(s,i.filters[a]),!0):!1}(t,e):void ne()}function IT(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${Zs(n.value)}`}(t):t instanceof jn?function(n){return n.op.toString()+" {"+n.getFilters().map(IT).join(" ,")+"}"}(t):"Filter"}class Sb extends tt{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class Cb extends tt{constructor(e,n){super(e,"in",n),this.keys=ST("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ab extends tt{constructor(e,n){super(e,"not-in",n),this.keys=ST("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ST(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class Lb extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return t1(n)&&Xl(n.arrayValue,this.value)}}class Pb extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xl(this.value.arrayValue,n)}}class Rb extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xl(this.value.arrayValue,n)}}class bb extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!t1(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function s2(t,e=null,n=[],r=[],i=null,o=null,s=null){return new jb(t,e,n,r,i,o,s)}function n1(t){const e=ie(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Mm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),kh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zs(r)).join(",")),e.ue=n}return e.ue}function r1(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Tb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!TT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!o2(t.startAt,e.startAt)&&o2(t.endAt,e.endAt)}function Vm(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Db(t,e,n,r,i,o,s,a){return new ga(t,e,n,r,i,o,s,a)}function i1(t){return new ga(t)}function a2(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function CT(t){return t.collectionGroup!==null}function vl(t){const e=ie(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new mt(ht.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Zl(o,r))}),n.has(ht.keyField().canonicalString())||e.ce.push(new Zl(ht.keyField(),r))}return e.ce}function Kn(t){const e=ie(t);return e.le||(e.le=Ob(e,vl(t))),e.le}function Ob(t,e){if(t.limitType==="F")return s2(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Zl(i.field,o)});const n=t.endAt?new Id(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Id(t.startAt.position,t.startAt.inclusive):null;return s2(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Fm(t,e){const n=t.filters.concat([e]);return new ga(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Sd(t,e,n){return new ga(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wh(t,e){return r1(Kn(t),Kn(e))&&t.limitType===e.limitType}function AT(t){return`${n1(Kn(t))}|lt:${t.limitType}`}function hs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>IT(i)).join(", ")}]`),kh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Zs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Zs(i)).join(",")),`Target(${r})`}(Kn(t))}; limitType=${t.limitType})`}function Eh(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):J.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of vl(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,u){const d=i2(s,a,u);return s.inclusive?d<=0:d<0}(r.startAt,vl(r),i)||r.endAt&&!function(s,a,u){const d=i2(s,a,u);return s.inclusive?d>=0:d>0}(r.endAt,vl(r),i))}(t,e)}function Nb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function LT(t){return(e,n)=>{let r=!1;for(const i of vl(t)){const o=Mb(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Mb(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(o,s,a){const u=s.data.field(o),d=a.data.field(o);return u!==null&&d!==null?Xs(u,d):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){yo(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return vT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=new $e(J.comparator);function Sr(){return Vb}const PT=new $e(J.comparator);function nl(...t){let e=PT;for(const n of t)e=e.insert(n.key,n);return e}function RT(t){let e=PT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Bi(){return _l()}function bT(){return _l()}function _l(){return new ya(t=>t.toString(),(t,e)=>t.isEqual(e))}const Fb=new $e(J.comparator),Ub=new mt(J.comparator);function fe(...t){let e=Ub;for(const n of t)e=e.add(n);return e}const Wb=new mt(we);function $b(){return Wb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Td(e)?"-0":e}}function jT(t){return{integerValue:""+t}}function zb(t,e){return _b(e)?jT(e):o1(t,e)}/**
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
 */class xh{constructor(){this._=void 0}}function Bb(t,e,n){return t instanceof Jl?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&J0(o)&&(o=e1(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof eu?OT(t,e):t instanceof tu?NT(t,e):function(i,o){const s=DT(i,o),a=l2(s)+l2(i.Pe);return Nm(s)&&Nm(i.Pe)?jT(a):o1(i.serializer,a)}(t,e)}function Hb(t,e,n){return t instanceof eu?OT(t,e):t instanceof tu?NT(t,e):n}function DT(t,e){return t instanceof Cd?function(r){return Nm(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Jl extends xh{}class eu extends xh{constructor(e){super(),this.elements=e}}function OT(t,e){const n=MT(e);for(const r of t.elements)n.some(i=>Xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class tu extends xh{constructor(e){super(),this.elements=e}}function NT(t,e){let n=MT(e);for(const r of t.elements)n=n.filter(i=>!Xn(i,r));return{arrayValue:{values:n}}}class Cd extends xh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function l2(t){return Ge(t.integerValue||t.doubleValue)}function MT(t){return t1(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n){this.field=e,this.transform=n}}function Yb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof eu&&i instanceof eu||r instanceof tu&&i instanceof tu?Qs(r.elements,i.elements,Xn):r instanceof Cd&&i instanceof Cd?Xn(r.Pe,i.Pe):r instanceof Jl&&i instanceof Jl}(t.transform,e.transform)}class Gb{constructor(e,n){this.version=e,this.transformResults=n}}class hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Th{}function VT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new s1(t.key,hn.none()):new yu(t.key,t.data,hn.none());{const n=t.data,r=Wt.empty();let i=new mt(ht.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Si(t.key,r,new en(i.toArray()),hn.none())}}function Kb(t,e,n){t instanceof yu?function(i,o,s){const a=i.value.clone(),u=c2(i.fieldTransforms,o,s.transformResults);a.setAll(u),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Si?function(i,o,s){if(!Oc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=c2(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll(FT(i)),u.setAll(a),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function kl(t,e,n,r){return t instanceof yu?function(o,s,a,u){if(!Oc(o.precondition,s))return a;const d=o.value.clone(),f=d2(o.fieldTransforms,u,s);return d.setAll(f),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Si?function(o,s,a,u){if(!Oc(o.precondition,s))return a;const d=d2(o.fieldTransforms,u,s),f=s.data;return f.setAll(FT(o)),f.setAll(d),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(o,s,a){return Oc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function Qb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=DT(r.transform,i||null);o!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,o))}return n||null}function u2(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qs(r,i,(o,s)=>Yb(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class yu extends Th{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Si extends Th{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function FT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function c2(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Hb(s,a,n[i]))}return r}function d2(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,Bb(o,s,e))}return r}class s1 extends Th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xb extends Th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Kb(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=kl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=kl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bT();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const u=VT(s,a);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,(n,r)=>u2(n,r))&&Qs(this.baseMutations,e.baseMutations,(n,r)=>u2(n,r))}}class a1{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=function(){return Fb}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new a1(e,n,r,i)}}/**
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
 */class Jb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ej{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,ve;function tj(t){switch(t){default:return ne();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function UT(t){if(t===void 0)return Ir("GRPC error has no .code"),W.UNKNOWN;switch(t){case Ze.OK:return W.OK;case Ze.CANCELLED:return W.CANCELLED;case Ze.UNKNOWN:return W.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return W.INTERNAL;case Ze.UNAVAILABLE:return W.UNAVAILABLE;case Ze.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Ze.NOT_FOUND:return W.NOT_FOUND;case Ze.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Ze.ABORTED:return W.ABORTED;case Ze.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Ze.DATA_LOSS:return W.DATA_LOSS;default:return ne()}}(ve=Ze||(Ze={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function nj(){return new TextEncoder}/**
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
 */const rj=new Ki([4294967295,4294967295],0);function h2(t){const e=nj().encode(t),n=new cT;return n.update(e),new Uint8Array(n.digest())}function f2(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Ki([n,r],0),new Ki([i,o],0)]}class l1{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new rl(`Invalid padding: ${n}`);if(r<0)throw new rl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new rl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new rl(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ki.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ki.fromNumber(r)));return i.compare(rj)===1&&(i=new Ki([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=h2(e),[r,i]=f2(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new l1(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=h2(e),[r,i]=f2(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class rl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,vu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ih(re.min(),i,new $e(we),Sr(),fe())}}class vu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new vu(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class WT{constructor(e,n){this.targetId=e,this.me=n}}class $T{constructor(e,n,r=yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class p2{constructor(){this.fe=0,this.ge=g2(),this.pe=yt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=fe(),n=fe(),r=fe();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new vu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=g2()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ij{constructor(e){this.Le=e,this.Be=new Map,this.ke=Sr(),this.qe=m2(),this.Qe=new $e(we)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(Vm(o))if(r===0){const s=new J(o.path);this.Ue(n,s,Ct.newNoDocument(s,re.min()))}else Se(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),u=a?this.Xe(a,e,s):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=ao(r).toUint8Array()}catch(u){if(u instanceof _T)return Ks("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new l1(s,i,o)}catch(u){return Ks(u instanceof rl?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&Vm(a.target)){const u=new J(a.target.path);this.ke.get(u)!==null||this.it(s,u)||this.Ue(s,u,Ct.newNoDocument(u,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=fe();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Ih(e,n,this.Qe,this.ke,r);return this.ke=Sr(),this.qe=m2(),this.Qe=new $e(we),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new p2,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new mt(we),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new p2),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function m2(){return new $e(J.comparator)}function g2(){return new $e(J.comparator)}const oj={asc:"ASCENDING",desc:"DESCENDING"},sj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aj={and:"AND",or:"OR"};class lj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Um(t,e){return t.useProto3Json||kh(e)?e:{value:e}}function Ad(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uj(t,e){return Ad(t,e.toTimestamp())}function Qn(t){return Se(!!t),re.fromTimestamp(function(n){const r=gi(n);return new nt(r.seconds,r.nanos)}(t))}function u1(t,e){return Wm(t,e).canonicalString()}function Wm(t,e){const n=function(i){return new Oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function BT(t){const e=Oe.fromString(t);return Se(KT(e)),e}function $m(t,e){return u1(t.databaseId,e.path)}function Jf(t,e){const n=BT(e);if(n.get(1)!==t.databaseId.projectId)throw new K(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(qT(n))}function HT(t,e){return u1(t.databaseId,e)}function cj(t){const e=BT(t);return e.length===4?Oe.emptyPath():qT(e)}function zm(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qT(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function y2(t,e,n){return{name:$m(t,e),fields:n.value.mapValue.fields}}function dj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,f){return d.useProto3Json?(Se(f===void 0||typeof f=="string"),yt.fromBase64String(f||"")):(Se(f===void 0||f instanceof Buffer||f instanceof Uint8Array),yt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(d){const f=d.code===void 0?W.UNKNOWN:UT(d.code);return new K(f,d.message||"")}(s);n=new $T(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Jf(t,r.document.name),o=Qn(r.document.updateTime),s=r.document.createTime?Qn(r.document.createTime):re.min(),a=new Wt({mapValue:{fields:r.document.fields}}),u=Ct.newFoundDocument(i,o,s,a),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Nc(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Jf(t,r.document),o=r.readTime?Qn(r.readTime):re.min(),s=Ct.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Nc([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Jf(t,r.document),o=r.removedTargetIds||[];n=new Nc([],o,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new ej(i,o),a=r.targetId;n=new WT(a,s)}}return n}function hj(t,e){let n;if(e instanceof yu)n={update:y2(t,e.key,e.value)};else if(e instanceof s1)n={delete:$m(t,e.key)};else if(e instanceof Si)n={update:y2(t,e.key,e.data),updateMask:wj(e.fieldMask)};else{if(!(e instanceof Xb))return ne();n={verify:$m(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof Jl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof eu)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof tu)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Cd)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:uj(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ne()}(t,e.precondition)),n}function fj(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?Qn(i.updateTime):Qn(o);return s.isEqual(re.min())&&(s=Qn(o)),new Gb(s,i.transformResults||[])}(n,e))):[]}function pj(t,e){return{documents:[HT(t,e.path)]}}function mj(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=HT(t,i);const o=function(d){if(d.length!==0)return GT(jn.create(d,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(d){if(d.length!==0)return d.map(f=>function(w){return{field:fs(w.field),direction:vj(w.dir)}}(f))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=Um(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function gj(t){let e=cj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=function(m){const w=YT(m);return w instanceof jn&&xT(w)?w.getFilters():[w]}(n.where));let s=[];n.orderBy&&(s=function(m){return m.map(w=>function(T){return new Zl(ps(T.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(w))}(n.orderBy));let a=null;n.limit&&(a=function(m){let w;return w=typeof m=="object"?m.value:m,kh(w)?null:w}(n.limit));let u=null;n.startAt&&(u=function(m){const w=!!m.before,_=m.values||[];return new Id(_,w)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const w=!m.before,_=m.values||[];return new Id(_,w)}(n.endAt)),Db(e,i,s,o,a,"F",u,d)}function yj(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function YT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ps(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ps(n.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ps(n.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ps(n.unaryFilter.field);return tt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return tt.create(ps(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jn.create(n.compositeFilter.filters.map(r=>YT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function vj(t){return oj[t]}function _j(t){return sj[t]}function kj(t){return aj[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ps(t){return ht.fromServerFormat(t.fieldPath)}function GT(t){return t instanceof tt?function(n){if(n.op==="=="){if(r2(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NAN"}};if(n2(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(r2(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NAN"}};if(n2(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(n.field),op:_j(n.op),value:n.value}}}(t):t instanceof jn?function(n){const r=n.getFilters().map(i=>GT(i));return r.length===1?r[0]:{compositeFilter:{op:kj(n.op),filters:r}}}(t):ne()}function wj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,r,i,o=re.min(),s=re.min(),a=yt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ej{constructor(e){this.ct=e}}function xj(t){const e=gj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tj{constructor(){this.un=new Ij}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(mi.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(mi.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class Ij{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new mt(Oe.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new mt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Js(0)}static kn(){return new Js(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sj{constructor(){this.changes=new ya(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aj{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&kl(r.mutation,i,en.empty(),nt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=Bi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=nl();return o.forEach((a,u)=>{s=s.insert(a,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Bi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=Sr();const s=_l(),a=function(){return _l()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Si)?o=o.insert(d.key,d):f!==void 0?(s.set(d.key,f.mutation.getFieldMask()),kl(f.mutation,d,f.mutation.getFieldMask(),nt.now())):s.set(d.key,en.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((d,f)=>s.set(d,f)),n.forEach((d,f)=>{var m;return a.set(d,new Cj(f,(m=s.get(d))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,n){const r=_l();let i=new $e((s,a)=>s-a),o=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||en.empty();f=a.applyToLocalView(d,f),r.set(u,f);const m=(i.get(a.batchId)||fe()).add(u);i=i.insert(a.batchId,m)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),d=u.key,f=u.value,m=bT();f.forEach(w=>{if(!o.has(w)){const _=VT(n.get(w),r.get(w));_!==null&&m.set(w,_),o=o.add(w)}}),s.push(this.documentOverlayCache.saveOverlays(e,d,m))}return $.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return J.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):CT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):$.resolve(Bi());let a=-1,u=o;return s.next(d=>$.forEach(d,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),o.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(w=>{u=u.insert(f,w)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,u,d,fe())).next(f=>({batchId:a,changes:RT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=nl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=nl();return this.indexManager.getCollectionParents(e,o).next(a=>$.forEach(a,u=>{const d=function(m,w){return new ga(w,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,w)=>{s=s.insert(m,w)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,d)=>{const f=d.getKey();s.get(f)===null&&(s=s.insert(f,Ct.newInvalidDocument(f)))});let a=nl();return s.forEach((u,d)=>{const f=o.get(u);f!==void 0&&kl(f.mutation,d,en.empty(),nt.now()),Eh(n,d)&&(a=a.insert(u,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Qn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:xj(i.bundledQuery),readTime:Qn(i.readTime)}}(n)),$.resolve()}}/**
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
 */class Pj{constructor(){this.overlays=new $e(J.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Bi();return $.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Bi(),o=n.length+1,s=new J(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const u=a.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new $e((d,f)=>d-f);const s=this.overlays.getIterator();for(;s.hasNext();){const d=s.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=o.get(d.largestBatchId);f===null&&(f=Bi(),o=o.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const a=Bi(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>a.set(d,f)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new Jb(n,r));let o=this.Ir.get(n);o===void 0&&(o=fe(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
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
 */class Rj{constructor(){this.sessionToken=yt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(){this.Tr=new mt(ot.Er),this.dr=new mt(ot.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ot(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new J(new Oe([])),r=new ot(n,e),i=new ot(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new J(new Oe([])),r=new ot(n,e),i=new ot(n,e+1);let o=fe();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new ot(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return J.comparator(e.key,n.key)||we(e.wr,n.wr)}static Ar(e,n){return we(e.wr,n.wr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new mt(ot.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Zb(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new ot(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(s)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return $.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),i=new ot(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const a=this.Dr(s.wr);o.push(a)}),$.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new mt(we);return n.forEach(i=>{const o=new ot(i,0),s=new ot(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],a=>{r=r.add(a.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;J.isDocumentKey(o)||(o=o.child(""));const s=new ot(new J(o),0);let a=new mt(we);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(u.wr)),!0)},s),$.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const o=new ot(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ot(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jj{constructor(e){this.Mr=e,this.docs=function(){return new $e(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(n))}getEntries(e,n){let r=Sr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Ct.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Sr();const s=n.path,a=new J(s.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!s.isPrefixOf(d.path))break;d.path.length>s.length+1||mb(pb(f),r)<=0||(i.has(f.key)||Eh(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return $.resolve(o)}getAllFromCollectionGroup(e,n,r,i){ne()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Dj(this)}getSize(e){return $.resolve(this.size)}}class Dj extends Sj{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oj{constructor(e){this.persistence=e,this.Nr=new ya(n=>n1(n),r1),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Lr=0,this.Br=new c1,this.targetCount=0,this.kr=Js.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Js(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(o).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),$.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nj{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Z0(0),this.Kr=!1,this.Kr=!0,this.$r=new Rj,this.referenceDelegate=e(this),this.Ur=new Oj(this),this.indexManager=new Tj,this.remoteDocumentCache=function(i){return new jj(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ej(n),this.Gr=new Lj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Pj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new bj(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new Mj(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Mj extends yb{constructor(e){super(),this.currentSequenceNumber=e}}class d1{constructor(e){this.persistence=e,this.Jr=new c1,this.Yr=null}static Zr(e){return new d1(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=J.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,re.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=fe(),i=fe();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new h1(e,n.fromCache,r,i)}}/**
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
 */class Vj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fj{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return _A()?8:vb(Lt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new Vj;return this.Xi(e,n,s).next(a=>{if(o.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(za()<=ge.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",hs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(za()<=ge.DEBUG&&X("QueryEngine","Query:",hs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(za()<=ge.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",hs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kn(n))):$.resolve())}Yi(e,n){if(a2(n))return $.resolve(null);let r=Kn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Sd(n,null,"F"),r=Kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=fe(...o);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,a);return this.ns(n,d,s,u.readTime)?this.Yi(e,Sd(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return a2(n)||i.isEqual(re.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?$.resolve(null):(za()<=ge.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hs(n)),this.rs(e,s,n,fb(i,-1)).next(a=>a))})}ts(e,n){let r=new mt(LT(e));return n.forEach((i,o)=>{Eh(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return za()<=ge.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",hs(n)),this.Ji.getDocumentsMatchingQuery(e,n,mi.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uj{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new $e(we),this._s=new ya(o=>n1(o),r1),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Aj(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Wj(t,e,n,r){return new Uj(t,e,n,r)}async function QT(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let u=fe();for(const d of i){s.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of o){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:s,addedBatchIds:a}))})})}function $j(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,d,f){const m=d.batch,w=m.keys();let _=$.resolve();return w.forEach(T=>{_=_.next(()=>f.getEntry(u,T)).next(A=>{const S=d.docVersions.get(T);Se(S!==null),A.version.compareTo(S)<0&&(m.applyToRemoteDocument(A,d),A.isValidDocument()&&(A.setReadTime(d.commitVersion),f.addEntry(A)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,m))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=fe();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(u=u.add(a.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function XT(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function zj(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,m)=>{const w=i.get(m);if(!w)return;a.push(n.Ur.removeMatchingKeys(o,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(o,f.addedDocuments,m)));let _=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(yt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),i=i.insert(m,_),function(A,S,y){return A.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(w,_,f)&&a.push(n.Ur.updateTargetData(o,_))});let u=Sr(),d=fe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))}),a.push(Bj(o,s,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(re.min())){const f=n.Ur.getLastRemoteSnapshotVersion(o).next(m=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(f)}return $.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,u,d)).next(()=>u)}).then(o=>(n.os=i,o))}function Bj(t,e,n){let r=fe(),i=fe();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Sr();return n.forEach((a,u)=>{const d=o.get(a);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(re.min())?(e.removeEntry(a,u.readTime),s=s.insert(a,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),s=s.insert(a,u)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",u.version)}),{Ps:s,Is:i}})}function Hj(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qj(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,$.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new Kr(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Bm(t,e,n){const r=ie(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!gu(s))throw s;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function v2(t,e,n){const r=ie(t);let i=re.min(),o=fe();return r.persistence.runTransaction("Execute query","readwrite",s=>function(u,d,f){const m=ie(u),w=m._s.get(f);return w!==void 0?$.resolve(m.os.get(w)):m.Ur.getTargetData(d,f)}(r,s,Kn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(u=>{o=u})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:re.min(),n?o:fe())).next(a=>(Yj(r,Nb(e),a),{documents:a,Ts:o})))}function Yj(t,e,n){let r=t.us.get(e)||re.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class _2{constructor(){this.activeTargetIds=$b()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gj{constructor(){this.so=new _2,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new _2,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kj{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lc=null;function ep(){return lc===null?lc=function(){return 268435456+Math.round(2147483648*Math.random())}():lc++,"0x"+lc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xj{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class Zj extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const a=ep(),u=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,s),this.No(n,u,d,i).then(f=>(X("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw Ks("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,o,s,a){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ma}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=Qj[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=ep();return new Promise((s,a)=>{const u=new dT;u.setWithCredentials(!0),u.listenOnce(hT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case jc.NO_ERROR:const f=u.getResponseJson();X(Tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),s(f);break;case jc.TIMEOUT:X(Tt,`RPC '${e}' ${o} timed out`),a(new K(W.DEADLINE_EXCEEDED,"Request time out"));break;case jc.HTTP_ERROR:const m=u.getStatus();if(X(Tt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const _=w==null?void 0:w.error;if(_&&_.status&&_.message){const T=function(S){const y=S.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(y)>=0?y:W.UNKNOWN}(_.status);a(new K(T,_.message))}else a(new K(W.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new K(W.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{X(Tt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);X(Tt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=ep(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=mT(),a=pT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=o.join("");X(Tt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=s.createWebChannel(f,u);let w=!1,_=!1;const T=new Xj({Io:S=>{_?X(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(w||(X(Tt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),w=!0),X(Tt,`RPC '${e}' stream ${i} sending:`,S),m.send(S))},To:()=>m.close()}),A=(S,y,g)=>{S.listen(y,k=>{try{g(k)}catch(I){setTimeout(()=>{throw I},0)}})};return A(m,tl.EventType.OPEN,()=>{_||(X(Tt,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),A(m,tl.EventType.CLOSE,()=>{_||(_=!0,X(Tt,`RPC '${e}' stream ${i} transport closed`),T.So())}),A(m,tl.EventType.ERROR,S=>{_||(_=!0,Ks(Tt,`RPC '${e}' stream ${i} transport errored:`,S),T.So(new K(W.UNAVAILABLE,"The operation could not be completed")))}),A(m,tl.EventType.MESSAGE,S=>{var y;if(!_){const g=S.data[0];Se(!!g);const k=g,I=k.error||((y=k[0])===null||y===void 0?void 0:y.error);if(I){X(Tt,`RPC '${e}' stream ${i} received error:`,I);const R=I.status;let O=function(L){const j=Ze[L];if(j!==void 0)return UT(j)}(R),E=I.message;O===void 0&&(O=W.INTERNAL,E="Unknown error status: "+R+" with message "+I.message),_=!0,T.So(new K(O,E)),m.close()}else X(Tt,`RPC '${e}' stream ${i} received:`,g),T.bo(g)}}),A(a,fT.STAT_EVENT,S=>{S.stat===Dm.PROXY?X(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===Dm.NOPROXY&&X(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function tp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(t){return new lj(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,n,r,i,o,s,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ZT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(Ir(n.toString()),Ir("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jj extends JT{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=dj(this.serializer,e),r=function(o){if(!("targetChange"in o))return re.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?re.min():s.readTime?Qn(s.readTime):re.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=zm(this.serializer),n.addTarget=function(o,s){let a;const u=s.target;if(a=Vm(u)?{documents:pj(o,u)}:{query:mj(o,u)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=zT(o,s.resumeToken);const d=Um(o,s.expectedCount);d!==null&&(a.expectedCount=d)}else if(s.snapshotVersion.compareTo(re.min())>0){a.readTime=Ad(o,s.snapshotVersion.toTimestamp());const d=Um(o,s.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=yj(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=zm(this.serializer),n.removeTarget=e,this.a_(n)}}class eD extends JT{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=fj(e.writeResults,e.commitTime),r=Qn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=zm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>hj(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Wm(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(W.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,Wm(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(W.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class nD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ir(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{vo(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ie(u);d.L_.add(4),await _u(d),d.q_.set("Unknown"),d.L_.delete(4),await Ch(d)}(this))})}),this.q_=new nD(r,i)}}async function Ch(t){if(vo(t))for(const e of t.B_)await e(!0)}async function _u(t){for(const e of t.B_)await e(!1)}function e8(t,e){const n=ie(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),g1(n)?m1(n):va(n).r_()&&p1(n,e))}function f1(t,e){const n=ie(t),r=va(n);n.N_.delete(e),r.r_()&&t8(n,e),n.N_.size===0&&(r.r_()?r.o_():vo(n)&&n.q_.set("Unknown"))}function p1(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}va(t).A_(e)}function t8(t,e){t.Q_.xe(e),va(t).R_(e)}function m1(t){t.Q_=new ij({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),va(t).start(),t.q_.v_()}function g1(t){return vo(t)&&!va(t).n_()&&t.N_.size>0}function vo(t){return ie(t).L_.size===0}function n8(t){t.Q_=void 0}async function iD(t){t.q_.set("Online")}async function oD(t){t.N_.forEach((e,n)=>{p1(t,e)})}async function sD(t,e){n8(t),g1(t)?(t.q_.M_(e),m1(t)):t.q_.set("Unknown")}async function aD(t,e,n){if(t.q_.set("Online"),e instanceof $T&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ld(t,r)}else if(e instanceof Nc?t.Q_.Ke(e):e instanceof WT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(re.min()))try{const r=await XT(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.Q_.rt(s);return a.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=o.N_.get(d);f&&o.N_.set(d,f.withResumeToken(u.resumeToken,s))}}),a.targetMismatches.forEach((u,d)=>{const f=o.N_.get(u);if(!f)return;o.N_.set(u,f.withResumeToken(yt.EMPTY_BYTE_STRING,f.snapshotVersion)),t8(o,u);const m=new Kr(f.target,u,d,f.sequenceNumber);p1(o,m)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Ld(t,r)}}async function Ld(t,e,n){if(!gu(e))throw e;t.L_.add(1),await _u(t),t.q_.set("Offline"),n||(n=()=>XT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ch(t)})}function r8(t,e){return e().catch(n=>Ld(t,n,e))}async function Ah(t){const e=ie(t),n=yi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;lD(e);)try{const i=await Hj(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,uD(e,i)}catch(i){await Ld(e,i)}i8(e)&&o8(e)}function lD(t){return vo(t)&&t.O_.length<10}function uD(t,e){t.O_.push(e);const n=yi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function i8(t){return vo(t)&&!yi(t).n_()&&t.O_.length>0}function o8(t){yi(t).start()}async function cD(t){yi(t).p_()}async function dD(t){const e=yi(t);for(const n of t.O_)e.m_(n.mutations)}async function hD(t,e,n){const r=t.O_.shift(),i=a1.from(r,e,n);await r8(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ah(t)}async function fD(t,e){e&&yi(t).V_&&await async function(r,i){if(function(s){return tj(s)&&s!==W.ABORTED}(i.code)){const o=r.O_.shift();yi(r).s_(),await r8(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ah(r)}}(t,e),i8(t)&&o8(t)}async function w2(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=vo(n);n.L_.add(3),await _u(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ch(n)}async function pD(t,e){const n=ie(t);e?(n.L_.delete(2),await Ch(n)):e||(n.L_.add(2),await _u(n),n.q_.set("Unknown"))}function va(t){return t.K_||(t.K_=function(n,r,i){const o=ie(n);return o.w_(),new Jj(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:iD.bind(null,t),Ro:oD.bind(null,t),mo:sD.bind(null,t),d_:aD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),g1(t)?m1(t):t.q_.set("Unknown")):(await t.K_.stop(),n8(t))})),t.K_}function yi(t){return t.U_||(t.U_=function(n,r,i){const o=ie(n);return o.w_(),new eD(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:cD.bind(null,t),mo:fD.bind(null,t),f_:dD.bind(null,t),g_:hD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ah(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new y1(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function v1(t,e){if(Ir("AsyncQueue",`${e}: ${t}`),gu(t))return new K(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=nl(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Us(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(){this.W_=new $e(J.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ea{constructor(e,n,r,i,o,s,a,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new ea(e,n,Us.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class gD{constructor(){this.queries=x2(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ie(n),o=i.queries;i.queries=x2(),o.forEach((s,a)=>{for(const u of a.j_)u.onError(r)})})(this,new K(W.ABORTED,"Firestore shutting down"))}}function x2(){return new ya(t=>AT(t),wh)}async function s8(t,e){const n=ie(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new mD,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=v1(s,`Initialization of query '${hs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&_1(n)}async function a8(t,e){const n=ie(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function yD(t,e){const n=ie(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.j_)a.X_(i)&&(r=!0);s.z_=i}}r&&_1(n)}function vD(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function _1(t){t.Y_.forEach(e=>{e.next()})}var Hm,T2;(T2=Hm||(Hm={})).ea="default",T2.Cache="cache";class l8{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ea(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ea.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Hm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u8{constructor(e){this.key=e}}class c8{constructor(e){this.key=e}}class _D{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=fe(),this.mutatedKeys=fe(),this.Aa=LT(e),this.Ra=new Us(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new E2,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const w=i.get(f),_=Eh(this.query,m)?m:null,T=!!w&&this.mutatedKeys.has(w.key),A=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let S=!1;w&&_?w.data.isEqual(_.data)?T!==A&&(r.track({type:3,doc:_}),S=!0):this.ga(w,_)||(r.track({type:2,doc:_}),S=!0,(u&&this.Aa(_,u)>0||d&&this.Aa(_,d)<0)&&(a=!0)):!w&&_?(r.track({type:0,doc:_}),S=!0):w&&!_&&(r.track({type:1,doc:w}),S=!0,(u||d)&&(a=!0)),S&&(_?(s=s.add(_),o=A?o.add(f):o.delete(f)):(s=s.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{Ra:s,fa:r,ns:a,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((f,m)=>function(_,T){const A=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return A(_)-A(T)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,s.length!==0||d?{snapshot:new ea(this.query,e.Ra,o,s,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new E2,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=fe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new c8(r))}),this.da.forEach(r=>{e.has(r)||n.push(new u8(r))}),n}ba(e){this.Ta=e.Ts,this.da=fe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ea.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class kD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wD{constructor(e){this.key=e,this.va=!1}}class ED{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new ya(a=>AT(a),wh),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(J.comparator),this.Na=new Map,this.La=new c1,this.Ba={},this.ka=new Map,this.qa=Js.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function xD(t,e,n=!0){const r=g8(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await d8(r,e,n,!0),i}async function TD(t,e){const n=g8(t);await d8(n,e,!0,!1)}async function d8(t,e,n,r){const i=await qj(t.localStore,Kn(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await ID(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&e8(t.remoteStore,i),a}async function ID(t,e,n,r,i){t.Ka=(m,w,_)=>async function(A,S,y,g){let k=S.view.ma(y);k.ns&&(k=await v2(A.localStore,S.query,!1).then(({documents:E})=>S.view.ma(E,k)));const I=g&&g.targetChanges.get(S.targetId),R=g&&g.targetMismatches.get(S.targetId)!=null,O=S.view.applyChanges(k,A.isPrimaryClient,I,R);return S2(A,S.targetId,O.wa),O.snapshot}(t,m,w,_);const o=await v2(t.localStore,e,!0),s=new _D(e,o.Ts),a=s.ma(o.documents),u=vu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=s.applyChanges(a,t.isPrimaryClient,u);S2(t,n,d.wa);const f=new kD(e,n,s);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function SD(t,e,n){const r=ie(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!wh(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Bm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&f1(r.remoteStore,i.targetId),qm(r,i.targetId)}).catch(mu)):(qm(r,i.targetId),await Bm(r.localStore,i.targetId,!0))}async function CD(t,e){const n=ie(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),f1(n.remoteStore,r.targetId))}async function AD(t,e,n){const r=OD(t);try{const i=await function(s,a){const u=ie(s),d=nt.now(),f=a.reduce((_,T)=>_.add(T.key),fe());let m,w;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=Sr(),A=fe();return u.cs.getEntries(_,f).next(S=>{T=S,T.forEach((y,g)=>{g.isValidDocument()||(A=A.add(y))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,T)).next(S=>{m=S;const y=[];for(const g of a){const k=Qb(g,m.get(g.key).overlayedDocument);k!=null&&y.push(new Si(g.key,k,kT(k.value.mapValue),hn.exists(!0)))}return u.mutationQueue.addMutationBatch(_,d,y,a)}).next(S=>{w=S;const y=S.applyToLocalDocumentSet(m,A);return u.documentOverlayCache.saveOverlays(_,S.batchId,y)})}).then(()=>({batchId:w.batchId,changes:RT(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,u){let d=s.Ba[s.currentUser.toKey()];d||(d=new $e(we)),d=d.insert(a,u),s.Ba[s.currentUser.toKey()]=d}(r,i.batchId,n),await ku(r,i.changes),await Ah(r.remoteStore)}catch(i){const o=v1(i,"Failed to persist write");n.reject(o)}}async function h8(t,e){const n=ie(t);try{const r=await zj(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?Se(s.va):i.removedDocuments.size>0&&(Se(s.va),s.va=!1))}),await ku(n,r,e)}catch(r){await mu(r)}}function I2(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const a=s.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const u=ie(s);u.onlineState=a;let d=!1;u.queries.forEach((f,m)=>{for(const w of m.j_)w.Z_(a)&&(d=!0)}),d&&_1(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LD(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new $e(J.comparator);s=s.insert(o,Ct.newNoDocument(o,re.min()));const a=fe().add(o),u=new Ih(re.min(),new Map,new $e(we),s,a);await h8(r,u),r.Oa=r.Oa.remove(o),r.Na.delete(e),k1(r)}else await Bm(r.localStore,e,!1).then(()=>qm(r,e,n)).catch(mu)}async function PD(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await $j(n.localStore,e);p8(n,r,null),f8(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ku(n,i)}catch(i){await mu(i)}}async function RD(t,e,n){const r=ie(t);try{const i=await function(s,a){const u=ie(s);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,a).next(m=>(Se(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);p8(r,e,n),f8(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ku(r,i)}catch(i){await mu(i)}}function f8(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function p8(t,e,n){const r=ie(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function qm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||m8(t,r)})}function m8(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(f1(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),k1(t))}function S2(t,e,n){for(const r of n)r instanceof u8?(t.La.addReference(r.key,e),bD(t,r)):r instanceof c8?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||m8(t,r.key)):ne()}function bD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),k1(t))}function k1(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new J(Oe.fromString(e)),r=t.qa.next();t.Na.set(r,new wD(n)),t.Oa=t.Oa.insert(n,r),e8(t.remoteStore,new Kr(Kn(i1(n.path)),r,"TargetPurposeLimboResolution",Z0.oe))}}async function ku(t,e,n){const r=ie(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{s.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=h1.Wi(u.targetId,d);o.push(m)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(u,d){const f=ie(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>$.forEach(d,w=>$.forEach(w.$i,_=>f.persistence.referenceDelegate.addReference(m,w.targetId,_)).next(()=>$.forEach(w.Ui,_=>f.persistence.referenceDelegate.removeReference(m,w.targetId,_)))))}catch(m){if(!gu(m))throw m;X("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const w=m.targetId;if(!m.fromCache){const _=f.os.get(w),T=_.snapshotVersion,A=_.withLastLimboFreeSnapshotVersion(T);f.os=f.os.insert(w,A)}}}(r.localStore,o))}async function jD(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await QT(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(a=>{a.forEach(u=>{u.reject(new K(W.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ku(n,r.hs)}}function DD(t,e){const n=ie(t),r=n.Na.get(e);if(r&&r.va)return fe().add(r.key);{let i=fe();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const a=n.Fa.get(s);i=i.unionWith(a.view.Va)}return i}}function g8(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=h8.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LD.bind(null,e),e.Ca.d_=yD.bind(null,e.eventManager),e.Ca.$a=vD.bind(null,e.eventManager),e}function OD(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RD.bind(null,e),e}class Pd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Sh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Wj(this.persistence,new Fj,e.initialUser,this.serializer)}Ga(e){return new Nj(d1.Zr,this.serializer)}Wa(e){return new Gj}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pd.provider={build:()=>new Pd};class Ym{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>I2(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jD.bind(null,this.syncEngine),await pD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gD}()}createDatastore(e){const n=Sh(e.databaseInfo.databaseId),r=function(o){return new Zj(o)}(e.databaseInfo);return function(o,s,a,u){return new tD(o,s,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new rD(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>I2(this.syncEngine,n,0),function(){return k2.D()?new k2:new Kj}())}createSyncEngine(e,n){return function(i,o,s,a,u,d,f){const m=new ED(i,o,s,a,u,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=ie(i);X("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await _u(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ym.provider={build:()=>new Ym};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class y8{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ir("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=yT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=v1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function np(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await QT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function C2(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MD(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>w2(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>w2(e.remoteStore,i)),t._onlineComponents=e}async function MD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await np(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ks("Error using user provided cache. Falling back to memory cache: "+n),await np(t,new Pd)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await np(t,new Pd);return t._offlineComponents}async function v8(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await C2(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await C2(t,new Ym))),t._onlineComponents}function VD(t){return v8(t).then(e=>e.syncEngine)}async function _8(t){const e=await v8(t),n=e.eventManager;return n.onListen=xD.bind(null,e.syncEngine),n.onUnlisten=SD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=TD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=CD.bind(null,e.syncEngine),n}function FD(t,e,n={}){const r=new vr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,d){const f=new y8({next:w=>{f.Za(),s.enqueueAndForget(()=>a8(o,m));const _=w.docs.has(a);!_&&w.fromCache?d.reject(new K(W.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&w.fromCache&&u&&u.source==="server"?d.reject(new K(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),m=new l8(i1(a.path),f,{includeMetadataChanges:!0,_a:!0});return s8(o,m)}(await _8(t),t.asyncQueue,e,n,r)),r.promise}function UD(t,e,n={}){const r=new vr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,d){const f=new y8({next:w=>{f.Za(),s.enqueueAndForget(()=>a8(o,m)),w.fromCache&&u.source==="server"?d.reject(new K(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),m=new l8(a,f,{includeMetadataChanges:!0,_a:!0});return s8(o,m)}(await _8(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function k8(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w8(t,e,n){if(!n)throw new K(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WD(t,e,n,r){if(e===!0&&r===!0)throw new K(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function L2(t){if(!J.isDocumentKey(t))throw new K(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function P2(t){if(J.isDocumentKey(t))throw new K(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Lh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function Dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lh(t);throw new K(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=k8((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new K(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new K(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new K(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ph{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new R2({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new R2(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ib;switch(r.type){case"firstParty":return new lb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=A2.get(n);r&&(X("ComponentProvider","Removing Datastore"),A2.delete(n),r.terminate())}(this),Promise.resolve()}}function $D(t,e,n,r={}){var i;const o=(t=Dn(t,Ph))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=It.MOCK_USER;else{a=_x(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new K(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new It(d)}t._authCredentials=new ob(new gT(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class ui extends Ci{constructor(e,n,r){super(e,n,i1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new J(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function Tn(t,e,...n){if(t=We(t),w8("collection","path",e),t instanceof Ph){const r=Oe.fromString(e,...n);return P2(r),new ui(t,null,r)}{if(!(t instanceof Nt||t instanceof ui))throw new K(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return P2(r),new ui(t.firestore,null,r)}}function ft(t,e,...n){if(t=We(t),arguments.length===1&&(e=yT.newId()),w8("doc","path",e),t instanceof Ph){const r=Oe.fromString(e,...n);return L2(r),new Nt(t,null,new J(r))}{if(!(t instanceof Nt||t instanceof ui))throw new K(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return L2(r),new Nt(t.firestore,t instanceof ui?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ZT(this,"async_queue_retry"),this.Vu=()=>{const r=tp();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=tp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=tp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new vr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!gu(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw Ir("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=y1.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class _o extends Ph{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new b2,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new b2(e),this._firestoreClient=void 0,await e}}}function zD(t,e){const n=typeof t=="object"?t:gh(),r=typeof t=="string"?t:"(default)",i=Ti(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=gx("firestore");o&&$D(i,...o)}return i}function w1(t){if(t._terminated)throw new K(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||BD(t),t._firestoreClient}function BD(t){var e,n,r;const i=t._freezeSettings(),o=function(a,u,d,f){return new wb(a,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,k8(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new ND(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ta(yt.fromBase64String(e))}catch(n){throw new K(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ta(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bh=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */class x1{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=/^__.*__$/;class qD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Si(e,this.data,this.fieldMask,n,this.fieldTransforms):new yu(e,this.data,n,this.fieldTransforms)}}class E8{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Si(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function x8(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class T1{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new T1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Rd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(x8(this.Cu)&&HD.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class YD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sh(e)}Qu(e,n,r,i=!1){return new T1({Cu:e,methodName:n,qu:r,path:ht.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jh(t){const e=t._freezeSettings(),n=Sh(t._databaseId);return new YD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function T8(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);S1("Data must be an object, but it was:",s,r);const a=I8(r,s);let u,d;if(o.merge)u=new en(s.fieldMask),d=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const m of o.mergeFields){const w=Gm(e,m,n);if(!s.contains(w))throw new K(W.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);C8(f,w)||f.push(w)}u=new en(f),d=s.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=s.fieldTransforms;return new qD(new Wt(a),u,d)}class Dh extends bh{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dh}}class I1 extends bh{_toFieldTransform(e){return new qb(e.path,new Jl)}isEqual(e){return e instanceof I1}}function GD(t,e,n,r){const i=t.Qu(1,e,n);S1("Data must be an object, but it was:",i,r);const o=[],s=Wt.empty();yo(r,(u,d)=>{const f=C1(e,u,n);d=We(d);const m=i.Nu(f);if(d instanceof Dh)o.push(f);else{const w=wu(d,m);w!=null&&(o.push(f),s.set(f,w))}});const a=new en(o);return new E8(s,a,i.fieldTransforms)}function KD(t,e,n,r,i,o){const s=t.Qu(1,e,n),a=[Gm(e,r,n)],u=[i];if(o.length%2!=0)throw new K(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)a.push(Gm(e,o[w])),u.push(o[w+1]);const d=[],f=Wt.empty();for(let w=a.length-1;w>=0;--w)if(!C8(d,a[w])){const _=a[w];let T=u[w];T=We(T);const A=s.Nu(_);if(T instanceof Dh)d.push(_);else{const S=wu(T,A);S!=null&&(d.push(_),f.set(_,S))}}const m=new en(d);return new E8(f,m,s.fieldTransforms)}function QD(t,e,n,r=!1){return wu(n,t.Qu(r?4:3,e))}function wu(t,e){if(S8(t=We(t)))return S1("Unsupported field value:",e,t),I8(t,e);if(t instanceof bh)return function(r,i){if(!x8(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let u=wu(a,i.Lu(s));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=nt.fromDate(r);return{timestampValue:Ad(i.serializer,o)}}if(r instanceof nt){const o=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ad(i.serializer,o)}}if(r instanceof E1)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ta)return{bytesValue:zT(i.serializer,r._byteString)};if(r instanceof Nt){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:u1(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof x1)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return o1(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Lh(r)}`)}(t,e)}function I8(t,e){const n={};return vT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yo(t,(r,i)=>{const o=wu(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function S8(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof E1||t instanceof ta||t instanceof Nt||t instanceof bh||t instanceof x1)}function S1(t,e,n){if(!S8(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Lh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Gm(t,e,n){if((e=We(e))instanceof Rh)return e._internalPath;if(typeof e=="string")return C1(t,e);throw Rd("Field path arguments must be of type string or ",t,!1,void 0,n)}const XD=new RegExp("[~\\*/\\[\\]]");function C1(t,e,n){if(e.search(XD)>=0)throw Rd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rh(...e.split("."))._internalPath}catch{throw Rd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rd(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new K(W.INVALID_ARGUMENT,a+t+u)}function C8(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A8{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Oh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ZD extends A8{data(){return super.data()}}function Oh(t,e){return typeof e=="string"?C1(t,e):e instanceof Rh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class A1{}class L1 extends A1{}function mr(t,e,...n){let r=[];e instanceof A1&&r.push(e),r=r.concat(n),function(o){const s=o.filter(u=>u instanceof P1).length,a=o.filter(u=>u instanceof Nh).length;if(s>1||s>0&&a>0)throw new K(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Nh extends L1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Nh(e,n,r)}_apply(e){const n=this._parse(e);return L8(e._query,n),new Ci(e.firestore,e.converter,Fm(e._query,n))}_parse(e){const n=jh(e.firestore);return function(o,s,a,u,d,f,m){let w;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){D2(m,f);const _=[];for(const T of m)_.push(j2(u,o,T));w={arrayValue:{values:_}}}else w=j2(u,o,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||D2(m,f),w=QD(a,s,m,f==="in"||f==="not-in");return tt.create(d,f,w)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Qr(t,e,n){const r=e,i=Oh("where",t);return Nh._create(i,r,n)}class P1 extends A1{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new P1(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const u of a)L8(s,u),s=Fm(s,u)}(e._query,n),new Ci(e.firestore,e.converter,Fm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class R1 extends L1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new R1(e,n)}_apply(e){const n=function(i,o,s){if(i.startAt!==null)throw new K(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Zl(o,s)}(e._query,this._field,this._direction);return new Ci(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new ga(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function b1(t,e="asc"){const n=e,r=Oh("orderBy",t);return R1._create(r,n)}class j1 extends L1{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new j1(e,n,r)}_apply(e){return new Ci(e.firestore,e.converter,Sd(e._query,this._limit,this._limitType))}}function e5(t){return j1._create("limit",t,"F")}function j2(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new K(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!CT(e)&&n.indexOf("/")!==-1)throw new K(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!J.isDocumentKey(r))throw new K(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return t2(t,new J(r))}if(n instanceof Nt)return t2(t,n._key);throw new K(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lh(n)}.`)}function D2(t,e){if(!Array.isArray(t)||t.length===0)throw new K(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function L8(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class t5{convertValue(e,n="none"){switch(lo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ao(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return yo(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>Ge(s.doubleValue));return new x1(o)}convertGeoPoint(e){return new E1(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=e1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Kl(e));default:return null}}convertTimestamp(e){const n=gi(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Se(KT(r));const i=new Ql(r.get(1),r.get(3)),o=new J(r.popFirst(5));return i.isEqual(n)||Ir(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P8(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class R8 extends A8{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Mc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Oh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Mc extends R8{data(e={}){return super.data(e)}}class n5{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new il(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Mc(this._firestore,this._userDataWriter,r.key,r,new il(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const u=new Mc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new il(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const u=new Mc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new il(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return a.type!==0&&(d=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),f=s.indexOf(a.doc.key)),{type:r5(a.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function r5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t){t=Dn(t,Nt);const e=Dn(t.firestore,_o);return FD(w1(e),t._key).then(n=>i5(e,t,n))}class b8 extends t5{constructor(e){super(),this.firestore=e}convertBytes(e){return new ta(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function Bn(t){t=Dn(t,Ci);const e=Dn(t.firestore,_o),n=w1(e),r=new b8(e);return JD(t._query),UD(n,t._query).then(i=>new n5(e,r,t,i))}function bd(t,e,n){t=Dn(t,Nt);const r=Dn(t.firestore,_o),i=P8(t.converter,e,n);return Mh(r,[T8(jh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,hn.none())])}function wl(t,e,n,...r){t=Dn(t,Nt);const i=Dn(t.firestore,_o),o=jh(i);let s;return s=typeof(e=We(e))=="string"||e instanceof Rh?KD(o,"updateDoc",t._key,e,n,r):GD(o,"updateDoc",t._key,e),Mh(i,[s.toMutation(t._key,hn.exists(!0))])}function D1(t){return Mh(Dn(t.firestore,_o),[new s1(t._key,hn.none())])}function j8(t,e){const n=Dn(t.firestore,_o),r=ft(t),i=P8(t.converter,e);return Mh(n,[T8(jh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,hn.exists(!1))]).then(()=>r)}function Mh(t,e){return function(r,i){const o=new vr;return r.asyncQueue.enqueueAndForget(async()=>AD(await VD(r),i,o)),o.promise}(w1(t),e)}function i5(t,e,n){const r=n.docs.get(e._key),i=new b8(t);return new R8(t,i,e._key,r,new il(n.hasPendingWrites,n.fromCache),e.converter)}function Vh(){return new I1("serverTimestamp")}(function(e,n=!0){(function(i){ma=i})(go),Rn(new mn("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new _o(new sb(r.getProvider("auth-internal")),new cb(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new K(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ql(d.options.projectId,f)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Gt(Q_,"4.7.3",e),Gt(Q_,"4.7.3","esm2017")})();const D8="@firebase/installations",O1="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O8=1e4,N8=`w:${O1}`,M8="FIS_v2",o5="https://firebaseinstallations.googleapis.com/v1",s5=60*60*1e3,a5="installations",l5="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},uo=new mo(a5,l5,u5);function V8(t){return t instanceof yn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F8({projectId:t}){return`${o5}/projects/${t}/installations`}function U8(t){return{token:t.token,requestStatus:2,expiresIn:d5(t.expiresIn),creationTime:Date.now()}}async function W8(t,e){const r=(await e.json()).error;return uo.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $8({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function c5(t,{refreshToken:e}){const n=$8(t);return n.append("Authorization",h5(e)),n}async function z8(t){const e=await t();return e.status>=500&&e.status<600?t():e}function d5(t){return Number(t.replace("s","000"))}function h5(t){return`${M8} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f5({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=F8(t),i=$8(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={fid:n,authVersion:M8,appId:t.appId,sdkVersion:N8},a={method:"POST",headers:i,body:JSON.stringify(s)},u=await z8(()=>fetch(r,a));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:U8(d.authToken)}}else throw await W8("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B8(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p5(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m5=/^[cdef][\w-]{21}$/,Km="";function g5(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=y5(t);return m5.test(n)?n:Km}catch{return Km}}function y5(t){return p5(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H8=new Map;function q8(t,e){const n=Fh(t);Y8(n,e),v5(n,e)}function Y8(t,e){const n=H8.get(t);if(n)for(const r of n)r(e)}function v5(t,e){const n=_5();n&&n.postMessage({key:t,fid:e}),k5()}let Hi=null;function _5(){return!Hi&&"BroadcastChannel"in self&&(Hi=new BroadcastChannel("[Firebase] FID Change"),Hi.onmessage=t=>{Y8(t.data.key,t.data.fid)}),Hi}function k5(){H8.size===0&&Hi&&(Hi.close(),Hi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w5="firebase-installations-database",E5=1,co="firebase-installations-store";let rp=null;function N1(){return rp||(rp=Ix(w5,E5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(co)}}})),rp}async function jd(t,e){const n=Fh(t),i=(await N1()).transaction(co,"readwrite"),o=i.objectStore(co),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&q8(t,e.fid),e}async function G8(t){const e=Fh(t),r=(await N1()).transaction(co,"readwrite");await r.objectStore(co).delete(e),await r.done}async function Uh(t,e){const n=Fh(t),i=(await N1()).transaction(co,"readwrite"),o=i.objectStore(co),s=await o.get(n),a=e(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&q8(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(t){let e;const n=await Uh(t.appConfig,r=>{const i=x5(r),o=T5(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===Km?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function x5(t){const e=t||{fid:g5(),registrationStatus:0};return K8(e)}function T5(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(uo.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=I5(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:S5(t)}:{installationEntry:e}}async function I5(t,e){try{const n=await f5(t,e);return jd(t.appConfig,n)}catch(n){throw V8(n)&&n.customData.serverCode===409?await G8(t.appConfig):await jd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function S5(t){let e=await O2(t.appConfig);for(;e.registrationStatus===1;)await B8(100),e=await O2(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await M1(t);return r||n}return e}function O2(t){return Uh(t,e=>{if(!e)throw uo.create("installation-not-found");return K8(e)})}function K8(t){return C5(t)?{fid:t.fid,registrationStatus:0}:t}function C5(t){return t.registrationStatus===1&&t.registrationTime+O8<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A5({appConfig:t,heartbeatServiceProvider:e},n){const r=L5(t,n),i=c5(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={installation:{sdkVersion:N8,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},u=await z8(()=>fetch(r,a));if(u.ok){const d=await u.json();return U8(d)}else throw await W8("Generate Auth Token",u)}function L5(t,{fid:e}){return`${F8(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(t,e=!1){let n;const r=await Uh(t.appConfig,o=>{if(!Q8(o))throw uo.create("not-registered");const s=o.authToken;if(!e&&b5(s))return o;if(s.requestStatus===1)return n=P5(t,e),o;{if(!navigator.onLine)throw uo.create("app-offline");const a=D5(o);return n=R5(t,a),a}});return n?await n:r.authToken}async function P5(t,e){let n=await N2(t.appConfig);for(;n.authToken.requestStatus===1;)await B8(100),n=await N2(t.appConfig);const r=n.authToken;return r.requestStatus===0?V1(t,e):r}function N2(t){return Uh(t,e=>{if(!Q8(e))throw uo.create("not-registered");const n=e.authToken;return O5(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function R5(t,e){try{const n=await A5(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await jd(t.appConfig,r),n}catch(n){if(V8(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await G8(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await jd(t.appConfig,r)}throw n}}function Q8(t){return t!==void 0&&t.registrationStatus===2}function b5(t){return t.requestStatus===2&&!j5(t)}function j5(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+s5}function D5(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function O5(t){return t.requestStatus===1&&t.requestTime+O8<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N5(t){const e=t,{installationEntry:n,registrationPromise:r}=await M1(e);return r?r.catch(console.error):V1(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M5(t,e=!1){const n=t;return await V5(n),(await V1(n,e)).token}async function V5(t){const{registrationPromise:e}=await M1(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F5(t){if(!t||!t.options)throw ip("App Configuration");if(!t.name)throw ip("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ip(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ip(t){return uo.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X8="installations",U5="installations-internal",W5=t=>{const e=t.getProvider("app").getImmediate(),n=F5(e),r=Ti(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},$5=t=>{const e=t.getProvider("app").getImmediate(),n=Ti(e,X8).getImmediate();return{getId:()=>N5(n),getToken:i=>M5(n,i)}};function z5(){Rn(new mn(X8,W5,"PUBLIC")),Rn(new mn(U5,$5,"PRIVATE"))}z5();Gt(D8,O1);Gt(D8,O1,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="analytics",B5="firebase_id",H5="origin",q5=60*1e3,Y5="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",F1="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new mh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G5={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},nn=new mo("analytics","Analytics",G5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K5(t){if(!t.startsWith(F1)){const e=nn.create("invalid-gtag-resource",{gtagURL:t});return Kt.warn(e.message),""}return t}function Z8(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Q5(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function X5(t,e){const n=Q5("firebase-js-sdk-policy",{createScriptURL:K5}),r=document.createElement("script"),i=`${F1}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Z5(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function J5(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const u=(await Z8(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(a){Kt.error(a)}t("config",i,o)}async function eO(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Z8(n);for(const u of s){const d=a.find(m=>m.measurementId===u),f=d&&e[d.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){Kt.error(o)}}function tO(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[a,u]=s;await eO(t,e,n,a,u)}else if(o==="config"){const[a,u]=s;await J5(t,e,n,r,a,u)}else if(o==="consent"){const[a,u]=s;t("consent",a,u)}else if(o==="get"){const[a,u,d]=s;t("get",a,u,d)}else if(o==="set"){const[a]=s;t("set",a)}else t(o,...s)}catch(a){Kt.error(a)}}return i}function nO(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=tO(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function rO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(F1)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=30,oO=1e3;class sO{constructor(e={},n=oO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const J8=new sO;function aO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function lO(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:aO(r)},o=Y5.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const u=await s.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw nn.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function uO(t,e=J8,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw nn.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw nn.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new hO;return setTimeout(async()=>{a.abort()},q5),eI({appId:r,apiKey:i,measurementId:o},s,a,e)}async function eI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=J8){var o;const{appId:s,measurementId:a}=t;try{await cO(r,e)}catch(u){if(a)return Kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw u}try{const u=await lO(t);return i.deleteThrottleMetadata(s),u}catch(u){const d=u;if(!dO(d)){if(i.deleteThrottleMetadata(s),a)return Kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:a};throw u}const f=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?w_(n,i.intervalMillis,iO):w_(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),Kt.debug(`Calling attemptFetch again in ${f} millis`),eI(t,m,r,i)}}function cO(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(nn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function dO(t){if(!(t instanceof yn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class hO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function fO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pO(){if(wx())try{await Ex()}catch(t){return Kt.warn(nn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Kt.warn(nn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function mO(t,e,n,r,i,o,s){var a;const u=uO(t);u.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&Kt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Kt.error(_)),e.push(u);const d=pO().then(_=>{if(_)return r.getId()}),[f,m]=await Promise.all([u,d]);rO(o)||X5(o,f.measurementId),i("js",new Date);const w=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return w[H5]="firebase",w.update=!0,m!=null&&(w[B5]=m),i("config",f.measurementId,w),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e){this.app=e}_delete(){return delete El[this.app.options.appId],Promise.resolve()}}let El={},M2=[];const V2={};let op="dataLayer",yO="gtag",F2,tI,U2=!1;function vO(){const t=[];if(kx()&&t.push("This is a browser extension environment."),kA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=nn.create("invalid-analytics-context",{errorInfo:e});Kt.warn(n.message)}}function _O(t,e,n){vO();const r=t.options.appId;if(!r)throw nn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw nn.create("no-api-key");if(El[r]!=null)throw nn.create("already-exists",{id:r});if(!U2){Z5(op);const{wrappedGtag:o,gtagCore:s}=nO(El,M2,V2,op,yO);tI=o,F2=s,U2=!0}return El[r]=mO(t,M2,V2,e,F2,op,n),new gO(t)}function kO(t=gh()){t=We(t);const e=Ti(t,Dd);return e.isInitialized()?e.getImmediate():wO(t)}function wO(t,e={}){const n=Ti(t,Dd);if(n.isInitialized()){const i=n.getImmediate();if(Hl(e,n.getOptions()))return i;throw nn.create("already-initialized")}return n.initialize({options:e})}function EO(t,e,n,r){t=We(t),fO(tI,El[t.app.options.appId],e,n,r).catch(i=>Kt.error(i))}const W2="@firebase/analytics",$2="0.10.8";function xO(){Rn(new mn(Dd,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return _O(r,i,n)},"PUBLIC")),Rn(new mn("analytics-internal",t,"PRIVATE")),Gt(W2,$2),Gt(W2,$2,"esm2017");function t(e){try{const n=e.getProvider(Dd).getImmediate();return{logEvent:(r,i,o)=>EO(n,r,i,o)}}catch(n){throw nn.create("interop-component-reg-failed",{reason:n})}}}xO();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="firebasestorage.googleapis.com",TO="storageBucket",IO=2*60*1e3,SO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends yn{constructor(e,n,r=0){super(sp(e),`Firebase Storage: ${n} (${sp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,er.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Zn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Zn||(Zn={}));function sp(t){return"storage/"+t}function CO(){const t="An unknown error occurred, please check the error payload for server response.";return new er(Zn.UNKNOWN,t)}function AO(){return new er(Zn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function LO(){return new er(Zn.CANCELED,"User canceled the upload/download.")}function PO(t){return new er(Zn.INVALID_URL,"Invalid URL '"+t+"'.")}function RO(t){return new er(Zn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function z2(t){return new er(Zn.INVALID_ARGUMENT,t)}function rI(){return new er(Zn.APP_DELETED,"The Firebase app was deleted.")}function bO(t){return new er(Zn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=In.makeFromUrl(e,n)}catch{return new In(e,"")}if(r.path==="")return r;throw RO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),u={bucket:1,path:3};function d(I){I.path_=decodeURIComponent(I.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",_=new RegExp(`^https?://${m}/${f}/b/${i}/o${w}`,"i"),T={bucket:1,path:3},A=n===nI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",y=new RegExp(`^https?://${A}/${i}/${S}`,"i"),k=[{regex:a,indices:u,postModify:o},{regex:_,indices:T,postModify:d},{regex:y,indices:{bucket:1,path:2},postModify:d}];for(let I=0;I<k.length;I++){const R=k[I],O=R.regex.exec(e);if(O){const E=O[R.indices.bucket];let x=O[R.indices.path];x||(x=""),r=new In(E,x),R.postModify(r);break}}if(r==null)throw PO(e);return r}}class jO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function u(){return a===2}let d=!1;function f(...S){d||(d=!0,e.apply(null,S))}function m(S){i=setTimeout(()=>{i=null,t(_,u())},S)}function w(){o&&clearTimeout(o)}function _(S,...y){if(d){w();return}if(S){w(),f.call(null,S,...y);return}if(u()||s){w(),f.call(null,S,...y);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,m(k)}let T=!1;function A(S){T||(T=!0,w(),!d&&(i!==null?(S||(a=2),clearTimeout(i),m(0)):S||(a=1)))}return m(0),o=setTimeout(()=>{s=!0,A(!0)},n),A}function OO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(t){return t!==void 0}function B2(t,e,n,r){if(r<e)throw z2(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw z2(`Invalid value for '${t}'. Expected ${n} or less.`)}function MO(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Od;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Od||(Od={}));/**
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
 */function VO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,n,r,i,o,s,a,u,d,f,m,w=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,T)=>{this.resolve_=_,this.reject_=T,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new uc(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const u=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===Od.NO_ERROR,u=o.getStatus();if(!a||VO(u,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===Od.ABORT;r(!1,new uc(!1,null,f));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new uc(d,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());NO(u)?o(u):o()}catch(u){s(u)}else if(a!==null){const u=CO();u.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,u)):s(u)}else if(i.canceled){const u=this.appDelete_?rI():LO();s(u)}else{const u=AO();s(u)}};this.canceled_?n(!1,new uc(!1,null,!0)):this.backoffId_=DO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&OO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class uc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function UO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function WO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $O(t,e){e&&(t["X-Firebase-GMPID"]=e)}function zO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function BO(t,e,n,r,i,o,s=!0){const a=MO(t.urlParams),u=t.url+a,d=Object.assign({},t.headers);return $O(d,e),UO(d,n),WO(d,o),zO(d,r),new FO(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function qO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,n){this._service=e,n instanceof In?this._location=n:this._location=In.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Nd(e,n)}get root(){const e=new In(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qO(this._location.path)}get storage(){return this._service}get parent(){const e=HO(this._location.path);if(e===null)return null;const n=new In(this._location.bucket,e);return new Nd(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bO(e)}}function H2(t,e){const n=e==null?void 0:e[TO];return n==null?null:In.makeFromBucketSpec(n,t)}function YO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:_x(i,t.app.options.projectId))}class GO{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=nI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IO,this._maxUploadRetryTime=SO,this._requests=new Set,i!=null?this._bucket=In.makeFromBucketSpec(i,this._host):this._bucket=H2(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=In.makeFromBucketSpec(this._url,e):this._bucket=H2(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){B2("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){B2("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nd(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new jO(rI());{const s=BO(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const q2="@firebase/storage",Y2="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="storage";function KO(t=gh(),e){t=We(t);const r=Ti(t,iI).getImmediate({identifier:e}),i=gx("storage");return i&&QO(r,...i),r}function QO(t,e,n,r={}){YO(t,e,n,r)}function XO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new GO(n,r,i,e,go)}function ZO(){Rn(new mn(iI,XO,"PUBLIC").setMultipleInstances(!0)),Gt(q2,Y2,""),Gt(q2,Y2,"esm2017")}ZO();const JO={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},Wh=Sx(JO),Sn=uT(Wh),Ae=zD(Wh);KO(Wh);console.log("Using production Firebase services");let e3=null;try{e3=kO(Wh),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const U1=new ur;U1.setCustomParameters({prompt:"select_account"});U1.addScope("email");U1.addScope("profile");const oI=N.createContext(),W1=()=>N.useContext(oI),t3=({children:t})=>{const[e,n]=N.useState(null),[r,i]=N.useState(!0);N.useEffect(()=>{const s=$P(Sn,a=>{n(a),i(!1)});return()=>s()},[]);const o={currentUser:e,loading:r};return h.jsx(oI.Provider,{value:o,children:t})};var zt=function(){return zt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},zt.apply(this,arguments)};function Md(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var De="-ms-",xl="-moz-",Ee="-webkit-",sI="comm",$h="rule",$1="decl",n3="@import",aI="@keyframes",r3="@layer",lI=Math.abs,z1=String.fromCharCode,Qm=Object.assign;function i3(t,e){return at(t,0)^45?(((e<<2^at(t,0))<<2^at(t,1))<<2^at(t,2))<<2^at(t,3):0}function uI(t){return t.trim()}function ar(t,e){return(t=e.exec(t))?t[0]:t}function ue(t,e,n){return t.replace(e,n)}function Vc(t,e,n){return t.indexOf(e,n)}function at(t,e){return t.charCodeAt(e)|0}function na(t,e,n){return t.slice(e,n)}function Un(t){return t.length}function cI(t){return t.length}function ol(t,e){return e.push(t),t}function o3(t,e){return t.map(e).join("")}function G2(t,e){return t.filter(function(n){return!ar(n,e)})}var zh=1,ra=1,dI=0,gn=0,Je=0,_a="";function Bh(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:zh,column:ra,length:s,return:"",siblings:a}}function Vr(t,e){return Qm(Bh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function rs(t){for(;t.root;)t=Vr(t.root,{children:[t]});ol(t,t.siblings)}function s3(){return Je}function a3(){return Je=gn>0?at(_a,--gn):0,ra--,Je===10&&(ra=1,zh--),Je}function Ln(){return Je=gn<dI?at(_a,gn++):0,ra++,Je===10&&(ra=1,zh++),Je}function Qi(){return at(_a,gn)}function Fc(){return gn}function Hh(t,e){return na(_a,t,e)}function Xm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function l3(t){return zh=ra=1,dI=Un(_a=t),gn=0,[]}function u3(t){return _a="",t}function ap(t){return uI(Hh(gn-1,Zm(t===91?t+2:t===40?t+1:t)))}function c3(t){for(;(Je=Qi())&&Je<33;)Ln();return Xm(t)>2||Xm(Je)>3?"":" "}function d3(t,e){for(;--e&&Ln()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return Hh(t,Fc()+(e<6&&Qi()==32&&Ln()==32))}function Zm(t){for(;Ln();)switch(Je){case t:return gn;case 34:case 39:t!==34&&t!==39&&Zm(Je);break;case 40:t===41&&Zm(t);break;case 92:Ln();break}return gn}function h3(t,e){for(;Ln()&&t+Je!==57;)if(t+Je===84&&Qi()===47)break;return"/*"+Hh(e,gn-1)+"*"+z1(t===47?t:Ln())}function f3(t){for(;!Xm(Qi());)Ln();return Hh(t,gn)}function p3(t){return u3(Uc("",null,null,null,[""],t=l3(t),0,[0],t))}function Uc(t,e,n,r,i,o,s,a,u){for(var d=0,f=0,m=s,w=0,_=0,T=0,A=1,S=1,y=1,g=0,k="",I=i,R=o,O=r,E=k;S;)switch(T=g,g=Ln()){case 40:if(T!=108&&at(E,m-1)==58){Vc(E+=ue(ap(g),"&","&\f"),"&\f",lI(d?a[d-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:E+=ap(g);break;case 9:case 10:case 13:case 32:E+=c3(T);break;case 92:E+=d3(Fc()-1,7);continue;case 47:switch(Qi()){case 42:case 47:ol(m3(h3(Ln(),Fc()),e,n,u),u);break;default:E+="/"}break;case 123*A:a[d++]=Un(E)*y;case 125*A:case 59:case 0:switch(g){case 0:case 125:S=0;case 59+f:y==-1&&(E=ue(E,/\f/g,"")),_>0&&Un(E)-m&&ol(_>32?Q2(E+";",r,n,m-1,u):Q2(ue(E," ","")+";",r,n,m-2,u),u);break;case 59:E+=";";default:if(ol(O=K2(E,e,n,d,f,i,a,k,I=[],R=[],m,o),o),g===123)if(f===0)Uc(E,e,O,O,I,o,m,a,R);else switch(w===99&&at(E,3)===110?100:w){case 100:case 108:case 109:case 115:Uc(t,O,O,r&&ol(K2(t,O,O,0,0,i,a,k,i,I=[],m,R),R),i,R,m,a,r?I:R);break;default:Uc(E,O,O,O,[""],R,0,a,R)}}d=f=_=0,A=y=1,k=E="",m=s;break;case 58:m=1+Un(E),_=T;default:if(A<1){if(g==123)--A;else if(g==125&&A++==0&&a3()==125)continue}switch(E+=z1(g),g*A){case 38:y=f>0?1:(E+="\f",-1);break;case 44:a[d++]=(Un(E)-1)*y,y=1;break;case 64:Qi()===45&&(E+=ap(Ln())),w=Qi(),f=m=Un(k=E+=f3(Fc())),g++;break;case 45:T===45&&Un(E)==2&&(A=0)}}return o}function K2(t,e,n,r,i,o,s,a,u,d,f,m){for(var w=i-1,_=i===0?o:[""],T=cI(_),A=0,S=0,y=0;A<r;++A)for(var g=0,k=na(t,w+1,w=lI(S=s[A])),I=t;g<T;++g)(I=uI(S>0?_[g]+" "+k:ue(k,/&\f/g,_[g])))&&(u[y++]=I);return Bh(t,e,n,i===0?$h:a,u,d,f,m)}function m3(t,e,n,r){return Bh(t,e,n,sI,z1(s3()),na(t,2,-2),0,r)}function Q2(t,e,n,r,i){return Bh(t,e,n,$1,na(t,0,r),na(t,r+1,-1),r,i)}function hI(t,e,n){switch(i3(t,e)){case 5103:return Ee+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ee+t+t;case 4789:return xl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ee+t+xl+t+De+t+t;case 5936:switch(at(t,e+11)){case 114:return Ee+t+De+ue(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ee+t+De+ue(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ee+t+De+ue(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ee+t+De+t+t;case 6165:return Ee+t+De+"flex-"+t+t;case 5187:return Ee+t+ue(t,/(\w+).+(:[^]+)/,Ee+"box-$1$2"+De+"flex-$1$2")+t;case 5443:return Ee+t+De+"flex-item-"+ue(t,/flex-|-self/g,"")+(ar(t,/flex-|baseline/)?"":De+"grid-row-"+ue(t,/flex-|-self/g,""))+t;case 4675:return Ee+t+De+"flex-line-pack"+ue(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ee+t+De+ue(t,"shrink","negative")+t;case 5292:return Ee+t+De+ue(t,"basis","preferred-size")+t;case 6060:return Ee+"box-"+ue(t,"-grow","")+Ee+t+De+ue(t,"grow","positive")+t;case 4554:return Ee+ue(t,/([^-])(transform)/g,"$1"+Ee+"$2")+t;case 6187:return ue(ue(ue(t,/(zoom-|grab)/,Ee+"$1"),/(image-set)/,Ee+"$1"),t,"")+t;case 5495:case 3959:return ue(t,/(image-set\([^]*)/,Ee+"$1$`$1");case 4968:return ue(ue(t,/(.+:)(flex-)?(.*)/,Ee+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ee+t+t;case 4200:if(!ar(t,/flex-|baseline/))return De+"grid-column-align"+na(t,e)+t;break;case 2592:case 3360:return De+ue(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,ar(r.props,/grid-\w+-end/)})?~Vc(t+(n=n[e].value),"span",0)?t:De+ue(t,"-start","")+t+De+"grid-row-span:"+(~Vc(n,"span",0)?ar(n,/\d+/):+ar(n,/\d+/)-+ar(t,/\d+/))+";":De+ue(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return ar(r.props,/grid-\w+-start/)})?t:De+ue(ue(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ue(t,/(.+)-inline(.+)/,Ee+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Un(t)-1-e>6)switch(at(t,e+1)){case 109:if(at(t,e+4)!==45)break;case 102:return ue(t,/(.+:)(.+)-([^]+)/,"$1"+Ee+"$2-$3$1"+xl+(at(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Vc(t,"stretch",0)?hI(ue(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ue(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,u,d){return De+i+":"+o+d+(s?De+i+"-span:"+(a?u:+u-+o)+d:"")+t});case 4949:if(at(t,e+6)===121)return ue(t,":",":"+Ee)+t;break;case 6444:switch(at(t,at(t,14)===45?18:11)){case 120:return ue(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ee+(at(t,14)===45?"inline-":"")+"box$3$1"+Ee+"$2$3$1"+De+"$2box$3")+t;case 100:return ue(t,":",":"+De)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(t,"scroll-","scroll-snap-")+t}return t}function Vd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function g3(t,e,n,r){switch(t.type){case r3:if(t.children.length)break;case n3:case $1:return t.return=t.return||t.value;case sI:return"";case aI:return t.return=t.value+"{"+Vd(t.children,r)+"}";case $h:if(!Un(t.value=t.props.join(",")))return""}return Un(n=Vd(t.children,r))?t.return=t.value+"{"+n+"}":""}function y3(t){var e=cI(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function v3(t){return function(e){e.root||(e=e.return)&&t(e)}}function _3(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case $1:t.return=hI(t.value,t.length,n);return;case aI:return Vd([Vr(t,{value:ue(t.value,"@","@"+Ee)})],r);case $h:if(t.length)return o3(n=t.props,function(i){switch(ar(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":rs(Vr(t,{props:[ue(i,/:(read-\w+)/,":"+xl+"$1")]})),rs(Vr(t,{props:[i]})),Qm(t,{props:G2(n,r)});break;case"::placeholder":rs(Vr(t,{props:[ue(i,/:(plac\w+)/,":"+Ee+"input-$1")]})),rs(Vr(t,{props:[ue(i,/:(plac\w+)/,":"+xl+"$1")]})),rs(Vr(t,{props:[ue(i,/:(plac\w+)/,De+"input-$1")]})),rs(Vr(t,{props:[i]})),Qm(t,{props:G2(n,r)});break}return""})}}var k3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xt={},ia=typeof process<"u"&&Xt!==void 0&&(Xt.REACT_APP_SC_ATTR||Xt.SC_ATTR)||"data-styled",fI="active",pI="data-styled-version",qh="6.1.17",B1=`/*!sc*/
`,Fd=typeof window<"u"&&"HTMLElement"in window,w3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Xt!==void 0&&Xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Xt.REACT_APP_SC_DISABLE_SPEEDY!==""?Xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Xt!==void 0&&Xt.SC_DISABLE_SPEEDY!==void 0&&Xt.SC_DISABLE_SPEEDY!==""&&Xt.SC_DISABLE_SPEEDY!=="false"&&Xt.SC_DISABLE_SPEEDY),Yh=Object.freeze([]),oa=Object.freeze({});function E3(t,e,n){return n===void 0&&(n=oa),t.theme!==n.theme&&t.theme||e||n.theme}var mI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),x3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,T3=/(^-|-$)/g;function X2(t){return t.replace(x3,"-").replace(T3,"")}var I3=/(a)(d)/gi,cc=52,Z2=function(t){return String.fromCharCode(t+(t>25?39:97))};function Jm(t){var e,n="";for(e=Math.abs(t);e>cc;e=e/cc|0)n=Z2(e%cc)+n;return(Z2(e%cc)+n).replace(I3,"$1-$2")}var lp,gI=5381,Ls=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},yI=function(t){return Ls(gI,t)};function S3(t){return Jm(yI(t)>>>0)}function C3(t){return t.displayName||t.name||"Component"}function up(t){return typeof t=="string"&&!0}var vI=typeof Symbol=="function"&&Symbol.for,_I=vI?Symbol.for("react.memo"):60115,A3=vI?Symbol.for("react.forward_ref"):60112,L3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},P3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},R3=((lp={})[A3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lp[_I]=kI,lp);function J2(t){return("type"in(e=t)&&e.type.$$typeof)===_I?kI:"$$typeof"in t?R3[t.$$typeof]:L3;var e}var b3=Object.defineProperty,j3=Object.getOwnPropertyNames,ek=Object.getOwnPropertySymbols,D3=Object.getOwnPropertyDescriptor,O3=Object.getPrototypeOf,tk=Object.prototype;function wI(t,e,n){if(typeof e!="string"){if(tk){var r=O3(e);r&&r!==tk&&wI(t,r,n)}var i=j3(e);ek&&(i=i.concat(ek(e)));for(var o=J2(t),s=J2(e),a=0;a<i.length;++a){var u=i[a];if(!(u in P3||n&&n[u]||s&&u in s||o&&u in o)){var d=D3(e,u);try{b3(t,u,d)}catch{}}}}return t}function sa(t){return typeof t=="function"}function H1(t){return typeof t=="object"&&"styledComponentId"in t}function qi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function nk(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function ru(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function eg(t,e,n){if(n===void 0&&(n=!1),!n&&!ru(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=eg(t[r],e[r]);else if(ru(e))for(var r in e)t[r]=eg(t[r],e[r]);return t}function q1(t,e){Object.defineProperty(t,"toString",{value:e})}function Eu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var N3=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Eu(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(B1);return n},t}(),Wc=new Map,Ud=new Map,$c=1,dc=function(t){if(Wc.has(t))return Wc.get(t);for(;Ud.has($c);)$c++;var e=$c++;return Wc.set(t,e),Ud.set(e,t),e},M3=function(t,e){$c=e+1,Wc.set(t,e),Ud.set(e,t)},V3="style[".concat(ia,"][").concat(pI,'="').concat(qh,'"]'),F3=new RegExp("^".concat(ia,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),U3=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},W3=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(B1),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var u=a.match(F3);if(u){var d=0|parseInt(u[1],10),f=u[2];d!==0&&(M3(f,d),U3(t,f,u[3]),t.getTag().insertRules(d,i)),i.length=0}else i.push(a)}}},rk=function(t){for(var e=document.querySelectorAll(V3),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(ia)!==fI&&(W3(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function $3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var EI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(ia,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ia,fI),r.setAttribute(pI,qh);var s=$3();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},z3=function(){function t(e){this.element=EI(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Eu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),B3=function(){function t(e){this.element=EI(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),H3=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),ik=Fd,q3={isServer:!Fd,useCSSOMInjection:!w3},xI=function(){function t(e,n,r){e===void 0&&(e=oa),n===void 0&&(n={});var i=this;this.options=zt(zt({},q3),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Fd&&ik&&(ik=!1,rk(this)),q1(this,function(){return function(o){for(var s=o.getTag(),a=s.length,u="",d=function(m){var w=function(y){return Ud.get(y)}(m);if(w===void 0)return"continue";var _=o.names.get(w),T=s.getGroup(m);if(_===void 0||!_.size||T.length===0)return"continue";var A="".concat(ia,".g").concat(m,'[id="').concat(w,'"]'),S="";_!==void 0&&_.forEach(function(y){y.length>0&&(S+="".concat(y,","))}),u+="".concat(T).concat(A,'{content:"').concat(S,'"}').concat(B1)},f=0;f<a;f++)d(f);return u}(i)})}return t.registerId=function(e){return dc(e)},t.prototype.rehydrate=function(){!this.server&&Fd&&rk(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(zt(zt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new H3(i):r?new z3(i):new B3(i)}(this.options),new N3(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(dc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(dc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(dc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Y3=/&/g,G3=/^\s*\/\/.*$/gm;function TI(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=TI(n.children,e)),n})}function K3(t){var e,n,r,i=oa,o=i.options,s=o===void 0?oa:o,a=i.plugins,u=a===void 0?Yh:a,d=function(w,_,T){return T.startsWith(n)&&T.endsWith(n)&&T.replaceAll(n,"").length>0?".".concat(e):w},f=u.slice();f.push(function(w){w.type===$h&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(Y3,n).replace(r,d))}),s.prefix&&f.push(_3),f.push(g3);var m=function(w,_,T,A){_===void 0&&(_=""),T===void 0&&(T=""),A===void 0&&(A="&"),e=A,n=_,r=new RegExp("\\".concat(n,"\\b"),"g");var S=w.replace(G3,""),y=p3(T||_?"".concat(T," ").concat(_," { ").concat(S," }"):S);s.namespace&&(y=TI(y,s.namespace));var g=[];return Vd(y,y3(f.concat(v3(function(k){return g.push(k)})))),g};return m.hash=u.length?u.reduce(function(w,_){return _.name||Eu(15),Ls(w,_.name)},gI).toString():"",m}var Q3=new xI,tg=K3(),II=c.createContext({shouldForwardProp:void 0,styleSheet:Q3,stylis:tg});II.Consumer;c.createContext(void 0);function ok(){return N.useContext(II)}var X3=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=tg);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,q1(this,function(){throw Eu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=tg),this.name+e.hash},t}(),Z3=function(t){return t>="A"&&t<="Z"};function sk(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;Z3(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var SI=function(t){return t==null||t===!1||t===""},CI=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!SI(o)&&(Array.isArray(o)&&o.isCss||sa(o)?r.push("".concat(sk(i),":"),o,";"):ru(o)?r.push.apply(r,Md(Md(["".concat(i," {")],CI(o),!1),["}"],!1)):r.push("".concat(sk(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in k3||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Xi(t,e,n,r){if(SI(t))return[];if(H1(t))return[".".concat(t.styledComponentId)];if(sa(t)){if(!sa(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return Xi(i,e,n,r)}var o;return t instanceof X3?n?(t.inject(n,r),[t.getName(r)]):[t]:ru(t)?CI(t):Array.isArray(t)?Array.prototype.concat.apply(Yh,t.map(function(s){return Xi(s,e,n,r)})):[t.toString()]}function J3(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(sa(n)&&!H1(n))return!1}return!0}var eN=yI(qh),tN=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&J3(e),this.componentId=n,this.baseHash=Ls(eN,n),this.baseStyle=r,xI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=qi(i,this.staticRulesId);else{var o=nk(Xi(this.rules,e,n,r)),s=Jm(Ls(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=qi(i,s),this.staticRulesId=s}else{for(var u=Ls(this.baseHash,r.hash),d="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")d+=m;else if(m){var w=nk(Xi(m,e,n,r));u=Ls(u,w+f),d+=w}}if(d){var _=Jm(u>>>0);n.hasNameForId(this.componentId,_)||n.insertRules(this.componentId,_,r(d,".".concat(_),void 0,this.componentId)),i=qi(i,_)}}return i},t}(),AI=c.createContext(void 0);AI.Consumer;var cp={};function nN(t,e,n){var r=H1(t),i=t,o=!up(t),s=e.attrs,a=s===void 0?Yh:s,u=e.componentId,d=u===void 0?function(I,R){var O=typeof I!="string"?"sc":X2(I);cp[O]=(cp[O]||0)+1;var E="".concat(O,"-").concat(S3(qh+O+cp[O]));return R?"".concat(R,"-").concat(E):E}(e.displayName,e.parentComponentId):u,f=e.displayName,m=f===void 0?function(I){return up(I)?"styled.".concat(I):"Styled(".concat(C3(I),")")}(t):f,w=e.displayName&&e.componentId?"".concat(X2(e.displayName),"-").concat(e.componentId):e.componentId||d,_=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,T=e.shouldForwardProp;if(r&&i.shouldForwardProp){var A=i.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;T=function(I,R){return A(I,R)&&S(I,R)}}else T=A}var y=new tN(n,w,r?i.componentStyle:void 0);function g(I,R){return function(O,E,x){var L=O.attrs,j=O.componentStyle,b=O.defaultProps,D=O.foldedComponentIds,P=O.styledComponentId,Y=O.target,ae=c.useContext(AI),pe=ok(),me=O.shouldForwardProp||pe.shouldForwardProp,z=E3(E,ae,b)||oa,q=function(Ye,Xe,F){for(var oe,se=zt(zt({},Xe),{className:void 0,theme:F}),le=0;le<Ye.length;le+=1){var de=sa(oe=Ye[le])?oe(se):oe;for(var xe in de)se[xe]=xe==="className"?qi(se[xe],de[xe]):xe==="style"?zt(zt({},se[xe]),de[xe]):de[xe]}return Xe.className&&(se.className=qi(se.className,Xe.className)),se}(L,E,z),Z=q.as||Y,ce={};for(var ee in q)q[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&q.theme===z||(ee==="forwardedAs"?ce.as=q.forwardedAs:me&&!me(ee,Z)||(ce[ee]=q[ee]));var ye=function(Ye,Xe){var F=ok(),oe=Ye.generateAndInjectStyles(Xe,F.styleSheet,F.stylis);return oe}(j,q),qe=qi(D,P);return ye&&(qe+=" "+ye),q.className&&(qe+=" "+q.className),ce[up(Z)&&!mI.has(Z)?"class":"className"]=qe,x&&(ce.ref=x),N.createElement(Z,ce)}(k,I,R)}g.displayName=m;var k=c.forwardRef(g);return k.attrs=_,k.componentStyle=y,k.displayName=m,k.shouldForwardProp=T,k.foldedComponentIds=r?qi(i.foldedComponentIds,i.styledComponentId):"",k.styledComponentId=w,k.target=r?i.target:t,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(I){this._foldedDefaultProps=r?function(R){for(var O=[],E=1;E<arguments.length;E++)O[E-1]=arguments[E];for(var x=0,L=O;x<L.length;x++)eg(R,L[x],!0);return R}({},i.defaultProps,I):I}}),q1(k,function(){return".".concat(k.styledComponentId)}),o&&wI(k,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function ak(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var lk=function(t){return Object.assign(t,{isCss:!0})};function rN(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(sa(t)||ru(t))return lk(Xi(ak(Yh,Md([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Xi(r):lk(Xi(ak(r,e)))}function ng(t,e,n){if(n===void 0&&(n=oa),!e)throw Eu(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,rN.apply(void 0,Md([i],o,!1)))};return r.attrs=function(i){return ng(t,e,zt(zt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ng(t,e,zt(zt({},n),i))},r}var LI=function(t){return ng(nN,t)},V=LI;mI.forEach(function(t){V[t]=LI(t)});function PI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=PI(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Xr(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=PI(t))&&(r&&(r+=" "),r+=e);return r}const Tl=t=>typeof t=="number"&&!isNaN(t),ho=t=>typeof t=="string",Bt=t=>typeof t=="function",zc=t=>ho(t)||Bt(t)?t:null,dp=t=>N.isValidElement(t)||ho(t)||Bt(t)||Tl(t);function iN(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Gh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:u,preventExitTransition:d,done:f,nodeRef:m,isIn:w}=s;const _=r?`${e}--${u}`:e,T=r?`${n}--${u}`:n,A=N.useRef(0);return N.useLayoutEffect(()=>{const S=m.current,y=_.split(" "),g=k=>{k.target===m.current&&(S.dispatchEvent(new Event("d")),S.removeEventListener("animationend",g),S.removeEventListener("animationcancel",g),A.current===0&&k.type!=="animationcancel"&&S.classList.remove(...y))};S.classList.add(...y),S.addEventListener("animationend",g),S.addEventListener("animationcancel",g)},[]),N.useEffect(()=>{const S=m.current,y=()=>{S.removeEventListener("animationend",y),i?iN(S,f,o):f()};w||(d?y():(A.current=1,S.className+=` ${T}`,S.addEventListener("animationend",y)))},[w]),c.createElement(c.Fragment,null,a)}}function uk(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const an={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},hc=t=>{let{theme:e,type:n,...r}=t;return c.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},hp={info:function(t){return c.createElement(hc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(hc,{...t},c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(hc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(hc,{...t},c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function oN(t){const[,e]=N.useReducer(_=>_+1,0),[n,r]=N.useState([]),i=N.useRef(null),o=N.useRef(new Map).current,s=_=>n.indexOf(_)!==-1,a=N.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:_=>o.get(_)}).current;function u(_){let{containerId:T}=_;const{limit:A}=a.props;!A||T&&a.containerId!==T||(a.count-=a.queue.length,a.queue=[])}function d(_){r(T=>_==null?[]:T.filter(A=>A!==_))}function f(){const{toastContent:_,toastProps:T,staleId:A}=a.queue.shift();w(_,T,A)}function m(_,T){let{delay:A,staleId:S,...y}=T;if(!dp(_)||function(D){return!i.current||a.props.enableMultiContainer&&D.containerId!==a.props.containerId||o.has(D.toastId)&&D.updateId==null}(y))return;const{toastId:g,updateId:k,data:I}=y,{props:R}=a,O=()=>d(g),E=k==null;E&&a.count++;const x={...R,style:R.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(y).filter(D=>{let[P,Y]=D;return Y!=null})),toastId:g,updateId:k,data:I,closeToast:O,isIn:!1,className:zc(y.className||R.toastClassName),bodyClassName:zc(y.bodyClassName||R.bodyClassName),progressClassName:zc(y.progressClassName||R.progressClassName),autoClose:!y.isLoading&&(L=y.autoClose,j=R.autoClose,L===!1||Tl(L)&&L>0?L:j),deleteToast(){const D=uk(o.get(g),"removed");o.delete(g),an.emit(4,D);const P=a.queue.length;if(a.count=g==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),P>0){const Y=g==null?a.props.limit:1;if(P===1||Y===1)a.displayedToast++,f();else{const ae=Y>P?P:Y;a.displayedToast=ae;for(let pe=0;pe<ae;pe++)f()}}else e()}};var L,j;x.iconOut=function(D){let{theme:P,type:Y,isLoading:ae,icon:pe}=D,me=null;const z={theme:P,type:Y};return pe===!1||(Bt(pe)?me=pe(z):N.isValidElement(pe)?me=N.cloneElement(pe,z):ho(pe)||Tl(pe)?me=pe:ae?me=hp.spinner():(q=>q in hp)(Y)&&(me=hp[Y](z))),me}(x),Bt(y.onOpen)&&(x.onOpen=y.onOpen),Bt(y.onClose)&&(x.onClose=y.onClose),x.closeButton=R.closeButton,y.closeButton===!1||dp(y.closeButton)?x.closeButton=y.closeButton:y.closeButton===!0&&(x.closeButton=!dp(R.closeButton)||R.closeButton);let b=_;N.isValidElement(_)&&!ho(_.type)?b=N.cloneElement(_,{closeToast:O,toastProps:x,data:I}):Bt(_)&&(b=_({closeToast:O,toastProps:x,data:I})),R.limit&&R.limit>0&&a.count>R.limit&&E?a.queue.push({toastContent:b,toastProps:x,staleId:S}):Tl(A)?setTimeout(()=>{w(b,x,S)},A):w(b,x,S)}function w(_,T,A){const{toastId:S}=T;A&&o.delete(A);const y={content:_,props:T};o.set(S,y),r(g=>[...g,S].filter(k=>k!==A)),an.emit(4,uk(y,y.props.updateId==null?"added":"updated"))}return N.useEffect(()=>(a.containerId=t.containerId,an.cancelEmit(3).on(0,m).on(1,_=>i.current&&d(_)).on(5,u).emit(2,a),()=>{o.clear(),an.emit(3,a)}),[]),N.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(_){const T=new Map,A=Array.from(o.values());return t.newestOnTop&&A.reverse(),A.forEach(S=>{const{position:y}=S.props;T.has(y)||T.set(y,[]),T.get(y).push(S)}),Array.from(T,S=>_(S[0],S[1]))},containerRef:i,isToastActive:s}}function ck(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function dk(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function sN(t){const[e,n]=N.useState(!1),[r,i]=N.useState(!1),o=N.useRef(null),s=N.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=N.useRef(t),{autoClose:u,pauseOnHover:d,closeToast:f,onClick:m,closeOnClick:w}=t;function _(I){if(t.draggable){I.nativeEvent.type==="touchstart"&&I.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",g),document.addEventListener("touchmove",y),document.addEventListener("touchend",g);const R=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=R.getBoundingClientRect(),R.style.transition="",s.x=ck(I.nativeEvent),s.y=dk(I.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=R.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=R.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function T(I){if(s.boundingRect){const{top:R,bottom:O,left:E,right:x}=s.boundingRect;I.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=E&&s.x<=x&&s.y>=R&&s.y<=O?S():A()}}function A(){n(!0)}function S(){n(!1)}function y(I){const R=o.current;s.canDrag&&R&&(s.didMove=!0,e&&S(),s.x=ck(I),s.y=dk(I),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),R.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,R.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",g);const I=o.current;if(s.canDrag&&s.didMove&&I){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();I.style.transition="transform 0.2s, opacity 0.2s",I.style.transform=`translate${t.draggableDirection}(0)`,I.style.opacity="1"}}N.useEffect(()=>{a.current=t}),N.useEffect(()=>(o.current&&o.current.addEventListener("d",A,{once:!0}),Bt(t.onOpen)&&t.onOpen(N.isValidElement(t.children)&&t.children.props),()=>{const I=a.current;Bt(I.onClose)&&I.onClose(N.isValidElement(I.children)&&I.children.props)}),[]),N.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||S(),window.addEventListener("focus",A),window.addEventListener("blur",S)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",A),window.removeEventListener("blur",S))}),[t.pauseOnFocusLoss]);const k={onMouseDown:_,onTouchStart:_,onMouseUp:T,onTouchEnd:T};return u&&d&&(k.onMouseEnter=S,k.onMouseLeave=A),w&&(k.onClick=I=>{m&&m(I),s.canCloseOnClick&&f()}),{playToast:A,pauseToast:S,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:k}}function RI(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return c.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function aN(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:u,progress:d,rtl:f,isIn:m,theme:w}=t;const _=o||u&&d===0,T={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:_?0:1};u&&(T.transform=`scaleX(${d})`);const A=Xr("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${w}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),S=Bt(s)?s({rtl:f,type:i,defaultClassName:A}):Xr(A,s);return c.createElement("div",{role:"progressbar","aria-hidden":_?"true":"false","aria-label":"notification timer",className:S,style:T,[u&&d>=1?"onTransitionEnd":"onAnimationEnd"]:u&&d<1?null:()=>{m&&r()}})}const lN=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=sN(t),{closeButton:o,children:s,autoClose:a,onClick:u,type:d,hideProgressBar:f,closeToast:m,transition:w,position:_,className:T,style:A,bodyClassName:S,bodyStyle:y,progressClassName:g,progressStyle:k,updateId:I,role:R,progress:O,rtl:E,toastId:x,deleteToast:L,isIn:j,isLoading:b,iconOut:D,closeOnClick:P,theme:Y}=t,ae=Xr("Toastify__toast",`Toastify__toast-theme--${Y}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":P}),pe=Bt(T)?T({rtl:E,position:_,type:d,defaultClassName:ae}):Xr(ae,T),me=!!O||!a,z={closeToast:m,type:d,theme:Y};let q=null;return o===!1||(q=Bt(o)?o(z):N.isValidElement(o)?N.cloneElement(o,z):RI(z)),c.createElement(w,{isIn:j,done:L,position:_,preventExitTransition:n,nodeRef:r},c.createElement("div",{id:x,onClick:u,className:pe,...i,style:A,ref:r},c.createElement("div",{...j&&{role:R},className:Bt(S)?S({type:d}):Xr("Toastify__toast-body",S),style:y},D!=null&&c.createElement("div",{className:Xr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!b})},D),c.createElement("div",null,s)),q,c.createElement(aN,{...I&&!me?{key:`pb-${I}`}:{},rtl:E,theme:Y,delay:a,isRunning:e,isIn:j,closeToast:m,hide:f,type:d,style:k,className:g,controlledProgress:me,progress:O||0})))},Kh=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},uN=Gh(Kh("bounce",!0));Gh(Kh("slide",!0));Gh(Kh("zoom"));Gh(Kh("flip"));const rg=N.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=oN(t),{className:o,style:s,rtl:a,containerId:u}=t;function d(f){const m=Xr("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":a});return Bt(o)?o({position:f,rtl:a,defaultClassName:m}):Xr(m,zc(o))}return N.useEffect(()=>{e&&(e.current=r.current)},[]),c.createElement("div",{ref:r,className:"Toastify",id:u},n((f,m)=>{const w=m.length?{...s}:{...s,pointerEvents:"none"};return c.createElement("div",{className:d(f),style:w,key:`container-${f}`},m.map((_,T)=>{let{content:A,props:S}=_;return c.createElement(lN,{...S,isIn:i(S.toastId),style:{...S.style,"--nth":T+1,"--len":m.length},key:`toast-${S.key}`},A)}))}))});rg.displayName="ToastContainer",rg.defaultProps={position:"top-right",transition:uN,autoClose:5e3,closeButton:RI,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let fp,Vi=new Map,sl=[],cN=1;function bI(){return""+cN++}function dN(t){return t&&(ho(t.toastId)||Tl(t.toastId))?t.toastId:bI()}function Il(t,e){return Vi.size>0?an.emit(0,t,e):sl.push({content:t,options:e}),e.toastId}function Wd(t,e){return{...e,type:e&&e.type||t,toastId:dN(e)}}function fc(t){return(e,n)=>Il(e,Wd(t,n))}function G(t,e){return Il(t,Wd("default",e))}G.loading=(t,e)=>Il(t,Wd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),G.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=ho(i)?G.loading(i,n):G.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(f,m,w)=>{if(m==null)return void G.dismiss(r);const _={type:f,...a,...n,data:w},T=ho(m)?{render:m}:m;return r?G.update(r,{..._,...T}):G(T.render,{..._,...T}),w},d=Bt(t)?t():t;return d.then(f=>u("success",s,f)).catch(f=>u("error",o,f)),d},G.success=fc("success"),G.info=fc("info"),G.error=fc("error"),G.warning=fc("warning"),G.warn=G.warning,G.dark=(t,e)=>Il(t,Wd("default",{theme:"dark",...e})),G.dismiss=t=>{Vi.size>0?an.emit(1,t):sl=sl.filter(e=>t!=null&&e.options.toastId!==t)},G.clearWaitingQueue=function(t){return t===void 0&&(t={}),an.emit(5,t)},G.isActive=t=>{let e=!1;return Vi.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},G.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=Vi.get(o||fp);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:bI()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,Il(s,o)}},0)},G.done=t=>{G.update(t,{progress:1})},G.onChange=t=>(an.on(4,t),()=>{an.off(4,t)}),G.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},G.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},an.on(2,t=>{fp=t.containerId||t,Vi.set(fp,t),sl.forEach(e=>{an.emit(0,e.content,e.options)}),sl=[]}).on(3,t=>{Vi.delete(t.containerId||t),Vi.size===0&&an.off(0).off(1).off(5)});var hN=N.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Le=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function hk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Ce=N.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,o=t.weight,s=t.mirrored,a=t.children,u=t.renderPath,d=hk(t,["alt","color","size","weight","mirrored","children","renderPath"]),f=N.useContext(hN),m=f.color,w=m===void 0?"currentColor":m,_=f.size,T=f.weight,A=T===void 0?"regular":T,S=f.mirrored,y=S===void 0?!1:S,g=hk(f,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??_,height:i??_,fill:r??w,viewBox:"0 0 256 256",transform:s||y?"scale(-1, 1)":void 0},g,d),!!n&&c.createElement("title",null,n),a,c.createElement("rect",{width:"256",height:"256",fill:"none"}),u(o??A,r??w))});Ce.displayName="IconBase";var ko=new Map;ko.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ko.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ko.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});ko.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ko.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ko.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var fN=function(e,n){return Le(e,n,ko)},jI=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:fN}))});jI.displayName="ArrowLeft";var wo=new Map;wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var pN=function(e,n){return Le(e,n,wo)},ig=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:pN}))});ig.displayName="ArrowRight";var Eo=new Map;Eo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"136",x2:"108",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"176",x2:"188",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"136",x2:"188",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Eo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",opacity:"0.2"}),c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Eo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M240,208h-8V104a16,16,0,0,0-16-16H152V40a16,16,0,0,0-16-16H40A16,16,0,0,0,24,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM120,136a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h32A8,8,0,0,1,120,136ZM64,64H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,104H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm88-64h64V208H152Z"}),c.createElement("path",{d:"M192,168H176a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"}),c.createElement("path",{d:"M176,144h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"}))});Eo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Eo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Eo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var mN=function(e,n){return Le(e,n,Eo)},Y1=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:mN}))});Y1.displayName="Buildings";var xo=new Map;xo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});xo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});xo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});xo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});xo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});xo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var gN=function(e,n){return Le(e,n,xo)},$n=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:gN}))});$n.displayName="Calendar";var To=new Map;To.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});To.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});To.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});To.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});To.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});To.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var yN=function(e,n){return Le(e,n,To)},G1=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:yN}))});G1.displayName="Check";var Io=new Map;Io.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Io.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Io.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});Io.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Io.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Io.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var vN=function(e,n){return Le(e,n,Io)},Ui=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:vN}))});Ui.displayName="CheckCircle";var So=new Map;So.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});So.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});So.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});So.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});So.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});So.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var _N=function(e,n){return Le(e,n,So)},Ps=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:_N}))});Ps.displayName="Clock";var Co=new Map;Co.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Co.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Co.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm91.2-27.7a8,8,0,0,0-8.7,1.8L204.2,68.4l-8.3-8.3a96,96,0,1,0,0,135.8,8,8,0,0,0,0-11.3,7.9,7.9,0,0,0-11.3,0,80,80,0,1,1,0-113.2l8.3,8.3L178.5,94.1a8,8,0,0,0,5.7,13.6h40a8,8,0,0,0,8-8v-40A8.2,8.2,0,0,0,227.2,52.3Z"}))});Co.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Co.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Co.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var kN=function(e,n){return Le(e,n,Co)},DI=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:kN}))});DI.displayName="ClockClockwise";var Ao=new Map;Ao.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ao.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ao.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm59.9-19.9a96.2,96.2,0,0,0-135.8,0l-8.3,8.3L37.5,54.1a8,8,0,0,0-8.7-1.8,8.2,8.2,0,0,0-5,7.4v40a8,8,0,0,0,8,8h40a8,8,0,0,0,5.7-13.6L63.1,79.7l8.3-8.3a80,80,0,1,1,0,113.2,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3A96,96,0,0,0,195.9,60.1Z"}))});Ao.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ao.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ao.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var wN=function(e,n){return Le(e,n,Ao)},OI=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:wN}))});OI.displayName="ClockCounterClockwise";var Lo=new Map;Lo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Lo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Lo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});Lo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Lo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Lo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var EN=function(e,n){return Le(e,n,Lo)},Qh=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:EN}))});Qh.displayName="Envelope";var Po=new Map;Po.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Po.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Po.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});Po.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Po.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Po.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var xN=function(e,n){return Le(e,n,Po)},$d=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:xN}))});$d.displayName="Eye";var Ro=new Map;Ro.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ro.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ro.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),c.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});Ro.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ro.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ro.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var TN=function(e,n){return Le(e,n,Ro)},zd=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:TN}))});zd.displayName="EyeSlash";var bo=new Map;bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z",opacity:"0.2"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"}))});bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var IN=function(e,n){return Le(e,n,bo)},NI=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:IN}))});NI.displayName="GlobeHemisphereWest";var jo=new Map;jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var SN=function(e,n){return Le(e,n,jo)},MI=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:SN}))});MI.displayName="House";var Do=new Map;Do.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Do.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Do.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});Do.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Do.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Do.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var CN=function(e,n){return Le(e,n,Do)},K1=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:CN}))});K1.displayName="IdentificationCard";var Oo=new Map;Oo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"152",r:"16"}))});Oo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});Oo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});Oo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"152",r:"10"}))});Oo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"152",r:"8"}))});Oo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var AN=function(e,n){return Le(e,n,Oo)},Bd=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:AN}))});Bd.displayName="Lock";var No=new Map;No.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"44",y1:"156",x2:"100",y2:"212",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"164",y1:"92",x2:"72",y2:"184",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});No.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",opacity:"0.2"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});No.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.3,32a15.9,15.9,0,0,0-22.6,0L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a15.9,15.9,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7ZM51.3,160,144,67.3,160.7,84,68,176.7ZM48,179.3,76.7,208H48Zm48,25.4L79.3,188,172,95.3,188.7,112Z"}))});No.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});No.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});No.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var LN=function(e,n){return Le(e,n,No)},VI=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:LN}))});VI.displayName="Pencil";var Mo=new Map;Mo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Mo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,64l56,56,26.3-26.3a8,8,0,0,0,0-11.4L173.7,37.7a8,8,0,0,0-11.4,0Z",opacity:"0.2"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Mo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"}))});Mo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Mo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Mo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var PN=function(e,n){return Le(e,n,Mo)},og=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:PN}))});og.displayName="PencilSimple";var Vo=new Map;Vo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Vo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Vo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});Vo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Vo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Vo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var RN=function(e,n){return Le(e,n,Vo)},Q1=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:RN}))});Q1.displayName="SignIn";var Fo=new Map;Fo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Fo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Fo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});Fo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Fo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Fo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var bN=function(e,n){return Le(e,n,Fo)},Bc=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:bN}))});Bc.displayName="SignOut";var Uo=new Map;Uo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Uo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Uo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});Uo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Uo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Uo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var jN=function(e,n){return Le(e,n,Uo)},FI=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:jN}))});FI.displayName="SpinnerGap";var Wo=new Map;Wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"60",x2:"40",y2:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))});Wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var DN=function(e,n){return Le(e,n,Wo)},sg=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:DN}))});sg.displayName="Trash";var $o=new Map;$o.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});$o.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});$o.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});$o.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});$o.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});$o.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ON=function(e,n){return Le(e,n,$o)},Zi=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:ON}))});Zi.displayName="User";var zo=new Map;zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"120",r:"44"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var NN=function(e,n){return Le(e,n,zo)},Hd=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:NN}))});Hd.displayName="UserCircle";var Bo=new Map;Bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});Bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var MN=function(e,n){return Le(e,n,Bo)},X1=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:MN}))});X1.displayName="UserPlus";var Ho=new Map;Ho.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ho.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",opacity:"0.2"}),c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ho.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M121.2,157.9a60,60,0,1,0-66.4,0A95.5,95.5,0,0,0,9.5,192.8a7.8,7.8,0,0,0-.6,8.3,8.1,8.1,0,0,0,7.1,4.3H160a8.1,8.1,0,0,0,7.1-4.3,7.8,7.8,0,0,0-.6-8.3A95.5,95.5,0,0,0,121.2,157.9Z"}),c.createElement("path",{d:"M248.1,192.8a96.3,96.3,0,0,0-45.4-34.9A59.9,59.9,0,0,0,169.5,48a64,64,0,0,0-16.3,2.2,8.2,8.2,0,0,0-5.4,5.2,8,8,0,0,0,1.2,7.3,75.8,75.8,0,0,1,3.8,84.9,8.1,8.1,0,0,0,2.1,10.6q4.5,3.5,8.7,7.2l.5.5a112.6,112.6,0,0,1,25.5,34.9,7.9,7.9,0,0,0,7.2,4.6h44.7a8.1,8.1,0,0,0,7.1-4.3A8,8,0,0,0,248.1,192.8Z"}))});Ho.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ho.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ho.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var VN=function(e,n){return Le(e,n,Ho)},Z1=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:VN}))});Z1.displayName="Users";var qo=new Map;qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"}))});qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var FN=function(e,n){return Le(e,n,qo)},J1=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:FN}))});J1.displayName="X";var Yo=new Map;Yo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Yo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Yo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"}))});Yo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Yo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Yo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var UN=function(e,n){return Le(e,n,Yo)},UI=N.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:UN}))});UI.displayName="XCircle";const WN=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
`,$N=V.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,zN=V.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,BN=V.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,fk=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,pk=V.label`
  font-size: 0.9rem;
  color: #555;
`,mk=V.div`
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
`,pc=V.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  margin-right: 0.5rem;
`,gk=V.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`,HN=V.button`
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
`,qN=V.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,YN=V(dx)`
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
`,GN=V.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,KN=V.button`
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
`,QN=V.button`
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
`,XN=V.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;function ZN(){const[t,e]=N.useState(""),[n,r]=N.useState(""),[i,o]=N.useState(""),[s,a]=N.useState(!1),[u,d]=N.useState(!1),[f,m]=N.useState(!1),[w,_]=N.useState(!1),T=fa(),A=ha();N.useEffect(()=>{var g;(g=A.state)!=null&&g.message&&(G.info(A.state.message),T(A.pathname,{replace:!0,state:{}}))},[A,T]),N.useEffect(()=>{i&&o("")},[t,n]);const S=async()=>{var k,I;if(!t){o("Please enter your email address to reset your password"),(k=document.getElementById("email"))==null||k.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(I=document.getElementById("email"))==null||I.focus();return}try{_(!0),await OP(Sn,t),m(!0),G.success("Password reset email sent! Check your inbox.")}catch(R){console.error("Password reset error:",R),R.code==="auth/user-not-found"?o("No account found with this email address"):o("Failed to send password reset email. Please try again.")}finally{_(!1)}},y=async g=>{var I,R,O;if(g.preventDefault(),!t||!n){o("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(I=document.getElementById("email"))==null||I.focus();return}try{o(""),a(!0);try{const x=(await MP(Sn,t,n)).user,L=mr(Tn(Ae,"declined_registrations"),Qr("userId","==",x.uid));if(!(await Bn(L)).empty){await Sn.signOut(),o("Your registration request has been declined. Please contact an administrator."),G.error("Access denied: Registration declined");return}const b=mr(Tn(Ae,"registration_requests"),Qr("userId","==",x.uid));if(!(await Bn(b)).empty){await Sn.signOut(),o("Your registration request is pending approval. You will be notified when approved."),G.info("Registration pending approval");return}const P=!1;G.success("Login successful!"),T("/dashboard")}catch(E){if(console.error("Firebase auth error:",E),!(!1&&(E.code==="auth/network-request-failed"||(R=E.message)!=null&&R.includes("network")))){if(E.code==="auth/invalid-credential"||E.code==="auth/invalid-email"||E.code==="auth/user-not-found"||E.code==="auth/wrong-password"){console.log("Authentication failed:",E.code,E.message);const L=E.code==="auth/user-not-found"||E.code==="auth/invalid-credential"&&t.includes("@");o(L?h.jsxs("span",{children:["Account not found. Please check your email or",h.jsx("a",{href:"/register",style:{color:"#800000",marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(O=document.getElementById("email"))==null||O.focus()}else E.code==="auth/network-request-failed"?o("Network error. Please check your connection and try again."):E.code==="auth/too-many-requests"?o("Too many failed login attempts. Please try again later or reset your password."):E.code==="auth/operation-not-allowed"?(o("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",E),o("Failed to log in. Please try again."));G.error("Login failed")}}}catch(E){console.error("Unexpected login error:",E),o("An unexpected error occurred. Please try again."),G.error("Login failed")}finally{a(!1)}};return h.jsx(WN,{children:h.jsxs($N,{children:[h.jsx(XN,{children:"Hyacinth"}),h.jsx(zN,{children:"Attendance System"}),h.jsxs(BN,{onSubmit:y,children:[h.jsxs(fk,{children:[h.jsx(pk,{htmlFor:"email",children:"Email"}),h.jsxs(mk,{children:[h.jsx(pc,{children:h.jsx(Qh,{size:18})}),h.jsx(gk,{id:"email",type:"email",value:t,onChange:g=>e(g.target.value),placeholder:"Enter your email",required:!0})]})]}),h.jsxs(fk,{children:[h.jsx(pk,{htmlFor:"password",children:"Password"}),h.jsxs(mk,{children:[h.jsx(pc,{children:h.jsx(Bd,{size:18})}),h.jsx(gk,{id:"password",type:u?"text":"password",value:n,onChange:g=>r(g.target.value),placeholder:"Enter your password",required:!0}),h.jsx(QN,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?h.jsx(zd,{size:18}):h.jsx($d,{size:18})})]}),h.jsx(KN,{type:"button",onClick:S,disabled:w,tabIndex:"-1",children:w?"Sending...":f?"Email sent!":"Forgot password?"})]}),i&&h.jsx(qN,{children:i}),h.jsxs(GN,{children:[h.jsx(HN,{type:"submit",disabled:s,onClick:y,children:s?"Logging in...":h.jsxs(h.Fragment,{children:[h.jsx(pc,{children:h.jsx(Q1,{size:18})}),"Login"]})}),h.jsxs(YN,{to:"/register",children:[h.jsx(pc,{children:h.jsx(X1,{size:18})}),"Register"]})]})]})]})})}const JN=async t=>{try{const e={...t,createdAt:Vh(),status:"pending"};return(await j8(Tn(Ae,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},eM=async()=>{try{const t=mr(Tn(Ae,"registration_requests"),b1("createdAt","desc"));return(await Bn(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error getting registration requests:",t),t}},tM=async(t,e)=>{try{const n=ft(Ae,"registration_requests",t);await wl(n,{...e,updatedAt:Vh()})}catch(n){throw console.error("Error updating registration request:",n),n}},nM=async t=>{try{const e=ft(Ae,"users",t.userId);await bd(e,{userId:t.userId,name:t.name,email:t.email,position:t.position,role:t.role||"user",status:"active",timeRegion:t.timeRegion||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila",createdAt:Vh(),userID:t.userID||`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`}),await D1(ft(Ae,"registration_requests",t.id))}catch(e){throw console.error("Error approving registration request:",e),e}},rM=async t=>{try{if(await bd(ft(Ae,"declined_registrations",t.id),{...t,declinedAt:Vh(),status:"declined",blocked:!0}),await D1(ft(Ae,"registration_requests",t.id)),t.userId&&!t.userId.startsWith("temp_"))try{const n=uT().currentUser;n&&n.uid===t.userId?(await BP(n),console.log("Deleted declined user from Firebase Authentication")):console.log("User marked as declined in Firestore. They will be blocked from accessing the system.")}catch(e){console.error("Error handling user authentication:",e)}}catch(e){throw console.error("Error declining registration request:",e),e}},iM=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  padding: 2rem 1rem;
`,oM=V.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,sM=V.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,aM=V.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Ba=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,lM=V.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,pp=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${t=>t.flex||1};
  min-width: ${t=>t.minWidth||"0"};
`,Dr=V.label`
  font-size: 0.9rem;
  color: #555;
`,bi=V.div`
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
`,kn=V.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: #800000;
`,is=V.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`,uM=V.select`
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
`,cM=V.button`
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
`,mp=V.button`
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
`,yk=V(FI)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,dM=V(dx)`
  display: flex;
  align-items: center;
  color: #800000;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,os=V.div`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,hM=V.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`,Ha=V.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?"#000000":"#666"};
`;function fM(){const[t,e]=N.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=N.useState({}),[i,o]=N.useState(!1),[s,a]=N.useState(!1),[u,d]=N.useState(!1),[f,m]=N.useState(!1),w=fa();N.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const _={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},T=g=>{const{name:k,value:I}=g.target;if(e(k==="middleInitial"?R=>({...R,[k]:I.toUpperCase()}):R=>({...R,[k]:I})),k==="email"&&I.includes("@")&&I.includes(".")){m(!0);const R=setTimeout(()=>{A(I)},800);return()=>clearTimeout(R)}},A=async g=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)){m(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:g})}).then(R=>R.json())).registered&&r(R=>({...R,email:"This email is already registered. Please use a different email or login instead."}))}catch(k){console.error("Error checking email:",k)}finally{m(!1)}},S=()=>{const g={};return t.lastName.trim()||(g.lastName="Last name is required"),t.firstName.trim()||(g.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(g.email="Email is invalid"):g.email="Email is required",t.password?_.length?_.validChars?_.hasLetter?_.hasNumber||(g.password="Password must contain at least one number"):g.password="Password must contain at least one letter":g.password="Password contains invalid characters":g.password="Password must be at least 4 characters":g.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(g.confirmPassword="Passwords do not match"):g.confirmPassword="Please confirm your password",t.position||(g.position="Please select your position"),r(g),Object.keys(g).length===0},y=async g=>{var k,I,R,O;if(g.preventDefault(),!!S())try{o(!0);const E=!1;let x,L;try{L=await NP(Sn,t.email,t.password),x=L.user.uid}catch(P){if(console.error("Auth error:",P),P.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),x=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(E&&(P.code==="auth/network-request-failed"||(k=P.message)!=null&&k.includes("network"))))throw P}const j=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(L!=null&&L.user)try{await FP(L.user,{displayName:j})}catch(P){console.warn("Could not update profile, continuing with registration:",P)}let b="Asia/Manila";try{b=Intl.DateTimeFormat().resolvedOptions().timeZone,console.log("Detected device time zone during registration:",b)}catch(P){console.error("Error detecting time zone during registration:",P)}const D={userId:x,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:j,email:t.email,position:t.position,role:"user",status:"pending",timeRegion:b,userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await JN(D)}catch(P){if(console.error("Firestore error:",P),!E)throw P}G.success("Registration request submitted! An administrator will review your request."),E&&!L||w("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(E){if(console.error("Registration error:",E),E.code==="auth/email-already-in-use"||typeof E=="object"&&E.code==="auth/email-already-in-use"){const x=E.message||"Email is already registered. Please use a different email or login instead.";r(L=>({...L,email:x})),G.error(h.jsxs("div",{children:["Email already exists. ",h.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(I=document.getElementById("email"))==null||I.scrollIntoView({behavior:"smooth",block:"center"}),(R=document.getElementById("email"))==null||R.focus()}else E.code==="auth/network-request-failed"?G.error("Network error. Please check your connection and try again."):E.code==="auth/operation-not-allowed"?(r(x=>({...x,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(O=E.code)!=null&&O.includes("auth/")?G.error(`Authentication error: ${E.message||"Please try again later"}`):(console.error("Registration error details:",E),G.error("Registration failed. Please try again."))}finally{o(!1)}};return h.jsx(iM,{children:h.jsxs(oM,{children:[h.jsxs(dM,{to:"/",children:[h.jsx(kn,{children:h.jsx(jI,{size:16})}),"Back to Login"]}),h.jsx(sM,{children:"Create Account"}),h.jsxs(aM,{onSubmit:y,children:[h.jsxs(Ba,{children:[h.jsx(Dr,{children:"Full Name"}),h.jsxs(lM,{children:[h.jsxs(pp,{flex:"2",minWidth:"150px",children:[h.jsx(Dr,{htmlFor:"lastName",children:"Last Name"}),h.jsxs(bi,{children:[h.jsx(kn,{children:h.jsx(Zi,{size:18})}),h.jsx(is,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:T,placeholder:"Last name"})]}),n.lastName&&h.jsx(os,{children:n.lastName})]}),h.jsxs(pp,{flex:"2",minWidth:"150px",children:[h.jsx(Dr,{htmlFor:"firstName",children:"First Name"}),h.jsx(bi,{children:h.jsx(is,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:T,placeholder:"First name"})}),n.firstName&&h.jsx(os,{children:n.firstName})]}),h.jsxs(pp,{flex:"1",minWidth:"80px",children:[h.jsx(Dr,{htmlFor:"middleInitial",children:"M.I."}),h.jsx(bi,{children:h.jsx(is,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:T,placeholder:"M.I.",maxLength:"1"})})]})]})]}),h.jsxs(Ba,{children:[h.jsx(Dr,{htmlFor:"email",children:"Email"}),h.jsxs(bi,{children:[h.jsx(kn,{children:h.jsx(Qh,{size:18})}),h.jsx(is,{id:"email",name:"email",type:"email",value:t.email,onChange:T,placeholder:"Enter your email"}),f&&h.jsx(mp,{as:"span","aria-label":"Checking email",children:h.jsx(yk,{size:18})})]}),n.email&&h.jsx(os,{children:n.email})]}),h.jsxs(Ba,{children:[h.jsx(Dr,{htmlFor:"position",children:"Position"}),h.jsxs(bi,{children:[h.jsx(kn,{children:h.jsx(K1,{size:18})}),h.jsxs(uM,{id:"position",name:"position",value:t.position,onChange:T,children:[h.jsx("option",{value:"",disabled:!0,children:"Select your position"}),h.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),h.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&h.jsx(os,{children:n.position})]}),h.jsxs(Ba,{children:[h.jsx(Dr,{htmlFor:"password",children:"Password"}),h.jsxs(bi,{children:[h.jsx(kn,{children:h.jsx(Bd,{size:18})}),h.jsx(is,{id:"password",name:"password",type:s?"text":"password",value:t.password,onChange:T,placeholder:"Create a password"}),h.jsx(mp,{type:"button",onClick:()=>a(!s),"aria-label":s?"Hide password":"Show password",children:s?h.jsx(zd,{size:18}):h.jsx($d,{size:18})})]}),n.password&&h.jsx(os,{children:n.password}),h.jsxs(hM,{children:[h.jsxs(Ha,{met:_.length,children:[h.jsx(kn,{children:h.jsx(Ui,{size:14,weight:_.length?"fill":"regular"})}),"At least 4 characters"]}),h.jsxs(Ha,{met:_.validChars,children:[h.jsx(kn,{children:h.jsx(Ui,{size:14,weight:_.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),h.jsxs(Ha,{met:_.hasLetter,children:[h.jsx(kn,{children:h.jsx(Ui,{size:14,weight:_.hasLetter?"fill":"regular"})}),"At least one letter"]}),h.jsxs(Ha,{met:_.hasNumber,children:[h.jsx(kn,{children:h.jsx(Ui,{size:14,weight:_.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),h.jsxs(Ba,{children:[h.jsx(Dr,{htmlFor:"confirmPassword",children:"Confirm Password"}),h.jsxs(bi,{children:[h.jsx(kn,{children:h.jsx(Bd,{size:18})}),h.jsx(is,{id:"confirmPassword",name:"confirmPassword",type:u?"text":"password",value:t.confirmPassword,onChange:T,placeholder:"Confirm your password"}),h.jsx(mp,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?h.jsx(zd,{size:18}):h.jsx($d,{size:18})})]}),n.confirmPassword&&h.jsx(os,{children:n.confirmPassword}),t.confirmPassword&&h.jsxs(Ha,{met:_.match,children:[h.jsx(kn,{children:h.jsx(Ui,{size:14,weight:_.match?"fill":"regular"})}),"Passwords match"]})]}),h.jsx(cM,{type:"submit",disabled:i||f,children:i?h.jsxs(h.Fragment,{children:[h.jsx(yk,{size:18}),"Creating Account..."]}):f?"Checking email...":"Register"})]})]})})}const WI=N.createContext(),ey=()=>N.useContext(WI),pM=({children:t})=>{const{currentUser:e}=W1(),[n,r]=N.useState(!1),[i,o]=N.useState(!0);N.useEffect(()=>{(async()=>{if(!(e!=null&&e.uid)){o(!1);return}try{const d=ft(Ae,"users_settings",e.uid),f=await nu(d);if(f.exists()){const m=f.data();m.use24HourFormat!==void 0&&r(m.use24HourFormat)}else await bd(d,{use24HourFormat:!1,userId:e.uid})}catch(d){console.error("Error fetching user settings:",d)}finally{o(!1)}})()},[e]);const a={use24HourFormat:n,toggleTimeFormat:async()=>{if(e!=null&&e.uid)try{const u=ft(Ae,"users_settings",e.uid);return await bd(u,{use24HourFormat:!n,userId:e.uid},{merge:!0}),r(!n),!0}catch(u){return console.error("Error updating time format:",u),!1}},loading:i};return h.jsx(WI.Provider,{value:a,children:t})},mM=V.div`
  display: flex;
  min-height: 100vh;
`,gM=V.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
`,yM=V.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,Or=V.div`
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
`,vk=V.button`
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
`,$I=V.button`
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
`,vM=V($I)`
  background-color: #111111;
  color: #76da7c;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,_M=V($I)`
  background-color: #111111;
  color: #e67979;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,ss=V.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,kM=V.div`
  flex: 1;
  padding: 2rem;
  background-color: #f5f5f5;
  overflow-y: auto;
`,wM=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,EM=V.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,xM=V.div`
  display: flex;
  align-items: center;
`,TM=V.span`
  margin-right: 1rem;
  font-weight: 500;
`,IM=V.button`
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
`,SM=V.div`
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
`,CM=V.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`,AM=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`,LM=V.div`
  padding: 1rem;
  overflow-y: auto;
`,PM=V.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
  gap: 0.5rem;
`,RM=V.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`,_k=V.div`
  margin-bottom: 1rem;
`,kk=V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,bM=V.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`,wk=V.button`
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
`,jM=({user:t,activeTab:e,setActiveTab:n,attendanceStatus:r,loading:i,handleTimeInOut:o,lastRecord:s,isSuperAdmin:a,userData:u,setUserData:d,children:f})=>{var P;const m=fa(),{currentUser:w}=W1(),{use24HourFormat:_,toggleTimeFormat:T}=ey(),[A,S]=N.useState(!1),[y,g]=N.useState((u==null?void 0:u.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila"),[k,I]=N.useState(!1),[R,O]=N.useState(""),[E,x]=N.useState(!1),L=Y=>{try{const ae=new Date,pe={timeZone:Y,timeZoneName:"short"},q=new Intl.DateTimeFormat("en-US",pe).format(ae).match(/GMT([+-]\d+)/);if(q&&q[1])return`UTC${q[1]}`;const Z=new Date,ee=(new Date(Z.toLocaleString("en-US",{timeZone:Y}))-Z)/6e4,ye=Math.floor(Math.abs(ee)/60),qe=Math.abs(ee)%60;return`UTC${ee>=0?"+":"-"}${ye.toString().padStart(2,"0")}:${qe.toString().padStart(2,"0")}`}catch(ae){return console.error("Error calculating UTC offset:",ae),""}};N.useEffect(()=>{try{const Y=Intl.DateTimeFormat().resolvedOptions().timeZone;O(Y),console.log("Detected device time zone:",Y)}catch(Y){console.error("Error detecting time zone:",Y),O("Unable to detect")}},[]),N.useEffect(()=>{u!=null&&u.timeRegion?g(u.timeRegion):R&&!(u!=null&&u.timeRegion)&&g(R)},[u,R]);const j=async()=>{if(!(!(t!=null&&t.uid)||k))try{I(!0);const Y=ft(Ae,"users",t.uid);await wl(Y,{timeRegion:y}),d(ae=>({...ae,timeRegion:y})),G.success("Time region updated successfully"),S(!1)}catch(Y){console.error("Error updating time region:",Y),G.error("Failed to update time region")}finally{I(!1)}},b=async()=>{if(!E)try{x(!0),await T()?G.success(`Time format updated to ${_?"12-hour":"24-hour"} format`):G.error("Failed to update time format")}catch(Y){console.error("Error updating time format:",Y),G.error("Failed to update time format")}finally{x(!1)}},D=async()=>{try{await zP(Sn),m("/login")}catch(Y){console.error("Error signing out:",Y),G.error("Failed to sign out")}};return h.jsxs(mM,{children:[h.jsxs(gM,{children:[h.jsx(yM,{children:"Hyacinth"}),h.jsxs(Or,{className:e==="home"?"active":"",onClick:()=>n("home"),children:[h.jsx(MI,{size:20,style:{marginRight:"0.5rem"}}),"Home"]}),h.jsxs(Or,{className:e==="schedule"?"active":"",onClick:()=>n("schedule"),children:[h.jsx($n,{size:20,style:{marginRight:"0.5rem"}}),"Schedule"]}),h.jsxs(Or,{className:e==="attendance"?"active":"",onClick:()=>n("attendance"),children:[h.jsx(Ps,{size:20,style:{marginRight:"0.5rem"}}),"Attendance"]}),h.jsxs(Or,{className:e==="profile"?"active":"",onClick:()=>n("profile"),children:[h.jsx(Zi,{size:20,style:{marginRight:"0.5rem"}}),"Profile"]}),a&&h.jsxs(h.Fragment,{children:[h.jsxs(Or,{className:e==="registration_requests"?"active":"",onClick:()=>n("registration_requests"),children:[h.jsx(ss,{children:h.jsx(X1,{size:16})}),"Registration Requests"]}),h.jsxs(Or,{className:e==="user_management"?"active":"",onClick:()=>n("user_management"),children:[h.jsx(ss,{children:h.jsx(Z1,{size:16})}),"User Management"]})]}),h.jsxs("div",{style:{marginTop:"auto"},children:[h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"User Settings"}),h.jsxs(Or,{onClick:()=>S(!0),children:[h.jsx(ss,{children:h.jsx(NI,{size:16})}),"Change Time Region",h.jsxs("div",{style:{fontSize:"0.75rem",marginLeft:"auto",opacity:.7},children:[((P=u==null?void 0:u.timeRegion)==null?void 0:P.replace("_"," "))||"Asia/Manila",h.jsx("div",{style:{fontSize:"0.7rem",marginTop:"2px"},children:L((u==null?void 0:u.timeRegion)||"Asia/Manila")})]})]})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),h.jsxs(vM,{onClick:()=>o("In"),disabled:i||r==="In",children:[h.jsx(ss,{children:h.jsx(Q1,{size:16})}),"Time In"]}),h.jsxs(_M,{onClick:()=>o("Out"),disabled:i||r==="Out"||!r,children:[h.jsx(ss,{children:h.jsx(Bc,{size:16})}),"Time Out"]}),r&&h.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Status: ",h.jsx("strong",{children:r==="In"?"Clocked In":"Clocked Out"})]})]}),h.jsxs(Or,{onClick:D,children:[h.jsx(ss,{children:h.jsx(Bc,{size:16})}),"Logout"]})]})]}),h.jsxs(kM,{children:[h.jsxs(wM,{children:[h.jsxs(EM,{children:[e==="dashboard"&&"Dashboard",e==="attendance"&&"Attendance",e==="schedule"&&"Schedule",e==="profile"&&"Profile",e==="registration_requests"&&"Registration Requests",e==="user_management"&&"User Management"]}),h.jsxs(xM,{children:[h.jsx(TM,{children:t==null?void 0:t.displayName}),h.jsxs(IM,{onClick:D,children:[h.jsx(Bc,{size:16}),"Logout"]})]})]}),f]}),A&&h.jsx(SM,{children:h.jsxs(CM,{children:[h.jsxs(AM,{children:[h.jsx("h3",{children:"Change Time Region"}),h.jsx(RM,{onClick:()=>S(!1),children:"×"})]}),h.jsxs(LM,{children:[h.jsx("p",{style:{marginBottom:"1rem"},children:"Changing your time region will affect how times are displayed throughout the application and how your attendance is recorded."}),R&&h.jsxs("p",{style:{marginBottom:"1rem",backgroundColor:"#f0f7ff",padding:"0.5rem",borderRadius:"4px",fontSize:"0.9rem"},children:[h.jsx("strong",{children:"Detected device time zone:"})," ",R,h.jsxs("span",{style:{fontWeight:"normal"},children:["(",L(R),")"]}),R!==y&&h.jsx("button",{onClick:()=>g(R),style:{display:"block",marginTop:"0.5rem",padding:"0.25rem 0.5rem",fontSize:"0.8rem",backgroundColor:"#e6f0ff",border:"1px solid #bbd6fb",borderRadius:"4px",cursor:"pointer"},children:"Use device time zone"})]}),h.jsxs(_k,{children:[h.jsx(kk,{children:"Select Time Region"}),h.jsxs(bM,{value:y,onChange:Y=>g(Y.target.value),children:[h.jsx("optgroup",{label:"Asia",children:h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT, UTC+8)"})}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern, UTC-5/-4)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central, UTC-6/-5)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain, UTC-7/-6)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific, UTC-8/-7)"})]}),h.jsx("optgroup",{label:"Europe",children:h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST, UTC+0/+1)"})})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"Note: UTC offsets may vary during Daylight Saving Time transitions."})]}),h.jsxs(_k,{style:{marginTop:"1.5rem"},children:[h.jsxs(kk,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(DI,{size:18}),"Time Format"]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"0.5rem"},children:[h.jsx(vk,{active:!_,onClick:b,disabled:E,children:"12-hour (AM/PM)"}),h.jsx(vk,{active:_,onClick:b,disabled:E,children:"24-hour"})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"This setting affects how time is displayed throughout the application."})]})]}),h.jsxs(PM,{children:[h.jsx(wk,{onClick:()=>S(!1),children:"Cancel"}),h.jsx(wk,{primary:!0,onClick:j,disabled:k,children:k?"Updating...":"Save Changes"})]})]})})]})},ci=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
`,di=V.h2`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid #eee;
`,hi=V.div`
  padding: 1.25rem;
`,DM=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,OM=V.span`
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
`;const NM=({attendanceStatus:t,lastRecord:e})=>h.jsx(h.Fragment,{children:h.jsxs(DM,{children:[h.jsxs(ci,{children:[h.jsx(di,{children:"Today's Schedule"}),h.jsx(hi,{children:h.jsx("p",{children:"No schedule for today"})})]}),h.jsxs(ci,{children:[h.jsx(di,{children:"Attendance Status"}),h.jsx(hi,{children:t?h.jsxs(h.Fragment,{children:[h.jsxs("p",{children:["Current Status:",h.jsx(OM,{status:t,children:t==="In"?"Clocked In":"Clocked Out"})]}),e&&h.jsxs("p",{children:["Last action: ",new Date(e.timestamp.toDate()).toLocaleString()]})]}):h.jsx("p",{children:"You haven't clocked in today"})})]}),h.jsxs(ci,{children:[h.jsx(di,{children:"Recent Activity"}),h.jsx(hi,{children:e?h.jsxs("p",{children:["Last ",e.type==="In"?"Time In":"Time Out",": ",new Date(e.timestamp.toDate()).toLocaleString()]}):h.jsx("p",{children:"No recent activity"})})]})]})}),MM=V.table`
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
`,VM=V.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,Ek=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,FM=({user:t})=>{const[e,n]=N.useState([]),[r,i]=N.useState(!0),[o,s]=N.useState(null),{use24HourFormat:a}=ey();N.useEffect(()=>{const _=async()=>{if(t!=null&&t.uid)try{const A=await getDoc(doc(Ae,"users",t.uid));A.exists()&&s(A.data())}catch(A){console.error("Error fetching user data:",A)}},T=async()=>{if(t!=null&&t.uid)try{i(!0);const A=Tn(Ae,"attendance"),S=mr(A,Qr("userId","==",t.uid),b1("timestamp","desc")),y=await Bn(S),g=[];if(y.forEach(I=>{g.push({id:I.id,...I.data()})}),console.log("Raw attendance records:",g.length),g.length===0){n([]),i(!1);return}const k=u(g);console.log("Processed attendance records:",k.length),n(k)}catch(A){console.error("Error fetching attendance records:",A)}finally{i(!1)}};_(),T()},[t]);const u=_=>{const T={};_.forEach(S=>{if(!S.timestamp){console.log("Skipping record without timestamp:",S);return}try{const y=S.timestamp.toDate(),g=y.toISOString().split("T")[0];T[g]||(T[g]={date:y,day:f(S.timestamp),inRecord:null,outRecord:null}),S.type==="In"?T[g].inRecord=S:S.type==="Out"?T[g].outRecord=S:console.log("Record with unknown type:",S.type,S)}catch(y){console.error("Error processing record:",y,S)}});const A=Object.values(T).sort((S,y)=>y.date-S.date);return console.log("Processed records by date:",A),A},d=_=>{if(!_)return"N/A";if(_ instanceof Date)return _.toLocaleDateString();try{return _.toDate().toLocaleDateString()}catch(T){return console.error("Error formatting date:",T,_),"Invalid Date"}},f=_=>{if(!_)return"N/A";try{const T=_ instanceof Date?_:_.toDate();return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][T.getDay()]}catch(T){return console.error("Error getting day of week:",T,_),"Unknown"}},m=_=>{if(!_)return"N/A";try{return(_ instanceof Date?_:_.toDate()).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!a})}catch(T){return console.error("Error formatting time:",T,_),"Invalid Time"}},w=(_,T)=>{if(!_||_.type!=="In")return"N/A";try{const A=_.timestamp.toDate(),S=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][A.getDay()];let y="On Time";const k=((o==null?void 0:o.schedule)||[]).find(I=>I.dayOfWeek===S);if(k&&k.timeIn){const[I,R]=k.timeIn.split(":").map(Number),O=new Date(A);O.setHours(I,R,0,0);const E=Math.round((A-O)/(1e3*60));E<-15?y="Early":E<=15?y="On Time":y="Late"}return y}catch(A){return console.error("Error calculating time-in status:",A,_),"On Time"}};return h.jsxs(ci,{children:[h.jsx(di,{children:"Attendance Records"}),h.jsx(hi,{children:r?h.jsx("p",{children:"Loading attendance records..."}):e.length>0?h.jsxs(MM,{children:[h.jsxs("thead",{children:[h.jsxs("tr",{children:[h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Day"}),h.jsx("th",{colSpan:"2",children:"IN"}),h.jsx("th",{colSpan:"2",children:"OUT"}),h.jsx("th",{children:"Notes"})]}),h.jsxs("tr",{children:[h.jsx("th",{}),h.jsx("th",{}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{})]})]}),h.jsx("tbody",{children:e.map((_,T)=>{var A,S,y,g;return h.jsxs("tr",{children:[h.jsx("td",{children:d(_.date)}),h.jsx("td",{children:_.day}),h.jsx("td",{children:_.inRecord?m(_.inRecord.timestamp):"-"}),h.jsx("td",{children:_.inRecord?h.jsx(Ek,{status:w(_.inRecord,_.date),children:w(_.inRecord,_.date)}):"-"}),h.jsx("td",{children:_.outRecord?m(_.outRecord.timestamp):"-"}),h.jsx("td",{children:_.outRecord?h.jsx(Ek,{status:"Complete",children:"Complete"}):"-"}),h.jsx("td",{children:(A=_.inRecord)!=null&&A.notes&&((S=_.outRecord)!=null&&S.notes)?h.jsxs(h.Fragment,{children:[h.jsx("strong",{children:"IN:"})," ",_.inRecord.notes,h.jsx("br",{}),h.jsx("strong",{children:"OUT:"})," ",_.outRecord.notes]}):(y=_.inRecord)!=null&&y.notes?_.inRecord.notes:(g=_.outRecord)!=null&&g.notes?_.outRecord.notes:"-"})]},T)})})]}):h.jsx(VM,{children:h.jsx("p",{children:"No attendance records found"})})})]})};function qd(t){"@babel/helpers - typeof";return qd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qd(t)}function vi(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Pt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function tr(t){Pt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||qd(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function zI(t,e){Pt(2,arguments);var n=tr(t).getTime(),r=vi(e);return new Date(n+r)}var UM=36e5;function WM(t,e){Pt(2,arguments);var n=vi(e);return zI(t,n*UM)}var $M={};function Xh(){return $M}function zM(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function BM(t){return Pt(1,arguments),t instanceof Date||qd(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function HM(t){if(Pt(1,arguments),!BM(t)&&typeof t!="number")return!1;var e=tr(t);return!isNaN(Number(e))}function qM(t,e){Pt(2,arguments);var n=vi(e);return zI(t,-n)}var YM=864e5;function GM(t){Pt(1,arguments);var e=tr(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/YM)+1}function Yd(t){Pt(1,arguments);var e=1,n=tr(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function BI(t){Pt(1,arguments);var e=tr(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=Yd(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=Yd(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function KM(t){Pt(1,arguments);var e=BI(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=Yd(n);return r}var QM=6048e5;function XM(t){Pt(1,arguments);var e=tr(t),n=Yd(e).getTime()-KM(e).getTime();return Math.round(n/QM)+1}function Gd(t,e){var n,r,i,o,s,a,u,d;Pt(1,arguments);var f=Xh(),m=vi((n=(r=(i=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:f.weekStartsOn)!==null&&r!==void 0?r:(u=f.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=tr(t),_=w.getUTCDay(),T=(_<m?7:0)+_-m;return w.setUTCDate(w.getUTCDate()-T),w.setUTCHours(0,0,0,0),w}function HI(t,e){var n,r,i,o,s,a,u,d;Pt(1,arguments);var f=tr(t),m=f.getUTCFullYear(),w=Xh(),_=vi((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:w.firstWeekContainsDate)!==null&&r!==void 0?r:(u=w.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(_>=1&&_<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var T=new Date(0);T.setUTCFullYear(m+1,0,_),T.setUTCHours(0,0,0,0);var A=Gd(T,e),S=new Date(0);S.setUTCFullYear(m,0,_),S.setUTCHours(0,0,0,0);var y=Gd(S,e);return f.getTime()>=A.getTime()?m+1:f.getTime()>=y.getTime()?m:m-1}function ZM(t,e){var n,r,i,o,s,a,u,d;Pt(1,arguments);var f=Xh(),m=vi((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:f.firstWeekContainsDate)!==null&&r!==void 0?r:(u=f.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1),w=HI(t,e),_=new Date(0);_.setUTCFullYear(w,0,m),_.setUTCHours(0,0,0,0);var T=Gd(_,e);return T}var JM=6048e5;function e9(t,e){Pt(1,arguments);var n=tr(t),r=Gd(n,e).getTime()-ZM(n,e).getTime();return Math.round(r/JM)+1}function Te(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var Nr={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return Te(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):Te(r+1,2)},d:function(e,n){return Te(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return Te(e.getUTCHours()%12||12,n.length)},H:function(e,n){return Te(e.getUTCHours(),n.length)},m:function(e,n){return Te(e.getUTCMinutes(),n.length)},s:function(e,n){return Te(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return Te(o,n.length)}},as={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},t9={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return Nr.y(e,n)},Y:function(e,n,r,i){var o=HI(e,i),s=o>0?o:1-o;if(n==="YY"){var a=s%100;return Te(a,2)}return n==="Yo"?r.ordinalNumber(s,{unit:"year"}):Te(s,n.length)},R:function(e,n){var r=BI(e);return Te(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return Te(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return Te(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return Te(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return Nr.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return Te(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var o=e9(e,i);return n==="wo"?r.ordinalNumber(o,{unit:"week"}):Te(o,n.length)},I:function(e,n,r){var i=XM(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):Te(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):Nr.d(e,n)},D:function(e,n,r){var i=GM(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):Te(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return Te(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return Te(s,n.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),o=i===0?7:i;switch(n){case"i":return String(o);case"ii":return Te(o,n.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),o=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),o;switch(i===12?o=as.noon:i===0?o=as.midnight:o=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),o;switch(i>=17?o=as.evening:i>=12?o=as.afternoon:i>=4?o=as.morning:o=as.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Nr.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):Nr.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):Te(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):Te(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):Nr.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):Nr.s(e,n)},S:function(e,n){return Nr.S(e,n)},X:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();if(s===0)return"Z";switch(n){case"X":return Tk(s);case"XXXX":case"XX":return Fi(s);case"XXXXX":case"XXX":default:return Fi(s,":")}},x:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"x":return Tk(s);case"xxxx":case"xx":return Fi(s);case"xxxxx":case"xxx":default:return Fi(s,":")}},O:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+xk(s,":");case"OOOO":default:return"GMT"+Fi(s,":")}},z:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+xk(s,":");case"zzzz":default:return"GMT"+Fi(s,":")}},t:function(e,n,r,i){var o=i._originalDate||e,s=Math.floor(o.getTime()/1e3);return Te(s,n.length)},T:function(e,n,r,i){var o=i._originalDate||e,s=o.getTime();return Te(s,n.length)}};function xk(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+Te(o,2)}function Tk(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Te(Math.abs(t)/60,2)}return Fi(t,e)}function Fi(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=Te(Math.floor(i/60),2),s=Te(i%60,2);return r+o+n+s}var Ik=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},qI=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},n9=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return Ik(e,n);var s;switch(i){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",Ik(i,n)).replace("{{time}}",qI(o,n))},r9={p:qI,P:n9},i9=["D","DD"],o9=["YY","YYYY"];function s9(t){return i9.indexOf(t)!==-1}function a9(t){return o9.indexOf(t)!==-1}function Sk(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var l9={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},u9=function(e,n,r){var i,o=l9[e];return typeof o=="string"?i=o:n===1?i=o.one:i=o.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function gp(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var c9={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},d9={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},h9={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},f9={date:gp({formats:c9,defaultWidth:"full"}),time:gp({formats:d9,defaultWidth:"full"}),dateTime:gp({formats:h9,defaultWidth:"full"})},p9={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},m9=function(e,n,r,i){return p9[e]};function qa(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):o;i=t.formattingValues[s]||t.formattingValues[o]}else{var a=t.defaultWidth,u=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[u]||t.values[a]}var d=t.argumentCallback?t.argumentCallback(e):e;return i[d]}}var g9={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},y9={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},v9={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},_9={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},k9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},w9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},E9=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},x9={ordinalNumber:E9,era:qa({values:g9,defaultWidth:"wide"}),quarter:qa({values:y9,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:qa({values:v9,defaultWidth:"wide"}),day:qa({values:_9,defaultWidth:"wide"}),dayPeriod:qa({values:k9,defaultWidth:"wide",formattingValues:w9,defaultFormattingWidth:"wide"})};function Ya(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var s=o[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(a)?I9(a,function(m){return m.test(s)}):T9(a,function(m){return m.test(s)}),d;d=t.valueCallback?t.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d;var f=e.slice(s.length);return{value:d,rest:f}}}function T9(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function I9(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function S9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],o=e.match(t.parsePattern);if(!o)return null;var s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;var a=e.slice(i.length);return{value:s,rest:a}}}var C9=/^(\d+)(th|st|nd|rd)?/i,A9=/\d+/i,L9={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},P9={any:[/^b/i,/^(a|c)/i]},R9={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},b9={any:[/1/i,/2/i,/3/i,/4/i]},j9={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},D9={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},O9={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},N9={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},M9={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},V9={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},F9={ordinalNumber:S9({matchPattern:C9,parsePattern:A9,valueCallback:function(e){return parseInt(e,10)}}),era:Ya({matchPatterns:L9,defaultMatchWidth:"wide",parsePatterns:P9,defaultParseWidth:"any"}),quarter:Ya({matchPatterns:R9,defaultMatchWidth:"wide",parsePatterns:b9,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Ya({matchPatterns:j9,defaultMatchWidth:"wide",parsePatterns:D9,defaultParseWidth:"any"}),day:Ya({matchPatterns:O9,defaultMatchWidth:"wide",parsePatterns:N9,defaultParseWidth:"any"}),dayPeriod:Ya({matchPatterns:M9,defaultMatchWidth:"any",parsePatterns:V9,defaultParseWidth:"any"})},U9={code:"en-US",formatDistance:u9,formatLong:f9,formatRelative:m9,localize:x9,match:F9,options:{weekStartsOn:0,firstWeekContainsDate:1}},W9=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,$9=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,z9=/^'([^]*?)'?$/,B9=/''/g,H9=/[a-zA-Z]/;function q9(t,e,n){var r,i,o,s,a,u,d,f,m,w,_,T,A,S;Pt(2,arguments);var y=String(e),g=Xh(),k=(r=(i=void 0)!==null&&i!==void 0?i:g.locale)!==null&&r!==void 0?r:U9,I=vi((o=(s=(a=(u=void 0)!==null&&u!==void 0?u:void 0)!==null&&a!==void 0?a:g.firstWeekContainsDate)!==null&&s!==void 0?s:(d=g.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(I>=1&&I<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var R=vi((m=(w=(_=(T=void 0)!==null&&T!==void 0?T:void 0)!==null&&_!==void 0?_:g.weekStartsOn)!==null&&w!==void 0?w:(A=g.locale)===null||A===void 0||(S=A.options)===null||S===void 0?void 0:S.weekStartsOn)!==null&&m!==void 0?m:0);if(!(R>=0&&R<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!k.localize)throw new RangeError("locale must contain localize property");if(!k.formatLong)throw new RangeError("locale must contain formatLong property");var O=tr(t);if(!HM(O))throw new RangeError("Invalid time value");var E=zM(O),x=qM(O,E),L={firstWeekContainsDate:I,weekStartsOn:R,locale:k,_originalDate:O},j=y.match($9).map(function(b){var D=b[0];if(D==="p"||D==="P"){var P=r9[D];return P(b,k.formatLong)}return b}).join("").match(W9).map(function(b){if(b==="''")return"'";var D=b[0];if(D==="'")return Y9(b);var P=t9[D];if(P)return a9(b)&&Sk(b,e,String(t)),s9(b)&&Sk(b,e,String(t)),P(x,b,k.localize,L);if(D.match(H9))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return b}).join("");return j}function Y9(t){var e=t.match(z9);return e?e[1].replace(B9,"'"):t}var ag={exports:{}},YI={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(YI);var ze=YI.exports,lg={exports:{}},ug={exports:{}},GI={exports:{}};(function(t){function e(n){"@babel/helpers - typeof";return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(GI);var KI=GI.exports,cg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(i.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+i.length+" present")}t.exports=e.default})(cg,cg.exports);var Ft=cg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(KI),i=n(Ft);function o(s){return(0,i.default)(1,arguments),s instanceof Date||(0,r.default)(s)==="object"&&Object.prototype.toString.call(s)==="[object Date]"}t.exports=e.default})(ug,ug.exports);var G9=ug.exports,dg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(KI),i=n(Ft);function o(s){(0,i.default)(1,arguments);var a=Object.prototype.toString.call(s);return s instanceof Date||(0,r.default)(s)==="object"&&a==="[object Date]"?new Date(s.getTime()):typeof s=="number"||a==="[object Number]"?new Date(s):((typeof s=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}t.exports=e.default})(dg,dg.exports);var nr=dg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(G9),i=n(nr),o=n(Ft);function s(a){if((0,o.default)(1,arguments),!(0,r.default)(a)&&typeof a!="number")return!1;var u=(0,i.default)(a);return!isNaN(Number(u))}t.exports=e.default})(lg,lg.exports);var K9=lg.exports,hg={exports:{}},fg={exports:{}},pg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){if(r===null||r===!0||r===!1)return NaN;var i=Number(r);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}t.exports=e.default})(pg,pg.exports);var Go=pg.exports;const Q9=iu(Go);(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(Go),i=n(nr),o=n(Ft);function s(a,u){(0,o.default)(2,arguments);var d=(0,i.default)(a).getTime(),f=(0,r.default)(u);return new Date(d+f)}t.exports=e.default})(fg,fg.exports);var X9=fg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(X9),i=n(Ft),o=n(Go);function s(a,u){(0,i.default)(2,arguments);var d=(0,o.default)(u);return(0,r.default)(a,-d)}t.exports=e.default})(hg,hg.exports);var Z9=hg.exports,mg={exports:{}},gg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(nr),i=n(Ft),o=864e5;function s(a){(0,i.default)(1,arguments);var u=(0,r.default)(a),d=u.getTime();u.setUTCMonth(0,1),u.setUTCHours(0,0,0,0);var f=u.getTime(),m=d-f;return Math.floor(m/o)+1}t.exports=e.default})(gg,gg.exports);var J9=gg.exports,yg={exports:{}},vg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(nr),i=n(Ft);function o(s){(0,i.default)(1,arguments);var a=1,u=(0,r.default)(s),d=u.getUTCDay(),f=(d<a?7:0)+d-a;return u.setUTCDate(u.getUTCDate()-f),u.setUTCHours(0,0,0,0),u}t.exports=e.default})(vg,vg.exports);var ty=vg.exports,_g={exports:{}},kg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(nr),i=n(Ft),o=n(ty);function s(a){(0,i.default)(1,arguments);var u=(0,r.default)(a),d=u.getUTCFullYear(),f=new Date(0);f.setUTCFullYear(d+1,0,4),f.setUTCHours(0,0,0,0);var m=(0,o.default)(f),w=new Date(0);w.setUTCFullYear(d,0,4),w.setUTCHours(0,0,0,0);var _=(0,o.default)(w);return u.getTime()>=m.getTime()?d+1:u.getTime()>=_.getTime()?d:d-1}t.exports=e.default})(kg,kg.exports);var QI=kg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(QI),i=n(ty),o=n(Ft);function s(a){(0,o.default)(1,arguments);var u=(0,r.default)(a),d=new Date(0);d.setUTCFullYear(u,0,4),d.setUTCHours(0,0,0,0);var f=(0,i.default)(d);return f}t.exports=e.default})(_g,_g.exports);var e7=_g.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(nr),i=n(ty),o=n(e7),s=n(Ft),a=6048e5;function u(d){(0,s.default)(1,arguments);var f=(0,r.default)(d),m=(0,i.default)(f).getTime()-(0,o.default)(f).getTime();return Math.round(m/a)+1}t.exports=e.default})(yg,yg.exports);var t7=yg.exports,wg={exports:{}},Eg={exports:{}},Ko={};Object.defineProperty(Ko,"__esModule",{value:!0});Ko.getDefaultOptions=n7;Ko.setDefaultOptions=r7;var XI={};function n7(){return XI}function r7(t){XI=t}(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=n(nr),i=n(Ft),o=n(Go),s=Ko;function a(u,d){var f,m,w,_,T,A,S,y;(0,i.default)(1,arguments);var g=(0,s.getDefaultOptions)(),k=(0,o.default)((f=(m=(w=(_=d==null?void 0:d.weekStartsOn)!==null&&_!==void 0?_:d==null||(T=d.locale)===null||T===void 0||(A=T.options)===null||A===void 0?void 0:A.weekStartsOn)!==null&&w!==void 0?w:g.weekStartsOn)!==null&&m!==void 0?m:(S=g.locale)===null||S===void 0||(y=S.options)===null||y===void 0?void 0:y.weekStartsOn)!==null&&f!==void 0?f:0);if(!(k>=0&&k<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var I=(0,r.default)(u),R=I.getUTCDay(),O=(R<k?7:0)+R-k;return I.setUTCDate(I.getUTCDate()-O),I.setUTCHours(0,0,0,0),I}t.exports=e.default})(Eg,Eg.exports);var ny=Eg.exports,xg={exports:{}},Tg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(nr),i=n(Ft),o=n(ny),s=n(Go),a=Ko;function u(d,f){var m,w,_,T,A,S,y,g;(0,i.default)(1,arguments);var k=(0,r.default)(d),I=k.getUTCFullYear(),R=(0,a.getDefaultOptions)(),O=(0,s.default)((m=(w=(_=(T=f==null?void 0:f.firstWeekContainsDate)!==null&&T!==void 0?T:f==null||(A=f.locale)===null||A===void 0||(S=A.options)===null||S===void 0?void 0:S.firstWeekContainsDate)!==null&&_!==void 0?_:R.firstWeekContainsDate)!==null&&w!==void 0?w:(y=R.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1);if(!(O>=1&&O<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var E=new Date(0);E.setUTCFullYear(I+1,0,O),E.setUTCHours(0,0,0,0);var x=(0,o.default)(E,f),L=new Date(0);L.setUTCFullYear(I,0,O),L.setUTCHours(0,0,0,0);var j=(0,o.default)(L,f);return k.getTime()>=x.getTime()?I+1:k.getTime()>=j.getTime()?I:I-1}t.exports=e.default})(Tg,Tg.exports);var ZI=Tg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(ZI),i=n(Ft),o=n(ny),s=n(Go),a=Ko;function u(d,f){var m,w,_,T,A,S,y,g;(0,i.default)(1,arguments);var k=(0,a.getDefaultOptions)(),I=(0,s.default)((m=(w=(_=(T=f==null?void 0:f.firstWeekContainsDate)!==null&&T!==void 0?T:f==null||(A=f.locale)===null||A===void 0||(S=A.options)===null||S===void 0?void 0:S.firstWeekContainsDate)!==null&&_!==void 0?_:k.firstWeekContainsDate)!==null&&w!==void 0?w:(y=k.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1),R=(0,r.default)(d,f),O=new Date(0);O.setUTCFullYear(R,0,I),O.setUTCHours(0,0,0,0);var E=(0,o.default)(O,f);return E}t.exports=e.default})(xg,xg.exports);var i7=xg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(nr),i=n(ny),o=n(i7),s=n(Ft),a=6048e5;function u(d,f){(0,s.default)(1,arguments);var m=(0,r.default)(d),w=(0,i.default)(m,f).getTime()-(0,o.default)(m,f).getTime();return Math.round(w/a)+1}t.exports=e.default})(wg,wg.exports);var o7=wg.exports,Ig={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){for(var o=r<0?"-":"",s=Math.abs(r).toString();s.length<i;)s="0"+s;return o+s}t.exports=e.default})(Ig,Ig.exports);var JI=Ig.exports,Sg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(JI),i={y:function(a,u){var d=a.getUTCFullYear(),f=d>0?d:1-d;return(0,r.default)(u==="yy"?f%100:f,u.length)},M:function(a,u){var d=a.getUTCMonth();return u==="M"?String(d+1):(0,r.default)(d+1,2)},d:function(a,u){return(0,r.default)(a.getUTCDate(),u.length)},a:function(a,u){var d=a.getUTCHours()/12>=1?"pm":"am";switch(u){case"a":case"aa":return d.toUpperCase();case"aaa":return d;case"aaaaa":return d[0];case"aaaa":default:return d==="am"?"a.m.":"p.m."}},h:function(a,u){return(0,r.default)(a.getUTCHours()%12||12,u.length)},H:function(a,u){return(0,r.default)(a.getUTCHours(),u.length)},m:function(a,u){return(0,r.default)(a.getUTCMinutes(),u.length)},s:function(a,u){return(0,r.default)(a.getUTCSeconds(),u.length)},S:function(a,u){var d=u.length,f=a.getUTCMilliseconds(),m=Math.floor(f*Math.pow(10,d-3));return(0,r.default)(m,u.length)}},o=i;e.default=o,t.exports=e.default})(Sg,Sg.exports);var s7=Sg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(J9),i=n(t7),o=n(QI),s=n(o7),a=n(ZI),u=n(JI),d=n(s7),f={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},m={G:function(y,g,k){var I=y.getUTCFullYear()>0?1:0;switch(g){case"G":case"GG":case"GGG":return k.era(I,{width:"abbreviated"});case"GGGGG":return k.era(I,{width:"narrow"});case"GGGG":default:return k.era(I,{width:"wide"})}},y:function(y,g,k){if(g==="yo"){var I=y.getUTCFullYear(),R=I>0?I:1-I;return k.ordinalNumber(R,{unit:"year"})}return d.default.y(y,g)},Y:function(y,g,k,I){var R=(0,a.default)(y,I),O=R>0?R:1-R;if(g==="YY"){var E=O%100;return(0,u.default)(E,2)}return g==="Yo"?k.ordinalNumber(O,{unit:"year"}):(0,u.default)(O,g.length)},R:function(y,g){var k=(0,o.default)(y);return(0,u.default)(k,g.length)},u:function(y,g){var k=y.getUTCFullYear();return(0,u.default)(k,g.length)},Q:function(y,g,k){var I=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"Q":return String(I);case"QQ":return(0,u.default)(I,2);case"Qo":return k.ordinalNumber(I,{unit:"quarter"});case"QQQ":return k.quarter(I,{width:"abbreviated",context:"formatting"});case"QQQQQ":return k.quarter(I,{width:"narrow",context:"formatting"});case"QQQQ":default:return k.quarter(I,{width:"wide",context:"formatting"})}},q:function(y,g,k){var I=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"q":return String(I);case"qq":return(0,u.default)(I,2);case"qo":return k.ordinalNumber(I,{unit:"quarter"});case"qqq":return k.quarter(I,{width:"abbreviated",context:"standalone"});case"qqqqq":return k.quarter(I,{width:"narrow",context:"standalone"});case"qqqq":default:return k.quarter(I,{width:"wide",context:"standalone"})}},M:function(y,g,k){var I=y.getUTCMonth();switch(g){case"M":case"MM":return d.default.M(y,g);case"Mo":return k.ordinalNumber(I+1,{unit:"month"});case"MMM":return k.month(I,{width:"abbreviated",context:"formatting"});case"MMMMM":return k.month(I,{width:"narrow",context:"formatting"});case"MMMM":default:return k.month(I,{width:"wide",context:"formatting"})}},L:function(y,g,k){var I=y.getUTCMonth();switch(g){case"L":return String(I+1);case"LL":return(0,u.default)(I+1,2);case"Lo":return k.ordinalNumber(I+1,{unit:"month"});case"LLL":return k.month(I,{width:"abbreviated",context:"standalone"});case"LLLLL":return k.month(I,{width:"narrow",context:"standalone"});case"LLLL":default:return k.month(I,{width:"wide",context:"standalone"})}},w:function(y,g,k,I){var R=(0,s.default)(y,I);return g==="wo"?k.ordinalNumber(R,{unit:"week"}):(0,u.default)(R,g.length)},I:function(y,g,k){var I=(0,i.default)(y);return g==="Io"?k.ordinalNumber(I,{unit:"week"}):(0,u.default)(I,g.length)},d:function(y,g,k){return g==="do"?k.ordinalNumber(y.getUTCDate(),{unit:"date"}):d.default.d(y,g)},D:function(y,g,k){var I=(0,r.default)(y);return g==="Do"?k.ordinalNumber(I,{unit:"dayOfYear"}):(0,u.default)(I,g.length)},E:function(y,g,k){var I=y.getUTCDay();switch(g){case"E":case"EE":case"EEE":return k.day(I,{width:"abbreviated",context:"formatting"});case"EEEEE":return k.day(I,{width:"narrow",context:"formatting"});case"EEEEEE":return k.day(I,{width:"short",context:"formatting"});case"EEEE":default:return k.day(I,{width:"wide",context:"formatting"})}},e:function(y,g,k,I){var R=y.getUTCDay(),O=(R-I.weekStartsOn+8)%7||7;switch(g){case"e":return String(O);case"ee":return(0,u.default)(O,2);case"eo":return k.ordinalNumber(O,{unit:"day"});case"eee":return k.day(R,{width:"abbreviated",context:"formatting"});case"eeeee":return k.day(R,{width:"narrow",context:"formatting"});case"eeeeee":return k.day(R,{width:"short",context:"formatting"});case"eeee":default:return k.day(R,{width:"wide",context:"formatting"})}},c:function(y,g,k,I){var R=y.getUTCDay(),O=(R-I.weekStartsOn+8)%7||7;switch(g){case"c":return String(O);case"cc":return(0,u.default)(O,g.length);case"co":return k.ordinalNumber(O,{unit:"day"});case"ccc":return k.day(R,{width:"abbreviated",context:"standalone"});case"ccccc":return k.day(R,{width:"narrow",context:"standalone"});case"cccccc":return k.day(R,{width:"short",context:"standalone"});case"cccc":default:return k.day(R,{width:"wide",context:"standalone"})}},i:function(y,g,k){var I=y.getUTCDay(),R=I===0?7:I;switch(g){case"i":return String(R);case"ii":return(0,u.default)(R,g.length);case"io":return k.ordinalNumber(R,{unit:"day"});case"iii":return k.day(I,{width:"abbreviated",context:"formatting"});case"iiiii":return k.day(I,{width:"narrow",context:"formatting"});case"iiiiii":return k.day(I,{width:"short",context:"formatting"});case"iiii":default:return k.day(I,{width:"wide",context:"formatting"})}},a:function(y,g,k){var I=y.getUTCHours(),R=I/12>=1?"pm":"am";switch(g){case"a":case"aa":return k.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"aaa":return k.dayPeriod(R,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return k.dayPeriod(R,{width:"narrow",context:"formatting"});case"aaaa":default:return k.dayPeriod(R,{width:"wide",context:"formatting"})}},b:function(y,g,k){var I=y.getUTCHours(),R;switch(I===12?R=f.noon:I===0?R=f.midnight:R=I/12>=1?"pm":"am",g){case"b":case"bb":return k.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"bbb":return k.dayPeriod(R,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return k.dayPeriod(R,{width:"narrow",context:"formatting"});case"bbbb":default:return k.dayPeriod(R,{width:"wide",context:"formatting"})}},B:function(y,g,k){var I=y.getUTCHours(),R;switch(I>=17?R=f.evening:I>=12?R=f.afternoon:I>=4?R=f.morning:R=f.night,g){case"B":case"BB":case"BBB":return k.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"BBBBB":return k.dayPeriod(R,{width:"narrow",context:"formatting"});case"BBBB":default:return k.dayPeriod(R,{width:"wide",context:"formatting"})}},h:function(y,g,k){if(g==="ho"){var I=y.getUTCHours()%12;return I===0&&(I=12),k.ordinalNumber(I,{unit:"hour"})}return d.default.h(y,g)},H:function(y,g,k){return g==="Ho"?k.ordinalNumber(y.getUTCHours(),{unit:"hour"}):d.default.H(y,g)},K:function(y,g,k){var I=y.getUTCHours()%12;return g==="Ko"?k.ordinalNumber(I,{unit:"hour"}):(0,u.default)(I,g.length)},k:function(y,g,k){var I=y.getUTCHours();return I===0&&(I=24),g==="ko"?k.ordinalNumber(I,{unit:"hour"}):(0,u.default)(I,g.length)},m:function(y,g,k){return g==="mo"?k.ordinalNumber(y.getUTCMinutes(),{unit:"minute"}):d.default.m(y,g)},s:function(y,g,k){return g==="so"?k.ordinalNumber(y.getUTCSeconds(),{unit:"second"}):d.default.s(y,g)},S:function(y,g){return d.default.S(y,g)},X:function(y,g,k,I){var R=I._originalDate||y,O=R.getTimezoneOffset();if(O===0)return"Z";switch(g){case"X":return _(O);case"XXXX":case"XX":return T(O);case"XXXXX":case"XXX":default:return T(O,":")}},x:function(y,g,k,I){var R=I._originalDate||y,O=R.getTimezoneOffset();switch(g){case"x":return _(O);case"xxxx":case"xx":return T(O);case"xxxxx":case"xxx":default:return T(O,":")}},O:function(y,g,k,I){var R=I._originalDate||y,O=R.getTimezoneOffset();switch(g){case"O":case"OO":case"OOO":return"GMT"+w(O,":");case"OOOO":default:return"GMT"+T(O,":")}},z:function(y,g,k,I){var R=I._originalDate||y,O=R.getTimezoneOffset();switch(g){case"z":case"zz":case"zzz":return"GMT"+w(O,":");case"zzzz":default:return"GMT"+T(O,":")}},t:function(y,g,k,I){var R=I._originalDate||y,O=Math.floor(R.getTime()/1e3);return(0,u.default)(O,g.length)},T:function(y,g,k,I){var R=I._originalDate||y,O=R.getTime();return(0,u.default)(O,g.length)}};function w(S,y){var g=S>0?"-":"+",k=Math.abs(S),I=Math.floor(k/60),R=k%60;if(R===0)return g+String(I);var O=y;return g+String(I)+O+(0,u.default)(R,2)}function _(S,y){if(S%60===0){var g=S>0?"-":"+";return g+(0,u.default)(Math.abs(S)/60,2)}return T(S,y)}function T(S,y){var g=y||"",k=S>0?"-":"+",I=Math.abs(S),R=(0,u.default)(Math.floor(I/60),2),O=(0,u.default)(I%60,2);return k+R+g+O}var A=m;e.default=A,t.exports=e.default})(mg,mg.exports);var a7=mg.exports,Cg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(u,d){switch(u){case"P":return d.date({width:"short"});case"PP":return d.date({width:"medium"});case"PPP":return d.date({width:"long"});case"PPPP":default:return d.date({width:"full"})}},r=function(u,d){switch(u){case"p":return d.time({width:"short"});case"pp":return d.time({width:"medium"});case"ppp":return d.time({width:"long"});case"pppp":default:return d.time({width:"full"})}},i=function(u,d){var f=u.match(/(P+)(p+)?/)||[],m=f[1],w=f[2];if(!w)return n(u,d);var _;switch(m){case"P":_=d.dateTime({width:"short"});break;case"PP":_=d.dateTime({width:"medium"});break;case"PPP":_=d.dateTime({width:"long"});break;case"PPPP":default:_=d.dateTime({width:"full"});break}return _.replace("{{date}}",n(m,d)).replace("{{time}}",r(w,d))},o={p:r,P:i},s=o;e.default=s,t.exports=e.default})(Cg,Cg.exports);var l7=Cg.exports,Ag={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){var i=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return i.setUTCFullYear(r.getFullYear()),r.getTime()-i.getTime()}t.exports=e.default})(Ag,Ag.exports);var eS=Ag.exports;const Ck=iu(eS);var xu={};Object.defineProperty(xu,"__esModule",{value:!0});xu.isProtectedDayOfYearToken=d7;xu.isProtectedWeekYearToken=h7;xu.throwProtectedError=f7;var u7=["D","DD"],c7=["YY","YYYY"];function d7(t){return u7.indexOf(t)!==-1}function h7(t){return c7.indexOf(t)!==-1}function f7(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Lg={exports:{}},Pg={exports:{}},Rg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(s,a,u){var d,f=n[s];return typeof f=="string"?d=f:a===1?d=f.one:d=f.other.replace("{{count}}",a.toString()),u!=null&&u.addSuffix?u.comparison&&u.comparison>0?"in "+d:d+" ago":d},i=r;e.default=i,t.exports=e.default})(Rg,Rg.exports);var p7=Rg.exports,bg={exports:{}},jg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.width?String(i.width):r.defaultWidth,s=r.formats[o]||r.formats[r.defaultWidth];return s}}t.exports=e.default})(jg,jg.exports);var m7=jg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(m7),i={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},s={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},a={date:(0,r.default)({formats:i,defaultWidth:"full"}),time:(0,r.default)({formats:o,defaultWidth:"full"}),dateTime:(0,r.default)({formats:s,defaultWidth:"full"})},u=a;e.default=u,t.exports=e.default})(bg,bg.exports);var g7=bg.exports,Dg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},r=function(s,a,u,d){return n[s]},i=r;e.default=i,t.exports=e.default})(Dg,Dg.exports);var y7=Dg.exports,Og={exports:{}},Ng={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i,o){var s=o!=null&&o.context?String(o.context):"standalone",a;if(s==="formatting"&&r.formattingValues){var u=r.defaultFormattingWidth||r.defaultWidth,d=o!=null&&o.width?String(o.width):u;a=r.formattingValues[d]||r.formattingValues[u]}else{var f=r.defaultWidth,m=o!=null&&o.width?String(o.width):r.defaultWidth;a=r.values[m]||r.values[f]}var w=r.argumentCallback?r.argumentCallback(i):i;return a[w]}}t.exports=e.default})(Ng,Ng.exports);var v7=Ng.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(v7),i={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},s={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},a={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},u={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},d={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},f=function(T,A){var S=Number(T),y=S%100;if(y>20||y<10)switch(y%10){case 1:return S+"st";case 2:return S+"nd";case 3:return S+"rd"}return S+"th"},m={ordinalNumber:f,era:(0,r.default)({values:i,defaultWidth:"wide"}),quarter:(0,r.default)({values:o,defaultWidth:"wide",argumentCallback:function(T){return T-1}}),month:(0,r.default)({values:s,defaultWidth:"wide"}),day:(0,r.default)({values:a,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:u,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"})},w=m;e.default=w,t.exports=e.default})(Og,Og.exports);var _7=Og.exports,Mg={exports:{}},Vg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(o){return function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=a.width,d=u&&o.matchPatterns[u]||o.matchPatterns[o.defaultMatchWidth],f=s.match(d);if(!f)return null;var m=f[0],w=u&&o.parsePatterns[u]||o.parsePatterns[o.defaultParseWidth],_=Array.isArray(w)?i(w,function(S){return S.test(m)}):r(w,function(S){return S.test(m)}),T;T=o.valueCallback?o.valueCallback(_):_,T=a.valueCallback?a.valueCallback(T):T;var A=s.slice(m.length);return{value:T,rest:A}}}function r(o,s){for(var a in o)if(o.hasOwnProperty(a)&&s(o[a]))return a}function i(o,s){for(var a=0;a<o.length;a++)if(s(o[a]))return a}t.exports=e.default})(Vg,Vg.exports);var k7=Vg.exports,Fg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.match(r.matchPattern);if(!s)return null;var a=s[0],u=i.match(r.parsePattern);if(!u)return null;var d=r.valueCallback?r.valueCallback(u[0]):u[0];d=o.valueCallback?o.valueCallback(d):d;var f=i.slice(a.length);return{value:d,rest:f}}}t.exports=e.default})(Fg,Fg.exports);var w7=Fg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(k7),i=n(w7),o=/^(\d+)(th|st|nd|rd)?/i,s=/\d+/i,a={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},u={any:[/^b/i,/^(a|c)/i]},d={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},f={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},w={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},_={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},T={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},A={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},S={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},y={ordinalNumber:(0,i.default)({matchPattern:o,parsePattern:s,valueCallback:function(I){return parseInt(I,10)}}),era:(0,r.default)({matchPatterns:a,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(I){return I+1}}),month:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:w,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:_,defaultMatchWidth:"wide",parsePatterns:T,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:A,defaultMatchWidth:"any",parsePatterns:S,defaultParseWidth:"any"})},g=y;e.default=g,t.exports=e.default})(Mg,Mg.exports);var E7=Mg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(p7),i=n(g7),o=n(y7),s=n(_7),a=n(E7),u={code:"en-US",formatDistance:r.default,formatLong:i.default,formatRelative:o.default,localize:s.default,match:a.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},d=u;e.default=d,t.exports=e.default})(Pg,Pg.exports);var x7=Pg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(x7),i=r.default;e.default=i,t.exports=e.default})(Lg,Lg.exports);var T7=Lg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=k;var r=n(K9),i=n(Z9),o=n(nr),s=n(a7),a=n(l7),u=n(eS),d=xu,f=n(Go),m=n(Ft),w=Ko,_=n(T7),T=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,A=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,S=/^'([^]*?)'?$/,y=/''/g,g=/[a-zA-Z]/;function k(R,O,E){var x,L,j,b,D,P,Y,ae,pe,me,z,q,Z,ce,ee,ye,qe,Ye;(0,m.default)(2,arguments);var Xe=String(O),F=(0,w.getDefaultOptions)(),oe=(x=(L=E==null?void 0:E.locale)!==null&&L!==void 0?L:F.locale)!==null&&x!==void 0?x:_.default,se=(0,f.default)((j=(b=(D=(P=E==null?void 0:E.firstWeekContainsDate)!==null&&P!==void 0?P:E==null||(Y=E.locale)===null||Y===void 0||(ae=Y.options)===null||ae===void 0?void 0:ae.firstWeekContainsDate)!==null&&D!==void 0?D:F.firstWeekContainsDate)!==null&&b!==void 0?b:(pe=F.locale)===null||pe===void 0||(me=pe.options)===null||me===void 0?void 0:me.firstWeekContainsDate)!==null&&j!==void 0?j:1);if(!(se>=1&&se<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var le=(0,f.default)((z=(q=(Z=(ce=E==null?void 0:E.weekStartsOn)!==null&&ce!==void 0?ce:E==null||(ee=E.locale)===null||ee===void 0||(ye=ee.options)===null||ye===void 0?void 0:ye.weekStartsOn)!==null&&Z!==void 0?Z:F.weekStartsOn)!==null&&q!==void 0?q:(qe=F.locale)===null||qe===void 0||(Ye=qe.options)===null||Ye===void 0?void 0:Ye.weekStartsOn)!==null&&z!==void 0?z:0);if(!(le>=0&&le<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!oe.localize)throw new RangeError("locale must contain localize property");if(!oe.formatLong)throw new RangeError("locale must contain formatLong property");var de=(0,o.default)(R);if(!(0,r.default)(de))throw new RangeError("Invalid time value");var xe=(0,u.default)(de),Qo=(0,i.default)(de,xe),ka={firstWeekContainsDate:se,weekStartsOn:le,locale:oe,_originalDate:de},wa=Xe.match(A).map(function(vt){var On=vt[0];if(On==="p"||On==="P"){var Xo=a.default[On];return Xo(vt,oe.formatLong)}return vt}).join("").match(T).map(function(vt){if(vt==="''")return"'";var On=vt[0];if(On==="'")return I(vt);var Xo=s.default[On];if(Xo)return!(E!=null&&E.useAdditionalWeekYearTokens)&&(0,d.isProtectedWeekYearToken)(vt)&&(0,d.throwProtectedError)(vt,O,String(R)),!(E!=null&&E.useAdditionalDayOfYearTokens)&&(0,d.isProtectedDayOfYearToken)(vt)&&(0,d.throwProtectedError)(vt,O,String(R)),Xo(Qo,vt,oe.localize,ka);if(On.match(g))throw new RangeError("Format string contains an unescaped latin alphabet character `"+On+"`");return vt}).join("");return wa}function I(R){var O=R.match(S);return O?O[1].replace(y,"'"):R}t.exports=e.default})(ag,ag.exports);var I7=ag.exports;const S7=iu(I7);function Ak(t,e,n){var r=L7(t,n.timeZone,n.locale);return r.formatToParts?C7(r,e):A7(r,e)}function C7(t,e){for(var n=t.formatToParts(e),r=n.length-1;r>=0;--r)if(n[r].type==="timeZoneName")return n[r].value}function A7(t,e){var n=t.format(e).replace(/\u200E/g,""),r=/ [\w-+ ]+$/.exec(n);return r?r[0].substr(1):""}function L7(t,e,n){if(n&&!n.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(n?[n.code,"en-US"]:void 0,{timeZone:e,timeZoneName:t})}function P7(t,e){var n=D7(e);return n.formatToParts?b7(n,t):j7(n,t)}var R7={year:0,month:1,day:2,hour:3,minute:4,second:5};function b7(t,e){try{for(var n=t.formatToParts(e),r=[],i=0;i<n.length;i++){var o=R7[n[i].type];o>=0&&(r[o]=parseInt(n[i].value,10))}return r}catch(s){if(s instanceof RangeError)return[NaN];throw s}}function j7(t,e){var n=t.format(e),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var yp={};function D7(t){if(!yp[t]){var e=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n=e==="06/25/2014, 00:00:00"||e==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";yp[t]=n?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return yp[t]}function ry(t,e,n,r,i,o,s){var a=new Date(0);return a.setUTCFullYear(t,e,n),a.setUTCHours(r,i,o,s),a}var Lk=36e5,O7=6e4,vp={timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function Zh(t,e,n){var r,i;if(!t||(r=vp.timezoneZ.exec(t),r))return 0;var o;if(r=vp.timezoneHH.exec(t),r)return o=parseInt(r[1],10),Pk(o)?-(o*Lk):NaN;if(r=vp.timezoneHHMM.exec(t),r){o=parseInt(r[2],10);var s=parseInt(r[3],10);return Pk(o,s)?(i=Math.abs(o)*Lk+s*O7,r[1]==="+"?-i:i):NaN}if(V7(t)){e=new Date(e||Date.now());var a=n?e:N7(e),u=Ug(a,t),d=n?u:M7(e,u,t);return-d}return NaN}function N7(t){return ry(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function Ug(t,e){var n=P7(t,e),r=ry(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime(),i=t.getTime(),o=i%1e3;return i-=o>=0?o:1e3+o,r-i}function M7(t,e,n){var r=t.getTime(),i=r-e,o=Ug(new Date(i),n);if(e===o)return e;i-=o-e;var s=Ug(new Date(i),n);return o===s?o:Math.max(o,s)}function Pk(t,e){return-23<=t&&t<=23&&(e==null||0<=e&&e<=59)}var Rk={};function V7(t){if(Rk[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),Rk[t]=!0,!0}catch{return!1}}var F7=60*1e3,U7={X:function(t,e,n,r){var i=_p(r.timeZone,t);if(i===0)return"Z";switch(e){case"X":return bk(i);case"XXXX":case"XX":return ms(i);case"XXXXX":case"XXX":default:return ms(i,":")}},x:function(t,e,n,r){var i=_p(r.timeZone,t);switch(e){case"x":return bk(i);case"xxxx":case"xx":return ms(i);case"xxxxx":case"xxx":default:return ms(i,":")}},O:function(t,e,n,r){var i=_p(r.timeZone,t);switch(e){case"O":case"OO":case"OOO":return"GMT"+W7(i,":");case"OOOO":default:return"GMT"+ms(i,":")}},z:function(t,e,n,r){switch(e){case"z":case"zz":case"zzz":return Ak("short",t,r);case"zzzz":default:return Ak("long",t,r)}}};function _p(t,e){var n=t?Zh(t,e,!0)/F7:e.getTimezoneOffset();if(Number.isNaN(n))throw new RangeError("Invalid time zone specified: "+t);return n}function Kd(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}function ms(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=Kd(Math.floor(i/60),2),s=Kd(Math.floor(i%60),2);return r+o+n+s}function bk(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Kd(Math.abs(t)/60,2)}return ms(t,e)}function W7(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+Kd(o,2)}var tS=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,kp=36e5,jk=6e4,$7=2,Dt={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:tS};function Qd(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);var n=e||{},r=n.additionalDigits==null?$7:Q9(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var i=z7(t),o=B7(i.date,r),s=o.year,a=o.restDateString,u=H7(a,s);if(isNaN(u))return new Date(NaN);if(u){var d=u.getTime(),f=0,m;if(i.time&&(f=q7(i.time),isNaN(f)))return new Date(NaN);if(i.timeZone||n.timeZone){if(m=Zh(i.timeZone||n.timeZone,new Date(d+f)),isNaN(m))return new Date(NaN)}else m=Ck(new Date(d+f)),m=Ck(new Date(d+f+m));return new Date(d+f+m)}else return new Date(NaN)}function z7(t){var e={},n=Dt.dateTimePattern.exec(t),r;if(n?(e.date=n[1],r=n[3]):(n=Dt.datePattern.exec(t),n?(e.date=n[1],r=n[2]):(e.date=null,r=t)),r){var i=Dt.timeZone.exec(r);i?(e.time=r.replace(i[1],""),e.timeZone=i[1].trim()):e.time=r}return e}function B7(t,e){var n=Dt.YYY[e],r=Dt.YYYYY[e],i;if(i=Dt.YYYY.exec(t)||r.exec(t),i){var o=i[1];return{year:parseInt(o,10),restDateString:t.slice(o.length)}}if(i=Dt.YY.exec(t)||n.exec(t),i){var s=i[1];return{year:parseInt(s,10)*100,restDateString:t.slice(s.length)}}return{year:null}}function H7(t,e){if(e===null)return null;var n,r,i,o;if(t.length===0)return r=new Date(0),r.setUTCFullYear(e),r;if(n=Dt.MM.exec(t),n)return r=new Date(0),i=parseInt(n[1],10)-1,Ok(e,i)?(r.setUTCFullYear(e,i),r):new Date(NaN);if(n=Dt.DDD.exec(t),n){r=new Date(0);var s=parseInt(n[1],10);return K7(e,s)?(r.setUTCFullYear(e,0,s),r):new Date(NaN)}if(n=Dt.MMDD.exec(t),n){r=new Date(0),i=parseInt(n[1],10)-1;var a=parseInt(n[2],10);return Ok(e,i,a)?(r.setUTCFullYear(e,i,a),r):new Date(NaN)}if(n=Dt.Www.exec(t),n)return o=parseInt(n[1],10)-1,Nk(e,o)?Dk(e,o):new Date(NaN);if(n=Dt.WwwD.exec(t),n){o=parseInt(n[1],10)-1;var u=parseInt(n[2],10)-1;return Nk(e,o,u)?Dk(e,o,u):new Date(NaN)}return null}function q7(t){var e,n,r;if(e=Dt.HH.exec(t),e)return n=parseFloat(e[1].replace(",",".")),wp(n)?n%24*kp:NaN;if(e=Dt.HHMM.exec(t),e)return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),wp(n,r)?n%24*kp+r*jk:NaN;if(e=Dt.HHMMSS.exec(t),e){n=parseInt(e[1],10),r=parseInt(e[2],10);var i=parseFloat(e[3].replace(",","."));return wp(n,r,i)?n%24*kp+r*jk+i*1e3:NaN}return null}function Dk(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var i=r.getUTCDay()||7,o=e*7+n+1-i;return r.setUTCDate(r.getUTCDate()+o),r}var Y7=[31,28,31,30,31,30,31,31,30,31,30,31],G7=[31,29,31,30,31,30,31,31,30,31,30,31];function nS(t){return t%400===0||t%4===0&&t%100!==0}function Ok(t,e,n){if(e<0||e>11)return!1;if(n!=null){if(n<1)return!1;var r=nS(t);if(r&&n>G7[e]||!r&&n>Y7[e])return!1}return!0}function K7(t,e){if(e<1)return!1;var n=nS(t);return!(n&&e>366||!n&&e>365)}function Nk(t,e,n){return!(e<0||e>52||n!=null&&(n<0||n>6))}function wp(t,e,n){return!(t!=null&&(t<0||t>=25)||e!=null&&(e<0||e>=60)||n!=null&&(n<0||n>=60))}var Q7=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function X7(t,e,n){var r=String(e),i=n||{},o=r.match(Q7);if(o){var s=Qd(i.originalDate||t,i);r=o.reduce(function(a,u){if(u[0]==="'")return a;var d=a.indexOf(u),f=a[d-1]==="'",m=a.replace(u,"'"+U7[u[0]](s,u,null,i)+"'");return f?m.substring(0,d-1)+m.substring(d+1):m},r)}return S7(t,r,i)}var Wg={exports:{}},$g={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o]);return r}t.exports=e.default})($g,$g.exports);var Z7=$g.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(Z7);function i(o){return(0,r.default)({},o)}t.exports=e.default})(Wg,Wg.exports);var J7=Wg.exports;const eV=iu(J7);function tV(t,e,n){var r=Qd(t,n),i=Zh(e,r,!0),o=new Date(r.getTime()-i),s=new Date(0);return s.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),s.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),s}function nV(t,e,n){if(typeof t=="string"&&!t.match(tS)){var r=eV(n);return r.timeZone=e,Qd(t,r)}var i=Qd(t,n),o=ry(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()).getTime(),s=Zh(e,new Date(o));return new Date(o+s)}const Mk=V.table`
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
`,Vk=V.div`
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
`,Fk=V.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px dashed #ddd;
`,rV=({user:t,userData:e})=>{const[n,r]=N.useState(null),[i,o]=N.useState(!0),[s,a]=N.useState(null),{use24HourFormat:u}=ey(),d=(e==null?void 0:e.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila";N.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{if(o(!0),e&&e.schedule&&Array.isArray(e.schedule)&&e.schedule.length>0)console.log("Using schedule from userData prop:",e.schedule),r(e.schedule);else{const T=ft(Ae,"users",t.uid),A=await nu(T);if(A.exists()){const S=A.data();if(S.schedule&&Array.isArray(S.schedule)&&S.schedule.length>0)console.log("Found user schedule in Firestore:",S.schedule),r(S.schedule);else if(S.scheduleId){const y=S.scheduleId,g=ft(Ae,"schedules",y),k=await nu(g);k.exists()&&r(k.data())}else{const y=Tn(Ae,"schedules"),g=mr(y,Qr("isDefault","==",!0)),k=await Bn(g);k.empty||r(k.docs[0].data())}}}}catch(T){console.error("Error fetching schedule:",T),a("Failed to load schedule. Please try again later.")}finally{o(!1)}})()},[t,e]);const f=_=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][_],m=(_,T=null,A=d)=>{if(!_)return"N/A";try{if(!T||T===A){const[E,x]=_.split(":"),L=new Date;return L.setHours(parseInt(E,10)),L.setMinutes(parseInt(x,10)),L.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!u})}const[S,y]=_.split(":"),g=new Date;g.setHours(0,0,0,0);const k=new Date(g);k.setHours(parseInt(S,10),parseInt(y,10),0,0);const I=nV(k,T),R=tV(I,A);return X7(R,u?"HH:mm":"h:mm a",{timeZone:A})}catch(S){return console.error("Error formatting time:",S),_}},w=(_,T,A)=>{try{const[S,y]=_.split(":").map(Number),g=new Date;g.setHours(0,0,0,0);const k=new Date(g);k.setHours(S,y,0,0);const I=WM(k,T);return q9(I,"HH:mm")}catch(S){console.error("Error calculating end time:",S);let y=(parseInt(_.split(":")[0],10)+T)%24,g=_.split(":")[1];return`${y.toString().padStart(2,"0")}:${g}`}};return h.jsxs(ci,{children:[h.jsx(di,{children:"My Schedule"}),h.jsx(hi,{children:i?h.jsx("p",{children:"Loading your schedule..."}):s?h.jsxs(Fk,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx($n,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]}):n?h.jsx("div",{children:Array.isArray(n)?h.jsxs(h.Fragment,{children:[h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.map((_,T)=>{const A=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(_.dayOfWeek),g=A.getDay()===y,k=_.timeRegion||"Asia/Manila",I=m(_.timeIn,k,d),R=_.shiftDuration||8,O=w(_.timeIn,R),E=m(O,k,d);return h.jsxs(Vk,{isToday:g,children:[h.jsxs("h3",{children:[h.jsx($n,{weight:"fill",size:20,style:{color:g?"#1a73e8":"#666"}}),_.dayOfWeek]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(Ps,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:I}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(ig,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(Ps,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:E}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"0.75rem",backgroundColor:"#f9f9f9",borderRadius:"8px",fontSize:"0.9rem"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Duration"}),h.jsxs("div",{children:[_.shiftDuration," hours"]})]}),h.jsxs("div",{style:{textAlign:"right"},children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Time Zone"}),h.jsx("div",{style:{fontSize:"0.85rem"},children:d})]})]})]},T)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(Mk,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.map((_,T)=>{const A=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(_.dayOfWeek),g=A.getDay()===y,k=_.timeRegion||"Asia/Manila",I=m(_.timeIn,k,d),R=_.shiftDuration||8,O=w(_.timeIn,R),E=m(O,k,d);return h.jsxs("tr",{style:{backgroundColor:g?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:g?"600":"400",color:g?"#1a73e8":"inherit"},children:[_.dayOfWeek,g&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:I}),h.jsx("td",{children:E}),h.jsxs("td",{children:[_.shiftDuration," hours"]})]},T)})})]}),h.jsxs("div",{style:{marginTop:"1rem",fontSize:"0.85rem",color:"#666",textAlign:"right"},children:["All times shown in your local time zone: ",h.jsx("strong",{children:d})]})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{marginBottom:"1.5rem",padding:"1rem",backgroundColor:"#f9f9f9",borderRadius:"8px",borderLeft:"4px solid #4CAF50"},children:[h.jsxs("h3",{style:{margin:"0 0 0.5rem 0",display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx($n,{weight:"fill",size:20,style:{color:"#4CAF50"}}),n.name||"Standard Schedule"]}),h.jsx("p",{style:{margin:0,color:"#666"},children:"Your assigned work schedule"})]}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.shifts&&n.shifts.map((_,T)=>{const S=new Date().getDay()===_.day;return h.jsxs(Vk,{isToday:S,children:[h.jsxs("h3",{children:[h.jsx($n,{weight:"fill",size:20,style:{color:S?"#1a73e8":"#666"}}),f(_.day)]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(Ps,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(_.timeIn)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(ig,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(Ps,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(_.timeOut)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]})]},T)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(Mk,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.shifts&&n.shifts.map((_,T)=>{const S=new Date().getDay()===_.day,y=_.timeIn.split(":").map(Number),g=_.timeOut.split(":").map(Number),k=y[0]+y[1]/60;let R=g[0]+g[1]/60-k;R<0&&(R+=24);const O=Math.round(R*10)/10;return h.jsxs("tr",{style:{backgroundColor:S?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:S?"600":"400",color:S?"#1a73e8":"inherit"},children:[f(_.day),S&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:m(_.timeIn)}),h.jsx("td",{children:m(_.timeOut)}),h.jsxs("td",{children:[O," hours"]})]},T)})})]})]})]})}):h.jsxs(Fk,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx($n,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]})})]})},iV=V.div`
  margin-bottom: 1.5rem;
`,ls=V.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`,us=V.strong`
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
`,oV=V.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,cs=V.span`
  color: #333;
  word-break: break-word;
`,sV=({user:t,userData:e,loadingUserData:n})=>h.jsxs(ci,{children:[h.jsx(di,{children:"User Profile"}),h.jsx(hi,{children:n?h.jsx("p",{children:"Loading user data..."}):h.jsx(h.Fragment,{children:h.jsxs(iV,{children:[h.jsxs(oV,{children:[h.jsx(Hd,{size:20,weight:"bold"}),"User Information"]}),h.jsxs(ls,{children:[h.jsxs(us,{children:[h.jsx(Qh,{size:18}),"Email:"]}),h.jsx(cs,{children:t==null?void 0:t.email})]}),h.jsxs(ls,{children:[h.jsxs(us,{children:[h.jsx(Zi,{size:18}),"Name:"]}),h.jsx(cs,{children:t==null?void 0:t.displayName})]}),h.jsxs(ls,{children:[h.jsxs(us,{children:[h.jsx(K1,{size:18}),"User ID:"]}),h.jsx(cs,{children:t==null?void 0:t.uid})]}),h.jsxs(ls,{children:[h.jsxs(us,{children:[h.jsx(Y1,{size:18}),"Position:"]}),h.jsx(cs,{children:(e==null?void 0:e.position)||"Not specified"})]}),h.jsxs(ls,{children:[h.jsxs(us,{children:[h.jsx(Hd,{size:18}),"Role:"]}),h.jsx(cs,{children:(e==null?void 0:e.role)||"Not specified"})]}),e&&h.jsxs(ls,{children:[h.jsxs(us,{children:[h.jsx($n,{size:18}),"Created At:"]}),h.jsx(cs,{children:(()=>{var r,i;try{return(r=e.createdAt)!=null&&r.seconds?new Date(e.createdAt.seconds*1e3).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):(i=e.createdAt)!=null&&i.toDate?e.createdAt.toDate().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):e.createdAt instanceof Date?e.createdAt.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):typeof e.createdAt=="string"?new Date(e.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):`${new Date().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})} (Current)`}catch(o){return console.error("Error formatting timestamp:",o,e.createdAt),"April 26, 2025, 04:27 AM"}})()})]})]})})})]}),aV=V.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,lV=V.div`
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
`,uV=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,cV=V.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,dV=V.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,hV=V.div`
  margin-bottom: 1.5rem;
`,Ep=V.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`,xp=V.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`,Tp=V.span`
  color: #333;
`,fV=V.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,Tu=V.button`
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
`,pV=V(Tu)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`,mV=V(Tu)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`,gV=V(Tu)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`,yV=V.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`,vV=V.div`
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
`,_V=V.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,kV=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,wV=V.h3`
  margin: 0;
  font-size: 1.2rem;
`,EV=V.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,xV=V.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,mc=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,gc=V.label`
  font-weight: 500;
  color: #555;
`,Ip=V.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,TV=V.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,IV=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,SV=V(Tu)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`,CV=V(Tu)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`,AV=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`,LV=t=>{if(!t)return"N/A";try{let e;if(t!=null&&t.seconds)e=new Date(t.seconds*1e3);else if(t!=null&&t.toDate)e=t.toDate();else if(t instanceof Date)e=t;else if(typeof t=="string")e=new Date(t);else return"Invalid date";return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch(e){return console.error("Error formatting timestamp:",e),"Invalid date"}},PV=()=>{const[t,e]=N.useState([]),[n,r]=N.useState(!0),[i,o]=N.useState(null),[s,a]=N.useState({name:"",email:"",position:"",role:""}),[u,d]=N.useState(!1);N.useEffect(()=>{f()},[]);const f=async()=>{try{r(!0);const y=await eM();e(y)}catch(y){console.error("Error fetching registration requests:",y),G.error("Failed to load registration requests")}finally{r(!1)}},m=async y=>{try{d(!0),await nM(y),G.success(`Registration for ${y.name||y.email} approved`),f()}catch(g){console.error("Error approving registration:",g),G.error("Failed to approve registration")}finally{d(!1)}},w=async y=>{try{d(!0),await rM(y),G.success(`Registration for ${y.name||y.email} declined`),G.warning("Note: The user may still exist in Firebase Authentication. They will be blocked from accessing the system, but the account still exists."),f()}catch(g){console.error("Error declining registration:",g),G.error("Failed to decline registration")}finally{d(!1)}},_=y=>{o(y),a({name:y.name||"",email:y.email||"",position:y.position||"",role:y.role||"user"})},T=()=>{o(null)},A=y=>{const{name:g,value:k}=y.target;a(I=>({...I,[g]:k}))},S=async y=>{y.preventDefault();try{d(!0),await tM(i.id,{name:s.name,email:s.email,position:s.position,role:s.role}),G.success("Registration request updated"),o(null),f()}catch(g){console.error("Error updating registration request:",g),G.error("Failed to update registration request")}finally{d(!1)}};return n?h.jsxs(ci,{children:[h.jsx(di,{children:"Registration Requests"}),h.jsx(hi,{children:h.jsx(AV,{children:"Loading registration requests..."})})]}):h.jsxs(ci,{children:[h.jsx(di,{children:"Registration Requests"}),h.jsxs(hi,{children:[h.jsx(aV,{children:t.length===0?h.jsx(yV,{children:h.jsx("p",{children:"No pending registration requests"})}):t.map(y=>h.jsxs(lV,{children:[h.jsxs(uV,{children:[h.jsxs(cV,{children:[h.jsx(Zi,{size:18,weight:"bold"}),y.name||y.email]}),h.jsxs(dV,{children:[h.jsx(OI,{size:14}),LV(y.createdAt)]})]}),h.jsxs(hV,{children:[h.jsxs(Ep,{children:[h.jsxs(xp,{children:[h.jsx(Zi,{size:16}),"Email:"]}),h.jsx(Tp,{children:y.email})]}),h.jsxs(Ep,{children:[h.jsxs(xp,{children:[h.jsx(Y1,{size:16}),"Position:"]}),h.jsx(Tp,{children:y.position||"Not specified"})]}),h.jsxs(Ep,{children:[h.jsxs(xp,{children:[h.jsx(Zi,{size:16}),"Role:"]}),h.jsx(Tp,{children:y.role||"user"})]})]}),h.jsxs(fV,{children:[h.jsxs(gV,{onClick:()=>_(y),disabled:u,children:[h.jsx(VI,{size:16}),"Edit"]}),h.jsxs(pV,{onClick:()=>m(y),disabled:u,children:[h.jsx(Ui,{size:16}),"Accept"]}),h.jsxs(mV,{onClick:()=>w(y),disabled:u,children:[h.jsx(UI,{size:16}),"Decline"]})]})]},y.id))}),i&&h.jsx(vV,{children:h.jsxs(_V,{children:[h.jsxs(kV,{children:[h.jsx(wV,{children:"Edit Registration Request"}),h.jsx(EV,{onClick:T,children:"×"})]}),h.jsxs(xV,{onSubmit:S,children:[h.jsxs(mc,{children:[h.jsx(gc,{htmlFor:"name",children:"Name"}),h.jsx(Ip,{type:"text",id:"name",name:"name",value:s.name,onChange:A,placeholder:"Enter name"})]}),h.jsxs(mc,{children:[h.jsx(gc,{htmlFor:"email",children:"Email"}),h.jsx(Ip,{type:"email",id:"email",name:"email",value:s.email,onChange:A,placeholder:"Enter email",required:!0})]}),h.jsxs(mc,{children:[h.jsx(gc,{htmlFor:"position",children:"Position"}),h.jsx(Ip,{type:"text",id:"position",name:"position",value:s.position,onChange:A,placeholder:"Enter position"})]}),h.jsxs(mc,{children:[h.jsx(gc,{htmlFor:"role",children:"Role"}),h.jsxs(TV,{id:"role",name:"role",value:s.role,onChange:A,children:[h.jsx("option",{value:"user",children:"User"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),h.jsxs(IV,{children:[h.jsx(CV,{type:"button",onClick:T,children:"Cancel"}),h.jsx(SV,{type:"submit",disabled:u,children:"Save Changes"})]})]})]})})]})]})},RV=V.div`
  padding: 2rem;
`,bV=V.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,jV=V.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,DV=V.thead`
  background-color: #f5f5f5;
`,Sp=V.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,ji=V.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,Mr=V.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,ds=V.button`
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
`,OV=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.role){case"admin":return"#800000";case"superadmin":return"#000000";default:return"#555555"}}};
  color: white;
`,NV=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.status){case"active":return"#4caf50";case"inactive":return"#f44336";case"pending":return"#ff9800";default:return"#9e9e9e"}}};
  color: white;
`,MV=V.input`
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
`,Cp=V.div`
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
`,Ap=V.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Lp=V.h3`
  margin-top: 0;
  color: #333;
`,VV=V.p`
  margin-bottom: 1.5rem;
  color: #666;
`,Pp=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,or=V.button`
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
`,Mn=V.div`
  margin-bottom: 1rem;
`,FV=V.div`
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
`,Vn=V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,Di=V.input`
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
`,Uk=V.select`
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
`,UV=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,WV=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,$V=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,zV=V.h4`
  margin: 0;
  color: #333;
`,BV=V.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;V.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;function HV(){const[t,e]=N.useState([]),[n,r]=N.useState(!0),[i,o]=N.useState(""),[s,a]=N.useState(!1),[u,d]=N.useState(null),[f,m]=N.useState(!1),[w,_]=N.useState(!1),[T,A]=N.useState(null),[S,y]=N.useState([]),[g,k]=N.useState({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),[I,R]=N.useState(null),[O,E]=N.useState(!1),[x,L]=N.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member"}),j=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],b=F=>!F||!Array.isArray(F)||F.length===0?0:F.reduce((se,le)=>se+(parseInt(le.shiftDuration,10)||0),0);N.useEffect(()=>{D()},[]);const D=async()=>{try{r(!0);const F=Tn(Ae,"users"),se=(await Bn(F)).docs.map(le=>{const de=le.data();return{id:le.id,userId:de.userId||le.id,...de,schedule:de.schedule||[]}});e(se),r(!1)}catch(F){console.error("Error fetching users:",F),G.error("Failed to load users"),r(!1)}},P=F=>{d(F),a(!0)},Y=F=>{let oe="",se="",le="";if(F.name){const de=F.name.trim().split(" ");de.length===1?oe=de[0]:de.length===2?(oe=de[0],se=de[1]):de.length>=3&&(oe=de[0],de[1].length===2&&de[1].endsWith(".")?(le=de[1].charAt(0),se=de.slice(2).join(" ")):(le=de[1],se=de.slice(2).join(" ")))}L({firstName:oe,lastName:se,middleInitial:le,email:F.email||"",position:F.position||"",role:F.role||"member"}),A(F),_(!0)},ae=async()=>{if(u)try{const F=u.userId||u.id;await D1(ft(Ae,"users",F)),e(t.filter(oe=>!(oe.userId===u.userId||oe.id===u.id))),G.success(`User ${u.name||u.email} has been deleted`),a(!1),d(null)}catch(F){console.error("Error deleting user:",F),G.error(`Failed to delete user: ${F.message}`)}},pe=()=>{a(!1),d(null)},me=async(F,oe)=>{const se=oe==="active"?"inactive":"active";try{const le=F.userId||F.id,de=ft(Ae,"users",le);await wl(de,{status:se}),e(t.map(xe=>xe.userId&&xe.userId===F.userId||xe.id===F.id?{...xe,status:se}:xe)),G.success(`User status updated to ${se}`)}catch(le){console.error("Error updating user status:",le),G.error(`Failed to update user status: ${le.message}`)}},z=F=>{A(F),y(F.schedule||[]),m(!0),E(!1),R(null)},q=async()=>{if(T)try{let F=x.firstName;if(x.middleInitial&&(F+=` ${x.middleInitial}.`),x.lastName&&(F+=` ${x.lastName}`),!F.trim()||!x.email.trim()){G.error("Name and email are required");return}const oe=T.userId||T.id,se=ft(Ae,"users",oe);await wl(se,{name:F.trim(),email:x.email.trim(),position:x.position.trim(),role:x.role}),e(t.map(le=>le.userId&&le.userId===T.userId||le.id===T.id?{...le,name:F.trim(),email:x.email.trim(),position:x.position.trim(),role:x.role}:le)),G.success("User information updated successfully"),_(!1)}catch(F){console.error("Error updating user:",F),G.error(`Failed to update user: ${F.message}`)}},Z=()=>{if(g.selectedDays.length===0){G.warning("Please select at least one day of the week");return}const F=new Date,[oe,se]=g.timeIn.split(":").map(Number);F.setHours(oe,se,0,0);const le=g.selectedDays.map(xe=>({id:`${Date.now()}-${xe}`,dayOfWeek:xe,timeIn:g.timeIn,timeRegion:g.timeRegion,shiftDuration:parseInt(g.shiftDuration,10),utcTimeIn:F.toISOString()})),de=[...S,...le];y(de),G.success(`Added schedule for ${g.selectedDays.length} day(s)`),k({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},ce=async()=>{if(T)try{const F=T.userId||T.id;console.log("Updating schedule for user with document ID:",F);const oe=ft(Ae,"users",F);await wl(oe,{schedule:S}),e(t.map(se=>se.userId&&se.userId===T.userId||se.id===T.id?{...se,schedule:S}:se)),G.success("Schedule updated successfully"),m(!1)}catch(F){console.error("Error updating schedule:",F),G.error(`Failed to update schedule: ${F.message}`)}},ee=F=>{const oe=S.filter(se=>se.id!==F);y(oe)},ye=F=>{R(F),E(!0),k({selectedDays:[F.dayOfWeek],timeIn:F.timeIn,timeRegion:F.timeRegion,shiftDuration:F.shiftDuration.toString()})},qe=()=>{if(!I)return;if(g.selectedDays.length===0){G.warning("Please select at least one day of the week");return}const F=new Date,[oe,se]=g.timeIn.split(":").map(Number);F.setHours(oe,se,0,0);let le=S.filter(xe=>xe.id!==I.id);const de=g.selectedDays.map(xe=>({id:xe===I.dayOfWeek?I.id:`${Date.now()}-${xe}`,dayOfWeek:xe,timeIn:g.timeIn,timeRegion:g.timeRegion,shiftDuration:parseInt(g.shiftDuration,10),utcTimeIn:F.toISOString()}));le=[...le,...de],y(le),G.success(`Updated schedule for ${g.selectedDays.length} day(s)`),k({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),E(!1),R(null)},Ye=()=>{E(!1),R(null),k({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},Xe=t.filter(F=>{const oe=i.toLowerCase();return F.name&&F.name.toLowerCase().includes(oe)||F.email&&F.email.toLowerCase().includes(oe)||F.role&&F.role.toLowerCase().includes(oe)||F.position&&F.position.toLowerCase().includes(oe)});return h.jsxs(RV,{children:[h.jsxs(bV,{children:[h.jsx(Z1,{size:24,weight:"bold"}),"User Management"]}),h.jsx(MV,{type:"text",placeholder:"Search users...",value:i,onChange:F=>o(F.target.value)}),n?h.jsx("p",{children:"Loading users..."}):h.jsxs(jV,{children:[h.jsx(DV,{children:h.jsxs(Sp,{children:[h.jsx(ji,{children:"Name"}),h.jsx(ji,{children:"Email"}),h.jsx(ji,{children:"Position"}),h.jsx(ji,{children:"Role"}),h.jsx(ji,{children:"Status"}),h.jsx(ji,{children:"Shifts"}),h.jsx(ji,{children:"Actions"})]})}),h.jsx("tbody",{children:Xe.length>0?Xe.map(F=>h.jsxs(Sp,{children:[h.jsx(Mr,{children:F.name||"N/A"}),h.jsx(Mr,{children:F.email}),h.jsx(Mr,{children:F.position||"N/A"}),h.jsx(Mr,{children:h.jsx(OV,{role:F.role,children:F.role||"member"})}),h.jsx(Mr,{children:h.jsx(NV,{status:F.status||"active",children:F.status||"active"})}),h.jsx(Mr,{children:F.schedule&&Array.isArray(F.schedule)?h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("strong",{children:F.schedule.length})," shifts"]}),h.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[b(F.schedule)," total hours"]})]}):"No shifts"}),h.jsxs(Mr,{children:[h.jsx(ds,{color:"#000000",onClick:()=>z(F),title:"Manage Schedule",children:h.jsx($n,{size:20})}),h.jsx(ds,{color:"#1a73e8",onClick:()=>Y(F),title:"Edit User",children:h.jsx(og,{size:20})}),h.jsx(ds,{color:F.status==="active"?"#f44336":"#4caf50",onClick:()=>me(F,F.status||"active"),title:F.status==="active"?"Deactivate user":"Activate user",children:F.status==="active"?h.jsx(J1,{size:20}):h.jsx(G1,{size:20})}),h.jsx(ds,{color:"#f44336",onClick:()=>P(F),title:"Delete user",children:h.jsx(sg,{size:20})})]})]},F.id)):h.jsx(Sp,{children:h.jsx(Mr,{colSpan:6,style:{textAlign:"center"},children:"No users found"})})})]}),s&&h.jsx(Cp,{children:h.jsxs(Ap,{children:[h.jsx(Lp,{children:"Confirm Deletion"}),h.jsxs(VV,{children:["Are you sure you want to delete the user ",(u==null?void 0:u.name)||(u==null?void 0:u.email),"? This action cannot be undone."]}),h.jsxs(Pp,{children:[h.jsx(or,{onClick:pe,children:"Cancel"}),h.jsx(or,{primary:!0,onClick:ae,children:"Delete"})]})]})}),w&&T&&h.jsx(Cp,{children:h.jsxs(Ap,{style:{maxWidth:"500px",width:"100%"},children:[h.jsx(Lp,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Hd,{size:24}),"Edit User: ",T.name||T.email]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(Mn,{children:[h.jsx(Vn,{children:"First Name"}),h.jsx(Di,{type:"text",value:x.firstName,onChange:F=>L({...x,firstName:F.target.value}),placeholder:"First Name"})]}),h.jsxs(Mn,{children:[h.jsx(Vn,{children:"Middle Initial"}),h.jsx(Di,{type:"text",value:x.middleInitial,onChange:F=>L({...x,middleInitial:F.target.value}),placeholder:"Middle Initial",maxLength:1}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),h.jsxs(Mn,{children:[h.jsx(Vn,{children:"Last Name"}),h.jsx(Di,{type:"text",value:x.lastName,onChange:F=>L({...x,lastName:F.target.value}),placeholder:"Last Name"})]}),h.jsxs(Mn,{children:[h.jsx(Vn,{children:"Email"}),h.jsx(Di,{type:"email",value:x.email,onChange:F=>L({...x,email:F.target.value}),placeholder:"Email Address"})]}),h.jsxs(Mn,{children:[h.jsx(Vn,{children:"Position"}),h.jsx(Di,{type:"text",value:x.position,onChange:F=>L({...x,position:F.target.value}),placeholder:"Position"})]}),h.jsxs(Mn,{children:[h.jsx(Vn,{children:"Role"}),h.jsxs(Uk,{value:x.role,onChange:F=>L({...x,role:F.target.value}),children:[h.jsx("option",{value:"member",children:"Member"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]})]}),h.jsxs(Pp,{children:[h.jsx(or,{onClick:()=>_(!1),children:"Cancel"}),h.jsx(or,{primary:!0,onClick:q,children:"Save Changes"})]})]})}),f&&T&&h.jsx(Cp,{children:h.jsxs(Ap,{style:{maxWidth:"600px",width:"100%"},children:[h.jsx(Lp,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx($n,{size:24}),"Manage Schedule for ",T.name||T.email]})}),h.jsx("div",{style:{marginBottom:"1rem",background:"#f5f9ff",padding:"0.75rem",borderRadius:"6px"},children:h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Total Shifts:"})," ",S.length]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Total Hours:"})," ",b(S)," hours/week"]})]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Current Schedule"}),S.length>0?h.jsx(UV,{children:S.map(F=>h.jsxs(WV,{children:[h.jsxs($V,{children:[h.jsx(zV,{children:F.dayOfWeek}),h.jsxs("div",{children:[h.jsx(ds,{color:"#000000",onClick:()=>ye(F),title:"Edit schedule",style:{marginRight:"4px"},children:h.jsx(og,{size:16})}),h.jsx(ds,{color:"#f44336",onClick:()=>ee(F.id),title:"Delete schedule",children:h.jsx(sg,{size:16})})]})]}),h.jsxs(BV,{children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Time In:"})," ",F.timeIn]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Region:"})," ",F.timeRegion]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Duration:"})," ",F.shiftDuration," hours"]})]})]},F.id))}):h.jsx("p",{children:"No schedules found. Add a new schedule below."})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:O?"Edit Schedule":"Add New Schedule"}),h.jsxs(Mn,{children:[h.jsx(Vn,{children:"Days of Week (select multiple)"}),h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:j.map(F=>h.jsxs(FV,{children:[h.jsx("input",{type:"checkbox",id:`day-${F}`,checked:g.selectedDays.includes(F),onChange:()=>{const oe=g.selectedDays.includes(F)?g.selectedDays.filter(se=>se!==F):[...g.selectedDays,F];k({...g,selectedDays:oe})}}),h.jsx("label",{htmlFor:`day-${F}`,children:F})]},F))})]}),h.jsxs(Mn,{children:[h.jsx(Vn,{children:"Time In"}),h.jsx(Di,{type:"time",value:g.timeIn,onChange:F=>k({...g,timeIn:F.target.value})})]}),h.jsxs(Mn,{children:[h.jsx(Vn,{children:"Time Region"}),h.jsxs(Uk,{value:g.timeRegion,onChange:F=>k({...g,timeRegion:F.target.value}),children:[h.jsxs("optgroup",{label:"Asia & Pacific",children:[h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),h.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),h.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),h.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),h.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),h.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),h.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),h.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),h.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),h.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),h.jsxs("optgroup",{label:"Europe & Africa",children:[h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),h.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),h.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),h.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),h.jsxs(Mn,{children:[h.jsx(Vn,{children:"Shift Duration (hours)"}),h.jsx(Di,{type:"number",min:"1",max:"24",value:g.shiftDuration,onChange:F=>k({...g,shiftDuration:F.target.value})})]}),h.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:O?h.jsxs(h.Fragment,{children:[h.jsx(or,{primary:!0,onClick:qe,children:"Update Schedule"}),h.jsx(or,{onClick:Ye,children:"Cancel Edit"})]}):h.jsx(or,{primary:!0,onClick:Z,children:"Add Schedule"})})]}),h.jsxs(Pp,{children:[h.jsx(or,{onClick:()=>m(!1),children:"Cancel"}),h.jsx(or,{primary:!0,onClick:ce,children:"Save Changes"})]})]})})]})}const qV=V.div`
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
`,YV=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
`,GV=V.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`,KV=V.div`
  margin-bottom: 1.5rem;
`,QV=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`,rS=V.button`
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
`,XV=V(rS)`
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #eee;
  }
`,ZV=V(rS)`
  background-color: #4caf50;
  color: white;
  border: 1px solid #43a047;
  
  &:hover {
    background-color: #43a047;
  }
`,JV=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,eF=V.textarea`
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

`;function tF(){const[t,e]=N.useState(null),[n,r]=N.useState("dashboard"),[i,o]=N.useState(null),[s,a]=N.useState(null),[u,d]=N.useState(!1),[f,m]=N.useState(null),[w,_]=N.useState(!1),T=fa();N.useEffect(()=>{const b=Sn.currentUser;if(b){const D={uid:b.uid,email:b.email,displayName:b.displayName||b.email.split("@")[0]};e(D),A(b.uid)}},[]);const A=async b=>{if(b)try{_(!0);try{const Y=mr(Tn(Ae,"declined_registrations"),Qr("userId","==",b));if(!(await Bn(Y)).empty){G.error("Your registration request has been declined. Please contact an administrator."),await Sn.signOut(),T("/login");return}}catch(Y){console.error("Error checking declined status:",Y)}try{const Y=mr(Tn(Ae,"registration_requests"),Qr("userId","==",b));if(!(await Bn(Y)).empty){G.info("Your registration request is pending approval. You will be notified when approved."),await Sn.signOut(),T("/login");return}}catch(Y){console.error("Error checking pending status:",Y)}const D=ft(Ae,"users",b),P=await nu(D);if(P.exists()){const Y=P.data();m(Y)}else console.log("No user data found in Firestore"),G.error("Your account is not properly set up. Please contact an administrator."),await Sn.signOut(),T("/login")}catch(D){console.error("Error fetching user data:",D),G.error("Error loading user data. Please try again later.")}finally{_(!1)}};N.useEffect(()=>{t!=null&&t.uid&&S()},[t]);const S=async()=>{try{const b=Tn(Ae,"attendance");try{const D=mr(b,Qr("userId","==",t.uid),b1("timestamp","desc"),e5(1)),P=await Bn(D);if(P.empty)o(null),a(null);else{const Y=P.docs[0].data();a(Y),o(Y.type)}}catch(D){if(D.message&&D.message.includes("index is currently building")){console.log("Index is still building, using fallback method");const P=mr(b,Qr("userId","==",t.uid)),Y=await Bn(P);if(Y.empty)o(null),a(null);else{let ae=null,pe=new Date(0);Y.forEach(me=>{var Z;const z=me.data(),q=((Z=z.timestamp)==null?void 0:Z.toDate())||new Date(0);q>pe&&(pe=q,ae=z)}),ae?(a(ae),o(ae.type)):(o(null),a(null))}G.info("System is updating. Some features may be temporarily limited.",{autoClose:5e3,hideProgressBar:!1})}else throw D}}catch(b){console.error("Error fetching attendance status:",b),b.message&&b.message.includes("index")?G.warning("System is updating attendance records. Please try again in a few minutes."):G.error("Unable to fetch your attendance status. Please refresh the page.")}},[y,g]=N.useState(!1),[k,I]=N.useState(null),[R,O]=N.useState(""),E=async(b,D)=>{if(b==="Out")return"Complete";try{const P=await nu(ft(Ae,"users",D));if(!P.exists())return console.warn("User document not found when determining status"),"On Time";const ae=P.data().schedule||[],pe=new Date,me=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][pe.getDay()],z=ae&&Array.isArray(ae)?ae.find(ye=>ye.dayOfWeek===me):null;if(!z)return console.log("No schedule found for today:",me),"On Time";console.log("Found schedule for today:",z);const[q,Z]=z.timeIn.split(":").map(Number),ce=new Date;ce.setHours(q,Z,0,0);const ee=Math.round((pe-ce)/(1e3*60));return console.log("Time difference in minutes:",ee),ee<-15?"Early":ee<=15?"On Time":"Late"}catch(P){return console.error("Error determining status:",P),"On Time"}},x=async b=>{if(t){d(!0);try{const D=nt.now(),P=await E(b,t.uid),Y={userId:t.uid,email:t.email,name:t.displayName,type:b,status:P,timestamp:D,notes:""};O(""),I(Y),g(!0)}catch(D){console.error("Error preparing time in/out:",D),G.error("Failed to prepare time in/out. Please try again.")}finally{d(!1)}}},L=async()=>{if(k){d(!0);try{const{status:b,...D}=k;D.notes=R;const P=await j8(Tn(Ae,"attendance"),D);G.success(`Time ${k.type} recorded successfully!`),o(k.type);const Y={...k,notes:R};a(Y),g(!1),I(null),O(""),console.log(`Time ${k.type} recorded with ID: ${P.id}`)}catch(b){console.error(`Error recording time ${k.type}:`,b),G.error(`Failed to record time ${k.type}`)}finally{d(!1)}}},j=()=>{g(!1),I(null),O("")};return h.jsxs(h.Fragment,{children:[h.jsxs(jM,{user:t,activeTab:n,setActiveTab:r,attendanceStatus:i,loading:u,handleTimeInOut:x,lastRecord:s,isSuperAdmin:(f==null?void 0:f.role)==="super_admin",userData:f,setUserData:m,children:[n==="dashboard"&&h.jsx(NM,{attendanceStatus:i,lastRecord:s}),n==="attendance"&&h.jsx(FM,{user:t}),n==="schedule"&&h.jsx(rV,{user:t,userData:f}),n==="profile"&&h.jsx(sV,{user:t,userData:f,loadingUserData:w}),n==="registration_requests"&&(f==null?void 0:f.role)==="super_admin"&&h.jsx(PV,{}),n==="user_management"&&(f==null?void 0:f.role)==="super_admin"&&h.jsx(HV,{})]}),y&&k&&h.jsx(qV,{children:h.jsxs(YV,{children:[h.jsxs(GV,{children:["Confirm Time ",k.type]}),h.jsxs(KV,{children:[h.jsxs("p",{children:[h.jsx("strong",{children:"Time:"})," ",k.timestamp.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Date:"})," ",k.timestamp.toDate().toLocaleDateString()]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Status:"}),h.jsx(JV,{status:k.status,children:k.status})]}),h.jsxs("div",{style:{marginTop:"1rem"},children:[h.jsx("strong",{children:"Notes (Optional):"}),h.jsx(eF,{value:R,onChange:b=>O(b.target.value),placeholder:"Add any notes about this attendance record..."})]})]}),h.jsxs(QV,{children:[h.jsxs(XV,{onClick:j,children:[h.jsx(J1,{size:16,style:{marginRight:"4px"}}),"Cancel"]}),h.jsxs(ZV,{onClick:L,children:[h.jsx(G1,{size:16,style:{marginRight:"4px"}}),"Confirm"]})]})]})})]})}const nF=({children:t})=>{const{currentUser:e,loading:n}=W1();return n?h.jsx(rF,{children:"Loading..."}):e?t:h.jsx(cx,{to:"/",replace:!0})},rF=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;function iF(){return h.jsx(h.Fragment,{children:h.jsx(t3,{children:h.jsxs(pM,{children:[h.jsx(nA,{children:h.jsxs(K4,{children:[h.jsx(Za,{path:"/",element:h.jsx(ZN,{})}),h.jsx(Za,{path:"/register",element:h.jsx(fM,{})}),h.jsx(Za,{path:"/dashboard",element:h.jsx(nF,{children:h.jsx(tF,{})})}),h.jsx(Za,{path:"*",element:h.jsx(cx,{to:"/",replace:!0})})]})}),h.jsx(rg,{position:"top-right",autoClose:3e3})]})})})}JE(document.getElementById("root")).render(h.jsx(N.StrictMode,{children:h.jsx(iF,{})}));
