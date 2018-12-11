import React, { Component } from 'react'
import { TelemetryEvent } from '../../../types'
import { DocumentCard, DocumentCardTitle } from 'office-ui-fabric-react/lib/DocumentCard'
import { connect, MapStateToProps } from 'react-redux';

interface DispatchProps { }

interface OwnProps { }

interface StateProps { sentEvents: TelemetryEvent[] }

type Props = DispatchProps & StateProps & OwnProps

export class TelemetrySentList extends Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    renderEvent = (te: TelemetryEvent) =>
        <li>
            <DocumentCard>
                <DocumentCardTitle title={te.event} />
                <p>{te.session}</p>
                <p>{te.timestamp.toISOString()}</p>
                <div>{te.payload}</div>
            </DocumentCard>
        </li>

    renderList = (l: TelemetryEvent[]) =>
        <div>
            <ul>
                {l.map(this.renderEvent)}
            </ul>
        </div>

    render = () =>
        <div>
            <h2>Sent Monitor</h2>
            {
                this.props.sentEvents
                && this.renderList(this.props.sentEvents)
                || <h2>No event batch found</h2>
            }
        </div>

}

function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return {
        ...ownProps,
    }
}

interface myReduxState {
    telemetry: {
        sentEvents: TelemetryEvent[]
    }
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, myReduxState> =
    (state: myReduxState, ownProps: OwnProps) => {
        return {
            ...ownProps,
            sentEvents: state.telemetry && state.telemetry.sentEvents
        }
    }

export default connect
    <StateProps, DispatchProps, OwnProps, myReduxState>
    (mapStateToProps, mapDispatchToProps)
    (TelemetrySentList)
