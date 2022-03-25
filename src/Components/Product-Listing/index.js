import React from "react";
import "./styles.css";

import Card from "../Card";

import { ProductReducer } from "../../Reducers/ProductReducer";

import { useEffect, useReducer, useState } from "react";

import { loadProducts } from "../../Call-Apis/load-products";

import Filter from "../Filter";

import { useFilter } from "../../Contexts/FilterContext";

import { categoryFunction } from "../../utilities/categoryFunction.js";
import { rangeFunction } from "../../utilities/rangeFunction";
import { ratingFunction } from "../../utilities/ratingFunction";
import { searchFunction } from "../../utilities/searchFunction";
import { sortingFunction } from "../../utilities/sortingFunction";

const ProductListing = () => {
  const [showFilters, setShowFilters] = useState(false);

  const [stateProduct, dispatchProduct] = useReducer(ProductReducer, {
    loading: false,
    product: [],
  });

  const { loading, product } = stateProduct;
  const { stateFilter } = useFilter();

  const { search, sorting, men, women, kid, toy, rating, range } = stateFilter;

  useEffect(() => {
    loadProducts(dispatchProduct);
  }, []);

  const newData0 = searchFunction(product, search);
  const newData1 = rangeFunction(newData0, range);
  const newData2 = categoryFunction(newData1, men, women, kid, toy);
  const newData3 = ratingFunction(newData2, rating);
  const newData4 = sortingFunction(newData3, sorting);

  return (
    <div className="container-main">
      {!loading && (
        <aside className={"filters flex-c"}>
          <Filter products={product} />
        </aside>
      )}

      {showFilters && (
        <aside className="filters  active-filters flex-c">
          <Filter products={product} />
          <div className="flex-r">
            <button
              className="apply-filters "
              onClick={() => setShowFilters((val) => !val)}
            >
              Apply
            </button>
          </div>
        </aside>
      )}

      <main>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="filters-top">
            <h1>Products {newData4.length}</h1>{" "}
            <button
              className="show-filters"
              onClick={() => setShowFilters((val) => !val)}
            >
              Filters
            </button>
          </div>
        )}

        <div className="main-cards flex-r">
          {!loading &&
            [...newData4].map((item) => <Card key={item._id} item={item} />)}
        </div>
      </main>
    </div>
  );
};

export default ProductListing;
