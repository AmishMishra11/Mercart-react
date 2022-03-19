import React from "react";
import "./styles.css";

import { useFilter } from "../../Contexts/FilterContext";

function Filter() {
  const { stateFilter, dispatchFilter } = useFilter();
  const { sorting, men, women, kid, toy, rating, range } = stateFilter;

  console.log(stateFilter);
  return (
    <>
      <div className="filter flex-r">
        <h3>Filters</h3>

        <div
          className="clear"
          onClick={() => dispatchFilter({ type: "CLEAR" })}
        >
          Clear
        </div>
      </div>

      <div className="price">
        <h3>Price</h3>
        <div className="container-range">
          <div className="range flex-r">
            <p>1k</p>
            <p>3k</p>
            <p>7k</p>
            <p>10k</p>
          </div>

          <div className="slider">
            <input
              type="range"
              className="slider"
              min={0}
              max={3}
              value={range}
              id="range-slider"
              onChange={(e) => {
                dispatchFilter({
                  type: "RANGE",
                  payload: Number(e.target.value),
                });
              }}
            />
          </div>
        </div>
      </div>

      <div className="filters-category">
        <h3>Category</h3>

        <div className="checkboxes flex-c">
          <label className="checkbox">
            <input
              className="check-input"
              type="checkbox"
              checked={men}
              onClick={() => dispatchFilter({ type: "MEN", payload: !men })}
            />
            <span className="check-msg">Men</span>
          </label>

          <label className="checkbox">
            <input
              className="check-input"
              type="checkbox"
              checked={women}
              onClick={() => dispatchFilter({ type: "WOMEN", payload: !women })}
            />
            <span className="check-msg">Women </span>
          </label>

          <label className="checkbox">
            <input
              className="check-input"
              type="checkbox"
              checked={kid}
              onClick={() => dispatchFilter({ type: "KID", payload: !kid })}
            />
            <span className="check-msg">Kids </span>
          </label>
          <label className="checkbox">
            <input
              className="check-input"
              type="checkbox"
              checked={toy}
              onClick={() => dispatchFilter({ type: "TOY", payload: !toy })}
            />
            <span className="check-msg">Toys </span>
          </label>
        </div>
      </div>

      <div className="product-rating">
        <h3>Rating</h3>

        <div className="radio-btns flex-c">
          <label className="radio-btn">
            <input
              className="radio-input"
              type="radio"
              name="rate"
              checked={rating === 5}
              onClick={() => dispatchFilter({ type: "RATING", payload: 5 })}
            />
            <span className="radio-msg"> 5 Stars </span>
          </label>
          <label className="radio-btn">
            <input
              className="radio-input"
              type="radio"
              name="rate"
              checked={rating === 4}
              onClick={() => dispatchFilter({ type: "RATING", payload: 4 })}
            />
            <span className="radio-msg"> 4 Stars </span>
          </label>
          <label className="radio-btn">
            <input
              className="radio-input"
              type="radio"
              name="rate"
              checked={rating === 3}
              onClick={() => dispatchFilter({ type: "RATING", payload: 3 })}
            />
            <span className="radio-msg">3 Stars </span>
          </label>
          <label className="radio-btn">
            <input
              className="radio-input"
              type="radio"
              name="rate"
              checked={rating === 2}
              onClick={() => dispatchFilter({ type: "RATING", payload: 2 })}
            />
            <span className="radio-msg">2 Stars </span>
          </label>
          <label className="radio-btn">
            <input
              className="radio-input"
              type="radio"
              name="rate"
              checked={rating === 1}
              onClick={() => dispatchFilter({ type: "RATING", payload: 1 })}
            />
            <span className="radio-msg">1 Stars </span>
          </label>
        </div>
      </div>

      <div className="sort">
        <h3>Sort by</h3>

        <div className="radio-btns flex-c">
          <label className="radio-btn">
            <input
              className="radio-input"
              type="radio"
              name="sort"
              checked={sorting === "high"}
              onClick={() =>
                dispatchFilter({ type: "SORTING", payload: "high" })
              }
            />
            <span className="radio-msg">High to Low</span>
          </label>
          <label className="radio-btn">
            <input
              className="radio-input"
              type="radio"
              name="sort"
              checked={sorting === "low"}
              onClick={() =>
                dispatchFilter({ type: "SORTING", payload: "low" })
              }
            />
            <span className="radio-msg">Low to High </span>
          </label>
        </div>
      </div>
    </>
  );
}

export default Filter;
