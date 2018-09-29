import React from 'react';
import Todos from './Todos.jsx';

// material ui

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Todos />
      </div>
    );
  }
}

export default Container;
