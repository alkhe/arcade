'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = require('./util');

var _htmlUtil = require('./html-util');

// takes fnode tree
var render = function render(fnode) {
	if ((0, _util.isContent)(fnode)) return (0, _htmlUtil.escapeContent)(fnode);

	var label = (0, _util.getLabel)(fnode);

	var out = '<' + label + (0, _htmlUtil.metaToAttributeString)((0, _util.getMeta)(fnode)) + '>';
	if (!(0, _htmlUtil.isVoidElement)(label)) {
		out += (0, _util.getChildren)(fnode).map(render).join('') + '</' + label + '>';
	}

	return out;
};

exports.default = render;