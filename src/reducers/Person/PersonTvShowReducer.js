import {PERSON_TV_SHOW_RECEIVE,PERSON_TV_SHOW_FETCHING,PERSON_TV_SHOW_ERROR} from '../../actions/Persons/PersonTvShowsAction';

export default function PersonTvShows  (state={
    fetching: false,
    error: null,
    PersonTvShows:[]
},action){

    switch(action.type){
        case PERSON_TV_SHOW_RECEIVE:
        return {
            ...state,
            PersonTvShows: action.payload,
            fetching: false
        }
        case PERSON_TV_SHOW_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case PERSON_TV_SHOW_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}