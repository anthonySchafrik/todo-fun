import React from "react";
import styled from "react-emotion";
import Paper from "@material-ui/core/Paper";

const Wrapper = styled("div")`
  padding: "5px";
`;

class Todos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, handleRemoveTodo } = this.props;
    
    if (!todos) {
      return <h1>LOADING...</h1>
    }

    return todos.map(todo => (
      <Wrapper key={todo} className="todo">
        <Paper className="todoPaper">{todo}</Paper>
        <button onClick={handleRemoveTodo}>Remove</button>
      </Wrapper>
    ));
  }
}

export default Todos;
