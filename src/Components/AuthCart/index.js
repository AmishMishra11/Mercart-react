import React from "react";
import "./styles.css";

import Empty from "../../assets/empty.png";

import { useCart } from "../../Contexts/CartContext";

import CartCard from "../CartCard";

function AuthCart() {
  const { stateCart } = useCart();

  const { myCart } = stateCart;

  const finalPrice = myCart.reduce(
    (acc, curr) => (acc += curr.price * curr.qty),
    0
  );

  const finalDiscount = myCart.reduce(
    (acc, curr) => (acc += (curr.price * curr.qty * curr.offer) / 100),
    0
  );

  const finalqty = myCart.reduce((acc, curr) => (acc += curr.qty), 0);

  const total = finalPrice - finalDiscount;

  return (
    <div className="cart-style ">
      <h1>My Cart ({myCart.length})</h1>

      {myCart.length === 0 ? (
        <div className="flex-c">
          <h1>Cart is Empty</h1>

          <img className="responsive-image" src={Empty} alt="Empty Cart" />
        </div>
      ) : (
        <div className="container-cart flex-r">
          {/* <!-- items --> */}

          <div className="flex-c">
            {myCart.map((item) => (
              <CartCard key={item._id} item={item} />
            ))}
          </div>

          {/* <!-- order --> */}
          <div className="order border-radius-S flex-c">
            <h2>Price Details</h2>
            <hr />
            <div className="price space flex-r">
              <p>Price ({finalqty} Items)</p>
              <p>₹{finalPrice}</p>
            </div>
            <div className="discount space flex-r">
              <p>Discount</p>
              <p>- ₹{finalDiscount}</p>
            </div>
            <div className="delivery space flex-r">
              <p>Delivery Charges</p>
              <p>₹100</p>
            </div>
            <hr />
            <div className="total space flex-r">
              <h3>TOTAL</h3>
              <h3>₹{total + 100}</h3>
            </div>
            <hr />

            <h5>You will save ₹{finalDiscount} on this order</h5>

            <div className="button">
              <button
                className="button-primary border-radius-L"
                onClick={() => alert("Thank you for your purchase")}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthCart;
