import { ActionTypes, ProfileStatus, ProfileStatusRequest } from '../../types'
import {FetchProfile} from '../../repository/profile'

interface DispatchType {
    type: string
    payload: any
}

type DispatchFunction = (x: DispatchType) => void

export const fetchProfileStatus = (request: ProfileStatusRequest) => (dispatch: DispatchFunction) =>
    FetchProfile(request)
        .then(response => dispatch({
            type: ActionTypes.PROFILESTATUS_FETCH,
            payload: response,
        }))
