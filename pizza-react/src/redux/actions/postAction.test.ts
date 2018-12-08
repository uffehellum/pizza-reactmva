import { fetchPosts, newPost } from './postActions'

describe('fetchPosts', () => {
    it('exists', () => {
        expect(fetchPosts).not.toBeNull()
    })
})

describe('newPost', () => {
    it('exists', () => {
        expect(newPost).not.toBeNull()
    })
})

// describe('post actions', () => {
//     it('thunk etc', () => {
//         const initialState = {}
//         // const middleware = [thunk]
//         const store = createStore(
//             rootReducer,
//             initialState,
//             applyMiddleware(thunk)
//         )
//         const callasync = async () => {
//             return await setTimeout(() => { data: 7 }, 100)
//         }

//         const fetchPosts = async () => {
//             const posts = await callasync();
//             return {
//                 type: 'FETCH_POSTS',
//                 payload: posts,
//             }
//         }

//         store.dispatch(wrap(fetchPosts())

//     })

// })
