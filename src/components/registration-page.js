import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './registration-page.css';
import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/myRoutines" />;
    }
    return (
        <section className="home">
          <header role="banner">
            <h1 className="registration-page-h1">Registration</h1>
          </header>
          <main>
            <RegistrationForm />
          </main>
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);