import { FETCH_POSTS, NEW_POST, Post, PostsState } from './types'

interface DispatchType {
    type:string
    payload:PostsState
}

 
export const fetchPosts = () => (dispatch:((x:DispatchType)=>void)) =>
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts,
        }))
