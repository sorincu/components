import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <h2>Components</h2>
      </Link>
    </div>
  );
};

export default Navbar;
