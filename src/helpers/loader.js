 import React from 'react';
 import loaderImg from '../images/spinner9.gif';


export const sliderPreloader =  ()=>{
  return  <div className="loaders"></div>
} 
export const listLoader = ()=>{
    return <div className="list-loader">
            <img src={loaderImg} alt="loader"/> <p>Loading...</p>
    </div>
}