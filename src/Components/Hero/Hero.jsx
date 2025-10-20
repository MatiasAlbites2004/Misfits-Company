import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            NEED A <br /> CHANGE
          </h1>
          <button className={styles.button}>COMPRAR AHORA</button>
        </div>
      </div>
    </section>
  );
}
