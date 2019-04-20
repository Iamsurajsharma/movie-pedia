import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {sliderPreloader} from '../helpers/loader';
import StarRatings from 'react-star-ratings'


export default class DetailItemComponent extends Component {
  render() {
    let  data = this.props.detail;
    return (
      <div className="">
           {this.props.fetching===true || data === undefined?
            sliderPreloader()  :
            <div className="detail-movie">
            <div className="detail-image-container" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/`+data.backdrop_path+`)`}}>
        </div>
        <div className="detail-description">
           <div className="detail-content">
           <div className="row">
                      <div className="col-md-4"> 
                       <div className=" detail-image-poster" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342/`+data.poster_path+`)`}}>
                      </div>
                      <div className="detail-genres">
                              {data.genres.map((gen,key)=>
                                <Link key={key} to={this.props.type==="movie"?`/movies/genre/${gen.id}`:`/tv-shows/genre/${gen.id}`}><button type="button" className="btn btn-light btn-sm btn rounded-pill">{gen.name}</button></Link>)}
                          </div>
                      </div>
                      <div className="col-md-7">
                            <div className="detail-summary-info">
                                <div className="detail-movie-title">
                              <h3>{data.title!==undefined?data.title:data.name}</h3>
                                  <p>{data.tagline}</p>
                                 <div className="star-rating">
                                 <StarRatings
                                  rating={data.vote_average/2}
                                  starRatedColor="#FFCB02"
                                  starDimension="25px"
                                  starSpacing="5px"
                                  numberOfStars={5}
                                  name='rating'
                                />
                                 </div>
                              </div>
                                <div className="movie-pg">  {data.adult?<button className="btn btn-danger btn-sm">18+</button>:
                                  <button className="btn btn-success btn-sm">PG-13</button>
                                  }</div>
                              <div className={`detail-overview ${this.props.type==="tv"?"tv-detail-overview":"movie-detail-overview"}`}>
                              <p>{data.overview}</p>
                              </div>
                            
                            </div>
                      </div>
                </div>
           
           </div>
        </div>
    </div>
          }
      </div>
    )
  }
}
