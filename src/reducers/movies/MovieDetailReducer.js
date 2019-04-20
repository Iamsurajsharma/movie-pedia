import {MOVIE_DETAIL_RECEIVE,MOVIE_DETAIL_FETCHING,MOVIE_DETAIL_ERROR} from '../../actions/movies/MovieDetailAction';

export default function MovieDetail  (state={
    fetching: false,
    error: null,
    MovieDetail:[]
},action){

    switch(action.type){
        case MOVIE_DETAIL_RECEIVE:
        return {
            ...state,
            MovieDetail: action.payload,
            fetching: false
        }
        case MOVIE_DETAIL_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case MOVIE_DETAIL_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}