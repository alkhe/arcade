'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = require('./util');

var _vnode = require('./vnode');

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