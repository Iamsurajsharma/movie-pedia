import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const POPULAR_MOVIES_RECEIVE ='POPULAR_MOVIES_RECEIVE';
export const POPULAR_MOVIES_FETCHING ='POPULAR_MOVIES_FETCHING';
export const POPULAR_MOVIES_ERROR ='POPULAR_MOVIES_ERROR';


export const getPopularMovies = (page_num)=> dispatch =>{
    dispatch({type: POPULAR_MOVIES_FETCHING})
    axios.get(baseUrl+`movie/popular?api_key=${key}&language=en-US&page=${page_num}`)
    .then(data=>{
        if(data){
            dispatch({type: POPULAR_MOVIES_RECEIVE, payload: {response: data, page: page_num} })
        }
        else {
            dispatch({type: POPULAR_MOVIES_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: POPULAR_MOVIES_ERROR,payload: error})
    })
}