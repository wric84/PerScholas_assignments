import React, {useState} from 'react'
import Failure from './Failure'
import Success from './Success'
import Home from './Home'
import App from './App'

let ogUserName = 'colton'
let ogPassword = 'isCool'

const Login = (props) =>{
    const[username, setUserName] = useState('')
    const[password, setPassword] = useState('')
    const[login, setLogin] = useState('')

    const handleChange = (e) =>{
        setUserName(e.target.value)
    }

    const handleChange1 = (e) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(props)
        if(username === ogUserName && password === ogPassword){
            setLogin(<Success username={ogUserName} setNavState={props.setNavState}/>)
            
        }else{
            setLogin(<Failure/>)
            // console.log(username)
            // console.log(password)
            // console.log(props.username)
            // console.log(props.password)
        }
    }
    return(
        <div>
            <div>{login}</div>
            <h3>Login Page</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input onChange={handleChange} type="text" name='username'/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange1} type="password" name='password'/>
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
export default Login