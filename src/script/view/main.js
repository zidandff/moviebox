import '../components/movie-carousel.js'
import DataSource from '../data/data-source.js';
import '../components/movie-list.js'

const main = ()=> {
    nowPlaying();
    trendingMovies();
    upcomingMovies();
}

const nowPlaying = async ()=> {
  const MovieCarouselElement = document.querySelector('movie-carousel');
  const dataMovies = await DataSource.getMovies('movie/now_playing');
  MovieCarouselElement.moviesList = dataMovies.results;
}

const trendingMovies = async ()=> {
  const moviesListElement = document.querySelector('movie-list.trending-movies');
  const dataMovies = await DataSource.getMovies('trending/all/week');
  moviesListElement.moviesList = dataMovies.results;
}

const upcomingMovies = async ()=> {
  const moviesListElement = document.querySelector('movie-list.upcoming-movies');
  const dataMovies = await DataSource.getMovies('movie/upcoming');
  moviesListElement.moviesList = dataMovies.results;
}

export default main;