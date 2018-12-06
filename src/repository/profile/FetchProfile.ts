import { ProfileStatusRequest, ProfileStatus } from '../../types'

const defaultUrl = 'http://localhost:1234/profileserver'

export async function FetchProfile(request: ProfileStatusRequest,url: string = defaultUrl): Promise<ProfileStatus> {
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
