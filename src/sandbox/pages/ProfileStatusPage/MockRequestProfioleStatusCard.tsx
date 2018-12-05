import React, { Component } from 'react'
import { DocumentCard, DocumentCardTitle } from 'office-ui-fabric-react/lib/DocumentCard'
import {ProfileStatus} from '../../../types'

export default class MockRequestProfileStatusCard extends Component<{}, ProfileStatus> {

    render = () => 
        <DocumentCard>
            <DocumentCardTitle title="Enter mock profile status" />
            
        </DocumentCard>
        
    
}