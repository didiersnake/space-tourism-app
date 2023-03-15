import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./home.css";

function Home() {
  return (
    <section className="home">
          <Navbar />
          
      <div className="container">
        <div className="header">
          <p className="semi-heading">So you wnat to travel to </p>
          <h1 className="heading">SPACE</h1>
          <p className="text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="explore">
          <Link className="link" to={"destination"}> explore </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
