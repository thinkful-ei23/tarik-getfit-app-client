import React from 'react';
import {FormSection, Field} from 'redux-form';
import {required, positiveNum} from '../validators';
import Input from './input';

export default class AddExercise extends React.Component{
  render() {
    return(
      <section>
        <FormSection name={`${this.props.index}`}>
          <label htmlFor="name">name:</label>
          <Field name="name" id="name" type="text" component={Input} validate={[required]} />
          <label htmlFor="sets">sets:</label>
          <Field name="sets" id="sets" type="number" component={Input} validate={[required, positiveNum]} />
          <label htmlFor="reps">reps:</label>
          <Field name="reps" id="reps" type="number" component={Input} validate={[required, positiveNum]} />
          <button type="button" onClick={() => this.props.deleteExercise(this.props.index)}>X</button>
        </FormSection>
      </section>
    )
  }
}