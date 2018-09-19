import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { fetchRoutines, toggleEditMode, deleteRoutine } from '../actions/routines';
import NewRoutine from './new-routine';
import EditRoutineForm from './edit-routine-form';
import SearchBar from './search-bar';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class MyRoutines extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRoutines());
  }

  editRoutine(index) {
    console.log('editRoutine ran!');
    this.props.dispatch(toggleEditMode(index))
  }

  deleteRoutine(id) {
    this.props.dispatch(deleteRoutine(id));
  }

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render () {
    const routines = this.props.routines.map((routine, index) => {
      if (routine.editMode) {
        return <EditRoutineForm key={index} />
      }
      return (
        <li className="routine" key={index}>
          <span>{routine.title}</span>
          <p>Description/Notes: {routine.description}</p>
          <ul>
            <span>Exercises:</span>
            {routine.exercises.map((exercise, index) => (
              <li key={index}>
                <p>{exercise.name}</p>
                <span>Sets: {exercise.sets}</span>
                <span>Reps: {exercise.reps}</span>
              </li>
            ))}
          </ul>
          <ul>
            <span>Tags:</span>
            {routine.tags.map((tag, index) => (
              <li key={index}>
                #{tag.name}
              </li>
            ))}
          </ul>
          <button className="edit" onClick={() => this.editRoutine(index)}>Edit</button>
          <button className="delete" onClick={() => this.deleteRoutine(routine.id)}>Delete</button>
        </li>
      )
    });

    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button className="logout" onClick={() => this.logOut()}>Log out</button>
      );
    }

    return (
      <div className="MyRoutines">
        <h2>My Routines</h2>
        <div className="UserInfo">
          Welcome back, {this.props.name}!
        </div>
        {logOutButton}
        <NewRoutine />
        <SearchBar />
        <ul className ="Routines">
          {routines}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  routines: state.routine.routines,
  name: `${state.auth.currentUser.firstName}`,
  loggedIn: state.auth.currentUser !== null,
  filteredRoutines: state.routine.filteredRoutines
});

export default requiresLogin()(connect(mapStateToProps)(MyRoutines));