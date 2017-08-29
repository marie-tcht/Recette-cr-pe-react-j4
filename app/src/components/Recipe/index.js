/*
 * Npm Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local Import
 */
import Presentation from 'src/components/Presentation';


/*
 * Code
 * Retourne du JSX
 */
const Recipe = ({ data }) => (
  <div id="recipe">
    {/* Présentation */}
    <Presentation />

    {/* Ingrédients */}
    {/* <Ingredients /> */}

    {/* Instructions */}
    {/* <Instructions /> */}

  </div>
);
Recipe.propTypes = {
  data: PropTypes.object.isRequired,
};


/*
 * Export default
 */
export default Recipe;
