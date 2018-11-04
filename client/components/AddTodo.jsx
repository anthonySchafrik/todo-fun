import React from "react";
import Todos from "./Todos.jsx";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: []
    };
    this.handleTodo = this.handleTodo.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  handleTodo(e) {
    this.setState({ todo: e.target.value });
  }

  handleAddTodo(e) {
    this.setState({todos: [this.state.todo, ...this.state.todos]});
    this.setState({ todo: " " });
  }

  handleRemoveTodo(e) {
    let index = this.state.todos.indexOf(e.target.previousSibling.innerText);
    this.state.todos.splice(index, 1);
    this.forceUpdate();
  }

  render() {
    const { handleAddTodo, handleTodo, handleRemoveTodo } = this;
    const { todos } = this.state;
    return (
      <div>
        <input onChange={handleTodo} type="text" placeholder="Enter Todo" />
        <button onClick={handleAddTodo}>Add Todo</button>
        <Todos todos={todos} handleRemoveTodo={handleRemoveTodo} />
      </div>
    );
  }
}

export default AddTodo;
