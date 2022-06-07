import classes from "./TvSeriesPage.module.css";
import MovieItem from "../HomePage/MovieItem";

const TvSeriesPage = (props) => {
  const tvData = props.tv;
  const tvSeriesList = tvData.map((tv) => {
    return (
      <MovieItem
        key={tv.id}
        id={tv.id}
        title={tv.title}
        description={tv.description}
        poster={tv.poster}
        backdrop={tv.backdrop}
        type="tv"
      />
    );
  });
  return (
    <>
      <div className={classes["search-tv__container"]}>
        <div className={classes["search-tv__banner"]}></div>
        <div className={classes["search-tv__input"]}>
          <input type="text" />
          <button type="button">Search</button>
        </div>
        <div className={classes["search-tv__list"]}>{tvSeriesList}</div>
      </div>
    </>
  );
};

export default TvSeriesPage;
