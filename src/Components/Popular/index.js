import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/products");
        if (res.status === 200) {
          const products = res.data.products;

          setPopular([...products]);
        }
      } catch (e) {
        console.log("error occured: ", e);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Popular Products</h1>

      <main>
        <div className="main-cards flex-r">
          {popular
            .filter((item) => item.isPopular)
            .map((item) => (
              <div className="card">
                <img className="item" src={item.imageURL} />
                <a className="badge" href="">
                  <i className="fas fa-heart"></i>
                </a>
                <h2>{item.title}</h2>
                <h4 className="flex-r rating">
                  <div>₹{item.price}</div>
                  <div>
                    {item.rating}
                    <i class="fas fa-star star"></i>
                  </div>
                </h4>
                <div className="card-buy flex-r">
                  <a className="card-btn border-radius-S" href="">
                    Buy Now
                  </a>
                  <a className="card-btn btn-secondary border-radius-S" href="">
                    Add to cart
                  </a>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

export default Popular;
