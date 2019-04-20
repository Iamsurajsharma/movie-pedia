import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListItemComponent from '../ListItemComponent';
import {getMovieByGenre,getMovieGenreValue} from '../../actions/movies/DiscoverMoviesByGenreAction';
import {listLoader} from '../../helpers/loader';

class MoviesByGenreComponenet extends Component {
  state={
    page:1
  }
    componentDidMount(){
        this.props.getMovieByGenre(this.props.match.params.id,this.state.page);
        this.props.getMovieGenreValue();
    }
    loadMore(){
      let lastPage =this.state.page+1;
        this.props.getMovieByGenre(this.props.match.params.id,lastPage)
      this.setState({
        page: lastPage
      })
     
    } 
    validGenre(){
      let genreValue = typeof this.props.MovieGenreValues.data !== "undefined"?this.props.MovieGenreValues.data:null;
      let searchGenre = genreValue === null ? "Movies": 
      genreValue.genres.filter(genre => {return JSON.stringify(genre.id)===this.props.match.params.id })
        if(searchGenre.length>0){
          return searchGenre[0].name
        }else {
          return this.props.match.params.id
        }
    }
  render() {
      
    let movieData = typeof this.props.MovieByGenre.data!== "undefined"?this.props.MovieByGenre.data.results:null;
    
   
    return (
      <div className="container movie-container"> 
  
      <h1>Search Results for <span className="title-color">"{this.validGenre()}"</span></h1>
    {movieData === null ?
    
              <div className="col-md-12 list-container">
                <div>
                  {listLoader()}
                  </div>
                </div>:<div className="col-md-12 list-container">
                  <div className="row">
                  {movieData.map((movieDetail,key)=>{
                      return  <ListItemComponent data={movieDetail} key={key} type="movie"/>
                  })}
                  {  this.props.MovieByGenre.data.total_pages>1 && this.props.FetchingMovieByGenre===false ?
                      <div className="view-all-container mb-5">
                     <button className="btn btn-success" onClick={this.loadMore.bind(this)}>Load More</button>
                  </div>:""}
                    {this.props.FetchingMovieByGenre===true? 
                        <div className="container">
                            
                            {  listLoader()}
                        </div>:""}
                  </div>
              </div>}
      </div>
    )   
  }
}
const maptStateToProps = state => {
    return{
        MovieByGenre: state.MovieByGenre.MovieByGenre,
        MovieGenreValues : state.MovieGenreValues.MovieGenreValues,
        FetchingMovieByGenre: state.MovieByGenre.fetching
    }
}
export default connect (maptStateToProps,{getMovieByGenre,getMovieGenreValue})(MoviesByGenreComponenet)