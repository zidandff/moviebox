import '../../style/carousel-item.css'
import imdbLogo from '../../assets/imdb.png';
class CarouselItem extends HTMLElement {
  set movie(movie){
    this._movie = movie;
    this.classList.add('swiper-slide')
    this.render();
  }
  
  render(){
    this.innerHTML = `
        <img class="backdrop" src="https://image.tmdb.org/t/p/w1280${this._movie.backdrop_path}" alt="">
        <div class="container">
          <div class="detail-movie col-lg-5">
            <h1 class="title">${this._movie.title}</h1>
            <div class="rating my-3">
            <img src="${imdbLogo}" alt="imdb rating">
              ${this._movie.vote_average}
            </div>
            <p class="description">${this._movie.overview}</p>
            <button class="btn button-trailer">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="white"/>/svg>            
              <span>WATCH TRAILER</span>
            </button>
          </div>
        </div>
    `
  }
}

customElements.define('carousel-item', CarouselItem);