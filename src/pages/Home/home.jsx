import Hero from "../../Components/Hero/Hero";
import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import productsData from "../../data/productsData";
import styles from "./Home.module.css";

export default function Home() {
  const featuredProducts = productsData.slice(0, 4);

  return (
    <>
      <Hero />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>COLECCIÓN DESTACADA</h2>
        <ProductGrid products={featuredProducts} />
      </section>
    </>
  );
}
