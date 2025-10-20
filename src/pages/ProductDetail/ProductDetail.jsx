import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import productsData from "../../data/productsData";
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState("");

  const colorNames = {
    "#000000": "Negro",
    "#ffffff": "Blanco",
    "#f5f5f5": "Blanco hueso",
    "#4b4b4b": "Gris oscuro",
    "#808080": "Gris",
    "#1a1a1a": "Negro carbón",
    "#bdbdbd": "Gris claro",
    "#1f1f1f": "Gris carbón",
    "#111111": "Negro intenso",
    "#333333": "Gris profundo",
    "#e53935": "Rojo",
    "#0d0d0d": "Negro brumoso",
    "#292929": "Gris humo",
  };

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

  const handleBuy = () => {
    if (!selectedColor || !selectedSize) {
      setError("Por favor selecciona un color y una talla antes de continuar.");
      return;
    }
    setError("");

    const colorText = colorNames[selectedColor] || "Sin especificar";

    const message = `Hola , estoy interesado en el producto *${product.name}* (${product.price}) 
 Color: ${colorText}
 Talla: ${selectedSize}
¿Podrían brindarme más información?`;

    const whatsappNumber = "51987039773";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className={styles.detailPage}>
      <div className={styles.detail}>
        <div className={styles.imageWrapper}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
            loading="lazy" // 👈 carga diferida
            decoding="async" // 👈 decodificación no bloqueante
          />
        </div>

        <div className={styles.info}>
          <h2 className={styles.productName}>{product.name}</h2>
          <p className={styles.price}>{product.price}</p>
          <p className={styles.desc}>{product.description}</p>

          {product.colors && (
            <div className={styles.colors}>
              {product.colors.map((c) => (
                <span
                  key={c}
                  className={`${styles.colorCircle} ${
                    selectedColor === c ? styles.active : ""
                  }`}
                  style={{ backgroundColor: c }}
                  onClick={() => setSelectedColor(c)}
                ></span>
              ))}
            </div>
          )}

          {product.sizes && (
            <div className={styles.sizes}>
              {product.sizes.map((s) => (
                <span
                  key={s}
                  className={`${styles.size} ${
                    selectedSize === s ? styles.active : ""
                  }`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          {error && <p className={styles.error}>{error}</p>}

          <button className={styles.buy} onClick={handleBuy}>
            COMPRAR POR WHATSAPP
          </button>

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
