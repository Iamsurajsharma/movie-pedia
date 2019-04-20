import {TV_SHOW_CREDITS_RECEIVE,TV_SHOW_CREDITS_FETCHING,TV_SHOW_CREDITS_ERROR} from '../../actions/tv/CreditsTvShowAction';

export default function TvShowCredits  (state={
    fetching: false,
    error: null,
    TvShowCredits:[]
},action){

    switch(action.type){
        case TV_SHOW_CREDITS_RECEIVE:
        return {
            ...state,
            TvShowCredits: action.payload,
            fetching: false
        }
        case TV_SHOW_CREDITS_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case TV_SHOW_CREDITS_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}