import { connect, MapStateToProps } from 'react-redux';
import { MockContentPage, DispatchProps, OwnProps, StateProps } from './MockContentPage'
import { TelemetryEvent, Config } from '../../../types'
import { SaveTelemetryEventAsBatch, SendBatchedTelemetryEvents } from '../../../redux/actions/telemetryActions'

function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return {
        ...ownProps,
        saveContentEvent: (header: string) => {
            let telemetryEvent: TelemetryEvent = {
                event: "content shown",
                payload: { header },
                timestamp: new Date(),
                session: "session",
            }
            SaveTelemetryEventAsBatch(telemetryEvent)(dispatch)
        },
        sendBatch: (telemetryEvent: TelemetryEvent, config: any) =>
            SendBatchedTelemetryEvents(telemetryEvent, config)(dispatch)
    }
}

interface myReduxState {
    config: Config
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, myReduxState> =
    (state: myReduxState, ownProps: OwnProps) => {
        return {
            ...ownProps,
            config: state.config
        }
    }

export default connect
    <StateProps, DispatchProps, OwnProps, myReduxState>
    (mapStateToProps, mapDispatchToProps)
    (MockContentPage)
