import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import instructionSet from './data/z80-instruction-set';
import './index.css';

ReactDOM.render(<App instructionSet={ instructionSet } />, document.getElementById('root'));
