import { combineReducers } from 'redux'
import configReducer from './configReducer'
import postReducer from './postReducer'
import profileStatusReducer from './profileStatusReducer'
import SearchReducer from './SearchReducer'

export default combineReducers({
    config: configReducer,
    posts: postReducer,
    profileStatus: profileStatusReducer,
    search: SearchReducer
})
