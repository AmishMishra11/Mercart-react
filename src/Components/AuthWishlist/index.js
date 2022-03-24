import React from "react";
import "./styles.css";
import Empty from "../../assets/empty.png";

import { useCart } from "../../Contexts/CartContext";

import Card from "../Card";

function AuthWishlist() {
  const { stateCart } = useCart();

  const { myWishlist } = stateCart;

  return (
    <div className="wish">
      <h1>My Wishlist ({myWishlist.length})</h1>

      {myWishlist.length === 0 ? (
        <div className="flex-c">
          <h1>Wishlist is Empty</h1>

          <img className="responsive-image" src={Empty} alt="Empty Wishlist" />
        </div>
      ) : (
        <main>
          <div className="main-cards flex-r">
            {myWishlist.map((item) => (
              <Card key={item._id} item={item} />
            ))}
          </div>
        </main>
      )}
    </div>
  );
}

export default AuthWishlist;
