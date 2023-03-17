import React, { useState } from "react";
import Planet from "../assets/destination/image-moon.png";
import "./destinationC.css"
function DesttinationC() {
  const [tab, setTab] = useState(1);

  const toggleTabs = (index) => {
    return setTab(index);
  };
  return (
    <div>
      <section className="container">
        <p className="num">
          <p>01 </p>Pick your Destion
        </p>

        <div className="content">
          <div className="iamge-container">
            <img src={Planet} alt="" />
          </div>

          <div tab-container>
            <div className="tabs-block">
              <button
                className={tab === 1 ? "tab active-tab" : "tab"}
                onClick={() => toggleTabs(1)}
              >
                Moon
              </button>
              <button
                className={tab === 2 ? "tab active-tab" : "tab"}
                onClick={() => toggleTabs(2)}
              >
                Mars
              </button>
              <button
                className={tab === 3 ? "tab active-tab" : "tab"}
                onClick={() => toggleTabs(3)}
              >
                Europa
              </button>
              <button
                className={tab === 4 ? "tab active-tab" : "tab"}
                onClick={() => toggleTabs(4)}
              >
                Titan
              </button>

              <div className="tab-content">
                <div
                  className={tab === 1 ? "content active-content" : "content"}
                >
                  <h1>Moon</h1>
                  <p>
                    See our planet as you’ve never seen it before. A perfect
                    relaxing trip away to help regain perspective and come back
                    refreshed. While you’re there, take in some history by
                    visiting the Luna 2 and Apollo 11 landing sites.
                  </p>
                  <div className="details">
                    <div>
                      <p>Avg distance</p>
                      <p>384,400 KM</p>
                    </div>
                    <div>
                      <p>Est. Travel time</p>
                      <p>3 Days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DesttinationC;
