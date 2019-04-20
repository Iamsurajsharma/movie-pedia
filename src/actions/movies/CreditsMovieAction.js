import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const MOVIE_CREDITS_RECEIVE ='MOVIE_CREDITS_RECEIVE';
export const MOVIE_CREDITS_FETCHING ='MOVIE_CREDITS_FETCHING';
export const MOVIE_CREDITS_ERROR ='MOVIE_CREDITS_ERROR';


export const getMovieCredits = (id)=> dispatch =>{
    dispatch({type: MOVIE_CREDITS_FETCHING})
    axios.get(baseUrl+`movie/${id}/credits?api_key=${key}&language=en-US`)
    .then(data=>{
        if(data){
            dispatch({type: MOVIE_CREDITS_RECEIVE, payload: data })
        }
        else {
            dispatch({type: MOVIE_CREDITS_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: MOVIE_CREDITS_ERROR,payload: error})
    })
}