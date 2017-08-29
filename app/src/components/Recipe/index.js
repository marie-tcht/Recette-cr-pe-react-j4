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
    <Presentation
      image={data.thumbnail}
      name={data.name}
      author={data.author}
      difficulty={data.difficulty}
    />

    {/* Ingrédients */}
    {/* <Ingredients /> */}

    {/* Instructions */}
    {/* <Instructions /> */}

  </div>
);
Recipe.propTypes = {
  data: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
  }).isRequired,
};


/*
 * Export default
 */
export default Recipe;
