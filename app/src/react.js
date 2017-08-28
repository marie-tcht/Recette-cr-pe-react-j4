/*
 * Npm Import
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';


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
  ReactDOM.render(<App />, document.getElementById('root'));
});
