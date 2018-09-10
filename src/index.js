import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyRoutines from './components/my-routines';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store}>
  <MyRoutines />
</Provider>, document.getElementById('root'));
registerServiceWorker();
