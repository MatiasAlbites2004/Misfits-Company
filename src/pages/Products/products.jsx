import { useLocation } from "react-router-dom";
import productsData from "../../data/productsData";
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./Products.module.css";

export default function Products() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchTerm = params.get("search") || "";

  const filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={styles.productsPage}>
      <h2 className={styles.title}>
        {searchTerm ? `Resultados para "${searchTerm}"` : "Todos los productos"}
      </h2>

      {filteredProducts.length > 0 ? (
        <div className={styles.grid}>
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      ) : (
        <div className={styles.noResultsContainer}>
          <p className={styles.noResults}>
            No se ha encontrado resultados para <br />
            <span className={styles.searchTerm}>"{searchTerm}"</span>
          </p>
          <a href="/productos" className={styles.backButton}>
            Volver a la tienda
          </a>
        </div>
      )}
    </section>
  );
}
