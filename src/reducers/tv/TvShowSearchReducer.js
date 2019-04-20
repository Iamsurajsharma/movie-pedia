import {TV_SHOW_SEARCH_RECEIVE,TV_SHOW_SEARCH_FETCHING,TV_SHOW_SEARCH_ERROR} from '../../actions/tv/TvShowSearchAction';

export default function TvShowSearch  (state={
    fetching: false,
    error: null,
    TvShowSearch:{data:{
        page:0,
        total_results:0,
        total_pages:0,
        results:[]
},status:0,statusText:""}
},action){

    switch(action.type){
        case TV_SHOW_SEARCH_RECEIVE:
        return {
            ...state,
            TvShowSearch:   action.payload.page===1?{status:action.payload.response.status,satusText:action.payload.response.satusText,
                data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:action.payload.response.data.results}}:
                    {...state.TvShowSearch,status:action.payload.response.status,statusText:action.payload.response.statusText,
                    data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:state.TvShowSearch.data.results.concat(action.payload.response.data.results)}},
            fetching: false
        }
        case TV_SHOW_SEARCH_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case TV_SHOW_SEARCH_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}