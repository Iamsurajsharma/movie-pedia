import {TV_SHOW_GENRE_VALUE_FETCHING,TV_SHOW_GENRE_VALUE_RECEIVE,TV_SHOW_GENRE_VALUE_ERROR} from '../../actions/tv/DiscoverTvShowsByGenreAction';

export default function TvShowGenreValues  (state={
    fetching: false,
    error: null,
    TvShowGenreValues:[]
},action){

    switch(action.type){
        case TV_SHOW_GENRE_VALUE_RECEIVE:
        return {
            ...state,
            TvShowGenreValues: action.payload,
            fetching: false
        }
        case TV_SHOW_GENRE_VALUE_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case TV_SHOW_GENRE_VALUE_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}