import {POPULAR_TV_RECEIVE,POPULAR_TV_FETCHING,POPULAR_TV_ERROR} from '../../actions/tv/PopularTvAction';

export default function PopularTv  (state={
    fetching: false,
    error: null,
    PopularTv:{data:{
        page:0,
        total_results:0,
        total_pages:0,
        results:[]
},status:0,statusText:""}
},action){

    switch(action.type){
        case POPULAR_TV_RECEIVE:
        return {
            ...state,
            PopularTv: action.payload.page===1?{status:action.payload.response.status,satusText:action.payload.response.satusText,
                data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:action.payload.response.data.results,total_results: action.payload.response.data.total_results}}:
                    {...state.PopularTv,status:action.payload.response.status,statusText:action.payload.response.statusText,
                    data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:state.PopularTv.data.results.concat(action.payload.response.data.results)}},
            fetching: false
        }
        case POPULAR_TV_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case POPULAR_TV_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}