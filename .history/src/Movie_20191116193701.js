import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ years, title, summary, poster, genres }) {
	return (
		<div className="movie">
			<img src={poster} alt={title} title={title} />
			<div className="movie__data">
				<h3 className="movie__title">{title}</h3>
				<h5 className="movie__year">{years}</h5>
				<ul className="geners">
					{genres.map(genre => (
						<li className="geners__genre">{genre}</li>
					))}
				</ul>
				<p className="movie_summary">{summary}</p>
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
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;