import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/home";
import Products from "./pages/Products/products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Footer from "./Components/Footer/Footer";
import Nuevo from "./pages/Nuevo/Nuevo";

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/nuevo" element={<Nuevo />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
