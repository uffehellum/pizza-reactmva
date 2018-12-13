import { TelemetryEvent } from '../../types'

// const defaultUrl = "https://vortex-sandbox.data.microsoft.com/collect/v1"
const defaultUrl = "https://web.vortex.data.microsoft.com/collect/v1"

export interface TelemetryConfig {
    telemetryUrl: string
}

export const sharedParameters = {
    name: 'Ms.Webi.MeControl.PartnerApiCall',
    ver: '2.1',
    appId: 'JS:SupportXboxCare',
    appVer: '0.01',
}


function mergePayload(payload: any): any {
    return {
        ...sharedParameters,
        time: new Date().toISOString(),
        data: payload
    }
}
function CombinePayloads(payloads: any[]): string {
    return payloads
    .map(payload => mergePayload(payload))
    .map(x => JSON.stringify(x))
    .join("\n")
}

export async function SendTelemetries(config: TelemetryConfig, payloads: any[]): Promise<any> {
    const body = CombinePayloads(payloads)
    const relayUrl = config.telemetryUrl || defaultUrl
    const params: RequestInit = {
        credentials: "omit",
        method: 'POST',
        mode: 'cors',
        headers: {
            'content-type': 'application/json'
        },
        body,
    }
    const reponse = await fetch(relayUrl, params)
    const result = await reponse.json()
    return result
}

export async function SendTelemetry(
    request: TelemetryEvent,
    config: TelemetryConfig)
    : Promise<void> {
    return await SendTelemetries(config, [request])    
}
