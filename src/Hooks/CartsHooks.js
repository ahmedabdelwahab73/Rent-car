// import React, { useState } from 'react'

// const CartsHooks = ({cart, currenta, current,slideref}) => {
//     console.log(slideref?.current);
//     let mainCurrent = current || currenta
//     const [showPopup, setShowPopup] = useState(false);
//   const [changeCurrent, setchangeCurrent] = useState(0);
//   const hundlerNextBtn = ()=>{
//     if(changeCurrent + mainCurrent < cart?.length){
//       setchangeCurrent((prevNext)=> prevNext + mainCurrent);
//       setShowPopup((value)=> !value)
//     }
//   }
//   const hundlerPrevBtn = ()=>{
//     if(changeCurrent >= mainCurrent){
//       setchangeCurrent((prevNext)=> prevNext - mainCurrent);
//       setShowPopup((value)=> !value);
     
//     }
//   }
//   const displayImges = cart?.slice(changeCurrent, changeCurrent + mainCurrent);
//   const  RundisplayImges = displayImges?.map((img, index)=>{
//       return img
//   })
//   console.log(cart);
//   return {showPopup, hundlerNextBtn, hundlerPrevBtn, RundisplayImges, changeCurrent, current, cart}
// }

// export default CartsHooks