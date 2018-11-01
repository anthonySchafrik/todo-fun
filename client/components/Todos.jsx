import React from "react";
import styled from "react-emotion";
import Paper from "@material-ui/core/Paper";

const Wrapper = styled("div")`
  padding: "5px";
`;

const items = [
  "running with cats",
  "flying with the pigs",
  "having a turtle eat from my hand",
  "Read up on making react compnents"
];

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: items
    };
  }

  render() {
    const { todos } = this.state;
    return todos.map(todo => (
      <Wrapper key={todo} className="todo">
        <Paper className="todoPaper">{todo}</Paper>
        <button>Remove</button>
      </Wrapper>
    ));
  }
}

export default Todos;
