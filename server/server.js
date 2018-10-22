const express = require("express");
const path = require("path");
const app = express();
const port = 2020;
const log = console.log;

app.use(express.static(path.join(__dirname, "../public")));

app.listen(port, () => {
  console.log(`server listing on 127.0.0.1:${port}`);
});
