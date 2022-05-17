import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuItem = (props) => {

  return (
    <li className="nav-item">
      <NavLink to={props.url} className="nav-link" 
        aria-current="page" activeclassname="active">{props.name}</NavLink>
    </li>
  )
}

export default MenuItem