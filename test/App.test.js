import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const instructionSet = {};

  ReactDOM.render(<App instructionSet={ instructionSet } />, div);
});
