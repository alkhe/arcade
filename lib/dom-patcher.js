'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = require('./constants');

var _domRenderer = require('./dom-renderer');

var _domRenderer2 = _interopRequireDefault(_domRenderer);

var _domApi = require('./dom-api');

var _domApi2 = _interopRequireDefault(_domApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patch = function patch(element, edits) {
	var delta = 0;
	var operations = [];

	for (var i = 0; i < edits.length; i++) {
		var edit = edits[i];
		var children = element.childNodes;
		var index = edit.index + delta;

		switch (edit.type) {
			case _constants.DESCEND_DIFF:
				patch(children[index], edit.diffs);
				break;
			case _constants.INSERTION:
				var artifact = (0, _domRenderer2.default)(edit.node);
				index < children.length ? _domApi2.default.insertBefore(element, children[index], artifact) : _domApi2.default.append(element, artifact);
				delta++;
				break;
			case _constants.DELETION:
				_domApi2.default.remove(element, children[index]);
				delta--;
				break;
			case _constants.SUBSTITUTION:
				_domApi2.default.replace(element, children[index], (0, _domRenderer2.default)(edit.node));
				break;
			case _constants.PROPS_PATCH:
				edit.patches.forEach(function (_ref) {
					var key = _ref.key,
					    prop = _ref.prop;
					return _domApi2.default.setProperty(element, key, prop);
				});
				break;
			default:
				break;
		}
	}
};

exports.default = patch;