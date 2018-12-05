import React, { Component } from 'react'
import { DocumentCard, DocumentCardTitle } from 'office-ui-fabric-react/lib/DocumentCard'
import {ProfileStatus} from '../../types'



export class ProfileStatusCard extends Component<ProfileStatus> {

    constructor(props: ProfileStatus) {
        super(props)
    }

    render = () => 
        <DocumentCard>
            <DocumentCardTitle title={this.props.subscribername} />
        </DocumentCard>
        
}