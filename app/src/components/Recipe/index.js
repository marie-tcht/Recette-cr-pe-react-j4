/*
 * Npm Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import Presentation from 'src/components/Presentation';
import Ingredients from 'src/components/Ingredients';
import Instructions from 'src/components/Instructions';


/*
 * Code
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
    <Ingredients ingredients={data.ingredients} />

    {/* Instructions */}
    <Instructions instructions={data.instructions} />
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
