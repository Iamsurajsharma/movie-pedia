import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const SIMILAR_MOVIES_RECEIVE ='SIMILAR_MOVIES_RECEIVE';
export const SIMILAR_MOVIES_FETCHING ='SIMILAR_MOVIES_FETCHING';
export const SIMILAR_MOVIES_ERROR ='SIMILAR_MOVIES_ERROR';


export const getSimilarMovies = (id)=> dispatch =>{
    dispatch({type: SIMILAR_MOVIES_FETCHING})
    axios.get(baseUrl+`movie/${id}/similar?api_key=${key}&language=en-US`)
    .then(data=>{
        if(data){
            dispatch({type: SIMILAR_MOVIES_RECEIVE, payload: data })
        }
        else {
            dispatch({type: SIMILAR_MOVIES_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: SIMILAR_MOVIES_ERROR,payload: error})
    })
}