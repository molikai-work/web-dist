!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(k){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}n.wrap=f;var h={};function p(){}function d(){}function y(){}var v={};l(v,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(P([])));m&&m!==r&&o.call(m,a)&&(v=m);var b=y.prototype=p.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(e,n){function r(i,a,c,u){var l=s(e[i],e,a);if("throw"!==l.type){var f=l.arg,h=f.value;return h&&"object"==t(h)&&o.call(h,"__await")?n.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var i;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}}function O(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=y,l(b,"constructor",y),l(y,"constructor",d),d.displayName=l(y,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},n.awrap=function(t){return{__await:t}},w(j.prototype),l(j.prototype,c,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new j(f(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,u,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},n}function n(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy.b3210e57.js","./index-legacy.3315250e.js"],(function(t){"use strict";var n,i,a,c,u,l,f,s,h,p,d,y,v,g,m,b,w,j,O,x,E,S,P,L,k,T;return{setters:[function(t){n=t.dM,i=t.m,a=t.h,c=t.a8,u=t.o,l=t.x,f=t.e,s=t.a7,h=t.dG,p=t.cC,d=t.k,y=t.b,v=t.dH,g=t.a,m=t.aW,b=t.b9,w=t.r,j=t.S,O=t.dI,x=t.a1,E=t.aP,S=t.C,P=t.a4,L=t.ba,k=t.n},function(t){T=t.a}],execute:function(){function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){I(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function F(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?G(Object(n),!0).forEach((function(e){F(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function N(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight((function(t,e){return e(t)}),t)}}function q(t){return function e(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=t.length?t.apply(this,o):function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e.apply(n,[].concat(o,r))}}}function R(t){return{}.toString.call(t).includes("Object")}function z(t){return"function"==typeof t}var $=q((function(t,e){throw new Error(t[e]||t.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),U={changes:function(t,e){return R(e)||$("changeType"),Object.keys(e).some((function(e){return n=t,r=e,!Object.prototype.hasOwnProperty.call(n,r);var n,r}))&&$("changeField"),e},selector:function(t){z(t)||$("selectorType")},handler:function(t){z(t)||R(t)||$("handlerType"),R(t)&&Object.values(t).some((function(t){return!z(t)}))&&$("handlersType")},initial:function(t){var e;t||$("initialIsRequired"),R(t)||$("initialType"),e=t,Object.keys(e).length||$("initialContent")}};function Y(t,e){return z(e)?e(t.current):e}function B(t,e){return t.current=M(M({},t.current),e),e}function V(t,e,n){return z(e)?e(t.current):Object.keys(n).forEach((function(n){var r;return null===(r=e[n])||void 0===r?void 0:r.call(e,t.current[n])})),n}var H={create:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};U.initial(t),U.handler(e);var n={current:t},r=q(V)(n,e),o=q(B)(n),i=q(U.changes)(t),a=q(Y)(n);function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(t){return t};return U.selector(t),t(n.current)}function u(t){N(r,o,i,a)(t)}return[c,u]}};var W,J={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},K=(W=function(t,e){throw new Error(t[e]||t.default)},function t(){for(var e=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return r.length>=W.length?W.apply(this,r):function(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return t.apply(e,[].concat(r,o))}})(J),Q={config:function(t){var e;return t||K("configIsRequired"),e=t,{}.toString.call(e).includes("Object")||K("configType"),t.urls?(console.warn(J.deprecation),{paths:{vs:t.urls.monacoBase}}):t}};function X(t,e){return Object.keys(e).forEach((function(n){e[n]instanceof Object&&t[n]&&Object.assign(e[n],X(t[n],e[n]))})),_(_({},t),e)}var Z={type:"cancelation",msg:"operation is manually canceled"};function tt(t){var e=!1,n=new Promise((function(n,r){t.then((function(t){return e?r(Z):n(t)})),t.catch(r)}));return n.cancel=function(){return e=!0},n}var et,nt,rt=H.create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}),ot=(nt=2,function(t){if(Array.isArray(t))return t}(et=rt)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(et,nt)||function(t,e){if(t){if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(t,e):void 0}}(et,nt)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),it=ot[0],at=ot[1];function ct(t){return document.body.appendChild(t)}function ut(t){var e,n,r=it((function(t){return{config:t.config,reject:t.reject}})),o=(e="".concat(r.config.paths.vs,"/loader.js"),n=document.createElement("script"),e&&(n.src=e),n);return o.onload=function(){return t()},o.onerror=r.reject,o}function lt(){var t=it((function(t){return{config:t.config,resolve:t.resolve,reject:t.reject}})),e=window.require;e.config(t.config),e(["vs/editor/editor.main"],(function(e){ft(e),t.resolve(e)}),(function(e){t.reject(e)}))}function ft(t){it().monaco||at({monaco:t})}var st,ht=new Promise((function(t,e){return at({resolve:t,reject:e})})),pt={config:function(t){var e=Q.config(t),n=e.monaco,r=C(e,["monaco"]);at((function(t){return{config:X(t.config,r),monaco:n}}))},init:function(){var t=it((function(t){return{monaco:t.monaco,isInitialized:t.isInitialized,resolve:t.resolve}}));if(!t.isInitialized){if(at({isInitialized:!0}),t.monaco)return t.resolve(t.monaco),tt(ht);if(window.monaco&&window.monaco.editor)return ft(window.monaco),t.resolve(window.monaco),tt(ht);!function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight((function(t,e){return e(t)}),t)}}(ct,ut)(lt)}return tt(ht)},__getMonacoInstance:function(){return it((function(t){return t.monaco}))}};pt.config({paths:{vs:n}});var dt=function(t){var e=o(i(!0),2),n=e[0],r=e[1];return pt.init().then((function(t){st=t,r(!1)})),a(c,{get loading(){return n()},get children(){return a(yt,t)}})},yt=function(t){var e,n,r;return u((function(){n=st.editor.create(e,{value:t.value,theme:t.theme}),r=st.editor.createModel(t.value,t.language,t.path?st.Uri.parse(t.path):void 0),n.setModel(r),n.onDidChangeModelContent((function(){var e;null===(e=t.onChange)||void 0===e||e.call(t,n.getValue())}))})),l((function(){n.setValue(t.value)})),l((function(){st.editor.setTheme(t.theme)})),f((function(){r&&r.dispose(),n&&n.dispose()})),a(s,{w:"$full",h:"70vh",ref:function(t){"function"==typeof e?e(t):e=t}})};function vt(t){var n=p().colorMode,c=d((function(){return"light"===n()?"vs":"vs-dark"})),u=y().pathname,f=v(t.data),s=f.isString,h=f.text,I=o(i("utf-8"),2),A=I[0],_=I[1],C=o(i(h(A())),2),D=C[0],F=C[1],G=g(),M=o(m((function(){return b.put("/fs/put",D(),{headers:{"File-Path":encodeURIComponent(u()),"Content-Type":t.contentType||"text/plain"}})})),2),N=M[0],q=M[1];function R(){return z.apply(this,arguments)}function z(){return(z=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q();case 2:n=t.sent,L(n,(function(){k.success(G("global.save_success"))}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return l(w(A,(function(t){F(h(t))}))),T(["Control","S"],R),a(P,{w:"$full",alignItems:"start",spacing:"$2",pos:"relative",get children(){return[a(j,{when:!s,get children(){return a(O,{get encoding(){return A()},setEncoding:_,get referenceText(){return t.data}})}}),a(dt,{get value(){return h(A())},get theme(){return c()},get path(){return x.obj.name},onChange:function(t){F(t)}}),a(j,{get when(){return E("write")||x.write},get children(){return a(S,{get loading(){return N()},onClick:R,get children(){return G("global.save")}})}})]}})}t("default",(function(){var t=o(h(),1)[0];return a(c,{get loading(){return t.loading},get children(){return a(vt,{get data(){var e;return null===(e=t())||void 0===e?void 0:e.content},get contentType(){var e;return null===(e=t())||void 0===e?void 0:e.contentType}})}})}))}}}))}();
