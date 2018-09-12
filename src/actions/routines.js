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
}
