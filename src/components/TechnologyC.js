import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllData } from "./destSlice";

function TechnologyC() {
  const [tab, setTab] = useState(1);
  const data = useSelector(selectAllData);

  const toggle = (index) => setTab(index + 1);

  const tabButtons = data.technology.map((item, index) => {
    return (
      <button onClick={()=>toggle(index)} key={index}>
        <h1>{index + 1}</h1>
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
        <div key={index}>
          <p>The terminology</p>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      )
    );
  });

  return (
    <div className="tech-container">
      {tabButtons}
      {image}
      {tabContent}
    </div>
  );
}

export default TechnologyC;
