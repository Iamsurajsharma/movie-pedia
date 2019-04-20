import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const PERSON_MOVIES_RECEIVE ='PERSON_MOVIES_RECEIVE';
export const PERSON_MOVIES_FETCHING ='PERSON_MOVIES_FETCHING';
export const PERSON_MOVIES_ERROR ='PERSON_MOVIES_ERROR';


export const getPersonMovies = (person_id)=> dispatch =>{
    dispatch({type: PERSON_MOVIES_FETCHING})
    axios.get(baseUrl+`person/${person_id}/movie_credits?api_key=${key}&language=en-US`)
    .then(data=>{
        if(data){
            dispatch({type: PERSON_MOVIES_RECEIVE, payload: data })
        }
        else {
            dispatch({type: PERSON_MOVIES_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: PERSON_MOVIES_ERROR,payload: error})
    })
}