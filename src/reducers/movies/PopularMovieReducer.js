import {POPULAR_MOVIES_RECEIVE,POPULAR_MOVIES_FETCHING,POPULAR_MOVIES_ERROR} from '../../actions/movies/PopularMoviesAction';

export default function PopularMovies  (state={
    fetching: false,
    error: null,
    PopularMovies:{data:{
        page:0,
        total_results:0,
        total_pages:0,
        results:[]
},status:0,statusText:""}
},action){

    switch(action.type){
        case POPULAR_MOVIES_RECEIVE:
        return {
            ...state,
            PopularMovies:   action.payload.page===1?{status:action.payload.response.status,statusText:action.payload.response.statusText,
                data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:action.payload.response.data.results}}:
                    {...state.PopularMovies,status:action.payload.response.status,statusText:action.payload.response.statusText,
                    data:{page: action.payload.response.data.page,total_pages: action.payload.response.data.total_pages,results:state.PopularMovies.data.results.concat(action.payload.response.data.results)}},
            fetching: false
        }
        case POPULAR_MOVIES_FETCHING:
        return{
            ...state,
            fetching: true
        }
        case POPULAR_MOVIES_ERROR:
        return{
            ...state,
            error: action.payload,
            fetching: false
        }
        default: 
            return state
    }
}