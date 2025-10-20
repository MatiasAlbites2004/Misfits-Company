import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import styles from "./Navbar.module.css";


export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/productos?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <a href="/nuevo">Nuevo</a>
        <a href="/productos">Productos</a>
      </div>

      <div className={styles.center}>
        <h1 className={styles.logo}>MISFITS</h1>
      </div>

      <div className={styles.right}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
        <FaShoppingBasket className={styles.icon} />
      </div>
    </nav>
  );
}
