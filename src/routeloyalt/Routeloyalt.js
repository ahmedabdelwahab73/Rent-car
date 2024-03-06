import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../componanet/Header'
import '../styles/header.css'
import MainLoading from '../componanet/loading/MainLoading'
import { useMediaQuery } from '@mui/material'
import FooterMedia from '../componanet/footer/FooterMedia'
import Footer from '../componanet/footer/Footer'

const Routeloyalt = () => {
  const [isLoading, setIsLoading] = useState(true);
  const media_768 =useMediaQuery(`(max-width : 768px)`)

  useEffect(() => {
    const handleLoad = () => {
      // Set isLoading to false once the website has loaded
        setIsLoading(false);
    };
    // Attach the event listener
      window.addEventListener('load', handleLoad);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount
  return (
        isLoading ? (
            <MainLoading/>
        )
        :
          (
          <>
          <main>
            <Header setIsLoading ={setIsLoading}/>
            <div className='container'>
            <Outlet/>
            </div>
            {
            media_768 ?
            <FooterMedia/>
            :
            <Footer/>
            }
          </main>
          </>
          )
      
    
  )
}

export default Routeloyalt