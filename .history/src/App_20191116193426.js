import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    const {
      data: { 
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json"
    );
    this.setState({ movies, isLoading: false });
  }
  componentDidMount(){
    this.getMovies()
  }
  render() {
    const { isLoading, movies } = this.state
    return (
		<section class="container">
      {isLoading
        ? <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
        : movies.map(movie => {
        return (
			<div className="movies">
				{
					<Movie
						key={movie.id}
						id={movie.id}
						years={movie.year}
						title={movie.title}
						summary={movie.summary}
						poster={movie.medium_cover_image}
						genres={movie.genres}
					/>
				}
			</div>
		);
      })}
		</section>
	);
  }
}

export default App;
