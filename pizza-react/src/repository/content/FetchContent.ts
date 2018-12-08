import { Content, ContentRequest } from '../../types'

const defaultUrl = "hppt://localhost:1234/content"

export interface ContentConfig {
    contentUrl: string
}

export default async function FetchContent(request: ContentRequest, 
    config: ContentConfig): Promise<Content> {
    const relayUrl = config.contentUrl || defaultUrl
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
