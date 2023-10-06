// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("stream"),require("buffer"),require("process")):"function"==typeof define&&define.amd?define(["stream","buffer","process"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).circularArrayStream=e(r.require$$0$3,r.require$$0$1,r.require$$0$2)}(this,(function(r,e,t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function o(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function u(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+a(i):a(i)+r,n&&(r="-"+r)),r}var c=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function f(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=u(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=u(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(r){return"string"==typeof r}var p=Math.abs,h=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,w=/^(\d+)e/,m=/\.0$/,j=/\.0*e/,_=/(\..*[^0])0*e/;function O(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!o(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=d.call(t,_,"$1e"),t=d.call(t,j,"e"),t=d.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=d.call(t,y,"e+0$1"),t=d.call(t,b,"e-0$1"),r.alternate&&(t=d.call(t,v,"$1."),t=d.call(t,w,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===g.call(r.specifier)?g.call(t):h.call(t)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var T=String.fromCharCode,M=isNaN,x=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function P(r){var e,t,n,i,o,a,c,s,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,s=0;s<r.length;s++)if(l(n=r[s]))a+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,M(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,M(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!M(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=M(o)?String(n.arg):T(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=O(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=u(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function A(r){return"string"==typeof r}function B(r){var e,t,n;if(!A(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return P.apply(null,t)}var $,N=Object.prototype,W=N.toString,C=N.__defineGetter__,z=N.__defineSetter__,G=N.__lookupGetter__,R=N.__lookupSetter__;$=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?i:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===W.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===W.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&z&&z.call(r,e,t.set),r};var L=$;function q(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var X=Math.floor;function Z(r){return X(r)===r}function D(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Z(r.length)&&r.length>=0&&r.length<=9007199254740991}var J=Object,Y=/./;function H(r){return"boolean"==typeof r}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Q(){return K&&"symbol"==typeof Symbol.toStringTag}var rr=Object.prototype.toString;var er=Object.prototype.hasOwnProperty;function tr(r,e){return null!=r&&er.call(r,e)}var nr="function"==typeof Symbol?Symbol:void 0,ir="function"==typeof nr?nr.toStringTag:"";var or=Q()?function(r){var e,t,n;if(null==r)return rr.call(r);t=r[ir],e=tr(r,ir);try{r[ir]=void 0}catch(e){return rr.call(r)}return n=rr.call(r),e?r[ir]=t:delete r[ir],n}:function(r){return rr.call(r)},ar=Boolean,ur=Boolean.prototype.toString;var cr=Q();function sr(r){return"object"==typeof r&&(r instanceof ar||(cr?function(r){try{return ur.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===or(r)))}function fr(r){return H(r)||sr(r)}function lr(){return new Function("return this;")()}q(fr,"isPrimitive",H),q(fr,"isObject",sr);var pr="object"==typeof self?self:null,hr="object"==typeof window?window:null,gr="object"==typeof global?global:null,dr="object"==typeof globalThis?globalThis:null;var yr=function(r){if(arguments.length){if(!H(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return lr()}if(dr)return dr;if(pr)return pr;if(hr)return hr;if(gr)return gr;throw new Error("unexpected error. Unable to resolve global object.")}(),br=yr.document&&yr.document.childNodes,vr=Int8Array;function wr(){return/^\s*function\s*([^(]*)/i}var mr=/^\s*function\s*([^(]*)/i;q(wr,"REGEXP",mr);var jr=Array.isArray?Array.isArray:function(r){return"[object Array]"===or(r)};function _r(r){return null!==r&&"object"==typeof r}function Or(r){return _r(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function Er(r){var e,t,n;if(("Object"===(t=or(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=mr.exec(n.toString()))return e[1]}return Or(r)?"Buffer":t}q(_r,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!jr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(_r));var Sr="function"==typeof Y||"object"==typeof vr||"function"==typeof br?function(r){return Er(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Er(r).toLowerCase():e};function Tr(r){return"function"===Sr(r)}var Mr,xr=Object.getPrototypeOf;Mr=Tr(Object.getPrototypeOf)?xr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===or(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var kr=Mr;function Pr(r){return null==r?null:(r=J(r),kr(r))}var Vr=Tr(Object.assign),Ir=Object.assign;function Fr(r){return Object.keys(Object(r))}var Ar,Br=void 0!==Object.keys;function $r(r){return"[object Arguments]"===or(r)}Ar=function(){return $r(arguments)}();var Nr=Ar;function Wr(r){return"string"==typeof r}var Cr=String.prototype.valueOf;var zr=Q();function Gr(r){return"object"==typeof r&&(r instanceof String||(zr?function(r){try{return Cr.call(r),!0}catch(r){return!1}}(r):"[object String]"===or(r)))}function Rr(r){return Wr(r)||Gr(r)}function Lr(r){return"number"==typeof r}q(Rr,"isPrimitive",Wr),q(Rr,"isObject",Gr);var qr=Number,Ur=qr.prototype.toString;var Xr=Q();function Zr(r){return"object"==typeof r&&(r instanceof qr||(Xr?function(r){try{return Ur.call(r),!0}catch(r){return!1}}(r):"[object Number]"===or(r)))}function Dr(r){return Lr(r)||Zr(r)}function Jr(r){return r!=r}function Yr(r){return Lr(r)&&Jr(r)}function Hr(r){return Zr(r)&&Jr(r.valueOf())}function Kr(r){return Yr(r)||Hr(r)}q(Dr,"isPrimitive",Lr),q(Dr,"isObject",Zr),q(Kr,"isPrimitive",Yr),q(Kr,"isObject",Hr);var Qr=Number.POSITIVE_INFINITY,re=qr.NEGATIVE_INFINITY;function ee(r){return r<Qr&&r>re&&Z(r)}function te(r){return Lr(r)&&ee(r)}function ne(r){return Zr(r)&&ee(r.valueOf())}function ie(r){return te(r)||ne(r)}q(ie,"isPrimitive",te),q(ie,"isObject",ne);var oe=Object.prototype.propertyIsEnumerable;var ae=!oe.call("beep","0");function ue(r,e){var t;return null!=r&&(!(t=oe.call(r,e))&&ae&&Rr(r)?!Yr(e=+e)&&te(e)&&e>=0&&e<r.length:t)}var ce=Nr?$r:function(r){return null!==r&&"object"==typeof r&&!jr(r)&&"number"==typeof r.length&&Z(r.length)&&r.length>=0&&r.length<=4294967295&&tr(r,"callee")&&!ue(r,"callee")},se=Array.prototype.slice;var fe=ue((function(){}),"prototype"),le=!ue({toString:null},"toString");function pe(r){return r!=r}function he(r){return Lr(r)&&pe(r)}function ge(r){return Zr(r)&&pe(r.valueOf())}function de(r){return he(r)||ge(r)}function ye(r,e,t){var n,i;if(!D(r)&&!Wr(r))throw new TypeError(B("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!te(t))throw new TypeError(B("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(de(e)){for(;i<n;i++)if(de(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}function be(r){return r.constructor&&r.constructor.prototype===r}q(de,"isPrimitive",he),q(de,"isObject",ge);var ve=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],we="undefined"==typeof window?void 0:window;var me=function(){var r;if("undefined"===Sr(we))return!1;for(r in we)try{-1===ye(ve,r)&&tr(we,r)&&null!==we[r]&&"object"===Sr(we[r])&&be(we[r])}catch(r){return!0}return!1}(),je="undefined"!=typeof window;var _e,Oe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];_e=Br?function(){return 2!==(Fr(arguments)||"").length}(1,2)?function(r){return ce(r)?Fr(se.call(r)):Fr(r)}:Fr:function(r){var e,t,n,i,o,a,u;if(i=[],ce(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!tr(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!_r(r))return i;t=fe&&n}for(o in r)t&&"prototype"===o||!tr(r,o)||i.push(String(o));if(le)for(e=function(r){if(!1===je&&!me)return be(r);try{return be(r)}catch(r){return!1}}(r),u=0;u<Oe.length;u++)a=Oe[u],e&&"constructor"===a||!tr(r,a)||i.push(String(a));return i};var Ee=_e,Se=void 0!==Object.getOwnPropertySymbols,Te=J.getOwnPropertySymbols;var Me,xe=Se?function(r){return Te(J(r))}:function(){return[]};function ke(r){var e,t,n;for(e=Ee(r),t=xe(r),n=0;n<t.length;n++)ue(r,t[n])&&e.push(t[n]);return e}Me=Vr?Ir:function(r){var e,t,n,i,o,a,u;if(null==r)throw new TypeError(B("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(o=J(r),a=1;a<arguments.length;a++)if(null!=(e=arguments[a]))for(i=(t=ke(J(e))).length,u=0;u<i;u++)o[n=t[u]]=e[n];return o};var Pe=Me;function Ve(r){var e=typeof r;return null===r||"object"!==e&&"function"!==e?new TypeError(B("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `%s`.",r)):null}var Ie=Object.create;function Fe(){}var Ae="function"==typeof Ie?Ie:function(r){return Fe.prototype=r,new Fe};function Be(r,e,t){L(r,e,{configurable:!0,enumerable:!1,writable:!0,value:t})}var $e="function"==typeof Buffer?Buffer:null;var Ne,We=e.Buffer;Ne=function(){var r,e;if("function"!=typeof $e)return!1;try{r=Or(e="function"==typeof $e.from?$e.from([1,2,3,4]):new $e([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?We:function(){throw new Error("not implemented")};var Ce,ze=Ne;Ce=Tr(ze.from)?function(r,e){if(!Wr(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!Wr(e))throw new TypeError(B("invalid argument. Second argument must be a string. Value: `%s`.",e));return ze.from(r,e)}return ze.from(r,"utf8")}:function(r,e){if(!Wr(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!Wr(e))throw new TypeError(B("invalid argument. Second argument must be a string. Value: `%s`.",e));return new ze(r,e)}return new ze(r,"utf8")};var Ge=Ce,Re=t;function Le(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var qe={objectMode:!1,encoding:null,sep:"\n",iter:1e308,dir:1};var Ue=Object.prototype;function Xe(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!jr(r)}(r)&&(!(e=Pr(r))||!tr(r,"constructor")&&tr(e,"constructor")&&Tr(e.constructor)&&"[object Function]"===or(e.constructor)&&tr(e,"isPrototypeOf")&&Tr(e.isPrototypeOf)&&(e===Ue||function(r){var e;for(e in r)if(!tr(r,e))return!1;return!0}(r)))}function Ze(r){return Lr(r)&&r>=0}function De(r){return Zr(r)&&r.valueOf()>=0}function Je(r){return Ze(r)||De(r)}function Ye(r){return te(r)&&r>=0}function He(r){return ne(r)&&r.valueOf()>=0}function Ke(r){return Ye(r)||He(r)}function Qe(r,e){return Xe(e)?tr(e,"sep")&&(r.sep=e.sep,!Wr(r.sep))?new TypeError(Le("1MB2W,Gh","sep",r.sep)):tr(e,"objectMode")&&(r.objectMode=e.objectMode,!H(r.objectMode))?new TypeError(Le("1MB2o,GE","objectMode",r.objectMode)):tr(e,"encoding")&&(r.encoding=e.encoding,!Wr(r.encoding)&&null!==r.encoding)?new TypeError(Le("1MB7n,Ny","encoding",r.encoding)):tr(e,"highWaterMark")&&(r.highWaterMark=e.highWaterMark,!Ze(r.highWaterMark))?new TypeError(Le("1MB4k,I9","highWaterMark",r.highWaterMark)):tr(e,"serialize")&&(r.serialize=e.serialize,!Tr(r.serialize))?new TypeError(Le("1MB6p,Fu","serialize",r.serialize)):tr(e,"iter")&&(r.iter=e.iter,!Ye(r.iter))?new TypeError(Le("1MB2t,G9","iter",r.iter)):tr(e,"dir")&&(r.dir=e.dir,1!==r.dir&&-1!==r.dir)?new TypeError(Le("1MB2v,MP","dir",r.dir)):null:new TypeError(Le("1MB2V,FD",e))}q(Je,"isPrimitive",Ze),q(Je,"isObject",De),q(Ke,"isPrimitive",Ye),q(Ke,"isObject",He);var rt=U(Object.freeze({__proto__:null,default:()=>()=>{}}))("from-circular-array-stream"),et=r.Readable;function tt(r,e){var t,n;if(!(this instanceof tt))return arguments.length>1?new tt(r,e):new tt(r);if(!D(r))throw new TypeError(Le("1MB2O,GW",r));if(t=Pe({},qe),arguments.length>1&&(n=Qe(t,e)))throw n;return rt("Creating a readable stream configured with the following options: %s.",JSON.stringify(t)),et.call(this,t),Be(this,"_destroyed",!1),q(this,"_objectMode",t.objectMode),q(this,"_sep",t.sep),q(this,"_serialize",t.serialize||JSON.stringify),q(this,"_src",r),q(this,"_stride",t.dir),q(this,"_iter",t.iter),Be(this,"_i",0),Be(this,"_idx",1===t.dir?-1:r.length),this}return function(r,e){var t=Ve(r);if(t)throw t;if(t=Ve(e))throw t;if(void 0===e.prototype)throw new TypeError(B("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `%s`.",e.prototype));r.prototype=Ae(e.prototype),L(r.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:r})}(tt,et),q(tt.prototype,"_read",(function(){var r,e,t;if(!this._destroyed)for(r=!0;r;){if(e=null,this._i+=1,this._i>this._iter||0===this._src.length)return rt("Finished iteration."),this.push(null);this._idx+=this._stride,this._stride>0&&this._idx>=this._src.length?this._idx%=this._src.length:this._stride<0&&this._idx<0&&(this._idx+=this._src.length),t=this._src[this._idx],rt("Value: %s. Idx: %d. Iter: %d.",JSON.stringify(t),this._idx,this._i),!1===this._objectMode&&("string"==typeof(t=this._serialize(t))?t=1===this._i?Ge(t):Ge(this._sep+t):Or(t)?this._i>1&&(t=ze.concat([Ge(this._sep),t])):e=new Error(Le("1MBA9,PU",t))),e?this.emit("error",e):r=this.push(t)}})),q(tt.prototype,"destroy",(function(r){var e;return this._destroyed?(rt("Attempted to destroy an already destroyed stream."),this):(e=this,this._destroyed=!0,function(r){var e,t;for(e=[],t=1;t<arguments.length;t++)e.push(arguments[t]);function n(){r.apply(null,e)}Re.nextTick(n)}((function(){r&&(rt("Stream was destroyed due to an error. Error: %s.",function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===or(r))return!0;r=Pr(r)}return!1}(r)?r.message:JSON.stringify(r)),e.emit("error",r));rt("Closing the stream..."),e.emit("close")})),this)})),q(tt,"objectMode",(function(r,e){var t;if(arguments.length>1){if(!Xe(t=e))throw new TypeError(Le("1MB2V,FD",t));t=Pe({},e)}else t={};return t.objectMode=!0,new tt(r,t)})),q(tt,"factory",(function(r){var e;return e=arguments.length?Pe({},r):{},t;function t(r){return new tt(r,e)}})),tt}));
//# sourceMappingURL=index.js.map