import React, { useState } from 'react'
import AcountInfo from './AcountInfo'
import Wallet from './Wallet';
import '../../styles/profile.css';
import { Button } from '@mui/material';

const Profile = () => {
  const [Info, setacountInfo] = useState(true);
  const [wallet, setwallet] = useState(false);
  const [btnInfo, setbtnInfo] = useState(true);
  const acountInfo =()=>{
    setacountInfo(true);
    setwallet(false);
    setbtnInfo(true);
  }
  const Walled =()=>{
    setwallet(true);
    setacountInfo(false);
    setbtnInfo(false);
  }
  const hundlerLogout = ()=>{
    window.localStorage.clear();
    window.location.pathname = '/login'
  }
  return (
    <>
    <section className='profile'>
      <h2>My Account</h2>
      <div className='profile_content'>
        <aside>
          <div className='profile_content__btn'>
            <button className={`${btnInfo && 'btn--active'}`} onClick={acountInfo}>Acount info</button>
            <span className={`${btnInfo &&'br-left--active'}`}></span>
          </div>
          <div className='profile_content__btn'>
            <button className={`${!btnInfo && 'btn--active'}`} onClick={Walled}>Walled</button>
            <span className={`${!btnInfo && 'br-left--active'}`}></span>
          </div>
        </aside>
          {Info && <AcountInfo/>}
          {wallet && <Wallet/>}
      </div>
      <Button variant="contained"
      onClick={hundlerLogout}
      sx={{
        '&:hover': {
          backgroundColor: 'rgb(21, 170, 190)',
        },
      }}
      >Sign Out</Button>
    </section>
    </>
  )
}

export default Profile