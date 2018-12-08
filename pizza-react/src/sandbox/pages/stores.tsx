import React from 'react'
import StorePane from '../../components/StorePane'
import samples from '../../data'

export default function stores() {
    return (
        <div>
            <h1>Sample Store Pane</h1>
            <StorePane stores={samples.stores} />
        </div>
    )
}
