
/*
 * Npm Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import Ingredient from './Ingredient';


/*
 * Code
 */
const Ingredients = ({ ingredients }) => (
  <div id="ingredients">
    {ingredients.map((ingredient, index) => (
      <Ingredient key={index} {...ingredient} />
    ))}
  </div>
);
Ingredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
};


/*
 * Export default
 */
export default Ingredients;
