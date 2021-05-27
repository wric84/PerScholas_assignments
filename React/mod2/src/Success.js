import Login from './Login'
import Home from './Home'
import Nav from './Nav'
import Header from './Home'
import {ifLogin} from './App'
import { BrowserRouter as Route, useHistory, Redirect} from "react-router-dom";
import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {login} from './redux/actions'

const Success = (props) =>{
    let history = useHistory();
const dispatch = useDispatch()

  const changeUrl=()=> {
    history.push("/Nav");
    // ifLogin = true
    props.setNavState(true)
  }
  useEffect(()=>{
    dispatch(login())
  },[])

    return(
            <Redirect to = '/Home' />
    )
}
export default Success