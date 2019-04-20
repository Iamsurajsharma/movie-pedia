import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const RECOMMEND_MOVIE_RECEIVE ='RECOMMEND_MOVIE_RECEIVE';
export const RECOMMEND_MOVIE_FETCHING ='RECOMMEND_MOVIE_FETCHING';
export const RECOMMEND_MOVIE_ERROR ='RECOMMEND_MOVIE_ERROR';


export const getRecommendMovie = (id)=> dispatch =>{
    dispatch({type: RECOMMEND_MOVIE_FETCHING})
    axios.get(baseUrl+`movie/${id}/recommendations?api_key=${key}&language=en-US`)
    .then(data=>{
        if(data){
            dispatch({type: RECOMMEND_MOVIE_RECEIVE, payload: data })
        }
        else {
            dispatch({type: RECOMMEND_MOVIE_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: RECOMMEND_MOVIE_ERROR,payload: error})
    })
}