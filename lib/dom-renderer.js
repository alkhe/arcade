'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = require('./util');

var _domUtil = require('./dom-util');

var _domApi = require('./dom-api');

var render = function render(node) {
	if ((0, _util.isContent)(node)) return (0, _domApi.text)(String(node));

	var el = (0, _domApi.element)(node.label);

	var meta = node.meta;


	for (var k in meta) {
		if ((0, _util.own)(meta, k)) {
			(0, _domApi.setProperty)(el, k, meta[k]);
		}
	}var children = node.children;


	for (var i = 0; i < children.length; i++) {
		(0, _domApi.append)(el, render(children[i]));
	}

	return el;
};

exports.default = render;