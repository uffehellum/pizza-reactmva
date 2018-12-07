import { TelemetryEvent } from '../../types'

const defaultUrl = "hppt://localhost:1234/content"

export interface TelemetryConfig {
    telemetryUrl: string
}

export async function SendTelemetry(
    request: TelemetryEvent, 
    config: TelemetryConfig)
    : Promise<void> {
    const relayUrl = config.telemetryUrl || defaultUrl
    const params: RequestInit = {
        method: 'POST',
        mode:'cors',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(request)
    }
    await fetch(relayUrl, params)
    return
}
