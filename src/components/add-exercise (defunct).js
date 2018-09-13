import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from './input';
// import {addExercise} from '../actions/exercises';

export class AddExercise extends React.Component{
  // onSubmit(values) {
  //   console.log(values);
  //   const {name, sets, reps} = values;
  //   const exercise = {name, sets: Number(sets), reps: Number(reps)};
  //   return this.props
  //     .dispatch(addExercise(exercise));
  // }

  onClick(e) {
    console.log(e);
  }
  render() {
    return(
      <section>
        <label htmlFor="name">name:</label>
        <Field name="name" id="name" type="text" component={Input} />
        <label htmlFor="sets">sets:</label>
        <Field name="sets" id="sets" type="number" component={Input} />
        <label htmlFor="reps">reps:</label>
        <Field name="reps" id="reps" type="number" component={Input} />
        <button type="button" onClick={(e) => this.onClick(e)}>X</button>
      </section>
    )
  }
}

export default reduxForm({
  form: 'add-exercise'
})(AddExercise);