import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Wishlist from "./pages/Wishlist";

import { Route, Routes, Link } from "react-router-dom";

import "./App.css";
import Nav from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      <Nav />
      <Link to="/"> Home </Link>| <Link to="/Cart"> Cart </Link>|
      <Link to="/Products"> Products </Link>|
      <Link to="/Wishlist"> Wishlist </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Wishlist" element={<Wishlist />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
