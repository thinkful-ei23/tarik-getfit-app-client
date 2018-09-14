import React from 'react';
import NewRoutineForm from './new-routine-form';
import {connect} from 'react-redux';
import {toggleAddRoutineForm} from '../actions/routines';

export class NewRoutine extends React.Component{
  addForm() {
    this.props.dispatch(toggleAddRoutineForm());
  }
  render() {
    if (this.props.toggleAddRoutineForm === true) {
      return (
        <section className="NewRoutine">
          <button type="button" className="AddNewRoutineForm" >New Routine</button>
          <NewRoutineForm />
        </section>
      )
    }
    return (
      <section className="NewRoutine">
        <button type="button" className="AddNewRoutineForm" onClick={() => this.addForm()}>New Routine</button>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  toggleAddRoutineForm: state.routine.toggleAddRoutineForm
});

export default connect(mapStateToProps)(NewRoutine);