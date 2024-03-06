import React from 'react'


const ShowCars = ({showPopup, RundisplayImges,}) => {

  return (
    <>
        {
        showPopup &&
            <div className='carts' data-aos="zoom-in" data-aos-duration="10">
                {RundisplayImges}
            </div> 
        }
        {
        !showPopup &&
        <div className='carts' data-aos="zoom-in" data-aos-duration="10">
       { RundisplayImges}
        </div>
        }
    </>
  )
}

export default ShowCars