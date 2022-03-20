import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

import Card from "../Card";
function AuthWishlist() {
  const [wish, setWish] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/products");
        if (res.status === 200) {
          const products = res.data.products;

          setWish([...products]);
        }
      } catch (e) {
        console.log("error occured: ", e);
      }
    })();
  }, []);

  return (
    <div className="wish">
      <h1>My Wishlist (3)</h1>

      <main>
        <div className="main-cards flex-r">
          {wish
            .filter((item) => item.isPopular)
            // just temperory until I do auth
            .map((item) => (
              <Card key={item._id} item={item} />
            ))}
        </div>
      </main>
    </div>
  );
}

export default AuthWishlist;
