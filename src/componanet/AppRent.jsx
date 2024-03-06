import React from 'react'
import apprent from '../images/apprent.webp'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AppRent = () => {
  return (
    <section className='apprent'>
        <div className="apprent_content">
            <h2>Telgani for rent a car</h2>
            <p className='apprent_content__li'>rent a car from Telgani and we deliver it in your doorstep, best price guaranteed.</p>
            <p>Telgani App Available in iOS and Android</p>
            <p>Enter your phone number to send you the download link</p>
            <label htmlFor="">
                <FontAwesomeIcon icon={faArrowRight} />
                <input type="text" placeholder='+20'/>
            </label>
        </div>
        <div className='apprent_images'>
            <img src={apprent} alt="" />
        </div>
    </section>
  )
}

export default AppRent