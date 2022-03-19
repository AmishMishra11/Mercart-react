import React from "react";
import "./styles.css";

import Men from "../../assets/category/men.jpeg";

const CartCard = ({ item }) => {
  const { title, price, rating, imageURL } = item;
  // will take item as props after auth
  return (
    <div class="items-cart">
      <div class="card horizontal">
        <div class="horizontal-container">
          <img class="item" src={Men} />
          <div class="text-container">
            <h2>Marvel Shirt</h2>
            <h3>
              ₹999 <span> ₹1999</span>
            </h3>
            <h3 class="offer">50% off</h3>

            <div class="quantity flex-r">
              <p>Quantity :</p>
              <button class="border-radius-Circle">-</button>
              <input
                class="border-radius-S"
                type="number"
                name="quantity"
                value="1"
              />
              <button class="border-radius-Circle">+</button>
            </div>

            <div class="button">
              <button class="button-secondary border-radius-L">
                Move to Wishlist
              </button>
            </div>

            <div class="button">
              <button class="button-secondary third border-radius-L">
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
