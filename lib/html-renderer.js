'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = require('./util');

var _htmlUtil = require('./html-util');

// takes node tree
var render = function render(node) {
	if ((0, _util.isContent)(node)) return (0, _htmlUtil.escapeContent)(node);

	var label = node.label;


	var out = '<' + label + (0, _htmlUtil.metaToAttributeString)(node.meta) + '>';
	if (!(0, _htmlUtil.isVoidElement)(label)) {
		out += node.children.map(render).join('') + '</' + label + '>';
	}

	return out;
};

exports.default = render;