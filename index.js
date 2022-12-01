// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("stream"),require("buffer"),require("process")):"function"==typeof define&&define.amd?define(["stream","buffer","process"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).circularArrayStream=e(r.require$$0$3,r.require$$0$1,r.require$$0$2)}(this,(function(r,e,t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var i,o=Object.defineProperty,a=Object.prototype,u=a.toString,c=a.__defineGetter__,f=a.__defineSetter__,l=a.__lookupGetter__,s=a.__lookupSetter__;i=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?o:function(r,e,t){var n,i,o,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(l.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=a,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,p="set"in t,i&&(o||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&c&&c.call(r,e,t.get),p&&f&&f.call(r,e,t.set),r};var p=i;function y(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function h(r){var e=r.default;if("function"==typeof e){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var d=Math.floor;function g(r){return d(r)===r}function v(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&g(r.length)&&r.length>=0&&r.length<=9007199254740991}var b=/./;function w(r){return"boolean"==typeof r}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function j(){return m&&"symbol"==typeof Symbol.toStringTag}var A=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;function O(r,e){return null!=r&&_.call(r,e)}var E="function"==typeof Symbol?Symbol.toStringTag:"";var S=j()?function(r){var e,t,n;if(null==r)return A.call(r);t=r[E],e=O(r,E);try{r[E]=void 0}catch(e){return A.call(r)}return n=A.call(r),e?r[E]=t:delete r[E],n}:function(r){return A.call(r)},I=Boolean.prototype.toString;var x=j();function T(r){return"object"==typeof r&&(r instanceof Boolean||(x?function(r){try{return I.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===S(r)))}function k(r){return w(r)||T(r)}function F(){return new Function("return this;")()}y(k,"isPrimitive",w),y(k,"isObject",T);var U="object"==typeof self?self:null,P="object"==typeof window?window:null,V="object"==typeof global?global:null;var z=function(r){if(arguments.length){if(!w(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return F()}if(U)return U;if(P)return P;if(V)return V;throw new Error("unexpected error. Unable to resolve global object.")}(),M=z.document&&z.document.childNodes,$=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var N=/^\s*function\s*([^(]*)/i;y(C,"REGEXP",N);var B=Array.isArray?Array.isArray:function(r){return"[object Array]"===S(r)};function W(r){return null!==r&&"object"==typeof r}function R(r){return W(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function L(r){var e,t,n;if(("Object"===(t=S(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=N.exec(n.toString()))return e[1]}return R(r)?"Buffer":t}y(W,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!B(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(W));var G="function"==typeof b||"object"==typeof $||"function"==typeof M?function(r){return L(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?L(r).toLowerCase():e};function q(r){return"function"===G(r)}var X,D=Object.getPrototypeOf;X=q(Object.getPrototypeOf)?D:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===S(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Z=X;function J(r){return null==r?null:(r=Object(r),Z(r))}function Y(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===S(r))return!0;r=J(r)}return!1}function H(r){return"number"==typeof r}var K=Number,Q=K.prototype.toString;var rr=j();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===S(r)))}function tr(r){return H(r)||er(r)}y(tr,"isPrimitive",H),y(tr,"isObject",er);var nr=Number.POSITIVE_INFINITY,ir=K.NEGATIVE_INFINITY;function or(r){return r<nr&&r>ir&&g(r)}function ar(r){return H(r)&&or(r)}function ur(r){return er(r)&&or(r.valueOf())}function cr(r){return ar(r)||ur(r)}function fr(r){return ar(r)&&r>=0}function lr(r){return ur(r)&&r.valueOf()>=0}function sr(r){return fr(r)||lr(r)}function pr(r){return"string"==typeof r}y(cr,"isPrimitive",ar),y(cr,"isObject",ur),y(sr,"isPrimitive",fr),y(sr,"isObject",lr);var yr=String.prototype.valueOf;var hr=j();function dr(r){return"object"==typeof r&&(r instanceof String||(hr?function(r){try{return yr.call(r),!0}catch(r){return!1}}(r):"[object String]"===S(r)))}function gr(r){return pr(r)||dr(r)}function vr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function br(r){return"number"==typeof r}function wr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function mr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+wr(i):wr(i)+r,n&&(r="-"+r)),r}y(gr,"isPrimitive",pr),y(gr,"isObject",dr),y(vr,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/);var jr=String.prototype.toLowerCase,Ar=String.prototype.toUpperCase;function _r(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!br(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=mr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=mr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Ar.call(r.specifier)?Ar.call(t):jr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Or(r){return"string"==typeof r}var Er=Math.abs,Sr=String.prototype.toLowerCase,Ir=String.prototype.toUpperCase,xr=String.prototype.replace,Tr=/e\+(\d)$/,kr=/e-(\d)$/,Fr=/^(\d+)$/,Ur=/^(\d+)e/,Pr=/\.0$/,Vr=/\.0*e/,zr=/(\..*[^0])0*e/;function Mr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!br(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Er(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=xr.call(t,zr,"$1e"),t=xr.call(t,Vr,"e"),t=xr.call(t,Pr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=xr.call(t,Tr,"e+0$1"),t=xr.call(t,kr,"e-0$1"),r.alternate&&(t=xr.call(t,Fr,"$1."),t=xr.call(t,Ur,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Ir.call(r.specifier)?Ir.call(t):Sr.call(t)}function $r(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Cr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+$r(n):$r(n)+r}var Nr=String.fromCharCode,Br=isNaN,Wr=Array.isArray;function Rr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Lr(r){var e,t,n,i,o,a,u,c,f;if(!Wr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(Or(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=Rr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Br(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Br(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=_r(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Br(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Br(o)?String(n.arg):Nr(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Mr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=mr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Cr(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Gr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function qr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Xr(r){var e,t,n,i;for(t=[],i=0,n=Gr.exec(r);n;)(e=r.slice(i,Gr.lastIndex-n[0].length)).length&&t.push(e),t.push(qr(n)),i=Gr.lastIndex,n=Gr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Dr(r){return"string"==typeof r}function Zr(r){var e,t,n;if(!Dr(r))throw new TypeError(Zr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Xr(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Lr.apply(null,t)}function Jr(r){return r!=r}function Yr(r){return H(r)&&Jr(r)}function Hr(r){return er(r)&&Jr(r.valueOf())}function Kr(r){return Yr(r)||Hr(r)}function Qr(r,e,t){var n,i;if(!v(r)&&!pr(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!ar(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Kr(e)){for(;i<n;i++)if(Kr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}function re(r){return Object.keys(Object(r))}y(Kr,"isPrimitive",Yr),y(Kr,"isObject",Hr);var ee,te=void 0!==Object.keys;function ne(r){return"[object Arguments]"===S(r)}ee=function(){return ne(arguments)}();var ie=ee,oe=Object.prototype.propertyIsEnumerable;var ae=!oe.call("beep","0");function ue(r,e){var t;return null!=r&&(!(t=oe.call(r,e))&&ae&&gr(r)?!Yr(e=+e)&&ar(e)&&e>=0&&e<r.length:t)}var ce=4294967295;var fe=ie?ne:function(r){return null!==r&&"object"==typeof r&&!B(r)&&"number"==typeof r.length&&g(r.length)&&r.length>=0&&r.length<=ce&&O(r,"callee")&&!ue(r,"callee")},le=Array.prototype.slice;var se=ue((function(){}),"prototype"),pe=!ue({toString:null},"toString");function ye(r){return r.constructor&&r.constructor.prototype===r}var he=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],de="undefined"==typeof window?void 0:window;var ge=function(){var r;if("undefined"===G(de))return!1;for(r in de)try{-1===Qr(he,r)&&O(de,r)&&null!==de[r]&&"object"===G(de[r])&&ye(de[r])}catch(r){return!0}return!1}(),ve="undefined"!=typeof window;var be,we=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];be=te?function(){return 2!==(re(arguments)||"").length}(1,2)?function(r){return fe(r)?re(le.call(r)):re(r)}:re:function(r){var e,t,n,i,o,a,u;if(i=[],fe(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!O(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!W(r))return i;t=se&&n}for(o in r)t&&"prototype"===o||!O(r,o)||i.push(String(o));if(pe)for(e=function(r){if(!1===ve&&!ge)return ye(r);try{return ye(r)}catch(r){return!1}}(r),u=0;u<we.length;u++)a=we[u],e&&"constructor"===a||!O(r,a)||i.push(String(a));return i};var me=be,je=void 0!==Object.getOwnPropertyNames,Ae=Object.getOwnPropertyNames;var _e=je?function(r){return Ae(Object(r))}:function(r){return me(Object(r))},Oe=void 0!==Object.getOwnPropertyDescriptor,Ee=Object.getOwnPropertyDescriptor;var Se=Oe?function(r,e){var t;return null==r||void 0===(t=Ee(r,e))?null:t}:function(r,e){return O(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null},Ie="function"==typeof Buffer?Buffer:null;var xe,Te=e.Buffer;xe=function(){var r,e;if("function"!=typeof Ie)return!1;try{r=R(e="function"==typeof Ie.from?Ie.from([1,2,3,4]):new Ie([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?Te:function(){throw new Error("not implemented")};var ke=xe;var Fe=q(ke.from)?function(r){if(!R(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return ke.from(r)}:function(r){if(!R(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new ke(r)},Ue="function"==typeof Int8Array;var Pe="function"==typeof Int8Array?Int8Array:null;var Ve,ze="function"==typeof Int8Array?Int8Array:void 0;Ve=function(){var r,e,t;if("function"!=typeof Pe)return!1;try{e=new Pe([1,3.14,-3.14,128]),t=e,r=(Ue&&t instanceof Int8Array||"[object Int8Array]"===S(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?ze:function(){throw new Error("not implemented")};var Me=Ve,$e="function"==typeof Uint8Array;var Ce="function"==typeof Uint8Array?Uint8Array:null;var Ne,Be="function"==typeof Uint8Array?Uint8Array:void 0;Ne=function(){var r,e,t;if("function"!=typeof Ce)return!1;try{e=new Ce(e=[1,3.14,-3.14,256,257]),t=e,r=($e&&t instanceof Uint8Array||"[object Uint8Array]"===S(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Be:function(){throw new Error("not implemented")};var We=Ne,Re="function"==typeof Uint8ClampedArray;var Le="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Ge,qe="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;Ge=function(){var r,e,t;if("function"!=typeof Le)return!1;try{e=new Le([-1,0,1,3.14,4.99,255,256]),t=e,r=(Re&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===S(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?qe:function(){throw new Error("not implemented")};var Xe=Ge,De="function"==typeof Int16Array;var Ze="function"==typeof Int16Array?Int16Array:null;var Je,Ye="function"==typeof Int16Array?Int16Array:void 0;Je=function(){var r,e,t;if("function"!=typeof Ze)return!1;try{e=new Ze([1,3.14,-3.14,32768]),t=e,r=(De&&t instanceof Int16Array||"[object Int16Array]"===S(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Ye:function(){throw new Error("not implemented")};var He=Je,Ke="function"==typeof Uint16Array;var Qe="function"==typeof Uint16Array?Uint16Array:null;var rt,et="function"==typeof Uint16Array?Uint16Array:void 0;rt=function(){var r,e,t;if("function"!=typeof Qe)return!1;try{e=new Qe(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Ke&&t instanceof Uint16Array||"[object Uint16Array]"===S(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?et:function(){throw new Error("not implemented")};var tt=rt,nt="function"==typeof Int32Array;var it="function"==typeof Int32Array?Int32Array:null;var ot,at="function"==typeof Int32Array?Int32Array:void 0;ot=function(){var r,e,t;if("function"!=typeof it)return!1;try{e=new it([1,3.14,-3.14,2147483648]),t=e,r=(nt&&t instanceof Int32Array||"[object Int32Array]"===S(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?at:function(){throw new Error("not implemented")};var ut=ot,ct="function"==typeof Uint32Array;var ft="function"==typeof Uint32Array?Uint32Array:null;var lt,st="function"==typeof Uint32Array?Uint32Array:void 0;lt=function(){var r,e,t;if("function"!=typeof ft)return!1;try{e=new ft(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ct&&t instanceof Uint32Array||"[object Uint32Array]"===S(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?st:function(){throw new Error("not implemented")};var pt=lt,yt="function"==typeof Float32Array;var ht="function"==typeof Float32Array?Float32Array:null;var dt,gt="function"==typeof Float32Array?Float32Array:void 0;dt=function(){var r,e,t;if("function"!=typeof ht)return!1;try{e=new ht([1,3.14,-3.14,5e40]),t=e,r=(yt&&t instanceof Float32Array||"[object Float32Array]"===S(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===nr}catch(e){r=!1}return r}()?gt:function(){throw new Error("not implemented")};var vt=dt,bt="function"==typeof Float64Array;var wt="function"==typeof Float64Array?Float64Array:null;var mt,jt="function"==typeof Float64Array?Float64Array:void 0;mt=function(){var r,e,t;if("function"!=typeof wt)return!1;try{e=new wt([1,3.14,-3.14,NaN]),t=e,r=(bt&&t instanceof Float64Array||"[object Float64Array]"===S(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?jt:function(){throw new Error("not implemented")};var At=mt;function _t(r){return new Me(r)}function Ot(r){return new We(r)}function Et(r){return new Xe(r)}function St(r){return new He(r)}function It(r){return new tt(r)}function xt(r){return new ut(r)}function Tt(r){return new pt(r)}function kt(r){return new vt(r)}function Ft(r){return new At(r)}var Ut={int8array:_t,uint8array:Ot,uint8clampedarray:Et,int16array:St,uint16array:It,int32array:xt,uint32array:Tt,float32array:kt,float64array:Ft};function Pt(r,e,t,n,i){var o,a,u,c,f,l,s,y,h,d;if(i-=1,"object"!=typeof r||null===r)return r;if(R(r))return Fe(r);if(Y(r))return function(r){var e,t,n,i,o,a,u=[],c=[];for(o=new r.constructor(r.message),u.push(r),c.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),e=me(r),a=0;a<e.length;a++)i=e[a],O(t=Se(r,i),"value")&&(n=B(r[i])?[]:{},t.value=Pt(r[i],n,u,c,-1)),p(o,i,t);return o}(r);if("date"===(u=G(r)))return new Date(+r);if("regexp"===u)return function(r){if(!pr(r))throw new TypeError(Zr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}(r.toString());if("set"===u)return new Set(r);if("map"===u)return new Map(r);if("string"===u||"boolean"===u||"number"===u)return r.valueOf();if(f=Ut[u])return f(r);if("array"!==u&&"object"!==u)return"function"==typeof Object.freeze?function(r){var e,t,n,i,o,a,u,c;for(e=[],i=[],u=Object.create(J(r)),e.push(r),i.push(u),t=_e(r),c=0;c<t.length;c++)n=t[c],O(o=Se(r,n),"value")&&(a=B(r[n])?[]:{},o.value=Pt(r[n],a,e,i,-1)),p(u,n,o);return Object.isExtensible(r)||Object.preventExtensions(u),Object.isSealed(r)&&Object.seal(u),Object.isFrozen(r)&&Object.freeze(u),u}(r):{};if(a=me(r),i>0)for(o=u,d=0;d<a.length;d++)y=r[l=a[d]],u=G(y),"object"!=typeof y||null===y||"array"!==u&&"object"!==u||R(y)?"object"===o?(O(c=Se(r,l),"value")&&(c.value=Pt(y)),p(e,l,c)):e[l]=Pt(y):-1===(h=Qr(t,y))?(s=B(y)?new Array(y.length):{},t.push(y),n.push(s),"array"===o?e[l]=Pt(y,s,t,n,i):(O(c=Se(r,l),"value")&&(c.value=Pt(y,s,t,n,i)),p(e,l,c))):e[l]=n[h];else if("array"===u)for(d=0;d<a.length;d++)e[l=a[d]]=r[l];else for(d=0;d<a.length;d++)l=a[d],c=Se(r,l),p(e,l,c);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}function Vt(r,e){var t;if(arguments.length>1){if(!fr(e))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+e+"`.");if(0===e)return r}else e=nr;return Pt(r,t=B(r)?new Array(r.length):{},[r],[t],e)}function zt(r){var e=typeof r;return null===r||"object"!==e&&"function"!==e?new TypeError("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `"+r+"`."):null}var Mt=Object.create;function $t(){}var Ct,Nt="function"==typeof Mt?Mt:function(r){return $t.prototype=r,new $t};function Bt(r,e,t){p(r,e,{configurable:!0,enumerable:!1,writable:!0,value:t})}Ct=q(ke.from)?function(r,e){if(!pr(r))throw new TypeError(Zr("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!pr(e))throw new TypeError(Zr("invalid argument. Second argument must be a string. Value: `%s`.",e));return ke.from(r,e)}return ke.from(r,"utf8")}:function(r,e){if(!pr(r))throw new TypeError(Zr("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!pr(e))throw new TypeError(Zr("invalid argument. Second argument must be a string. Value: `%s`.",e));return new ke(r,e)}return new ke(r,"utf8")};var Wt=Ct,Rt=t;function Lt(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var Gt={objectMode:!1,encoding:null,sep:"\n",iter:1e308,dir:1};var qt=Object.prototype;function Xt(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!B(r)}(r)&&(!(e=J(r))||!O(r,"constructor")&&O(e,"constructor")&&q(e.constructor)&&"[object Function]"===S(e.constructor)&&O(e,"isPrototypeOf")&&q(e.isPrototypeOf)&&(e===qt||function(r){var e;for(e in r)if(!O(r,e))return!1;return!0}(r)))}function Dt(r){return H(r)&&r>=0}function Zt(r){return er(r)&&r.valueOf()>=0}function Jt(r){return Dt(r)||Zt(r)}function Yt(r,e){return Xt(e)?O(e,"sep")&&(r.sep=e.sep,!pr(r.sep))?new TypeError(Lt("0fz2i","sep",r.sep)):O(e,"objectMode")&&(r.objectMode=e.objectMode,!w(r.objectMode))?new TypeError(Lt("0fz30","objectMode",r.objectMode)):O(e,"encoding")&&(r.encoding=e.encoding,!pr(r.encoding)&&null!==r.encoding)?new TypeError(Lt("0fz84","encoding",r.encoding)):O(e,"highWaterMark")&&(r.highWaterMark=e.highWaterMark,!Dt(r.highWaterMark))?new TypeError(Lt("0fz4x","highWaterMark",r.highWaterMark)):O(e,"serialize")&&(r.serialize=e.serialize,!q(r.serialize))?new TypeError(Lt("0fz78","serialize",r.serialize)):O(e,"iter")&&(r.iter=e.iter,!fr(r.iter))?new TypeError(Lt("0fz35","iter",r.iter)):O(e,"dir")&&(r.dir=e.dir,1!==r.dir&&-1!==r.dir)?new TypeError(Lt("0fz37","dir",r.dir)):null:new TypeError(Lt("0fz2h",e))}y(Jt,"isPrimitive",Dt),y(Jt,"isObject",Zt);var Ht=h(Object.freeze({__proto__:null,default:()=>()=>{}}))("from-circular-array-stream"),Kt=r.Readable;function Qt(r,e){var t,n;if(!(this instanceof Qt))return arguments.length>1?new Qt(r,e):new Qt(r);if(!v(r))throw new TypeError(Lt("0fz2a",r));if(t=Vt(Gt),arguments.length>1&&(n=Yt(t,e)))throw n;return Ht("Creating a readable stream configured with the following options: %s.",JSON.stringify(t)),Kt.call(this,t),Bt(this,"_destroyed",!1),y(this,"_objectMode",t.objectMode),y(this,"_sep",t.sep),y(this,"_serialize",t.serialize||JSON.stringify),y(this,"_src",r),y(this,"_stride",t.dir),y(this,"_iter",t.iter),Bt(this,"_i",0),Bt(this,"_idx",1===t.dir?-1:r.length),this}return function(r,e){var t=zt(r);if(t)throw t;if(t=zt(e))throw t;if(void 0===e.prototype)throw new TypeError("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `"+e.prototype+"`.");r.prototype=Nt(e.prototype),p(r.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:r})}(Qt,Kt),y(Qt.prototype,"_read",(function(){var r,e,t;if(!this._destroyed)for(r=!0;r;){if(e=null,this._i+=1,this._i>this._iter||0===this._src.length)return Ht("Finished iteration."),this.push(null);this._idx+=this._stride,this._stride>0&&this._idx>=this._src.length?this._idx%=this._src.length:this._stride<0&&this._idx<0&&(this._idx+=this._src.length),t=this._src[this._idx],Ht("Value: %s. Idx: %d. Iter: %d.",JSON.stringify(t),this._idx,this._i),!1===this._objectMode&&("string"==typeof(t=this._serialize(t))?t=1===this._i?Wt(t):Wt(this._sep+t):R(t)?this._i>1&&(t=ke.concat([Wt(this._sep),t])):e=new Error(Lt("0fzAu",t))),e?this.emit("error",e):r=this.push(t)}})),y(Qt.prototype,"destroy",(function(r){var e;return this._destroyed?(Ht("Attempted to destroy an already destroyed stream."),this):(e=this,this._destroyed=!0,function(r){var e,t;for(e=[],t=1;t<arguments.length;t++)e.push(arguments[t]);function n(){r.apply(null,e)}Rt.nextTick(n)}((function(){r&&(Ht("Stream was destroyed due to an error. Error: %s.",Y(r)?r.message:JSON.stringify(r)),e.emit("error",r));Ht("Closing the stream..."),e.emit("close")})),this)})),y(Qt,"objectMode",(function(r,e){var t;if(arguments.length>1){if(!Xt(t=e))throw new TypeError(Lt("0fz2h",t));t=Vt(e,1)}else t={};return t.objectMode=!0,new Qt(r,t)})),y(Qt,"factory",(function(r){var e;return e=arguments.length?Vt(r,1):{},t;function t(r){return new Qt(r,e)}})),Qt}));
//# sourceMappingURL=index.js.map
