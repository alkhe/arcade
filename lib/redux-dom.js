'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.run = exports.connect = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _asyncDomRun = require('./async-dom-run');

var _asyncDomRun2 = _interopRequireDefault(_asyncDomRun);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connect = function connect() {
	var mapStateToProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
		return {};
	};
	var mapDispatchToProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (dispatch) {
		return { dispatch: dispatch };
	};
	return function (component) {
		return function (props, _ref) {
			var _ref$store = _ref.store,
			    getState = _ref$store.getState,
			    dispatch = _ref$store.dispatch;
			return {
				label: component,
				meta: _extends({}, props, mapStateToProps(getState()), mapDispatchToProps(dispatch))
			};
		};
	};
};

var reduxRun = function reduxRun(root, component, store) {
	var props = {};
	var context = { store: store };

	var update = (0, _asyncDomRun2.default)(root, component);

	store.subscribe(function (state) {
		update(state, context);
	});

	update({}, context);
};

exports.connect = connect;
exports.run = reduxRun;