import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import initialState from './initialState'
import TelemetryEnhancer from '../enhancers/TelemetryEnhancer'

const middleware = [thunk, TelemetryEnhancer]
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
)

export default store
