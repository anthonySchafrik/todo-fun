import React from 'react';
import Todo from './Todo.jsx';

// material ui
import Paper from '@material-ui/core/Paper';

const items = ['running with cats', 'flying with the pigs', 'having a tulte eat from my hand'];

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: items,
    };
  }

  render() {
    return (
      <div className="todo">
        <Paper>
          <ul>
            <Todo todos={items} />
          </ul>
          <button type="button">Delete</button>
        </Paper>
      </div>
    );
  }
}

export default Todos;
