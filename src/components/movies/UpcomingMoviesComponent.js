import React, { Component } from 'react'
import {getUpcomingMovies} from '../../actions/movies/UpComingMoviesAction';
import {connect } from 'react-redux';
import SliderComponent from '../SliderComponent';
import  ListItemComponent from '../ListItemComponent';
import {sliderPreloader,listLoader} from '../../helpers/loader';

class UpcomingMoviesComponent extends Component {
  state={
    page:1
  }
    componentDidMount(){
        this.props.getUpcomingMovies(this.state.page)
      }
      loadMore(){
        let lastPage =this.state.page+1;
          this.props.getUpcomingMovies(lastPage)
        this.setState({
          page: lastPage
        })
       
      } 
  render() {   
    let movieData = typeof this.props.UpComingMovies.data!== "undefined"?this.props.UpComingMovies.data.results:null;
    return (
        <div className="container movie-container">
            <h1>Upcoming<span className="title-color">Movies</span></h1>
        {movieData === null  || (this.state.page===1 && this.props.MovieFetching) ?<div className="row">
              {sliderPreloader()} 
              <div className="col-md-12 list-container">
                <div>
                  {listLoader()}
                  </div>
                </div>
          </div>:<div className="row">
            <SliderComponent  data={movieData} type="movie"/>   
            <div className="col-md-12 list-container">
                  <div className="row">
                  {movieData.map((movieDetail,key)=>{
                      return  <ListItemComponent data={movieDetail} key={key} type="movie"/>
                  })}
                  {  this.props.UpComingMovies.data.total_pages>1 && this.props.MovieFetching===false ?
                      <div className="view-all-container mb-5">
                     <button className="btn btn-success" onClick={this.loadMore.bind(this)}>Load More</button>
                  </div>:""}
                  { this.props.MovieFetching===true? 
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
      UpComingMovies : state.UpComingMovies.UpComingMovies,
      MovieFetching : state.UpComingMovies.fetching
    }
  }
  export default connect(mapStateToProps,{getUpcomingMovies}) (UpcomingMoviesComponent);
