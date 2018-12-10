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
<<<<<<< Updated upstream
        <li>{te.event}</li>

    renderBatch = (b: TelemetryBatch) =>
        <Fragment>
            <p>Started {b.timestamp}</p>
            <ul>
                {b.events.map(this.renderEvent)}
            </ul>
        </Fragment>
=======
        <li>
            <DocumentCard>
                <DocumentCardTitle title={te.event} />
                <p>{te.session}</p>
                <p>{te.timestamp}</p>
                <div>{te.payload}</div>
            </DocumentCard>
        </li>

    renderBatch = (b: TelemetryBatch) =>
        <div>
            <p>Started {b.timestamp.toISOString()}</p>
            <ul>
                {b.events.map(this.renderEvent)}
            </ul>
        </div>
>>>>>>> Stashed changes

    render = () =>
        <div>
            <h2>TelemetryBatchList</h2>
<<<<<<< Updated upstream
            {this.props.currentBatch && this.renderBatch(this.props.currentBatch)}
=======
            {
                this.props.currentBatch
                && this.renderBatch(this.props.currentBatch)
                || <h2>No event batch found</h2>
            }
>>>>>>> Stashed changes
        </div>

}

function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return {
        ...ownProps,
    }
}

interface myReduxState {
<<<<<<< Updated upstream
    telemetryState: {
=======
    telemetry: {
>>>>>>> Stashed changes
        currentBatch: TelemetryBatch
    }
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, myReduxState> =
    (state: myReduxState, ownProps: OwnProps) => {
        return {
            ...ownProps,
<<<<<<< Updated upstream
            currentBatch: state.telemetryState && state.telemetryState.currentBatch
=======
            currentBatch: state.telemetry && state.telemetry.currentBatch
>>>>>>> Stashed changes
        }
    }

export default connect
    <StateProps, DispatchProps, OwnProps, myReduxState>
    (mapStateToProps, mapDispatchToProps)
    (TelemetryBatchList)
