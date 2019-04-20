import {MOVIE_VIDEOS_RECEIVE,MOVIE_VIDEOS_FETCHING,MOVIE_VIDEOS_ERROR} from '../../actions/movies/VideosMovieAction';

export default function MovieVideos  (state={
    fetching: false,
    error: null,
    MovieVideos:[]
},action){

    switch(action.type){
        case MOVIE_VIDEOS_RECEIVE:
        return {
            ...state,
            MovieVideos: action.payload,
            fetching: false
        }
        case MOVIE_VIDEOS_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case MOVIE_VIDEOS_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}