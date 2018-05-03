import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
  state = {
    query: '',
    results: []
  };

  onChange = (e) => {
    this.setState({ query: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/search/' + this.state.query)
      .then((res) => res.json())
      .then((data) => this.setState({ results: data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input value={this.state.query} onChange={this.onChange} />
        </form>
        <div>
          {this.state.results.map((item) => (
            <Link to={'/document/' + item.filename} key={item.filename}>
              <h2>{item.filename}</h2>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
