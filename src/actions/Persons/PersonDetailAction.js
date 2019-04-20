import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const PERSON_DETAIL_RECEIVE ='PERSON_DETAIL_RECEIVE';
export const PERSON_DETAIL_FETCHING ='PERSON_DETAIL_FETCHING';
export const PERSON_DETAIL_ERROR ='PERSON_DETAIL_ERROR';


export const getPersonDetail = (id)=> dispatch =>{
    dispatch({type: PERSON_DETAIL_FETCHING})
    axios.get(baseUrl+`person/${id}?api_key=${key}&language=en-US`)
    .then(data=>{
        if(data){
            dispatch({type: PERSON_DETAIL_RECEIVE, payload: data })
        }
        else {
            dispatch({type: PERSON_DETAIL_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: PERSON_DETAIL_ERROR,payload: error})
    })
}