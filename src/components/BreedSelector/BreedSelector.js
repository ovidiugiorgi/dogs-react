import React, { Component} from 'react';
import './BreedSelector.css'

class BreedSelector extends Component {
  constructor({ value, onChange }) {
    super();

    this.state = {
      error: null,
      isLoaded: false,
      breeds: [],
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list")
      .then(res => res.json())
      .then(result => 
          this.setState({
            isLoaded: true,
            breeds: result.message,
          })
      )
      .catch(error =>
        this.setState({
          isLoaded: true,
          error
        })
      );
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const { error, isLoaded, breeds } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading ...</div>
    } else {
      return (
        <div className="BreedSelector">
          <div>Choose a breed:</div>
          <select value={this.props.value} onChange={this.handleChange}>
            {breeds.map(breed => (
              <option key={breed}>
                {breed}
              </option>
            ))}
          </select>
      </div>
      );
    }
  }
}

export default BreedSelector;