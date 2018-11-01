import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/Container.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Container />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
