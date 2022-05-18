import React from 'react'

const Calculator = (props) => {
  return (
    <div>
      <h2>Calculator</h2>
      {/* if you do not have calc fn inside props 
      this will break the whole app. Now we have error boundary to show the fallback UI*/}
      <p>{props.calc()}</p>
    </div>
  )
}

export default Calculator