import v from '../src/vnode'
import { connect, run } from '../src/redux-dom'
import { createStore, combineReducers } from 'redux'

// state layer

let itemReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return state.concat(action.item)
		case 'REMOVE_ITEM':
			let { index } = action
			let left = state.slice(0, index)
			let right = state.slice(index + 1)
			return left.concat(right)
		default:
			return state
	}
}

let defaultText = ''
let textReducer = (state = defaultText, action) => {
	switch (action.type) {
		case 'SET_VALUE':
			return action.value
		case 'ADD_ITEM':
			return defaultText
		default:
			return state
	}
}

let store = createStore(combineReducers({ items: itemReducer, text: textReducer }))

// view layer

let List = ({ items, remove }) => (
	<div>
		{ items.map((s, i) => <ListItem remove={ () => remove(i) }>{ s }</ListItem>) }
	</div>
)

let ListItem = ({ children, remove }) => (
	<div>
		{ children }
		<button onclick={ remove }>×</button>
	</div>
)

let Root = ({ items, text, setValue, addItem, removeItem }) => (
	<div>
		<input oninput={ e => setValue(e.target.value) } onkeydown={ e => { if (e.keyCode === 13) addItem(text) } } value={ text } />
		<button onclick={ () => addItem(text) }>Add Item</button>
		<List items={ items } remove={ removeItem }/>
	</div>
)

// glue

Root = connect(
	state => ({ items: state.items, text: state.text }),
	dispatch => ({
		setValue: value => dispatch({ type: 'SET_VALUE', value }),
		addItem: item => dispatch({ type: 'ADD_ITEM', item }),
		removeItem: index => dispatch({ type: 'REMOVE_ITEM', index })
	})
)(Root)

run(document.getElementById('root'), Root, store)
