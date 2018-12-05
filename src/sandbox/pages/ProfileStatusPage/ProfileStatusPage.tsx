import React from 'react'
import ProfileStatusCard from '../../../components/ProfileStatusCard'

export default function ProfileStatusPage() {
    return (
        <div>
            <h1>Sample ProfileStatusPage</h1>
            <ProfileStatusCard 
                currentlyValid={true} 
                subscribername="bob smith" 
                subscriptionlevel="platinum"
                xboxtoken="token" />
        </div>
    )
}
