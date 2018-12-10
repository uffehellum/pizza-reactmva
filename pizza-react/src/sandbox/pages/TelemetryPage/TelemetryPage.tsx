import React from 'react'
import TelemetryBatchList from './TelemetryBatchList'
import MockTelemetryCard from './MockTelemetryCard'


export default function TelemetryPage() {
    return (
        <div>
            <h1>Debug Telemetry Flow</h1>
            <div className="container">
                <div className="column">
                    <TelemetryBatchList />
                </div>
                <div className="column">
                    <MockTelemetryCard />
                </div>
            </div>
        </div>
    )
}
