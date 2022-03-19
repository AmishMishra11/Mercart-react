import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import Wishlist from "./Pages/Wishlist";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import Nav from "./Components/Navigation";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
