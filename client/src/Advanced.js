import React, { Component } from 'react';
import convertObjectToQueryString from './util/convertObjectToQueryString';

class AdvancedSearch extends Component {
  state = {
    title: '',
    filename: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const query = convertObjectToQueryString(this.state);
    console.log(query);

    fetch('http://localhost:5000/advanced' + query)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="filename"
          value={this.state.filename}
          onChange={this.onChange}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default AdvancedSearch;
