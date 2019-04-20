import {RECOMMEND_MOVIE_RECEIVE,RECOMMEND_MOVIE_FETCHING,RECOMMEND_MOVIE_ERROR} from '../../actions/movies/RecommendMovieAction';

export default function RecommendMovies  (state={
    fetching: false,
    error: null,
    RecommendMovies:[]
},action){

    switch(action.type){
        case RECOMMEND_MOVIE_RECEIVE:
        return {
            ...state,
            RecommendMovies: action.payload,
            fetching: false
        }
        case RECOMMEND_MOVIE_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case RECOMMEND_MOVIE_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}