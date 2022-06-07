import classes from "./HomePage.module.css";
import HomePageBannerList from "./HomePageBannerList";

const HomePage = (props) => {
  return <HomePageBannerList movie={props.movie} />;
};

export default HomePage;
