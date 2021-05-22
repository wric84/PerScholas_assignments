import Login from './Login'
import Home from './Home'
import Nav from './Nav'
import Header from './Home'
import {ifLogin} from './App'
import { BrowserRouter as Route, useHistory} from "react-router-dom";
import React from 'react'

const Success = (props) =>{
    let history = useHistory();

  const changeUrl=()=> {
    history.push("/Nav");
    // ifLogin = true
    props.setNavState(true)
  }

    return(
            <div>
                <h3>Welcome, {props.username}</h3>
                {/* <NavLink/> */}
                {/* <Header/> */}
                <Route path='/Nav' component={Nav}/>
                <button type="button" onClick={changeUrl}>Home Page</button>
            </div>
    )
}
export default Success