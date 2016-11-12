'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = require('./util');

var _domUtil = require('./dom-util');

var _domApi = require('./dom-api');

var _domApi2 = _interopRequireDefault(_domApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render(node) {
	if ((0, _util.isContent)(node)) return _domApi2.default.text(String(node));

	var el = _domApi2.default.element(node.label);

	var meta = node.meta;


	for (var k in meta) {
		if ((0, _util.own)(meta, k)) {
			_domApi2.default.setProperty(el, k, meta[k]);
		}
	}var children = node.children;


	for (var i = 0; i < children.length; i++) {
		_domApi2.default.append(el, render(children[i]));
	}

	return el;
};

exports.default = render;