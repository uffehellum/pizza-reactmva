import React from 'react'
import ConfigurationCard from './ConfigurationCard'
import MockConfigCard from './MockConfigCard'
// import ProfileStatusEntryCard from './ProfileStatusEntryCard'
// import './ProfileStatusPage.css'

export default function ProfileStatusPage() {
    return (
        <div>
            <h1>Debug Configuration Settings</h1>
            <div className="container">
                <div className="column">
                    <h2>Current Configuration</h2>
                    <ConfigurationCard />
                </div>
                <div className="column">
                    <h2>Current Configuration</h2>
                    <MockConfigCard />
                </div>
            </div>
        </div>
    )
}
