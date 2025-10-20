import { useParams, Link } from "react-router-dom";
import productsData from "../../data/productsData"; 
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./ProductDetail.module.css";
import { useEffect } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Producto no encontrado</h2>
        <Link to="/productos" className={styles.backBtn}>
          Volver a productos
        </Link>
      </div>
    );
  }

  const related = productsData
    .filter((p) => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <section className={styles.detailPage}>
      <div className={styles.detail}>
        <div className={styles.imageWrapper}>
          <img src={product.image} alt={product.name} className={styles.image} />
        </div>

        <div className={styles.info}>
          <h2>{product.name}</h2>
          <p className={styles.price}>{product.price}</p>
          <p className={styles.desc}>{product.description}</p>

          {product.colors && (
            <div className={styles.colors}>
              {product.colors.map((c) => (
                <span
                  key={c}
                  className={styles.colorCircle}
                  style={{ backgroundColor: c }}
                ></span>
              ))}
            </div>
          )}

          {product.sizes && (
            <div className={styles.sizes}>
              {product.sizes.map((s) => (
                <span key={s} className={styles.size}>
                  {s}
                </span>
              ))}
            </div>
          )}

          <button className={styles.buy}>COMPRAR</button>

          {/* Acordeones */}
          {product.details && (
            <details className={styles.accordion}>
              <summary>Detalles</summary>
              <p>{product.details}</p>
            </details>
          )}

          {product.sizeGuide && (
            <details className={styles.accordion}>
              <summary>Tabla de Tallas</summary>
              <p>{product.sizeGuide}</p>
            </details>
          )}

          <Link to="/productos" className={styles.back}>
            ← Volver a la tienda
          </Link>
        </div>
      </div>

      <div className={styles.relatedSection}>
        <h3>PODRÍA GUSTARTE</h3>
        <div className={styles.relatedGrid}>
          {related.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
