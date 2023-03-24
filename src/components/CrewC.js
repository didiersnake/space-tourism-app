import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./crewC.css";
import { selectAllData } from "./destSlice";
import { useSelector } from "react-redux";

function CrewC() {
  const data = useSelector(selectAllData);
  const [currentItem, setCurrentItem] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Change state onclick slick dot
    afterChange: current => setCurrentItem(current)
  };

  //get image 
  const image = data.crew.map((item, index) => {
    return (
      index === currentItem && (
        <div className="img-container" key={item.name}>
          <img
            src={require(`../assets/crew/${item.images["png"]}`)}
            alt="imageT"
          />
        </div>
      )
    );
  });

  //get data 
  const sliderItem = data.crew.map((item) => {
    return (
      <div className="slider-content" key={item.name}>
        <h3>{item.role}</h3>
        <h1>{item.name}</h1>
        <p>{item.bio}</p>
      </div>
    );
  });

  return (
    <div className="crew-container">
      <div className="num">
        <p>02 </p>Meet Your Crew
      </div>
      <div className="content">
        <div className="slider">
        <Slider {...settings}>{sliderItem}</Slider>
        </div>
        {image}
      </div>
    </div>
  );
}

export default CrewC;
