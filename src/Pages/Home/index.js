import React from "react";
import "./styles.css";

import Category from "../../Components/Category";
import Carousel from "../../Components/Carousel";
import Popular from "../../Components/Popular";

export default function Home() {
  return (
    <div className="home">
      <Category />

      <Carousel />
      <Popular />
    </div>
  );
}
