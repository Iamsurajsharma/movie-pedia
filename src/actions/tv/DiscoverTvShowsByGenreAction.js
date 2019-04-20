import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const DISCOVER_TV_SHOW_BY_GENRE_RECEIVE ='DISCOVER_TV_SHOW_BY_GENRE_RECEIVE';
export const DISCOVER_TV_SHOW_BY_GENRE_FETCHING ='DISCOVER_TV_SHOW_BY_GENRE_FETCHING';
export const DISCOVER_TV_SHOW_BY_GENRE_ERROR ='DISCOVER_TV_SHOW_BY_GENRE_ERROR';
export const TV_SHOW_GENRE_VALUE_FETCHING= 'TV_SHOW_GENRE_VALUE_FETCHING';
export const TV_SHOW_GENRE_VALUE_RECEIVE = 'TV_SHOW_GENRE_VALUE_RECEIVE';
export const TV_SHOW_GENRE_VALUE_ERROR = 'TV_SHOW_GENRE_VALUE_ERROR';


export const getTvShowsByGenre = (genre,page_num)=> dispatch =>{
    dispatch({type: DISCOVER_TV_SHOW_BY_GENRE_FETCHING})
    axios.get(baseUrl+`discover/tv?api_key=${key}&language=en-USpage=1&with_genres=${genre}&page=${page_num}
    `)
    .then(data=>{
        if(data){
            dispatch({type: DISCOVER_TV_SHOW_BY_GENRE_RECEIVE, payload: {response: data, page:page_num} })
        }
        else {
            dispatch({type: DISCOVER_TV_SHOW_BY_GENRE_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: DISCOVER_TV_SHOW_BY_GENRE_ERROR,payload: error})
    })
}
export const getTvShowGenreValue= (id)=>dispatch =>{
    dispatch({type: TV_SHOW_GENRE_VALUE_FETCHING})
    axios.get(baseUrl+`genre/tv/list?api_key=${key}&language=en-US`)
    .then(data=>{
        if(data){
            dispatch({type: TV_SHOW_GENRE_VALUE_RECEIVE, payload: data })
        }
        else {
            dispatch({type: TV_SHOW_GENRE_VALUE_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: TV_SHOW_GENRE_VALUE_ERROR,payload: error})
    })
}