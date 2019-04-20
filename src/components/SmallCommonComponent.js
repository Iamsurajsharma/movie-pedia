import React, { Component } from 'react';
import ListItemComponent from './ListItemComponent';
import {listLoader} from '../helpers/loader';

export default class SmallCommonComponent extends Component {
    renderRecommend(){
            return this.props.RecommendData.results.map((data,key)=>{
                       if(key>=0&&key<=3){
                        return   <ListItemComponent data={data} key={key} type={this.props.type}/>                       
                      }
                       else{
                           return "";
                       }
                    })
        
    }
    renderSimilar(){
        return this.props.SimilarData.results.map((data,key)=>{
            if(key>=0&&key<=3){
             return <ListItemComponent data={data} key={key} type={this.props.type}/>
            }
            else{
                return "";
            }
         })
    }
   
   
  render() {
    return (
      <div>
          <div className="cast-container">
                <h3> Recommended <span className="title-color">{this.props.type==="movie"?"Movies": "Tv Shows"}</span></h3>
                {this.props.RecommendData===undefined || this.props.RecommendFetching===true?
                    listLoader()
                    :<div className="row">
                {this.props.RecommendData.total_results>0? this.renderRecommend():
                        <div className="container not-found">
                           <h4> No {this.props.type==="movie"?"Movie": "Tv Show"} Found </h4>
                        </div>
                    }
                </div>}
            </div>
            <div className="cast-container">
            <h3> Similar <span className="title-color">{this.props.type==="movie"?"Movies": "Tv Shows"}</span></h3>
                    {this.props.SimilarData ===undefined || this.props.SimilarFetching === true ?
                    listLoader()
                  :<div className="row">
         
                  {this.props.SimilarData.total_results>0? this.renderSimilar():
                                <div className="container not-found">
                                   <h4> No {this.props.type==="movie"?"Movie": "Tv Show"} Found </h4>
                                </div>
                            }
                    </div>}
      </div>
      </div>
    )
  }
}
