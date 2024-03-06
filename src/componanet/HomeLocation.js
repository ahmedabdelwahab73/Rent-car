import { useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swiper, { Navigation } from 'swiper';
import TestAirportLocation from './airport/TestAirportLocation';
import AirportFilterPage from '../pages/profile/airportFilter/AirportFilterPage';

const HomeLocation = () => {
    let openLocationFromHome = true;
    const {name} = useParams();
    return <AirportFilterPage openLocationFromHome={openLocationFromHome} nameLocation={name}/>
}

export default HomeLocation