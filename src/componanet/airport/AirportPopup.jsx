import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const AirportPopup = ({setairPortPopup,}) => {
    const HundlerClosePupup = ()=>{
        document.body.classList.remove('po-f');
        setairPortPopup(false)
    }
    const navigate = useNavigate();
    const Hundlerbtn = ()=>{
        HundlerClosePupup();
        navigate('/airportFilter')
    }
  return (
    <div  className='banner_dailyrent'>
    <div onClick={HundlerClosePupup} className='banner_dailyrent__overlay'></div>
    <div className='main_airport_menu'>
        <div className='airport_menu'>
            <FontAwesomeIcon onClick={HundlerClosePupup} icon={faXmark}/>
            <div className='airport_menu__icon'>
                <FontAwesomeIcon onClick={HundlerClosePupup} icon={faArrowLeft} />
                <h2>Select receive type</h2>
            </div>
            <div className='airport_content'>
                <Button onClick={Hundlerbtn} variant="outlined">
                    <div className='airport_content__icon'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium muiltr-vubbuv" focusable="false" viewBox="0 0 18 17" aria-hidden="true" width="18" height="17">
                            <path d="M7.66587 9.16699L5.2832 13.3367C5.22422 13.4399 5.22464 13.5667 5.28431 13.6695C5.34397 13.7723 5.45386 13.8356 5.57273 13.8356H6.69629C6.88861 13.8356 7.07157 13.7526 7.19822 13.6078L11.084 9.16699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M6.90385 10.5006H5.44293C4.72139 10.5006 4.01932 10.2666 3.44209 9.83365L1.66357 8.49976L2.33052 7.83282L1.66357 5.16504H3.66441L4.9983 7.16587H14.3355C15.4405 7.16587 16.3364 8.06168 16.3364 9.16671V9.16671C16.3364 9.90339 15.7391 10.5006 15.0025 10.5006H9.91701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M11.0844 7.16622L7.7822 3.39235C7.65555 3.24759 7.47257 3.16455 7.28023 3.16455H6.15668C6.03782 3.16455 5.92794 3.22784 5.86829 3.33065C5.80863 3.43346 5.8082 3.56025 5.86717 3.66346L7.86874 7.16622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                        </svg>
                    </div>
                    <div className="text">
                        <p>Jeddah International Airport</p>
                        <span>king Abdelaziz international airport Terminal</span>
                    </div>
                </Button>
                <Button  variant="outlined" onClick={Hundlerbtn}>
                    <div className='airport_content__icon'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium muiltr-vubbuv" focusable="false" viewBox="0 0 18 17" aria-hidden="true" width="18" height="17">
                            <path d="M7.66587 9.16699L5.2832 13.3367C5.22422 13.4399 5.22464 13.5667 5.28431 13.6695C5.34397 13.7723 5.45386 13.8356 5.57273 13.8356H6.69629C6.88861 13.8356 7.07157 13.7526 7.19822 13.6078L11.084 9.16699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M6.90385 10.5006H5.44293C4.72139 10.5006 4.01932 10.2666 3.44209 9.83365L1.66357 8.49976L2.33052 7.83282L1.66357 5.16504H3.66441L4.9983 7.16587H14.3355C15.4405 7.16587 16.3364 8.06168 16.3364 9.16671V9.16671C16.3364 9.90339 15.7391 10.5006 15.0025 10.5006H9.91701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M11.0844 7.16622L7.7822 3.39235C7.65555 3.24759 7.47257 3.16455 7.28023 3.16455H6.15668C6.03782 3.16455 5.92794 3.22784 5.86829 3.33065C5.80863 3.43346 5.8082 3.56025 5.86717 3.66346L7.86874 7.16622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                        </svg>
                    </div>
                    <div className="text">
                        <p>Jeddah International Airport</p>
                        <span>king Abdelaziz international airport Terminal</span>
                    </div>
                </Button>
                <Button variant="outlined" onClick={Hundlerbtn}>
                    <div className='airport_content__icon'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium muiltr-vubbuv" focusable="false" viewBox="0 0 18 17" aria-hidden="true" width="18" height="17">
                            <path d="M7.66587 9.16699L5.2832 13.3367C5.22422 13.4399 5.22464 13.5667 5.28431 13.6695C5.34397 13.7723 5.45386 13.8356 5.57273 13.8356H6.69629C6.88861 13.8356 7.07157 13.7526 7.19822 13.6078L11.084 9.16699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M6.90385 10.5006H5.44293C4.72139 10.5006 4.01932 10.2666 3.44209 9.83365L1.66357 8.49976L2.33052 7.83282L1.66357 5.16504H3.66441L4.9983 7.16587H14.3355C15.4405 7.16587 16.3364 8.06168 16.3364 9.16671V9.16671C16.3364 9.90339 15.7391 10.5006 15.0025 10.5006H9.91701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M11.0844 7.16622L7.7822 3.39235C7.65555 3.24759 7.47257 3.16455 7.28023 3.16455H6.15668C6.03782 3.16455 5.92794 3.22784 5.86829 3.33065C5.80863 3.43346 5.8082 3.56025 5.86717 3.66346L7.86874 7.16622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                        </svg>
                    </div>
                    <div className="text">
                        <p>Jeddah International Airport</p>
                        <span>king Abdelaziz international airport Terminal</span>
                    </div>
                </Button>
                <Button variant="outlined" onClick={Hundlerbtn}>
                    <div className='airport_content__icon'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium muiltr-vubbuv" focusable="false" viewBox="0 0 18 17" aria-hidden="true" width="18" height="17">
                            <path d="M7.66587 9.16699L5.2832 13.3367C5.22422 13.4399 5.22464 13.5667 5.28431 13.6695C5.34397 13.7723 5.45386 13.8356 5.57273 13.8356H6.69629C6.88861 13.8356 7.07157 13.7526 7.19822 13.6078L11.084 9.16699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M6.90385 10.5006H5.44293C4.72139 10.5006 4.01932 10.2666 3.44209 9.83365L1.66357 8.49976L2.33052 7.83282L1.66357 5.16504H3.66441L4.9983 7.16587H14.3355C15.4405 7.16587 16.3364 8.06168 16.3364 9.16671V9.16671C16.3364 9.90339 15.7391 10.5006 15.0025 10.5006H9.91701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M11.0844 7.16622L7.7822 3.39235C7.65555 3.24759 7.47257 3.16455 7.28023 3.16455H6.15668C6.03782 3.16455 5.92794 3.22784 5.86829 3.33065C5.80863 3.43346 5.8082 3.56025 5.86717 3.66346L7.86874 7.16622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                        </svg>
                    </div>
                    <div className="text">
                        <p>Jeddah International Airport</p>
                        <span>king Abdelaziz international airport Terminal</span>
                    </div>
                </Button>
                <Button variant="outlined" onClick={Hundlerbtn}>
                    <div className='airport_content__icon'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium muiltr-vubbuv" focusable="false" viewBox="0 0 18 17" aria-hidden="true" width="18" height="17">
                            <path d="M7.66587 9.16699L5.2832 13.3367C5.22422 13.4399 5.22464 13.5667 5.28431 13.6695C5.34397 13.7723 5.45386 13.8356 5.57273 13.8356H6.69629C6.88861 13.8356 7.07157 13.7526 7.19822 13.6078L11.084 9.16699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M6.90385 10.5006H5.44293C4.72139 10.5006 4.01932 10.2666 3.44209 9.83365L1.66357 8.49976L2.33052 7.83282L1.66357 5.16504H3.66441L4.9983 7.16587H14.3355C15.4405 7.16587 16.3364 8.06168 16.3364 9.16671V9.16671C16.3364 9.90339 15.7391 10.5006 15.0025 10.5006H9.91701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M11.0844 7.16622L7.7822 3.39235C7.65555 3.24759 7.47257 3.16455 7.28023 3.16455H6.15668C6.03782 3.16455 5.92794 3.22784 5.86829 3.33065C5.80863 3.43346 5.8082 3.56025 5.86717 3.66346L7.86874 7.16622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                        </svg>
                    </div>
                    <div className="text">
                        <p>Jeddah International Airport</p>
                        <span>king Abdelaziz international airport Terminal</span>
                    </div>
                </Button>
                <Button variant="outlined" onClick={Hundlerbtn}>
                    <div className='airport_content__icon'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium muiltr-vubbuv" focusable="false" viewBox="0 0 18 17" aria-hidden="true" width="18" height="17">
                            <path d="M7.66587 9.16699L5.2832 13.3367C5.22422 13.4399 5.22464 13.5667 5.28431 13.6695C5.34397 13.7723 5.45386 13.8356 5.57273 13.8356H6.69629C6.88861 13.8356 7.07157 13.7526 7.19822 13.6078L11.084 9.16699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M6.90385 10.5006H5.44293C4.72139 10.5006 4.01932 10.2666 3.44209 9.83365L1.66357 8.49976L2.33052 7.83282L1.66357 5.16504H3.66441L4.9983 7.16587H14.3355C15.4405 7.16587 16.3364 8.06168 16.3364 9.16671V9.16671C16.3364 9.90339 15.7391 10.5006 15.0025 10.5006H9.91701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M11.0844 7.16622L7.7822 3.39235C7.65555 3.24759 7.47257 3.16455 7.28023 3.16455H6.15668C6.03782 3.16455 5.92794 3.22784 5.86829 3.33065C5.80863 3.43346 5.8082 3.56025 5.86717 3.66346L7.86874 7.16622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                        </svg>
                    </div>
                    <div className="text">
                        <p>Jeddah International Airport</p>
                        <span>king Abdelaziz international airport Terminal</span>
                    </div>
                </Button>
                <Button variant="outlined" onClick={Hundlerbtn}>
                    <div className='airport_content__icon'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium muiltr-vubbuv" focusable="false" viewBox="0 0 18 17" aria-hidden="true" width="18" height="17">
                            <path d="M7.66587 9.16699L5.2832 13.3367C5.22422 13.4399 5.22464 13.5667 5.28431 13.6695C5.34397 13.7723 5.45386 13.8356 5.57273 13.8356H6.69629C6.88861 13.8356 7.07157 13.7526 7.19822 13.6078L11.084 9.16699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M6.90385 10.5006H5.44293C4.72139 10.5006 4.01932 10.2666 3.44209 9.83365L1.66357 8.49976L2.33052 7.83282L1.66357 5.16504H3.66441L4.9983 7.16587H14.3355C15.4405 7.16587 16.3364 8.06168 16.3364 9.16671V9.16671C16.3364 9.90339 15.7391 10.5006 15.0025 10.5006H9.91701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M11.0844 7.16622L7.7822 3.39235C7.65555 3.24759 7.47257 3.16455 7.28023 3.16455H6.15668C6.03782 3.16455 5.92794 3.22784 5.86829 3.33065C5.80863 3.43346 5.8082 3.56025 5.86717 3.66346L7.86874 7.16622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                        </svg>
                    </div>
                    <div className="text">
                        <p>Jeddah International Airport</p>
                        <span>king Abdelaziz international airport Terminal</span>
                    </div>
                </Button>
                <Button variant="outlined" onClick={Hundlerbtn}>
                    <div className='airport_content__icon'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium muiltr-vubbuv" focusable="false" viewBox="0 0 18 17" aria-hidden="true" width="18" height="17">
                            <path d="M7.66587 9.16699L5.2832 13.3367C5.22422 13.4399 5.22464 13.5667 5.28431 13.6695C5.34397 13.7723 5.45386 13.8356 5.57273 13.8356H6.69629C6.88861 13.8356 7.07157 13.7526 7.19822 13.6078L11.084 9.16699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M6.90385 10.5006H5.44293C4.72139 10.5006 4.01932 10.2666 3.44209 9.83365L1.66357 8.49976L2.33052 7.83282L1.66357 5.16504H3.66441L4.9983 7.16587H14.3355C15.4405 7.16587 16.3364 8.06168 16.3364 9.16671V9.16671C16.3364 9.90339 15.7391 10.5006 15.0025 10.5006H9.91701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M11.0844 7.16622L7.7822 3.39235C7.65555 3.24759 7.47257 3.16455 7.28023 3.16455H6.15668C6.03782 3.16455 5.92794 3.22784 5.86829 3.33065C5.80863 3.43346 5.8082 3.56025 5.86717 3.66346L7.86874 7.16622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                        </svg>
                    </div>
                    <div className="text">
                        <p>Jeddah International Airport</p>
                        <span>king Abdelaziz international airport Terminal</span>
                    </div>
                </Button>
                <Button variant="outlined" onClick={Hundlerbtn}>
                    <div className='airport_content__icon'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium muiltr-vubbuv" focusable="false" viewBox="0 0 18 17" aria-hidden="true" width="18" height="17">
                            <path d="M7.66587 9.16699L5.2832 13.3367C5.22422 13.4399 5.22464 13.5667 5.28431 13.6695C5.34397 13.7723 5.45386 13.8356 5.57273 13.8356H6.69629C6.88861 13.8356 7.07157 13.7526 7.19822 13.6078L11.084 9.16699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M6.90385 10.5006H5.44293C4.72139 10.5006 4.01932 10.2666 3.44209 9.83365L1.66357 8.49976L2.33052 7.83282L1.66357 5.16504H3.66441L4.9983 7.16587H14.3355C15.4405 7.16587 16.3364 8.06168 16.3364 9.16671V9.16671C16.3364 9.90339 15.7391 10.5006 15.0025 10.5006H9.91701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M11.0844 7.16622L7.7822 3.39235C7.65555 3.24759 7.47257 3.16455 7.28023 3.16455H6.15668C6.03782 3.16455 5.92794 3.22784 5.86829 3.33065C5.80863 3.43346 5.8082 3.56025 5.86717 3.66346L7.86874 7.16622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                        </svg>
                    </div>
                    <div className="text">
                        <p>Jeddah International Airport</p>
                        <span>king Abdelaziz international airport Terminal</span>
                    </div>
                </Button>
                <Button variant="outlined" onClick={Hundlerbtn}>
                    <div className='airport_content__icon'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium muiltr-vubbuv" focusable="false" viewBox="0 0 18 17" aria-hidden="true" width="18" height="17">
                            <path d="M7.66587 9.16699L5.2832 13.3367C5.22422 13.4399 5.22464 13.5667 5.28431 13.6695C5.34397 13.7723 5.45386 13.8356 5.57273 13.8356H6.69629C6.88861 13.8356 7.07157 13.7526 7.19822 13.6078L11.084 9.16699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M6.90385 10.5006H5.44293C4.72139 10.5006 4.01932 10.2666 3.44209 9.83365L1.66357 8.49976L2.33052 7.83282L1.66357 5.16504H3.66441L4.9983 7.16587H14.3355C15.4405 7.16587 16.3364 8.06168 16.3364 9.16671V9.16671C16.3364 9.90339 15.7391 10.5006 15.0025 10.5006H9.91701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                            <path d="M11.0844 7.16622L7.7822 3.39235C7.65555 3.24759 7.47257 3.16455 7.28023 3.16455H6.15668C6.03782 3.16455 5.92794 3.22784 5.86829 3.33065C5.80863 3.43346 5.8082 3.56025 5.86717 3.66346L7.86874 7.16622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            </path>
                        </svg>
                    </div>
                    <div className="text">
                        <p>Jeddah International Airport</p>
                        <span>king Abdelaziz international airport Terminal</span>
                    </div>
                </Button>
            </div>
        </div>
    </div>
</div> 
  )
}

export default AirportPopup