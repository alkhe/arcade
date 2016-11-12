!function(t){function e(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return t[r].call(u.exports,u,u.exports,e),u.l=!0,u.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=11)}([function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return null!=t},r=function(t){return t.constructor===String},u=function(t){return t.constructor===Number},a=function(t){return t.constructor===Boolean},o=function(t){return t.constructor===Array},i=function(t){return t.constructor===Object},l=function(t){return r(t)||u(t)},c=function(t){return t.label},f=function(t){return t.meta},d=function(t){return t.children},s=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};e.exists=n,e.isString=r,e.isNumber=u,e.isBoolean=a,e.isArray=o,e.isObject=i,e.isContent=l,e.getLabel=c,e.getMeta=f,e.getChildren=d,e.own=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(0),a=(n(5),n(4)),o=r(a),i=function t(e){if((0,u.isContent)(e))return o.default.text(String(e));var n=o.default.element((0,u.getLabel)(e)),r=(0,u.getMeta)(e);for(var a in r)(0,u.own)(r,a)&&o.default.setProperty(n,a,r[a]);for(var i=(0,u.getChildren)(e),l=0;l<i.length;l++)o.default.append(n,t(i[l]));return n};e.default=i},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n(10),o=r(a),i=n(0),l=function(t){return(0,i.isArray)(t)?(0,o.default)(t):[t]},c=function(t,e,n){return(0,i.isString)(t)?{label:t,meta:e,children:(0,i.exists)(n)?l(n):[]}:((0,i.exists)(n)?e=u({},e,{children:l(n)}):(0,i.own)(e,"children")&&(e=u({},e,{children:l(e.children)})),{label:t,meta:e})};e.default=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="DESCEND_DIFF",r="INSERTION",u="DELETION",a="SUBSTITUTION",o="PROPS_PATCH",i="DEL_PROP",l="UPD_PROP";e.DESCEND_DIFF=n,e.INSERTION=r,e.DELETION=u,e.SUBSTITUTION=a,e.PROPS_PATCH=o,e.DEL_PROP=i,e.UPD_PROP=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),u=n(5);e.default={text:function(t){return document.createTextNode(t)},element:function(t){return document.createElement(t)},append:function(t,e){return t.appendChild(e)},insertBefore:function(t,e,n){return t.insertBefore(e,n)},remove:function(t,e){return t.removeChild(e)},replace:function(t,e,n){return t.replaceChild(n,e)},setProperty:function(t,e,n){if((0,u.isDataAttribute)(e))t.dataset[(0,u.getDataString)(e)]=n;else if("style"===e){var a=t.style;for(var o in n)(0,r.own)(n,o)&&(a[o]=n[o])}else t[e]=n},deleteProperty:function(t,e){if((0,u.isDataAttribute)(e))delete t.dataset[(0,u.getDataString)(e)];else if("style"===e){var n=t.style;for(var a in prop)(0,r.own)(prop,a)&&delete n[a]}else delete t[e]}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t.startsWith("data-")},r=function(t){return u(t.substring(5))},u=function(t){for(var e=t.split(/-/),n=e.length>0?e[0]:"",r=1;r<e.length;r++){var u=e[r];n+=(u[0]||"").toUpperCase()+u.substring(1)}return n};e.isDataAttribute=n,e.getDataString=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),u=n(3),a=function(t,e){return{type:u.DESCEND_DIFF,index:t,diffs:e}},o=function(t,e){return{type:u.INSERTION,index:t,node:e}},i=function(t){return{type:u.DELETION,index:t}},l=function(t,e){return{type:u.SUBSTITUTION,index:t,node:e}},c=function(t,e){return{type:u.PROPS_PATCH,index:t,patches:e}},f=function(t,e){return{type:u.UPD_PROP,key:t,prop:e}},d=function(t){return{type:u.DEL_PROP,key:t}},s=function(t,e){var n=[];for(var u in t)if((0,r.own)(t,u)){var a=(t[u],(0,r.own)(e,u));a||n.push(d(u))}for(var o in e)if((0,r.own)(e,o)){var i=e[o],l=(0,r.own)(t,o);l&&t[o]===i||n.push(f(o,i))}return n},p=function t(e,n){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(e===n)return null;if((0,r.isContent)(e)||(0,r.isContent)(n))return l(u,n);var f=(0,r.getLabel)(e),d=(0,r.getLabel)(n);if(f!==d)return l(u,n);for(var p=(0,r.getMeta)(e),v=(0,r.getMeta)(n),b=s(p,v),y=b.length>0?[c(u,b)]:[],g=(0,r.getChildren)(e),h=(0,r.getChildren)(n),O=g.length,P=h.length,m=Math.min(O,P),_=P-O,N=0;N<m;N++){var S=t(g[N],h[N],N);(0,r.exists)(S)&&y.push(S)}return _<0?g.slice(m,m-_).map(function(t,e){return i(e+m)}).forEach(function(t){return y.push(t)}):_>0&&h.slice(m,m+_).map(function(t,e){return o(e+m,t)}).forEach(function(t){return y.push(t)}),y.length>0?a(u,y):null};e.default=p},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(3),a=n(1),o=r(a),i=n(4),l=r(i),c=function t(e,n){for(var r=0,a=0;a<n.length;a++){var i=n[a],c=e.childNodes,f=i.index+r;switch(i.type){case u.DESCEND_DIFF:t(c[f],i.diffs);break;case u.INSERTION:var d=(0,o.default)(i.node);f<c.length?l.default.insertBefore(e,c[f],d):l.default.append(e,d),r++;break;case u.DELETION:l.default.remove(e,c[f]),r--;break;case u.SUBSTITUTION:l.default.replace(e,c[f],(0,o.default)(i.node));break;case u.PROPS_PATCH:i.patches.forEach(function(t){t.type===u.DEL_PROP?l.default.deleteProperty(e,t.key):t.type===u.UPD_PROP&&l.default.setProperty(e,t.key,t.prop)})}}};e.default=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(0),a=n(2),o=r(a),i=function t(e,n){for(;;){if(!(0,u.isObject)(e))return e;var r=(0,u.getLabel)(e),a=(0,u.getMeta)(e);if((0,u.isString)(r))return(0,o.default)(r,a,(0,u.getChildren)(e).map(function(e){return t(e,n)}));e=r(a,n)}};e.default=i},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){function n(t,e){for(var n=-1,r=e.length,u=t.length;++n<r;)t[u+n]=e[n];return t}function r(t,e,a,o,i){var l=-1,c=t.length;for(a||(a=u),i||(i=[]);++l<c;){var f=t[l];e>0&&a(f)?e>1?r(f,e-1,a,o,i):n(i,f):o||(i[i.length]=f)}return i}function u(t){return E(t)||o(t)||!!(D&&t&&t[D])}function a(t){var e=t?t.length:0;return e?r(t,p):[]}function o(t){return l(t)&&_.call(t,"callee")&&(!T.call(t,"callee")||N.call(t)==b)}function i(t){return null!=t&&f(t.length)&&!c(t)}function l(t){return s(t)&&i(t)}function c(t){var e=d(t)?N.call(t):"";return e==y||e==g}function f(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=v}function d(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function s(t){return!!t&&"object"==typeof t}var p=1/0,v=9007199254740991,b="[object Arguments]",y="[object Function]",g="[object GeneratorFunction]",h="object"==typeof e&&e&&e.Object===Object&&e,O="object"==typeof self&&self&&self.Object===Object&&self,P=h||O||Function("return this")(),m=Object.prototype,_=m.hasOwnProperty,N=m.toString,S=P.Symbol,T=m.propertyIsEnumerable,D=S?S.isConcatSpreadable:void 0,E=Array.isArray;t.exports=a}).call(e,n(9))},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var u=n(2),a=r(u),o=n(8),i=r(o),l=n(6),c=r(l),f=n(1),d=r(f),s=n(7),p=r(s),v=uibench,b=v.init,y=v.run,g=function(t){var e=t.text;return(0,a.default)("td",{className:"TableCell",onclick:function(t){return console.log(e),t.stopPropagation()}},[e])},h=function(t){var e=t.data,n=e.active,r=e.props,u=e.id,o=n?"TableRow active":"TableRow",i=r.map(function(t){return(0,a.default)(g,{text:t},[])});return(0,a.default)("tr",{className:o,"data-id":u},[(0,a.default)(g,{text:"#"+u},[]),i])},O=function(t){var e=t.data.items,n=e.map(function(t){return(0,a.default)(h,{data:t},[])});return(0,a.default)("table",{className:"Table"},[(0,a.default)("tbody",{},[n])])},P=function(t){var e=t.data,n=e.id,r=e.time,u={borderRadius:(r%10).toString()+"px",background:"rgba(0,0,0,"+(.5+r%10/10).toString()+")"};return(0,a.default)("div",{className:"AnimBox","data-id":n,style:u},[])},m=function(t){var e=t.data.items,n=e.map(function(t){return(0,a.default)(P,{data:t},[])});return(0,a.default)("div",{className:"Anim"},[n])},_=function(t){var e=t.data.id;return(0,a.default)("li",{className:"TreeLeaf"},[e])},N=function t(e){var n=e.data.children,r=n.map(function(e){return e.container?(0,a.default)(t,{data:e},[]):(0,a.default)(_,{data:e},[])});return(0,a.default)("ul",{className:"TreeNode"},[r])},S=function(t){var e=t.data.root;return(0,a.default)("div",{className:"Tree"},[(0,a.default)(N,{data:e},[])])},T=function(t){var e=t.data,n=t.data.location,r="table"===n?(0,a.default)(O,{data:e.table},[]):"anim"===n?(0,a.default)(m,{data:e.anim},[]):"tree"===n?(0,a.default)(S,{data:e.tree},[]):null;return(0,a.default)("div",{className:"Main"},[r])};b("Arcade","0.1.0"),document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("root"),e=(0,i.default)((0,a.default)("div",{},[])),n=(0,d.default)(e);t.appendChild(n);var r=function(n){var r=(0,i.default)(n),u=(0,c.default)(e,r);null!=u&&(0,p.default)(t,[u]),e=r};y(function(t){return r((0,a.default)(T,{data:t},[]))},function(t){return r((0,a.default)("pre",{},[JSON.stringify(t,null," ")]))})})}]);