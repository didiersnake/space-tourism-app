import React, { useState } from "react";
import "./destinationC.css";
import { useSelector } from "react-redux";
import { selectAllData } from "./destSlice";

function DesttinationC() {
  const [tab, setTab] = useState(() => 1);
  const data = useSelector(selectAllData);
  const destData = data.destinations;

  const toggleTabs = (index) => {
      return setTab(index + 1);
    };
     
    //planet image
    const planet = destData.map((item, index) => {
      return (
        index + 1 === tab && (
          <img
            key={item.name}
            src={require(`../assets/destination/${item.images["png"]}`)}
            alt="imagePlanet"
          />
        )
      );
    });

    //planet tabs
    const planetTabs = destData.map((item, index) => {
      return (
        <button
          key={item.name}
          className={index + 1 === tab ? "active-tab tab " : "tab"}
          onClick={() => toggleTabs(index)}
        >
          {item.name}
        </button>
      );
    });

    //planet content
    const planetDetails = destData.map((item, index) => {
      return (
        index + 1 === tab && (
          <div className="tab-content" key={item.name}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <div className="details">
              <div>
                <p className="lil">Avg distance</p>
                <p>{item.distance}</p>
              </div>
              <div>
                <p className="lil">Est. Travel time</p>
                <p>{item.travel}</p>
              </div>
            </div>
          </div>
        )
      );
    });


  return (
    <div className="destination-container">
      <div className="num">
        <p>01 </p>Pick your Destion
      </div>

      <div className="content">
        {planet}

        <div className="tab-container">
          <div className="tabs-block">
            {planetTabs}
          </div>

          <>
            {planetDetails}
          </>
        </div>
      </div>
    </div>
  );
}

export default DesttinationC;
