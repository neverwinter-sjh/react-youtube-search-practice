import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  handleInputChange = event => {
    this.setState({ term: event.target.value });
  };

  handleKeyPress = event => {
    if (event.charCode == 13) {
      this.videoSearch();
    }
  };

  videoSearch = () => {
    this.props.videoSearch(this.state.term);
  };

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
        <button type="button" onClick={this.videoSearch}>Search</button>
      </div>
    );
  }
}

export default SearchBar;