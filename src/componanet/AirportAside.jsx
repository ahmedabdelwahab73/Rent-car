import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../state/PopularcarsSlice';

const AirportAside = ({setselectedvalueLocation, selectedvalue,
    setactiveSelected,setselectedvalueStars, setactiveSelectedStars,
    setselectedvalueCarPrand, setselectedCarPrand, oneValueStars, showListFilter,
    openLocationFromHome,}) => {
        const {records, loading, erorr} = useSelector((state) => state.popularCars);
        const mapRecordsTitle = records?.map((item,index)=>{
            return item.title
        })
        const oneValueTitle = [...new Set(mapRecordsTitle)]

        const dispatch = useDispatch();
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
    useEffect(()=>{
        dispatch(fetchCars());
        },[dispatch])
    return (
        <aside className={`aiport_menu ${showListFilter && 'showlistfilter'}`}>
            {    
            !openLocationFromHome &&        
            <div className="aiport_menu__head">
                <h3>Location</h3>
                <p>View All</p>
            </div>
            }
            <div className="aiport_menu__content">
                { 
                !openLocationFromHome &&
                <div className="content_countery">
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="SelectAll"
                            name="radio-buttons-group"
                            value={selectedvalue}
                            onChange={hundlerChangeLocation}
                            >
                            <FormControlLabel value="SelectAll" control={<Radio />} label="Select All" />
                            <FormControlLabel value="Al Hofuf" control={<Radio />} label="Al Hofuf" />
                            <FormControlLabel value="Riyadh" control={<Radio />} label="Riyadh" />
                            <FormControlLabel value="Al Khobar" control={<Radio />} label="Al Khobar" />
                            <FormControlLabel value="Tabuk" control={<Radio />} label="Tabuk" />
                            <FormControlLabel value="Jazan" control={<Radio />} label="Jazan" />
                        </RadioGroup>
                    </FormControl>
                </div>
                }
                <div className='content_rating'>
                    <h3>Rating</h3>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="SelectAll"
                            name="radio-buttons-group"
                            onChange={hundlerChangeStars}
                        >
                            {
                                oneValueStars?.map((numStar,index)=>{
                                    return <FormControlLabel key={index} value= {`Rating ${numStar}`} control={<Radio />} label={`Rating ${numStar}`} />
                                })
                            }
                            <FormControlLabel value="Rating 1" control={<Radio />} label="Rating 1" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="content_brand">
                    <h3>Car Brand</h3>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="SelectAll"
                            name="radio-buttons-group"
                            onChange={hundlerChangeCarPrand}
                        >
                            <FormControlLabel value="SelectAll" control={<Radio />} label="Select All" />
                            {
                                oneValueTitle?.map((item,index)=>{
                                    return <FormControlLabel key={index} value= {item} control={<Radio />} label={item} />
                                })
                            }
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </aside>
    )
}

export default AirportAside