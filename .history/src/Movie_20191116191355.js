import React from "react";
import PropTypes from "prop-types";

function Movie() {
  return <h1></h1>
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  years: PropTypes.number,isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
};