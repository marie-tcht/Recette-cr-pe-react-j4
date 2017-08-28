/*
 * Npm Import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';


/*
 * Local Import
 */


/*
 * Code
 */

// Retourne du JSX
const App = () => (
  <h1>Hello World !</h1>
);

/* const App = () => (
 *   React.createElement('div', null, 'Hello World !')
 * );
 */

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('root'));
});
