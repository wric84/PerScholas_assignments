import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { BrowserRouter as Router} from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'
import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>, 
document.getElementById('root')
);


// npm i redux-devtools-extension