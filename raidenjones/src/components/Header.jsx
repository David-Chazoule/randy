import React from 'react'
import city from "../img/city.png";
import sky from "../img/sky.png";

export default function Header() {
  return (
    <div className='header-container'>
    <img  className="city"src={city} alt=""/>
    <img src={sky} alt=""/>
    <h2>RAIDEN JONES</h2>


    </div>
  )
}
