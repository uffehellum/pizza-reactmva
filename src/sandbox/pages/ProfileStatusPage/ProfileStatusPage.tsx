import React from 'react'
import ProfileStatusCard from '../../../components/ProfileStatusCard'
import MockRequestProfileStatusCard from './MockRequestProfileStatusCard'

export default function ProfileStatusPage() {
    return (
        <div>
            <h1>Sample ProfileStatusPage</h1>
            <ProfileStatusCard />

            <MockRequestProfileStatusCard />
        </div>
    )
}
