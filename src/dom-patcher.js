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
import api from './dom-api'

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
					? api.insertBefore(element, children[index], artifact)
					: api.append(element, artifact)
				delta++
				break
			case DELETION:
				api.remove(element, children[index])
				delta--
				break
			case SUBSTITUTION:
				api.replace(element, children[index], render(edit.node))
				break
			case PROPS_PATCH:
				edit.patches.forEach(p => {
					if (p.type === DEL_PROP) {
						api.deleteProperty(element, p.key)
					} else if (p.type === UPD_PROP) {
						api.setProperty(element, p.key, p.prop)
					}
				})

				console.log(element)
				break
			default:
				break
		}
	}
}

export default patch
