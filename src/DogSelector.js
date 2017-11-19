import React, { Component} from 'react';

class DogSelector extends Component {
  state = {
    error: null,
    isLoaded: false,
    breeds: [],
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

  render() {
    const { error, isLoaded, breeds } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading ...</div>
    } else {
      return (
        <ul>
          {breeds.map(breed => (
            <li key={breed}>
              {breed}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default DogSelector;