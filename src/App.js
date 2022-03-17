import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Wishlist from "./pages/Wishlist";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import Nav from "./Components/Navigation";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
