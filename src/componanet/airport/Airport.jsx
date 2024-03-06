import React, { useState } from 'react'
import banner1 from '../../images/banner-1.webp';
import AirportPopup from './AirportPopup';
import '../../styles/airport.css'
const Airport = () => {
  const [airPortPopup, setairPortPopup] = useState(false);
  const HandulerAirport = ()=>{
    setairPortPopup(true);
    document.body.classList.add('po-f');
  }
  return (
    <>
    {airPortPopup && <AirportPopup setairPortPopup={setairPortPopup}/>}
      <div onClick={HandulerAirport} className="landing_box landing_box--formit">
        <img src={banner1} alt="banner" />
        <div className="landing_box__text">
          <p>Airport</p>
          <span>Receive the car from airport</span>
        </div>
      </div>
    </>
  )
}

export default Airport