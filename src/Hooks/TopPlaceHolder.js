import { useEffect, useRef, useState } from 'react'

const TopPlaceHolder = () => {
    const [phone, setphone] = useState('');
    const [top, settop] = useState(false);
    const inp = useRef(null);
    useEffect(()=>{
        let toogle = (e)=>{
            if(inp?.current?.contains(e?.target)){
                if(phone.length >= 0 ){
                    settop(true)
                }
                else{
                    settop(false)
                }
            }
            else{
                if(top){
                    if(phone?.length > 0){
                        settop(true)
                    }
                    else{
                        settop(false)
                    }
                }
            }
        }
        document.addEventListener('click', toogle);
    },[phone,top])
  return [phone, setphone, top, inp]
}

export default TopPlaceHolder