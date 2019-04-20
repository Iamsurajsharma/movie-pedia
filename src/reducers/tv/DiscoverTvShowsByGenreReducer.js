import {DISCOVER_TV_SHOW_BY_GENRE_RECEIVE,DISCOVER_TV_SHOW_BY_GENRE_FETCHING,DISCOVER_TV_SHOW_BY_GENRE_ERROR} from '../../actions/tv/DiscoverTvShowsByGenreAction';

export default function TvShowByGenre  (state={
    fetching: false,
    error: null,
    TvShowByGenre:{data:{
        page:0,
        total_results:0,
        total_pages:0,
        results:[]
},status:0,statusText:""}
},action){

    switch(action.type){
        case DISCOVER_TV_SHOW_BY_GENRE_RECEIVE:
        return {
            ...state,
            TvShowByGenre: action.payload.page===1?{status:action.payload.response.status,satusText:action.payload.response.satusText,
                data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:action.payload.response.data.results}}:
                    {...state.TvShowByGenre,status:action.payload.response.status,statusText:action.payload.response.statusText,
                    data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:state.TvShowByGenre.data.results.concat(action.payload.response.data.results)}},
            fetching: false
        }
        case DISCOVER_TV_SHOW_BY_GENRE_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case DISCOVER_TV_SHOW_BY_GENRE_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}