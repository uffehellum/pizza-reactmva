import { ActionTypes, Post } from './types'

interface DispatchType {
    type: string
    payload: Post[]
}


export function fetchPosts(){
    return function(dispatch: any) {
    const d = dispatch
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => d({
            type: ActionTypes.FETCH_POSTS,
            payload: posts,
        }))
    }
}
