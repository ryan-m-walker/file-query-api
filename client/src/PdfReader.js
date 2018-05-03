import React, { Component } from 'react';
import PDF from 'react-pdf-js';

import './PdfReader.css';

class PdfReader extends Component {
  state = {};

  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  };

  onPageComplete = (page) => {
    this.setState({ page });
  };

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  };

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  };

  renderPagination = (page, pages) => {
    let previousButton = (
      <li className="previous" onClick={this.handlePrevious}>
        <button>
          <i className="fa fa-arrow-left" /> Previous
        </button>
      </li>
    );
    if (page === 1) {
      previousButton = (
        <li className="previous disabled">
          <button>
            <i className="fa fa-arrow-left" /> Previous
          </button>
        </li>
      );
    }
    let nextButton = (
      <li className="next" onClick={this.handleNext}>
        <button>
          Next <i className="fa fa-arrow-right" />
        </button>
      </li>
    );
    if (page === pages) {
      nextButton = (
        <li className="next disabled">
          <button>
            Next <i className="fa fa-arrow-right" />
          </button>
        </li>
      );
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
    );
  };

  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div className="pdfReader">
        {pagination}

        <div className="pdf-viewer">
          <PDF
            file={'http://localhost:5000/document/' + this.props.filename}
            fillWidth
            fillHeight
            onDocumentComplete={this.onDocumentComplete}
            onPageComplete={this.onPageComplete}
            page={this.state.page}
          />
        </div>
      </div>
    );
  }
}

export default PdfReader;
