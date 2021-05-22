import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'





const Header = () =>{
  return(
  <header>
    {/* <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink> */}
    <NavLink to='/Nav' activeClassName='is-active' exact={true}>Home</NavLink>
    <br />
    <NavLink to='/flashCard' activeClassName='is-active' exact={true}>Add FlashCard</NavLink>
    <br />
    <NavLink to='/translate' activeClassName='is-active' exact={true}>Translate</NavLink>
    <br />
    <NavLink to='/flashCardCategory' activeClassName='is-active' exact={true}>Practice</NavLink>
    <br />
    <NavLink to='/logout' activeClassName='is-active' exact={true}>LogOut</NavLink>
    
  </header>
)}

const Nav = () => {
    return (
        <div>
            <Header/>
            <h3>Naviagte</h3>
            
        </div>
    )
}

export default Nav