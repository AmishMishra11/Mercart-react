import React from "react";
import "./styles.css";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../Contexts/AuthContext";

import { useCart } from "../../Contexts/CartContext";

import { addWishlist } from "../../Call-Apis/add-wishlist";

import { removeCart } from "../../Call-Apis/remove-cart";

import { quantityCart } from "../../Call-Apis/quantity-cart";

const CartCard = ({ item }) => {
  const { stateCart, dispatchCart } = useCart();

  const { myWishlist } = stateCart;

  const { title, price, imageURL, offer, _id, qty } = item;
  return (
    <div className="items-cart">
      <div className="card horizontal">
        <div className="horizontal-container">
          <img className="item" src={imageURL} />
          <div className="text-container">
            <h2>{title}</h2>
            <h3>
              ₹{(price * offer) / 100} <span> ₹{price}</span>
            </h3>
            <h3 className="offer">{offer}% off</h3>

            <div className="quantity flex-r">
              <p>Quantity :</p>

              <button
                className="border-radius-Circle"
                onClick={
                  qty > 1
                    ? () => quantityCart(_id, dispatchCart, "decrement")
                    : () => removeCart(_id, dispatchCart)
                }
              >
                -
              </button>

              <input
                className="border-radius-S"
                type="number"
                name="quantity"
                value={qty}
              />
              <button
                className="border-radius-Circle"
                onClick={() => quantityCart(_id, dispatchCart, "increment")}
              >
                +
              </button>
            </div>

            <div className="button">
              <button
                className="button-secondary border-radius-L"
                onClick={
                  myWishlist.length === 0
                    ? () => addWishlist(item, dispatchCart)
                    : () =>
                        myWishlist.find((product) => product._id === _id)
                          ? alert("Already in Wishlist")
                          : addWishlist(item, dispatchCart)
                }
              >
                Move to Wishlist
              </button>
            </div>

            <div className="button">
              <button
                className="button-secondary third border-radius-L"
                onClick={() => removeCart(_id, dispatchCart)}
              >
                Remove from cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
