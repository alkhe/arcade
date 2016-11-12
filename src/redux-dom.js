import run from './async-dom-run'

const connect =
	(mapStateToProps = () => ({}), mapDispatchToProps = dispatch => ({ dispatch })) =>
		component =>
			(props, { store: { getState, dispatch } }) => ({
				label: component,
				meta: { ...props, ...mapStateToProps(getState()), ...mapDispatchToProps(dispatch) }
			})

const reduxRun = (root, component, store) => {
	const props = {}
	const context = { store }

	const update = run(root, component)

	store.subscribe(state => {
		update(state, context)
	})

	update({}, context)
}

export {
	connect,
	reduxRun as run
}
