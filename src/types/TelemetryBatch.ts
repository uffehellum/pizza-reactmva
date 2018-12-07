import {TelemetryEvent} from './TelemetryEvent'

export  interface TelemetryBatch {
    timestamp: Date
    events: TelemetryEvent[]
}

