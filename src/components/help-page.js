import React from 'react';
import './help-page.css';
export default class HelpPage extends React.Component {
  state = {
    showInfo: false
  }

  toggleInfo() {
    this.setState({
      showInfo: !this.state.showInfo
    });
  }
  render() {
    if (this.state.showInfo) {
      return (
        <section className="overlay" id="modal" style={{opacity: 1, visibility: 'visible'}}>
          <section className="content">
            <h3>GETFIT</h3>
            <section className="Introduction">
            <p>
                Welcome to GETFIT! a fitness routine application that allows
                you to create and manage a really simple, yet dynamic collection
                of workout routines. As a user, you can create any number of structured workouts, add and
                delete exercises, and define specific instructions/notes for your
                reference. Sounds pretty convenient huh?
                I bet you're wondering how to work this thing. Let's show you how:
            </p>
            </section>
            <h4>How's it Work?</h4>
            <section className="help-info">
              <ul className="instructions-list">
                <li>
                  1. Working this app is pretty simple. Once you've created an account
                  and are signed in, simply click the "New Routine" button to start
                  your collection.
                </li>
                <li>
                  2. Clicking the "New Routine" button will open a new routine form.
                  You can add a title and description/notes to get your routine started.
                </li>
                <li>
                  3. Click the add exercise button to add exercises to the workout. For each
                  exercise you can define a number of sets and reps to complete. Feel free to
                  add as many as you'd like!
                </li>
                <li>
                  4. Once you're satisfied with your routine, hit the "save routine" button to add it
                  to your "My Routines" collection.
                </li>
                <li>
                  5. Once your routine is added to the collection, you can refer to it at any time (just click
                  on the card to see the full details of the workout).
                </li>
                <li>
                  6. Click the edit button to make changes to, and update the workout routine.
                </li>
                <li>
                  7. If you want to scrap a routine, simply click the delete button and like that, it's gone.
                </li>
                <li>
                  8. As your routine collection grows, you can use the search tool to narrow down specific
                  workouts (title search).
                </li>
                <li>
                  9. That's about it. Feel free to grab a friend and get active!
                </li>
              </ul>
              <button className="close-help" onClick={() => this.toggleInfo()}>Sounds good!</button>
            </section>
          </section>
        </section>
      )
    }

    return (
      <section className="HelpPage">
        <a href="#" className="help" onClick={() => this.toggleInfo()}>Help?</a>
        <section  className="overlay" id="modal">
        </section>
      </section>
    )
  }
}