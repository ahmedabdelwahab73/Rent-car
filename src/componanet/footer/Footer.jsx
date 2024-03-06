import React from 'react'
import footericon from '../../images/footericon.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import googleplay from '../../images/google-play-badge.webp'
import appStore from '../../images/apple-app-store-logo-removebg-preview.webp'
const Footer = () => {
  return (
    <footer>
        <div className='footer_top'>
            <div className='footer_top__icon'>
                <img src={footericon} alt="footer icon" />
            </div>
            <div className='footer_top__links'>
                    <p>Become a partner</p>
                    <p>About Telgani</p>
                    <p>Terms & conditions</p>
                    <p>Privacy policy</p>
                    <p>Join us</p>
            </div>
            <div className='footer_top__app'>
                <h3>Discover our app!</h3>
                <div className='footer_top__images'>
                    <img src={googleplay} alt="App" />
                    <img src={appStore} alt="App" />
                </div>
            </div>
        </div>
        <div className='footer_buttom'>
            <div className='footer_buttom__text'>
                <p>Copyright © 2024. All rights reserved</p>
                <p>Api Version 5.54.0</p>
            </div>
            <div className='footer_buttom__icon'>
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faXTwitter}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer