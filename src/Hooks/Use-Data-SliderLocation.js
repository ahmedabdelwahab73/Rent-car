import React, { useEffect } from 'react'
import { fetchCars } from '../state/PopularcarsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchslidelocation } from '../state/SlidLocation';

export const UseDataSliderLocation = () => {
    const {loading, records_L, error} = useSelector((state)=> state.slidelocationCars);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchslidelocation())
    },[dispatch])
  return {loading, records_L, error}
}

export default UseDataSliderLocation