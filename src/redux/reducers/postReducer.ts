import { ActionTypes, ActionData, Post } from '../../types'

const initialState: Post[] = []

export default function postReducer(state = initialState, action: ActionData) {
    switch (action.type) {
        case ActionTypes.FETCH_POSTS:
            return action.payload
        case ActionTypes.NEW_POST:
            return [action.payload].concat(...state)
        default:
            return state
    }
}
