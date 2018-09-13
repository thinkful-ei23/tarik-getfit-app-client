import React from 'react';
import NewRoutineForm from './new-routine-form';

export default class NewRoutine extends React.Component{
  render() {
    return (
      <section className="NewRoutine">
        <NewRoutineForm />
      </section>
    )
  }
}