import React, { Component} from 'react';
import './DogViewer.css';

class DogViewer extends Component {
  constructor({ breed }) {
    super();

    this.state = {
      error: null,
      isLoaded: false,
      imgUrl: '',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getRandomImage();
  }

  cmpo

  getRandomImage() {
    fetch(`https://dog.ceo/api/breed/${this.props.breed}/images/random`)
    .then(res => res.json())
    .then(result =>
      this.setState({
        isLoaded: true,
        imgUrl: result.message
      })
    )
    .catch(error =>
      this.setState({
        isLoaded: true,
        error
      })
    );
  }

  handleClick(event) {
    this.getRandomImage();
  }

  render() {
    const { error, isLoaded, imgUrl } = this.state; 

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading ...</div>
    } else {
      return (
        <div className="DogViewer">
          <img src={imgUrl} alt="Good boy"/>
          <button onClick={this.handleClick}>Show more from this breed</button>
        </div>
      )
    }
  }
}

export default DogViewer;