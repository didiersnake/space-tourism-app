import React from 'react'
import DesttinationC from '../components/DesttinationC';
import Navbar from '../components/Navbar'
import "./destination.css"

function Destination() {
    return (
      <div className="destination">
        <div>
          <Navbar />
          <DesttinationC />
        </div>
      </div>
    );
}

export default Destination