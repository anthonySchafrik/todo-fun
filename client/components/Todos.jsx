import React from "react";
import styled from "react-emotion";
import Paper from "@material-ui/core/Paper";

const Wrapper = styled("div")`
  padding: "5px";
`;

class Todos extends React.Component {
  constructor(props) {
    super(props);
    // this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  // handleRemoveTodo(e) {
  //   console.log(e.target.previousSibling.innerText);
  //   this.props.todos.pop(e.target.previousSibling.innerText);
  // }

  render() {
    const { todos, handleRemoveTodo } = this.props;
    // const { handleRemoveTodo } = this;

    return todos.map(todo => (
      <Wrapper key={todo} className="todo">
        <Paper className="todoPaper">{todo}</Paper>
        <button onClick={handleRemoveTodo}>Remove</button>
      </Wrapper>
    ));
  }
}

export default Todos;
