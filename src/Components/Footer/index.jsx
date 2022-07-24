import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/E-Cart-Logo-transparent.png";
import "./styles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo flex-c">
        <img className="logo" src={Logo} alt="Logo" />
      </div>

      <div className="footer-main">
        <div className="footer-nav">
          <h3>Navigation</h3>

          <ul className="footer-nav-list">
            <li>
              <Link className="border-radius-S" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="border-radius-S" to="/">
                Profile
              </Link>
            </li>
            <li>
              <Link className="border-radius-S" to="/Products">
                Products
              </Link>
            </li>
            <li>
              <Link className="border-radius-S" to="/Cart">
                Cart
              </Link>
            </li>
            <li>
              <Link className="border-radius-S" to="/Wishlist">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Open Source</h3>

          <div className="discription">
            We're open-sourced on GitHub.
            <br />
            Contributions and feedback are welcome!
          </div>
          <div className="menu contribute">
            <a
              className="border-radius-S"
              href="https://github.com/AmishMishra11"
            >
              Contribute on GitHub
            </a>
          </div>

          <p>© Mercart, 2022 All rights reserved.</p>

          <h4>Socials</h4>
          <div className="footer-social">
            <ul className="menu flex-r">
              <li>
                <a
                  className="border-radius-S"
                  href="https://www.linkedin.com/in/amish-mishra-98b43221a/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  className="border-radius-S"
                  href="https://twitter.com/The_Scarcastic1"
                >
                  <i className="fab fa-twitter-square"></i>
                </a>
              </li>

              <li>
                <a
                  className="border-radius-S"
                  href="mailto: amishmishra11@gmail.com"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </li>

              <li>
                <a
                  className="border-radius-S"
                  href="https://www.instagram.com/amish_mishra11/?hl=en"
                >
                  <i className="fab fa-instagram-square"></i>
                </a>
              </li>
            </ul>
          </div>
          <h5>Designed with 💕 By Amish Mishra</h5>
        </div>

        <div className="footer-help">
          <h3>Orders</h3>

          <ul className="footer-help-list">
            <li>
              <Link className="border-radius-S" to="/">
                My Orders
              </Link>
            </li>
            <li>
              <Link className="border-radius-S" to="/">
                Track Order
              </Link>
            </li>
            <li>
              <Link className="border-radius-S" to="/">
                Return
              </Link>
            </li>
          </ul>

          <div className="footer-credit">
            <h4>© Credits</h4>
            <p>Marvel</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
