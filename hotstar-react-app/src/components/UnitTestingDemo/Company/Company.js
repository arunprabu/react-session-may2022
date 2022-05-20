import React from 'react'

const Company = (props) => {
  return (
    <div>
      <p data-testid="heading2">
        Welcome to My Company!
      </p>

      <p data-testid="companyNameEl">
        {props.name}</p>
    </div>
  )
}

export const add = (a, b) => {
  return a + b;
};

export default Company