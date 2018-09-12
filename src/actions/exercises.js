import { API_BASE_URL } from '../config';

export const ADD_EXERCISE_REQUEST = 'ADD_EXERCISE_REQUEST';
export const addExerciseRequest = () => ({
  type: ADD_EXERCISE_REQUEST
});

export const ADD_EXERCISE_SUCCESS = 'ADD_EXERCISE_SUCCESS';
export const addExerciseSuccess = (exercise) => ({
  type: ADD_EXERCISE_SUCCESS,
  exerciseId: exercise.id
});

export const ADD_EXERCISE_ERROR = 'ADD_EXERCISE_ERROR';
export const addExerciseError = (error) => ({
  type: ADD_EXERCISE_ERROR,
  error
});

export const addExercise = (exercise) => dispatch => {
  dispatch(addExerciseRequest());
  return fetch(`${API_BASE_URL}/api/exercises`, {
    method: 'POST',
    body: JSON.stringify(exercise),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(exercise => {
    dispatch(addExerciseSuccess(exercise));
  })
  .catch(err => {
    dispatch(addExerciseError(err));
  })
}

export const ADD_EXERCISE_FORM = 'ADD_EXERCISE_FORM';
export const addExerciseForm = (form) => ({
  type: ADD_EXERCISE_FORM,
  form
});