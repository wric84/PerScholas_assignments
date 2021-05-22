import React, {useState} from 'react'
import Login from './Login'
import Nav from './Nav'
import FlashCard from './flashCard'
import Translate from './translate'
import Logout from './logout'
import FlashCardCategory from './flashCardCategory'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route, Link, NavLink, useHistory} from 'react-router-dom'

function App(){
  const history =useHistory()
  const [navState, setNavState] = useState(false)
  // useEffect(()=>{
  //   history.pushState("/Login")
  // },[])
    // const ifLogin =(e)=>{
    //   e.preventDefault()
    //   setNavState(true)
    // }

    // const changeUrl=()=>{
    //   history.push("/Login")
    // }
    const PageNotFound =()=>(
      <div>404! - <Link to='/'></Link></div>
    )

    return(
      <div className='App'>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Home" component={Home}/>
            <Route path="/flashCard" component={FlashCard}/>
            <Route path="/flashCardCategory" component={FlashCardCategory}/>
            <Route path="/translate" component={Translate}/>
            <Route path="/logout" component={Logout}/>
            <Route component={PageNotFound}/>
          </Switch>
        {/* <h1>FryskTaal</h1>
        <Route path='/Login'>
          <Login setNavState={setNavState}/>
        </Route>
        {navState ? <Nav/>:''}
        <button type='button' onClick={changeUrl}>Login</button> */}
      </div>
    )
}
export default App
