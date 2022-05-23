import React, { useState } from 'react'

const Company = (props) => {
  const [ company, setCompany ] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setCompany(event.target.value);
  }

  return (
    <div>
      <p data-testid="heading2">
        Welcome to My Company!!!
      </p>

      <p data-testid="companyNameEl">{props.name}</p>
      
      <input type="text" value={company} data-testid="companyNameInput" 
      onChange={handleChange}></input>
    </div>
  )
}

export const add = (a, b) => {
  return a + b;
};

export default Company