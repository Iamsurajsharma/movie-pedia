import React, { Component } from 'react'
import {getOnAirTv} from '../../actions/tv/OnAirTvAction';
import {connect } from 'react-redux';
import SliderComponent from '../SliderComponent';
import ListItemComponent from '../ListItemComponent';
import {sliderPreloader,listLoader} from '../../helpers/loader';

class OnAirTvComponent extends Component {

  state={
    page:1
  }
    componentDidMount(){
        this.props.getOnAirTv(this.state.page)
      }
      loadMore(){
        let lastPage =this.state.page+1;
          this.props.getOnAirTv(lastPage)
        this.setState({
          page: lastPage
        })
       
      } 
      
  render() {   
    let movieData = typeof this.props.OnAirTV.data!== "undefined"?this.props.OnAirTV.data.results:null;
    return (
        <div className="container movie-container">
            <h1>On-Air <span className="title-color">Tv Shows</span></h1>
        {movieData === null  || (this.state.page===1 && this.props.FetchingOnAir) ?<div className="row">
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
                 {  this.props.OnAirTV.data.total_pages>1 && this.props.FetchingOnAir===false ?
                      <div className="view-all-container mb-5">
                     <button className="btn btn-success" onClick={this.loadMore.bind(this)}>Load More</button>
                  </div>:""}
                  { this.props.FetchingOnAir===true && this.state.page>1? 
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
      OnAirTV : state.OnAirTV.OnAirTV,
      FetchingOnAir: state.OnAirTV.fetching
    }
  }
  export default connect(mapStateToProps,{getOnAirTv}) (OnAirTvComponent);
