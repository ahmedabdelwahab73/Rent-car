import React, { useEffect, useState } from 'react'
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../images/sliderLocation-1.webp'
import image2 from '../images/sliderLocation-2.webp'
import image3 from '../images/sliderLocation-3.webp'
import image4 from '../images/sliderLocation-4.webp'
import image5 from '../images/sliderLocation-5.webp'
import image6 from '../images/sliderLocation-6.webp'
import image7 from '../images/sliderLocation-7.webp'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core'; // Import Swiper core and required modules
import { Button, useMediaQuery } from '@mui/material';
import { map } from 'leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchslidelocation } from '../state/SlidLocation';
import { useNavigate } from 'react-router-dom';
import UseDataSliderLocation from '../Hooks/Use-Data-SliderLocation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([Navigation,Pagination,Autoplay]);
const SliderLocation = () => {
    const [openLocationFromHome, setopenLocationFromHome] = useState(false);
    const SizeScreen_1024 = useMediaQuery(`(max-width: 1024px)`)
    const SizeScreen_768 = useMediaQuery(`(max-width: 768px)`)
    // console.log(SizeScreen_1024);
    const navigete = useNavigate()
    const {records_L, loading, error} = UseDataSliderLocation();
    const hundelrclickslider = (item)=>{
        setopenLocationFromHome(true)
        navigete(`/city/${item?.title_location.replace(' ', '-')}`)
        return (
            item?.title_location
        )
    }
    return (
    <>
    { !SizeScreen_768 && 
        <div className='sliderlocation'>
            {            
            error && 
            <div className='errorhome'>
                <FontAwesomeIcon icon={faExclamation} />
                <p>Ups... Something went wrong...</p>
            </div>
            }
            <div className='sliderlocation_text'>
                <h2>Popular destination</h2>
                <p>Wherever you will be, your car is waiting for you</p>
            </div>
            <div className='sliderlocation_slider'>
                <Swiper
                slidesPerView={`${SizeScreen_1024 ? 3: 4}`}
                slidesPerGroup={`${SizeScreen_1024 ? 3: 4}`}
                spaceBetween={15}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                >
                    {
                        records_L?.map((item, index)=>{
                            return(
                                <SwiperSlide key={item?.id}
                                onClick={()=> hundelrclickslider(item)}>
                                    <div className='sliderlocation_cart'>
                                        <img src={item?.image_location} alt="" />
                                        <div className='cart_content'>
                                            <span>{item?.title_location}</span>
                                            <Button variant="contained"
                                            
                                            >
                                            Find the car here</Button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    }
    </>
    );
}

export default SliderLocation
