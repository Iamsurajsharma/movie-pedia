import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getTvShowDetail} from '../../actions/tv/TvShowDetailAction';
import {getTvShowCredits} from '../../actions/tv/CreditsTvShowAction';
import {getTvShowVideos} from '../../actions/tv/VideosTvShowActions';
import {getRecommendTvShow} from '../../actions/tv/RecommendTvShowsAction';
import {getSimilarTvShow} from '../../actions/tv/SimilarTvShowAction';
import {getTvShowReviews} from '../../actions/tv/ReviewsTvShowAction';

import DetailItemComponent from '../DetailItemComponent';
import CastComponent from '../CastComponent';
import SmallCommonComponent from '../SmallCommonComponent';
import VideoComponent from '../VideoComponent';
import ReviewCompnent from '../ReviewComponent';


 class TvShowDetailComponent extends Component {
    componentDidMount(){
        this.props.getTvShowDetail(this.props.match.params.id);
        this.props.getRecommendTvShow(this.props.match.params.id);
        this.props.getSimilarTvShow(this.props.match.params.id);
        this.props.getTvShowCredits(this.props.match.params.id);
        this.props.getTvShowVideos(this.props.match.params.id);
        this.props.getTvShowReviews(this.props.match.params.id);
        
    }
    componentWillReceiveProps(nextProps){
      if(this.props.match.params.id!==nextProps.match.params.id){
        nextProps.getTvShowDetail(nextProps.match.params.id);
        nextProps.getRecommendTvShow(nextProps.match.params.id);
        nextProps.getSimilarTvShow(nextProps.match.params.id);
        nextProps.getTvShowCredits(nextProps.match.params.id);
        nextProps.getTvShowVideos(nextProps.match.params.id);
        nextProps.getTvShowReviews(nextProps.match.params.id);
      }
    }
  render() {
      let tvShowDetail = typeof this.props.TvShowDetail!== "undefined"?this.props.TvShowDetail.data:undefined;
      let creditsDetail = typeof this.props.TvShowCredits!== "undefined"?this.props.TvShowCredits.data:undefined;  
      let similarTvShow = typeof this.props.SimilarTvShows!== "undefined"?this.props.SimilarTvShows.data:undefined;
      let recommendTvShow = typeof this.props.RecommendTvShow!== "undefined"?this.props.RecommendTvShow.data:undefined;
      let trailerVideos = typeof this.props.TvShowVideos!== "undefined"?this.props.TvShowVideos.data:undefined;
      let tvShowReviews = typeof this.props.TvShowReviews!== "undefined"?this.props.TvShowReviews.data:undefined;
      return (
        <div className="detail-container">
           <div className="container">
        
              <DetailItemComponent detail={tvShowDetail} type="tv" fetching={this.props.FetchingTv}/>
              <CastComponent castDetail={creditsDetail} fetching={this.props.CastFetching}/> 
                <VideoComponent trailerData ={trailerVideos} type={"tv"} fetching={this.props.VideoFetching}/>
                <ReviewCompnent reviewData = {tvShowReviews} type={"tv"} fetching={this.props.ReviewFetching}/>
                  <SmallCommonComponent SimilarData={similarTvShow} RecommendData= {recommendTvShow} type={"tv"} RecommedFetching={this.props.RecommedFetching} SimilarFetching={this.props.SimiarFetching}/>
                  
          
           </div>
        </div>)
  }
}
const mapStateToProps = state=>{
    return{
        TvShowDetail: state.TvShowDetail.TvShowDetail,
        TvShowVideos: state.TvShowVideos.TvShowVideos,
        TvShowCredits: state.TvShowCredits.TvShowCredits,
        RecommendTvShow: state.RecommendTvShow.RecommendTvShow,
        SimilarTvShows: state.SimilarTvShows.SimilarTvShows,
        TvShowReviews: state.TvShowReviews.TvShowReviews,

        ReviewFetching: state.TvShowReviews.fetching,
        CastFetching: state.TvShowCredits.fetching,
        SimiarFetching: state.SimilarTvShows.fetching,
        RecommendFetching: state.RecommendTvShow.fetching,
        FetchingTv: state.TvShowDetail.fetching,
        VideoFetching: state.TvShowVideos.fetching,
    }
}

export default connect(mapStateToProps,{getTvShowDetail,getTvShowCredits,getRecommendTvShow,getSimilarTvShow,getTvShowVideos,getTvShowReviews})(TvShowDetailComponent)