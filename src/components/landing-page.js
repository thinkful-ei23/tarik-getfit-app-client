import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './landing-page.css';
import LoginForm from './login-form';

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/myRoutines" />;
  }

  return (
    <section className="login">
      <header role="banner">
        <h1 className="login-page-h1">GETFIT</h1>
      </header>
      <main>
        <LoginForm />
      </main>
    </section>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);