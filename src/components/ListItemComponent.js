import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ListItemComponent extends Component {
     
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
        if(this.props.type === "person"){
        return  url =  `/person/${movieDetail.id}`
        }
      }
      returnPosterPic(movieDetail){
        let profile_link;
        if(this.props.type==="movie"){
          profile_link =  `${movieDetail.poster_path}`
          return profile_link
        }
        if(this.props.type ==="tv"){
          profile_link =  `${movieDetail.poster_path}`
          return profile_link
        }
        if(this.props.type === "person"){
        return  profile_link =  `${movieDetail.profile_path}`
        }
      }
  render() {
    let movieDetail = this.props.data;
    
    return (
    
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 list-item ">
                        <Link to = {this.returnUrl(movieDetail)}>
                            <div className="list-poster" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342/`+this.returnPosterPic(movieDetail)+`)`}}>
                                <div className="list-content">
                                    <h4>{movieDetail.title!==undefined?movieDetail.title:movieDetail.name}</h4>
                                </div>
                            </div>
                        </Link>
            </div>

    )
  }
}
