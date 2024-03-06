import React, { useState } from 'react'

const HighLight = () => {
    const [btnLight, setbtnLight] = useState(false)
        const toggleBtnLight = ()=>{
        return setbtnLight((value)=> !value)
    }
  return (
    [btnLight,toggleBtnLight]
  )
}

export default HighLight