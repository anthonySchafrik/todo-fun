import React from 'react';

import Button from '@material-ui/core/Button';

const Header = () => (
  <div id="header">
    <h1>Notes and todos.</h1>
    <div id="toggleButton">
      <Button variant="extendedFab">toggle list</Button>
    </div>
  </div>
);

export default Header;
