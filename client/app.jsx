import React from 'react';
import ReactDOM from 'react-dom';
// import { Router } from "@reach/router";

// material ui
import Button from '@material-ui/core/Button';

// files
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
        <div id="toggleButton">
          <Button variant="extendedFab">toggle list</Button>
        </div>
        <Container />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
