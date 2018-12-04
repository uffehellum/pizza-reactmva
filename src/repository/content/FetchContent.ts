import { Content, ContentRequest } from '../../types'

export default async function FetchContent(relayUrl: string, request: ContentRequest): Promise<Content> {
    const params: RequestInit = {
        method: 'POST',
        mode:'cors',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(request)
    }
    const response = await fetch(relayUrl, params)
    const content: Content = await response.json()
    return content
}
