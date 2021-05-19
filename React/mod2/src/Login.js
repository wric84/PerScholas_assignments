import React, {useState} from 'react'
import Failure from './Failure'
import Success from './Success'

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
        if(username === props.username && password === props.password){
            setLogin(<Success username={props.username}/>)
        }else{
            setLogin(<Failure/>)
        }
    }
    return(
        <div>
            <div>{login}</div>
            <h3>Login Page</h3>
            <form onClick={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input onChange={handleChange} type="text" name='username'/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange1} type="password" name='password'/>
                </div>
                <button onSubmit='handleSubmit' type='submit'>Login</button>
            </form>
        </div>
    )
}
export default Login