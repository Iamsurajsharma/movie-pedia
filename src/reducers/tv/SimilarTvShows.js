import {SIMILAR_TV_RECEIVE,SIMILAR_TV_FETCHING,SIMILAR_TV_ERROR} from '../../actions/tv/SimilarTvShowAction';

export default function SimilarTvShows  (state={
    fetching: false,
    error: null,
    SimilarTvShows:[]
},action){

    switch(action.type){
        case SIMILAR_TV_RECEIVE:
        return {
            ...state,
            SimilarTvShows: action.payload,
            fetching: false
        }
        case SIMILAR_TV_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case SIMILAR_TV_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}