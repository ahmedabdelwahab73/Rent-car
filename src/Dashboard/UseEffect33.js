import React, { useEffect, useState } from 'react'
import Name from '../componanet/Name';

const UseEffect = () => {
  const [data, setdata] = useState([]);
  const dataName = data.map((item,index)=> <Name name = {item} key={index}/>)
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=> res.json())
    .then((data)=> setdata(data.map((item) => item.title)))
  },[])
  return (
    <div>{dataName}</div>
  )
}

export default UseEffect