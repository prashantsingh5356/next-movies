import classes from "./VideoPage.module.css";
import VideoPageCast from "./VideoPageCast";
import VideoPageVideo from "./VideoPageVideo";
import MovieType from "../HomePage/MovieType";

const VideoPage = (props) => {
  const movieDetails = props.movie;
  const movieDetailBackdrop = `https://image.tmdb.org/t/p/original${movieDetails?.backdrop}`;
  const movieDetailPoster = `https://image.tmdb.org/t/p/original${movieDetails?.poster}`;

  const castList = props.cast?.map((cast) => {
    return (
      <VideoPageCast
        key={cast.id}
        id={cast.id}
        name={cast.name}
        profile={cast.profile}
      />
    );
  });
  return (
    <>
      <div
        className={classes["movie-video__banner"]}
        style={{
          backgroundImage: `url(${movieDetailBackdrop})`,
        }}
      >
        <div className={classes["movie-video__description"]}>
          <div
            className={classes["movie-video-description__poster"]}
            style={{
              backgroundImage: `url(${movieDetailPoster})`,
            }}
          ></div>
          <div className={classes["movie-video-description__info"]}>
            <h1>{movieDetails?.title}</h1>
            <div className={classes["movie-video-description__details"]}>
              <p>{movieDetails?.description}</p>
            </div>
            <div className={classes["movie-video-description__cast"]}>
              <h2>Cast</h2>
              <div className={classes["cast-list"]}>{castList}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["movie-videos__container"]}>
        <VideoPageVideo video={props.video} />
      </div>
      <div className={classes["similar-movies"]}>
        <MovieType type="Similar Movies" movies={props.similar} />
      </div>
    </>
  );
};

export default VideoPage;
