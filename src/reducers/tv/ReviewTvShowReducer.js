import {TV_SHOW_REVIEWS_RECEIVE,TV_SHOW_REVIEWS_FETCHING,TV_SHOW_REVIEWS_ERROR} from '../../actions/tv/ReviewsTvShowAction';

export default function TvShowReviews  (state={
    fetching: false,
    error: null,
    TvShowReviews:[]
},action){

    switch(action.type){
        case TV_SHOW_REVIEWS_RECEIVE:
        return {
            ...state,
            TvShowReviews: action.payload,
            fetching: false
        }
        case TV_SHOW_REVIEWS_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case TV_SHOW_REVIEWS_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}