import classes from "../styles/Home.module.css";
import HomePage from "../components/HomePage/HomePage";
import HomePageMovies from "../components/HomePage/HomePageMovies";

const Home = (props) => {
  const movieData = props.movies;
  const topRatedMovies = props.topRatedMovies;
  const trendingMovies = props.trendingMovies;
  const topRatedTv = props.topRatedTv;
  const trendingTv = props.trendingTv;
  // console.log(topRatedTv);
  // console.log(trendingMovies);
  // // console.log(props.movies);
  // console.log(topRatedMovies);
  return (
    <>
      <div className={classes["banner-container"]}>
        <HomePage movie={movieData} />
      </div>
      <div className={classes["movies-container"]}>
        <HomePageMovies
          topMovies={topRatedMovies}
          trendingMovies={trendingMovies}
          topTv={topRatedTv}
          trendingTv={trendingTv}
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  //   fetch Popular Movies
  const resp1 = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US&page=1"
  );

  const moviesData = await resp1.json();
  // console.log(moviesData.results);

  //    Fetching Top Rated Movies
  const resp2 = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US&page=1"
  );

  const topRatedMoviedata = await resp2.json();
  // console.log(topRatedMoviedata.results);

  // Fetching Trending Movie Data

  const resp3 = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=e911a8842b819f4c3c726955d42d4322"
  );

  const trendingMovieData = await resp3.json();
  // console.log(trendingMovieData.results);

  //  Fetching Top Rated Tv Data

  const resp4 = await fetch(
    "https://api.themoviedb.org/3/tv/top_rated?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US&page=1"
  );

  const topRatedTvData = await resp4.json();
  // console.log(topRatedTvData.results);

  // Fetching Trending Tv Data

  const resp5 = await fetch(
    "https://api.themoviedb.org/3/trending/tv/day?api_key=e911a8842b819f4c3c726955d42d4322"
  );

  const trendingTvData = await resp5.json();

  return {
    props: {
      movies: moviesData.results.map((movie) => {
        return {
          title: movie.title,
          poster: movie.poster_path,
          description: movie.overview,
          backdrop: movie.backdrop_path,
          id: movie.id,
          type: "movie",
        };
      }),
      topRatedMovies: topRatedMoviedata.results.map((movie) => {
        return {
          title: movie.title,
          poster: movie.poster_path,
          description: movie.overview,
          backdrop: movie.backdrop_path,
          id: movie.id,
          type: "movie",
        };
      }),
      trendingMovies: trendingMovieData.results.map((movie) => {
        return {
          title: movie.title,
          poster: movie.poster_path,
          description: movie.overview,
          backdrop: movie.backdrop_path,
          id: movie.id,
          type: "movie",
        };
      }),
      topRatedTv: topRatedTvData.results.map((tv) => {
        return {
          id: tv.id,
          title: tv.name,
          description: tv.overview,
          poster: tv.poster_path,
          backdrop: tv.backdrop_path,
          type: "tv",
        };
      }),
      trendingTv: trendingTvData.results.map((tv) => {
        return {
          id: tv.id,
          title: tv.name,
          description: tv.overview,
          poster: tv.poster_path,
          backdrop: tv.backdrop_path,
          type: "tv",
        };
      }),
    },
    revalidate: 10,
  };
}

export default Home;
