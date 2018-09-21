import React from 'react';
import {FormSection, Field} from 'redux-form';
import {required, positiveNum} from '../validators';
import Input from './input';

export default class PopulateExercise extends React.Component{
  render() {
    return(
      <section>
        <FormSection name={`${this.props.index}`}>
          <label htmlFor="name">name:</label>
          <Field aria-label="exercise-name" name="name" id="name" type="text" component={Input} validate={[required]} defaultValue/>
          <label htmlFor="sets">sets:</label>
          <Field aria-label="sets" name="sets" id="sets" type="number" component={Input} validate={[required, positiveNum]} />
          <label htmlFor="reps">reps:</label>
          <Field aria-label="reps" name="reps" id="reps" type="number" component={Input} validate={[required, positiveNum]} />
          <button type="button" onClick={() => this.props.deleteExercise(this.props.index)}>X</button>
        </FormSection>
      </section>
    )
  }
}

// const mapStateToProps = (state, ownProps) => ({
//   initialValues: {
//     // name: ownProps.exerciseData.name,
//     // sets: ownProps.exerciseData.sets,
//     // reps: ownProps.exerciseData.reps,
//     // [ownProps.index]: {
//     //   name: ownProps.exerciseData.name,
//     //   sets: ownProps.exerciseData.sets,
//     //   reps: ownProps.exerciseData.reps
//     // }
//   },
//   // name: ownProps.exerciseData.name,
//   // sets: ownProps.exerciseData.sets,
//   // reps: ownProps.exerciseData.reps
// });
// export default connect(mapStateToProps)(reduxForm({
//   form: 'populate-exercise',
//   enableReinitialize: true
// })(PopulateExercise));
