import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const ON_AIR_TV_RECEIVE ='ON_AIR_TV_RECEIVE';
export const ON_AIR_TV_FETCHING ='ON_AIR_TV_FETCHING';
export const ON_AIR_TV_ERROR ='ON_AIR_TV_ERROR';

export const getOnAirTv = (page_num)=> dispatch =>{
    dispatch({type: ON_AIR_TV_FETCHING})
    axios.get(baseUrl+`tv/on_the_air?api_key=${key}&language=en-US&page=${page_num}`)
    .then(data=>{
        if(data){
            dispatch({type: ON_AIR_TV_RECEIVE, payload: {
                response: data,
                page: page_num
            } })
        }
        else {
            dispatch({type: ON_AIR_TV_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: ON_AIR_TV_ERROR,payload: error})
    })
}