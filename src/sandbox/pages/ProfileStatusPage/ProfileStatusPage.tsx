import React from 'react'
import ProfileStatusCard from '../../../components/ProfileStatusCard'
import MockRequestProfileStatusCard from './MockRequestProfileStatusCard'
import ProfileStatusEntryCard from './ProfileStatusEntryCard'
import './ProfileStatusPage.css'

export default function ProfileStatusPage() {
    return (
        <div>
            <h1>Sample ProfileStatusPage</h1>
            <div className="container">
                <div className="column">
                    <h2>Profile status</h2>
                    <ProfileStatusCard />
                </div>
                <div className="column">
                    <h2>Profile mock data</h2>
                    <ProfileStatusEntryCard />
                </div>
                <div className="column">
                    <h2>Profile mock request</h2>
                    <MockRequestProfileStatusCard />
                </div>
            </div>
        </div>
    )
}
