import React from 'react';

// Internal Styling and also Inline styling 

const Subscription = () => {

  const myStyles = {
    paraStyle: {
      backgroundColor:'red', 
      color: 'yellow' 
    },
    btnStyle: {
      border: 'solid 1px red',
      backgroundColor: 'red',
      color: '#fff',
      padding: '10px 20px'
    }
  }

  return (
    <div className='text-center'>
      {/* External styling from index.css -- global css */}
      <h3 className="info">You are an active subscriber!</h3>

      {/* Inline styling -- Don't try this in loops */}
      <p style={ {backgroundColor: 'yellow', color: 'red'} }>Your Subscription Ends in 15 days</p>
      
      {/* Internal Styling  */}
      <p style={ myStyles.paraStyle }>Renew Now to get 50% offer. Apply coupon: OFFER50</p>
      <button type='button' style={ myStyles.btnStyle }>RENEW NOW!</button>
    </div>
  )
}

export default Subscription