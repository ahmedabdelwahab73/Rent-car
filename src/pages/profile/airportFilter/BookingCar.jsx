import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UseDataBooking from '../../../Hooks/Use-Data-Booking';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Rating, Switch, TextField, Typography, useMediaQuery } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCalendarDays, faCar, faChevronLeft, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BookingCarMedia from './BookingCarMedia';

const BookingCar = () => {
    const {loading, record, error} = UseDataBooking();
    const {name} = useParams();
    console.log(name);
    const navigate = useNavigate();
    const [checked, setChecked] = React.useState(false);
    const media_768 = useMediaQuery('(max-width : 768px)')
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    const label = { inputProps: { 'aria-label': 'controlled' } };
    const numOffer = (Number(record?.price) * Number(record?.offer)) / 100
    const totalAmount = numOffer + Number(record?.price) + 5;
  return (
    media_768 ?
      <BookingCarMedia record={record} loading={loading} error={error}
      handleChange={handleChange} checked ={checked} numOffer={numOffer}
      totalAmount={totalAmount}
      />
    :
      <section className='booking'>
        <div className='booking_top'>
          <div className='booking_top__head'>
            <Button variant="contained"
              onClick={()=> navigate(`${name ? `/city/${record?.location}` : '/airportFilter'}`)}
              >
              <FontAwesomeIcon icon={faChevronLeft} />
              Go Back
              </Button>
            <p>{record?.title}</p>
          </div>
          <div className='booking_top__information'>
            <div className='information_title'>
              <h1>{record?.title}</h1>
              <div className='information_content'>
                <p>
                  <FontAwesomeIcon icon={faCar} />
                  {record?.title}
                </p>
                <p>
                  <FontAwesomeIcon icon={faCalendarDays} />
                  {record?.year}
                </p>
              </div>
            </div>
            <div className='information_price'>
              <p>SAR {record?.price}</p>
              <Button variant="contained">
                Book This Car
                <FontAwesomeIcon icon={faBriefcase} />
                </Button>
            </div>
          </div>
          <div className='booking_top__content'>
            <img src={record?.image} alt={record?.title} />
            <div className='content_text'>
              <img src={record?.prandimage} alt={record?.prandtype} />
              <div className='content_stars'>
                <Rating
                  name="text-feedback"
                  value={Number(record?.stars)}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: '16px' }} />}
                  sx={{ fontSize: '16px' }}
                />
                <Box sx={{ ml: 0.5, fontSize: '11px', fontWeight: 'bold' }}>{record?.stars}</Box>
              </div>
              <p>SPECIAL OFFER</p>
            </div>
          </div>
        </div>
        <span></span>
        <div className='booking_bottom'>
          <div className='booking_bottom__carDetails'>
            <Accordion defaultExpanded style={{ margin: '0', background: 'transparent', boxShadow : 'none' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{background : 'rgb(119 126 144 / 10%)', borderRadius : '50%'}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography style={{fontSize : '1.5rem', fontWeight : "bolder"}}>Car details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                <div className='information_content'>
                  <p>
                    <FontAwesomeIcon icon={faCar} />
                    {record?.title}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    {record?.year}
                  </p>
                </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded style={{ margin: '0', background: 'transparent', boxShadow : 'none' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{background : 'rgb(119 126 144 / 10%)', borderRadius : '50%'}} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography >
                  <p className='available_services'>Available Services</p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className='services'>
                    <FontAwesomeIcon icon={faShareNodes} />
                    <p>Tamm Authorization Fees</p>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <aside>
            <h2>Booking Details</h2>
            <div className='aside_promoCode'>
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
            <Button variant="contained"
            onClick={()=> navigate('/login')}
            >Book This Car</Button>
          </aside>
        </div>  
      </section>
  )
}

export default BookingCar