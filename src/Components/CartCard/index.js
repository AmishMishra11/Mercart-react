import React from "react";
import "./styles.css";

import Men from "../../assets/category/men.jpeg";

const CartCard = ({ item }) => {
  const { title, price, rating, imageURL } = item;
  // will take item as props after auth
  return (
    <div className="items-cart">
      <div className="card horizontal">
        <div className="horizontal-container">
          <img className="item" src={Men} />
          <div className="text-container">
            <h2>Marvel Shirt</h2>
            <h3>
              ₹999 <span> ₹1999</span>
            </h3>
            <h3 className="offer">50% off</h3>

            <div className="quantity flex-r">
              <p>Quantity :</p>
              <button className="border-radius-Circle">-</button>
              <input
                className="border-radius-S"
                type="number"
                name="quantity"
                value="1"
              />
              <button className="border-radius-Circle">+</button>
            </div>

            <div className="button">
              <button className="button-secondary border-radius-L">
                Move to Wishlist
              </button>
            </div>

            <div className="button">
              <button className="button-secondary third border-radius-L">
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
