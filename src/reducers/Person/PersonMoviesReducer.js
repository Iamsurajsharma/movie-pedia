import {PERSON_MOVIES_RECEIVE,PERSON_MOVIES_FETCHING,PERSON_MOVIES_ERROR} from '../../actions/Persons/PersonMoviesAction';

export default function PersonMovies  (state={
    fetching: false,
    error: null,
    PersonMovies:[]
},action){

    switch(action.type){
        case PERSON_MOVIES_RECEIVE:
        return {
            ...state,
            PersonMovies: action.payload,
            fetching: false
        }
        case PERSON_MOVIES_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case PERSON_MOVIES_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}