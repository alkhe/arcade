import {
	DESCEND_DIFF,
	INSERTION,
	DELETION,
	SUBSTITUTION,
	PROPS_PATCH,
	REPLACE_CHILDREN,
	DEL_PROP,
	UPD_PROP
} from './diff'
import render from './dom-renderer'

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
					? element.insertBefore(children[index], artifact)
					: element.appendChild(artifact)
				delta++
				break
			case DELETION:
				element.removeChild(children[index])
				delta--
				break
			case SUBSTITUTION:
				element.replaceChild(render(edit.node), children[index])
				break
			case PROPS_PATCH:
				edit.patches.forEach(({ key, prop }) => element[key] = prop)
				break
			default:
				break
		}
	}
}

export default patch
