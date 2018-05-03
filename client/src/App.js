import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Search from './Search';
import Doc from './Doc';
import Advanced from './Advanced';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Search} />
          <Route path="/document/:filename" component={Doc} />
          <Route path="/advanced" component={Advanced} />
        </div>
      </Router>
    );
  }
}

export default App;
