import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

import Men from "../../assets/category/men.jpeg";
import Women from "../../assets/category/women.jpg";
import Kids from "../../assets/category/kids.jpg";
import Toy from "../../assets/category/toy.jpg";

function Category() {
  return (
    <div>
      <header className="category">
        <Link className="content flex-c" to="/products">
          <div className="color-box">
            <img alt="Men" src={Men} />
          </div>
          <div className="text">Men</div>
        </Link>

        <Link className="content flex-c" to="/products">
          <div className="color-box">
            <img alt="Women" src={Women} />
          </div>
          <div className="text">Women</div>{" "}
        </Link>

        <Link className="content flex-c" to="/products">
          <div className="color-box">
            <img alt="Kids" src={Kids} />
          </div>
          <div className="text">Kids</div>{" "}
        </Link>

        <Link className="content flex-c" to="/products">
          <div className="color-box">
            <img alt="Toy" src={Toy} />
          </div>
          <div className="text">Toys</div>
        </Link>
      </header>
    </div>
  );
}

export default Category;
