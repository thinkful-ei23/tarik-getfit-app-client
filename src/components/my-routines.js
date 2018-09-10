import React from 'React';

export class MyRoutines extends React.Component {
  
  render () {
    const routines = this.props.routines.map((routine, index) => (
      <li className="routine" key={index}>
        <span>{routine.title}</span>
        <span>{routine.description}</span>
        <ul>
          <span>Exercises:</span>
          {routine.exercises.map(exercise => (
            <li>
              <span>{exercise.name}</span>
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