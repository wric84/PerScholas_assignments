import React, {useState, useEffect} from 'react'
import Login from './Login'
import Nav from './Nav'
import Flashcard from './flashcardList'
import Translate from './translate'
import Logout from './logout'
import FlashcardList from './flashcardList'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route, Link, NavLink, useHistory, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import PrivateRoute from './privateRoute'

function App(){
  const history =useHistory()
  const [navState, setNavState] = useState(false)
  const {isLogin} = useSelector(s=>s)

    const PageNotFound =()=>(
      <div>404! - <Link to='/'></Link></div>
    )
    useEffect(()=>{
    console.log(isLogin)
    },[])
    useEffect(()=>{
      console.log(isLogin)
    },[isLogin])
    return(
      <div className='App'>
          <Nav/>
          <Switch>
            <Route auth={isLogin} path="/Home" component={Home}/>
            <Route auth={isLogin} path="/flashcard" component={Flashcard}/>
            <Route auth={isLogin} path="/flashcardList" component={FlashcardList}/>
            <Route auth={isLogin} path='/translate' component={Translate}/>
            <Route path='/Login' component={Login}/>
            <Route auth={isLogin} path="/logout" component={Logout}/>
            <Route path="/" exact render={()=>{
              if(isLogin){
                return <Redirect to = '/Home'/>
              }else{
                return <Redirect to = '/Login'/>
              }
            }}/> 
            <Route component={PageNotFound}/>
          </Switch>
      </div>
    )
}
export default App
