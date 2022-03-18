import React from "react";
import "./styles.css";

import Card from "../Card";

import { useEffect } from "react";

import { loadProducts } from "../../call-api/load-products";

import { useProduct } from "../../Hooks/use-product";

import Filter from "../Filter";

const ProductListing = () => {
  const { loading, product, dispatch } = useProduct();

  useEffect(() => {
    loadProducts(dispatch);
  }, []);

  return (
    <div className="container-main">
      {!loading && (
        <aside className="filters flex-c">
          <Filter products={product} />
        </aside>
      )}
      {/* <!-- products starts here --> */}
      <main>
        {loading ? <h1>Loading...</h1> : <h1>Products {product.length}</h1>}

        <div className="main-cards flex-r">
          {!loading &&
            product.map((item) => <Card key={item._id} item={item} />)}
        </div>
      </main>
      {/* <!-- products endss here --> */}
    </div>
  );
};

export default ProductListing;
