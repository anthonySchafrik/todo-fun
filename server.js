// const Todo = require('./View/Scripts/app');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/Scripts'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

const port = 3030;
app.listen(port, () => {
  console.log(` Server is listing `);
  console.log(`visit: http://localhost:${port}`);
});
