import '../components/movie-carousel.js'
import DataSource from '../data/data-source.js';

function main(){
  window.addEventListener('DOMContentLoaded', function() {
    upcomingMovies()
  })
}

async function upcomingMovies(){
  const MovieCarouselElement = document.querySelector('movie-carousel');
  const dataMovies = await DataSource.getMovies('movie/now_playing');
  MovieCarouselElement.moviesList = dataMovies.results;

}

export default main;