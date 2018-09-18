import React from 'react';

const userInfo = [
  {
    userName: 'Anthony',
    password: 'password'
  }
]
     

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      password: ''
    }

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
    const{ user, password } = this.state;
console.log(user)
    console.log(userInfo[0].userName)
    if (user === userInfo[0].userName) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  render() {
    return (
      <div>
        <label>
          User Name 
          <br></br>
          <input onChange={this.setUser}></input>
        </label>
        <br></br>
        <br></br>
        <label>
          password
          <br></br>
          <input type="password" onChange={this.setPassword}></input>
        </label>
        <br></br>
        <br></br>
        <button onClick={this.checkLogin}>Login</button>
      </div>
    )
  }
}

export default Login;