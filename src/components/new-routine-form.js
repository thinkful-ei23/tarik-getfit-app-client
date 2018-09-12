import React from 'react';
import {reduxForm, Field, FormSection} from 'redux-form';
import Exercises from './exercises';
import Input from './input';

export class NewRoutineForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="title">title:</label>
        <Field name="title" id="title" type="text" component={Input} />
        <label htmlFor="description">description:</label>
        <Field name="description" id="description" component="textarea">
          Enter a description here...
        </Field>
        <FormSection name ="exercises">
          <Exercises />
        </FormSection>
        <button type="submit">Save Routine</button>
      </form>
    )
  }
}

export default reduxForm({
    form: 'new-routine'
  })(NewRoutineForm);