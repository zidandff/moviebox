import favIcon from '../../assets/favorite.svg'

class MovieCard extends HTMLElement {
  set movie(movie){
    this._movie = movie;
    this.classList.add('swiper-slide', 'flex', 'flex-col', 'relative');
    this.render();
  }

  render(){
    this.innerHTML = `
      <div class="absolute top-0 left-0 w-full flex justify-between items-center p-3">
        ${this._movie.media_type ? '<span class="bg-[rgba(255,255,255,0.3)] backdrop-blur rounded-2xl text-xs text-white px-2 py-1">' + this._movie.media_type + '</span>' : ""}
        <div class="bg-[rgba(255,255,255,0.3)] backdrop-blur rounded-full p-2 cursor-pointer group transition hover:bg-slate-100 ml-auto">
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="group-hover:fill-red-500 transition" fill-rule="evenodd" clip-rule="evenodd" d="M1.17157 1.48284C2.73367 -0.0381453 5.26633 -0.0381453 6.82842 1.48284L7.99999 2.62359L9.17157 1.48284C10.7337 -0.0381453 13.2663 -0.0381453 14.8284 1.48284C16.3905 3.00383 16.3905 5.46984 14.8284 6.99083L7.99999 13.6396L1.17157 6.99083C-0.390524 5.46984 -0.390524 3.00383 1.17157 1.48284Z" fill="#D1D5DB"/>
          </svg>
        </div>
      </div>

      <img class="w-full" src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" alt="">
      <span class="text-base text-gray-300 font-medium mt-2 mb-1">${this._movie.release_date}</span>
      <h2 class="text-white font-bold text-lg leading-tight line-clamp-2">${this._movie.title || this._movie.name}</h2>
      <div class="mt-2">
        <img class="inline" src="./assets/imdb.png" alt="imdb rating">
        <span class="text-gray-300 text-sm ml-1">${parseFloat(this._movie.vote_average).toFixed(1)}</span>
      </div>
    `
  }
}

customElements.define('movie-card', MovieCard)