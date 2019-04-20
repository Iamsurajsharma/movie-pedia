  import React, { Component } from 'react';
  import {connect} from 'react-redux';
  import {getPersonDetail} from '../../actions/Persons/PersonDetailAction';
  import {getPersonMovies} from '../../actions/Persons/PersonMoviesAction';
  import {getPersonTvShows} from '../../actions/Persons/PersonTvShowsAction';
  import ListItemComponent from '../ListItemComponent';
  import personPlaceholder from '../../images/person-placeholder.png';

  import {listLoader} from '../../helpers/loader';

  class PersonDetailComponent extends Component {
    componentDidMount(){
      this.props.getPersonDetail(this.props.match.params.id)
      this.props.getPersonTvShows(this.props.match.params.id)
      this.props.getPersonMovies(this.props.match.params.id)
    }
    renderMovies(profileMovies){
      return profileMovies.cast.length===0 && this.props.FetchingMovies ===false ? 
        <div className="container not-found">
        <h4> No Movie Found </h4>
   </   div>: profileMovies.cast.map((data,key)=>{
                if(key>=0&&key<=3){
                  return   <ListItemComponent data={data} key={key} type="movie"/>                       
                }
                else{
                    return "";
                }
              })

  }
  renderTvShows(profileTv){
    return profileTv.cast.length===0 && this.props.FetchingMovies ===false ? 
    <div className="container not-found">
    <h4> No Tv Show Found </h4> 
</ div>: profileTv.cast.map((data,key)=>{
      if(key>=0&&key<=3){
      return   <ListItemComponent data={data} key={key} type="tv"/>                       
    }
      else{
          return "";
      }
  })
  }
    render() {
      let profileInfo = this.props.PersonDetail.data;
      let profileMovies = this.props.PersonMovies.data;
      let profileTv = this.props.PersonTvShows.data;
      return (
        <div className="detail-container">
              <div className="container profile-container">
                {profileInfo !==undefined &&  this.props.DetailFetching === false?
                  <div className="row">
                  <div className="col-md-4 col-sm-5 col-12">
                    <div className="img-container profile-pic" style={{backgroundImage: profileInfo.profile_path===null|| profileInfo.profile_path === undefined?`url(`+personPlaceholder+`)`:`url(https://image.tmdb.org/t/p/original/`+profileInfo.profile_path+`)`}}>
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-7 col-12">
                        <div className="profile-discription">
                        <h3>{profileInfo.name}</h3>
                        <div className="personal-info">
                          <h6><span className="title-color">Gender</span> : {profileInfo.gender === 2? "Male":profileInfo.gender===1?'female':"Not specified"}</h6>
                          <h6><span className="title-color">Birthday</span> : {profileInfo.birthday===null?"Not available":profileInfo.birthday}</h6>
                          <h6><span className="title-color">Place of Birth</span>: {profileInfo.place_of_birth===null?"Not available":profileInfo.place_of_birth}</h6>
                        </div>
                          <div className="bio-graphy">
                              <p>
                              {profileInfo.biography}
                              </p>
                          </div>
                        </div>
                    </div> 
                    
                </div>
                :
                  
                <div className="row">
                  <div className="col-12">
                    <div className="profile-pic-loader">
                    </div>
                    </div>
                </div>
                }
                <div className="cast-container container profile-casted">
                        <h3>Acting </h3>

                          <h4>Movies</h4>
                          {profileMovies === undefined || this.props.FetchingMovies ===true? listLoader()
                      :<div className="row">
                          { this.renderMovies(profileMovies)}
                  </div>  }
                      
                  <h4>Tv Shows</h4>
                          {profileTv === undefined || this.props.FetchingTvShow ===true? listLoader()
                      :<div className="row">
                          { this.renderTvShows(profileTv)}
                  </div>  }
                      </div>
              
              </div>
        </div>
      )
    }
  }
  const mapSateToProps = state =>{
    return {
      PersonDetail: state.PersonDetail.PersonDetail,
      DetailFetching: state.PersonDetail.fetching,
      PersonMovies: state.PersonMovies.PersonMovies,
      FetchingMovies: state.PersonMovies.fetching,
      PersonTvShows: state.PersonTvShows.PersonTvShows,
      FetchingTvShow: state.PersonTvShows.PersonTvShows
    }
  }
  export default connect(mapSateToProps,{getPersonDetail,getPersonMovies,getPersonTvShows})(PersonDetailComponent)