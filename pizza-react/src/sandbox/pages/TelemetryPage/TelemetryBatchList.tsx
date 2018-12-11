import React, { Component } from 'react'
import { TelemetryBatch, TelemetryEvent } from '../../../types'
import { DocumentCard, DocumentCardTitle } from 'office-ui-fabric-react/lib/DocumentCard'
import { connect, MapStateToProps } from 'react-redux';

interface DispatchProps { }

interface OwnProps { }

interface StateProps { currentBatch?: TelemetryBatch }

type Props = DispatchProps & StateProps & OwnProps

export class TelemetryBatchList extends Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    renderEvent = (te: TelemetryEvent) =>
        <li>
            <DocumentCard>
                <DocumentCardTitle title={te.event} />
                <p>{te.session}</p>
                <p>{te.timestamp.toISOString()}</p>
                <div>{JSON.stringify(te.payload)}</div>
            </DocumentCard>
        </li>

    renderBatch = (b: TelemetryBatch) =>
        <div>
            <p>Started {b.timestamp.toISOString()}</p>
            <ul>
                {b.events.map(this.renderEvent)}
            </ul>
        </div>

    render = () =>
        <div>
            <h2>Batch Monitor</h2>
            {
                this.props.currentBatch
                && this.renderBatch(this.props.currentBatch)
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
        currentBatch: TelemetryBatch
    }
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, myReduxState> =
    (state: myReduxState, ownProps: OwnProps) => {
        return {
            ...ownProps,
            currentBatch: state.telemetry && state.telemetry.currentBatch
        }
    }

export default connect
    <StateProps, DispatchProps, OwnProps, myReduxState>
    (mapStateToProps, mapDispatchToProps)
    (TelemetryBatchList)
