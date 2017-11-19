import React, { Component } from 'react';
import './App.css';

import BreedSelector from '../BreedSelector';
import BreedViewer from '../BreedViewer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      breed: 'retriever',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      breed: value,
    });
  }

  render() {
    const { breed } = this.state;

    return (
      <div className="App">
        <h2>Dog React</h2>
        <BreedSelector value={breed} onChange={this.handleChange} />
        <div>
          You are viewing images for <span className="breed">{breed}</span>
        </div>
        <BreedViewer breed={breed} />
        <div className="footer">
          <a href="https://dog.ceo/dog-api/">Check out the Dog API</a>
        </div>
      </div>
    );
  }
}

export default App;
