import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductGrid.module.css";

const ProductGrid = ({ products = [] }) => {
  if (!Array.isArray(products)) {
    console.error("❌ Error: 'products' no es un array", products);
    return null;
  }

  return (
    <section className={styles.productsContainer}>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              {product.tag && <span className={styles.tag}>{product.tag}</span>}
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className={styles.productInfo}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>

            <Link to={`/producto/${product.id}`} className={styles.overlay}>
              Ver producto
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
