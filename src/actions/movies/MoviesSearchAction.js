import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const MOVIE_SEARCH_RECEIVE ='MOVIE_SEARCH_RECEIVE';
export const MOVIE_SEARCH_FETCHING ='MOVIE_SEARCH_FETCHING';
export const MOVIE_SEARCH_ERROR ='MOVIE_SEARCH_ERROR';


export const searchMovie = (query,page_num)=> dispatch =>{
   
    dispatch({type: MOVIE_SEARCH_FETCHING})
    axios.get(baseUrl+`search/movie?api_key=${key}&language=en-US&query=${query}&page=${page_num}`)
    .then(data=>{
        if(data){
            dispatch({type: MOVIE_SEARCH_RECEIVE, payload: {response:data, page:page_num} })
        }
        else {
            dispatch({type: MOVIE_SEARCH_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: MOVIE_SEARCH_ERROR,payload: error})
    })
}