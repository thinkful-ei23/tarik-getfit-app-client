import React from 'react';
import {connect} from 'react-redux';
import { fetchRoutines } from '../actions/routines';

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
          {routine.exercises.map(exercise => (
            <li>
              <p>{exercise.name}</p>
              <span>Sets: {exercise.sets}</span>
              <span>Reps: {exercise.reps}</span>
            </li>
          ))}
        </ul>
        <ul>
          <span>Tags:</span>
          {routine.tags.map(tag => (
            <li>
              #{tag.name}
            </li>
          ))}
        </ul>
      </li>
    ));
    return (
      <ul className="MyRoutines">
        {routines}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  routines: state.routines
});

export default connect(mapStateToProps)(MyRoutines);