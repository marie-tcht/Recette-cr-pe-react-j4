
/*
 * Npm Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */


/*
 * Code
 */
const Ingredient = ({ quantity, desc }) => (
  <div className="ingredient">
    <div className="ingredient-quantity">{quantity}</div>
    <div className="ingredient-desc">{desc}</div>
  </div>
);
Ingredient.propTypes = {
  quantity: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
};


/*
 * Export default
 */
export default Ingredient;
