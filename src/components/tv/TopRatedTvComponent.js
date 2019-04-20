import React, { Component } from 'react'
import {getTopRatedTV} from '../../actions/tv/TopRatedTvAction';
import {connect } from 'react-redux';
import SliderComponent from '../SliderComponent';
import ListItemComponent from '../ListItemComponent';
import { sliderPreloader,listLoader } from '../../helpers/loader';

class TopRatedTvComponent extends Component {
  state={
    page:1
  }
    componentDidMount(){
        this.props.getTopRatedTV(this.state.page)
      }
      loadMore(){
        let lastPage =this.state.page+1;
          this.props.getTopRatedTV(lastPage)
        this.setState({
          page: lastPage
        })
       
      } 
  render() {   
    let movieData = typeof this.props.TopRatedTv.data!== "undefined"?this.props.TopRatedTv.data.results:null;
    return (
        <div className="container movie-container">
            <h1>Top-Rated <span className="title-color">Tv Shows</span></h1>
        {movieData === null  || (this.state.page===1 && this.props.FechingTopRated) ?<div className="row">
              {sliderPreloader()} 
              <div className="col-md-12 list-container">
                <div>
                  {listLoader()}
                  </div>
                </div>
          </div>: <div className="row">
            <SliderComponent  data={movieData} type="tv"/>    
            <div className="col-md-12 list-container">
                  <div className="row">
                  {movieData.map((movieDetail,key)=>{
                      return  <ListItemComponent data={movieDetail} key={key} type="tv"/>
                  })}
                     {  this.props.TopRatedTv.data.total_pages>1 && this.props.FechingTopRated===false ?
                      <div className="view-all-container mb-5">
                     <button className="btn btn-success" onClick={this.loadMore.bind(this)}>Load More</button>
                  </div>:""}
                  { this.props.FechingTopRated===true && this.state.page>1? 
                        <div className="container">
                            
                            {  listLoader()}
                        </div>
                  :""}
                  </div>
              </div>
            </div>}
       
      </div>
    )
  }
}
const mapStateToProps = state =>{
    return{
      TopRatedTv : state.TopRatedTv.TopRatedTv,
      FechingTopRated : state.TopRatedTv.fetching
    }
  }
  export default connect(mapStateToProps,{getTopRatedTV}) (TopRatedTvComponent);
