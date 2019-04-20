import React, { Component } from 'react';
import {listLoader} from '../helpers/loader';

export default class VideoComponent extends Component {
  render() {
    return (
      <div>
          <div className="cast-container">
                <h3> Trailers </h3>
                  {this.props.fetching===true || this.props.trailerData === undefined? listLoader():
                    <div className="row">
                    {this.props.trailerData.results.length>0?
                     this.props.trailerData.results.map((video,key)=>{
                         if(key>=0 && key<=1){
                           return  <div className="col-md-6" key={key}>
                           <iframe className="trailer-frame" title="trailers" width="100%" height="250" src={`https://www.youtube.com/embed/${video.key}`}>
                           </iframe>
                           </div>
                         }
                         else{
                             return ""
                         }
                      }):
                         <h4 className="container not-found">No Trailer Found</h4>
                      }
         
                 </div>}
            </div>
      </div>
    )
  }
}
