import React, { useRef, useState, useEffect } from 'react';
import '../styles/landing.css';
import slider1 from '../../src/images/slider-1.webp';
import slider2 from '../../src/images/slider-2.webp';
import slider3 from '../../src/images/slider-3.webp';
import slider4 from '../../src/images/slider-4.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Banner from './banner/Banner';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Box, CircularProgress } from '@mui/material';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Landing = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const imagesRef = useRef([]);

    useEffect(() => {
        const images = imagesRef?.current;

        const checkImagesLoaded = () => {
            const loaded = images?.every(image => image?.complete);
            setImagesLoaded(loaded);
        };

        checkImagesLoaded(); // Check initially

        const handleLoad = () => {
            checkImagesLoaded();
        };

        images.forEach(image => {
            image?.addEventListener('load', handleLoad);
        });

        return () => {
            images.forEach(image => {
                image?.removeEventListener('load', handleLoad);
            });
        };
    }, []);

    return (
        <section className='landing'>
            {
            !imagesLoaded && 
                <div className='loading-indicator'>
                    <Box sx={{ display: 'flex'}}>
                        <CircularProgress  sx={{ color: 'rgb(21, 170, 190)' }}/>
                    </Box>
                </div>
                }
            <div className='mainslider'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    className='mySwiper'
                >
                    <SwiperSlide><img ref={el => imagesRef.current[0] = el} src={slider1} alt={slider1} /></SwiperSlide>
                    <SwiperSlide><img ref={el => imagesRef.current[1] = el} src={slider2} alt={slider2} /></SwiperSlide>
                    <SwiperSlide><img ref={el => imagesRef.current[2] = el} src={slider3} alt={slider3} /></SwiperSlide>
                    <SwiperSlide><img ref={el => imagesRef.current[3] = el} src={slider4} alt={slider4} /></SwiperSlide>
                </Swiper>
            </div>
            <Banner />
        </section>
    );
};

export default Landing;
