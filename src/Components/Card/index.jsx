import axios from "axios";
import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

import { useCart } from "../../Contexts/CartContext";

import { addWishlist } from "../../Call-Apis/add-wishlist";
import { removeWishlist } from "../../Call-Apis/remove-wishlist";

const Card = ({ item }) => {
  const navigate = useNavigate();

  const { stateCart, dispatchCart } = useCart();

  const { myWishlist } = stateCart;

  const { stateAuth } = useAuth();

  const { title, price, rating, imageURL, _id } = item;
  return (
    <div className="card">
      <img className="item" src={imageURL} />

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
        <div>₹{price}</div>
        <div>
          {rating}
          <i className="fas fa-star star"></i>
        </div>
      </h4>
      <div className="card-buy flex-r">
        <a className="card-btn btn-primary border-radius-S" href="">
          Buy Now
        </a>
        <a className="card-btn btn-secondary border-radius-S" href="">
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Card;
