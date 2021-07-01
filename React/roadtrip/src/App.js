
import './App.css';
import LocationList from './components/LocationList';
import React, {useState, useEffect} from 'react'
import Login from './components/Login'
import NewUser from './components/NewUser'
import Attraction from './components/Attraction'
import Navigation from './components/Nav'
import Logout from './components/Logout'
import Home from './components/Home'
import Itenerary from './components/Itenerary'
import AttractionList from './components/AttractionList';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, useHistory, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
// import GoogleDirections from './components/GoogleDirections'

// function App() {
//   return (
//     <div className="App">
//       <h1>First Location</h1>
//       <LocationList />
//     </div>
//   );
// }

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
          <Navigation/>
          <Switch>
            <Route auth={isLogin} path="/Home" component={Home}/>
            <Route auth={isLogin} path="/AttractionList" component={AttractionList}/>
            <Route auth={isLogin} path="/location/:id" render={(props)=><LocationList {...props}/>}/>
            <Route auth={isLogin} path="/attraction/:id" render={(props)=><Attraction {...props}/>}/>
            <Route auth={isLogin} path="/Itenerary" component={Itenerary}/>
            <Route path="/NewUser" component={NewUser} />
            <Route path='/Login' component={Login}/>
            <Route auth={isLogin} path="/Logout" component={Logout}/>
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

export default App;
