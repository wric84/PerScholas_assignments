import Nav from './Nav'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import {BrowserRouter as Router, Switch, Route} from 'react-dom'

function App2(){
    return(
        <Router>
        <div className='App'>
            <Nav/>
            <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Home" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Contact" component={Contact}/>
            </Switch>
        </div>
        </Router>
    )
}
export default App2