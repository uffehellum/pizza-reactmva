import { Dispatch, Store, Action, Middleware, MiddlewareAPI, AnyAction } from 'redux'
import { SaveTelemetryEventAsBatch, SendBatchedTelemetryEvents, SendTelemetryEvent } from '../../actions/telemetryActions'
import { ActionTypes, TelemetryEvent } from '../../../types';

export async function Send(api:MiddlewareAPI<any>,request:TelemetryEvent ) {
    const config = api.getState().config
    SendTelemetryEvent(request, config)(api.dispatch)
}

const TelemetryEnhancer: Middleware =
    (api: MiddlewareAPI<any>) =>
        (nextDispatch: Dispatch<AnyAction>) =>
            (action: AnyAction) => {
                switch (action.type) {
                    case ActionTypes.FETCH_POSTS:
                    Send(api, {
                        event:"fetchposts",
                        payload: '{}',
                        session: 'enhancer session',
                        timestamp: new Date(),
                    })

                }
                nextDispatch(action)
            }

export default TelemetryEnhancer
