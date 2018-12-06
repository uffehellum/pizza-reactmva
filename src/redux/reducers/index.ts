import { combineReducers } from 'redux'
import postReducer from './postReducer'
import profileStatusReducer from './profileStatusReducer'

export default combineReducers({
    posts: postReducer,
    profileStatus: profileStatusReducer,
})
