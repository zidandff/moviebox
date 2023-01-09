import DataSource from '../data/data-source.js';
import '../components/movie-carousel.js';
import '../components/movie-list.js';
import '../components/trailer-list.js';

const main = async ()=> {
    nowPlaying();
    trendingMovies();
    upcomingMovies();
    newTrailer();
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

const newTrailer = async ()=> {
  const trailerListElement = document.querySelector('trailer-list');
  const dataTrailers = await DataSource.getMovies('movie/upcoming');
  trailerListElement.trailers = dataTrailers.results;
}

export default main;