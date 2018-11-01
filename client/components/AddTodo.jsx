import React from "react";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: []
    };
    this.handleTodo = this.handleTodo.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleTodo(e) {
    this.setState({ todo: e.target.value });
  }

  handleAddTodo(e) {
    this.state.todos.push(this.state.todo);
  }

  render() {
    const { handleAddTodo, handleTodo } = this;
    console.log(this.state.todos);
    return (
      <div>
        <input onChange={handleTodo} type="text" placeholder="Enter Todo" />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    );
  }
}

export default AddTodo;
