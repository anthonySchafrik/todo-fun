import React from "react";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
    this.handleTodo = this.handleTodo.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleTodo(e) {
    console.log(e.target.value);
  }

  handleAddTodo(e) {
    console.log(e);
  }

  render() {
    const { handleAddTodo, handleTodo } = this;

    return (
      <div>
        <input onChange={handleTodo} type="text" placeholder="Enter Todo" />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    );
  }
}

export default AddTodo;
