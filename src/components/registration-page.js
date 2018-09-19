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
        <div className="home">
            <h2>Registration</h2>
            <RegistrationForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);