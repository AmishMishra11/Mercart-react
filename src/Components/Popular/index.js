import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { toast } from "react-toastify";

import Card from "../Card";

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
              <Card key={item._id} item={item} />
            ))}
        </div>
      </main>
    </div>
  );
}

export default Popular;
