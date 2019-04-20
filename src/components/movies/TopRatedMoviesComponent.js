import React, { Component } from 'react'
import {getTopRatedMovies} from '../../actions/movies/TopRatedMoviesAction';
import {connect } from 'react-redux';
import SliderComponent from '../SliderComponent';
import ListItemComponent from '../ListItemComponent';
import {sliderPreloader,listLoader} from '../../helpers/loader';

class TopRatedMoviesComponent extends Component {
  state={
    page:1
  }
    componentDidMount(){
        this.props.getTopRatedMovies(this.state.page)
      }
      loadMore(){
        let lastPage =this.state.page+1;
          this.props.getTopRatedMovies(lastPage)
        this.setState({
          page: lastPage
        })
       
      } 
      
  render() {   
    let movieData = typeof this.props.TopRatedMovies.data!== "undefined"?this.props.TopRatedMovies.data.results:undefined;
    console.log(movieData)
    return (
        <div className="container movie-container">
            <h1>Top-Rated<span className="title-color">Movies</span></h1>
        {movieData === undefined || (this.state.page===1 && this.props.FetchingTopRatedMovies) ?<div className="row">
              {sliderPreloader()} 
              <div className="col-md-12 list-container">
                <div>
                  {listLoader()}
                  </div>
                </div>
          </div>: <div className="row">
            <SliderComponent  data={movieData} type="movie" />  
            <div className="col-md-12 list-container">
                  <div className="row">
                  {movieData.map((movieDetail,key)=>{
                      return  <ListItemComponent data={movieDetail} key={key} type="movie" />
                  })}
                     {  this.props.TopRatedMovies.data.total_pages>1 && this.props.FetchingTopRatedMovies===false ?
                      <div className="view-all-container mb-5">
                     <button className="btn btn-success" onClick={this.loadMore.bind(this)}>Load More</button>
                  </div>:""}
                  { this.props.FetchingTopRatedMovies===true && this.state.page>1? 
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
      TopRatedMovies : state.TopRatedMovies.TopRatedMovies,
      FetchingTopRatedMovies: state.TopRatedMovies.fetching
    }
  }
  export default connect(mapStateToProps,{getTopRatedMovies}) (TopRatedMoviesComponent);
