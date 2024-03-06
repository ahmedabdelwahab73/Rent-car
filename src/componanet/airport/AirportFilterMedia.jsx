import { Button, Pagination } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
// import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react'
import { Swiper } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'; // Import Swiper core and required modules
import 'swiper/swiper-bundle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort, faFilter, faStar, faXmark } from '@fortawesome/free-solid-svg-icons';
// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AirportFilterMediaPopUp from './AirportFilterMediaPopUp';
import { useNavigate } from 'react-router-dom';

// import './styles.css';
SwiperCore.use([Navigation]);
const AirportFilterMedia = ({records, selectedvalueLocation, selectedvalueStars, selectedvalueCarPrand,
    defaultValue, activeSelected, selectedCarPrand, setselectedvalueLocation, setactiveSelected,
    showListFilter, SizeScreen_767, setselectedvalueStars, setactiveSelectedStars,
    setselectedvalueCarPrand, setselectedCarPrand, hundlerSort, currencies, CustomMenuItem,
    openLocationFromHome,
}) => {
        const [resultObject, setResultObject] = useState({});
        const [FilteredResult, setFilteredResult] = useState([]);
        const prand = records?.map((item, index) => item.prandtype);    
        const [showfilterpopup, setShowfilterpopup] = useState(false);
        const [showSortpopup, setShowSortpopup] = useState(false);
        const Navigate = useNavigate();
        const uniqueArr = [...new Set(prand)];
        const hundlerFilterPopoup = ()=>{
            setShowfilterpopup(true)
            setShowSortpopup(false)
        }
        const hundlerSortPopoup = ()=>{
            setShowfilterpopup(false)
            setShowSortpopup(true)
        }
    useEffect(() => {
        const choose = {
            selectedvalueLocation,
            selectedvalueStars: Number(selectedvalueStars[0]) || 1,
            selectedvalueCarPrand: selectedvalueCarPrand || defaultValue
        };
        const filterResult = records?.filter((item) => {
            if ((choose.selectedvalueLocation === defaultValue) && (choose.selectedvalueCarPrand === defaultValue)) {
                return item.stars >= choose.selectedvalueStars;
            } else {
                if (activeSelected && (choose.selectedvalueCarPrand === defaultValue)) {
                    return item.location === choose.selectedvalueLocation && item.stars >= choose.selectedvalueStars;
                }
                if (selectedCarPrand && (choose.selectedvalueLocation === defaultValue)) {
                    return item.stars >= choose.selectedvalueStars && item.title === choose.selectedvalueCarPrand;
                }
                if (activeSelected) {
                    return item.location === choose.selectedvalueLocation && item.stars >= choose.selectedvalueStars && item.title === choose.selectedvalueCarPrand;
                }
            }
        });
        const result = {};
        uniqueArr.forEach(key => {
            result[key] = filterResult?.filter(value => value.prandtype === key);
        });
        setResultObject(result);
        setFilteredResult(filterResult);
    }, [ records, selectedvalueLocation, selectedvalueCarPrand, selectedvalueStars, defaultValue,showListFilter,SizeScreen_767,showfilterpopup]);
        if (showfilterpopup || showSortpopup){
            return <AirportFilterMediaPopUp setShowfilterpopup={setShowfilterpopup} showSortpopup={showSortpopup}
            setselectedvalueLocation={setselectedvalueLocation} setactiveSelected={setactiveSelected}
            defaultValue={defaultValue} selectedvalueLocation={selectedvalueLocation}
            setselectedvalueStars={setselectedvalueStars} setactiveSelectedStars={setactiveSelectedStars}
            selectedvalueStars={selectedvalueStars}
            selectedvalueCarPrand={selectedvalueCarPrand} setselectedvalueCarPrand={setselectedvalueCarPrand}
            setselectedCarPrand={setselectedCarPrand}  setShowSortpopup={setShowSortpopup} hundlerSort={hundlerSort}
            currencies ={currencies} CustomMenuItem={CustomMenuItem} 
            />
        }  
        else{
            return(
                <>
                    <div className='airport_filtertion'>
                        <div className='airport_filtertion__filter'
                        onClick={hundlerFilterPopoup}
                        >
                            <FontAwesomeIcon icon={faFilter} />
                            <span>filter</span>
                        </div>
                        <span className='airport_filtertion__line'></span>
                        <div className='airport_filtertion__sort'
                        onClick={hundlerSortPopoup}
                        >
                            <FontAwesomeIcon icon={faArrowDownWideShort} />
                            <span>sort</span>
                        </div>
                    </div>
                    <div className='airport_media'>
                        { 
                        FilteredResult.length ?
                        Object.entries(resultObject)?.map(([key, values], index) => {
                            return (
                                values?.length > 0  &&
                                <Swiper 
                                key={index}
                                autoHeight={true}
                                spaceBetween={0}
                                navigation={true}
                                pagination={{
                                    clickable: true,
                                }}
                                slidesPerView ={1.1}
                                modules={[Navigation, Pagination]}
                                className="mySwiper"
                                >
                                    {
                                        values?.map((item, index) => {
                                            return (
                                                    <SwiperSlide key={item?.id}
                                                    >
                                                        <div className='airport_maincart'
                                                        onClick={()=> Navigate(`booking/${item?.id}`)}
                                                        >
                                                            <div className={`cart airport_cart`}  >
                                                                <div className='tardemark'>
                                                                    <div className="trade_img">
                                                                        <img src={item.prandimage} alt='mark' />
                                                                        <div className='cart_stars'><FontAwesomeIcon icon={faStar} />{ `${item.stars}`}</div>
                                                                    </div>
                                                                </div>
                                                                <div className='airport_cart__content'>
                                                                    <div className='cart_title'>
                                                                        <h2>{item.title}</h2>
                                                                        <p className='cart_notis'>Special Offer</p>
                                                                    </div>
                                                                    <div className='airport_cart__image'>
                                                                        <div className='airport_cart_info'>
                                                                            <p>300 KM a day</p>
                                                                            <p>Insurance included</p>
                                                                        </div>
                                                                        <div className='airport_cart__image--img'>
                                                                            <img src={item.image} alt="" />
                                                                        </div>
                                                                    </div>
                                                                <span className='cart_price'>{item.price}
                                                                    <span>SAR/Day</span>
                                                                </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                            );
                                        })
                                    }
                                </Swiper>
                            );
                        })
                        :
                        <h1 style={{paddingTop: '100px'}}>The Car Brand type is not available in this location</h1>
                        }
                    </div>
                </>
            )
        }
}

export default AirportFilterMedia