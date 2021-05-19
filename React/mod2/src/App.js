import React from 'react'
import Login from './Login'
import Nav from './Nav'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App(){
    return(
        <div>
          <div className='App'>
            <Login username='colton' password='isCool'/>
          </div>
          <Router>
          <div>
              <Nav/>
              <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/Home" component={Home}/>
              </Switch>
          </div>
          
          </Router>
        </div>
    )
}
export default App
