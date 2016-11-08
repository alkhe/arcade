'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = require('./util');

// takes vnode tree
// tail-call optimization, collapse hnode into fnode
var expand = function expand(vnode) {
	for (;;) {
		if (!(0, _util.isArray)(vnode)) return vnode;

		var label = (0, _util.getLabel)(vnode);
		var meta = (0, _util.getMeta)(vnode);

		if ((0, _util.isString)(label)) {
			return [label, meta, (0, _util.getChildren)(vnode).map(expand)];
		} else {
			vnode = label(meta);
			continue;
		}
	}
};

exports.default = expand;