import React from 'react';
import { render } from 'react-dom';
import { Button } from '@theamalgama/carbon-components-react';

const App = () => (
  <div>
    <Button>Hello world</Button>
  </div>
);

render(<App />, document.getElementById('root'));
