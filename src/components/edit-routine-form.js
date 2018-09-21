import React from 'react';
import {reduxForm, Field, FormSection} from 'redux-form';
import Input from './input';
import {required} from '../validators';
import AddExercise from './add-exercise';
import PopulateExercise from './populate-exercise';
import {connect} from 'react-redux';
import { updateRoutine } from '../actions/routines';
 
export class EditRoutineForm extends React.Component {
  state= {
    exerciseForms: []
  }

  componentDidMount() {
    const populate = this.props.routineInEdit.exercises.map((exercise, index) => {
      return (
        <PopulateExercise key={index} index={index} deleteExercise={(e) => this.deleteExercise(e)} exerciseData={exercise} />
      )
    });

    this.populateExerciseForms(populate);
  }

  onSubmit(values, id) {
    const {title, description, exercises} = values;
    let updatedRoutine;

    if (exercises) {
      const mappedExercises = exercises.map(exercise => ({
        name: exercise.name,
        sets: Number(exercise.sets),
        reps: Number(exercise.reps)
      }));
      
      updatedRoutine = {
        title,
        description, 
        exercises: mappedExercises
      }
    } else {
      updatedRoutine = {
        title,
        description, 
        exercises
      }
    }

    console.log(updatedRoutine);
    this.props.dispatch(updateRoutine(updatedRoutine, id));
  }

  addExercise() {
    console.log('Adding an add-exercise form!');
    this.setState({
      exerciseForms: [ ...this.state.exerciseForms, <AddExercise key={Number(this.state.exerciseForms.length)} index={Number(this.state.exerciseForms.length)} deleteExercise={(e) => this.deleteExercise(e)}/>]
    });
  }

  deleteExercise(index) {
    console.log('Deleting an add-exercise form!');
    if (this.state.exerciseForms.length === 1) {
      this.setState({
        exerciseForms: []
      });
    } else {
      const filteredForms = this.state.exerciseForms.filter((form) => Number(form.key) !== index);
      this.setState({
        exerciseForms: filteredForms
      });
    }
  }

  populateExerciseForms(exerciseForms) {
    this.setState({
      exerciseForms
    })
  }

  render() {
    return (
      <form className="edit-routine-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values, this.props.routineInEdit.id))}>
        <label htmlFor="title" className="title-label">title:</label>
        <Field name="title" id="title" type="text" component={Input} validate={[required]} />
        <label className="description-label" htmlFor="description">description:</label>
        <br />
        <Field name="description" id="description" component="textarea">
          Enter a description here...
        </Field>
        <FormSection name ="exercises">
          <div className="Exercises">
            <button type="button" className="add-exercise" onClick={() => this.addExercise()}>Add Exercise</button>
            <div>
              {this.state.exerciseForms}
            </div>
          </div>
        </FormSection>
        <button type="submit" className="save-routine">Save Routine</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const exerciseArr = [];
  state.routine.routineInEdit.exercises.forEach((exercise, index) => {
    exerciseArr[index] = {
      name: exercise.name,
      sets: exercise.sets,
      reps: exercise.reps
    }
  });

  return {
    initialValues: {
      title: state.routine.routineInEdit.title,
      description: state.routine.routineInEdit.description,
      exercises: exerciseArr
    },
    routineInEdit: state.routine.routineInEdit,
    addedExercises: state.routine.addedExercises,
    deletedExercises: state.routine.deletedExercises
  }
};

export default connect(mapStateToProps)(reduxForm({
    form: 'edit-routine',
    enableReinitialize: true
  })(EditRoutineForm));