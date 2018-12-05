import React, { Component, FormEvent } from 'react'
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button'
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

export class MockRequestProfileStatusCard extends Component<Props, any> {

    prefillJoan = () => this.setState({
        currentlyValid: '1',
        subscribername: 'Joan',
        subscriptionlevel: 'state level',
        xboxtoken: 'joan token',
    })

    constructor(props: Props) {
        super(props)
        this.state = {
            currentlyValid: props.profileStatus.currentlyValid ? '1' : '0',
            subscribername: props.profileStatus.subscribername,
            subscriptionlevel: props.profileStatus.subscriptionlevel,
            xboxtoken: props.profileStatus.xboxtoken,
        }
    }

    onSubmit = (e: FormEvent<any>) => {
        e.preventDefault()
        console.log(this.state)
        const profileStatus: ProfileStatus = {
            currentlyValid: '1' === this.state.currentlyValid,
            subscribername: this.state.subscribername,
            subscriptionlevel: this.state.subscriptionlevel,
            // validfrom?: Date
            // validto?: Date
            xboxtoken: this.state.xboxtoken,
        }
        this.props.submit(profileStatus)
    }

    onChanged = ({ target }: { target: { name: string, value: string } }) =>
        this.setState({ [target.name]: target.value })

    onChange = (e: any, newValue?: string) => {
        this.setState({ [e.target.name]: newValue })
    }

    render = () =>
        <DocumentCard>
            <DocumentCardTitle title="Enter mock profile status" />
            <form onSubmit={this.onSubmit} className="docs-TextFieldExample">
                <TextField
                    label="currentlyValid"
                    name="currentlyValid"
                    defaultValue={this.state.currentlyValid}
                    required={true}
                    onChange={this.onChange}
                />
                <TextField
                    label="subscribername"
                    name="subscribername"
                    defaultValue={this.state.subscribername}
                    required={true}
                    onChange={this.onChange}
                />
                <TextField
                    label="subscriptionlevel"
                    name="subscriptionlevel"
                    defaultValue={this.state.subscriptionlevel}
                    required={true}
                    onChange={this.onChange}
                />
                <TextField
                    label="xboxtoken"
                    name="xboxtoken"
                    defaultValue={this.state.xboxtoken}
                    required={true}
                    onChange={this.onChange}
                />
                <PrimaryButton type="submit">Submit</PrimaryButton>
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


interface initialState { } // & ProfileStatus

export default connect
    <StateProps, DispatchProps, OwnProps, myReduxState>
    (mapStateToProps, mapDispatchToProps)
    (MockRequestProfileStatusCard)
