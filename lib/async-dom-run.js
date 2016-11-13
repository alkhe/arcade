'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _expand = require('./expand');

var _expand2 = _interopRequireDefault(_expand);

var _diff = require('./diff');

var _diff2 = _interopRequireDefault(_diff);

var _domRenderer = require('./dom-renderer');

var _domRenderer2 = _interopRequireDefault(_domRenderer);

var _domPatcher = require('./dom-patcher');

var _domPatcher2 = _interopRequireDefault(_domPatcher);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var run = function run(root, component) {
	var patch_buffer = [];
	var tree = void 0;

	var tick = function tick() {
		(0, _domPatcher2.default)(root, patch_buffer);
		patch_buffer = [];
		(0, _raf2.default)(tick);
	};

	(0, _raf2.default)(tick);

	return function (meta, context) {
		var new_tree = (0, _expand2.default)({
			label: component,
			meta: meta
		}, context);

		var d = (0, _diff2.default)(tree, new_tree);

		if (d !== null) {
			patch_buffer.push(d);
		}

		tree = new_tree;
	};
};

exports.default = run;