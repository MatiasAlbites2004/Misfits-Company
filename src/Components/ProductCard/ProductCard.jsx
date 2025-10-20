import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard({ id, image, name, price, tag }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {tag && <span className={styles.tag}>{tag}</span>}
        <img
          src={`${import.meta.env.BASE_URL}${image.replace(/^\//, "")}`}
          alt={name}
          className={styles.image}
        />

        <div className={styles.overlay}>
          <Link to={`/producto/${id}`} className={styles.btn}>
            VER PRODUCTO
          </Link>
        </div>
      </div>

      <div className={styles.info}>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
}
