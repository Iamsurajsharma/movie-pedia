import React, { Component } from 'react'
import {getPopularMovies} from '../../actions/movies/PopularMoviesAction';
import {connect } from 'react-redux';
import SliderComponent from '../SliderComponent';
import ListItemComponent from '../ListItemComponent';
import {sliderPreloader,listLoader} from '../../helpers/loader';

class PopularMoviesComponent extends Component {
  state={
    page:1
  }
    componentDidMount(){
        this.props.getPopularMovies(this.state.page)
      }
      loadMore(){
        let lastPage =this.state.page+1;
          this.props.getPopularMovies(lastPage)
        this.setState({
          page: lastPage
        })
       
      } 
  render() {   
    let movieData = typeof this.props.PopularMovies.data!== "undefined"?this.props.PopularMovies.data.results:null;
    return (
        <div className="container movie-container">
            <h1>Popular<span className="title-color">Movies</span></h1>
        {movieData === null  || (this.state.page===1 && this.props.FectchingMovie) ?<div className="row">
              {sliderPreloader()} 
              <div className="col-md-12 list-container">
                <div>
                  {listLoader()}
                  </div>
                </div>
          </div>: 
          <div className="row">
            <SliderComponent  data={movieData} type="movie"/>    
            <div className="col-md-12 list-container">
                  <div className="row">
                  {movieData.map((movieDetail,key)=>{
                      return  <ListItemComponent data={movieDetail} key={key} type="movie"/>
                  })}
                  
                    {  this.props.PopularMovies.data.total_pages>1 && this.props.FectchingMovie===false ?
                      <div className="view-all-container mb-5">
                     <button className="btn btn-success" onClick={this.loadMore.bind(this)}>Load More</button>
                  </div>:""}
                  { this.props.FectchingMovie===true? 
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
      PopularMovies : state.PopularMovies.PopularMovies,
      FectchingMovie: state.PopularMovies.fetching
    }
  }
  export default connect(mapStateToProps,{getPopularMovies}) (PopularMoviesComponent);
