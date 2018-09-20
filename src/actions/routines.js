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

export const fetchRoutines = () => (dispatch, getState) => {
  dispatch(fetchRoutinesRequest());
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/routines`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
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

export const addRoutine = (routine) => (dispatch, getState) => {
  dispatch(addRoutineRequest());
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/routines`, {
    method: 'POST',
    body: JSON.stringify(routine),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then((routine) => {
    dispatch(addRoutineSuccess(routine));
  }).catch(err => {
    dispatch(addRoutineError(err));
  });
};

export const UPDATE_ROUTINE_REQUEST = 'UPDATE_ROUTINE_REQUEST';
export const updateRoutineRequest = () => ({
  type: UPDATE_ROUTINE_REQUEST
});

export const UPDATE_ROUTINE_SUCCESS = 'UPDATE_ROUTINE_SUCCESS';
export const updateRoutineSuccess = (routine) => ({
  type: UPDATE_ROUTINE_SUCCESS,
  routine
});

export const UPDATE_ROUTINE_ERROR = 'UPDATE_ROUTINE_ERROR';
export const updateRoutineError = (error) => ({
  type: UPDATE_ROUTINE_ERROR,
  error
});

export const updateRoutine = (routine, id) => (dispatch, getState) => {
  dispatch(updateRoutineRequest());
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/routines/${id}`, {
    method: 'PUT',
    body: JSON.stringify(routine),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then((routine) => {
    dispatch(updateRoutineSuccess(routine));
  }).catch(err => {
    dispatch(updateRoutineError(err));
  })
};

export const DELETE_ROUTINE_REQUEST = 'DELETE_ROUTINE_REQUEST';
export const deleteRoutineRequest = () => ({
  type: DELETE_ROUTINE_REQUEST
});

export const DELETE_ROUTINE_SUCCESS = 'DELETE_ROUTINE_SUCCESS';
export const deleteRoutineSuccess = (id) => ({
  type: DELETE_ROUTINE_SUCCESS,
  id
});

export const DELETE_ROUTINE_ERROR = 'DELETE_ROUTINE_ERROR';
export const deleteRoutineError = (error) => ({
  type: DELETE_ROUTINE_ERROR,
  error
});

export const deleteRoutine = (id) => (dispatch, getState) => {
  dispatch(deleteRoutineRequest());
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/routines/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    dispatch(deleteRoutineSuccess(id));
  })
  .catch(err => {
    dispatch(deleteRoutineError(err));
  })
}

export const TOGGLE_ADD_ROUTINE_FORM = 'TOGGLE_ADD_ROUTINE_FORM';
export const toggleAddRoutineForm = () => ({
  type: TOGGLE_ADD_ROUTINE_FORM
});

export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
export const toggleEditMode = (id) => ({
  type: TOGGLE_EDIT_MODE,
  id
});

export const TOGGLE_EXPANDED = 'TOGGLE_EXPANDED';
export const toggleExpanded = (id) => ({
  type: TOGGLE_EXPANDED,
  id
});

export const ROUTINES_FILTER = 'ROUTINES_FILTER';
export const routinesFilter = (filter) => ({
  type: ROUTINES_FILTER,
  filter
});