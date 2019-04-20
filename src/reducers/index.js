import {combineReducers} from 'redux';
import TopRatedMovies from './movies/TopRatedMovieReducer';
import PopularMovies from './movies/PopularMovieReducer';
import UpComingMovies from './movies/UpComingMovieReducer';
import OnAirTV from './tv/OnAirTvReducer';
import PopularTv from './tv/PopularTvReducer';
import TopRatedTv from './tv/TopRatedTvReducer';
import MovieDetail from './movies/MovieDetailReducer';
import TvShowDetail from './tv/TvShowDetailReducer';
import SimilarTvShows from './tv/SimilarTvShows';
import RecommendTvShow from './tv/RecommendTvShowReducer';
import RecommendMovies from './movies/RecommendMoviesReducer';
import SimilarMovies from './movies/SimilarMoviesReducer';
import MovieCredits from './movies/CreditsMovieReducer';
import TvShowCredits from './tv/CreditsTvShowReducer';
import MovieVideos from './movies/VideosMovieReducer';
import TvShowVideos from './tv/VideosTvShowReducer';
import TvShowReviews from './tv/ReviewTvShowReducer';
import MovieReviews from './movies/ReviewMovieReducer';
import MovieByGenre from './movies/DiscoverMovieByGenreReducer';
import TvShowByGenre from './tv/DiscoverTvShowsByGenreReducer';
import MovieGenreValues from './movies/MovieGenreValueReducer';
import TvShowGenreValues from './tv/TvShowGenreValues';
import MovieSearch from './movies/MovieSearchReducer';
import TvShowSearch from './tv/TvShowSearchReducer';
import PersonDetail from './Person/PersonDetailReducer';
import PersonSearch from './Person/PersonSearchReducer';
import PersonMovies from './Person/PersonMoviesReducer';
import PersonTvShows from './Person/PersonTvShowReducer'
export default combineReducers({
    TopRatedMovies, PopularMovies,UpComingMovies,OnAirTV,PopularTv,TopRatedTv,MovieDetail,TvShowDetail,SimilarTvShows,RecommendTvShow,SimilarMovies,RecommendMovies,MovieCredits,TvShowCredits,MovieVideos,TvShowVideos,TvShowReviews,MovieReviews,TvShowByGenre,MovieByGenre,MovieGenreValues,TvShowGenreValues,MovieSearch,TvShowSearch,PersonDetail,PersonSearch,PersonMovies,PersonTvShows
})