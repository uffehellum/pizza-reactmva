import {ActionTypes , ActionData} from '../actions/types'

const initialState = {
    items: [],
    item: {},
}

export default function postReducer(state=initialState, action: ActionData){
    switch(action.type){
        case ActionTypes.FETCH_POSTS:
        return {
            ...state,
            items:action.payload
        }
        default:
            return state
    }
}
