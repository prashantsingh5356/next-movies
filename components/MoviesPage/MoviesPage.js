import classes from "./MoviesPage.module.css";
import MovieItem from "../HomePage/MovieItem";

const MoviesPage = (props) => {
  const movieList = props.movies.map((mov) => {
    return (
      <MovieItem
        key={mov.id}
        title={mov.title}
        description={mov.description}
        id={mov.id}
        poster={mov.poster}
        backdrop={mov.backdrop}
        type="movie"
      />
    );
  });
  return (
    <>
      <div className={classes["search-movie__container"]}>
        <div className={classes["search-movie__banner"]}></div>
        <div className={classes["search-movie__input"]}>
          <input type="text" />
          <button type="button">Search</button>
        </div>
        <div className={classes["search-movie__list"]}>{movieList}</div>
      </div>
    </>
  );
};

export default MoviesPage;
