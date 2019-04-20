import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const SIMILAR_TV_RECEIVE ='SIMILAR_TV_RECEIVE';
export const SIMILAR_TV_FETCHING ='SIMILAR_TV_FETCHING';
export const SIMILAR_TV_ERROR ='SIMILAR_TV_ERROR';


export const getSimilarTvShow = (id)=> dispatch =>{
    dispatch({type: SIMILAR_TV_FETCHING})
    axios.get(baseUrl+`tv/${id}/similar?api_key=${key}&language=en-US`)
    .then(data=>{
        if(data){
            dispatch({type: SIMILAR_TV_RECEIVE, payload: data })
        }
        else {
            dispatch({type: SIMILAR_TV_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: SIMILAR_TV_ERROR,payload: error})
    })
}