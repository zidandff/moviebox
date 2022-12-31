import moviePoster from '../../assets/Poster.jpg';
import Swiper from 'swiper/bundle';
import '../../style/movie-carousel.css'

class MovieCarousel extends HTMLElement {
  connectedCallback(){
    const swiper = new Swiper('.movie-carousel', {
      direction: 'vertical',
      loop: true,
      pagination: {
        dynamicBullets: true,
        clickable: true,
        el: '.swiper-pagination',
      },
    });

    this.innerHTML = `
      
      <div class="swiper movie-carousel">
        <div class="swiper-wrapper">

          <div class="swiper-slide">
            <img src="${moviePoster}" alt="John wick poster">
            
            <div class="container">
              <div class="detail-movie col-lg-4">
                <h1 class="title">John Wick 3: Parabellum</h1>
                <span class="rating">Rating: 86/100</span>
                <p class="description">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                <button class="btn button-trailer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="white"/>/svg>            
                  <span>WATCH TRAILER</span>
                </button>
              </div>
            </div>

          </div>

        </div>
        
        <div class="swiper-pagination"></div>
      </div>
    `
  }
}

customElements.define('movie-carousel', MovieCarousel);