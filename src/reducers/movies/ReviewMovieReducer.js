import {MOVIE_REVIEWS_RECEIVE,MOVIE_REVIEWS_FETCHING,MOVIE_REVIEWS_ERROR} from '../../actions/movies/ReviewsMovieAction';

export default function MovieReviews  (state={
    fetching: false,
    error: null,
    MovieReviews:[]
},action){

    switch(action.type){
        case MOVIE_REVIEWS_RECEIVE:
        return {
            ...state,
            MovieReviews: action.payload,
            fetching: false
        }
        case MOVIE_REVIEWS_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case MOVIE_REVIEWS_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}