import React, { useEffect, useRef, useState } from 'react'
import '../styles/loginpage.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import HighLight from '../Hooks/HighLight';
import TopPlaceHolder from '../Hooks/TopPlaceHolder';
const Login = () => {
    // Custom Hooks TopPlaceHolder
    const [phone, setphone, top, inp] = TopPlaceHolder();
    const max = 9999
    const code = Math.round(Math.random() * (max + 1));
    const [active, setactive] = useState(false);
    const navigate = useNavigate();
    const prefixInp = useRef([]);
    // Custom Hooks HightLight
    const [btnLight,toggleBtnLight] = HighLight();
    const [prefixClass, setprefixClass] = useState(false);
    const togglePrefix = (e)=>{
        if(prefixInp?.current?.contains(e?.target)){
            return setprefixClass((value)=> !value)
        }
    }

    const hundlerphone =(e)=>{
        e.preventDefault();
        setactive(true);
        // Custom Hooks HightLight
        toggleBtnLight(true);
        if(phone?.length === 10){
        window.localStorage.setItem('phone', phone);
        window.localStorage.setItem('code', code);
        navigate('/verificationcode');
        }
    }
  return (
    <section className='login_verificationcode'>
        <div className='login_box'>
            <div className='login_box__text'>
                <h2>Create Account or Login</h2>
                <p>Enter your mobile number to create account or sign in</p>
            </div>
            <form action="" onSubmit={hundlerphone}>
                <label htmlFor="phone" className='phone'>
                    <div className='prefix'>
                        <label htmlFor="">Prefix</label>
                        <FontAwesomeIcon icon={faChevronDown} className= {`${prefixClass && 'prefix--active'}`}
                        onClick={()=> setprefixClass((value)=> !value) }
                        />
                        <span className={`Prefix_light ${prefixClass && 'Prefix_light--active'}`}></span>
                        <div className= "" id="">
                            <input ref={prefixInp} type="text" className='inp_prefix' value={`Egypt : +20`}
                            onClick={togglePrefix}
                            />
                        </div>
                    </div>
                    <label htmlFor="">
                        <input ref={inp} type="text"  value={phone} maxLength='10'
                        className={`${top && 'inp--active'}`}
                        // Custom Hooks setphone From TopPlaceHolder 
                        onChange={(e)=> setphone(e.target.value.trim())}
                        />
                        <label htmlFor="" className={`${top ? 'phone_placeholder--active' : 'phone_placeholder'}`}>Phone</label>
                    </label>
                    {(phone?.length > 10 || phone?.length < 10) && active && <p className='validate--phone'>Pohne must be 10 number</p>}
                    {phone === window.localStorage.getItem("phone") && phone != null && <p className='validate--phone'>this phone has been taken</p>}
                </label>
                <label htmlFor="" className='btn_submit'>
                    <span className={`btn_light ${btnLight ? 'btn_light--active' : 'e'}`} ></span>
                    <button type="submit">Submit</button>
                </label>
            </form>
        </div>
    </section>
  )
}

export default Login