import React from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../Contexts/AuthContext";

import { useCart } from "../../Contexts/CartContext";

import { addWishlist } from "../../Call-Apis/add-wishlist";

import { removeWishlist } from "../../Call-Apis/remove-wishlist";

import { addCart } from "../../Call-Apis/add-cart";

import { quantityCart } from "../../Call-Apis/quantity-cart";

const Card = ({ item }) => {
  const navigate = useNavigate();

  const { stateCart, dispatchCart } = useCart();

  const { myWishlist, myCart } = stateCart;

  const { stateAuth } = useAuth();

  const { title, price, rating, imageURL, _id, offer } = item;
  return (
    <div className="card">
      <img className="item" src={imageURL} alt="Product" />

      {stateAuth.isAuth ? (
        <div
          className="badge"
          onClick={
            myWishlist.length === 0
              ? () => addWishlist(item, dispatchCart)
              : () =>
                  myWishlist.find((product) => product._id === _id)
                    ? removeWishlist(_id, dispatchCart)
                    : addWishlist(item, dispatchCart)
          }
        >
          <i
            className={`fas fa-lg fa-heart ${
              myWishlist.find((product) => product._id === _id) && `wish-active`
            } `}
          ></i>
        </div>
      ) : (
        <div className="badge" onClick={() => navigate("/login")}>
          <i className="fas fa-lg fa-heart"></i>
        </div>
      )}

      <h2>{title}</h2>
      <h4 className="flex-r rating">
        <div>
          ₹{price} <span className="offer"> {offer}%</span>
        </div>
        <div>
          {rating}
          <i className="fas fa-star star"></i>
        </div>
      </h4>
      <div className="card-buy flex-r">
        {/* -- */}
        {stateAuth.isAuth ? (
          <Link
            to="/cart"
            className="card-btn btn-primary border-radius-S"
            onClick={
              myCart.length === 0
                ? () => addCart(item, dispatchCart)
                : () =>
                    myCart.find((product) => product._id === _id)
                      ? quantityCart(_id, dispatchCart, "increment")
                      : addCart(item, dispatchCart)
            }
          >
            Buy Now
          </Link>
        ) : (
          <div
            className="card-btn btn-primary border-radius-S"
            onClick={() => navigate("/login")}
          >
            Buy Now
          </div>
        )}
        {/* -- */}

        {stateAuth.isAuth ? (
          <div
            className="card-btn btn-secondary border-radius-S"
            onClick={
              myCart.length === 0
                ? () => addCart(item, dispatchCart)
                : () =>
                    myCart.find((product) => product._id === _id)
                      ? quantityCart(_id, dispatchCart, "increment")
                      : addCart(item, dispatchCart)
            }
          >
            Add to cart
          </div>
        ) : (
          <div
            className="card-btn btn-secondary border-radius-S"
            onClick={() => navigate("/login")}
          >
            Add to cart
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
