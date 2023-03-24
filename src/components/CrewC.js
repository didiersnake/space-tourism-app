import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./crewC.css";
import { selectAllData } from "./destSlice";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";

function CrewC() {
  const data = useSelector(selectAllData);
  const [currentItem, setCurrentItem] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Change state onclick slick dot
    afterChange: current => setCurrentItem(current)
  };

  const image = data.crew.map((item, index) => {
    return (
      index === currentItem && (
        <div>
          <img
            src={require(`../assets/crew/${item.images["png"]}`)}
            alt="imageT"
          />
        </div>
      )
    );
  });

  const sliderItem = data.crew.map((item, index) => {
    return (
      <div key={item.name}>
        <h3>{item.role}</h3>
        <h1>{item.name}</h1>
        <p>{item.bio}</p>
      </div>
    );
  });

  return (
    <div className="crew-container">
      <Slider {...settings}>{sliderItem}</Slider>
      {image}
    </div>
  );
}

export default CrewC;
