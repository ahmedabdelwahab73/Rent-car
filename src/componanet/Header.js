import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png';
import '../styles/header.css'
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons'; // Import the solid icons
import { Box, LinearProgress, useMediaQuery } from '@mui/material';
import MainLoading from './loading/MainLoading';

const Header = ({setIsLoading,}) => {
  const [isprogress, setIsprogress] = useState(true);
  const location = useLocation();
  const [show, setshow] = useState(false);
  const media_768 = useMediaQuery('(max-width : 768px)')
  const Navigate = useNavigate();
  const toggle = ()=>{
    return setshow((value) =>  !value)
  }
  const hundlerLogout = ()=>{
    window.localStorage.clear();
    window.location.pathname = '/login'
  }
  useEffect(()=>{
    setTimeout(()=>{
      setIsprogress(false)
    },1000)
  },[isprogress])
  return (
    <header>
      {
        media_768 ? location?.pathname === '/airportFilter' &&
          <FontAwesomeIcon className='Header_back' onClick={()=> Navigate('/')} icon={faArrowLeft} />
        :
        <svg className="svg__icon" focusable="false" viewBox="0 0 745 219" aria-hidden="true" fill="none" onClick={()=> Navigate('/')}>
        <path d="M291.938 138.683V166.765H275.6C262.899 166.765
          252.072 162.213 243.14 152.974C234.205 143.676
          229.691 132.505 229.691 119.401V0.000152588H257.714V119.401C257.714
          129.634 265.941 138.683 275.6 138.683H291.938Z" fill="currentColor">
        </path>
        <path d="M170.926 40.657H125.521C116.338 40.657 108.366 43.9991
          101.999 50.398C95.6441 56.8577 92.3477 64.6851 92.3477 73.9658V126.777C92.3477
          137.759 96.0911 147.239 103.863 155.085C111.639 162.936 120.825 166.765 131.643
          166.765H195.416V140.119H131.643C125.282 140.119 120.344 134.881
          120.344 128.451V115.61H203.875V73.9658C203.875 64.6851 200.609
          56.8577 194.226 50.398C187.844 43.9991 180.106 40.657 170.926
          40.657ZM178.219 91.8061H120.344V71.6147C120.344 68.9859 122.687
          66.5682 125.521 66.5682H173.277C176.109 66.5682 178.219 68.9859
          178.219 71.6147V91.8061Z" fill="currentColor">
        </path>
        <path d="M315.916 51.8178C308.62 59.2115 304.848 68.2506 304.848 78.9674V119.168C304.848
          132.255 309.348 143.685 318.047 152.988C326.968 162.223 337.776 166.758 350.737
          166.758H388.389C388.389 186.101 389.346 190.195 361.408 190.695C359.054 190.759
          335.781 190.778 332.998 190.778V218.158H370.959C396.38 218.158 407.903 209.342
          412.596 197.931C416.137 189.354 416.36 183.889 416.36 174.616V40.654H342.965C332.381
          40.654 323.43 44.4546 315.916 51.8178ZM388.609 138.439H350.737C341.093 138.439 332.868
          129.632 332.868 119.168V78.9674C332.868 73.4797 337.306 68.9887 342.965 68.9887H388.609V138.439Z" fill="currentColor">
        </path>
        <path d="M514.43 40.658H448.114V64.2105H514.43C520.777 64.2105 525.709 69.4605 525.709
          75.8765V91.8071H442.182V133.432C442.182 142.728 445.507 150.573 451.864 156.996C458.198
          163.422 465.976 166.766 475.129 166.766H520.534C529.725 166.766 537.746 163.422 544.086
          156.996C550.403 150.573 553.74 142.728 553.74 133.432V80.6395C553.74 69.6964 549.96 60.4081
          542.194 52.5541C534.429 44.7096 525.253 40.658 514.43 40.658ZM525.709 134.627C525.709 137.261
          523.377 139.618 520.534 139.618H473.512C470.691 139.618 468.574 137.261
          468.574 134.627V114.646H525.709V134.627Z" fill="currentColor">
        </path>
        <path d="M642.275 40.6929V40.6568H607.576H579.561V68.9781V166.757H607.576V68.9781H642.092C653.99
          69.0751 663.339 79.4894 663.339 92.0665V166.757H691.06V92.0665C691.06 77.787
          686.169 65.6569 676.504 55.6515C666.917 45.7431 655.523 40.7823 642.275
          40.6929Z" fill="currentColor">
        </path>
        <path d="M716.879 166.758H744.892V40.654H716.879V166.758Z" fill="currentColor">
        </path>
        <path 
          d="M28.0289 119.407V66.573H0.0214844V119.407C0.0214844
          132.513 4.522 143.685 13.4641 152.979C22.3947 162.219
          33.2123 166.764 45.9264 166.764H68.6667V138.678H45.9264C36.2615
          138.678 28.0289 129.628 28.0289 119.407Z" fill="currentColor">
        </path>
        <path d="M66.5301 38.5271V66.5498H28.0055L0
          38.5481V0.0216599H28.0246V38.5271H66.5301Z"
          fill="currentColor">
        </path>
        </svg>
      }
        <NavLink onClick={()=> setIsprogress(true)} to={'/'}>
          <img src={logo} alt='logo'/>
        </NavLink>
        <div className='header_link'>
            {
            !window.localStorage.getItem('national') ? <NavLink to={'/login'}>Create Acount Or Login</NavLink>
            :
            <div className='header_menubar' onClick={toggle}>
              <div className='header_menubar__icon'>
                <FontAwesomeIcon icon={faUser} />
              </div>
                <nav className={`${show && 'ds-none'}`}>
                <NavLink to={"profile"}>My Profile</NavLink>
                <NavLink to={'/'}onClick={hundlerLogout}>Login Out</NavLink>
              </nav>
            </div>
            }
        </div>
    </header>
  )
}

export default Header