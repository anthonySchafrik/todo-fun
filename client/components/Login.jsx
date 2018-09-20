import React from 'react';
import axios from 'axios';

import Container from './Container.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      password: '',
      loginMatch: false
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
    const { user, password } = this.state;
    const loginInfo = { user, password };
    console.log('iwas clicked');
    axios.get('/login', {
      params: loginInfo,
    })
      .then((res) => {
        if (res.data === true) {
          this.setState({ loginMatch: true })
        };
      }
  }

  render() {
    return (
      <div>
        <label>
          User Name
          <br />
          <input onChange={this.setUser} />
        </label>
        <br />
        <br />
        <label>
          password
          <br />
          <input type="password" onChange={this.setPassword} />
        </label>
        <br />
        <br />
        <button type="button" onClick={this.checkLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
