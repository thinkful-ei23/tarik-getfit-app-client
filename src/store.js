import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { routinesReducer } from './reducers/routines';

export default createStore(routinesReducer, applyMiddleware(thunk));