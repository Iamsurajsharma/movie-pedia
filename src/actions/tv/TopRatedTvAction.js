import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const TOP_RATED_TV_RECEIVE ='TOP_RATED_TV_RECEIVE';
export const TOP_RATED_TV_FETCHING ='TOP_RATED_TV_FETCHING';
export const TOP_RATED_TV_ERROR ='TOP_RATED_TV_ERROR';

export const getTopRatedTV = (page_num)=> dispatch =>{
    dispatch({type: TOP_RATED_TV_FETCHING})
    axios.get(baseUrl+`tv/top_rated?api_key=${key}&language=en-US&page=${page_num}`)
    .then(data=>{
        if(data){
            dispatch({type: TOP_RATED_TV_RECEIVE, payload: {
                response: data,
                page: page_num
            } })
        }
        else {
           
            dispatch({type: TOP_RATED_TV_ERROR,payload: data})
        }
    })
    .catch(error=>{
        console.log(error)
        dispatch({type: TOP_RATED_TV_ERROR,payload: error})
    })
}