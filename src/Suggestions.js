import React from 'react'
import './Suggestion.css';
import { Avatar } from '@mui/material';

const Suggestions = () => {
  return (
    <div className='suggestion '>
         <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar ">
              <Avatar/>
            </span>
            <div className="username__info">
              <span className="username">MUTHULAKSHMI</span>
            </div>
          </div>
          <button className="follow__button">Switch</button>
        </div>

         <div className="suggestions__title ">
            <span>Suggested for you</span>
            <button className="seeall-btn">See All</button>
            </div>
      <div className="suggestions__usernames ">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar ">
              <Avatar>B</Avatar>
            </span>
            <div className="username__info">
              <span className="username">BENO_</span>
              <span className="relation">Follows you</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>H</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Hari_Gopal</span>
              <span className="relation">Suggested for you</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>M</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Magesh_Vari</span>
              <span className="relation">Suggested for you</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Ramesh</span>
              <span className="relation">Suggested for you</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
        
    
  )
}

export default Suggestions