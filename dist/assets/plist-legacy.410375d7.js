!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==t.return||t.return()}finally{if(u)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.b3210e57.js","./File-legacy.03d7469e.js","./icon-legacy.e01159c8.js","./index-legacy.4e4edafa.js","./Layout-legacy.909db56e.js","./useTitle-legacy.8ffb9cd6.js","./index-legacy.50965148.js","./FolderTree-legacy.c2b107af.js","./index-legacy.691e25ef.js"],(function(n){"use strict";var t,r,i,o,a,u;return{setters:[function(e){t=e.a,r=e.m,i=e.h,o=e.C,a=e.a1},function(e){u=e.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){n("default",(function(){var n=t(),c=e(r(!1),2),l=c[0],f=c[1];return i(u,{get children(){return i(o,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+a.raw_url},onClick:function(){f(!0)},get children(){return n("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
