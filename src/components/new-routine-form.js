import React from 'react';
import {reduxForm, Field, FormSection} from 'redux-form';
import Exercises from './exercises';
import Input from './input';
import {required} from '../validators';
import {addRoutine} from '../actions/routines';
 
export class NewRoutineForm extends React.Component {
  onSubmit(values) {
    console.log(values);
    const {title, description, exercises} = values;
    let newRoutine;
    if (exercises) {
      const mappedExercises = exercises.map(exercise => ({
        name: exercise.name,
        sets: Number(exercise.sets),
        reps: Number(exercise.reps)
      }));
  
      newRoutine = {
        title,
        description, 
        exercises: mappedExercises
      }
    } else {
      newRoutine = {
        title,
        description, 
        exercises
      }
    }
      
    this.props.dispatch(addRoutine(newRoutine));
  }

  render() {
    return (
      <form className="new-routine-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <label htmlFor="title">title:</label>
        <Field name="title" id="title" type="text" component={Input} validate={[required]} />
        <label htmlFor="description">description:</label>
        <Field name="description" id="description" component="textarea">
          Enter a description here...
        </Field>
        <FormSection name ="exercises">
          <Exercises />
        </FormSection>
        <button type="submit" className="save-routine">Save Routine</button>
      </form>
    )
  }
}

export default reduxForm({
    form: 'new-routine'
  })(NewRoutineForm);