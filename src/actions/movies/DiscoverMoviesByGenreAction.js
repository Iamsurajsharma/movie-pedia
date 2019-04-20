import {baseUrl} from '../../helpers/constants';
import {key} from '../../helpers/key';
import axios from 'axios';
export const DISCOVER_MOVIE_BY_GENRE_RECEIVE ='DISCOVER_MOVIE_BY_GENRE_RECEIVE';
export const DISCOVER_MOVIE_BY_GENRE_FETCHING ='DISCOVER_MOVIE_BY_GENRE_FETCHING';
export const DISCOVER_MOVIE_BY_GENRE_ERROR ='DISCOVER_MOVIE_BY_GENRE_ERROR';
export const MOVIE_GENRE_VALUE_FETCHING= 'MOVIE_GENRE_VALUE_FETCHING';
export const MOVIE_GENRE_VALUE_RECEIVE = 'MOVIE_GENRE_VALUE_RECEIVE';
export const MOVIE_GENRE_VALUE_ERROR = 'MOVIE_GENRE_VALUE_ERROR';

export const getMovieByGenre = (genre,page_num)=> dispatch =>{
    dispatch({type: DISCOVER_MOVIE_BY_GENRE_FETCHING})
    axios.get(baseUrl+`discover/movie?api_key=${key}&language=en-USpage=1&with_genres=${genre}&page=${page_num}
    `)
    .then(data=>{
        if(data){
            dispatch({type: DISCOVER_MOVIE_BY_GENRE_RECEIVE, payload: {
                response: data,
                page: page_num
            } })
        }
        else {
            dispatch({type: DISCOVER_MOVIE_BY_GENRE_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: DISCOVER_MOVIE_BY_GENRE_ERROR,payload: error})
    })
}
export const getMovieGenreValue= ()=>dispatch =>{
    dispatch({type: MOVIE_GENRE_VALUE_FETCHING})

    axios.get(baseUrl+`genre/movie/list?api_key=${key}&language=en-US
    `)
    .then(data=>{
        if(data){
            dispatch({type: MOVIE_GENRE_VALUE_RECEIVE, payload: data })
        }
        else {
            dispatch({type: MOVIE_GENRE_VALUE_ERROR,payload: data})
        }
    })
    .catch(error=>{
        dispatch({type: MOVIE_GENRE_VALUE_ERROR,payload: error})
    })
}