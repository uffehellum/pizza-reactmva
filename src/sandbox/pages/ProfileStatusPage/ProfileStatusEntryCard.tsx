import React, { Component, FormEvent } from 'react'
import { PrimaryButton, ActionButton } from 'office-ui-fabric-react/lib/Button'
import { DocumentCard, DocumentCardTitle } from 'office-ui-fabric-react/lib/DocumentCard'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import { ProfileStatus, ActionTypes } from '../../../types'
import { connect, MapStateToProps } from 'react-redux';

interface DispatchProps {
    submit: (profileStatus: ProfileStatus) => void
}

interface OwnProps { }

interface StateProps { profileStatus: ProfileStatus }

type Props = DispatchProps & StateProps & OwnProps

export class ProfileStatusEntryCard extends Component<Props, any> {

    prefillJoan = () => this.props.submit({
        currentlyValid: true,
        subscribername: 'Joan Pumpkin',
        subscriptionlevel: 'Gold',
        xboxtoken: 'joan token',
        validfrom: new Date(2018, 10, 31),
        validto: new Date(2020, 10, 31),
    })

    prefillPeter = () => this.props.submit({
        currentlyValid: false,
        subscribername: 'Peter Peter',
        subscriptionlevel: 'Silver',
        xboxtoken: 'peter token',
        validfrom: undefined,
        validto: undefined,
    })

    constructor(props: Props) {
        super(props)
    }

    onSubmit = (e: FormEvent<any>) => {
        e.preventDefault()
    }

    onChanged = ({ target }: { target: { name: string, value: string } }) =>
        this.setState({ [target.name]: target.value })

    onChangeText = (e: any, newValue?: string) => {
        this.props.submit({
            ...this.props.profileStatus,
            [e.target.name]: newValue,
        })
    }

    render = () =>
        <DocumentCard>
            <DocumentCardTitle title="Enter mock profile status" />
            <form onSubmit={this.onSubmit} className="docs-TextFieldExample">
                <TextField
                    label="currentlyValid"
                    name="currentlyValid"
                    defaultValue={this.props.profileStatus.currentlyValid ? 'yes' : 'no'}
                    required={true}
                    readOnly={true}
                    onChange={this.onChangeText}
                />
                <TextField
                    label="subscribername"
                    name="subscribername"
                    defaultValue={this.props.profileStatus.subscribername}
                    required={true}
                    onChange={this.onChangeText}
                />
                <TextField
                    label="subscriptionlevel"
                    name="subscriptionlevel"
                    defaultValue={this.props.profileStatus.subscriptionlevel}
                    required={true}
                    onChange={this.onChangeText}
                />
                <TextField
                    label="xboxtoken"
                    name="xboxtoken"
                    defaultValue={this.props.profileStatus.xboxtoken}
                    required={true}
                    onChange={this.onChangeText}
                />
                <ActionButton onClick={this.prefillJoan} >Joan</ActionButton>
                <ActionButton onClick={this.prefillPeter} >Peter</ActionButton>
            </form>
        </DocumentCard>

}

function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return {
        ...ownProps,
        submit: (profileStatus: ProfileStatus) => dispatch({
            type: ActionTypes.PROFILESTATUS_FETCH,
            payload: profileStatus,
        })
    }
}

interface myReduxState {
    profileStatus: ProfileStatus
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, myReduxState> =
    (state: myReduxState, ownProps: OwnProps) => {
        return {
            ...ownProps,
            profileStatus: state.profileStatus
        }
    }

export default connect
    <StateProps, DispatchProps, OwnProps, myReduxState>
    (mapStateToProps, mapDispatchToProps)
    (ProfileStatusEntryCard)
