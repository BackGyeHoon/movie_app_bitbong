import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    count: 0
  }
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button>Add</button>
        <button>Minus</button>
      </div>
    )
  }
}

export default App;
