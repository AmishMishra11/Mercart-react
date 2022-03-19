import React from "react";
import "./styles.css";

import Card from "../Card";

import { useEffect } from "react";

import { loadProducts } from "../../Call-Apis/load-products";

import { useProduct } from "../../Hooks/use-product";

import Filter from "../Filter";

import { useFilter } from "../../Contexts/FilterContext";

import { categoryFunction } from "../../utilities/categoryFunction.js";
import { rangeFunction } from "../../utilities/rangeFunction";
import { ratingFunction } from "../../utilities/ratingFunction";
import { sortingFunction } from "../../utilities/sortingFunction";

const ProductListing = () => {
  const { loading, product, dispatch } = useProduct();
  const { stateFilter } = useFilter();

  const { sorting, men, women, kid, toy, rating, range } = stateFilter;

  console.log(stateFilter);

  useEffect(() => {
    loadProducts(dispatch);
  }, []);

  const newData1 = rangeFunction(product, range);
  const newData2 = categoryFunction(newData1, men, women, kid, toy);
  const newData3 = ratingFunction(newData2, rating);
  const newData4 = sortingFunction(newData3, sorting);

  return (
    <div className="container-main">
      {!loading && (
        <aside className="filters flex-c">
          <Filter products={product} />
        </aside>
      )}
      <main>
        {loading ? <h1>Loading...</h1> : <h1>Products {newData4.length}</h1>}

        <div className="main-cards flex-r">
          {!loading &&
            [...newData4].map((item) => <Card key={item._id} item={item} />)}
        </div>
      </main>
    </div>
  );
};

export default ProductListing;
