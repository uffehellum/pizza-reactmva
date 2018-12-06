import { ActionTypes, ProfileStatus, ProfileStatusRequest } from '../../types'
import { FetchProfile, ProfileStatusConfig } from '../../repository/profile'

interface DispatchType {
    type: string
    payload: any
}

type DispatchFunction = (x: DispatchType) => void

export const fetchProfileStatus = 
    (request: ProfileStatusRequest, config:ProfileStatusConfig) => 
    (dispatch: DispatchFunction) =>
    FetchProfile(request, config)
        .then(response => dispatch({
            type: ActionTypes.PROFILESTATUS_FETCH,
            payload: response,
        }))

export const clearProfileStatus = () => (dispatch: DispatchFunction) =>
    dispatch({
        type: ActionTypes.PROFILESTATUS_FETCH,
        payload: { },
    })
