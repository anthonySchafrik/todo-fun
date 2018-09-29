const express = require('express');
const path = require('path');
const app = express();
const port = 2020;

const userInfo = { userName: 'a', userPassWord: 'a', salt: 'laurenissexy' };

app.use(express.static(path.join(__dirname, '../public')));

app.get('/login', (req, res) => {
  const { user, password } = req.query;

  if (user === userInfo.userName) {
    if (userInfo.salt + password === userInfo.salt + userInfo.userPassWord) {
      res.send(true);
    } else {
      res.send('password does not match');
    }
  } else {
    res.send('user name does not match');
  }
  // res.send('user not found');
});

app.listen(port, () => {
  console.log(`server listing on 127.0.0.1:${port}`);
});
