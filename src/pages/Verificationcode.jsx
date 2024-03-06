import React, { useEffect, useRef, useState } from 'react'
import '../styles/verificationcode.css'
import '../styles/loginpage.css'
import { useNavigate } from 'react-router-dom';
import HighLight from '../Hooks/HighLight';
const Verificationcode = () => {
    // Custom Hooks HightLight
    const [btnLight,toggleBtnLight] = HighLight();
    console.log(btnLight,toggleBtnLight);
    const Navigate = useNavigate();
    const [active, setactive] = useState(false);
    const [verificationcode , setVerificationcode] = useState('');
    const code = window.localStorage.getItem('code');
    const [inpActive, setinpActive] = useState(false);
    const codeInp = useRef(null);

    useEffect(()=>{
        const toggleInp = (e)=>{
            if(codeInp?.current?.contains(e?.target)){
                if(verificationcode.length <= 4 ){
                    setinpActive(true)
                }
                else{
                    setinpActive(false)
                }
            }
            else{
                if(inpActive){
                    if(verificationcode?.length > 0 && verificationcode?.length <= 4){
                        setinpActive(true)
                    }
                    else{
                        setinpActive(false)
                    }
                }
            }
        }
        document.addEventListener('click', toggleInp);
    },[verificationcode,inpActive])
    const toggleInp = (e)=>{
        if(codeInp?.current?.contains(e?.target)){
            return setinpActive((value)=> !value)
        }
    } 
    const hundulerFormCode = (e)=>{
        e.preventDefault();
        // Custom Hooks HightLight
        toggleBtnLight();
        if(verificationcode === code){
            Navigate('/verificationcode/signup')
        }
        else{
            setactive(true)
        }
    }
  return (
    <section className='login_verificationcode verificationcode'>
        <div className="login_box">
            <div className="login_box__text">
                <h2>Verification Code</h2>
                <p className='prgh'>Dear customer, the code was sent to your mobile number</p>
                <p className='code'>{code}</p>
            </div>
            
            <form action="" onSubmit={hundulerFormCode}>
                <input ref={codeInp} type="text" value={verificationcode} className={`${inpActive && 'inp--active'}`}
                onChange={(e)=> setVerificationcode(e.target.value)} 
                onClick={toggleInp}
                maxLength={'4'} placeholder='Verification Code' 
                />
                {verificationcode !== code && active && <p className='validate--phone'>Wrong OTP, please enter the correct OTP</p>}
                <label htmlFor="" className='btn_submit'>
                    <span className={`btn_light ${btnLight ? 'btn_light--active' : 'e'}`} ></span>
                    <button type="submit">Continue</button>
                </label>
            </form>
        </div>
    </section>

  )
}

export default Verificationcode