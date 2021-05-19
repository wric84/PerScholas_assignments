import './App.css';
import Review from './Review'
import {useState} from 'react'
import Average from './Average'
import Navigation from './Navigation'
import Websitevisit from './Webvisit'
import Sentiment from './Sentiment'

function App() {
  const [count, setCount] = useState(0)
  const [totalCount, setTotalCount] = useState(1)
  return (
    <div className='grid-container'>
        <Navigation />
        <Review setCount = {setCount} setTotalCount = {setTotalCount} totalCount = {totalCount} count = {count} />
        <Average totalCount = {totalCount} count={count} />
        <Websitevisit visits = '1218'/>
        <Sentiment sentiment2='960' sentiment1='100'/>
    </div>
  );
}

export default App;
