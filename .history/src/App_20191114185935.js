import React from 'react';
import axios from 'axios';
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 6000)

  }
  render() {
    const { isLoading } = this.state
    return (
      <div> {isLoading ? "Loading...": "We are ready"}</div>
    )
  }
}

export default App;
