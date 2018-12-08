import { ProfileStatusRequest, ProfileStatus } from '../../types'

const defaultUrl = 'http://localhost:1234/profileserver'

export interface ProfileStatusConfig {
    profileStatusUrl:string
}

export async function FetchProfile(request: ProfileStatusRequest, config: ProfileStatusConfig): Promise<ProfileStatus> {
    const url = config.profileStatusUrl || defaultUrl
    const params: RequestInit = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(request)
    }
    const response = await fetch(url, params)
    const profileStatus: ProfileStatus = await response.json()
    return profileStatus
}
