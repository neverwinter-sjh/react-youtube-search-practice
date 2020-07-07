import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  handleInputChange = event => {
    this.setState({ term: event.target.value });
  };

  searchVideo = () => {
    this.props.searchVideo(this.state.term);
  };

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={this.handleInputChange} />
        <button type="button" onClick={this.searchVideo}>Search</button>
      </div>
    );
  }
}

export default SearchBar;