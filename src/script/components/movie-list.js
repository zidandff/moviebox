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
      <style>
          movie-card {
            width: 250px;
            display: flex;
            flex-direction: column;
            position: relative;
            color: #ffffff;
          }

          .swiper-button-prev,
          .swiper-button-next {
            color: #FFFFFF;
          }

        }      
      </style>
      <div class="swiper movie-list">
        <div class="swiper-wrapper"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
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
      slidesPerView: 4,
      spaceBetween: 40,
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

}

customElements.define('movie-list', MovieList);