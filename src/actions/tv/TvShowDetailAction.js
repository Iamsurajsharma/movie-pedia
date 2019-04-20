import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const TV_SHOW_DETAIL_RECEIVE ='TV_SHOW_DETAIL_RECEIVE';
export const TV_SHOW_DETAIL_FETCHING ='TV_SHOW_DETAIL_FETCHING';
export const TV_SHOW_DETAIL_ERROR ='TV_SHOW_DETAIL_ERROR';


export const getTvShowDetail = (id)=> dispatch =>{
    dispatch({type: TV_SHOW_DETAIL_FETCHING})
    axios.get(baseUrl+`tv/${id}?api_key=${key}&language=en-US`)
    .then(data=>{
        if(data){
            dispatch({type: TV_SHOW_DETAIL_RECEIVE, payload: data })
        }
        else {
            dispatch({type: TV_SHOW_DETAIL_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: TV_SHOW_DETAIL_ERROR,payload: error})
    })
}