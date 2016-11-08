!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=33)}([function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return null!=t},r=function(t){return t.constructor===String},o=function(t){return t.constructor===Number},u=function(t){return t.constructor===Boolean},i=function(t){return t.constructor===Array},c=function(t){return t.constructor===Object},a=function(t){return r(t)||o(t)},f=function(t){return t.label},l=function(t){return t.meta},s=function(t){return t.children},d=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};e.exists=n,e.isString=r,e.isNumber=o,e.isBoolean=u,e.isArray=i,e.isObject=c,e.isContent=a,e.getLabel=f,e.getMeta=l,e.getChildren=s,e.own=d},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.hnode=e.fnode=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=n(30),i=r(u),c=n(0),a=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return{label:t,meta:e,children:(0,i.default)(n)}},f=function(t,e){var n=e,r=n.children;return r&&(e=o({},e,{children:(0,c.isArray)(r)?(0,i.default)(r):[r]})),{label:t,meta:e}};e.fnode=a,e.hnode=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UPD_PROP=e.DEL_PROP=e.PROPS_PATCH=e.SUBSTITUTION=e.DELETION=e.INSERTION=e.DESCEND_DIFF=e.diff=void 0;var r=n(0),o="DESCEND_DIFF",u="INSERTION",i="DELETION",c="SUBSTITUTION",a="PROPS_PATCH",f="DEL_PROP",l="UPD_PROP",s=function(t,e){return{type:o,index:t,diffs:e}},d=function(t,e){return{type:u,index:t,node:e}},p=function(t){return{type:i,index:t}},h=function(t,e){return{type:c,index:t,node:e}},v=function(t,e){return{type:a,index:t,patches:e}},y=function(t,e){return{type:l,key:t,prop:e}},b=function(t){return{type:f,key:t}},g=function(t,e){var n=[];for(var o in t)if((0,r.own)(t,o)){var u=(t[o],(0,r.own)(e,o));u||n.push(b(o))}for(var i in e)if((0,r.own)(e,i)){var c=e[i],a=(0,r.own)(t,i);a&&t[i]===c||n.push(y(i,c))}return n},m=function t(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(e===n)return null;if((0,r.isContent)(e)||(0,r.isContent)(n))return h(o,n);var u=(0,r.getLabel)(e),i=(0,r.getLabel)(n);if(u!==i)return h(o,n);for(var c=(0,r.getMeta)(e),a=(0,r.getMeta)(n),f=g(c,a),l=f.length>0?[v(o,f)]:[],y=(0,r.getChildren)(e),b=(0,r.getChildren)(n),m=y.length,w=b.length,O=Math.min(m,w),T=w-m,j=0;j<O;j++){var E=t(y[j],b[j],j);(0,r.exists)(E)&&l.push(E)}return T<0?y.slice(O,O-T).map(function(t,e){return p(e+O)}).forEach(function(t){return l.push(t)}):T>0&&b.slice(O,O+T).map(function(t,e){return d(e+O,t)}).forEach(function(t){return l.push(t)}),l.length>0?s(o,l):null};e.diff=m,e.DESCEND_DIFF=o,e.INSERTION=u,e.DELETION=i,e.SUBSTITUTION=c,e.PROPS_PATCH=a,e.DEL_PROP=f,e.UPD_PROP=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o={text:function(t){return document.createTextNode(t)},element:function(t){return document.createElement(t)},append:function(t,e){return t.appendChild(e)}},u=function t(e){if((0,r.isContent)(e))return o.text(String(e));var n=o.element((0,r.getLabel)(e)),u=(0,r.getMeta)(e);for(var i in u)(0,r.own)(u,i)&&(n[i]=u[i]);for(var c=(0,r.getChildren)(e),a=0;a<c.length;a++)o.append(n,t(c[a]));return n};e.default=u},function(t,e,n){"use strict";var r=n(20),o=r.a.Symbol;e.a=o},function(t,e,n){"use strict";function r(t){if(!n.i(i.a)(t)||n.i(o.a)(t)!=c)return!1;var e=n.i(u.a)(t);if(null===e)return!0;var r=s.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&l.call(r)==d}var o=n(14),u=n(16),i=n(21),c="[object Object]",a=Function.prototype,f=Object.prototype,l=a.toString,s=f.hasOwnProperty,d=l.call(Object);e.a=r},function(t,e,n){"use strict";function r(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};if(1===e.length)return e[0];var r=e[e.length-1],o=e.slice(0,-1);return function(){return o.reduceRight(function(t,e){return e(t)},r.apply(void 0,arguments))}}e.a=r},function(t,e,n){"use strict";function r(t,e,u){function a(){g===b&&(g=b.slice())}function f(){return y}function l(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var e=!0;return a(),g.push(t),function(){if(e){e=!1,a();var n=g.indexOf(t);g.splice(n,1)}}}function s(t){if(!n.i(o.a)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(m)throw new Error("Reducers may not dispatch actions.");try{m=!0,y=v(y,t)}finally{m=!1}for(var e=b=g,r=0;r<e.length;r++)e[r]();return t}function d(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");v=t,s({type:c.INIT})}function p(){var t,e=l;return t={subscribe:function(t){function n(){t.next&&t.next(f())}if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");n();var r=e(n);return{unsubscribe:r}}},t[i.a]=function(){return this},t}var h;if("function"==typeof e&&"undefined"==typeof u&&(u=e,e=void 0),"undefined"!=typeof u){if("function"!=typeof u)throw new Error("Expected the enhancer to be a function.");return u(r)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var v=t,y=e,b=[],g=b,m=!1;return s({type:c.INIT}),h={dispatch:s,subscribe:l,getState:f,replaceReducer:d},h[i.a]=p,h}var o=n(6),u=n(26),i=n.n(u);n.d(e,"a",function(){return c}),e.b=r;var c={INIT:"@@redux/INIT"}},function(t,e,n){"use strict"},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.run=e.connect=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=n(13),i=r(u),c=n(4),a=r(c),f=n(3),l=n(12),s=r(l),d=n(2),p=n(32),h=r(p),v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return{}},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return{dispatch:t}};return function(n){return function(r,u){return(0,d.hnode)(n,o({},r,t(u.store.getState()),e(u.store.dispatch)))}}},y=function(t,e,n){var r=[],o=(0,i.default)((0,d.hnode)(e,{}),{store:n}),u=void 0;n.subscribe(function(t){var u=(0,i.default)((0,d.hnode)(e,{}),{store:n});r.push((0,f.diff)(o,u).diffs),o=u}),(0,h.default)(function(){u=(0,a.default)(o),t.appendChild(u),(0,h.default)(c)});var c=function t(){for(var e=0;e<r.length;e++)(0,s.default)(u,r[e]);r=[],(0,h.default)(t)}};e.connect=v,e.run=y},function(t,e,n){"use strict";var r=n(8),o=n(25),u=n(24),i=n(23),c=n(7);n(9);n.d(e,"createStore",function(){return r.b}),n.d(e,"combineReducers",function(){return o.a}),n.d(e,"bindActionCreators",function(){return u.a}),n.d(e,"applyMiddleware",function(){return i.a}),n.d(e,"compose",function(){return c.a})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),u=n(4),i=r(u),c=function t(e,n){for(var r=0,u=0;u<n.length;u++){var c=n[u],a=e.childNodes,f=c.index+r;switch(c.type){case o.DESCEND_DIFF:t(a[f],c.diffs);break;case o.INSERTION:var l=(0,i.default)(c.node);f<a.length?e.insertBefore(a[f],l):e.appendChild(l),r++;break;case o.DELETION:e.removeChild(a[f]),r--;break;case o.SUBSTITUTION:e.replaceChild((0,i.default)(c.node),a[f]);break;case o.PROPS_PATCH:c.patches.forEach(function(t){var n=t.key,r=t.prop;return e[n]=r})}}};e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(2),u=function t(e,n){for(;;){if(!(0,r.isObject)(e))return e;var u=(0,r.getLabel)(e),i=(0,r.getMeta)(e);if((0,r.isString)(u))return(0,o.fnode)(u,i,(0,r.getChildren)(e).map(function(e){return t(e,n)}));e=u(i,n)}};e.default=u},function(t,e,n){"use strict";function r(t){return null==t?void 0===t?a:c:(t=Object(t),f&&f in t?n.i(u.a)(t):n.i(i.a)(t))}var o=n(5),u=n(17),i=n(18),c="[object Null]",a="[object Undefined]",f=o.a?o.a.toStringTag:void 0;e.a=r},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(e,n(1))},function(t,e,n){"use strict";var r=n(19),o=n.i(r.a)(Object.getPrototypeOf,Object);e.a=o},function(t,e,n){"use strict";function r(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=c.call(t);return r&&(e?t[a]=n:delete t[a]),o}var o=n(5),u=Object.prototype,i=u.hasOwnProperty,c=u.toString,a=o.a?o.a.toStringTag:void 0;e.a=r},function(t,e,n){"use strict";function r(t){return u.call(t)}var o=Object.prototype,u=o.toString;e.a=r},function(t,e,n){"use strict";function r(t,e){return function(n){return t(e(n))}}e.a=r},function(t,e,n){"use strict";var r=n(15),o="object"==typeof self&&self&&self.Object===Object&&self,u=r.a||o||Function("return this")();e.a=u},function(t,e,n){"use strict";function r(t){return null!=t&&"object"==typeof t}e.a=r},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function u(t){if(s===clearTimeout)return clearTimeout(t);if((s===r||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(t);try{return s(t)}catch(e){try{return s.call(null,t)}catch(e){return s.call(this,t)}}}function i(){v&&p&&(v=!1,p.length?h=p.concat(h):y=-1,h.length&&c())}function c(){if(!v){var t=o(i);v=!0;for(var e=h.length;e;){for(p=h,h=[];++y<e;)p&&p[y].run();y=-1,e=h.length}p=null,v=!1,u(t)}}function a(t,e){this.fun=t,this.array=e}function f(){}var l,s,d=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{s="function"==typeof clearTimeout?clearTimeout:r}catch(t){s=r}}();var p,h=[],v=!1,y=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new a(t,e)),1!==h.length||v||o(c)},a.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=f,d.addListener=f,d.once=f,d.off=f,d.removeListener=f,d.removeAllListeners=f,d.emit=f,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";function r(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(n,r,i){var c=t(n,r,i),a=c.dispatch,f=[],l={getState:c.getState,dispatch:function(t){return a(t)}};return f=e.map(function(t){return t(l)}),a=o.a.apply(void 0,f)(c.dispatch),u({},c,{dispatch:a})}}}var o=n(7);e.a=r;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){"use strict";function r(t,e){return function(){return e(t.apply(void 0,arguments))}}function o(t,e){if("function"==typeof t)return r(t,e);if("object"!=typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(t),o={},u=0;u<n.length;u++){var i=n[u],c=t[i];"function"==typeof c&&(o[i]=r(c,e))}return o}e.a=o},function(t,e,n){"use strict";function r(t,e){var n=e&&e.type,r=n&&'"'+n.toString()+'"'||"an action";return"Given action "+r+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function o(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:i.a.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:o}))throw new Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+i.a.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function u(t){for(var e=Object.keys(t),n={},u=0;u<e.length;u++){var i=e[u];"function"==typeof t[i]&&(n[i]=t[i])}var c,a=Object.keys(n);try{o(n)}catch(t){c=t}return function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];if(c)throw c;for(var o=!1,u={},i=0;i<a.length;i++){var f=a[i],l=n[f],s=t[f],d=l(s,e);if("undefined"==typeof d){var p=r(f,e);throw new Error(p)}u[f]=d,o=o||d!==s}return o?u:t}}var i=n(8);n(6),n(9);e.a=u},function(t,e,n){t.exports=n(27)},function(t,e,n){"use strict";(function(t,r){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u,i=n(28),c=o(i);u="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof t?t:r;var a=(0,c.default)(u);e.default=a}).call(e,n(1),n(29)(t))},function(t,e){"use strict";function n(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,configurable:!1,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,configurable:!1,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){(function(e){function n(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}function r(t,e,u,i,c){var a=-1,f=t.length;for(u||(u=o),c||(c=[]);++a<f;){var l=t[a];e>0&&u(l)?e>1?r(l,e-1,u,i,c):n(c,l):i||(c[c.length]=l)}return c}function o(t){return x(t)||i(t)||!!(_&&t&&t[_])}function u(t){var e=t?t.length:0;return e?r(t,p):[]}function i(t){return a(t)&&T.call(t,"callee")&&(!P.call(t,"callee")||j.call(t)==v)}function c(t){return null!=t&&l(t.length)&&!f(t)}function a(t){return d(t)&&c(t)}function f(t){var e=s(t)?j.call(t):"";return e==y||e==b}function l(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=h}function s(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function d(t){return!!t&&"object"==typeof t}var p=1/0,h=9007199254740991,v="[object Arguments]",y="[object Function]",b="[object GeneratorFunction]",g="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,w=g||m||Function("return this")(),O=Object.prototype,T=O.hasOwnProperty,j=O.toString,E=w.Symbol,P=O.propertyIsEnumerable,_=E?E.isConcatSpreadable:void 0,x=Array.isArray;t.exports=u}).call(e,n(1))},function(t,e,n){(function(e){(function(){var n,r,o;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-o)/1e6},r=e.hrtime,n=function(){var t;return t=r(),1e9*t[0]+t[1]},o=n()):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(e,n(22))},function(t,e,n){(function(e){for(var r=n(31),o="undefined"==typeof window?e:window,u=["moz","webkit"],i="AnimationFrame",c=o["request"+i],a=o["cancel"+i]||o["cancelRequest"+i],f=0;!c&&f<u.length;f++)c=o[u[f]+"Request"+i],a=o[u[f]+"Cancel"+i]||o[u[f]+"CancelRequest"+i];if(!c||!a){var l=0,s=0,d=[],p=1e3/60;c=function(t){if(0===d.length){var e=r(),n=Math.max(0,p-(e-l));l=n+e,setTimeout(function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(l)}catch(t){setTimeout(function(){throw t},0)}},Math.round(n))}return d.push({handle:++s,callback:t,cancelled:!1}),s},a=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}t.exports=function(t){return c.call(o,t)},t.exports.cancel=function(){a.apply(o,arguments)},t.exports.polyfill=function(){o.requestAnimationFrame=c,o.cancelAnimationFrame=a}}).call(e,n(1))},function(t,e,n){"use strict";var r=n(2),o=n(10),u=n(11),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1];switch(e.type){case"ADD_ITEM":return t.concat(e.item);default:return t}},c="",a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments[1];switch(e.type){case"SET_VALUE":return e.value;case"ADD_ITEM":return c;default:return t}},f=(0,u.createStore)((0,u.combineReducers)({items:i,text:a})),l=function(t){var e=t.items;return(0,r.fnode)("ol",{},["\n\t\t",e.map(function(t){return(0,r.hnode)(s,{children:[t]})}),"\n\t"])},s=function(t){var e=t.children;return(0,r.fnode)("li",{},[e])},d=function(t){var e=t.items,n=t.text,o=t.setValue,u=t.addItem;return(0,r.fnode)("div",{},["\n\t\t",(0,r.fnode)("input",{oninput:function(t){return o(t.target.value)},onkeydown:function(t){13===t.keyCode&&u(n)},value:n},[]),"\n\t\t",(0,r.fnode)("button",{onclick:function(){return u(n)}},["Add Item"]),"\n\t\t",(0,r.hnode)(l,{items:e}),"\n\t"])};d=(0,o.connect)(function(t){return{items:t.items,text:t.text}},function(t){return{setValue:function(e){return t({type:"SET_VALUE",value:e})},addItem:function(e){return t({type:"ADD_ITEM",item:e})}}})(d),(0,o.run)(document.getElementById("root"),d,f)}]);