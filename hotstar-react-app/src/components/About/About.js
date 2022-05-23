import React from 'react'
import Blog from './Blog'
import MyAccount from './MyAccount'
import Todos from './Todos'

const About = () => {

  return(
    <div>
      <h1>Hooks About</h1>
      <h2>useState() Hook Demo</h2>
      <MyAccount />

      <hr/>
      <h2>useEffect() Hook Demo</h2>
      <Blog />

      <hr/>
      <h2>useReducer() and useRef() Demo</h2>
      <Todos/>

    </div>
  )
  
}

export default About