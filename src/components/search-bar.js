import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from './input';
import {routinesFilter} from '../actions/routines';

export class SearchBar extends React.Component {
  updateSearch(e) {
    console.log(e.target.value);
    this.props.dispatch(routinesFilter(e.target.value));
  }
  render() {
    return (
      <Field name="SearchBar" id="SearchBar" type="text" component={Input} placeholder="Search for a workout routine..." onChange={(e) => this.updateSearch(e)}/>
    )
  }
 }

export default reduxForm({
  form:'search'
})(SearchBar);