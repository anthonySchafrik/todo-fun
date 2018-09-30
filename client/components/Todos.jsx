import React from 'react';

import Paper from '@material-ui/core/Paper';

const items = [
  'running with cats',
  'flying with the pigs',
  'having a tulte eat from my hand',
  'Read up on making react compnents',
];

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: items,
    };
  }

  render() {
    const { todos } = this.state;
    return todos.map(todo => (
      <div className="todo">
        <Paper className="todoPaper">{todo}</Paper>
      </div>
    ));
  }
}

export default Todos;
