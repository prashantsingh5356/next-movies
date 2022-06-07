import HomePageBanner from "./HomePageBanner";

const HomePageBannerList = (props) => {
  const bannerMovieList = props.movie.map((mov, i) => {
    if (i < 5) {
      return (
        <HomePageBanner
          key={mov.id}
          title={mov.title}
          backdrop={mov.backdrop}
          poster={mov.poster}
          description={mov.description}
          id={mov.id}
          type={mov.type}
        />
      );
    }
  });

  return <>{bannerMovieList}</>;
};

export default HomePageBannerList;
