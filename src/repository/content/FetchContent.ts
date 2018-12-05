import { Content, ContentRequest } from '../../types'

const defaultUrl = "hppt://localhost:1234/content"

export default async function FetchContent(request: ContentRequest, 
    relayUrl: string = defaultUrl): Promise<Content> {
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
