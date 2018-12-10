import React, { Component, Fragment } from 'react'
import { TelemetryBatch, TelemetryEvent, TelemetryState } from '../../../types'

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
        <li>{te.event}</li>

    renderBatch = (b: TelemetryBatch) =>
        <Fragment>
            <p>Started {b.timestamp}</p>
            <ul>
                {b.events.map(this.renderEvent)}
            </ul>
        </Fragment>

    render = () =>
        <div>
            <h2>TelemetryBatchList</h2>
            {this.props.currentBatch && this.renderBatch(this.props.currentBatch)}
        </div>

}

function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return {
        ...ownProps,
    }
}

interface myReduxState {
    telemetryState: {
        currentBatch: TelemetryBatch
    }
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, myReduxState> =
    (state: myReduxState, ownProps: OwnProps) => {
        return {
            ...ownProps,
            currentBatch: state.telemetryState && state.telemetryState.currentBatch
        }
    }

export default connect
    <StateProps, DispatchProps, OwnProps, myReduxState>
    (mapStateToProps, mapDispatchToProps)
    (TelemetryBatchList)
