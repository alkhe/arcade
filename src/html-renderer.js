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

const charEscape = map => s => {
	let out = ``
	for (let i = 0; i < s.length; i++) {
		let c = s[i]
		out += own(map, c) ? map[c] : c
	}
	return out
}

const escapeContent = charEscape({
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	'\'': '&#039;',
	'\\': '&#x2F;'
})

const escapeAttribute = charEscape({
	'&': '&amp;',
	'"': '&quot;'
})

const voidElements = {
	area: true,
	base: true,
	br: true,
	col: true,
	command: true,
	embed: true,
	hr: true,
	img: true,
	input: true,
	keygen: true,
	link: true,
	meta: true,
	param: true,
	source: true,
	track: true,
	wbr: true
}

const isVoidElement = x => own(voidElements, x)

const metaToAttributeString = meta => {
	let out = ``
	for (let k in meta) if (own(meta, k)) {
		out += ` ${ escapeAttribute(k) }`

		let v = meta[k]
		if (isContent(v)) {
			out += `="${ escapeAttribute(meta[k]) }"`
		}
	}
	return out
}

// takes vnode tree
// tail-call optimization, collapse hnode into fnode
const expand = vnode => {
	for (;;) {
		if (!isArray(vnode)) return vnode

		const label = getLabel(vnode)
		const meta = getMeta(vnode)

		if (isString(label)) {
			return [label, meta, getChildren(vnode).map(expand)]
		} else {
			vnode = label(meta)
			continue
		}
	}
}

// takes fnode tree
const render = fnode => {
	if (isContent(fnode)) return escapeContent(fnode)

	let label = getLabel(fnode)
	let out = `<${ label }${ metaToAttributeString(getMeta(fnode)) }>`
	if (!isVoidElement(label)) {
		out += `${ getChildren(fnode).map(render).join('') }</${ label }>`
	}

	return out
}

export {
	expand,
	render
}
