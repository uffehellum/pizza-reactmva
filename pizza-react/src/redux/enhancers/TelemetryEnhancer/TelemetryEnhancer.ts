import { Dispatch, Store, Action, Middleware, MiddlewareAPI, AnyAction } from 'redux'

const TelemetryEnhancer: Middleware =
    (api: MiddlewareAPI<any>) =>
        (nextDispatch: Dispatch<AnyAction>) =>
            (action: AnyAction) => {
                nextDispatch(action)
            }

export default TelemetryEnhancer
