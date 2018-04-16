import {combineReducers} from 'redux'
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'
//tous les etats possibles sont stockés ici!!!!
const rootReducer = combineReducers ({
   books: BooksReducer,
   activeBook:ActiveBook
})

export default rootReducer;
