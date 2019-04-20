import {PERSON_SEARCH_RECEIVE,PERSON_SEARCH_FETCHING,PERSON_SEARCH_ERROR} from '../../actions/Persons/PersonSearchAction';

export default function PersonSearch  (state={
    fetching: false,
    error: null,
    PersonSearch:{data:{
        page:0,
        total_results:0,
        total_pages:0,
        results:[]
},status:0,satusText:""}
},action){

    switch(action.type){
        case PERSON_SEARCH_RECEIVE:
        return {
            ...state,
            PersonSearch: action.payload.page===1?{status:action.payload.response.status,satusText:action.payload.response.satusText,
                data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:action.payload.response.data.results}}:
                    {...state.PersonSearch,status:action.payload.response.status,satusText:action.payload.response.satusText,
                    data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:state.PersonSearch.data.results.concat(action.payload.response.data.results)}},
            fetching: false
        }
        case PERSON_SEARCH_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case PERSON_SEARCH_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}