import './App.css';
import Review from './Review'
import Average from './Average'
import Navigation from './Navigation'
import Websitevisit from './Webvisit'
import Sentiment from './Sentiment'

function App() {
  return (
    <div className='grid-container'>
        <Navigation />
        <Review review = '821' />
        <Average average = '4.6' />
        <Websitevisit visits = '1218'/>
        <Sentiment sentiment2='960' sentiment1='100'/>
    </div>
  );
}

export default App;
