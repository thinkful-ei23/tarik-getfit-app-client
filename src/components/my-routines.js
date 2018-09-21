import React from 'react';
import './my-routines.css';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { fetchRoutines, toggleEditMode, deleteRoutine, toggleExpanded } from '../actions/routines';
import NewRoutine from './new-routine';
import EditRoutineForm from './edit-routine-form';
import HelpPage from './help-page';
import SearchBar from './search-bar';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class MyRoutines extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRoutines());
  }

  editRoutine(id) {
    console.log('editRoutine ran!');
    this.props.dispatch(toggleEditMode(id))
  }

  viewExpanded(id) {
    console.log('toggleExpanded ran!');
    this.props.dispatch(toggleExpanded(id));
  }

  deleteRoutine(id) {
    this.props.dispatch(deleteRoutine(id));
  }

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render () {
    const routines = this.props.filteredRoutines.map((routine, index) => {
      if (!routine.expanded) {
        return (
        <li className="routine" key={index} onClick={() => this.viewExpanded(routine.id)}>
          <span className="routine-title">{routine.title}</span>
        </li>
        )
      }
      else if (routine.editMode) {
        return <EditRoutineForm key={index} />
      }
      return (
        <li className="routine" key={index} onClick={() => this.viewExpanded(routine.id)}>
          <span className="routine-title">{routine.title}</span>
          <section className="description">
            <span>Description/Notes:</span>
            <p>
              {routine.description}
            </p>
          </section>
          <ul className="exercises-ul">
            <span className="exercise-name">Exercises:</span>
            {routine.exercises.map((exercise, index) => (
              <li key={index} className="exercise-li">
                <p>{exercise.name}</p>
                <span>Sets: {exercise.sets}</span>
                <span>Reps: {exercise.reps}</span>
              </li>
            ))}
          </ul>
          {/* <ul>
            <span>Tags:</span>
            {routine.tags.map((tag, index) => (
              <li key={index}>
                #{tag.name}
              </li>
            ))}
          </ul> */}
          <button className="edit" onClick={() => this.editRoutine(routine.id)}>Edit</button>
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
      <div className="my-routines-page">
        <header role="banner" className="header">
          <span className="user-greeting">Welcome back, {this.props.name}!</span>
          <h2>GETFIT</h2>
          <SearchBar />
          {logOutButton}
        </header>
        <div className="MyRoutines">
          <HelpPage />
          <h3>My Routines</h3>
          <NewRoutine />
          <ul className ="Routines">
            {routines}
          </ul>
        </div>
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