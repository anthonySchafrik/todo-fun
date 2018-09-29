import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link, Router } from '@reach/router';
import Container from './Container.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      password: '',
      loginMatch: false,
    };

    this.setUser = this.setUser.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  setUser(event) {
    this.setState({ user: event.target.value });
  }

  setPassword(event) {
    this.setState({ password: event.target.value });
  }

  checkLogin() {
    return this;
  }

  render() {
    return (
      <Paper id="login">
        <div>
          <label>
            <br />
            <input
              input="text"
              placeholder="User Name"
              id="userName"
              onChange={this.setUser}
            />
          </label>
          <br />
          <br />
          <label>
            <br />
            <input
              input="text"
              placeholder="password"
              id="password"
              type="password"
              onChange={this.setPassword}
            />
          </label>
          <br />
          <br />
          <nav>
            <Link to="/Container">Login</Link>
          </nav>
        </div>
      </Paper>
    );
  }
}

export default Login;
