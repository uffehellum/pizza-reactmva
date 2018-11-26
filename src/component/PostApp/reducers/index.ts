import {combineReducers} from 'redux'
import postReducer from './postReducer'

// const rootReducer = () => ({})

export default combineReducers({
    posts: postReducer
})
