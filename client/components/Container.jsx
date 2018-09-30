import React from 'react';
import Header from './Header.jsx';
import Todos from './Todos.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Todos />
      </div>
    );
  }
}

export default Container;
