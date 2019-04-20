import React, { Component } from 'react';
import {listLoader} from '../helpers/loader';

export default class ReviewComponent extends Component {
  render() {
    return (
      <div className="cast-container">
            <h3>Reviews</h3>
                 {this.props.fetching===true || this.props.reviewData === undefined ? listLoader():
                    <div className="row">
                   
                    {this.props.reviewData.results.length>0?
                     this.props.reviewData.results.map((review,key)=>{
                         if(key>=0 && key<=1){
                           return  <div className="col-md-6" key={key}>
                                   <div className="review-card">
                                         <div className=" review-card-content">
                                           <p>{review.content}</p>
                                       <h5>{review.author}</h5>
                                           </div>
                                 </div>
                                   
                                   </div>
                         }
                         else{
                             return ""
                         }
                      }):
                         <h4 className="container not-found">No Reviews Found</h4>
                      }
                    
                    </div>
                }
      </div>
    )
  }
}
