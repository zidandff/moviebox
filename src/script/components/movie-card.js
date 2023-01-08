import favIcon from '../../assets/favorite.svg'

class MovieCard extends HTMLElement {
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set movie(movie){
    this._movie = movie;
    this.classList.add('swiper-slide');
    this.render();
  }

  connectedCallback(){
    this.render();
    this.classList.add('bg-red-500')
  }

  render(){
    this.shadowDOM.innerHTML = `
      <style>
        > {
          width: 250px;
          display: flex;
          flex-direction: column;
          position: relative;
          color: #ffffff;
        }

        * {
         box-sizing: border-box;
         padding: 0;
         margin: 0;
        }
        
        .header-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
        }
        
        .poster {
          width: 100%
        }

        .header-card .media-type {
          background-color: hsla(220, 14%, 96%, 0.5);
          border-radius: 15px;
          padding: 2px 12px;
          font-size: 14px;
        }

        .favorite-icon {
          margin-left: auto;
          cursor: pointer;
        }
        
        .release-date {
          font-size: 12px;
          margin-top: 8px;
        }
        
        > .title {
          font-size: 18px;
          font-weight: bold;
        }
      </style>
      <div class="header-card">
        ${this._movie.media_type ? '<span class="media-type">' + this._movie.media_type + '</span>' : ""}
        
        <div class="favorite-icon">
          <img src="${favIcon}" alt="">
        </div>
      </div>

      <img class="poster" src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" alt="">
      <span class="release-date">${this._movie.release_date}</span>
      <h2 class="title">${this._movie.title || this._movie.name}</h2>
      <div class="rating">
        <img src="./assets/imdb.png" alt="imdb rating">
        ${this._movie.vote_average}
      </div>
    `
  }
}

customElements.define('movie-card', MovieCard)