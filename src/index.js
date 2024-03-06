import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './styles/main.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Routeloyalt from './routeloyalt/Routeloyalt';
import Errorpage from './pages/Errorpage';
import Login from './pages/Login';
import Verificationcode from './pages/Verificationcode';
import Signup from './pages/Signup';
import Profile from './pages/profile/Profile';
import { Provider } from 'react-redux';
import store from './state/Store';
import 'aos/dist/aos.css';
import AirportFilterPage from './pages/profile/airportFilter/AirportFilterPage';
import AirportFilterMediaPopUp from './componanet/airport/AirportFilterMediaPopUp';
import BookingCar from './pages/profile/airportFilter/BookingCar';
import HomeLocation from './componanet/HomeLocation';


const router = createBrowserRouter([
  {
    path: '/', 
    element : <Routeloyalt/>,
    errorElement : <Errorpage/>,
    children : [
      {index : true ,  element : <Home/>},
      {path : '/login' ,  element : <Login/>},
      {path : '/verificationcode' ,  element : <Verificationcode/>},
      {path : '/verificationcode/signup' ,  element : <Signup/>},
      {path : '/profile' ,  element : <Profile/>},
      // Airport Filter Cars
      {path : '/airportFilter', element : <AirportFilterPage/>},
      {path : '/airportFilter/booking/:id', element : <BookingCar/>},
      {path : '/city/:name', element : <HomeLocation/>},
      {path : '/city/:name/booking/:id', element : <BookingCar/>},
      // Dashboard login 
      {path : 'dashboard/login', element : <Signup/>},
    ]
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

reportWebVitals();
