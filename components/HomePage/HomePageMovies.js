import classes from "./HomePageMovies.module.css";
import MovieType from "./MovieType";

const HomePageMovies = (props) => {
  return (
    <>
      <MovieType type="Top Rated Movies" movies={props.topMovies} />
      <MovieType type="Trending Movies" movies={props.trendingMovies} />
      <MovieType type="Top Rated TV" movies={props.topTv} />
      <MovieType type="Trending Tv" movies={props.trendingTv} />
    </>
  );
};

export default HomePageMovies;
