import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router";

import Login from './components/Login.jsx';
import Container from './components/Container.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div id="header">
          <h1>
            <p>
              Notes and todos.
            </p>
          </h1>
        </div>
        <Router>
          <Login path="/" />
          <Container path="/Container" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
