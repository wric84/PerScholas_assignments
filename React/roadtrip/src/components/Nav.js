import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Image } from "react-bootstrap"
import { deleteToken, deleteUser, login, logout } from "../redux/action";
import ExploreIcon from '@material-ui/icons/Explore';

const Navigation = () => {

    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector(s=>s);

    async function logoutScenario() {
      dispatch(logout());
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
            <Link to="/">
                <ExploreIcon
                style={{ color: "cyan", background: "rgb(56,56,56)", fontSize: "48px"}} />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                {
                    (
                        isLoggedIn && user.username?
                        [
                            <span className="nav-text p-2">Welcome back {user.username}</span>,
                            <Nav.Link className="nav-text">
                                <Link to="/" onClick={() => logoutScenario()}>
                                    Logout
                                </Link>
                             </Nav.Link>,
                        ]
                        :
                        [
                            <Nav.Link className="nav-text">
                                <Link to="/Signup">
                                    Signup
                                </Link>
                            </Nav.Link>,
                            <Nav.Link href="#login" className="nav-text">
                                <Link to="/Login">
                                    Login
                                </Link>
                            </Nav.Link>,
                        ]
                    )
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
}
  // return(
  //   <div className="nav">
  // <ReactBootStrap.Navbar bg="dark" variant="dark">
  //   <ReactBootStrap.Navbar.Brand href="#home">Roadtrip</ReactBootStrap.Navbar.Brand>
  //   <ReactBootStrap.Nav className="mr-auto">
  //     <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
  //     <ReactBootStrap.Nav.Link href="#features">Plan an Adventure</ReactBootStrap.Nav.Link>
  //     <ReactBootStrap.Nav.Link href="#pricing">Log Out</ReactBootStrap.Nav.Link>
  //   </ReactBootStrap.Nav>
  //   <ReactBootStrap.Form inline>
  //     <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
  //     <ReactBootStrap.Button variant="outline-info">Search</ReactBootStrap.Button>
  //   </ReactBootStrap.Form>
  // </ReactBootStrap.Navbar>
  // <br />
  // </div>
//)}


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

export default Navigation