import React, { Component } from 'react';
import NavSection from './components/NavSection';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import PopularMoviesComponent from './components/movies/PopularMoviesComponent';
import UpcomingMoviesComponent from './components/movies/UpcomingMoviesComponent';
import TopRatedMoviesComponent from './components/movies/TopRatedMoviesComponent';
import TopRatedTvComponent from './components/tv/TopRatedTvComponent';
import PopularTvComponent from './components/tv/PopularTvComponent';
import OnAirTvComponent from './components/tv/OnAirTvComponent';
import MovieDetailComponent from './components/movies/MovieDetailComponent';
import TvShowDetailComponent from './components/tv/TvShowDetailComponent';
import HomePageComponent from './components/HomePageComponent';
import TvShowsByGenreComponent from './components/tv/TvShowsByGenreComponent';
import MoviesByGenreComponent from './components/movies/MoviesByGenreComponenet';
import SearchComponent from './components/SearchComponent';
import PersonDetailComponent from './components/person/PersonDetailComponent';

import runtimeEnv from '@mars/heroku-js-runtime-env';
class App extends Component {
  render() {
    
    const env = runtimeEnv();
    return (
      <Provider store={store}>
      <div>
        <Route path="/" component ={NavSection}></Route>
        <Route exact path="/" component ={HomePageComponent}/>
        <Route exact path="/movies" component={PopularMoviesComponent}/>
        <Route exact path="/movies/popular" component={PopularMoviesComponent}/>
        <Route exact path="/movies/top-rated" component={TopRatedMoviesComponent}/>
        <Route exact path="/movies/upcoming" component={UpcomingMoviesComponent}/>
        <Route exact path="/tv" component={PopularTvComponent}/>
        <Route exact path="/tv/popular" component={PopularTvComponent}/>
        <Route exact path="/tv/top-rated" component={TopRatedTvComponent}/>
        <Route exact path="/tv/on-air" component={OnAirTvComponent}/>
        <Route exact path="/movie/:id" component={MovieDetailComponent}/>
        <Route exact path="/tv-show/:id" component={TvShowDetailComponent}/>
        <Route exact path="/person/:id" component={PersonDetailComponent}/>
        <Route exact path= "/tv-shows/genre/:id" component ={TvShowsByGenreComponent}/>
        <Route exact path ="/movies/genre/:id" component={MoviesByGenreComponent}/>
        <Route exact path ="/search/:type/:query" component={SearchComponent}/>
        
      </div>
      </Provider>
      
    );
  }
}

export default App;
