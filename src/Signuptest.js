import React, { useState } from 'react'
import signimage from './images/signup.jpg';
import axios from 'axios'
const Signuptest = () => {
    const [name, setname]= useState('');
    const [email, setemail]= useState('');
    const [pass, setpass]= useState('');
    const [repass, setrepass]= useState('');
    const [active, setactive] = useState(false);
    const[handelerroremail, sethandelerroremail] = useState('');
    const [showvalidate, setshowvalidate] = useState(true);
    const formHundler = async (e)=>{
        let flage = true;
        e.preventDefault();
        setactive(true);
        
        if(name?.length < 8 || pass?.length < 8 || repass !== pass){
            flage = false
            
        }
        else{
            flage = true
        }
        try{
            if(flage){
                let res = await axios.post(`http://127.0.0.1:8000/api/register`,{
                    name,
                    email,
                    password : pass,
                    password_confirmation: repass,
                })
                .then((res)=> console.log(res))
            }
            setshowvalidate(false)
            console.log("resolve :  " + showvalidate);
        }
        catch(error){
            sethandelerroremail(error?.response.status);
            setshowvalidate(true)
            console.log("reject :  " + showvalidate);
        }
    }
  return (
    <>
    <div className='formatform'>
        <img src = {signimage} alt ='signup'/>
        <form onSubmit={formHundler}>
            <div className='fullname'>
                <label htmlFor='fullname'>Full Name : </label>
                <input type='text' name='fullname' placeholder='Full Name'
                value={name} 
                onChange={(e)=> setname(e.target.value)}
                />
                {name?.length < 8 && active && <p className='validate'>Full Name is requered</p>}
            </div>
            <div className='email'>
                <label htmlFor='email'>Email : </label>
                <input type='email' name='email' placeholder='Email' required
                value={email} 
                onChange={(e)=> setemail(e.target.value)}
                />
                {active && handelerroremail && <p className={`${showvalidate ? `validate` : `unvalidate`}`}>Email Has been token</p>}
            </div>
            <div className='password'>
                <label htmlFor='password'>Password : </label>
                <input type='password' name='password' placeholder='Password'
                value={pass} 
                onChange={(e)=> setpass(e.target.value)}
                />
                {pass?.length < 8 && active && <p className='validate'>Paswored lesthan 8 caracter</p>}
            </div>
            <div className='repassword'>
                <label htmlFor='repassword'>Repeat Password : </label>
                <input type='password' name='repassword' placeholder='Repeat Password'
                value={repass}
                onChange={(e)=> setrepass(e.target.value)}
                />
                {repass !== pass && active && <p className='validate'>Paswored not equal</p>}
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
   </>
  )
}

export default Signuptest