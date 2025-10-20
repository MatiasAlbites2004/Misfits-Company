import styles from "./ProductGrid.module.css";

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      label: "NUEVO",
      name: "POLO NEED A CHANGE NEGRO",
      price: "S/ 79.90",
      image: "/polo_negro.jpg",
    },
    {
      id: 2,
      label: "NUEVO",
      name: "POLO NEED A CHANGE BLANCO",
      price: "S/ 79.90",
      image: "/polo_blanco.jpg",
    },
    {
      id: 3,
      name: "POLO BREAK RULES",
      price: "S/ 79.90",
      image: "/polo_break_rules.jpg",
    },
    {
      id: 4,
      name: "POLO LIMITED EDITION",
      price: "S/ 89.90",
      image: "/10.jpg",
    },
  ];

  return (
    <section className={styles.grid}>
      {products.map((p) => (
        <div key={p.id} className={styles.card}>
          {p.label && <span className={styles.tag}>{p.label}</span>}
          <div className={styles.imageContainer}>
            <img src={p.image} alt={p.name} />
          </div>
          <h3 className={styles.name}>{p.name}</h3>
          <p className={styles.price}>{p.price}</p>
        </div>
      ))}
    </section>
  );
}
