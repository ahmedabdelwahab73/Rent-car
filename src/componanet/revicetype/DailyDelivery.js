import React from 'react'
import pikup from '../../images/banner-3.webp'
import deliviry from '../../images/deliviry.webp'

const DailyDelivery = ({setdeliverymap, setbtn,}) => {
    const hundler = ()=>{
        setbtn(true);
        setdeliverymap(true);
    }
  return (
    <>
        <div className='dailyrent_menu__boxs'>
            <div className='dailyrent_menu__box'
            onClick={hundler}
            >
            <img src={deliviry} alt='Delivery'/>
            <div className='menu_box__text'>
                <p>Delivery</p>
                <span>Receive the car at your door step</span>
            </div>
            </div>
            <div className='dailyrent_menu__box'
            onClick={setdeliverymap}
            >
                <img src={pikup} alt='Delivery'/>
                <div className='menu_box__text'>
                    <p>Pickup</p>
                    <span>picked up the car from the nearest branches to you</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default DailyDelivery