'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = require('./util');

var _domApi = require('./dom-api');

var _domApi2 = _interopRequireDefault(_domApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render(fnode) {
	if ((0, _util.isContent)(fnode)) return _domApi2.default.text(String(fnode));

	var el = _domApi2.default.element((0, _util.getLabel)(fnode));

	var meta = (0, _util.getMeta)(fnode);

	for (var k in meta) {
		if ((0, _util.own)(meta, k)) {
			el[k] = meta[k];
		}
	}var children = (0, _util.getChildren)(fnode);

	for (var i = 0; i < children.length; i++) {
		_domApi2.default.append(el, render(children[i]));
	}

	return el;
};

exports.default = render;