const exists = x => x != null
const isString = x => x.constructor === String
const isNumber = x => x.constructor === Number
const isBoolean = x => x.constructor === Boolean
const isArray = x => x.constructor === Array
const isContent = x => isString(x) || isNumber(x)

const getLabel = x => x[0]
const getMeta = x => x[1]
const getChildren = x => x[2]

const own = (obj, k) => Object.prototype.hasOwnProperty.call(obj, k)

export {
	exists,
	isString,
	isNumber,
	isBoolean,
	isArray,
	isContent,
	getLabel,
	getMeta,
	getChildren,
	own
}
