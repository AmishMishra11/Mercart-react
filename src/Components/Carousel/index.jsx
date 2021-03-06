import React from "react";
import "./styles.css";

import Opening from "../../assets/offers/opening.jpg";
import Summer from "../../assets/offers/summer.png";
import Toy from "../../assets/offers/toy.png";
import Winter from "../../assets/offers/winter.png";
import { useEffect } from "react";

function Carousel() {
  let counter = 1;

  useEffect(() => {
    const intervalId = setInterval(() => {
      document.getElementById("radio" + counter).checked = true;
      counter++;

      if (counter > 4) {
        counter = 1;
      }
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [counter]);

  return (
    <div>
      <div className="offers flex-r">
        <div className="sliders">
          <div className="slides">
            <input type="radio" name="radio-btn " id="radio1" />
            <input type="radio" name="radio-btn " id="radio2" />
            <input type="radio" name="radio-btn " id="radio3" />
            <input type="radio" name="radio-btn " id="radio4" />
            <div className="slide first">
              <img className="offer-img" alt="Opening" src={Opening} />
            </div>
            <div className="slide">
              <img className="offer-img" alt="Summer" src={Summer} />
            </div>
            <div className="slide">
              <img className="offer-img" alt="Winter" src={Winter} />
            </div>
            <div className="slide">
              <img className="offer-img" alt="Toy" src={Toy} />
            </div>
            <div className="navigation zi-2">
              <label htmlFor="radio1" className="manual-btn"></label>
              <label htmlFor="radio2" className="manual-btn"></label>
              <label htmlFor="radio3" className="manual-btn"></label>
              <label htmlFor="radio4" className="manual-btn"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
