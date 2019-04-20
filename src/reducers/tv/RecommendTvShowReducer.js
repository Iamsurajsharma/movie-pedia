import {RECOMMEND_TV_RECEIVE,RECOMMEND_TV_FETCHING,RECOMMEND_TV_ERROR} from '../../actions/tv/RecommendTvShowsAction';

export default function RecommendTvShow  (state={
    fetching: false,
    error: null,
    RecommendTvShow:[]
},action){

    switch(action.type){
        case RECOMMEND_TV_RECEIVE:
        return {
            ...state,
            RecommendTvShow: action.payload,
            fetching: false
        }
        case RECOMMEND_TV_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case RECOMMEND_TV_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}