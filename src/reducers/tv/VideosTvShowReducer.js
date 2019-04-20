import {TV_SHOW_VIDEOS_RECEIVE,TV_SHOW_VIDEOS_FETCHING,TV_SHOW_VIDEOS_ERROR} from '../../actions/tv/VideosTvShowActions';

export default function TvShowVideos  (state={
    fetching: false,
    error: null,
    TvShowVideos:[]
},action){

    switch(action.type){
        case TV_SHOW_VIDEOS_RECEIVE:
        return {
            ...state,
            TvShowVideos: action.payload,
            fetching: false
        }
        case TV_SHOW_VIDEOS_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case TV_SHOW_VIDEOS_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}