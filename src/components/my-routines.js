import React from 'react';
import {connect} from 'react-redux';
import { fetchRoutines } from '../actions/routines';
import NewRoutine from './new-routine';

export class MyRoutines extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRoutines());
  }

  render () {
    const routines = this.props.routines.map((routine, index) => (
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
      </li>
    ));
    return (
      <div className="MyRoutines">
        <ul className ="Routines">
          {routines}
        </ul>
        <NewRoutine />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  routines: state.routine.routines
});

export default connect(mapStateToProps)(MyRoutines);