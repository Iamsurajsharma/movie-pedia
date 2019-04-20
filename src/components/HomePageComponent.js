import React, { Component } from 'react';
import {getOnAirTv} from '../actions/tv/OnAirTvAction';
import {getUpcomingMovies} from '../actions/movies/UpComingMoviesAction';
import {connect } from 'react-redux';
import Slider from "react-slick";
import ListItemComponent from './ListItemComponent';
import {FormControl,Button, InputGroup,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {sliderPreloader,listLoader} from '../helpers/loader';
 class HomePageComponent extends Component {
   state={
     query:"",
     searchType:"/search/movies"
   }
  componentDidMount(){
    this.props.getUpcomingMovies();
    this.props.getOnAirTv();
  }
  handleChange(event){
    this.setState({
      query: event.target.value
    })
  }
  onRadioBtnChange(event){
    this.setState({
      searchType: event.target.value
    })
  }
  onSubmitSearch(){
    this.props.history.push(`${this.state.searchType}/${this.state.query}`)
}
  searchBar(){
    return  <div  className="container search-input">
           <div className="row">
              <div className="col-10  offset-1  bg-dark input-bg">
              <Form onSubmit={this.onSubmitSearch.bind(this)}>
                  <InputGroup>   
                    <FormControl type="text" placeholder="Search" value={this.state.query} onChange={this.handleChange.bind(this)}required/>
                    <Button  className="ml-2" type="submit" variant="outline-success" >Search</Button>
                  </InputGroup>
                     <div className="input-container mt-2 radio-input">
                          <div className=" radio-label">
                          <Form.Label as="legend">
                              <p className="text-light">Search  By</p>
                            </Form.Label>

                        </div>
                 <div className="radio-btn-container">
                 {['radio'].map(type => (
                    <div key={`inline-${type}`}>
                      <Form.Check
                        type="radio"
                        label="Movies"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        inline
                        className="text-light"
                        value="/search/movies"
                        onChange={this.onRadioBtnChange.bind(this)}
                        checked={this.state.searchType==="/search/movies"}
                      />
                      <Form.Check
                        type="radio"
                        label="Tv Shows"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        inline
                        className="text-light"
                        value="/search/tv-shows"
                        onChange={this.onRadioBtnChange.bind(this)}
                        
                        checked={this.state.searchType==="/search/tv-shows"}
                      />
                      <Form.Check
                        type="radio"
                        label="Persons"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        inline
                        className="text-light"
                        value="/search/persons"
                        onChange={this.onRadioBtnChange.bind(this)}
                        
                        checked={this.state.searchType==="/search/persons"}
                      />
                    </div>
                  ))}
                 
                 </div>

                  </div>
             </Form>
              </div>
           </div>
    </div> 
  }

  render() {
    let movieData = typeof this.props.UpComingMovies.data!== "undefined"?this.props.UpComingMovies.data.results:null;
    
    let tvData = typeof this.props.OnAirTV.data!== "undefined"?this.props.OnAirTV.data.results:null;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false, 
      autoplay:true
      };
    return (
      <div className="container"> 
       {this.props.MovieFetching===false && this.props.TvFetching ===false?  
           <div className="home-search-container  ">
             <Slider {...settings}>
              {movieData === null?"":
               movieData.map((movieDetail,key)=>{
            if(key>=0 && key<=3){
              return <div className="slider-container" key={key}>
                      <div className="slider-background" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/`+movieDetail.backdrop_path+`)`}}>
                      </div>   
                    </div>
            }else{
              return "" 
            }
          }
          )}
           {tvData === null?"":
               tvData.map((movieDetail,key)=>{
            if(key>=0 && key<=3){
              return <div className="slider-container" key={key}>
                      <div className="slider-background" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/`+movieDetail.backdrop_path+`)`}}>
                      </div>   
                    </div>
            }
            else{
              return "" 
            }
          }
          )}
          </Slider>
        
          {this.searchBar()}
           </div>
           
          : sliderPreloader()
          }

           <div className="hm-pg-list">
          <h3>Movies</h3>
          {movieData === null||this.props.MovieFetching===true?
              listLoader()
              :
                <div className=" list-container">
                <div className="row">
                {movieData.map((movieDetail,key)=>{
                  if(key>=0 && key<4){
                    return  <ListItemComponent data={movieDetail} key={key} type="movie"/>
                  }
                  else return ""
                })}
                
                <div className="view-all-container">
                        <Link to="/movies/popular"><button className="btn btn-success">View All</button></Link>
                    </div>
                </div>
            </div>
          }
           </div>

          <div className="hm-pg-list">
          <h3>Tv Shows</h3>
          </div>
           {tvData === null||this.props.TvFetching===true?
              listLoader()
              :
                <div className="list-container">
                <div className="row">
                {tvData.map((movieDetail,key)=>{
                  if(key>=0 && key<4){
                    return  <ListItemComponent data={movieDetail} key={key} type="tv"/>
                  }
                  else return ""
                })}
                    <div className="view-all-container mb-5">
                        <Link to="/tv/on-air"><button className="btn btn-success">View All</button></Link>
                    </div>

                 
                </div>
            </div>
          }
           
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return{
    OnAirTV : state.OnAirTV.OnAirTV,
    UpComingMovies : state.UpComingMovies.UpComingMovies,
    MovieFetching : state.UpComingMovies.fetching,
    TvFetching: state.OnAirTV.fetching
  }
}
export default connect(mapStateToProps,{getOnAirTv,getUpcomingMovies}) (HomePageComponent);