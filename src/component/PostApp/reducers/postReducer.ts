import {ActionTypes , ActionData} from '../actions/types'
import {Post} from '../actions/types'

const initialState :Post[] = []

export default function postReducer(state=initialState, action: ActionData){
    switch(action.type){
        case ActionTypes.FETCH_POSTS:
            return action.payload
        default:
            return state
    }
}
