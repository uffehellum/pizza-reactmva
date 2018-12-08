import { ActionTypes, ActionData, Config } from '../../types'

const initialState: Config = {}

export default function postReducer(state = initialState, action: ActionData) {
    switch (action.type) {
        case ActionTypes.CONFIG_FETCH:
            return action.payload
        case ActionTypes.CONFIG_UPDATE_ITEM:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        default:
            return state
    }
}
