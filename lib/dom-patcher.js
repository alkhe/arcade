'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = require('./constants');

var _domRenderer = require('./dom-renderer');

var _domRenderer2 = _interopRequireDefault(_domRenderer);

var _domApi = require('./dom-api');

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
				index < children.length ? (0, _domApi.insertBefore)(element, children[index], artifact) : (0, _domApi.append)(element, artifact);
				delta++;
				break;
			case _constants.DELETION:
				(0, _domApi.remove)(element, children[index]);
				delta--;
				break;
			case _constants.SUBSTITUTION:
				(0, _domApi.replace)(element, children[index], (0, _domRenderer2.default)(edit.node));
				break;
			case _constants.PROPS_PATCH:
				edit.patches.forEach(function (p) {
					if (p.type === _constants.DEL_PROP) {
						(0, _domApi.deleteProperty)(element, p.key);
					} else if (p.type === _constants.UPD_PROP) {
						(0, _domApi.setProperty)(element, p.key, p.prop);
					}
				});
				break;
			default:
				break;
		}
	}
};

exports.default = patch;