import React, { Component } from 'react'
import {getPopularTV} from '../../actions/tv/PopularTvAction';
import {connect } from 'react-redux';
import SliderComponent from '../SliderComponent';
import ListItemComponent from '../ListItemComponent';
import {sliderPreloader,listLoader} from '../../helpers/loader';

class PopularTvComponent extends Component {
  state={
    page:1
  }
    componentDidMount(){
        this.props.getPopularTV(this.state.page)
      }
      
      loadMore(){
        let lastPage =this.state.page+1;
          this.props.getPopularTV(lastPage)
        this.setState({
          page: lastPage
        })
       
      } 
  render() {   
    let movieData = typeof this.props.PopularTv.data!== "undefined"?this.props.PopularTv.data.results:null;

    return (
        <div className="container movie-container">
            <h1>Popular <span className="title-color">Tv Shows</span></h1>
        {movieData === null || (this.state.page===1 && this.props.PopularFetching===true)?<div className="row">
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
                   {  this.props.PopularTv.data.total_pages>1 && this.props.PopularFetching===false ?
                      <div className="view-all-container mb-5">
                     <button className="btn btn-success" onClick={this.loadMore.bind(this)}>Load More</button>
                  </div>:""}
                  { this.props.PopularFetching===true  && this.state.page>1? 
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
      PopularTv : state.PopularTv.PopularTv,
      PopularFetching: state.PopularTv.fetching
    }
  }
  export default connect(mapStateToProps,{getPopularTV}) (PopularTvComponent);
