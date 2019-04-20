import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const MOVIE_REVIEWS_RECEIVE ='MOVIE_REVIEWS_RECEIVE';
export const MOVIE_REVIEWS_FETCHING ='MOVIE_REVIEWS_FETCHING';
export const MOVIE_REVIEWS_ERROR ='MOVIE_REVIEWS_ERROR';


export const getMovieReview = (id)=> dispatch =>{
    dispatch({type: MOVIE_REVIEWS_FETCHING})
    axios.get(baseUrl+`movie/${id}/reviews?api_key=${key}&language=en-US`)
    .then(data=>{
        if(data){
            dispatch({type: MOVIE_REVIEWS_RECEIVE, payload: data })
        }
        else {
            dispatch({type: MOVIE_REVIEWS_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: MOVIE_REVIEWS_ERROR,payload: error})
    })
}