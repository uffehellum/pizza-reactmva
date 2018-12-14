import { FETCH_SUGGESTIONS, FETCH_SEARCH } from '../../types/SearchTypes';
import axios from 'axios'

interface DispatchType {
    type: string
    payload: any
}
type DispatchFunction = (x: DispatchType) => void

export const fetchSuggestions = (term: any) => (dispatch: DispatchFunction) => {
    if(term){
    axios({
        method: 'POST',
        url: 'https://search-dev.assist.gameservices.xboxlive.com/search/indexes(\'help-content-v2\')/docs/search.post.suggest?api-version=2017-11-11',
        headers: { 'content-type': 'application/json' },
        responseType: 'stream',
        data: JSON.stringify(
            {
                "filter": "isConsoleAppVisible eq true and search.in(type, 'HelpArticle, InternalLink, Protocol')",
                "fuzzy": true,
                "search": term,
                "select": "title_en_us,topic_en_us",
                "searchFields": "title_en_us,topic_en_us",
                "suggesterName": "articleSuggester",
                "highlightPreTag": "<span class=\"suggestHighlight\">",
                "highlightPostTag": "</span>"
            }
        )
    })
        .then(response => dispatch({
            type: FETCH_SUGGESTIONS,
            payload: response.data.value
        })
        );
    }
    else{
        dispatch({
            type: FETCH_SUGGESTIONS,
            payload: []
        });
    }
}

export const fetchSearch = (e: any) => (dispatch: DispatchFunction) => {
    e.preventDefault();
    if (e.target[0].value) {
        axios({
            method: 'POST',
            url: 'https://search-dev.assist.gameservices.xboxlive.com/search/indexes(\'help-content-v2\')/docs/search.post.search?api-version=2017-11-11',
            headers: { 'content-type': 'application/json' },
            responseType: 'stream',
            data: JSON.stringify({
                "filter": "isConsoleAppVisible eq true and search.in(type, 'HelpArticle, InternalLink, Protocol')",
                "count": false,
                "queryType": "full",
                "scoringProfile": "articleScoringProfile",
                "search": e.target[0].value,
                "searchMode": "any",
                "select": "title_en_us,topic_en_us,content_en_us,type,subType,activationUrl,iconUnicodePoint",
                "searchFields": "title_en_us,topic_en_us,content_en_us",
                "skip": 0,
                "top": 30
            })
        })
            .then(response => dispatch({
                type: FETCH_SEARCH,
                payload: response.data.value
            })
            );
    } else {
        dispatch({
            type: FETCH_SEARCH,
            payload: []
        });
    }

}