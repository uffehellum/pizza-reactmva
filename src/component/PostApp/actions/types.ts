
export const FETCH_POSTS = 'FETCH_POSTS'
export const NEW_POST = 'NEW_POST'

export interface Post {
    body: string
    id: number
    title: string
    userId: number
}

export interface PostsState {
    posts: Post[]
}
