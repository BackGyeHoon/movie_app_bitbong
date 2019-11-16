import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    count: 0
  }
  render() {
    return <h1>Im a class {this.state.count}</h1>
  }
}

export default App;
