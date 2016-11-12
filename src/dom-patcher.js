import {
	DESCEND_DIFF,
	INSERTION,
	DELETION,
	SUBSTITUTION,
	PROPS_PATCH,
	REPLACE_CHILDREN,
	DEL_PROP,
	UPD_PROP
} from './constants'
import render from './dom-renderer'
import { element as createElement, insertBefore, append, remove, replace, deleteProperty, setProperty } from './dom-api'

const patch = (element, edits) => {
	let delta = 0
	let operations = []

	for (let i = 0; i < edits.length; i++) {
		let edit = edits[i]
		let children = element.childNodes
		let index = edit.index + delta

		switch (edit.type) {
			case DESCEND_DIFF:
				patch(children[index], edit.diffs)
				break
			case INSERTION:
				let artifact = render(edit.node)
				index < children.length
					? insertBefore(element, children[index], artifact)
					: append(element, artifact)
				delta++
				break
			case DELETION:
				remove(element, children[index])
				delta--
				break
			case SUBSTITUTION:
				replace(element, children[index], render(edit.node))
				break
			case PROPS_PATCH:
				edit.patches.forEach(p => {
					if (p.type === DEL_PROP) {
						deleteProperty(element, p.key)
					} else if (p.type === UPD_PROP) {
						setProperty(element, p.key, p.prop)
					}
				})
				break
			default:
				break
		}
	}
}

export default patch
