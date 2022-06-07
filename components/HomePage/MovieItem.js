import classes from "./MovieItem.module.css";
import { useRouter } from "next/router";

const MovieItem = (props) => {
  const router = useRouter();
  const posterImg = `https://image.tmdb.org/t/p/original${props.poster}`;

  //   console.log(posterImg);

  const movieVideoHandler = () => {
    console.log(props.type);
    if (props.type === "movie") {
      router.push("/" + props.type + "/" + props.id);
      return;
    }

    if (props.type === "tv") {
      router.push("/" + props.type + "/" + props.id);
      return;
    }
  };
  return (
    <div onClick={movieVideoHandler} className={classes["movie-item"]}>
      <div
        className={classes["movie-item__image"]}
        style={{ backgroundImage: `url(${posterImg})` }}
      ></div>
      <div className={classes["movie-item__title"]}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default MovieItem;
