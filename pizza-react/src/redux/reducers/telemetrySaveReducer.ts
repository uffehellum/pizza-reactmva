import { ActionTypes, ActionData, TelemetryBatch, TelemetryEvent } from '../../types'


const initialState: TelemetryBatch = {
    timestamp: new Date(),
    events: [],
}

export default function telemetrySaveReducer(state = initialState, action: ActionData) {
    switch (action.type) {
        case ActionTypes.TELEMETRY_SAVE:
            return {
                timestamp:state.timestamp,
                events: [
                    ...state.events, 
                    action.payload as TelemetryEvent
                ]
            }
        default:
            return state
    }
}
