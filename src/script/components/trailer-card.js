class TrailerCard extends HTMLElement {
  // set trailer(trailer){
  //   this._trailer = trailer;
  //   this.classList.add('swiper-slide');
  //   this.render();
  // }

  connectedCallback(){
    this.innerHTML = `
      <div class="relative aspect-video w-full">
        <img class="w-full h-full object-cover object-center transition hover:opacity-80" src="https://images2.alphacoders.com/870/thumb-1920-870886.jpg" alt="">
        <button class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.8798 27.9199L28.8867 22.5912C27.2254 21.4836 25 22.6746 25 24.6713V35.3287C25 37.3254 27.2254 38.5164 28.8867 37.4088L36.8798 32.0801C38.3641 31.0906 38.3641 28.9094 36.8798 27.9199Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M52.5 30C52.5 42.4264 42.4264 52.5 30 52.5C17.5736 52.5 7.5 42.4264 7.5 30C7.5 17.5736 17.5736 7.5 30 7.5C42.4264 7.5 52.5 17.5736 52.5 30Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <h2 class="text-lg font-bold text-gray-300 mt-2">Blade Runner 2049 - Official Trailer</h2>
    `
  }
}

customElements.define('trailer-card', TrailerCard)