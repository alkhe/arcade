'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.run = exports.connect = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _expand = require('../src/expand');

var _expand2 = _interopRequireDefault(_expand);

var _domRenderer = require('../src/dom-renderer');

var _domRenderer2 = _interopRequireDefault(_domRenderer);

var _diff = require('../src/diff');

var _domPatcher = require('../src/dom-patcher');

var _domPatcher2 = _interopRequireDefault(_domPatcher);

var _vnode = require('../src/vnode');

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connect = function connect() {
	var mapStateToProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
		return {};
	};
	var mapDispatchToProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (dispatch) {
		return { dispatch: dispatch };
	};
	return function (Component) {
		return function (props, context) {
			return (0, _vnode.hnode)(Component, _extends({}, props, mapStateToProps(context.store.getState()), mapDispatchToProps(context.store.dispatch)));
		};
	};
};

var run = function run(root, Component, store) {
	var patch_buffer = [];

	var tree = (0, _expand2.default)((0, _vnode.hnode)(Component, {}), { store: store });
	var app = void 0;

	store.subscribe(function (state) {
		var new_tree = (0, _expand2.default)((0, _vnode.hnode)(Component, {}), { store: store });
		patch_buffer.push((0, _diff.diff)(tree, new_tree).diffs);
		tree = new_tree;
	});

	(0, _raf2.default)(function () {
		app = (0, _domRenderer2.default)(tree);
		root.appendChild(app);

		(0, _raf2.default)(tick);
	});

	var tick = function tick() {
		for (var i = 0; i < patch_buffer.length; i++) {
			(0, _domPatcher2.default)(app, patch_buffer[i]);
		}
		patch_buffer = [];

		(0, _raf2.default)(tick);
	};
};

exports.connect = connect;
exports.run = run;