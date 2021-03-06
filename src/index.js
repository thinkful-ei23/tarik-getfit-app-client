import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './float-grid.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
