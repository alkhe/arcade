'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _diff = require('./diff');

var _domRenderer = require('./dom-renderer');

var _domRenderer2 = _interopRequireDefault(_domRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patch = function patch(element, edits) {
	var delta = 0;
	var operations = [];

	for (var i = 0; i < edits.length; i++) {
		var edit = edits[i];
		var children = element.childNodes;
		var index = edit.index + delta;

		switch (edit.type) {
			case _diff.DESCEND_DIFF:
				patch(children[index], edit.diffs);
				break;
			case _diff.INSERTION:
				var artifact = (0, _domRenderer2.default)(edit.node);
				index < children.length ? element.insertBefore(children[index], artifact) : element.appendChild(artifact);
				delta++;
				break;
			case _diff.DELETION:
				element.removeChild(children[index]);
				delta--;
				break;
			case _diff.SUBSTITUTION:
				element.replaceChild((0, _domRenderer2.default)(edit.node), children[index]);
				break;
			case _diff.PROPS_PATCH:
				edit.patches.forEach(function (_ref) {
					var key = _ref.key,
					    prop = _ref.prop;
					return element[key] = prop;
				});
				break;
			default:
				break;
		}
	}
};

exports.default = patch;