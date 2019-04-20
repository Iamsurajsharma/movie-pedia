import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const TV_SHOW_REVIEWS_RECEIVE ='TV_SHOW_REVIEWS_RECEIVE';
export const TV_SHOW_REVIEWS_FETCHING ='TV_SHOW_REVIEWS_FETCHING';
export const TV_SHOW_REVIEWS_ERROR ='TV_SHOW_REVIEWS_ERROR';


export const getTvShowReviews = (id)=> dispatch =>{
    dispatch({type: TV_SHOW_REVIEWS_FETCHING})
    axios.get(baseUrl+`tv/${id}/reviews?api_key=${key}&language=en-US`)
    .then(data=>{
        if(data){
            dispatch({type: TV_SHOW_REVIEWS_RECEIVE, payload: data })
        }
        else {
            dispatch({type: TV_SHOW_REVIEWS_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: TV_SHOW_REVIEWS_ERROR,payload: error})
    })
}