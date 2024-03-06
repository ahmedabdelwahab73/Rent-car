import React from 'react'
import Landing from '../componanet/Landing'
import PopularCars from '../componanet/popularcars/PopularCars'
import Footer from '../componanet/footer/Footer'
import AppRent from '../componanet/AppRent'
import SliderLocation from '../componanet/SliderLocation'
import { useMediaQuery } from '@mui/material'
import FooterMedia from '../componanet/footer/FooterMedia'
const Home = () => {
  return (
  <>
    <Landing/>
    <AppRent/>
    <PopularCars/>
    <SliderLocation/>
  </>
  )
}

export default Home