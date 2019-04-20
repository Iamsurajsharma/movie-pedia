import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const RECOMMEND_TV_RECEIVE ='RECOMMEND_TV_RECEIVE';
export const RECOMMEND_TV_FETCHING ='RECOMMEND_TV_FETCHING';
export const RECOMMEND_TV_ERROR ='RECOMMEND_TV_ERROR';


export const getRecommendTvShow = (id)=> dispatch =>{
    dispatch({type: RECOMMEND_TV_FETCHING})
    axios.get(baseUrl+`tv/${id}/recommendations?api_key=${key}&language=en-US`)
    .then(data=>{
        if(data){
            dispatch({type: RECOMMEND_TV_RECEIVE, payload: data })
        }
        else {
            dispatch({type: RECOMMEND_TV_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: RECOMMEND_TV_ERROR,payload: error})
    })
}