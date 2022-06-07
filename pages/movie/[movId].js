import VideoPage from "../../components/VideoPage/VideoPage";
import { useRouter } from "next/router";

const MovieDetail = (props) => {
  const movie = props.movie;
  const defaultCast = props.cast.cast;
  const video = props.video;
  const similarMovies = props.similarMovie;
  const cast = defaultCast
    .map((cast, i) => {
      return {
        id: cast.id,
        name: cast.name,
        profile: cast.profile_path,
      };
    })
    .filter((cast, i) => i < 10);

  const router = useRouter();
  // console.log(router.query.movId);

  return (
    <VideoPage
      movie={movie}
      cast={cast}
      video={video}
      similar={similarMovies}
    />
  );
};

export async function getStaticPaths() {
  const resp1 = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US&page=1"
  );

  const moviesData = await resp1.json();
  const popularPaths = moviesData.results.map((mov) => {
    return {
      params: {
        movId: String(mov.id),
      },
    };
  });

  const resp2 = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US&page=1"
  );

  const topRatedMoviedata = await resp2.json();
  const topRatedPaths = topRatedMoviedata.results.map((mov) => {
    return {
      params: {
        movId: String(mov.id),
      },
    };
  });

  const resp3 = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=e911a8842b819f4c3c726955d42d4322"
  );

  const trendingMovieData = await resp3.json();
  const trendingPaths = trendingMovieData.results.map((mov) => {
    return {
      params: {
        movId: String(mov.id),
      },
    };
  });

  const finalPaths = [...popularPaths, ...topRatedPaths, ...trendingPaths];
  return {
    fallback: true,
    paths: finalPaths,
  };
}

export async function getStaticProps(context) {
  const movieId = Number(context.params.movId);
  // console.log(movieId);

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US`
  );
  const movieData = await response.json();
  // console.log(movieData);

  const castRes = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US`
  );

  const castData = await castRes.json();
  // console.log(castData.cast);

  const movieVidResp = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US`
  );

  const videoData = await movieVidResp.json();

  const similarMovResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US&page=1`
  );

  const similarData = await similarMovResponse.json();
  // console.log(similarData.results);

  return {
    props: {
      movie: {
        id: movieId,
        title: movieData.title,
        description: movieData.overview,
        backdrop: movieData.backdrop_path,
        poster: movieData.poster_path,
      },
      cast: castData,
      video: videoData.results.filter((vid) => {
        return vid.type === "Trailer";
      }),
      similarMovie: similarData.results.map((mov) => {
        return {
          id: mov.id,
          title: mov.title,
          description: mov.overview,
          poster: mov.poster_path,
          backdrop: mov.backdrop_path,
          type: "movie",
        };
      }),
    },
  };
}

export default MovieDetail;
