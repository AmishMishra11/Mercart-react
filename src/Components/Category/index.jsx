import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

import Men from "../../assets/category/men.jpeg";
import Women from "../../assets/category/women.jpg";
import Kids from "../../assets/category/kids.jpg";
import Toy from "../../assets/category/toy.jpg";

import { useFilter } from "../../Contexts/FilterContext";

function Category() {
  const { stateFilter, dispatchFilter } = useFilter();
  const { men, women, kid, toy } = stateFilter;

  return (
    <div>
      <header className="category">
        <Link className="content flex-c" to="/products">
          <div onClick={() => dispatchFilter({ type: "MEN", payload: !men })}>
            <div className="color-box">
              <img alt="Men" src={Men} />
            </div>
            <div className="text">Men</div>
          </div>
        </Link>

        <Link className="content flex-c" to="/products">
          <div
            onClick={() => dispatchFilter({ type: "WOMEN", payload: !women })}
          >
            <div className="color-box">
              <img alt="Women" src={Women} />
            </div>
            <div className="text">Women</div>
          </div>
        </Link>

        <Link className="content flex-c" to="/products">
          <div onClick={() => dispatchFilter({ type: "KID", payload: !kid })}>
            <div className="color-box">
              <img alt="Kids" src={Kids} />
            </div>
            <div className="text">Kids</div>
          </div>
        </Link>

        <Link className="content flex-c" to="/products">
          <div onClick={() => dispatchFilter({ type: "TOY", payload: !toy })}>
            <div className="color-box">
              <img alt="Toy" src={Toy} />
            </div>
            <div className="text">Toys</div>
          </div>
        </Link>
      </header>
    </div>
  );
}

export default Category;
