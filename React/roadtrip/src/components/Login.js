import React, {useState} from 'react'
import Failure from './Failure'
import Success from './Success'
import Home from './Home'
import {useDispatch} from 'react-redux'
import {login as loginAction} from '../redux/action'
import { BrowserRouter as Link } from "react-router-dom";
import NewUser from './NewUser'

let ogUserName = 'colton'
let ogPassword = 'isCool'

const Login = (props) =>{
    const[username, setUserName] = useState('')
    const[password, setPassword] = useState('')
    const[login, setLogin] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) =>{
        setUserName(e.target.value)
    }

    const handleChange1 = (e) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(props)
        if(username == ogUserName && password == ogPassword){
            console.log('Successfully Logged In')
            dispatch(loginAction())
            setLogin(<Success username={ogUserName} setNavState={props.setNavState}/>)
            
        }else{
            setLogin(<Failure/>)
        }
    }
    return(
        <div>
            <div>{login}</div>
            <h3>Welcome</h3>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input className='fixInput' onChange={handleChange} type="text" name='username'/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className='fixInput' onChange={handleChange1} type="password" name='password'/>
                </div>
                <button className='btn' type='submit'>Login</button>
            </form>
            <Link to="/NewUser"> New User?</Link>

        </div>
    )
}
export default Login
