import React from 'react';

const Todo = ({ todos }) => {
  return (
    todos.map((todo) => {
      return <li>{todo}</li>;
    })
  );
};

export default Todo;
