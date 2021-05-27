import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'





const Header = () =>{
  return(
  <nav className='nav'>
    {/* <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink> */}
    <NavLink to='/Home' activeClassName='is-active' exact={true}>Home</NavLink>
    <br />
    <NavLink to='/flashCard' activeClassName='is-active' exact={true}>Add FlashCard</NavLink>
    <br />
    <NavLink to='/translate' activeClassName='is-active' exact={true}>Translate</NavLink>
    <br />
    <NavLink to='/flashCardCategory' activeClassName='is-active' exact={true}>Practice</NavLink>
    <br />
    <NavLink to='/Logout' activeClassName='is-active' exact={true}>LogOut</NavLink>
  </nav>
)}

const Nav = () => {
    return (
        <div>
            <Header/>
        </div>
    )
}

export default Nav