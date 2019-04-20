import {PERSON_DETAIL_RECEIVE,PERSON_DETAIL_FETCHING,PERSON_DETAIL_ERROR} from '../../actions/Persons/PersonDetailAction';

export default function PersonDetail  (state={
    fetching: false,
    error: null,
    PersonDetail:[]
},action){

    switch(action.type){
        case PERSON_DETAIL_RECEIVE:
        return {
            ...state,
            PersonDetail: action.payload,
            fetching: false
        }
        case PERSON_DETAIL_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case PERSON_DETAIL_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}