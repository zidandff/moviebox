import '../components/movie-carousel.js'

function main(){
  const movies = [
    {
      // poster : ,
      title: "John Wick 3: Parabellum",
      rating: 87,
      desc: "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    },
    {
      // poster : ,
      title: "John Wick 3: Parabellum",
      rating: 87,
      desc: "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    },
    {
      // poster : ,
      title: "John Wick 3: Parabellum",
      rating: 87,
      desc: "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    }
  ];

  const header = document.querySelector('header');
  const MovieCarouselElement = document.querySelector('movie-carousel')
  MovieCarouselElement.moviesList = movies

}

export default main;