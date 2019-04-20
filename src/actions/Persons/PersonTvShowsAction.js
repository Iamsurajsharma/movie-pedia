import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const PERSON_TV_SHOW_RECEIVE ='PERSON_TV_SHOW_RECEIVE';
export const PERSON_TV_SHOW_FETCHING ='PERSON_TV_SHOW_FETCHING';
export const PERSON_TV_SHOW_ERROR ='PERSON_TV_SHOW_ERROR';


export const getPersonTvShows = (person_id)=> dispatch =>{
    dispatch({type: PERSON_TV_SHOW_FETCHING})
    axios.get(baseUrl+`person/${person_id}/tv_credits?api_key=${key}&language=en-US`)
    .then(data=>{
        if(data){
            dispatch({type: PERSON_TV_SHOW_RECEIVE, payload: data })
        }
        else {
            dispatch({type: PERSON_TV_SHOW_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: PERSON_TV_SHOW_ERROR,payload: error})
    })
}