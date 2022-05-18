import React from 'react'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = ({ name, url }) => { // destructuring props

  return (
    <li className="nav-item">
      <NavLink to={url} className="nav-link" 
        aria-current="page" activeclassname="active">{name}</NavLink>
    </li>
  )
}

MenuItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
}

export default MenuItem