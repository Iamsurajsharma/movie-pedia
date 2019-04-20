import {DISCOVER_MOVIE_BY_GENRE_RECEIVE,DISCOVER_MOVIE_BY_GENRE_FETCHING,DISCOVER_MOVIE_BY_GENRE_ERROR} from '../../actions/movies/DiscoverMoviesByGenreAction';

export default function MovieByGenre  (state={
    fetching: false,
    error: null,
    MovieByGenre:{data:{
        page:0,
        total_results:0,
        total_pages:0,
        results:[]
},status:0,statusText:""}
},action){

    switch(action.type){
        case DISCOVER_MOVIE_BY_GENRE_RECEIVE:
        return {
            ...state,
            MovieByGenre:action.payload.page===1?{status:action.payload.response.status,satusText:action.payload.response.satusText,
                data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:action.payload.response.data.results}}:
                    {...state.MovieByGenre,status:action.payload.response.status,statusText:action.payload.response.statusText,
                    data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:state.MovieByGenre.data.results.concat(action.payload.response.data.results)}},
            fetching: false
        }
        case DISCOVER_MOVIE_BY_GENRE_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case DISCOVER_MOVIE_BY_GENRE_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}