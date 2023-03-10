import Swiper from 'swiper/bundle';
import './carousel-item';

export class MovieCarousel extends HTMLElement {
  set moviesList(moviesList){
    this._moviesList = moviesList;
    this.render();
    this.renderSwiper();
  }

  render(){
    this.innerHTML = `
      <div class="swiper movie-carousel aspect-video lg:h-[100vh] w-full">
        <div class="swiper-wrapper"></div>
        <div class="swiper-pagination"></div>
      </div>
    `;

    this.renderCarouselItem()
  }

  renderCarouselItem(){
    this._moviesList.forEach(movie => {
      const carouselItemElement = document.createElement('carousel-item');
      carouselItemElement.movie = movie;
      
      this.querySelector('.swiper-wrapper').appendChild(carouselItemElement)
    });
  }

  renderSwiper(){
    new Swiper('.movie-carousel', {
      autoplay: true,
      loop: true,    
      pagination: {
        dynamicBullets: true,
        clickable: true,
        el: '.swiper-pagination',
      },
    });
  }

}

customElements.define('movie-carousel', MovieCarousel);