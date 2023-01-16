import Swiper from 'swiper';
import './trailer-card.js'

class TrailerList extends HTMLElement {
  set trailers(trailers){
    this._trailers = trailers.slice(0, 10);
    this.render();
    this.renderSwiper();
  }

  render(){
    this.innerHTML = `
      <div class="swiper trailer-list">
        <div class="swiper-wrapper"></div>
        
        <div class="swiper-button-prev hidden lg:block"></div>
        <div class="swiper-button-next hidden lg:block"></div>
      </div>
    `
    this.renderTrailerCard();
  }

  renderTrailerCard(){
    this._trailers.forEach(trailer => {
      const trailerCardElement = document.createElement('trailer-card');
      trailerCardElement.trailer = trailer;
      
      this.querySelector('.swiper-wrapper').appendChild(trailerCardElement);
    })
  }

  renderSwiper(){
    new Swiper('.trailer-list', {
      slidesPerView: 1.2,
      spaceBetween: 20,
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2.3,
        },
        1024: {
          slidesPerView: 3.5,
        }
      }
    })
  }
}

customElements.define('trailer-list', TrailerList);