import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneRecordFilter } from '../state/PopularcarsSlice';

export const UseDataBooking = () => {
    const {id} = useParams();
    const {loading, record, error} = useSelector((state)=> state.popularCars)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getOneRecordFilter(id))
    },[dispatch,id])
    return {loading, record, error}
}

export default UseDataBooking