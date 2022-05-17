// Functional comp with Arrow Function
import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {

  const primaryMenus = [
    { name: 'Home', url: '/'},
    { name: 'HOC-Demo', url: '/hoc-demo'},
    { name: 'About', url: '/about'},
    { name: 'Support', url: '/support'},
  ]

  return(
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {
        primaryMenus.map( (menu) => {
          return(<MenuItem url={menu.url} name={menu.name} />)
        })
      }
    </ul>
  )
}

export default Menu;