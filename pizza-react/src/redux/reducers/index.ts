import { combineReducers } from 'redux'
import configReducer from './configReducer'
import postReducer from './postReducer'
import profileStatusReducer from './profileStatusReducer'
import telemetryReducer from './telemetryReducer'
import SearchReducer from './SearchReducer'

export default combineReducers({
    config: configReducer,
    posts: postReducer,
    profileStatus: profileStatusReducer,
    telemetry: telemetryReducer,
    search: SearchReducer
})
