import VideoPage from "../../components/VideoPage/VideoPage";

const tvDetail = (props) => {
  const tv = props.tv;
  const video = props.video;
  const defaultCast = props.cast?.cast;
  const similarTv = props.similarTv;
  const cast = defaultCast
    ?.map((cast) => {
      return {
        id: cast.id,
        name: cast.name,
        profile: cast.profile_path,
      };
    })
    .filter((cast, i) => i < 10);

  return <VideoPage movie={tv} cast={cast} video={video} similar={similarTv} />;
};

export async function getStaticPaths() {
  const resp4 = await fetch(
    "https://api.themoviedb.org/3/tv/top_rated?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US&page=1"
  );

  const topRatedTvData = await resp4.json();
  const topRatedPaths = topRatedTvData.results.map((tv) => {
    return {
      params: {
        tvId: String(tv.id),
      },
    };
  });

  const resp5 = await fetch(
    "https://api.themoviedb.org/3/trending/tv/day?api_key=e911a8842b819f4c3c726955d42d4322"
  );

  const trendingTvData = await resp5.json();
  const trendingPaths = trendingTvData.results.map((tv) => {
    return {
      params: {
        tvId: String(tv.id),
      },
    };
  });

  const finalPaths = [...topRatedPaths, ...trendingPaths];

  return {
    fallback: true,
    paths: finalPaths,
  };
}

export async function getStaticProps(context) {
  const tvId = Number(context.params.tvId);

  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US`
  );
  const tvData = await response.json();
  // console.log(tvData);

  const castRes = await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US`
  );

  const castData = await castRes.json();
  // console.log(castData);

  const tvVidResp = await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US`
  );

  const videoData = await tvVidResp.json();
  // console.log(videoData);

  const similarTvResponse = await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}/similar?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US&page=1`
  );

  const similarData = await similarTvResponse.json();

  return {
    props: {
      tv: {
        id: tvData.id,
        title: tvData.name,
        description: tvData.overview,
        poster: tvData.poster_path,
        backdrop: tvData.backdrop_path,
      },
      cast: castData,
      video: videoData.results.filter((vid) => {
        return vid.type === "Trailer";
      }),
      similarTv: similarData.results.map((mov) => {
        return {
          id: mov.id,
          title: mov.name,
          description: mov.overview,
          poster: mov.poster_path,
          backdrop: mov.backdrop_path,
          type: "tv",
        };
      }),
    },
  };
}

export default tvDetail;
