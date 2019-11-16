import React from "react";
import PropTypes from "prop-types";

function Movie({ id, years, title, summary, poster }) {
  return <h5>{title}</h5>
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  years: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
};

export default Movie;