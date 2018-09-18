import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
// import { exerciseReducer } from './reducers/exercises (defunct)';
import { routinesReducer } from './reducers/routines';
//import { exerciseReducer } from './reducers/exercises';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducers/auth';
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(
  combineReducers({
    routine: routinesReducer,
    form: formReducer,
    auth: authReducer
  }),
  applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
// export default createStore(routinesReducer, applyMiddleware(thunk));