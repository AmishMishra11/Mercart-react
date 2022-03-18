import React from "react";
import "./styles.css";
function Filter(product) {
  return (
    <>
      <div className="filter flex-r">
        <h3>Filters</h3>

        <a href="#">Clear</a>
      </div>

      <div className="price">
        <h3>Price</h3>
        <div className="container-range">
          <div className="range flex-r">
            <p>50</p>
            <p>100</p>
            <p>150</p>
          </div>

          <div className="slider">
            <input
              type="range"
              className="slider"
              min="50"
              max="150"
              defaultValue="100"
              id="range-slider"
            />
          </div>
        </div>
      </div>

      <div className="filters-category">
        <h3>Category</h3>

        <div className="checkboxes flex-c">
          <label className="checkbox">
            <input className="check-input" type="checkbox" />
            <span className="check-msg">Men</span>
          </label>

          <label className="checkbox">
            <input className="check-input" type="checkbox" />
            <span className="check-msg">Women </span>
          </label>

          <label className="checkbox">
            <input className="check-input" type="checkbox" />
            <span className="check-msg">Kids </span>
          </label>
          <label className="checkbox">
            <input className="check-input" type="checkbox" />
            <span className="check-msg">Toys </span>
          </label>
        </div>
      </div>

      <div className="product-rating">
        <h3>Rating</h3>

        <div className="radio-btns flex-c">
          <label className="radio-btn">
            <input className="radio-input" type="radio" name="rate" />
            <span className="radio-msg"> 5 Stars </span>
          </label>
          <label className="radio-btn">
            <input className="radio-input" type="radio" name="rate" />
            <span className="radio-msg"> 4 Stars </span>
          </label>
          <label className="radio-btn">
            <input className="radio-input" type="radio" name="rate" />
            <span className="radio-msg">3 Stars </span>
          </label>
          <label className="radio-btn">
            <input className="radio-input" type="radio" name="rate" />
            <span className="radio-msg">2 Stars </span>
          </label>
          <label className="radio-btn">
            <input className="radio-input" type="radio" name="rate" />
            <span className="radio-msg">1 Stars </span>
          </label>
        </div>
      </div>

      <div className="sort">
        <h3>Sort by</h3>

        <div className="radio-btns flex-c">
          <label className="radio-btn">
            <input className="radio-input" type="radio" name="sort" />
            <span className="radio-msg">High to Low</span>
          </label>
          <label className="radio-btn">
            <input className="radio-input" type="radio" name="sort" />
            <span className="radio-msg">Low to High </span>
          </label>
        </div>
      </div>
    </>
  );
}

export default Filter;
