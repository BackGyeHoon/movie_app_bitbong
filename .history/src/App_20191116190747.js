import React from 'react';
import axios from 'axios';

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
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
  }
  componentDidMount(){
    this.getMovies()
  }
  render() {
    const { isLoading } = this.state
    return (
		<div>
			<h2>출발 시네마비디오 천국</h2>
			<div> {isLoading ? "Loading..." : "We are ready"}</div>
		</div>
	);
  }
}

export default App;
