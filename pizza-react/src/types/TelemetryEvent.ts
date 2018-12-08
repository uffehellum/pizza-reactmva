export interface TelemetryEvent {
    timestamp: Date
    event: string
    session: string
    payload: any
}
