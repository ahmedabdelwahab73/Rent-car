import React, { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import '../../../styles/airportfilter.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { SortRecord, fetchCars } from '../../../state/PopularcarsSlice';
import { styled } from '@mui/material/styles';
import AirportFilterFomat from '../../../componanet/airport/AirportFilterFomat';
import { useMediaQuery } from '@mui/material';
import AirportFilterMedia from '../../../componanet/airport/AirportFilterMedia';
import UseDataSliderLocation from '../../../Hooks/Use-Data-SliderLocation';

const AirportFilterPage = ({openLocationFromHome,nameLocation}) => {
  // console.log(openLocationFromHome);
    const {records, loading, erorr} = useSelector((state) => state.popularCars);
    const {records_L} = UseDataSliderLocation();   
    // console.log(nameLocation.replace('-', ' '));
    const records_L_Location = records?.filter((item)=>{
      return item?.location === nameLocation?.replace('-', ' ');
    })
    // console.log(records_L_Location);
    const SizeScreen_767 = useMediaQuery(`(max-width: 768px)`)
    const mapRecordsStars = records?.map((item,index)=>{
        return Math.floor(item.stars)
    })
    const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
        borderRadius: '2.1px', // Add border radius
        '&:hover': {
          backgroundColor: 'rgb(119 126 144 / 16%)', // Change background color on hover
        //   borderColor: 'red', // Change border color to red on hover
        },
        '&.Mui-selected': {
          backgroundColor: 'rgb(21 170 190 / 10%)', // Change background color when selected
          color: 'rgb(119, 126, 144)', // Change text color when selected
        },
        '&.Mui-selected:hover': {
          backgroundColor: 'rgb(21 170 190 / 10%)', // Change background color when selected and hovered
        },
      }));
    const oneValueStars = [...new Set(mapRecordsStars)]
    const highestValueStars = Math.max(...oneValueStars)
    const dispatch = useDispatch();
    const defaultValue = "SelectAll";
    const [activeSelected, setactiveSelected] = useState(false);
    const [activeSelectedStars, setactiveSelectedStars] = useState(false);
    const [selectedvalueLocation, setselectedvalueLocation] = useState(defaultValue);
    const [selectedvalueStars, setselectedvalueStars] = useState("");
    const [selectedvalueCarPrand, setselectedvalueCarPrand] = useState(defaultValue);
    const [selectedCarPrand, setselectedCarPrand] = useState(false);
    const [showListFilter, setshowListFilter] = useState(false);
    let getvalue = false;
    const hundlerSort = (selectedlabel)=>{
        selectedlabel === 'Price' ? dispatch(SortRecord()) : dispatch(fetchCars());
    }
    const hundlerBtnFilter = ()=>{
        setshowListFilter(!showListFilter);
    }
    const currencies = [
        {
            value: 'Price',
            label: 'Price',
        },
        {
            value: 'EUR',
            label: 'ALL',
        },
    ];
      useEffect(()=>{
        dispatch(fetchCars());
      },[dispatch])
      return (
        <>
        {
          SizeScreen_767 ? 
          <AirportFilterMedia hundlerBtnFilter={hundlerBtnFilter} showListFilter={showListFilter}
          currencies={currencies}
          CustomMenuItem ={CustomMenuItem}
          hundlerSort={hundlerSort}
          setselectedvalueLocation={setselectedvalueLocation}
          setselectedvalueStars={setselectedvalueStars}
          getvalue={getvalue}
          setactiveSelected = {setactiveSelected}
          setactiveSelectedStars={setactiveSelectedStars}
          setselectedCarPrand={setselectedCarPrand}
          setselectedvalueCarPrand={setselectedvalueCarPrand}
          oneValueStars={oneValueStars}
          activeSelected={activeSelected}
          records={records}
          selectedvalueLocation={selectedvalueLocation}
          defaultValue={defaultValue} 
          highestValueStars={highestValueStars}
          selectedvalueStars={selectedvalueStars} 
          selectedvalueCarPrand={selectedvalueCarPrand}
          activeSelectedStars={activeSelectedStars} 
          selectedCarPrand={selectedCarPrand}
          openLocationFromHome={openLocationFromHome}
          />
          : 
          openLocationFromHome ?
          <AirportFilterFomat hundlerBtnFilter={hundlerBtnFilter} showListFilter={showListFilter}
          currencies={currencies}
          CustomMenuItem ={CustomMenuItem}
          hundlerSort={hundlerSort}
          setselectedvalueLocation={setselectedvalueLocation}
          setselectedvalueStars={setselectedvalueStars}
          getvalue={getvalue}
          setactiveSelected = {setactiveSelected}
          setactiveSelectedStars={setactiveSelectedStars}
          setselectedCarPrand={setselectedCarPrand}
          setselectedvalueCarPrand={setselectedvalueCarPrand}
          oneValueStars={oneValueStars}
          activeSelected={activeSelected}
          records_L={records_L}
          selectedvalueLocation={selectedvalueLocation}
          defaultValue={defaultValue} 
          highestValueStars={highestValueStars}
          selectedvalueStars={selectedvalueStars} 
          selectedvalueCarPrand={selectedvalueCarPrand}
          activeSelectedStars={activeSelectedStars} 
          selectedCarPrand={selectedCarPrand} 
          openLocationFromHome={openLocationFromHome} records_L_Location={records_L_Location}
          nameLocation={nameLocation}
          />

          :

          <AirportFilterFomat hundlerBtnFilter={hundlerBtnFilter} showListFilter={showListFilter}
          currencies={currencies}
          CustomMenuItem ={CustomMenuItem}
          hundlerSort={hundlerSort}
          setselectedvalueLocation={setselectedvalueLocation}
          setselectedvalueStars={setselectedvalueStars}
          getvalue={getvalue}
          setactiveSelected = {setactiveSelected}
          setactiveSelectedStars={setactiveSelectedStars}
          setselectedCarPrand={setselectedCarPrand}
          setselectedvalueCarPrand={setselectedvalueCarPrand}
          oneValueStars={oneValueStars}
          activeSelected={activeSelected}
          records={records}
          selectedvalueLocation={selectedvalueLocation}
          defaultValue={defaultValue} 
          highestValueStars={highestValueStars}
          selectedvalueStars={selectedvalueStars} 
          selectedvalueCarPrand={selectedvalueCarPrand}
          activeSelectedStars={activeSelectedStars} 
          selectedCarPrand={selectedCarPrand} loading={loading}
          />
        }

        </>
    )
}

export default AirportFilterPage