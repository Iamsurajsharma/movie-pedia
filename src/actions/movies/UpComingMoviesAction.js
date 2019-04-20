import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const UPCOMING_MOVIES_RECEIVE ='UPCOMING_MOVIES_RECEIVE';
export const UPCOMING_MOVIES_FETCHING ='UPCOMING_MOVIES_FETCHING';
export const UPCOMING_MOVIES_ERROR ='UPCOMING_MOVIES_ERROR';


export const getUpcomingMovies = (page_num)=> dispatch =>{
    dispatch({type: UPCOMING_MOVIES_FETCHING})
    axios.get(baseUrl+`movie/upcoming?api_key=${key}&language=en-US&page=${page_num}`)
    .then(data=>{
        if(data){
            dispatch({type: UPCOMING_MOVIES_RECEIVE, payload:{
                response: data,
                page: page_num
            } })
        }
        else {
            dispatch({type: UPCOMING_MOVIES_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: UPCOMING_MOVIES_ERROR,payload: error})
    })
}