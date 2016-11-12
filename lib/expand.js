'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = require('./util');

// takes node tree
// tail-call optimization, collapse hnode into fnode
var expand = function expand(node, context) {
	for (;;) {
		if (!(0, _util.isObject)(node)) return node;

		var _node = node,
		    label = _node.label,
		    meta = _node.meta;


		if ((0, _util.isString)(label)) {
			return { label: label, meta: meta, children: node.children.map(function (n) {
					return expand(n, context);
				}) };
		} else {
			node = label(meta, context);
			continue;
		}
	}
};

exports.default = expand;