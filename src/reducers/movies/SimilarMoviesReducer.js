import {SIMILAR_MOVIES_RECEIVE,SIMILAR_MOVIES_FETCHING,SIMILAR_MOVIES_ERROR} from '../../actions/movies/SimilarMoviesActions';

export default function SimilarMovies  (state={
    fetching: false,
    error: null,
    SimilarMovies:[]
},action){

    switch(action.type){
        case SIMILAR_MOVIES_RECEIVE:
        return {
            ...state,
            SimilarMovies: action.payload,
            fetching: false
        }
        case SIMILAR_MOVIES_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case SIMILAR_MOVIES_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}