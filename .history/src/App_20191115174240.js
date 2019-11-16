import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  }
  componentDidMount(){
    this.getMovies()
  }
  render() {
    const { isLoading } = this.state
    return (
		<div>
			<h2>출발시네마비디오천국</h2>
			<div> {isLoading ? "Loading..." : "We are ready"}</div>
		</div>
	);
  }
}

export default App;
