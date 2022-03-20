import React from "react";
import "./styles.css";

import CartCard from "../CartCard";

function AuthCart() {
  const arr = [1, 2];
  return (
    <div className="cart-style">
      <h1>My Cart (2)</h1>

      {/* ------------------ */}
      <div className="container-cart flex-r">
        {/* <!-- items --> */}

        <div className="flex-c">
          {arr.map((item) => (
            <CartCard key={item._id} item={item} />
          ))}
        </div>

        {/* <!-- order --> */}
        <div className="order border-radius-S flex-c">
          <h2>Price Details</h2>
          <hr />
          <div className="price space flex-r">
            <p>Price (2 Items)</p>
            <p>₹3999</p>
          </div>
          <div className="discount space flex-r">
            <p>Discount</p>
            <p>- ₹2000</p>
          </div>
          <div className="delivery space flex-r">
            <p>Delivery Charges</p>
            <p>₹100</p>
          </div>
          <hr />
          <div className="total space flex-r">
            <h3>TOTAL</h3>
            <h3>₹2099</h3>
          </div>
          <hr />

          <h5>You will save ₹2000 on this order</h5>

          <div className="button">
            <button className="button-primary border-radius-L">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthCart;
