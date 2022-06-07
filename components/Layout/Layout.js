import classes from "./Layout.module.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <div className={classes["content-container"]}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
