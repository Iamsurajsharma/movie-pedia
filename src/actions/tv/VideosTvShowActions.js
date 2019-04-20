import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const TV_SHOW_VIDEOS_RECEIVE ='TV_SHOW_VIDEOS_RECEIVE';
export const TV_SHOW_VIDEOS_FETCHING ='TV_SHOW_VIDEOS_FETCHING';
export const TV_SHOW_VIDEOS_ERROR ='TV_SHOW_VIDEOS_ERROR';


export const getTvShowVideos = (id)=> dispatch =>{
    dispatch({type: TV_SHOW_VIDEOS_FETCHING})
    axios.get(baseUrl+`tv/${id}/videos?api_key=${key}&language=en-US`)
    .then(data=>{
        if(data){
            dispatch({type: TV_SHOW_VIDEOS_RECEIVE, payload: data })
        }
        else {
            dispatch({type: TV_SHOW_VIDEOS_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: TV_SHOW_VIDEOS_ERROR,payload: error})
    })
}