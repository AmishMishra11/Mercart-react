import React from "react";
import "./styles.css";
const Card = ({ item }) => {
  const { title, price, rating, imageURL } = item;
  return (
    <div className="card">
      <img className="item" src={imageURL} />
      <a className="badge" href="">
        <i className="fas fa-lg fa-heart"></i>
      </a>
      <h2>{title}</h2>
      <h4 className="flex-r rating">
        <div>₹{price}</div>
        <div>
          {rating}
          <i className="fas fa-star star"></i>
        </div>
      </h4>
      <div className="card-buy flex-r">
        <a className="card-btn btn-primary border-radius-S" href="">
          Buy Now
        </a>
        <a className="card-btn btn-secondary border-radius-S" href="">
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Card;
