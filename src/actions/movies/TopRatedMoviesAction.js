import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const TOP_RATED_MOVIES_RECEIVE ='TOP_RATED_MOVIES_RECEIVE';
export const TOP_RATED_MOVIES_FETCHING ='TOP_RATED_MOVIES_FETCHING';
export const TOP_RATED_MOVIES_ERROR ='TOP_RATED_MOVIES_ERROR';


export const getTopRatedMovies = (page_name)=> dispatch =>{
    dispatch({type: TOP_RATED_MOVIES_FETCHING})
    axios.get(baseUrl+`movie/top_rated?api_key=${key}&language=en-US&page=${page_name}`)
    .then(data=>{
        if(data){
            dispatch({type: TOP_RATED_MOVIES_RECEIVE, payload: {response:data,page: page_name} })
        }
        else {
            dispatch({type: TOP_RATED_MOVIES_ERROR,payload: data})
        }
    })
    .catch(error=>{
        
        dispatch({type: TOP_RATED_MOVIES_ERROR,payload: error})
    })
}