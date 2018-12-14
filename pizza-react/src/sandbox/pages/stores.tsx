import React from 'react'
import StorePane from '../../components/StorePane'
import samples from '../../data'
import SearchBar from '../../components/Search/SearchBar'

export default function stores() {
    return (
        <div>
            <h2>Search Here</h2>
            <SearchBar />
            <h1>Sample Store Pane</h1>
            <StorePane stores={samples.stores} />
        </div>
    )
}
