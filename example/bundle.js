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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var exists = function exists(x) {
	return x != null;
};
var isString = function isString(x) {
	return x.constructor === String;
};
var isNumber = function isNumber(x) {
	return x.constructor === Number;
};
var isBoolean = function isBoolean(x) {
	return x.constructor === Boolean;
};
var isArray = function isArray(x) {
	return x.constructor === Array;
};
var isObject = function isObject(x) {
	return x.constructor === Object;
};
var isContent = function isContent(x) {
	return isString(x) || isNumber(x);
};

var getLabel = function getLabel(x) {
	return x.label;
};
var getMeta = function getMeta(x) {
	return x.meta;
};
var getChildren = function getChildren(x) {
	return x.children;
};

var own = function own(obj, k) {
	return Object.prototype.hasOwnProperty.call(obj, k);
};

exports.exists = exists;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isBoolean = isBoolean;
exports.isArray = isArray;
exports.isObject = isObject;
exports.isContent = isContent;
exports.getLabel = getLabel;
exports.getMeta = getMeta;
exports.getChildren = getChildren;
exports.own = own;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.UPD_PROP = exports.DEL_PROP = exports.REPLACE_CHILDREN = exports.PROPS_PATCH = exports.SUBSTITUTION = exports.DELETION = exports.INSERTION = exports.DESCEND_DIFF = exports.diff = undefined;

var _util = __webpack_require__(0);

var enumerate = function enumerate() {
	var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	return function () {
		return start++;
	};
};
/*
const node_diffs = enumerate()

const INSERTION = node_diffs()
const DELETION = node_diffs()
const SUBSTITUTION = node_diffs()
const PROPS_PATCH = node_diffs()
const REPLACE_CHILDREN = node_diffs()

const prop_diffs = enumerate()

const DEL_PROP = prop_diffs()
const UPD_PROP = prop_diffs()

const descend = (index, diffs) => [DESCEND_DIFF, index, diffs]
const insertion = (index, node) => [INSERTION, index, node]
const deletion = index => [DELETION, index]
const substitution = (index, node) => [SUBSTITUTION, index, node]
const props_patch = (index, patches) => [PROPS_PATCH, index, patches]
const replace_children = (index, nodes) => [REPLACE_CHILDREN, index, nodes]

const upd_prop = (k, new_prop) => [UPD_PROP, k, new_prop]
const del_prop = k => [DEL_PROP, k]
*/

var DESCEND_DIFF = 'DESCEND_DIFF';
var INSERTION = 'INSERTION';
var DELETION = 'DELETION';
var SUBSTITUTION = 'SUBSTITUTION';
var PROPS_PATCH = 'PROPS_PATCH';
var REPLACE_CHILDREN = 'REPLACE_CHILDREN';

var DEL_PROP = 'DEL_PROP';
var UPD_PROP = 'UPD_PROP';

var descend = function descend(index, diffs) {
	return { type: DESCEND_DIFF, index: index, diffs: diffs };
};
var insertion = function insertion(index, node) {
	return { type: INSERTION, index: index, node: node };
};
var deletion = function deletion(index) {
	return { type: DELETION, index: index };
};
var substitution = function substitution(index, node) {
	return { type: SUBSTITUTION, index: index, node: node };
};
var props_patch = function props_patch(index, patches) {
	return { type: PROPS_PATCH, index: index, patches: patches };
};
var replace_children = function replace_children(index, nodes) {
	return { type: REPLACE_CHILDREN, index: index, nodes: nodes };
};

var upd_prop = function upd_prop(key, prop) {
	return { type: UPD_PROP, key: key, prop: prop };
};
var del_prop = function del_prop(key) {
	return { type: DEL_PROP, key: key };
};

var diff_meta = function diff_meta(old_meta, new_meta) {
	var diffs = [];

	// if new_meta does not have a key on old_meta, produce a prop deletion
	for (var k in old_meta) {
		if ((0, _util.own)(old_meta, k)) {
			var old_prop = old_meta[k];
			var new_has_prop = (0, _util.own)(new_meta, k);
			if (!new_has_prop) {
				diffs.push(del_prop(k));
			}
		}
	} // if old_meta does not have a key on new_meta or that prop is outdated, produce a prop update
	for (var _k in new_meta) {
		if ((0, _util.own)(new_meta, _k)) {
			var new_prop = new_meta[_k];
			var old_has_prop = (0, _util.own)(old_meta, _k);
			if (!old_has_prop || old_meta[_k] !== new_prop) {
				diffs.push(upd_prop(_k, new_prop));
			}
		}
	}return diffs;
};

var diff = function diff(old_fnode, new_fnode) {
	var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	// Lemma 1
	// if identical fnodes, no diff required
	// note that this requires immutable data flow
	if (old_fnode === new_fnode) return null;

	// Lemma 2
	// if old or new node are content, substitute
	if ((0, _util.isContent)(old_fnode) || (0, _util.isContent)(new_fnode)) return substitution(index, new_fnode);

	// Lemma 3
	// if different labels, invalidate all
	var old_label = (0, _util.getLabel)(old_fnode);
	var new_label = (0, _util.getLabel)(new_fnode);

	if (old_label !== new_label) return substitution(index, new_fnode);

	// Lemma 4
	// if same labels, diff props
	var old_meta = (0, _util.getMeta)(old_fnode);
	var new_meta = (0, _util.getMeta)(new_fnode);

	var meta_diff = diff_meta(old_meta, new_meta);

	var diffs = meta_diff.length > 0 ? [props_patch(index, meta_diff)] : [];

	// Lemma 5
	// patch old and new for (smaller children.length) times
	// delete rest if old has more children
	// insert rest if new has more children
	var old_children = (0, _util.getChildren)(old_fnode);
	var new_children = (0, _util.getChildren)(new_fnode);
	var old_children_length = old_children.length;
	var new_children_length = new_children.length;

	var diff_len = Math.min(old_children_length, new_children_length);
	var remainder = new_children_length - old_children_length;

	// branching point
	for (var i = 0; i < diff_len; i++) {
		var child_diff = diff(old_children[i], new_children[i], i);
		if ((0, _util.exists)(child_diff)) {
			diffs.push(child_diff);
		}
	}

	if (remainder < 0) {
		// remainder is negative, old has more children
		old_children.slice(diff_len, diff_len - remainder).map(function (_, i) {
			return deletion(i + diff_len);
		}).forEach(function (x) {
			return diffs.push(x);
		});
	} else if (remainder > 0) {
		// remainder is positive, new has more children
		new_children.slice(diff_len, diff_len + remainder).map(function (node, i) {
			return insertion(i + diff_len, node);
		}).forEach(function (x) {
			return diffs.push(x);
		});
	}

	return diffs.length > 0 ? descend(index, diffs) : null;
};

exports.diff = diff;
exports.DESCEND_DIFF = DESCEND_DIFF;
exports.INSERTION = INSERTION;
exports.DELETION = DELETION;
exports.SUBSTITUTION = SUBSTITUTION;
exports.PROPS_PATCH = PROPS_PATCH;
exports.REPLACE_CHILDREN = REPLACE_CHILDREN;
exports.DEL_PROP = DEL_PROP;
exports.UPD_PROP = UPD_PROP;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

var api = {
	text: function text(string) {
		return document.createTextNode(string);
	},
	element: function element(label) {
		return document.createElement(label);
	},
	append: function append(node, element) {
		return node.appendChild(element);
	}
};

var render = function render(fnode) {
	if ((0, _util.isContent)(fnode)) return api.text(String(fnode));

	var el = api.element((0, _util.getLabel)(fnode));

	var meta = (0, _util.getMeta)(fnode);

	for (var k in meta) {
		if ((0, _util.own)(meta, k)) {
			el[k] = meta[k];
		}
	}var children = (0, _util.getChildren)(fnode);
	var frag = document.createDocumentFragment();

	for (var i = 0; i < children.length; i++) {
		api.append(frag, render(children[i]));
	}

	api.append(el, frag);

	return el;
};

exports.default = render;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hnode = exports.fnode = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = __webpack_require__(7);

var _lodash2 = _interopRequireDefault(_lodash);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// "first-order node"
// label is a string (Component id)
// meta is a map of attributes
// children are child nodes
// note that a first-order node can still have higher-order children
var fnode = function fnode(label, meta) {
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return { label: label, meta: meta, children: (0, _lodash2.default)(children) };
};

// "higher-order node"
// label is a function (Component id)
// meta is a map of props
var hnode = function hnode(label, meta) {
  var _meta = meta,
      children = _meta.children;

  if (children) {
    meta = _extends({}, meta, { children: (0, _util.isArray)(children) ? (0, _lodash2.default)(children) : [children] });
  }
  return { label: label, meta: meta };
};

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

exports.fnode = fnode;
exports.hnode = hnode;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _diff = __webpack_require__(1);

var _domRenderer = __webpack_require__(2);

var _domRenderer2 = _interopRequireDefault(_domRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patch = function patch(element, edits) {
	var delta = 0;
	var operations = [];

	for (var i = 0; i < edits.length; i++) {
		var edit = edits[i];
		var children = element.childNodes;
		var index = edit.index + delta;

		switch (edit.type) {
			case _diff.DESCEND_DIFF:
				patch(children[index], edit.diffs);
				break;
			case _diff.INSERTION:
				var artifact = (0, _domRenderer2.default)(edit.node);
				index < children.length ? element.insertBefore(children[index], artifact) : element.appendChild(artifact);
				delta++;
				break;
			case _diff.DELETION:
				element.removeChild(children[index]);
				delta--;
				break;
			case _diff.SUBSTITUTION:
				element.replaceChild(children[index], (0, _domRenderer2.default)(edit.node));
				break;
			case _diff.PROPS_PATCH:
				edit.patches.forEach(function (_ref) {
					var key = _ref.key,
					    prop = _ref.prop;
					return element[key] = prop;
				});
				break;
			default:
				break;
		}
	}
};

exports.default = patch;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

var _vnode = __webpack_require__(3);

// takes vnode tree
// tail-call optimization, collapse hnode into fnode
var expand = function expand(vnode) {
	for (;;) {
		if (!(0, _util.isObject)(vnode)) return vnode;

		var label = (0, _util.getLabel)(vnode);
		var meta = (0, _util.getMeta)(vnode);

		if ((0, _util.isString)(label)) {
			return (0, _vnode.fnode)(label, meta, (0, _util.getChildren)(vnode).map(expand));
		} else {
			vnode = label(meta);
			continue;
		}
	}
};

exports.default = expand;

/***/ },
/* 6 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Recursively flattens `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flattenDeep([1, [2, [3, [4]], 5]]);
 * // => [1, 2, 3, 4, 5]
 */
function flattenDeep(array) {
  var length = array ? array.length : 0;
  return length ? baseFlatten(array, INFINITY) : [];
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = flattenDeep;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _expand = __webpack_require__(5);

var _expand2 = _interopRequireDefault(_expand);

var _domRenderer = __webpack_require__(2);

var _domRenderer2 = _interopRequireDefault(_domRenderer);

var _diff = __webpack_require__(1);

var _domPatcher = __webpack_require__(4);

var _domPatcher2 = _interopRequireDefault(_domPatcher);

var _vnode = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var List = function List(props) {
	return (0, _vnode.fnode)('ol', {}, props.items.map(function (s) {
		return (0, _vnode.hnode)(ListItem, { children: s });
	}));
};

var ListItem = function ListItem(props) {
	return (0, _vnode.fnode)('li', {}, [props.children]);
};

var step = function step() {
	return (0, _domPatcher2.default)(app, (0, _diff.diff)(cvt0, cvt1).diffs);
};
// let step = () => console.log('asd')

var avt0 = (0, _vnode.fnode)('div', {
	'onclick': step
}, ['\n\t\t', (0, _vnode.hnode)(List, {
	'items': ['Carlos', 'Raphael', 'Josephine']
}), '\n\t']);

var cvt0 = (0, _expand2.default)(avt0);

var avt1 = (0, _vnode.fnode)('div', {
	'onclick': step
}, ['\n\t\t', (0, _vnode.hnode)(List, {
	'items': ['Carlos', 'Raphael', 'Josephine', 'Chad']
}), '\n\t']);

var cvt1 = (0, _expand2.default)(avt1);

var root = document.getElementById('root');
var app = (0, _domRenderer2.default)(cvt0);

root.appendChild(app);

/***/ }
/******/ ]);