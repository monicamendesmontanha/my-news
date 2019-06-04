import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import TextPage from './components/TextPage';


const routing =  (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/TextPage/:item" component={TextPage} />
    </div>
  </Router>
)
ReactDOM.render(routing ,document.getElementById('root'));
serviceWorker.unregister();
