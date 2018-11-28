
export const ActionTypes =
{
    FETCH_POSTS: 'FETCH_POSTS',
    NEW_POST: 'NEW_POST',
}

export interface ActionData {
    type: string
    payload: any
}

export interface Post {
    body: string
    id: number
    title: string
    userId: number
}

