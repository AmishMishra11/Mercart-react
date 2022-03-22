import React from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { useCart } from "../../Contexts/CartContext";

import { useNavigate } from "react-router-dom";
import Logo from "../../assets/E-Cart-Logo-transparent.png";
import "./styles.css";

function Nav() {
  const navigate = useNavigate();

  const { stateCart } = useCart();

  const { myWishlist } = stateCart;

  const { stateAuth, dispatchAuth } = useAuth();

  const handleLogout = () => {
    dispatchAuth({ type: "USER_LOGOUT" });
    localStorage.removeItem("token");
  };

  return (
    <div className="container-nav zi-5">
      <nav className="nav">
        <header>
          <div className="title">
            <img className="logo" src={Logo} alt="Logo " />
            <Link className="brand-link" to="/">
              <h2 className="name">Mercart</h2>
            </Link>
          </div>

          <div className="search">
            <input type="text" placeholder="What are you looking for" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>

          <ul className="menu">
            <div className="badges-icon">
              <div className="icon-bell">
                <li>
                  {/* ---- */}
                  {stateAuth.isAuth ? (
                    <div className="wishlist-container">
                      <div
                        className="wishlist border-radius-S"
                        onClick={() => navigate("/wishlist")}
                      >
                        <i className="far fa-heart"></i>
                      </div>
                      <p className="border-radius-Circle">
                        {myWishlist.length}
                      </p>
                    </div>
                  ) : (
                    <div
                      className="wishlist border-radius-S"
                      onClick={() => navigate("/login")}
                    >
                      <i className="far fa-heart"></i>
                    </div>
                  )}
                  {/* ----- */}
                  {/* <Link className="border-radius-S" to="/Wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                  <p className="border-radius-Circle">{myWishlist.length}</p> */}
                  {/* ----- */}
                </li>
              </div>
            </div>

            <div className="badges-icon">
              <div className="icon-bell">
                <li>
                  <Link className="border-radius-S" to="/Cart">
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                  <p className="border-radius-Circle">0</p>
                </li>
              </div>
            </div>
            <li>
              {stateAuth.isAuth ? (
                <div
                  className="login border-radius-S"
                  onClick={() => handleLogout()}
                >
                  Logout
                </div>
              ) : (
                <div
                  className="login border-radius-S"
                  onClick={() => navigate("/login")}
                >
                  Login
                </div>
              )}
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
}

export default Nav;
