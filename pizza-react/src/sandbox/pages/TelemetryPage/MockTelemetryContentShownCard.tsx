import React, { Component, FormEvent  } from 'react'
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button'
import { DocumentCard, DocumentCardTitle } from 'office-ui-fabric-react/lib/DocumentCard'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import { connect, MapStateToProps } from 'react-redux';
import { TelemetryEvent } from '../../../types'
import { SaveTelemetryEventAsBatch } from '../../../redux/actions/telemetryActions'

interface DispatchProps {
    saveEvent: (telemetryEvent: TelemetryEvent) => void
}

interface OwnProps { }

interface StateProps {  }

type Props = DispatchProps & StateProps & OwnProps
type State = TelemetryEvent

export class MockTelemetryContentShownCard extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            event: 'mock event',
            session: 'mock session',
            payload: '{a:1, b:2, c:3}',
            timestamp: new Date(),
        }
    }

    onSubmit = (e: FormEvent<any>) => {
        e.preventDefault()
        console.log(this.state)
        const telemetryEvent: TelemetryEvent = {
            timestamp: new Date(),
            event: this.state.event,
            payload: this.state.payload,
            session: this.state.session,
        }
        this.props.saveEvent(telemetryEvent)
    }

    onChangeText = (e: any, newValue?: string) => {
        let s = this.state as any
        s[e.target.name] = newValue
        this.setState(s)
    }

    render = () =>
        <DocumentCard>
            <DocumentCardTitle title="Enter mock telemetry event" />
            <form onSubmit={this.onSubmit} className="docs-TextFieldExample">
                <TextField
                    label="currentlyVeventalid"
                    name="event"
                    defaultValue={this.state.event}
                    required={true}
                    onChange={this.onChangeText}
                />
                <TextField
                    label="session"
                    name="session"
                    defaultValue={this.state.session}
                    required={true}
                    onChange={this.onChangeText}
                />
                <TextField
                    label="payload"
                    name="payload"
                    defaultValue={this.state.payload}
                    required={true}
                    onChange={this.onChangeText}
                />
                <TextField
                    label="timestamp"
                    name="timestamp"
                    defaultValue={this.state.timestamp.toISOString()}
                    required={false}
                />
                <PrimaryButton type="submit">Submit</PrimaryButton>
            </form>
        </DocumentCard>

}

function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return {
        ...ownProps,
        saveEvent: (telemetryEvent: TelemetryEvent) => 
            SaveTelemetryEventAsBatch(telemetryEvent) (dispatch)
    }
}

interface myReduxState { }

const mapStateToProps: MapStateToProps<StateProps, OwnProps, myReduxState> =
    (state: myReduxState, ownProps: OwnProps) => {
        return {
            ...ownProps,
        }
    }

interface initialState { } // & ProfileStatus

export default connect
    <StateProps, DispatchProps, OwnProps, myReduxState>
    (mapStateToProps, mapDispatchToProps)
    (MockTelemetryContentShownCard)
