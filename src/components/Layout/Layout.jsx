import { Link } from "@reach/router";
import classes from "./Layout.module.css";
function Layout({ children }) {
  const path = window.location.pathname;
  return (
    // navigation:
    <>
      <nav className={classes.nav}>
        <h1 className={classes.brand}>Tanvir Rifat</h1>
        <ul className={classes.menu}>
          <li>
            <Link to="/" className={path === "/" ? classes.active : classes.a}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/todo"
              className={path === "/todo" ? classes.active : classes.a}
            >
              Todo
            </Link>
          </li>
        </ul>
      </nav>

      <main className={classes.container}>{children}</main>
    </>
  );
}

export default Layout;
