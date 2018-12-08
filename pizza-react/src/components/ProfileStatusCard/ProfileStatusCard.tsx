import React, { Component } from 'react'
import { DocumentCard, DocumentCardTitle } from 'office-ui-fabric-react/lib/DocumentCard'
import { ProfileStatus } from '../../types'
import { connect, MapStateToProps } from 'react-redux'

export interface OwnProps {  }

interface StateProps {
    xprofileStatus: ProfileStatus
}

interface DispatchProps { }

type Props = StateProps & DispatchProps & OwnProps

interface State { }

class ProfileStatusCard extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
    }

    render = () =>
        <DocumentCard>
            <DocumentCardTitle title={
                'Profile status for ' + this.props.xprofileStatus.subscribername
                } />
            <p>{this.props.xprofileStatus.subscriptionlevel}</ p >
        </DocumentCard>

}


interface myReduxState {
    profileStatus: ProfileStatus
}


const mapStateToProps: MapStateToProps<StateProps, OwnProps, myReduxState> =
    (state: myReduxState, ownProps: OwnProps): StateProps => {
        return {
            ...ownProps,
            xprofileStatus: state.profileStatus,
        }
    }

function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return {
        // ...ownProps,
        //  fetchPosts: () => fetchPosts()(dispatch)
    }
}

export default connect
    <StateProps, DispatchProps, OwnProps, myReduxState>//
    (mapStateToProps, mapDispatchToProps)
    (ProfileStatusCard)
