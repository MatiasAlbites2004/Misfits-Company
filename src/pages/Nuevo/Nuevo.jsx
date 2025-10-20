import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./Nuevo.module.css";
import productsData from "../../data/productsData";

export default function Nuevo() {
  const nuevos = productsData.filter(
    (p) => p.tag?.toLowerCase() === "nuevo"
  );

  return (
    <section className={styles.nuevoPage}>
      <h2 className={styles.title}>NUEVAS COLECCIONES</h2>
      <div className={styles.grid}>
        {nuevos.length > 0 ? (
          nuevos.map((p) => <ProductCard key={p.id} {...p} />)
        ) : (
          <p className={styles.empty}>No hay productos nuevos disponibles.</p>
        )}
      </div>
    </section>
  );
}
