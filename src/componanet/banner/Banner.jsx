import React, { useEffect, useRef, useState } from 'react'
// Css File
import '../../styles/banner.css';
import banner2 from '../../images/banner-2.webp';
import DailyRent from '../revicetype/DailyRent';
import HeadService from './HeadService';
import HeadChoose from './HeadChoose';
import Airport from '../airport/Airport';
const Banner = () => {
  const [HeadBanner, setHeadBanner]= useState(window.innerWidth <= 768);
useEffect(()=>{
  const hundilerHeadBanner = ()=>{
      setHeadBanner(window.innerWidth <= 768)
  }
  window.addEventListener('resize',hundilerHeadBanner )
},[])

  return (
    <>
    <div className="landing_banner">
      {HeadBanner ? <HeadChoose/>: <HeadService/>}
      <div className="landing_banner__content">
          <Airport/>
        <div className="landing_box">
          <p>Delivery and Pickup</p>
          <img src={banner2} alt="banner" />
          <div className="landing_box__text">
            <p>Subscription</p>
            <span>Monthly/Yearly Rental</span>
          </div>
        </div>
        <DailyRent/>
      </div>
  </div>
    </>

  )
}

export default Banner