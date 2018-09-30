import React from 'react';
import ReactDOM from 'react-dom';
// import { Router } from "@reach/router";

import Login from './components/Login.jsx';
import Container from './components/Container.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Container />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
