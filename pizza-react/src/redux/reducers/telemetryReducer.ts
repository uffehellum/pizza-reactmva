import { ActionTypes, ActionData, TelemetryBatch, TelemetryEvent, TelemetryState } from '../../types'


const initialState: TelemetryState = {
    currentBatch: {
        timestamp: new Date(),
        events: [],
    },
    sentEvents: []
}

export default function telemetrySaveReducer(state = initialState, action: ActionData) {
    switch (action.type) {
        case ActionTypes.TELEMETRY_SAVE:
            return {
                currentBatch: {
                    timestamp: state.currentBatch.timestamp,
                    events: [
                        ...state.currentBatch.events,
                        action.payload as TelemetryEvent
                    ]
                },
                sentEvents: state.sentEvents
            }

        case ActionTypes.TELEMETRY_SEND:
            return {
                currentBatch: state.currentBatch,
                sentEvents: [
                    ...state.sentEvents,
                    action.payload as TelemetryEvent
                ]
            }

        case ActionTypes.TELEMETRY_SENDBATCH:
            const event = action.payload as TelemetryEvent
            event.payload += JSON.stringify(state.currentBatch)
            return {
                currentBatch: {
                    timestamp: new Date(),
                    events: [],
                },
                sentEvents: [
                    ...state.sentEvents,
                    event
                ]
            }
            
        default:
            return state
    }
}
