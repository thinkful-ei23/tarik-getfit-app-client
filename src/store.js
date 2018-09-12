import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { exerciseReducer } from './reducers/exercises';
import { routinesReducer } from './reducers/routines';
//import { exerciseReducer } from './reducers/exercises';
import { reducer as formReducer } from 'redux-form';

export default createStore(
  combineReducers({
    routine: routinesReducer,
    exerciseForm: formReducer,
    exercise: exerciseReducer
  }),
  applyMiddleware(thunk)
);
 
// export default createStore(routinesReducer, applyMiddleware(thunk));