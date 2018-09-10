import { FETCH_ROUTINES_REQUEST, FETCH_ROUTINES_SUCCESS, FETCH_ROUTINES_ERROR } from '../actions/routines';

const initialState = {
  routines: [],
  loading: false,
  error: null
}

export const routinesReducer = (state=initialState, action) => {
  if (action.type === FETCH_ROUTINES_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }

  else if (action.type === FETCH_ROUTINES_SUCCESS) {
    return Object.assign({}, state, {
      routines: action.routines,
      loading: false
    });
  }

  else if (action.type === FETCH_ROUTINES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }
  return state;
}