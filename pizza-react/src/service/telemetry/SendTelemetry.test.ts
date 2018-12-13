import { SendTelemetry, TelemetryConfig } from './SendTelemetry'
import { TelemetryEvent } from '../../types';

describe('SendTelemetry', () => {
    it('minimal payload', (done) => {
        try {
            const request: TelemetryEvent = {
                event: 'my event',
                payload: {"name":"Ms.Webi.MeControl.PartnerApiCall","appId":"JS:MeControl",},//JSON.stringify({ a: 2 }),
                session: 'my session',
                timestamp: new Date(),
            }
            const config: TelemetryConfig = {
                telemetryUrl: '',
            }
            const result = SendTelemetry(request, config)
            result.then((json: any) => {
                expect(json.acc).toEqual(1)
                done()
            })
        } catch (ex) {
            done(ex)
        }
    })
})