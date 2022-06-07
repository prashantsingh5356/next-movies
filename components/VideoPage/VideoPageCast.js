import classes from "./VideoPageCast.module.css";

const VideoPageCast = (props) => {
  const castProfile = `https://image.tmdb.org/t/p/original${props.profile}`;
  return (
    <div className={classes["cast-container"]}>
      <div
        className={classes.cast}
        style={{ backgroundImage: `url(${castProfile})` }}
      ></div>
      <div className={classes["cast-name"]}>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default VideoPageCast;
