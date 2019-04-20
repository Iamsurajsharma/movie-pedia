import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const MOVIE_DETAIL_RECEIVE ='MOVIE_DETAIL_RECEIVE';
export const MOVIE_DETAIL_FETCHING ='MOVIE_DETAIL_FETCHING';
export const MOVIE_DETAIL_ERROR ='MOVIE_DETAIL_ERROR';


export const getMovieDetail = (id)=> dispatch =>{
    dispatch({type: MOVIE_DETAIL_FETCHING})
    axios.get(baseUrl+`movie/${id}?api_key=${key}&language=en-US`)
    .then(data=>{
        if(data){
            dispatch({type: MOVIE_DETAIL_RECEIVE, payload: data })
        }
        else {
            dispatch({type: MOVIE_DETAIL_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: MOVIE_DETAIL_ERROR,payload: error})
    })
}