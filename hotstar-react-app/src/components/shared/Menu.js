// Functional comp with Arrow Function
import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {

  const primaryMenus = [
    { id: 1, name: 'Home', url: '/'},
    { id: 2, name: 'HOC-Demo', url: '/hoc-demo'},
    { id: 3, name: 'About', url: '/about'},
    { id: 4, name: 'Support', url: '/support'},
  ]

  return(
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {
        primaryMenus.map( (menu) => {
          return(<MenuItem url={menu.url} name={menu.name} key={menu.id}/>)
        })
      }
    </ul>
  )
}

export default Menu;