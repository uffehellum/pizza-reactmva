import { FETCH_SUGGESTIONS, FETCH_SEARCH } from '../../types/SearchTypes';

const initialState = {
    suggestions: [],
    searchArticles: [],
    searchHeader: ''
}

export default function(state = initialState, action: any){
    switch(action.type){
        case FETCH_SUGGESTIONS:
        return{
            ...state,
            suggestions: action.payload
        }
        case FETCH_SEARCH:
        return{
            ...state,
            searchHeader: "Your Search Results",
            suggestions: [],
            searchArticles: action.payload
        }
        default:
        return state;
    }
}