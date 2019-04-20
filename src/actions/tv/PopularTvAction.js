import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const POPULAR_TV_RECEIVE ='POPULAR_TV_RECEIVE';
export const POPULAR_TV_FETCHING ='POPULAR_TV_FETCHING';
export const POPULAR_TV_ERROR ='POPULAR_TV_ERROR';

export const getPopularTV = (page_num)=> dispatch =>{
    dispatch({type: POPULAR_TV_FETCHING})
    axios.get(baseUrl+`tv/popular?api_key=${key}&language=en-US&page=${page_num}`)
    .then(data=>{
        if(data){
            dispatch({type: POPULAR_TV_RECEIVE, payload: {
                response: data,
                page: page_num
            } })
        }
        else {
            dispatch({type: POPULAR_TV_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: POPULAR_TV_ERROR,payload: error})
    })
}