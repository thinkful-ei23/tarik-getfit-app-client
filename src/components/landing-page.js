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
    <div className="login">
      <h2>GETFIT</h2>
      <LoginForm />
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);