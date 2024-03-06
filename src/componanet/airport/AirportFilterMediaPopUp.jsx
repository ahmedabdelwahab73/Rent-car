import { faArrowDownWideShort, faFilter, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { styled } from '@mui/system';

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledFormControl = styled(FormControl)({
    '& .MuiOutlinedInput-root': {
      borderRadius: '0.5rem', // Default border color
        '&.Mui-focused fieldset': {
        borderColor: 'rgb(21, 170, 190)', // Border color when focused
      },
    },
    '& .MuiInputLabel-root': {
      fontWeight: 'bolder', // Default label color
      '&.Mui-focused': {
        color: 'rgb(21, 170, 190)', // Label color when focused
      },
    },
    '& .MuiSelect-select': {
        paddingTop: '0.8rem', // Adjust top padding of the selected value
        paddingBottom: '0.8rem', // Adjust bottom padding of the selected value
        color: 'rgb(119, 126, 144)'
      },
  });
const AirportFilterMediaPopUp = ({setShowfilterpopup, setselectedvalueLocation,
        setactiveSelected, defaultValue, selectedvalueLocation, setactiveSelectedStars,
        setselectedvalueStars, selectedvalueStars, selectedvalueCarPrand,
        setselectedCarPrand, setselectedvalueCarPrand, CustomMenuItem,
        showSortpopup, setShowSortpopup, hundlerSort, currencies
        }) => {
    const hundlerChangeLocation = (e)=>{
        setselectedvalueLocation(e.target.value);
        setactiveSelected(true)        
    }
    const hundlerChangeStars = (e)=>{
        setselectedvalueStars(e.target.value.match(/\d+/g));
        setactiveSelectedStars(true)        
    }
    const hundlerChangeCarPrand = (e)=>{
        setselectedvalueCarPrand(e.target.value)
        setselectedCarPrand(true)
    }

    useEffect(() => {
        AOS.init({
            offset: 10,
            duration: 300,
            easing: 'ease-in-out',
        });
        AOS.refresh();
    }, []);
  return (
    <div className='filterpopup'  data-aos="zoom-in" data-aos-duration="10">
        {    
        showSortpopup ?
            <>
            <div className='filterpopup_head'>
            <div className='filterpopup_head__icon'
            >
                <FontAwesomeIcon icon={faArrowDownWideShort} />
                <span>sort</span>
            </div>
            <FontAwesomeIcon icon={faXmark} 
            onClick={()=> setShowSortpopup(false) }
            />
            </div>
            <div className='filterpopup_content pa-l'>
                <Box 
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%' },
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
            </>
        :
        <>
            <div className='filterpopup_head'>
                <div className='filterpopup_head__icon'
                >
                    <FontAwesomeIcon icon={faFilter} />
                    <span>filter</span>
                </div>
                <FontAwesomeIcon icon={faXmark} 
                onClick={()=> setShowfilterpopup(false) }
                />
            </div>
            <div className='filterpopup_content'>
                <StyledFormControl fullWidth >
                    <InputLabel id="demo-simple-select-label">Location</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedvalueLocation}
                        label={`${selectedvalueLocation}`}
                        onChange={hundlerChangeLocation}
                        variant="outlined"
                        >
                        <MenuItem value={defaultValue}>{`${defaultValue}`}</MenuItem>
                        <MenuItem value='Al Hofuf'>Al Hofuf</MenuItem>
                        <MenuItem value='Riyadh'>Riyadh</MenuItem>
                        <MenuItem value='Al Khobar'>Al Khobar</MenuItem>
                        <MenuItem value='Tabuk'>Tabuk</MenuItem>
                        <MenuItem value='Jazan'>JazanJazan</MenuItem>
                        <MenuItem value='ahmed'>ahmed</MenuItem>
                    </Select>
                </StyledFormControl>
                <StyledFormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedvalueStars}
                            label={selectedvalueStars}
                            onChange={hundlerChangeStars}
                        >
                            <MenuItem value='1'>Rating 1</MenuItem>
                            <MenuItem value='2'>Rating 2</MenuItem>
                            <MenuItem value='3'>Rating 3</MenuItem>
                            <MenuItem  value='4'>Rating 4</MenuItem>
                            <MenuItem value='5'>Rating 5</MenuItem>
                        </Select>
                </StyledFormControl>
                <StyledFormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Car Brand</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedvalueCarPrand}
                        label={`${selectedvalueCarPrand}`}
                        onChange={hundlerChangeCarPrand}
                        >
                        <MenuItem value={defaultValue}>{`${defaultValue}`}</MenuItem>
                        <MenuItem value='isuzu'>isuzu</MenuItem>
                        <MenuItem value='geely'>geely</MenuItem>
                        <MenuItem value='NISSAN SUNNY'>NISSAN SUNNY</MenuItem>
                        <MenuItem value='Toyota'>Toyota</MenuItem>
                    </Select>
                </StyledFormControl>
            </div>
        </>
        }
    </div>                          
  )
}

export default AirportFilterMediaPopUp