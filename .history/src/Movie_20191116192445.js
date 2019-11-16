import React from "react";
import PropTypes from "prop-types";

function Movie({ id, years, title, summary, poster }) {
  return (
		<div class="movie">
    <img src={poster} alt={title} title={title} />
			<div class="movie__data">
				<h3 class="movie__title">{title}</h3>
				<h5 class="movie__year">{years}</h5>
				<p class="movie_summary">{summary}</p>
			</div>
		</div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  years: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
};

export default Movie;