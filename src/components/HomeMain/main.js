import React, { useState, useEffect } from "react";
import { getSliders } from "./mainApiCall";
import "./style.css";
import { PATH } from "../../backend";
// import { carousel } from "../../router/Home/HomeList";

const Main = () => {
  const [sliders, setSliders] = useState([]);

  const preload = () => {
    getSliders().then((data) => {
      // console.log(data);
      setSliders(data);
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <div className="mainCarousel">
      {sliders.map((item, index) => {
        return (
          <div className="main" key={index}>
            <div className={`banner${index + 1}`}>
              <img
                className="slider_image"
                src={`${PATH}/${item.name}`}
                alt=" imoge"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
