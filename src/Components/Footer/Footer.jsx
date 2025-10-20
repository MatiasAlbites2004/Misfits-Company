import styles from "./Footer.module.css";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p>POLÍTICA DE REEMBOLSO</p>
        <p>POLÍTICA DE PRIVACIDAD</p>
        <p>TÉRMINOS Y CONDICIONES</p>
        <p>CONTACTO</p>
      </div>

      <div className={styles.right}>
        <h2 className={styles.logo}>MISFITS COMPANY</h2>
        <div className={styles.socials}>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="TikTok">
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
}
