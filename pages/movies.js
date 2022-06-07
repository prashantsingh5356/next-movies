import MoviesPage from "../components/MoviesPage/MoviesPage";

const Movies = (props) => {
  const movies = props.movies;
  return <MoviesPage movies={movies} />;
};

export async function getStaticProps() {
  //fetching list of Movies

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US&page=1"
  );

  const moviesData = await response.json();
  //   console.log(moviesData.results);

  return {
    props: {
      movies: moviesData.results.map((movie) => {
        return {
          title: movie.title,
          poster: movie.poster_path,
          description: movie.overview,
          backdrop: movie.backdrop_path,
          id: movie.id,
        };
      }),
    },
  };
}

export default Movies;
