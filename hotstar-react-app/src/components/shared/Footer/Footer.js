// Functional comp with Anonymous Function 
import React from 'react';
import Menu from '../Menu';
import './Footer.css'; 

const Footer = function(){

  let copyrightYear = 2022;

  return(
    <div className='text-center'>
      <hr />
      <Menu />
      <p className='copyrightText'>Copyright {copyrightYear} | Arun</p>
    </div>
  )
}

export default Footer;

