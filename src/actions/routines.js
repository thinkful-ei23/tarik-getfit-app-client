import { API_BASE_URL } from '../config';

export const FETCH_ROUTINES_REQUEST = 'FETCH_ROUTINES_REQUEST';
export const fetchRoutinesRequest = () => ({
  type: FETCH_ROUTINES_REQUEST
});

export const FETCH_ROUTINES_SUCCESS = 'FETCH_ROUTINES_SUCCESS';
export const fetchRoutinesSuccess = (routines) => ({
  type: FETCH_ROUTINES_SUCCESS,
  routines
});

export const FETCH_ROUTINES_ERROR = 'FETCH_ROUTINES_ERROR';
export const fetchRoutinesError = (error) => ({
  type: FETCH_ROUTINES_ERROR,
  error
});

export const fetchRoutines = () => dispatch => {
  dispatch(fetchRoutinesRequest());
  fetch(`${API_BASE_URL}/api/routines`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(routines => {
    dispatch(fetchRoutinesSuccess(routines));
  }).catch(err => {
    dispatch(fetchRoutinesError(err));
  })
};

export const ADD_ROUTINE_REQUEST = 'ADD_ROUTINE_REQUEST';
export const addRoutineRequest = () => ({
  type: ADD_ROUTINE_REQUEST
});

export const ADD_ROUTINE_SUCCESS = 'ADD_ROUTINE_SUCCESS';
export const addRoutineSuccess = (routine) => ({
  type: ADD_ROUTINE_SUCCESS,
  routine
});

export const ADD_ROUTINE_ERROR = 'ADD_ROUTINE_ERROR';
export const addRoutineError = (error) => ({
  type: ADD_ROUTINE_ERROR,
  error
});

export const addRoutine = (routine) => dispatch => {
  dispatch(addRoutineRequest());
  fetch(`${API_BASE_URL}/api/routines`, {
    method: 'POST',
    body: JSON.stringify(routine),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then((routine) => {
    console.log(routine);
    dispatch(addRoutineSuccess(routine));
  })
  .catch(err => {
    dispatch(addRoutineError(err));
  });
};