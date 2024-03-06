import React, { useRef, useState } from 'react'
import '../../styles/dailyrent.css'
import banner3 from '../../images/banner-3.webp';
import DailyRentPopup from './DailyRentPopup';
const DailyRent = ( ) => {
    const [dailyrent, setdailyrent]= useState(false);
    // console.log(dailyrent);
    const Daily = ( )=>{
        document.body.classList.add('po-f');
        setdailyrent(true);
    }
return (
    <>
    {dailyrent && <DailyRentPopup setdailyrent={setdailyrent}/>}
        <div className="landing_box" onClick={Daily}>
            <p>Free Delivery</p>
            <img src={banner3} alt="banner" />
            <div  className="landing_box__text" >
                <p>Daily Rent</p>
                <span>Daily/Weekly Rental</span>
            </div>
        </div>
    </>
)
}

export default DailyRent