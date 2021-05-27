import {createStore, combineReducers} from 'redux'
import {logReducer, flashcardReducer} from './reducers'

const store = createStore(combineReducers({isLogin:logReducer, flashcards:flashcardReducer}))

export default store