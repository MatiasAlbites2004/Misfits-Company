import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaSearch, FaShoppingBasket, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setVisible(currentScroll < prevScroll);
      setPrevScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/productos?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setSearchOpen(false);
    }
  };

  return (
    <>
      <nav className={`${styles.navbar} ${!visible ? styles.hidden : ""}`}>
        <div className={styles.left}>
          <div className={styles.left}>
            <Link to="/nuevo">Nuevo</Link>
            <Link to="/productos">Productos</Link>
          </div>
        </div>

        <div className={styles.center}>
          <Link to="/" className={styles.logoLink}>
            <h1 className={styles.logo}>MISFITS COMPANY</h1>
          </Link>
        </div>

        <div className={styles.right}>
          <FaSearch
            className={styles.icon}
            onClick={() => setSearchOpen(true)}
          />
          <FaShoppingBasket className={styles.icon} />
        </div>
      </nav>

      {searchOpen && (
        <div className={styles.searchOverlay}>
          <form onSubmit={handleSearch} className={styles.searchBox}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="BUSCAR..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <FaTimes
              className={styles.closeIcon}
              onClick={() => setSearchOpen(false)}
            />
          </form>
        </div>
      )}
    </>
  );
}
