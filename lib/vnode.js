'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash.flattendeep');

var _lodash2 = _interopRequireDefault(_lodash);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalize = function normalize(children) {
	return (0, _util.isArray)(children) ? (0, _lodash2.default)(children) : [children];
};

var vnode = function vnode(label, meta, children) {
	if ((0, _util.isString)(label)) {
		return { label: label, meta: meta, children: (0, _util.exists)(children) ? normalize(children) : [] };
	} else {
		if ((0, _util.exists)(children)) {
			meta = _extends({}, meta, { children: normalize(children) });
		} else if ((0, _util.own)(meta, 'children')) {
			meta = _extends({}, meta, { children: normalize(meta.children) });
		}
		return { label: label, meta: meta };
	}
};

exports.default = vnode;