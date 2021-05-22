import React from 'react'
import Nav from './Nav'
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'
import FlashCard from './flashCard'
import Translate from './translate'
import Logout from './logout'
import FlashCardCategory from './flashCardCategory'

const PageNotFound =()=>(
  <div>404! - <Link to='/'></Link></div>
)

const Home = () => {
    return (
        <div>
            <h3>Hello World</h3>
            <Login/>
        </div>
    )
}

export default Home
