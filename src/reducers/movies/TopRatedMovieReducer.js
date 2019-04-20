import {TOP_RATED_MOVIES_RECEIVE,TOP_RATED_MOVIES_FETCHING,TOP_RATED_MOVIES_ERROR} from '../../actions/movies/TopRatedMoviesAction';

export default function TopRatedMovies  (state={
    fetching: false,
    error: null,
    TopRatedMovies:{data:{
        page:0,
        total_results:0,
        total_pages:0,
        results:[]
},status:0,statusText:""}
},action){

    switch(action.type){
        case TOP_RATED_MOVIES_RECEIVE:
        return {
            ...state,
            TopRatedMovies:   action.payload.page===1?{status:action.payload.response.status,statusText:action.payload.response.statusText,
                data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:action.payload.response.data.results}}:
                    {...state.TopRatedMovies,status:action.payload.response.status,statusText:action.payload.response.statusText,
                    data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:state.TopRatedMovies.data.results.concat(action.payload.response.data.results)}},
            fetching: false
        }
        case TOP_RATED_MOVIES_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case TOP_RATED_MOVIES_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}