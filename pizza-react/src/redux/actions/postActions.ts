import { ActionTypes, Post } from '../../types'
import typicode from '../../service/typicode'

interface DispatchType {
    type: string
    payload: any
}

type DispatchFunction = (x: DispatchType) => void

export const fetchPosts = () => (dispatch: DispatchFunction) =>
    typicode.FetchPosts()
        .then(posts => dispatch({
            type: ActionTypes.FETCH_POSTS,
            payload: posts,
        }))

export const newPost = (post: Post) => (dispatch: DispatchFunction) =>
    typicode.AddPost(post)
        .then(res => res.json())
        .then(post => dispatch({
            type: ActionTypes.NEW_POST,
            payload: post
        }))
