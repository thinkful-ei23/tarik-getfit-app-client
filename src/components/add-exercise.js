import React from 'react';
import {FormSection, Field} from 'redux-form';
import {required, positiveNum} from '../validators';
import Input from './input';

export default class AddExercise extends React.Component{
  render() {
    return(
      <section>
        <FormSection id="add-exercise-form" className="add-exercise-form" name={`${this.props.index}`}>
          <label htmlFor="name">name:</label>
          <Field aria-label="exercise-name" name="name" id="name" type="text" component={Input} validate={[required]} />
          <label htmlFor="sets">sets:</label>
          <Field aria-label="exercise-sets" name="sets" className="sets" id="sets" type="number" component={Input} validate={[required, positiveNum]} />
          <label htmlFor="reps">reps:</label>
          <Field aria-label="exercise-reps" name="reps" id="reps" className="reps" type="number" component={Input} validate={[required, positiveNum]} />
          <button type="button" className="delete-exercise" onClick={() => this.props.deleteExercise(this.props.index)}>X</button>
        </FormSection>
      </section>
    )
  }
}