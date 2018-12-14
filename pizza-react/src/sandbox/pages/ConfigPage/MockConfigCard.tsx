import React, { Component, FormEvent } from 'react'
import { ActionButton } from 'office-ui-fabric-react/lib/Button'
import { DocumentCard, DocumentCardTitle } from 'office-ui-fabric-react/lib/DocumentCard'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import { Config, ActionTypes } from '../../../types'
import { connect, MapStateToProps } from 'react-redux';

interface DispatchProps {
    submit: (config: Config) => void
}

interface OwnProps { }

interface StateProps { config: Config }

type Props = DispatchProps & StateProps & OwnProps

export class MockRequestProfileStatusCard extends Component<Props, any> {

    prefillLocalhost = () => this.props.submit({
        ContentUrl: 'http://localhost:3002/contentmock',
        ProfileStatusUrl: 'http://localhost:3003/profilemock',
        TelemetryUrl: 'https://vortex-sandbox.data.microsoft.com/collect/v1',
    })

    prefillStage = () => this.props.submit({
        ContentUrl: 'http://stage/content',
        ProfileStatusUrl: 'http://stage/profile',
        TelemetryUrl: 'https://vortex-sandbox.data.microsoft.com/collect/v1',
    })

    prefillProduction = () => this.props.submit({
        ContentUrl: 'http://xbox.com/content',
        ProfileStatusUrl: 'http://xbox.com/profile',
        TelemetryUrl: 'https://vortex.data.microsoft.com/collect/v1',
    })

    constructor(props: Props) {
        super(props)
    }

    onSubmit = (e: FormEvent<any>) => {
        e.preventDefault()
    }

    onChangeText = (e: any, newValue?: string) => {
        this.props.submit({
            ...this.props.config,
            [e.target.name]: newValue,
        })
    }

    render = () =>
        <DocumentCard>
            <DocumentCardTitle title="Enter mock config" />
            <form onSubmit={this.onSubmit} className="docs-TextFieldExample">
                <TextField
                    label="ContentUrl"
                    name="ContentUrl"
                    className="contentUrlClass"
                    defaultValue={this.props.config.ContentUrl}
                    required={true}
                    onChange={this.onChangeText}
                />
                <TextField
                    label="ProfileStatusUrl"
                    name="ProfileStatusUrl"
                    defaultValue={this.props.config.ProfileStatusUrl}
                    required={true}
                    onChange={this.onChangeText}
                />
                <ActionButton onClick={this.prefillLocalhost} >prefillLocalhost</ActionButton>
                <ActionButton onClick={this.prefillStage} >prefillStage</ActionButton>
                <ActionButton onClick={this.prefillProduction} >prefillProduction</ActionButton>
            </form>
        </DocumentCard>

}

function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return {
        ...ownProps,
        submit: (config: Config) => dispatch({
            type: ActionTypes.CONFIG_FETCH,
            payload: config,
        })
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
    (MockRequestProfileStatusCard)
