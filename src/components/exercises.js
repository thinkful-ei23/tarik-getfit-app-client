import React from 'react';
import {connect} from 'react-redux';
import {Field, FormSection} from 'redux-form';
import Input from './input';
import {addExerciseForm} from '../actions/exercises';
import {removeExerciseForm} from '../actions/exercises';
import {required, positiveNum} from '../validators';

export class Exercises extends React.Component {
  addExercise() {
    console.log('Adding an add-exercise form!');
    this.props.dispatch(addExerciseForm('newExerciseForm'));
    console.log(this.props.exerciseForms);
  }
  
  deleteExercise(e) {
    const index = e.target.attributes['data-index'].value;
    this.props.dispatch(removeExerciseForm(index));
  }
   render() {
     const forms = this.props.exerciseForms.map((form, index) => (
      <section key={index}>
        <FormSection name={`${index}`}>
          <label htmlFor="name">name:</label>
          <Field name="name" id="name" type="text" component={Input} validate={[required]} />
          <label htmlFor="sets">sets:</label>
          <Field name="sets" id="sets" type="number" component={Input} validate={[required, positiveNum]} />
          <label htmlFor="reps">reps:</label>
          <Field name="reps" id="reps" type="number" component={Input} validate={[required, positiveNum]} />
          <button type="button" data-index={index} onClick={e => this.deleteExercise(e)}>X</button>
        </FormSection>
      </section>
     ))
     return (
       <div className="Exercises">
        <button type="button" className="add-exercise" onClick={() => this.addExercise()}>Add Exercise</button>
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