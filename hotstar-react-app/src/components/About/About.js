import React, { useState } from 'react'
import Blog from './Blog'
import MyAccount from './MyAccount'

const About = () => {

  return(
    <div>
      <h1>Hooks About</h1>
      <h2>useState() Hook Demo</h2>
      <MyAccount />

      <hr/>
      <h2>useEffect() Hook Demo</h2>
      <Blog />

    </div>
  )
  
}

export default About