import { ADD_EXERCISE_REQUEST, ADD_EXERCISE_SUCCESS, ADD_EXERCISE_ERROR, ADD_EXERCISE_FORM } from '../actions/exercises';

const initialState = {
  exerciseForms: [],
  formsCount: 0,
  exercises: [],
  loading: false,
  error: null
}

export const exerciseReducer = (state=initialState, action) => {
  if (action.type === ADD_EXERCISE_FORM) {
    return Object.assign({}, state, {
      exerciseForms: [ ...state.exerciseForms, action.form]
    });
  }
  if (action.type === ADD_EXERCISE_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }

  else if (action.type === ADD_EXERCISE_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      exercises: [ ...state.exercises, action.exerciseId ]
    });
  }
  
  else if (action.type === ADD_EXERCISE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state;
}