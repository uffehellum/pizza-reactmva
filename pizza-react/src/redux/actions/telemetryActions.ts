import { ActionTypes, TelemetryEvent } from '../../types'
import { SendTelemetry, TelemetryConfig } from '../../service/telemetry'

interface DispatchType {
    type: string
    payload: any
}

type DispatchFunction = (x: DispatchType) => void

export const SendTelemetryEvent =
    (request: TelemetryEvent, config: TelemetryConfig) =>
        (dispatch: DispatchFunction) =>
            SendTelemetry(request, config)
                .then(_response => dispatch({
                    type: ActionTypes.TELEMETRY_SEND,
                    payload: request,
                }))

export const SaveTelemetryEventAsBatch =
    (request: TelemetryEvent) =>
        (dispatch: DispatchFunction) =>
            dispatch({
                type: ActionTypes.TELEMETRY_SAVE,
                payload: request,
            })

export const SendBatchedTelemetryEvents =
    (request: TelemetryEvent, config: TelemetryConfig) =>
        (dispatch: DispatchFunction) =>
            SendTelemetry(request, config)
                .then(response => {
                    const responseEvent: TelemetryEvent = {
                        event: 'vortex response',
                        payload: JSON.stringify({
                            request: request.payload,
                            response,
                        }),
                        session: request.session,
                        timestamp: new Date(),
                    }
                    dispatch({
                        type: ActionTypes.TELEMETRY_SENDBATCH,
                        payload: responseEvent
                    })
                })

