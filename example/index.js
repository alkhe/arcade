import { fnode, hnode } from '../src/vnode'
import { connect, run } from '../src/redux-dom'
import { createStore, combineReducers } from 'redux'

let itemReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return state.concat(action.item)
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

let List = ({ items }) => (
	<ol>
		{ items.map(s => <ListItem>{ s }</ListItem>) }
	</ol>
)

let ListItem = ({ children }) => <li>{ children }</li>

let ItemList = connect(state => state)(({ items }) => <List>{ items }</List>)

let Root = ({ items, text, setValue, addItem }) => (
	<div>
		<input oninput={ e => setValue(e.target.value) } onkeydown={ e => { if (e.keyCode === 13) addItem(text) } } value={ text } />
		<button onclick={ () => addItem(text) }>Add Item</button>
		<List items={ items } />
	</div>
)

Root = connect(
	state => ({ items: state.items, text: state.text }),
	dispatch => ({
		setValue: value => dispatch({ type: 'SET_VALUE', value }),
		addItem: item => dispatch({ type: 'ADD_ITEM', item })
	})
)(Root)

run(document.getElementById('root'), Root, store)
