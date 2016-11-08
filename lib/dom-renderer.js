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
	}
};

var render = function render(fnode) {
	if ((0, _util.isContent)(fnode)) return api.text(String(fnode));

	var el = api.element((0, _util.getLabel)(fnode));

	var children = (0, _util.getChildren)(fnode);
	var frag = document.createDocumentFragment();

	for (var i = 0; i < children.length; i++) {
		frag.appendChild(render(children[i]));
	}

	el.appendChild(frag);

	return el;
};

exports.default = render;