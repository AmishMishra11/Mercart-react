import React from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../Contexts/AuthContext";

import { useCart } from "../../Contexts/CartContext";

import { addWishlistApi } from "../../Services/Wishlist/addWishlistApi";

import { removeWishlistApi } from "../../Services/Wishlist/removeWishlistApi";

import { addCartApi } from "../../Services/Cart/addCartApi";

import { quantityCartApi } from "../../Services/Cart/quantityCartApi";

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
              ? () => addWishlistApi(item, dispatchCart)
              : () =>
                  myWishlist.find((product) => product._id === _id)
                    ? removeWishlistApi(_id, dispatchCart)
                    : addWishlistApi(item, dispatchCart)
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
                ? () => addCartApi(item, dispatchCart)
                : () =>
                    myCart.find((product) => product._id === _id)
                      ? quantityCartApi(_id, dispatchCart, "increment")
                      : addCartApi(item, dispatchCart)
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
          myCart.find((product) => product._id === _id) ? (
            <div
              className="card-btn btn-secondary border-radius-S"
              onClick={() => navigate("/cart")}
            >
              Go To Cart
            </div>
          ) : (
            <div
              className="card-btn btn-secondary border-radius-S"
              onClick={() => addCartApi(item, dispatchCart)}
            >
              Add To Cart
            </div>
          )
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
