import React from 'react';
import {connect} from 'react-redux'
import AddExercise from './add-exercise';
import {addExerciseForm} from '../actions/exercises';

export class Exercises extends React.Component {
  onClick() {
    console.log('Adding an add-exercise form!');
    this.props.dispatch(addExerciseForm('newExerciseForm'));
    console.log(this.props.exerciseForms);
  }
   render() {
     const forms = this.props.exerciseForms.map((form, index) => (<AddExercise key={index} />))
     return (
       <div className="Exercises">
        <button type="button" className="add-exercise" onClick={() => this.onClick()}>Add Exercise</button>
        <div>
          {forms}
        </div>
       </div>
     )

  }
}

const mapStateToProps = (state) => ({
  exerciseForms: state.exercise.exerciseForms
});

export default connect(mapStateToProps)(Exercises);