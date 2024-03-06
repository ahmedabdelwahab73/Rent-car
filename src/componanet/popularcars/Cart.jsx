// Cart.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from '../../state/PopularcarsSlice'; // Correct import statement
import ShowCars from './ShowCars';
const Cart = ({cart,showPopup, RundisplayImges, changeCurrent, current,}) => {



  return (
    <>
        <ShowCars cart={cart} showPopup={showPopup}
        RundisplayImges={RundisplayImges}
        changeCurrent = {changeCurrent}
        current ={current}
        />
    </>
  );
};

export default Cart;
