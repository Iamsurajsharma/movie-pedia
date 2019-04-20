import {MOVIE_CREDITS_RECEIVE,MOVIE_CREDITS_FETCHING,MOVIE_CREDITS_ERROR} from '../../actions/movies/CreditsMovieAction';

export default function MovieCredits  (state={
    fetching: false,
    error: null,
    MovieCredits:[]
},action){

    switch(action.type){
        case MOVIE_CREDITS_RECEIVE:
        return {
            ...state,
            MovieCredits: action.payload,
            fetching: false
        }
        case MOVIE_CREDITS_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case MOVIE_CREDITS_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}