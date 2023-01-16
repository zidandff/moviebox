import Swiper from 'swiper/bundle';
import '../components/movie-card.js';

class MovieList extends HTMLElement {
  set moviesList(moviesList){
    this._moviesList = moviesList;
    this.render();
    this.renderSwiper();
  }

  render(){
    this.innerHTML = `
      <div class="swiper movie-list">
        <div class="swiper-wrapper"></div>

        <div class="swiper-button-prev hidden lg:block"></div>
        <div class="swiper-button-next hidden lg:block"></div>
      </div>
    `;

    this.renderMovieCard()
  }

  renderMovieCard(){
    this._moviesList.forEach(movie => {
      const movieCard = document.createElement('movie-card');
      movieCard.movie = movie;
      
      this.querySelector('.swiper-wrapper').appendChild(movieCard)
    });
  }

  renderSwiper(){
    new Swiper('.movie-list', {
      slidesPerView: 1.3,
      spaceBetween: 20,
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 4,
        }
      }
    });
  }

}

customElements.define('movie-list', MovieList);