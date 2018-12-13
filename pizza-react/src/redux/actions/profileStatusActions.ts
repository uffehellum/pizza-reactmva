import { ActionTypes, DispatchFunction, ProfileStatus, ProfileStatusRequest } from '../../types'
import { FetchProfile, ProfileStatusConfig } from '../../service/profile'

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
