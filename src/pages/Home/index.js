import React from "react";
import "./styles.css";

import Category from "../../Components/Category";
import Carousel from "../../Components/Carousel";

export default function Home() {
  return (
    <div className="home">
      <Category />

      <Carousel />
      {/*
        <courser/>
        <popular products/> 
      */}
    </div>
  );
}
