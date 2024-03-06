import React, { useState } from 'react'
import '../styles/signup.css'
import TopPlaceHolder from '../Hooks/TopPlaceHolder';
const Signup = () => {
    // Custom Hooks TopPlaceHolder
    const [phone, setphone, top, inp] = TopPlaceHolder();
    const [active, setactive]= useState(false);
    const[date, setdate] = useState('');
    const hundlerform = (e)=>{
        e.preventDefault();
        if(phone?.length < 14 || phone ===""){
            setactive(true);
        }
        else{
            window.localStorage.setItem('national', phone);
            window.localStorage.setItem('brithdate', date)
            window.location.pathname = '/'
        }
    }
  return (
    <section className='login_verificationcode signuppage'>
        <div className='login_box'>
            <div className="login_box__text">
                <h2>SignUp</h2>
                <p>Compare and book rental cars. best prices guaranteed</p>
            </div>
            <form action="" className='signup' onSubmit={hundlerform}>
                <label htmlFor="" className='national'>
                    <input ref={inp} type="text" maxLength={'14'} name="national" value={phone}
                    // Custom Hooks setphone From TopPlaceHolder 
                    onChange={(e)=> setphone(e.target.value)}
                    />
                    {phone?.length < 14 && active && <p className='validate--phone'>national is less than 14 number</p> }
                    <label className={`${top ? 'phone_placeholder--active' : 'phone_placeholder'}` }>National / Resident iD</label>
                </label>
                <label htmlFor="" className='brithdate'>
                    <input type="date" name="" id="" placeholder='BrithDate' min='1960-12-31' max= '2004-12-31'
                    onChange={(e)=> setdate(e.target.value)}
                    value={date}
                    required />
                </label>
                <button type='submit'>SignUp</button>
            </form>
        </div>
    </section>
  )
}

export default Signup