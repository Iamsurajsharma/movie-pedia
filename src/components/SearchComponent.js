    import React, { Component } from 'react';
    import {connect} from 'react-redux';
    import ListItemComponent from './ListItemComponent';
    import {searchPerson} from '../actions/Persons/PersonSearchAction';
    import {searchTvShow} from '../actions/tv/TvShowSearchAction';
    import {searchMovie} from '../actions/movies/MoviesSearchAction';
    import {FormControl,Button, InputGroup,Form} from 'react-bootstrap';
    import {listLoader} from '../helpers/loader';

    class SearchComponent extends Component {
      state={
        query:"",
        searchType:"",
        page:1
      }
      componentDidMount(){
        this.props.searchMovie(this.props.match.params.query,1)
        this.props.searchPerson(this.props.match.params.query,1)
        this.props.searchTvShow(this.props.match.params.query,1)
        let type;
        if(this.props.match.params.type==="movies"){
          type= "/search/movies"
        }
        if(this.props.match.params.type === "tv-shows"){
          type= "/search/tv-shows"
        }
        if(this.props.match.params.type==="persons"){
          type="/search/persons"
        }
        this.setState({
          query:  this.props.match.params.query,
          searchType: type
        })
      }
        renderMovies(movieData,type){
              return   <div className="container">
                      <div className="row">
                            <div className="col-md-12 list-container">
                              <h3>Search Movies Results for <span className="title-color">"{this.props.match.params.query}"</span></h3>
                              <div className="row">
                              {movieData.length===0 && this.props.MovieFetching===false?<div className="container" style={{textAlign:'center' ,marginTop:'50px'}}>
                                <h4>Movie Not Found</h4>
                          </div>: movieData.map((movieDetail,key)=>{
                                  if(type==="movie"){
                                    return  <ListItemComponent data={movieDetail} key={key} type="movie"/>
                                  } 
                                  else{
                                      return ""
                                  }
                              })
                              }
                              </div>
                              {type==="movie" && this.props.MovieSearch.data.total_pages>1 && this.props.MovieFetching===false? 
                      <div className="view-all-container mb-5">
                  
                     <button className="btn btn-success" onClick={this.loadMore.bind(this,type)}>Load More</button>
                  </div>:""}
                     {type==="movie" &&  this.props.MovieFetching===true? 
                        <div className="container">
                            
                            {  listLoader()}
                        </div>
                  :""}
                    </div>  
                  </div>
            </div>
              
        }
        renderTvShows(movieData,type){
            return <div className="row">
                        <div className="col-md-12 list-container">
                          <h3>Search Tv Shows Results <span className="title-color">"{this.props.match.params.query}"</span></h3>
                            <div className="row">
                            {movieData.length===0 && this.props.TvShowFetching===false?<div className="container" style={{textAlign:'center' ,marginTop:'50px'}}>
                                <h4>Tv Show Not Found</h4>
                              
                          </div>: movieData.map((movieDetail,key)=>{
                                if(type==="tv"){
                                  return  <ListItemComponent data={movieDetail} key={key} type="tv"/>
                                } 
                                else{
                                    return ""
                                }
                            })
                            }
                            </div>
                          { type==="tv" && this.props.TvShowSearch.data.total_pages>1 && this.props.TvShowFetching===false?
                            <div className="view-all-container mb-5">
                          <button className="btn btn-success" onClick={this.loadMore.bind(this,type)}>Load More</button>
                        </div>:""}
                        {type==="tv" &&  this.props.TvShowFetching===true? 
                        <div className="container">
                            {  listLoader()}
                        </div>
                  :""}
                        
                  </div>
                            
                  
                  </div>
            
      }
      renderPerson(movieData,type){
        
        return <div className="row">
                <div className="col-md-12 list-container">
                  <h3>Search Person Results <span className="title-color">"{this.props.match.params.query}"</span></h3>
                    <div className="row">
                    {movieData.length===0 && this.props.PersonFetching ===false?
                    <div className="container" style={{textAlign:'center' ,marginTop:'50px'}}>
                        <h4>Person Not Found</h4>
                      
                  </div>:movieData.map((movieDetail,key)=>{
                        if(type==="person"){
                          return  <ListItemComponent data={movieDetail} key={key} type="person"/>
                        } 
                        else{
                            return ""
                        }
                    })}
                    </div>
                    { type==="person" && this.props.PersonSearch.data.total_pages>1 && this.props.PersonFetching===false ?
                      <div className="view-all-container mb-5">
                     <button className="btn btn-success" onClick={this.loadMore.bind(this,type)}>Load More</button>
                  </div>:""}
                  {type==="person" &&  this.props.PersonFetching===true? 
                        <div className="container">
                            
                            {  listLoader()}
                        </div>
                  :""}
                </div>
              </div>
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
    renderSearchResults(personSearch,MovieSearch,TvShowSearch){

        switch(this.props.match.params.type){
          case 'movies':
            return  this.renderMovies(MovieSearch,'movie')
            
          case 'tv-shows':
            return    this.renderTvShows(TvShowSearch,'tv')
          
          case 'persons':
            return  this.renderPerson(personSearch,'person')
              

          default: 
          return ""

        }
    }
    loadMore(type){
      let lastPage =this.state.page+1;
      if(type==="movie"){
      this.props.searchMovie(this.props.match.params.query,lastPage)
      }
      if(type === "tv"){  
        
      this.props.searchTvShow(this.props.match.params.query,lastPage)

      }
      if(type==="person"){
        
      this.props.searchPerson(this.props.match.params.query,lastPage)
      }
      this.setState({
        page: lastPage
      })
     
    }
      render() {
      let PersonSearch = typeof this.props.PersonSearch.data!== "undefined"?this.props.PersonSearch.data.results:null;
      let MovieSearch = typeof this.props.MovieSearch.data!== "undefined"?this.props.MovieSearch.data.results:null;
      let TvShowSearch = typeof this.props.TvShowSearch.data!== "undefined"?this.props.TvShowSearch.data.results:null;
        return (  
          <div className="container">
                <div  className=" srch-container">
              <div className="row">
                  <div className="col-10 offset-1 bg-dark input-bg">
                  <Form onSubmit={this.onSubmitSearch.bind(this)}>
                      <InputGroup>   
                        <FormControl type="text" placeholder="Search" value={this.state.query} onChange={this.handleChange.bind(this)}/>
                        <Button  className="ml-2" type="submit" variant="outline-success" >Search</Button>
                      </InputGroup>
                        <div className="input-container mt-2 radio-input">
                              <div className="radio-label">
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
                      {PersonSearch ===null || MovieSearch === null || TvShowSearch === null?
                        listLoader()
                        :
                        this.renderSearchResults(PersonSearch,MovieSearch,TvShowSearch)
                      }
                    
                  
          </div>
        )
      }
    }
    const mapStateToProps =state=>{
        return {
            PersonSearch: state.PersonSearch.PersonSearch,
            MovieSearch: state.MovieSearch.MovieSearch,
            TvShowSearch: state.TvShowSearch.TvShowSearch,
            PersonFetching: state.PersonSearch.fetching,
            MovieFetching: state.MovieSearch.fetching,
            TvShowFetching: state.TvShowSearch.fetching
        }
      }
    export default connect(mapStateToProps,{searchMovie,searchTvShow,searchPerson}) (SearchComponent);