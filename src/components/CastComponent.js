import React, { Component } from 'react';
import {listLoader} from '../helpers/loader';
import {Link} from 'react-router-dom';

export default class CastComponent extends Component {
  render() {
    return (
      <div className="cast-container">
                <h3>Top <span className="title-color">Cast</span></h3>
                {this.props.castDetail===undefined || this.props.fetching === true?
                  listLoader():
                  <div className="row">
                {this.props.castDetail.cast.length===0|| this.props.castDetail.cast===null || this.props.castDetail.cast ==="undefined"? <div className="container" style={{textAlign:'center' ,marginTop:'10px'}}>
                        <h4>Cast detail are not available</h4>
                      
                  </div>
                :this.props.castDetail.cast.map((actor,key)=>{
                   if(key>=0 && key<=3){
                       return <div className="col-lg-3 col-md-4 col-sm-6 col-6 " key={key}>
                           <div className="cast-card">
                              <Link to={`/person/${actor.id}`}>
                                  <div className="cast-profile-picture" style={{backgroundImage: `url(https://image.tmdb.org/t/p/h632/`+actor.profile_path+`)`}}>
                                  </div>  
                                  <div className="cast-card-content">   
                                      <h3>{actor.name}</h3>
                                      <p>{actor.character}</p>
                                  </div>
                              </Link>
                           
                           </div>
                       </div>
                   }else{
                       return ""
                   }
                })}
                
                </div>}
      </div>
    )
  }
}
