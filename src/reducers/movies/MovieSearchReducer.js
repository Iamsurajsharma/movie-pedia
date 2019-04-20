import {MOVIE_SEARCH_RECEIVE,MOVIE_SEARCH_FETCHING,MOVIE_SEARCH_ERROR} from '../../actions/movies/MoviesSearchAction';

export default function MovieSearch  (state={
    fetching: false,
    error: null,
    MovieSearch:{data:{
            page:0,
            total_results:0,
            total_pages:0,
            results:[]
    },status:0,satusText:""}
},action){

    switch(action.type){
        case MOVIE_SEARCH_RECEIVE:
        return {
            ...state,
            MovieSearch:
                action.payload.page===1?{status:action.payload.response.status,satusText:action.payload.response.satusText,
                data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:action.payload.response.data.results}}:
                    {...state.MovieSearch,status:action.payload.response.status,satusText:action.payload.response.satusText,
                    data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:state.MovieSearch.data.results.concat(action.payload.response.data.results)}}
            ,
            fetching: false
        }
        case MOVIE_SEARCH_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case MOVIE_SEARCH_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}