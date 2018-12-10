import React from 'react'
import TelemetryBatchList from './TelemetryBatchList'
import MockTelemetryContentShownCard from './MockTelemetryContentShownCard'
import MockTelemetrySendBatchCard from './MockTelemetrySendBatchCard'

export default function TelemetryPage() {
    return (
        <div>
            <h1>Debug Telemetry Flow</h1>
            <div className="container">
                <div className="column">
                    <MockTelemetryContentShownCard />
                    <MockTelemetrySendBatchCard/>
                </div>
                <div className="column">
                    <TelemetryBatchList />
                </div>
            </div>
        </div>
    )
}
