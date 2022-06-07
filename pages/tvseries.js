import TvSeriesPage from "../components/TvSeriesPage/TvSeriesPage";

const tvSeries = (props) => {
    const tvData = props.tv;
  return <TvSeriesPage tv={tvData} />;
};

export async function getStaticProps() {
  //fetching list of Movies

  const response = await fetch(
    "https://api.themoviedb.org/3/trending/tv/day?api_key=e911a8842b819f4c3c726955d42d4322"
  );

  const tvData = await response.json();
  //   console.log(moviesData.results);

  return {
    props: {
      tv: tvData.results.map((tv) => {
        return {
          title: tv.name,
          poster: tv.poster_path,
          description: tv.overview,
          backdrop: tv.backdrop_path,
          id: tv.id,
        };
      }),
    },
  };
}

export default tvSeries;
