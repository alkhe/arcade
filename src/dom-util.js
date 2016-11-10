const isDataAttribute = s => s.startsWith('data-')

const getDataString = s => kebabToCamel(s.substring(5))

const kebabToCamel = s => {
	const words = s.split(/-/)

	let out = words.length > 0 ? words[0] : ''

	for (let i = 1; i < words.length; i++) {
		const word = words[i]
		out += (word[0] || '').toUpperCase() + word.substring(1)
	}

	return out
}

export {
	isDataAttribute,
	getDataString
}
