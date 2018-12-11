import { TelemetryEvent } from '../../types'

const defaultUrl = "https://vortex-sandbox.data.microsoft.com/collect/v1"

/*
$ curl https://vortex-sandbox.data.microsoft.com/collect/v1\
  -X POST -H "Content-Type: application/json" -d '{"x":"abc"}'
*/

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
