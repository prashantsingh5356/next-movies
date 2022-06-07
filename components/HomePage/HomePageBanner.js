import classes from "./HomePageBanner.module.css";
import { useRouter } from "next/router";

const HomePageBanner = (props) => {
  const router = useRouter();
  const backDrop = `https://image.tmdb.org/t/p/original${props.backdrop}`;
  const posterImg = `https://image.tmdb.org/t/p/original${props.poster}`;
  const movieLink = `${props.type}/${props.id}`;

  const movieVideoHandler = () => {
    router.push("/" + movieLink);
  };

  return (
    <div
      className={classes.banner}
      style={{
        backgroundImage: `url(${backDrop})`,
      }}
    >
      <div className={classes["banner-items"]}>
        <div className={classes["banner-description"]}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <button onClick={movieVideoHandler} className={classes["watch-now"]}>
            Watch Now
          </button>
          <button className={classes["watch-trailer"]}>Watch Trailer</button>
        </div>
        <div className={classes["banner-image"]}>
          <img src={posterImg} alt="Some Movies" />
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
