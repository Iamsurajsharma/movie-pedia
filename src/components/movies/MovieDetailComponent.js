import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getMovieDetail } from '../../actions/movies/MovieDetailAction';
import {getMovieCredits} from '../../actions/movies/CreditsMovieAction';
import {getMovieVideos} from '../../actions/movies/VideosMovieAction';
import {getRecommendMovie} from '../../actions/movies/RecommendMovieAction';
import {getSimilarMovies} from '../../actions/movies/SimilarMoviesActions';
import {getMovieReview} from '../../actions/movies/ReviewsMovieAction';

import DetailItemComponent from '../DetailItemComponent';
import CastComponent from '../CastComponent';
import SmallCommonComponent from '../SmallCommonComponent';
import VideoComponent from '../VideoComponent';
import ReviewComponent from '../ReviewComponent';

 class MovieDetailComponent extends Component {
    componentDidMount(){
        this.props.getMovieDetail(this.props.match.params.id);
        this.props.getMovieCredits(this.props.match.params.id);
        this.props.getMovieVideos(this.props.match.params.id);
        this.props.getRecommendMovie(this.props.match.params.id);
        this.props.getSimilarMovies(this.props.match.params.id);
        this.props.getMovieReview(this.props.match.params.id)
    }
    componentWillReceiveProps(nextProps){
      if(this.props.match.params.id!==nextProps.match.params.id){
        this.props.getMovieDetail(nextProps.match.params.id);
        this.props.getMovieCredits(nextProps.match.params.id);
        this.props.getMovieVideos(nextProps.match.params.id);
        this.props.getRecommendMovie(nextProps.match.params.id);
        this.props.getSimilarMovies(nextProps.match.params.id);
        this.props.getMovieReview(nextProps.match.params.id)
      }
    }
    
  render() {
  
    let movieDetail = typeof this.props.MovieDetail!== "undefined"?this.props.MovieDetail.data:undefined;
    let creditsDetail = typeof this.props.MovieCredits!== "undefined"?this.props.MovieCredits.data:undefined;
    let similarMovies = typeof this.props.SimilarMovies!== "undefined"?this.props.SimilarMovies.data:undefined;
    let recommendMovies = typeof this.props.RecommendMovies!== "undefined"?this.props.RecommendMovies.data:undefined;
    let trailerVideos = typeof this.props.MovieVideos!== "undefined"?this.props.MovieVideos.data:undefined;
    let movieReviews = typeof this.props.MovieReviews!== "undefined"?this.props.MovieReviews.data:undefined;
    return (
      <div className="detail-container">
        <div className="container">
        <div>
            <DetailItemComponent detail={movieDetail} type={"movie"} fetching={this.props.MovieFetching}/>
            <CastComponent castDetail={creditsDetail} fetching={this.props.CreditsFetching}/>
            <VideoComponent trailerData ={trailerVideos} type={"movie"} fetching={this.props.VideoFetching}/>
            <ReviewComponent reviewData = {movieReviews} type={"movie"} fetching={this.props.ReviewsFetching}/>
            <SmallCommonComponent SimilarData={similarMovies} RecommendData= {recommendMovies} type={"movie"} RecommedFetching={this.props.RecommedFetching} SimilarFetching={this.props.SimilarFetching}/>
           
        </div> 
        
        </div>
      </div>
    )
  }
}
const mapStateToProps = state=>{
    return{
        MovieDetail: state.MovieDetail.MovieDetail,
        MovieFetching: state.MovieDetail.fetching,
        VideoFetching: state.MovieVideos.fetching,
        CreditsFetching: state.MovieCredits.fetching,
        RecommedFetching: state.RecommendMovies.fetching,
        SimilarFetching: state.SimilarMovies.fetching,
        ReviewsFetching: state.MovieReviews.fetching,
        MovieVideos : state.MovieVideos.MovieVideos,
        MovieCredits: state.MovieCredits.MovieCredits,
        RecommendMovies: state.RecommendMovies.RecommendMovies,
        SimilarMovies: state.SimilarMovies.SimilarMovies,
        MovieReviews: state.MovieReviews.MovieReviews
    }
}

export default connect(mapStateToProps,{getMovieDetail,getMovieCredits,getMovieVideos,getSimilarMovies,getRecommendMovie,getMovieReview})(MovieDetailComponent)