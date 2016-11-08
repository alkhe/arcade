/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return isString; });
/* unused harmony export isNumber */
/* unused harmony export isBoolean */
/* unused harmony export exists */
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return isContent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return getLabel; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return getMeta; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return getChildren; });
/* unused harmony export own */
const exists = x => x != null
const isString = x => x.constructor === String
const isNumber = x => x.constructor === Number
const isBoolean = x => x.constructor === Boolean
const isArray = x => x.constructor === Array
const isContent = x => isString(x) || isNumber(x)

const getLabel = x => x[0]
const getMeta = x => x[1]
const getChildren = x => x[2]

const own = (obj, k) => Object.prototype.hasOwnProperty.call(obj, k)




/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);


let api = {
	text: string => document.createTextNode(string),
	element: label => document.createElement(label)
}

const render = fnode => {
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["f" /* isContent */])(fnode)) return api.text(String(fnode))

	let el = api.element(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* getLabel */])(fnode))

	let children = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* getChildren */])(fnode)
	let frag = document.createDocumentFragment()

	for (let i = 0; i < children.length; i++) {
		frag.appendChild(render(children[i]))
	}

	el.appendChild(frag)

	return el
}

/* harmony default export */ exports["a"] = render;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);


// takes vnode tree
// tail-call optimization, collapse hnode into fnode
const expand = vnode => {
	for (;;) {
		if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* isArray */])(vnode)) return vnode

		const label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* getLabel */])(vnode)
		const meta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getMeta */])(vnode)

		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* isString */])(label)) {
			return [label, meta, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* getChildren */])(vnode).map(expand)]
		} else {
			vnode = label(meta)
			continue
		}
	}
}

/* harmony default export */ exports["a"] = expand;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return fnode; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return hnode; });
// "first-order node"
// label is a string (Component id)
// meta is a map of attributes
// children are child nodes
// note that a first-order node can still have higher-order children
const fnode = (label, meta, children = []) => [label, meta, children]

// "higher-order node"
// label is a function (Component id)
// meta is a map of props
const hnode = (label, meta) => [label, meta]

/*
 * Label : String | Function
 * Meta : { String Any }
 * Content : String | Number
 * Children : [VNode]
 *
 * CNode : (String, Meta, Children)
 * HNode : (Function, Meta)
 *
 * VNode : (Label, Meta) | Content
 *
 * VNode <= CNode
 * (label, meta, children)
 * =>
 * (label, meta)
 *
 * VNode <= HNode
 * (label, meta)
 * =>
 * (label, meta)
 */




/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_expand__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_dom_renderer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_vnode__ = __webpack_require__(3);




/* jsx
List = props => {
	let items = props.items.map(i => <ListItem>{ i }</ListItem)
	return <ol>{ items }</ol>
}

ListItem = props => (
	<li>
		{ props.children }
	</li>
)
*/

let List = props =>
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_vnode__["a" /* fnode */])('ol', {}, props.items.map(s => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_vnode__["b" /* hnode */])(ListItem, { children: s })))

let ListItem = props => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_vnode__["a" /* fnode */])('li', {}, [props.children])

let avt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_vnode__["a" /* fnode */])(List, { items: ['Carlos', 'Raphael', 'Josephine'] })

let cvt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_expand__["a" /* default */])(avt)

document.getElementById('root').appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_dom_renderer__["a" /* default */])(cvt))


/***/ }
/******/ ]);