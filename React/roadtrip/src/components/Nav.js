import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap'

function Nav(){
  return(
    <div className="nav">
  <ReactBootStrap.Navbar bg="dark" variant="dark">
    <ReactBootStrap.Navbar.Brand href="#home">Roadtrip</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#features">Plan an Adventure</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">Log Out</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Form inline>
      <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactBootStrap.Button variant="outline-info">Search</ReactBootStrap.Button>
    </ReactBootStrap.Form>
  </ReactBootStrap.Navbar>
  <br />
  </div>
)}


// const Header = () =>{
//   return(
//   <nav className='nav'>
//     {/* <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink> */}
//     <NavLink to='/Home' activeClassName='is-active' exact={true}>Home</NavLink>
//     <br />
//     <NavLink to='/AttractionList' activeClassName='is-active' exact={true}>Find attraction</NavLink>
//     <br />
//     <NavLink to='/LocationList' activeClassName='is-active' exact={true}>Search By Location</NavLink>
//     <br />
//     <NavLink to='/Itenerary' activeClassName='is-active' exact={true}>Plan an Adventure</NavLink>
//     <br />
//     <NavLink to='/Logout' activeClassName='is-active' exact={true}>LogOut</NavLink>
//   </nav>
// )}

// const Nav = () => {
//     return (
//         <div>
//             <Header/>
//         </div>
//     )
// }

export default Nav