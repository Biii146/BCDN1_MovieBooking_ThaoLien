import {combineReducers,createStore} from 'redux'
import CineTicketReducer from './reducer/CineTicketReducer'

const rootReducer = combineReducers({
    // chua cac reducers con
    CineTicketReducer

})

export const store = createStore(rootReducer)