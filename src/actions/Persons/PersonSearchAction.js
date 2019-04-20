import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const PERSON_SEARCH_RECEIVE ='PERSON_SEARCH_RECEIVE';
export const PERSON_SEARCH_FETCHING ='PERSON_SEARCH_FETCHING';
export const PERSON_SEARCH_ERROR ='PERSON_SEARCH_ERROR';

export const searchPerson = (query,page_num)=> dispatch =>{
    dispatch({type: PERSON_SEARCH_FETCHING})
    axios.get(baseUrl+`search/person?api_key=${key}&language=en-US&query=${query}&page=${page_num}`)
    .then(data=>{
        if(data){
            dispatch({type: PERSON_SEARCH_RECEIVE, payload: {response:data, page:page_num} })
        }
        else {
            dispatch({type: PERSON_SEARCH_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: PERSON_SEARCH_ERROR,payload: error})
    })
}