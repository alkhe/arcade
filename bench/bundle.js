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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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

var _util = __webpack_require__(0);

var _domUtil = __webpack_require__(4);

var _domApi = __webpack_require__(3);

var _domApi2 = _interopRequireDefault(_domApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render(fnode) {
	if ((0, _util.isContent)(fnode)) return _domApi2.default.text(String(fnode));

	var el = _domApi2.default.element((0, _util.getLabel)(fnode));

	var meta = (0, _util.getMeta)(fnode);

	for (var k in meta) {
		if ((0, _util.own)(meta, k)) {
			_domApi2.default.setProperty(el, k, meta[k]);
		}
	}var children = (0, _util.getChildren)(fnode);

	for (var i = 0; i < children.length; i++) {
		_domApi2.default.append(el, render(children[i]));
	}

	return el;
};

exports.default = render;

/***/ },
/* 2 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var DESCEND_DIFF = 'DESCEND_DIFF';
var INSERTION = 'INSERTION';
var DELETION = 'DELETION';
var SUBSTITUTION = 'SUBSTITUTION';
var PROPS_PATCH = 'PROPS_PATCH';

var DEL_PROP = 'DEL_PROP';
var UPD_PROP = 'UPD_PROP';

exports.DESCEND_DIFF = DESCEND_DIFF;
exports.INSERTION = INSERTION;
exports.DELETION = DELETION;
exports.SUBSTITUTION = SUBSTITUTION;
exports.PROPS_PATCH = PROPS_PATCH;
exports.DEL_PROP = DEL_PROP;
exports.UPD_PROP = UPD_PROP;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

var _domUtil = __webpack_require__(4);

exports.default = {
	text: function text(string) {
		return document.createTextNode(string);
	},
	element: function element(label) {
		return document.createElement(label);
	},
	append: function append(node, element) {
		return node.appendChild(element);
	},
	insertBefore: function insertBefore(node, ref, element) {
		return node.insertBefore(ref, element);
	},
	remove: function remove(node, element) {
		return node.removeChild(element);
	},
	replace: function replace(node, ref, element) {
		return node.replaceChild(element, ref);
	},
	setProperty: function setProperty(node, key, prop) {
		if ((0, _domUtil.isDataAttribute)(key)) {
			node.dataset[(0, _domUtil.getDataString)(key)] = prop;
		} else if (key === 'style') {
			var style = node.style;

			for (var k in prop) {
				if ((0, _util.own)(prop, k)) {
					style[k] = prop[k];
				}
			}
		} else {
			node[key] = prop;
		}
	},
	deleteProperty: function deleteProperty(node, key) {
		if ((0, _domUtil.isDataAttribute)(key)) {
			delete node.dataset[(0, _domUtil.getDataString)(key)];
		} else if (key === 'style') {
			var style = node.style;

			for (var k in prop) {
				if ((0, _util.own)(prop, k)) {
					delete style[k];
				}
			}
		} else {
			delete node[key];
		}
	}
};

/***/ },
/* 4 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var isDataAttribute = function isDataAttribute(s) {
	return s.startsWith('data-');
};

var getDataString = function getDataString(s) {
	return kebabToCamel(s.substring(5));
};

var kebabToCamel = function kebabToCamel(s) {
	var words = s.split(/-/);

	var out = words.length > 0 ? words[0] : '';

	for (var i = 1; i < words.length; i++) {
		var word = words[i];
		out += (word[0] || '').toUpperCase() + word.substring(1);
	}

	return out;
};

exports.isDataAttribute = isDataAttribute;
exports.getDataString = getDataString;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = __webpack_require__(14);

var _lodash2 = _interopRequireDefault(_lodash);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalize = function normalize(children) {
	return (0, _util.isArray)(children) ? (0, _lodash2.default)(children) : [children];
};

var vnode = function vnode(label, meta, children) {
	if ((0, _util.isString)(label)) {
		return { label: label, meta: meta, children: (0, _util.exists)(children) ? normalize(children) : [] };
	} else {
		if ((0, _util.exists)(children)) {
			meta = _extends({}, meta, { children: normalize(children) });
		} else if ((0, _util.own)(meta, 'children')) {
			meta = _extends({}, meta, { children: normalize(meta.children) });
		}
		return { label: label, meta: meta };
	}
};

exports.default = vnode;

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

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(2);

var _domRenderer = __webpack_require__(1);

var _domRenderer2 = _interopRequireDefault(_domRenderer);

var _domApi = __webpack_require__(3);

var _domApi2 = _interopRequireDefault(_domApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patch = function patch(element, edits) {
	var delta = 0;
	var operations = [];

	for (var i = 0; i < edits.length; i++) {
		var edit = edits[i];
		var children = element.childNodes;
		var index = edit.index + delta;

		switch (edit.type) {
			case _constants.DESCEND_DIFF:
				patch(children[index], edit.diffs);
				break;
			case _constants.INSERTION:
				var artifact = (0, _domRenderer2.default)(edit.node);
				index < children.length ? _domApi2.default.insertBefore(element, children[index], artifact) : _domApi2.default.append(element, artifact);
				delta++;
				break;
			case _constants.DELETION:
				_domApi2.default.remove(element, children[index]);
				delta--;
				break;
			case _constants.SUBSTITUTION:
				_domApi2.default.replace(element, children[index], (0, _domRenderer2.default)(edit.node));
				break;
			case _constants.PROPS_PATCH:
				edit.patches.forEach(function (p) {
					if (p.type === _constants.DEL_PROP) {
						_domApi2.default.deleteProperty(element, p.key);
					} else if (p.type === _constants.UPD_PROP) {
						_domApi2.default.setProperty(element, p.key, p.prop);
					}
				});
				break;
			default:
				break;
		}
	}
};

exports.default = patch;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.expand = exports.diff = exports.v = undefined;

var _vnode = __webpack_require__(5);

var _vnode2 = _interopRequireDefault(_vnode);

var _diff = __webpack_require__(10);

var _diff2 = _interopRequireDefault(_diff);

var _expand = __webpack_require__(11);

var _expand2 = _interopRequireDefault(_expand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.v = _vnode2.default;
exports.diff = _diff2.default;
exports.expand = _expand2.default;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(12)
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function() {
  root.requestAnimationFrame = raf
  root.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

var _constants = __webpack_require__(2);

var descend = function descend(index, diffs) {
	return { type: _constants.DESCEND_DIFF, index: index, diffs: diffs };
};
var insertion = function insertion(index, node) {
	return { type: _constants.INSERTION, index: index, node: node };
};
var deletion = function deletion(index) {
	return { type: _constants.DELETION, index: index };
};
var substitution = function substitution(index, node) {
	return { type: _constants.SUBSTITUTION, index: index, node: node };
};
var props_patch = function props_patch(index, patches) {
	return { type: _constants.PROPS_PATCH, index: index, patches: patches };
};

var upd_prop = function upd_prop(key, prop) {
	return { type: _constants.UPD_PROP, key: key, prop: prop };
};
var del_prop = function del_prop(key) {
	return { type: _constants.DEL_PROP, key: key };
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

	// Rule 1
	// if identical fnodes, no diff required
	// note that this requires immutable data flow
	if (old_fnode === new_fnode) return null;

	// Rule 2
	// if old or new node are content, substitute
	if ((0, _util.isContent)(old_fnode) || (0, _util.isContent)(new_fnode)) return substitution(index, new_fnode);

	// Rule 3
	// if different labels, invalidate all
	var old_label = (0, _util.getLabel)(old_fnode);
	var new_label = (0, _util.getLabel)(new_fnode);

	if (old_label !== new_label) return substitution(index, new_fnode);

	// Rule 4
	// if same labels, diff props
	var old_meta = (0, _util.getMeta)(old_fnode);
	var new_meta = (0, _util.getMeta)(new_fnode);

	var meta_diff = diff_meta(old_meta, new_meta);

	var diffs = meta_diff.length > 0 ? [props_patch(index, meta_diff)] : [];

	// Rule 5
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

exports.default = diff;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(0);

var _vnode = __webpack_require__(5);

var _vnode2 = _interopRequireDefault(_vnode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// takes vnode tree
// tail-call optimization, collapse hnode into fnode
var expand = function expand(vnode, context) {
	for (;;) {
		if (!(0, _util.isObject)(vnode)) return vnode;

		var label = (0, _util.getLabel)(vnode);
		var meta = (0, _util.getMeta)(vnode);

		if ((0, _util.isString)(label)) {
			return (0, _vnode2.default)(label, meta, (0, _util.getChildren)(vnode).map(function (vn) {
				return expand(vn, context);
			}));
		} else {
			vnode = label(meta, context);
			continue;
		}
	}
};

exports.default = expand;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 13 */
/***/ function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ },
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _src = __webpack_require__(8);

var _domRenderer = __webpack_require__(1);

var _domRenderer2 = _interopRequireDefault(_domRenderer);

var _domPatcher = __webpack_require__(7);

var _domPatcher2 = _interopRequireDefault(_domPatcher);

var _raf = __webpack_require__(9);

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { init, run } from './uibench'

var _uibench = uibench,
    init = _uibench.init,
    run = _uibench.run;


var TableCell = function TableCell(_ref) {
	var text = _ref.text;
	return (0, _src.v)('td', {
		'className': 'TableCell',
		'onclick': function onclick(e) {
			return console.log(text), e.stopPropagation();
		}
	}, [text]);
};

var TableRow = function TableRow(_ref2) {
	var _ref2$data = _ref2.data,
	    active = _ref2$data.active,
	    props = _ref2$data.props,
	    id = _ref2$data.id;

	var className = active ? 'TableRow active' : 'TableRow';

	var children = props.map(function (c) {
		return (0, _src.v)(TableCell, {
			'text': c
		}, []);
	});

	return (0, _src.v)('tr', {
		'className': className,
		'data-id': id
	}, [(0, _src.v)(TableCell, {
		'text': '#' + id
	}, []), children]);
};

var Table = function Table(_ref3) {
	var items = _ref3.data.items;

	var children = items.map(function (i) {
		return (0, _src.v)(TableRow, {
			'data': i
		}, []);
	});

	return (0, _src.v)('table', {
		'className': 'Table'
	}, [(0, _src.v)('tbody', {}, [children])]);
};

var AnimBox = function AnimBox(_ref4) {
	var _ref4$data = _ref4.data,
	    id = _ref4$data.id,
	    time = _ref4$data.time;

	var style = {
		borderRadius: (time % 10).toString() + 'px',
		background: 'rgba(0,0,0,' + (0.5 + time % 10 / 10).toString() + ')'
	};

	return (0, _src.v)('div', {
		'className': 'AnimBox',
		'data-id': id,
		'style': style
	}, []);
};

var Anim = function Anim(_ref5) {
	var items = _ref5.data.items;

	var children = items.map(function (i) {
		return (0, _src.v)(AnimBox, {
			'data': i
		}, []);
	});

	return (0, _src.v)('div', {
		'className': 'Anim'
	}, [children]);
};

var TreeLeaf = function TreeLeaf(_ref6) {
	var id = _ref6.data.id;
	return (0, _src.v)('li', {
		'className': 'TreeLeaf'
	}, [id]);
};

var TreeNode = function TreeNode(_ref7) {
	var items = _ref7.data.children;

	var children = items.map(function (i) {
		return i.container ? (0, _src.v)(TreeNode, {
			'data': i
		}, []) : (0, _src.v)(TreeLeaf, {
			'data': i
		}, []);
	});

	return (0, _src.v)('ul', {
		'className': 'TreeNode'
	}, [children]);
};

var Tree = function Tree(_ref8) {
	var root = _ref8.data.root;
	return (0, _src.v)('div', {
		'className': 'Tree'
	}, [(0, _src.v)(TreeNode, {
		'data': root
	}, [])]);
};

var Main = function Main(_ref9) {
	var data = _ref9.data,
	    location = _ref9.data.location;

	var section = location === 'table' ? (0, _src.v)(Table, {
		'data': data.table
	}, []) : location === 'anim' ? (0, _src.v)(Anim, {
		'data': data.anim
	}, []) : location === 'tree' ? (0, _src.v)(Tree, {
		'data': data.tree
	}, []) : null;

	return (0, _src.v)('div', {
		'className': 'Main'
	}, [section]);
};

init('Arcade', '0.1.0');

document.addEventListener('DOMContentLoaded', function () {
	var root = document.getElementById('root');

	var tree = (0, _src.expand)((0, _src.v)('div', {}, []));
	var app = (0, _domRenderer2.default)(tree);
	root.appendChild(app);

	var update = function update(new_tree) {
		var artifact = (0, _src.expand)(new_tree);
		var d = (0, _src.diff)(tree, artifact);
		if (d != null) (0, _domPatcher2.default)(root, [d]);
		tree = artifact;
	};

	run(function (state) {
		return update((0, _src.v)(Main, {
			'data': state
		}, []));
	}, function (samples) {
		return update((0, _src.v)('pre', {}, [JSON.stringify(samples, null, ' ')]));
	});
});

/***/ }
/******/ ]);