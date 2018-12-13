import { ActionTypes, ActionData, TelemetryBatch, TelemetryEvent, TelemetryState } from '../../types'


const blankBatch = () => ({
    timestamp: new Date(),
    events: [],
    keys: {}
})

const initialState: TelemetryState = {
    currentBatch: blankBatch(),
    sentEvents: []
}

export default function telemetrySaveReducer(state = initialState, action: ActionData) {
    switch (action.type) {
        case ActionTypes.TELEMETRY_SAVE:
            const key = action.type + action.payload.header
            if (state.currentBatch.keys.hasOwnProperty(key))
                return state
            return {
                currentBatch: {
                    timestamp: state.currentBatch.timestamp,
                    events: [
                        ...state.currentBatch.events,
                        action.payload as TelemetryEvent
                    ],
                    keys: {
                        ...state.currentBatch.keys,
                        key: key,
                    }
                },
                sentEvents: state.sentEvents,
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
            event.payload += JSON.stringify(state.currentBatch.events)
            return {
                currentBatch: blankBatch(),
                sentEvents: [
                    ...state.sentEvents,
                    event
                ]
            }

        default:
            return state
    }
}
