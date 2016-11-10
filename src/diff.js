import { getLabel, getMeta, getChildren, isContent, exists, own } from './util'
import { DESCEND_DIFF, INSERTION, DELETION, SUBSTITUTION, PROPS_PATCH, DEL_PROP, UPD_PROP } from './constants'

const descend = (index, diffs) => ({ type: DESCEND_DIFF, index, diffs })
const insertion = (index, node) => ({ type: INSERTION, index, node })
const deletion = index => ({ type: DELETION, index })
const substitution = (index, node) => ({ type: SUBSTITUTION, index, node })
const props_patch = (index, patches) => ({ type: PROPS_PATCH, index, patches })

const upd_prop = (key, prop) => ({ type: UPD_PROP, key, prop })
const del_prop = key => ({ type: DEL_PROP, key })

const diff_meta = (old_meta, new_meta) => {
	let diffs = []

	// if new_meta does not have a key on old_meta, produce a prop deletion
	for (let k in old_meta) if (own(old_meta, k)) {
		let old_prop = old_meta[k]
		let new_has_prop = own(new_meta, k)
		if (!new_has_prop) {
			diffs.push(del_prop(k))
		}
	}

	// if old_meta does not have a key on new_meta or that prop is outdated, produce a prop update
	for (let k in new_meta) if (own(new_meta, k)) {
		let new_prop = new_meta[k]
		let old_has_prop = own(old_meta, k)
		if (!old_has_prop || old_meta[k] !== new_prop) {
			diffs.push(upd_prop(k, new_prop))
		}
	}

	return diffs
}

const diff = (old_fnode, new_fnode, index = 0) => {
	// Lemma 1
	// if identical fnodes, no diff required
	// note that this requires immutable data flow
	if (old_fnode === new_fnode) return null

	// Lemma 2
	// if old or new node are content, substitute
	if (isContent(old_fnode) || isContent(new_fnode)) return substitution(index, new_fnode)

	// Lemma 3
	// if different labels, invalidate all
	let old_label = getLabel(old_fnode)
	let new_label = getLabel(new_fnode)

	if (old_label !== new_label) return substitution(index, new_fnode)

	// Lemma 4
	// if same labels, diff props
	let old_meta = getMeta(old_fnode)
	let new_meta = getMeta(new_fnode)

	let meta_diff = diff_meta(old_meta, new_meta)

	let diffs = meta_diff.length > 0 ? [props_patch(index, meta_diff)] : []

	// Lemma 5
	// patch old and new for (smaller children.length) times
	// delete rest if old has more children
	// insert rest if new has more children
	let old_children = getChildren(old_fnode)
	let new_children = getChildren(new_fnode)
	let old_children_length = old_children.length
	let new_children_length = new_children.length

	let diff_len = Math.min(old_children_length, new_children_length)
	let remainder = new_children_length - old_children_length

	// branching point
	for (let i = 0; i < diff_len; i++) {
		let child_diff = diff(old_children[i], new_children[i], i)
		if (exists(child_diff)) {
			diffs.push(child_diff)
		}
	}

	if (remainder < 0) {
		// remainder is negative, old has more children
		old_children.slice(diff_len, diff_len - remainder).map((_, i) => deletion(i + diff_len)).forEach(x => diffs.push(x))
	} else if (remainder > 0) {
		// remainder is positive, new has more children
		new_children.slice(diff_len, diff_len + remainder).map((node, i) => insertion(i + diff_len, node)).forEach(x => diffs.push(x))
	}

	return diffs.length > 0 ? descend(index, diffs) : null
}

export default diff
