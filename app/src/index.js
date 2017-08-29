/*
 * Npm Import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';


/*
 * Local Import
 */
import Recipe from 'src/components/Recipe';


/*
 * Code
 */
document.addEventListener('DOMContentLoaded', () => {
  render(<Recipe />, document.getElementById('root'));
});
