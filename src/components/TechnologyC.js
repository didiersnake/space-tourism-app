import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllData } from "./destSlice";
import "./technologyC.css";

function TechnologyC() {
  const [tab, setTab] = useState(1);
  const data = useSelector(selectAllData);

  const toggle = (index) => setTab(index + 1);

  const tabButtons = data.technology.map((item, index) => {
    return (
      <button
        className={index + 1 === tab ? "btn-tab active" : "btn-tab"}
        onClick={() => toggle(index)}
        key={index}
      >
        {index + 1}
      </button>
    );
  });

  const image = data.technology.map((item, index) => {
    return (
      index + 1 === tab && (
        <div className="imge" key={index}>
          <img
            alt="img"
            src={require(`../assets/technology/${item.images["portrait"]}`)}
          />
        </div>
      )
    );
  });

  const tabContent = data.technology.map((item, index) => {
    return (
      index + 1 === tab && (
        <div className="tech" key={index}>
          <h3>The terminology</h3>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      )
    );
  });

  return (
    <div className="tech-container">
      <div className="num">
        <p>01 </p>Pick your Destion
      </div>
      <div className="content tech-content">
        <div className="content1">
          <div className="tabs-container">{tabButtons}</div>
          {tabContent}
        </div>
        {image}
      </div>
    </div>
  );
}

export default TechnologyC;
