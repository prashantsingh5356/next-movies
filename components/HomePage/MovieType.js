import MovieItem from "./MovieItem";
import classes from "./MovieType.module.css";
import { useRouter } from "next/router";

const MovieType = (props) => {
  const router = useRouter();
  //   console.log(props.movies);
  //   console.log(props.type);
  const movieList = props.movies.map((mov) => {
    return (
      <MovieItem
        key={mov.id}
        id={mov.id}
        title={mov.title}
        description={mov.description}
        poster={mov.poster}
        type={mov.type}
      />
    );
  });

  const sectionChangeHandler = () => {
    if (props.type === "Top Rated Movies" || props.type === "Trending Movies") {
      router.push("/movies");
      return;
    }
    router.push("/tvseries");
  };

  return (
    <>
      <div className={classes["type-movies"]}>
        <div className={classes["type-movies__header"]}>
          <div className={classes["type-movies__title"]}>
            <h2>{props.type}</h2>
          </div>
          <div className={classes["type-movies__btn"]}>
            <button onClick={sectionChangeHandler} type="button">
              View More
            </button>
          </div>
        </div>
        <div className={classes["type-movies__list"]}>{movieList}</div>
      </div>
    </>
  );
};

export default MovieType;
