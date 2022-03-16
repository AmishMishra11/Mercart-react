import React from "react";
import "./styles.css";

import Category from "../../Components/Category";
import Carouse from "../../Components/Carouse";

export default function Home() {
  return (
    <div className="home">
      <Category />

      <Carouse />
      {/*
        <courser/>
        <popular products/> 
      */}
    </div>
  );
}
