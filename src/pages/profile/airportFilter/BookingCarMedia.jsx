import React from 'react'
import UseDataBooking from '../../../Hooks/Use-Data-Booking'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCarOn, faStar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { Box, Button, DialogActions, DialogContent, DialogTitle, IconButton, Radio, Switch, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
const BookingCarMedia = ({handleChange, checked, label, numOffer, totalAmount}) => {
    const {loading, record, error} = UseDataBooking();
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className='bookingmedia'>
            <FontAwesomeIcon icon={faArrowLeft} 
            onClick={()=> navigate('/airportFilter')}
            />
            <div className='bookingmedia_image'>
                <img src={record?.image} alt={record?.title} />
            </div>
            <div className='bookingmedia_content'>
                <div className='bookingmedia_content__car'>
                    <div className='car_head'>
                        <h1>{record?.title} {record?.year}</h1>
                        <p>{record?.price} <span>SAR/Day</span></p>
                    </div>
                    <div className='car_prand'>
                        <img src={record?.prandimage} alt={record?.prandtype} />
                        <p>Road Lights Car Rental</p>
                        <p className='car_prand_stars'>
                            <FontAwesomeIcon icon={faStar} />
                            {record?.stars}
                        </p>
                    </div>
                    <div className='car_kilo'>
                        <FontAwesomeIcon icon={faCarOn} />
                        <p>{record?.kilo} KM a day </p>
                    </div>
                </div>
                <div className='content_telgani'>
                    <div className='content_telgani__text'>
                        <span>Telgani Guarantee</span>
                        <p>We guarantee your booking with the best prices, if get a better price we offer you a discount</p>
                    </div>
                    <div className='content_telgani__btn'>
                        <Button variant="outlined" onClick={handleClickOpen}>
                            Learn More
                        </Button>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                    <DialogTitle sx={{ m: 0, p: 2, textAlign : 'center' }} id="customized-dialog-title">
                        Telgani Guarantee
                    </DialogTitle>
                    <div className='content_telgani__popup'>
                        <DialogContent style={{display: 'flex', flexDirection: 'column', gap : '2rem'}} dividers>
                            <Typography gutterBottom>
                                <div className='popup_text'>
                                    <span>We guarantee your reservation</span>
                                    <p>
                                        If the car you received is different from
                                        the one you chose, or if the delivery is delayed,
                                        you have a free day.
                                    </p>
                                </div>
                            </Typography> 
                            <Typography gutterBottom>
                                <div className='popup_text'>
                                    <span>
                                        We guarantee the best price
                                    </span>
                                    <p>
                                        If you book with us and then find a lower price
                                        with others, you will have a 20% discount on your
                                        reservation.
                                    </p>
                                </div>
                            </Typography>
                            <Typography gutterBottom>
                                <div className='popup_text'>
                                    <span>
                                        We guarantee cleanliness
                                    </span>
                                    <p>
                                        If the car arrives at an unsatisfactory level,
                                        we offer it Reserve an alternative with the same
                                        specifications or better.
                                    </p>
                                </div>
                            </Typography>
                        </DialogContent>
                    </div>
                    <DialogActions style={{padding: '1.5rem'}}>
                        <Button autoFocus onClick={handleClose}
                        style={{borderRadius: '2rem', width : '90%', margin: '0px auto', background: 'rgb(21, 170, 190)',
                        padding : '0.7rem', color: 'white', textTransform : 'capitalize', fontWeight : "bolder",
                        fontSize : '1.1rem'
                        }}
                        >
                            Close
                        </Button>
                    </DialogActions>
                    </BootstrapDialog>
                </div>
                <div className='content_filter'>
                        <h2>Insurance Type</h2>
                    <div className='filter_insurance'>
                        <Radio
                        checked
                        value="a"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                        style={{color: "rgb(21, 170, 190)", padding: '0px'}}
                        />
                        <div className='filter_insurance_text'>
                            <span>Full insurance with detectable</span>
                            <p>in the case of accident, God forbid</p>
                        </div>
                    </div>
                </div>
                <div className='content_filter'>
                        <h2>Return Options</h2>
                    <div className='filter_insurance'>
                        <Radio
                        checked
                        value="a"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                        style={{color: "rgb(21, 170, 190)", padding: '0px'}}
                        />
                        <div className='filter_insurance_text'>
                            <span>Delivery to the nearest branch</span>
                            <p>Once you finished the rental period you can return the car by yourself to the nearest branch</p>
                        </div>
                    </div>
                </div>
                <div className='aside_promoCode bookingmedia_content__promo'>
                    <div className='promoCode_label'>
                        <Switch  {...label} size="small" 
                        checked={checked}
                        onChange={handleChange}
                        sx={{
                            '& .MuiSwitch-thumb': {
                            backgroundColor: 'white', 
                            },
                            '& .MuiSwitch-track': {
                            backgroundColor: 'rgb(21, 170, 190)', 
                            },
                            
                        }}
                        />
                        <p>Do you Have a promo code?</p>
                    </div>
                    <div className={`promoCode_acourding ${checked ? '' : 'promoCode_acourding--active'}`}> 
                    <Box
                        sx={{
                        width: 500,
                        maxWidth: '100%',
                        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'red', // Change border color to red when focused
                        },
                        }}
                    >
                    <TextField
                            fullWidth
                            label="Enter Your Code"
                            id="fullWidth"
                            sx={{
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgb(21, 170, 190)', // change border color to red when focused
                                },
                            },
                            '& .MuiFormLabel-root' :{
                                color : 'rgb(119, 126, 144)',
                                fontSize : '0.8rem',
                                '&.Mui-focused': {
                                color: 'rgb(21, 170, 190)'
                                },
                            },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiFormLabel-root': {
                                color: 'red', // change label color when focused
                            },
                            '& .MuiInputBase-input' :{
                                padding: '10px',
                            },
                            }}
                        />            
                    </Box>
                    </div>
                </div>
                <div className='aside_priceDetails'>
                    <h2>Price Details</h2>
                    <div className='priceDetails_content'>
                        <div>
                        <p>Car rental value /Month</p>
                        <p className='content_number'>{record?.price} SAR</p>
                        </div>
                        <div>
                        <p>Tamm Authorization Fees</p>
                        <p className='content_number'>5 SAR</p>
                        </div>
                        <div>
                        <p>Vat {record?.offer}%</p>
                        <p className='content_number'>{numOffer}</p>
                        </div>
                        <div className='content_total'>
                            <p>Total Amount</p>
                            <p>{totalAmount} SAR</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingCarMedia