const Todo = require('./app')

const express = require('express');
const port = 3030;
const app = express();

app.listen(port, () => {
  console.log(` Server is running in terminal`);
  console.log(`visit: http://localhost:${port}`);
});
