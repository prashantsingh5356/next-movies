import classes from "./VideoPageVideo.module.css";

const VideoPageVideo = (props) => {
  const video = props.video[0];
  return (
    <div className={classes["movie-videos"]}>
      <h2 className={classes["video-title"]}>
        {video.name ? video.name : "Trailer"}
      </h2>
      <div className={classes["movie-video__trailer"]}>
        <iframe
          src={`https://www.youtube.com/embed/${video.key}`}
          height="600px"
          width="100%"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default VideoPageVideo;
