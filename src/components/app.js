import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import MyRoutines from './my-routines';
import LandingPage from './landing-page';
import RegistrationPage from './registration-page';
import {refreshAuthToken} from '../actions/auth';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
      if (!prevProps.loggedIn && this.props.loggedIn) {
          // When we are logged in, refresh the auth token periodically
          this.startPeriodicRefresh();
      } else if (prevProps.loggedIn && !this.props.loggedIn) {
          // Stop refreshing when we log out
          this.stopPeriodicRefresh();
      }
  }

  componentWillUnmount() {
      this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
      this.refreshInterval = setInterval(
          () => this.props.dispatch(refreshAuthToken()),
          60 * 60 * 1000 // One hour
      );
  }

  stopPeriodicRefresh() {
      if (!this.refreshInterval) {
          return;
      }

      clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <section className="app">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/myRoutines" component={MyRoutines} />
        <Route exact path="/register" component={RegistrationPage} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));