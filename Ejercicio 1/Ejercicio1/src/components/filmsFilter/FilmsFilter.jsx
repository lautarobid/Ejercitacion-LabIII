import watchList from "../films/Films";

const filterMovies = () => {

  return watchList
    .filter(movie => movie.Director === 'Christopher Nolan' && movie.imdbRating > 8.0)
    .map(movie => movie.Title);
}

export default filterMovies;