import React, { useState } from 'react'
import Login from './Login'
import './Main.css';
import Signup from './Signup';
import  Icon from './img/screen.png';


const Main = () => {
    const [action,setAction]= useState("login")

    const handleClick = () => {
        setAction(action === 'login' ? 'signup' : 'login');
      };
      
      // Rest of your component code...

      
  return (
    <div className='main'>
        <div className="row gx-0">
            <div className="col-md-6  main-img d-flex align-items-start justify-content-center">
            <img className='instaimage w-50 m-4' src={Icon} alt='Insta logo' />

            </div>
            <div className="col-md-6  main-page ms-auto" >
                
                   
                {action === 'login' ? <Login/> : <Signup/> }
               
               
            </div>
        </div>
    </div>
  )
}

export default Main