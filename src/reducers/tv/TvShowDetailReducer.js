import {TV_SHOW_DETAIL_RECEIVE,TV_SHOW_DETAIL_FETCHING,TV_SHOW_DETAIL_ERROR} from '../../actions/tv/TvShowDetailAction';

export default function TvShowDetail  (state={
    fetching: false,
    error: null,
    TvShowDetail:[]
},action){

    switch(action.type){
        case TV_SHOW_DETAIL_RECEIVE:
        return {
            ...state,
            TvShowDetail: action.payload,
            fetching: false
        }
        case TV_SHOW_DETAIL_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case TV_SHOW_DETAIL_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}