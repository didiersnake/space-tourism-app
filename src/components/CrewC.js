import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function CrewC() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };



  return (

      <div>
          
      <Slider {...settings}>
          <div>
              <h1 className='text'>reui;fndfioeniwefomnoweiwfn</h1>
          </div>
          <div>
              <h1 className='text'>djklv kjnejwnflwen</h1>
          </div>
          <div>
              <h1 className='text'>hjdbfvfioepfowepepfej[e[fjeo</h1>
          </div>
          <div>
              <h1 className='text'>euwifpeuipfhowfoiewpfeg</h1>
          </div>
          </Slider>
          
        <img src={require("../assets/crew/image-mark-shuttleworth.png")} alt="imageT" />
      </div>
  )
}

export default CrewC