import React, { Component } from 'react';
import PdfReader from './PdfReader';

class Doc extends Component {
  state = {
    document: {},
    loading: true
  };

  componentDidMount() {
    fetch('http://localhost:5000/data/' + this.props.match.params.filename)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ document: data, loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.log(err);
      });
  }

  render() {
    const { filename } = this.props.match.params;

    return (
      <div>
        {!this.state.loading ? (
          <div>
            <h1>{this.state.document.filename}</h1>
            <PdfReader filename={filename} />
          </div>
        ) : (
          <div>Loading file...</div>
        )}
      </div>
    );
  }
}

export default Doc;
