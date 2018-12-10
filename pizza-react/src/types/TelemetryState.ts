import {TelemetryBatch} from './TelemetryBatch'
import {TelemetryEvent} from './TelemetryEvent'

export interface TelemetryState {
    currentBatch: TelemetryBatch
    sentEvents: TelemetryEvent[]
}
