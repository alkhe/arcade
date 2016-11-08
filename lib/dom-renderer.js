'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = require('./util');

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

	for (var i = 0; i < children.length; i++) {
		api.append(el, render(children[i]));
	}

	return el;
};

exports.default = render;