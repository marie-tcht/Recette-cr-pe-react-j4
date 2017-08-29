
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
const Instructions = ({ instructions }) => (
  <ol id="instructions">
    {instructions.map(instruction => (
      <li key={instruction} className="instruction">{instruction}</li>
    ))}
  </ol>
);
Instructions.propTypes = {
  instructions: PropTypes.array.isRequired,
};


/*
 * Export default
 */
export default Instructions;
