import React from 'react'
import '../../styles/accountinfo.css'
const AcountInfo = () => {
  return (
    <section className='accountinfo'>
        <input type="text" placeholder='Name' readOnly/>
        <input type="text" placeholder='Email' readOnly/>
        <div htmlFor="">
            <input type="text" value={window.localStorage.getItem('phone')} readOnly/>
            <label className='phone_placeholder--active'>phone number</label>
        </div>
        <input type="date" value={window.localStorage.getItem('brithdate')} readOnly/>
    </section>

  )
}

export default AcountInfo