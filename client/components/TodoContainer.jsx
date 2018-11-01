import React from "react";
import AddTodo from "./AddTodo.jsx";

class TodoContainer extends React.Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <AddTodo />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
