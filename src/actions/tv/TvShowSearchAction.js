import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const TV_SHOW_SEARCH_RECEIVE ='TV_SHOW_SEARCH_RECEIVE';
export const TV_SHOW_SEARCH_FETCHING ='TV_SHOW_SEARCH_FETCHING';
export const TV_SHOW_SEARCH_ERROR ='TV_SHOW_SEARCH_ERROR';


export const searchTvShow = (query,page_num)=> dispatch =>{
    dispatch({type: TV_SHOW_SEARCH_FETCHING})
    axios.get(baseUrl+`search/tv?api_key=${key}&language=en-US&query=${query}&page=${page_num}`)
    .then(data=>{
        if(data){
            dispatch({type: TV_SHOW_SEARCH_RECEIVE, payload: {response: data, page: page_num} })
        }
        else {
            dispatch({type: TV_SHOW_SEARCH_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: TV_SHOW_SEARCH_ERROR,payload: error})
    })
}