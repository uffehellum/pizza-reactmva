import React from 'react'
import TelemetryBatchList from './TelemetryBatchList'
import TelemetrySentList from './TelemetrySentList'
import MockTelemetryContentShownCard from './MockTelemetryContentShownCard'
import MockTelemetrySendBatchCard from './MockTelemetrySendBatchCard'
import MockTelemetrySendCard from './MockTelemetrySendCard'
import './TelemetryPage.css'

export default function TelemetryPage() {
    return (
        <div>
            <h1>Debug Telemetry Flow</h1>
            <div className="container">
                <div className="column">
                    <h2>Mock Telemetry</h2>
                    <MockTelemetryContentShownCard />
                    <MockTelemetrySendBatchCard/>
                    <MockTelemetrySendCard/>
                </div>
                <div className="column">
                    <TelemetryBatchList />
                </div>
                <div className="column">
                    <TelemetrySentList />
                </div>
            </div>
        </div>
    )
}
