import React from 'react';

import Button from '@material-ui/core/Button';

const Header = () => (
  <div>
    <div id="header">
      <h1>
        <p>Notes and todos.</p>
      </h1>
    </div>
    <div id="toggleButton">
      <Button variant="extendedFab">toggle list</Button>
    </div>
  </div>
);

export default Header;
