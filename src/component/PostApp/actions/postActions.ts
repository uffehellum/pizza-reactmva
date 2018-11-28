import { ActionTypes, Post } from './types'

interface DispatchType {
    type: string
    payload: any
}

type DispatchFunction = (x: DispatchType) => void

export const fetchPosts = () => (dispatch: DispatchFunction) =>
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: ActionTypes.FETCH_POSTS,
            payload: posts,
        }))

export const newPost = (post:Post) => 
(dispatch: DispatchFunction) =>
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(post)
})
    .then(res => res.json())
    .then(post => dispatch({
        type: ActionTypes.NEW_POST,
        payload: post
    }))
