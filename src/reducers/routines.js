import { 
  FETCH_ROUTINES_REQUEST, 
  FETCH_ROUTINES_SUCCESS, 
  FETCH_ROUTINES_ERROR,
  ADD_ROUTINE_REQUEST,
  ADD_ROUTINE_SUCCESS,
  ADD_ROUTINE_ERROR,
  TOGGLE_ADD_ROUTINE_FORM,
  TOGGLE_EDIT_MODE,
  DELETE_ROUTINE_REQUEST,
  DELETE_ROUTINE_SUCCESS,
  DELETE_ROUTINE_ERROR,
  UPDATE_ROUTINE_REQUEST,
  UPDATE_ROUTINE_SUCCESS,
  UPDATE_ROUTINE_ERROR,
  ROUTINES_FILTER
} from '../actions/routines';

const initialState = {
  routines: [],
  loading: false,
  error: null, 
  toggleAddRoutineForm: false,
  routineInEdit: null,
  filteredRoutines: []
}

export const routinesReducer = (state=initialState, action) => {
  if (action.type === FETCH_ROUTINES_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }

  else if (action.type === FETCH_ROUTINES_SUCCESS) {
    const routines = action.routines.map(routine => {
      return Object.assign({}, routine, {
        editMode: false
      });
    });

    return Object.assign({}, state, {
      routines,
      filteredRoutines: routines,
      loading: false
    });
  }

  else if (action.type === FETCH_ROUTINES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }

  else if (action.type === ROUTINES_FILTER) {
    const filteredRoutines = state.routines.filter(routine => routine.title.toLowerCase().includes(action.filter.toLowerCase()));
    return Object.assign({}, state, {
      filteredRoutines
    });
  }
  
  else if (action.type === TOGGLE_ADD_ROUTINE_FORM) {
    return Object.assign({}, state, {
      toggleAddRoutineForm: !state.toggleAddRoutineForm
    })
  }

  else if (action.type === ADD_ROUTINE_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }

  else if (action.type === ADD_ROUTINE_SUCCESS) {
    const newRoutine = Object.assign({}, action.routine, {
      editMode: false
    });

    return Object.assign({}, state, {
      loading: false,
      routines: [ ...state.routines, newRoutine],
      filteredRoutines: [...state.routines, newRoutine],
      toggleAddRoutineForm: false
    });
  }

  else if (action.type === ADD_ROUTINE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }

  else if (action.type === TOGGLE_EDIT_MODE) {
    let routineInEdit;
    const routines = state.routines.map((routine, index) => {
      if (index === action.index) {
        routine.editMode = true;
        routineInEdit = routine;
      }
      return routine;
    });

    return Object.assign({}, state, {
      routines,
      filteredRoutines: routines,
      routineInEdit
    });
  }

  else if (action.type === UPDATE_ROUTINE_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: false
    });
  }

  else if (action.type === UPDATE_ROUTINE_SUCCESS) {
    console.log('UPDATE_ROUTINE_SUCCESS RAN!');

    const updatedRoutine = Object.assign({}, action.routine, {
      editMode: false
    });

    const routines = state.routines.map(routine => routine.id === action.routine.id ? updatedRoutine : routine);
    console.log(routines);
    return Object.assign({}, state, {
      routines,
      filteredRoutines: routines,
      loading: false,
      routineInEdit: null
    });
  }

  else if (action.type === UPDATE_ROUTINE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
      routineInEdit: null
    });
  }

  else if (action.type === DELETE_ROUTINE_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  }

  else if (action.type === DELETE_ROUTINE_SUCCESS) {
    const routines = state.routines.filter((routine) => routine.id !== action.id);
    return Object.assign({}, state, {
      routines,
      filteredRoutines: routines,
      loading: false
    });
  }

  else if (action.type === DELETE_ROUTINE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }
  return state;
}