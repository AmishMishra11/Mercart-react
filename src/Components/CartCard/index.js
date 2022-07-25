import React from "react";
import "./styles.css";

import { useCart } from "../../Contexts/CartContext";
import { toast } from "react-toastify";

import { addWishlistApi } from "../../Services/Wishlist/addWishlistApi";

import { removeCartApi } from "../../Services/Cart/removeCartApi";

import { quantityCartApi } from "../../Services/Cart/quantityCartApi";

const CartCard = ({ item }) => {
  const { stateCart, dispatchCart } = useCart();

  const { myWishlist } = stateCart;

  const { title, price, imageURL, offer, _id, qty } = item;
  return (
    <div className="items-cart">
      <div className="card horizontal">
        <div className="horizontal-container">
          <img className="item" alt="Cart Item" src={imageURL} />
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
                    ? () => quantityCartApi(_id, dispatchCart, "decrement")
                    : () => removeCartApi(_id, dispatchCart)
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
                onClick={() => quantityCartApi(_id, dispatchCart, "increment")}
              >
                +
              </button>
            </div>

            <div className="button">
              <button
                className="button-secondary border-radius-L"
                onClick={
                  myWishlist.length === 0
                    ? () => addWishlistApi(item, dispatchCart)
                    : () =>
                        myWishlist.find((product) => product._id === _id)
                          ? toast.warning("Already in Wishlist", {
                              position: "bottom-center",
                              autoClose: 2000,
                            })
                          : addWishlistApi(item, dispatchCart)
                }
              >
                Move to Wishlist
              </button>
            </div>

            <div className="button">
              <button
                className="button-secondary third border-radius-L"
                onClick={() => removeCartApi(_id, dispatchCart)}
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
