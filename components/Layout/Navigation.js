import classes from "./Navigation.module.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className={classes["navigation-container"]}>
      <div className={classes["navigation-items"]}>
        <div className={classes["navigation-title"]}>
          <p>
            <Link href="/">WOWmovies</Link>
          </p>
        </div>
        <div className={classes["navigation-links"]}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/movies">Movies</Link>
            </li>
            <li>
              <Link href="/tvseries">TV Series</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
