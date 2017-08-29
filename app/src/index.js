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
import recetteDeCrepes from './data';


/*
 * Code
 */
document.addEventListener('DOMContentLoaded', () => {
  const component = <Recipe recipe={recetteDeCrepes} />;
  const node = document.getElementById('root');
  render(component, node);
});
