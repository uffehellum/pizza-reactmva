import { ActionTypes, ActionData, Post, ProfileStatus } from '../../types'

const initialState: ProfileStatus = {
    currentlyValid: false,
    subscribername: '',
    subscriptionlevel: 'silver',
    xboxtoken: '1234'
}

export default function postReducer(state = initialState, action: ActionData) {
    switch (action.type) {
        case ActionTypes.PROFILESTATUS_FETCH:
            return action.payload
        default:
            return state
    }
}
