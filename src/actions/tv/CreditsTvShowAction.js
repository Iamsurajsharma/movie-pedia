import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const TV_SHOW_CREDITS_RECEIVE ='TV_SHOW_CREDITS_RECEIVE';
export const TV_SHOW_CREDITS_FETCHING ='TV_SHOW_CREDITS_FETCHING';
export const TV_SHOW_CREDITS_ERROR ='TV_SHOW_CREDITS_ERROR';


export const getTvShowCredits = (id)=> dispatch =>{
    dispatch({type: TV_SHOW_CREDITS_FETCHING})
    axios.get(baseUrl+`tv/${id}/credits?api_key=${key}&language=en-US`)
    .then(data=>{
        if(data){
            dispatch({type: TV_SHOW_CREDITS_RECEIVE, payload: data })
        }
        else {
            dispatch({type: TV_SHOW_CREDITS_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: TV_SHOW_CREDITS_ERROR,payload: error})
    })
}