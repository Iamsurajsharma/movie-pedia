import {TOP_RATED_TV_RECEIVE,TOP_RATED_TV_FETCHING,TOP_RATED_TV_ERROR} from '../../actions/tv/TopRatedTvAction';

export default function TopRatedTv  (state={
    fetching: false,
    error: null,
    TopRatedTv:{data:{
        page:0,
        total_results:0,
        total_pages:0,
        results:[]
},status:0,statusText:""}
},action){

    switch(action.type){
        case TOP_RATED_TV_RECEIVE:
        return {
            ...state,
            TopRatedTv: action.payload.page===1?{status:action.payload.response.status,satusText:action.payload.response.satusText,
                data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:action.payload.response.data.results,total_results: action.payload.response.data.total_results}}:
                    {...state.TopRatedTv,status:action.payload.response.status,statusText:action.payload.response.statusText,
                    data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:state.TopRatedTv.data.results.concat(action.payload.response.data.results)}},
            fetching: false
        }
        case TOP_RATED_TV_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case TOP_RATED_TV_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}