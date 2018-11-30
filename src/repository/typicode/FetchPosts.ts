import { Post } from '../../types'

export default async function typicodeFetchPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts: Post[] = await res.json()
    return posts
}
