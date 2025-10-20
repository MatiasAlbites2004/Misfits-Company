import styles from "./Navbar.module.css";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <a href="#">NUEVO</a>
        <a href="#">VER TODO</a>
      </div>

      <div className={styles.center}>
        <h1 className={styles.logo}>MISFITS COMPANY</h1>
      </div>

      <div className={styles.right}>
        <FaSearch className={styles.icon} />
        <FaShoppingBasket className={styles.icon} />
      </div>
    </nav>
  );
}
