import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SortRecord, fetchCars } from '../../state/PopularcarsSlice';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import { Button } from '@mui/material';

const HundelAirportFilterPage = () => {
    // Hooks Carts
const {records, loading, erorr} = useSelector((state) => state.popularCars);
const dispatch = useDispatch();
    /// Filter From Aside
    const defaultValue = "SelectAll";
    const [activeSelected, setactiveSelected] = useState(false);
    const [selectedvalueLocation, setselectedvalueLocation] = useState(defaultValue);
    let getvalue = false;

    const params = {
        slidesPerView: 2, // Set the number of images per slide
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    }


    const currencies = [
        {
            value: 'Price',
            label: 'Price',
        },
        {
            value: 'EUR',
            label: 'ALL',
        },
    ];

    const [selectedvaluePrice, setselectedvaluePrice] = useState(defaultValue);

    const prand = records?.map((item,index)=>{
        return item.prandtype
    })
    const uniqueArr = [...new Set(prand)];
const [resultObject, setResultObject] = useState({});

useEffect(() => {
    const result = {};
    uniqueArr.forEach(key => {
    result[key] = records?.filter(value => value.prandtype === key);
    });
    setResultObject(result);
}, [records,getvalue]); // The empty dependency array ensures that this effect runs only once on component mount
return(
     Object.entries(resultObject)?.map(([key, values], index) => (
    <Swiper {...params} className='carts mySwiper'  key={++index} navigation={true} modules={[Navigation]} >
            {
            activeSelected? 
            selectedvalueLocation === defaultValue  ? 
            values?.map((item) => (
                <SwiperSlide   key={index} className='cart'>
                    <h1>{`prand :::  ${item.prandtype}`}</h1>
                    <p className='cart_head'>Free Delivery</p>
                    <div className='tardemark'>
                    <span className='cart_price'>{item.price}</span>
                    <div className="trade_img">
                        <img src={item.prandtype} alt= 'mark' />
                    </div>
                    </div>
                    <div className='cart_title'>
                    <h2>{item.title}</h2>
                    <span>{item.year}</span>
                    </div>
                    <img src={item.image} alt="" />
                    <div className='cart_kilo'>
                <div>
                    <span className='cart_kilo__text'>{item.kilo} km</span>
                    <p className='cart_kilo__free'>free kms</p>
                </div>
                <div>
                    <svg className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium muiltr-k5e0xz"focusable="false" viewBox="0 0 32 32" aria-hidden="true" width="32" height="32" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.99666 28.0051H5.32888C4.59258 28.0051
                        3.995 27.4075 3.995 26.6712V18.6679C3.995 17.9316 4.59258 17.334 5.32888 17.334H7.99666C8.73297
                        17.334 9.33055 17.9316 9.33055 18.6679V26.6712C9.33055 27.4075 8.73297 28.0051 7.99666 28.0051Z"
                        strokeWidth="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                        <path d="M17.3339 22.6695H20.4459C21.0234 22.6695 21.585 22.4828 22.0465
                        22.136L25.2692 19.719C26.0735 19.1161 27.1993 19.1961 27.9103 19.9071V19.9071C28.7
                        20.6967 28.7 21.9759 27.9103 22.7642L25.1452 25.5294C24.4008 26.2737 23.4511 26.7819 22.4187 26.9887L18.5104 27.7703C17.7354 27.9251 16.9364 27.9064 16.1694 27.7143L12.6346 26.8313C12.2118 26.7246 11.7783 26.6712 11.3421 26.6712H9.33057" strokeWidth="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.3339 22.6695H19.3147C20.4312 22.6695 21.3356 21.7652 21.3356 20.6487V20.2445C21.3356 19.3175 20.7046 18.5091 19.8056 18.285L16.7483 17.5207C16.2508 17.3967 15.7412 17.334 15.229 17.334V17.334C13.9925 17.334 12.7827 17.6995 11.7542 18.3864L9.33057 20.0018" strokeWidth="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                        <path d="M17.9328 5.56101L11.7635 5.56501C11.4101 5.56501 11.0713 5.70641 10.8218 5.95584L9.72136 7.0563C9.19981 7.57785 9.19981 8.4222 9.72136 8.94242L10.8258 10.0469C11.0753 10.2963 11.4154 10.4377 11.7689 10.4364L17.9368 10.4324L17.9515 10.4337C18.8358 12.1504 20.6059 13.3349 22.6721 13.3322C25.6173 13.3242 28.005 10.9299 28.005 7.98602C28.0063 5.04079 25.6213 2.65847 22.6761 2.66114C20.6179 2.66647 18.8518 3.8523 17.9635 5.56235" strokeWidth="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22.6721 8.34883C22.8641 8.34883 23.0189 8.19276 23.0189 8.00068C23.0189 7.8086 22.8615 7.65254 22.6707 7.65254C22.4786 7.65254 22.3226 7.8086 22.3226 8.00068C22.3226 8.19276 22.4786 8.34883 22.6721 8.34883" strokeWidth="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                    </svg>
                    <span className='cart_kilo__free'>Car Delivery</span>
                </div>
                    </div>
                    <Button variant="contained" disableElevation>Rent a car now</Button>
                </SwiperSlide>
            ))
            :
            values?.filter((item)=>{   
                console.log(records?.filter(item => item.location === selectedvalueLocation ).length);
                return item.location === selectedvalueLocation
            })
            ?.map((item) => (    
                <div key={index} className='cart'>
                    <h1>{`prand :::  ${item.prandtype}`}</h1>
                    <p className='cart_head'>Free Delivery</p>
                    <div className='tardemark'>
                    <span className='cart_price'>{item.price}</span>
                    <div className="trade_img">
                        <img src={item.prandtype} alt= 'mark' />
                    </div>
                    </div>
                    <div className='cart_title'>
                    <h2>{item.title}</h2>
                    <span>{item.year}</span>
                    </div>
                    <img src={item.image} alt="" />
                    <div className='cart_kilo'>
                <div>
                    <span className='cart_kilo__text'>{item.kilo} km</span>
                    <p className='cart_kilo__free'>free kms</p>
                </div>
                <div>
                    <svg className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium muiltr-k5e0xz"focusable="false" viewBox="0 0 32 32" aria-hidden="true" width="32" height="32" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.99666 28.0051H5.32888C4.59258 28.0051
                        3.995 27.4075 3.995 26.6712V18.6679C3.995 17.9316 4.59258 17.334 5.32888 17.334H7.99666C8.73297
                        17.334 9.33055 17.9316 9.33055 18.6679V26.6712C9.33055 27.4075 8.73297 28.0051 7.99666 28.0051Z"
                        strokeWidth="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                        <path d="M17.3339 22.6695H20.4459C21.0234 22.6695 21.585 22.4828 22.0465
                        22.136L25.2692 19.719C26.0735 19.1161 27.1993 19.1961 27.9103 19.9071V19.9071C28.7
                        20.6967 28.7 21.9759 27.9103 22.7642L25.1452 25.5294C24.4008 26.2737 23.4511 26.7819 22.4187 26.9887L18.5104 27.7703C17.7354 27.9251 16.9364 27.9064 16.1694 27.7143L12.6346 26.8313C12.2118 26.7246 11.7783 26.6712 11.3421 26.6712H9.33057" strokeWidth="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.3339 22.6695H19.3147C20.4312 22.6695 21.3356 21.7652 21.3356 20.6487V20.2445C21.3356 19.3175 20.7046 18.5091 19.8056 18.285L16.7483 17.5207C16.2508 17.3967 15.7412 17.334 15.229 17.334V17.334C13.9925 17.334 12.7827 17.6995 11.7542 18.3864L9.33057 20.0018" strokeWidth="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                        <path d="M17.9328 5.56101L11.7635 5.56501C11.4101 5.56501 11.0713 5.70641 10.8218 5.95584L9.72136 7.0563C9.19981 7.57785 9.19981 8.4222 9.72136 8.94242L10.8258 10.0469C11.0753 10.2963 11.4154 10.4377 11.7689 10.4364L17.9368 10.4324L17.9515 10.4337C18.8358 12.1504 20.6059 13.3349 22.6721 13.3322C25.6173 13.3242 28.005 10.9299 28.005 7.98602C28.0063 5.04079 25.6213 2.65847 22.6761 2.66114C20.6179 2.66647 18.8518 3.8523 17.9635 5.56235" strokeWidth="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22.6721 8.34883C22.8641 8.34883 23.0189 8.19276 23.0189 8.00068C23.0189 7.8086 22.8615 7.65254 22.6707 7.65254C22.4786 7.65254 22.3226 7.8086 22.3226 8.00068C22.3226 8.19276 22.4786 8.34883 22.6721 8.34883" strokeWidth="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                    </svg>
                    <span className='cart_kilo__free'>Car Delivery</span>
                </div>
                    </div>
                    <Button variant="contained" disableElevation>Rent a car now</Button>
                </div>
                ))
            :
            values?.map((item) => (
                <div key={index} className='cart'>
                    <h1>{`prand :::  ${item.prandtype}`}</h1>
                    <p className='cart_head'>Free Delivery</p>
                    <div className='tardemark'>
                    <span className='cart_price'>{item.price}</span>
                    <div className="trade_img">
                        <img src={item.prandtype} alt= 'mark' />
                    </div>
                    </div>
                    <div className='cart_title'>
                    <h2>{item.title}</h2>
                    <span>{item.year}</span>
                    </div>
                    <img src={item.image} alt="" />
                    <div className='cart_kilo'>
                <div>
                    <span className='cart_kilo__text'>{item.kilo} km</span>
                    <p className='cart_kilo__free'>free kms</p>
                </div>
                <div>
                    <svg className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium muiltr-k5e0xz"focusable="false" viewBox="0 0 32 32" aria-hidden="true" width="32" height="32" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.99666 28.0051H5.32888C4.59258 28.0051
                        3.995 27.4075 3.995 26.6712V18.6679C3.995 17.9316 4.59258 17.334 5.32888 17.334H7.99666C8.73297
                        17.334 9.33055 17.9316 9.33055 18.6679V26.6712C9.33055 27.4075 8.73297 28.0051 7.99666 28.0051Z"
                        strokeWidth="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                        <path d="M17.3339 22.6695H20.4459C21.0234 22.6695 21.585 22.4828 22.0465
                        22.136L25.2692 19.719C26.0735 19.1161 27.1993 19.1961 27.9103 19.9071V19.9071C28.7
                        20.6967 28.7 21.9759 27.9103 22.7642L25.1452 25.5294C24.4008 26.2737 23.4511 26.7819 22.4187 26.9887L18.5104 27.7703C17.7354 27.9251 16.9364 27.9064 16.1694 27.7143L12.6346 26.8313C12.2118 26.7246 11.7783 26.6712 11.3421 26.6712H9.33057" strokeWidth="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.3339 22.6695H19.3147C20.4312 22.6695 21.3356 21.7652 21.3356 20.6487V20.2445C21.3356 19.3175 20.7046 18.5091 19.8056 18.285L16.7483 17.5207C16.2508 17.3967 15.7412 17.334 15.229 17.334V17.334C13.9925 17.334 12.7827 17.6995 11.7542 18.3864L9.33057 20.0018" strokeWidth="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                        <path d="M17.9328 5.56101L11.7635 5.56501C11.4101 5.56501 11.0713 5.70641 10.8218 5.95584L9.72136 7.0563C9.19981 7.57785 9.19981 8.4222 9.72136 8.94242L10.8258 10.0469C11.0753 10.2963 11.4154 10.4377 11.7689 10.4364L17.9368 10.4324L17.9515 10.4337C18.8358 12.1504 20.6059 13.3349 22.6721 13.3322C25.6173 13.3242 28.005 10.9299 28.005 7.98602C28.0063 5.04079 25.6213 2.65847 22.6761 2.66114C20.6179 2.66647 18.8518 3.8523 17.9635 5.56235" strokeWidth="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22.6721 8.34883C22.8641 8.34883 23.0189 8.19276 23.0189 8.00068C23.0189 7.8086 22.8615 7.65254 22.6707 7.65254C22.4786 7.65254 22.3226 7.8086 22.3226 8.00068C22.3226 8.19276 22.4786 8.34883 22.6721 8.34883" strokeWidth="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                    </svg>
                    <span className='cart_kilo__free'>Car Delivery</span>
                </div>
                    </div>
                    <Button variant="contained" disableElevation>Rent a car now</Button>
                </div>
            ))}
         {activeSelected && selectedvalueLocation !== defaultValue && records?.filter(item => item.location === selectedvalueLocation ).length === 0 && (
           getvalue = true
        )} 
    </Swiper>
    ))
)
}

export default HundelAirportFilterPage