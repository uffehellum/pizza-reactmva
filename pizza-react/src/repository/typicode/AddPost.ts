import { Post } from '../../types'

export default async function typicodeAddPost(newPost: Post) {
    const params: RequestInit = {
        method: 'POST',
        mode:'cors',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newPost)
    }
    const result = await fetch('https://jsonplaceholder.typicode.com/posts', params)
    return result
}
