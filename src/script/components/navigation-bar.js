import brandLogo from '../../assets/Logo.svg';

class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="container">
          <div class="nav-wrapper w-full flex justify-between items-center relative">

            <button class="hamburger-menu md:order-3">
              <div class="hamburger-top"></div>
              <div class="hamburger-middle"></div>
              <div class="hamburger-bottom"></div>
            </button>
            
            <form class="hidden rounded-lg border transition w-96 justify-between border-white px-4 py-2 md:flex md:order-2">
              <input class="bg-transparent border-none p-0 pr-3 flex-1 text-gray-100 placeholder:text-gray-100 focus:ring-0" type="text" placeholder="What do you want to watch?">
              <button class="ml-auto" type="submit">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>          
              </button>
            </form>

            <a class="navbar-brand md:order-1" href="#">
              <img class="h-9" src="${brandLogo}" alt="">
            </a>

            <button class="toggle-search md:hidden">
              <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>          
            </button>

            <form class="mobile-search">
              <input class="bg-transparent border-none p-0 py-1 pr-3 flex-1 text-gray-100 placeholder:text-gray-100 focus:ring-0" type="text" placeholder="What do you want to watch?">
              <button class="bg-primary rounded-md text-white text-sm px-3" type="submit">
                Search
              </button>
            </form>

          </div>
          
        </div>
    `;

    // search icon event listener
    this.querySelector('.toggle-search').addEventListener('click', ()=> {
      this.querySelector('.toggle-search').classList.toggle('expand')
    });

  }
}

customElements.define('navigation-bar', NavigationBar)