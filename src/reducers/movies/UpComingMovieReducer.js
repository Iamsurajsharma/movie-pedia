import {UPCOMING_MOVIES_RECEIVE,UPCOMING_MOVIES_FETCHING,UPCOMING_MOVIES_ERROR} from '../../actions/movies/UpComingMoviesAction';

export default function UpComingMovies  (state={
    fetching: false,
    error: null,
    UpComingMovies:{data:{
        page:0,
        total_results:0,
        total_pages:0,
        results:[]
},status:0,statusText:""}
},action){

    switch(action.type){
        case UPCOMING_MOVIES_RECEIVE:
        return {
            ...state,
            UpComingMovies:  action.payload.page===1?{status:action.payload.response.status,satusText:action.payload.response.satusText,
                data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:action.payload.response.data.results,total_results: action.payload.response.data.total_results}}:
                    {...state.UpComingMovies,status:action.payload.response.status,statusText:action.payload.response.statusText,
                    data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:state.UpComingMovies.data.results.concat(action.payload.response.data.results)}},
 
            fetching: false
        }
        case UPCOMING_MOVIES_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case UPCOMING_MOVIES_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}