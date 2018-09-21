import React from 'react';
import AddExercise from './add-exercise';

export default class Exercises extends React.Component {
  state= {
    exerciseForms: []
  }

  addExercise() {
    console.log('Adding an add-exercise form!');
    this.setState({
      exerciseForms: [ ...this.state.exerciseForms, <AddExercise key={Number(this.state.exerciseForms.length)} index={Number(this.state.exerciseForms.length)} deleteExercise={(e) => this.deleteExercise(e)} />]
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
   render() {
    console.log(this.state.exerciseForms);
     return (
       <section className="Exercises">
        <button aria-label="add-exercise-button" type="button" className="add-exercise" onClick={() => this.addExercise()}>Add Exercise</button>
        <div>
          {this.state.exerciseForms}
        </div>
       </section>
     )

  }
}