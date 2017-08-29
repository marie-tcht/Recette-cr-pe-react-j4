/*
 * Npm Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local Import
 */


/*
 * Code
 * Retourne du JSX
 */
const Presentation = ({ image, name, author, difficulty }) => (
  <div id="presentation">
    <img
      src={image}
      alt={name}
      id="presentation-image"
    />
    <div id="presentation-content">
      <div id="presentation-name">{name}</div>
      <div id="presentation-author">{author}</div>
      <div id="presentation-difficulty">{difficulty}</div>
    </div>
  </div>
);
Presentation.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};


/*
 * Export default
 */
export default Presentation;
