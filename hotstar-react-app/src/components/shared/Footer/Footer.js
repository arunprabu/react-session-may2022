// Functional comp with Anonymous Function 
import React from 'react';
import Menu from '../Menu';
import './Footer.css'; 

const Footer = function(){
  return(
    <div className='text-center'>
      <hr />
      <Menu />
      <p className='copyrightText'>Copyright 2022 | Arun</p>
    </div>
  )
}

export default Footer;

