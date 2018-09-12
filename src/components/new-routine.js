import React from 'react';
import NewRoutineForm from './new-routine-form';

export default class NewRoutine extends React.Component{
  render() {
    return (
      <section role="region" className="NewRoutine">
        <NewRoutineForm />
      </section>
    )
  }
}