import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const MOVIE_VIDEOS_RECEIVE ='MOVIE_VIDEOS_RECEIVE';
export const MOVIE_VIDEOS_FETCHING ='MOVIE_VIDEOS_FETCHING';
export const MOVIE_VIDEOS_ERROR ='MOVIE_VIDEOS_ERROR';


export const getMovieVideos = (id)=> dispatch =>{
    dispatch({type: MOVIE_VIDEOS_FETCHING})
    axios.get(baseUrl+`movie/${id}/videos?api_key=${key}&language=en-US`)
    .then(data=>{
        if(data){
            dispatch({type: MOVIE_VIDEOS_RECEIVE, payload: data })
        }
        else {
            dispatch({type: MOVIE_VIDEOS_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: MOVIE_VIDEOS_ERROR,payload: error})
    })
}