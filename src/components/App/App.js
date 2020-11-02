import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Comments from '../Comments/Comments';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          {/* Routes go here */}
          {/* <Route exact path="/feeling" component={Feeling} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
