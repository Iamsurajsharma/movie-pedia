import {MOVIE_GENRE_VALUE_FETCHING,MOVIE_GENRE_VALUE_RECEIVE,MOVIE_GENRE_VALUE_ERROR} from '../../actions/movies/DiscoverMoviesByGenreAction';

export default function MovieGenreValues  (state={
    fetching: false,
    error: null,
    MovieGenreValues:[]
},action){

    switch(action.type){
        case MOVIE_GENRE_VALUE_RECEIVE:
        return {
            ...state,
            MovieGenreValues: action.payload,
            fetching: false
        }
        case MOVIE_GENRE_VALUE_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case MOVIE_GENRE_VALUE_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}