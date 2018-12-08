import { Post } from '../../types'

export default async function typicodeFetchPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts: Post[] = await res.json()
    return posts // fix test
    // return posts.slice(0,50) // break test:
}
