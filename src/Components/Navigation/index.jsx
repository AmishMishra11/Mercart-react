import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/E-Cart-Logo-transparent.png";
import "./styles.css";

function Nav() {
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
                  <Link className="border-radius-S" to="/Wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                  <p className="border-radius-Circle">1</p>
                </li>
              </div>
            </div>

            <div className="badges-icon">
              <div className="icon-bell">
                <li>
                  <Link className="border-radius-S" to="/Cart">
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                  <p className="border-radius-Circle">1</p>
                </li>
              </div>
            </div>
            <li>
              <Link className="login border-radius-S" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
}

export default Nav;
