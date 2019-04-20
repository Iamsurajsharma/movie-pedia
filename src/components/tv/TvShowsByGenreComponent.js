import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListItemComponent from '../ListItemComponent';
import {getTvShowsByGenre,getTvShowGenreValue} from '../../actions/tv/DiscoverTvShowsByGenreAction';
import {listLoader} from '../../helpers/loader';

class TvShowsByGenreComponent extends Component {
  state={
    page:1
  }
    componentDidMount(){
        this.props.getTvShowsByGenre(this.props.match.params.id,this.state.page);
        this.props.getTvShowGenreValue(this.state.page);
    }
    loadMore(){
      let lastPage =this.state.page+1;
        this.props.getTvShowsByGenre(this.props.match.params.id,lastPage)
      this.setState({
        page: lastPage
      })
     
    } 
    validGenre(){
      let genreValue = typeof this.props.TvShowGenreValues.data !== "undefined"?this.props.TvShowGenreValues.data:null;
      let searchGenre = genreValue === null ? "Tv-Shows": 
      genreValue.genres.filter(genre => {
        return JSON.stringify(genre.id)===this.props.match.params.id })
        if(searchGenre.length>0){
          return searchGenre[0].name
        }else {
          return this.props.match.params.id
        }
    }
  render() {
      
    let movieData = typeof this.props.TvShowByGenre.data!== "undefined"?this.props.TvShowByGenre.data.results:null
    return (
      <div className="container movie-container">
      <h1>Search Results for <span className="title-color">"{this.validGenre()}"</span></h1>
    {movieData === null?
              <div className="col-md-12 list-container">
                <div>
                  {listLoader()}
                  </div>
              
          </div>: <div className="col-md-12 list-container">
                  <div className="row">
                  {movieData.map((movieDetail,key)=>{
                      return  <ListItemComponent data={movieDetail} key={key} type="tv"/>
                  })}
                  {  this.props.TvShowByGenre.data.total_pages>1 && this.props.GenreFetching===false ?
                      <div className="view-all-container mb-5">
                     <button className="btn btn-success" onClick={this.loadMore.bind(this)}>Load More</button>
                  </div>:""}
                    {this.props.GenreFetching===true? 
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
        TvShowByGenre: state.TvShowByGenre.TvShowByGenre,
        TvShowGenreValues : state.TvShowGenreValues.TvShowGenreValues,
        GenreFetching: state.TvShowByGenre.fetching
    }
}
export default connect (maptStateToProps,{getTvShowsByGenre,getTvShowGenreValue})(TvShowsByGenreComponent)