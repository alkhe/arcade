'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = require('./util');

var _vnode = require('./vnode');

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