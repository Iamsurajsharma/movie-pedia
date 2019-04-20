  import React, { Component } from 'react';
  import Slider from "react-slick";
  import {Link} from 'react-router-dom';

  class SliderComponent extends Component {
    returnUrl(movieDetail){
      let url;
      if(this.props.type==="movie"){
        url =  `/movie/${movieDetail.id}`
        return url
      }
      if(this.props.type ==="tv"){
        url =  `/tv-show/${movieDetail.id}`
        return url
      }
    }
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true
        };
      return (
        <div className="col-md-12">
         
            <Slider {...settings}>
            {this.props.data.map((movieDetail,key)=>{
              if(key>=0 && key<=9){
                return <div className="slider-container" key={key}>
                        <div className="slider-background" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/`+movieDetail.backdrop_path+`)`}}>
                            <div className="slider-poster" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342/`+movieDetail.poster_path+`)`}}></div>
                            <div className=" slider-content">
                                <div className="slider-title">
                                   <h3>{movieDetail.title}</h3>
                                </div>
                                <div className="slider-discription">
                                     <p>{movieDetail.overview}</p>
                                </div>
                                <Link to={this.returnUrl(movieDetail)}>
                                <button className="btn btn-outline-success btn-sm">More Info</button>
                                </Link>
                          </div>
                        </div>   
                      </div>
              }else{
                return ""
              }
            }
            )}
            </Slider>
          
        </div>
      )
    }
  }
  export default SliderComponent;