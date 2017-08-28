/*
 * Npm Import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';


/*
 * Local Import
 */
import App from 'src/components/App';


/*
 * Code
 */
document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('root'));
});
