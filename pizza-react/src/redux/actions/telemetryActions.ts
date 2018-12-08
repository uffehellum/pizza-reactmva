import { ActionTypes, TelemetryEvent } from '../../types'
import { SendTelemetry, TelemetryConfig } from '../../repository/telemetry'

interface DispatchType {
    type: string
    payload: any
}

type DispatchFunction = (x: DispatchType) => void

export const RecordTelemetryEvent = 
    (request: TelemetryEvent, config:TelemetryConfig) => 
    (dispatch: DispatchFunction) =>
    SendTelemetry(request, config)
        .then(_response => dispatch({
            type: ActionTypes.TELEMETRY_SEND,
            payload: request,
        }))

export const clearProfileStatus = () => (dispatch: DispatchFunction) =>
    dispatch({
        type: ActionTypes.PROFILESTATUS_FETCH,
        payload: { },
    })
