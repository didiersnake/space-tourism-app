import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/favicon-32x32.png";
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
          <div className="link-list">
              
        <div className="link">
          <Link className='l' to={"/"}>
            00 Home
          </Link>
        </div>
        
        <div className="link">
          <Link className='l'  to={"/destination"}>
            01 Destination
          </Link>
        </div>
        <div className="link">
          <Link className='l' to={"/crew"}>
            02 Crew
          </Link>
        </div>
        <div className="link">
          <Link className='l' to={"/technology"}>
            03 Technology
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar