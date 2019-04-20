import {ON_AIR_TV_RECEIVE,ON_AIR_TV_FETCHING,ON_AIR_TV_ERROR} from '../../actions/tv/OnAirTvAction';

export default function OnAirTV  (state={
    fetching: false,
    error: null,
    OnAirTV:{data:{
        page:0,
        total_results:0,
        total_pages:0,
        results:[]
},status:0,statusText:""}
},action){

    switch(action.type){
        case ON_AIR_TV_RECEIVE:
        return {
            ...state,
            OnAirTV: action.payload.page===1?{status:action.payload.response.status,satusText:action.payload.response.satusText,
                data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:action.payload.response.data.results,total_results: action.payload.response.data.total_results}}:
                    {...state.OnAirTV,status:action.payload.response.status,statusText:action.payload.response.statusText,
                    data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:state.OnAirTV.data.results.concat(action.payload.response.data.results)}},
            fetching: false
        }
        case ON_AIR_TV_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case ON_AIR_TV_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}