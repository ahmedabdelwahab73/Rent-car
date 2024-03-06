import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import DailyDelivery from './DailyDelivery'
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import Map from '../Map'
const DailyRentPopup = ({setdailyrent,}) => {
    const [btn, setbtn ]= useState(false);
    const [deliveryMap, setdeliverymap ]= useState(false);
    
    const HundulerDailyrend =()=>{
        document.body.classList.remove('po-f');
        setdailyrent(false)
    }
    const HundulerDeliveryMap = ()=>{
        if(deliveryMap){
            setdeliverymap(false);
            setbtn(false)
        }
        else{
            setdailyrent(false)
            document.body.classList.remove('po-f');
        }
    }
  return (
    <>
        <div  className='banner_dailyrent'>
            <div className='banner_dailyrent__overlay' onClick={HundulerDailyrend}></div>
            <div className='dailyrent_menu'>
                <FontAwesomeIcon icon={faXmark} onClick={HundulerDailyrend}/>
                <div className='dailyrent_menu__icon'>
                    <FontAwesomeIcon icon={faArrowLeft} 
                    onClick={HundulerDeliveryMap}
                    />
                    <h2>Select receive type</h2>
                </div>
                {deliveryMap ? <Map btn={btn}/> : <DailyDelivery setdeliverymap={setdeliverymap} setbtn ={setbtn}/>}
            </div>
        </div> 
    </>
  )
}

export default DailyRentPopup