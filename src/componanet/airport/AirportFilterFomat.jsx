import { Box, TextField } from '@mui/material'
import React from 'react'
import TestAirportLocation from './TestAirportLocation'
import AirportAside from '../AirportAside';
import AirPortCheckedLocation from './AirPortCheckedLocation';
const AirportFilterFomat = ({hundlerBtnFilter, currencies, CustomMenuItem, oneValueStars,
     hundlerSort, getvalue, setselectedvalueStars, setactiveSelectedStars, showListFilter,
    setselectedvalueLocation, setselectedCarPrand, setselectedvalueCarPrand, activeSelected,
    setactiveSelected, records, selectedvalueLocation, defaultValue, selectedvalueStars,
    activeSelectedStars, selectedCarPrand, selectedvalueCarPrand, highestValueStars,
    records_L_Location ,openLocationFromHome, nameLocation, loading
    }) => {
        const AllDataRecords = records || records_L_Location
            activeSelected && selectedvalueLocation !== defaultValue 
            && records?.filter(item => item.location === selectedvalueLocation ).length === 0 && (
            getvalue = true
            )
    return (
        <>
        <div className='airportfilter_head'>
            <div className="airportfilter_head__icon"
            onClick={hundlerBtnFilter}
            >
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium muiltr-k5e0xz" focusable="false" viewBox="0 0 22 22" aria-hidden="true" width="22" height="22">
                    <path d="M16.5 4.58333H19.25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                    <path d="M2.75 4.58333H12.8333" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                    <path d="M9.1665 11H19.2498" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                    <path d="M2.75 11H5.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                    <path d="M16.5 17.4167H19.25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                    <path d="M2.75 17.4167H12.8333" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                    <path d="M15.9632 3.28697C16.6792 4.00293 16.6792 5.16374 15.9632 5.8797C15.2472 6.59566 14.0864 6.59566 13.3705 5.8797C12.6545 5.16374 12.6545 4.00293 13.3705 3.28697C14.0864 2.57101 15.2472 2.57101 15.9632 3.28697" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                    <path d="M8.6297 9.70366C9.34566 10.4196 9.34566 11.5804 8.6297 12.2964C7.91374 13.0123 6.75293 13.0123 6.03697 12.2964C5.32101 11.5804 5.32101 10.4196 6.03697 9.70366C6.75293 8.9877 7.91374 8.9877 8.6297 9.70366" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                    <path d="M15.9632 16.1203C16.6792 16.8363 16.6792 17.9971 15.9632 18.713C15.2472 19.429 14.0864 19.429 13.3705 18.713C12.6545 17.9971 12.6545 16.8363 13.3705 16.1203C14.0864 15.4044 15.2472 15.4044 15.9632 16.1203" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                </svg>
                <span>Filter</span>
            </div>
            <div className="airportfilter_head__filter">
                <p>Sort</p>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '20ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <div className='airportfilter_head_inp'>
                        <TextField
                        id="outlined-select-currency"
                        select
                        defaultValue="EUR"
                        sx={{
                            '& .MuiSelect-icon': {
                            right: 25, // Change the position of the icon to the right
                            },
                            '& .MuiOutlinedInput-root': {
                            borderRadius: 2.1, // Add border radius to the input field
                            '&:hover fieldset': {
                                borderColor: 'rgb(21, 170, 190)', // Change border color to red when hovered
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'rgb(21, 170, 190)', // Change border color to red when focused
                            },
                            },
                            '& .MuiMenu-list': {
                            borderRadius: 2.1, // Add border radius to the dropdown list (menu items)
                            },
                            '& .MuiList-root': {
                            borderRadius: 2.1, // Add border radius to the ul element
                            },
                        }}
                        >
                        {currencies.map((option) => (
                            <CustomMenuItem
                                key={option.value}
                                value={option.value}
                                onClick={() => hundlerSort(option.label)}
                                >
                                {option.label}
                            </CustomMenuItem>
                        ))}
                        </TextField>
                    </div>
                </Box>
            </div>
            </div>
            <section className='aiport'>
                <AirportAside setselectedvalueLocation={setselectedvalueLocation}
                setactiveSelected={setactiveSelected}
                getvalue={getvalue}
                setselectedvalueStars ={setselectedvalueStars}
                setactiveSelectedStars = {setactiveSelectedStars}
                setselectedCarPrand ={setselectedCarPrand}
                setselectedvalueCarPrand ={setselectedvalueCarPrand}
                oneValueStars={oneValueStars}
                showListFilter = {showListFilter} openLocationFromHome={openLocationFromHome}
                />
                <div className={`airportfilter flip-animation ${showListFilter ? `airportfilter--active` : ""}`}>
                    <div className="airportfilter_content">
                        <div className="airportfilter_content__mainslider">
                            
                            {
                            openLocationFromHome ?
                            (                               
                                <AirPortCheckedLocation activeSelected ={activeSelected} selectedvalueLocation={selectedvalueLocation}
                                defaultValue={defaultValue}
                                getvalue ={getvalue}
                                selectedvalueStars ={selectedvalueStars}
                                activeSelectedStars = {activeSelectedStars}
                                selectedCarPrand ={selectedCarPrand}
                                selectedvalueCarPrand ={selectedvalueCarPrand}
                                highestValueStars ={highestValueStars}
                                showListFilter={showListFilter} records_L_Location={records_L_Location}
                                nameLocation={nameLocation} openLocationFromHome ={openLocationFromHome}
                                />
                            )
                            :
                            (
                            getvalue ? <h1>Due to high demand in this area, all cars are taken, please try again later</h1> 
                            :
                            <TestAirportLocation activeSelected ={activeSelected} selectedvalueLocation={selectedvalueLocation}
                            defaultValue={defaultValue}
                            getvalue ={getvalue}
                            selectedvalueStars ={selectedvalueStars}
                            activeSelectedStars = {activeSelectedStars}
                            selectedCarPrand ={selectedCarPrand}
                            selectedvalueCarPrand ={selectedvalueCarPrand}
                            highestValueStars ={highestValueStars}
                            showListFilter={showListFilter} records={records} loading={loading}
                            />
                            )
                            
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AirportFilterFomat