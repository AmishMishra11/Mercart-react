import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import Wishlist from "./Pages/Wishlist";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Nav from "./Components/Navigation";
import Footer from "./Components/Footer";
import RequiresAuth from "./Components/RequiresAuth";

function App() {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="products" element={<Products />} />

        <Route element={<RequiresAuth />}>
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>

      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
